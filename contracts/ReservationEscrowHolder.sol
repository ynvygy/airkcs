// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "./Escrow.sol";
import "./Listings.sol";
import "./Reservations.sol";
import "hardhat/console.sol";

interface IReservations {
    struct Reservation {
        uint id;
        uint listingId;
        address guest;
        ReservationStatus status;
        uint amount;
        uint checkInDate;
        uint checkOutDate;
    }

    enum ReservationStatus {
        Created,
        Completed,
        Cancelled
    }

    function createReservation(
        uint listingId,
        uint checkInDate,
        uint checkOutDate,
        uint amount,
        address guest
    ) external returns (uint);

    function cancelReservation(uint reservationId) external;

    function completeReservation(uint reservationId) external;

    function getReservation(
        uint reservationId
    ) external returns (Reservation memory);
}

interface IEscrow {
    function depositEscrow(uint reservationId) external payable;

    function releaseEscrow(
        uint reservationId,
        address payable recipient
    ) external;
}

interface IListings {
    struct Listing {
        string name;
        uint stars;
        string image;
        uint price;
        string location;
        string description;
        address landlord;
    }

    function getListing(uint listingId) external returns (Listing memory);
}

contract ReservationEscrowHolder {
    IReservations public reservations;
    IListings public listings;
    IEscrow public escrow;

    constructor(
        IReservations _reservations,
        IEscrow _escrow,
        IListings _listings
    ) {
        reservations = _reservations;
        escrow = _escrow;
        listings = _listings;
    }

    function createReservationAndEscrow(
        uint listingId,
        uint unixTimestampStart,
        uint unixTimestampEnd
    ) external payable {
        // check if listing is available
        // create a new reservation
        uint reservationId = reservations.createReservation(
            listingId,
            unixTimestampStart,
            unixTimestampEnd,
            msg.value,
            msg.sender
        );
        // transfer value to the escrow contract - could be an event emitted later on
        escrow.depositEscrow{value: msg.value}(reservationId);
    }

    function cancelReservationAndRefund(uint listingId) external {
        IReservations.Reservation memory getReservation = reservations
            .getReservation(listingId);
        console.log("block", block.timestamp);
        console.log("checkin", getReservation.checkInDate);
        require(
            block.timestamp < getReservation.checkInDate,
            "The reservation has already started"
        );
        require(msg.sender == getReservation.guest, "You are not the guest");
        reservations.cancelReservation(listingId);
        escrow.releaseEscrow(listingId, payable(msg.sender));
    }

    function completeReservationAndWithdraw(uint listingId) external {
        IReservations.Reservation memory getReservation = reservations
            .getReservation(listingId);
        require(
            block.timestamp > getReservation.checkOutDate,
            "The reservation has not ended yet"
        );
        IListings.Listing memory getListing = listings.getListing(listingId);
        reservations.completeReservation(listingId);
        escrow.releaseEscrow(listingId, payable(msg.sender));
    }

    // this is just a testing function
    function getContractAddresses() public view returns (address, address) {
        return (address(reservations), address(escrow));
    }

    event FallbackCalled(address reservationsContract, address escrowContract);
}
