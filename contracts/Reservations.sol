// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "./Listings.sol";
import "./Escrow.sol";

contract Reservations {
    uint public reservationIdCounter;

    //Escrow escrowContract;

    constructor() {
        //constructor(address _escrowContract) {
        //escrowContract = Escrow(_escrowContract);
    }

    enum ReservationStatus {
        Created,
        Completed,
        Cancelled
    }

    struct Reservation {
        uint id;
        uint listingId;
        address guest;
        ReservationStatus status;
        uint amount;
        uint checkInDate;
        uint checkOutDate;
    }

    Reservation[] public reservations;

    modifier futureCheckinDate(uint _checkInDate) {
        require(
            _checkInDate > block.timestamp,
            "Check-in date must be in the future"
        );
        _;
    }

    modifier checkDatesOrder(uint _checkInDate, uint _checkOutDate) {
        require(
            _checkOutDate > _checkInDate,
            "Check-out date must be after check-in date"
        );
        _;
    }

    function createReservation(
        uint listingId,
        uint checkInDate,
        uint checkOutDate,
        uint amount
    ) external payable {
        // Create a new reservation
        uint reservationId = reservationIdCounter;
        Reservation memory newReservation = Reservation(
            reservationId,
            listingId,
            msg.sender,
            ReservationStatus.Created,
            amount,
            checkInDate,
            checkOutDate
        );
        reservations.push(newReservation);

        reservationIdCounter++;

        //escrowContract.createEscrow.value(amount)(
        //    reservationId,
        //    listingId,
        //    msg.sender
        //listingsContract.getListing(listingId).landlord
        //);
    }

    function getReservation(
        uint reservationId
    ) public view returns (Reservation memory) {
        require(
            reservationId < reservations.length,
            "Reservation does not exist"
        );
        return reservations[reservationId];
    }

    function getAllReservations() public view returns (Reservation[] memory) {
        return reservations;
    }

    function isListingAvailable(
        uint listingId,
        uint checkInDate,
        uint checkOutDate
    ) internal view returns (bool) {
        // TODO: Implement listing availability check
        return true;
    }
}
