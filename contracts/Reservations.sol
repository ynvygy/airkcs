// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Reservations {
    uint public reservationIdCounter;

    constructor() {}

    enum ReservationStatus {
        Created,
        Completed,
        Cancelled
    }

    event ReservationCreated(
        uint indexed reservationId,
        uint listingId,
        address guest,
        ReservationStatus status,
        uint amount,
        uint checkInDate,
        uint checkOutDate
    );

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
        uint amount,
        address guest
    ) external returns (uint) {
        // Create a new reservation
        uint reservationId = reservationIdCounter;
        Reservation memory newReservation = Reservation(
            reservationId,
            listingId,
            guest,
            ReservationStatus.Created,
            amount,
            checkInDate,
            checkOutDate
        );
        reservations.push(newReservation);

        reservationIdCounter++;

        emit ReservationCreated(
            newReservation.id,
            newReservation.listingId,
            newReservation.guest,
            newReservation.status,
            newReservation.amount,
            newReservation.checkInDate,
            newReservation.checkOutDate
        );

        return newReservation.id;
    }

    function cancelReservation(uint reservationId) external {
        reservations[reservationId].status = ReservationStatus.Cancelled;
    }

    function completeReservation(uint reservationId) external {
        reservations[reservationId].status = ReservationStatus.Completed;
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

    function getReservationsForListing(
        uint _listingId
    ) public view returns (Reservation[] memory) {
        Reservation[] memory listingReservations = new Reservation[](0);

        for (uint i = 0; i < reservations.length; i++) {
            Reservation memory reservation = reservations[i];
            if (reservation.listingId == _listingId) {
                listingReservations.push(reservation);
            }
        }

        return listingReservations;
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
