// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "./Escrow.sol";
import "./Listings.sol";
import "./Reservations.sol";

interface IReservations {
    function createReservation(
        uint listingId,
        uint checkInDate,
        uint checkOutDate,
        uint amount,
        address guest
    ) external returns (uint);

    function cancelReservation(uint reservationId) external;
}

interface IEscrow {
    function depositEscrow(uint reservationId) external payable;

    function releaseEscrow(
        uint reservationId,
        address payable recipient
    ) external;
}

contract ReservationEscrowHolder {
    IReservations public reservations;
    IEscrow public escrow;

    constructor(IReservations _reservations, IEscrow _escrow) {
        reservations = _reservations;
        escrow = _escrow;
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
        reservations.cancelReservation(listingId);
        escrow.releaseEscrow(listingId, payable(msg.sender));
    }

    // this is just a testing function
    function getContractAddresses() public view returns (address, address) {
        return (address(reservations), address(escrow));
    }

    event FallbackCalled(address reservationsContract, address escrowContract);
}
