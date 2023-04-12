// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "./Listings.sol";

contract Reservations {
    uint public reservationIdCounter;

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

    function createReservation(
        uint listingId,
        uint checkInDate,
        uint checkOutDate
    ) public {
        require(
            checkInDate > block.timestamp,
            "Check-in date must be in the future"
        );
        require(
            checkOutDate > checkInDate,
            "Check-out date must be after check-in date"
        );

        // Check if the listing is available during the requested dates
        require(
            isListingAvailable(listingId, checkInDate, checkOutDate),
            "Listing is not available for the requested dates"
        );

        // Create a new reservation
        //uint reservationId = reservationIdCounter;
        //Reservation memory newReservation = Reservation(
        //   reservationId,
        //    listingId,
        //    msg.sender,
        //    checkInDate,
        //    checkOutDate
        //);
        //reservations.push(newReservation);

        // Increment the reservation ID counter
        //reservationIdCounter++;
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

    function isListingAvailable(
        uint listingId,
        uint checkInDate,
        uint checkOutDate
    ) internal view returns (bool) {
        // TODO: Implement listing availability check
        return true;
    }
}
