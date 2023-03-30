// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Reservations {
    uint nextReservationId;

    struct Reservation {
        address user;
        uint listingId;
        bool cancelled;
    }

    mapping(uint => Reservation) public reservations;
    mapping(uint => Reservation[]) public listingReservations;
    mapping(address => Reservation[]) public userReservations;

    function createReservation(uint _listingId) external {
        reservations[nextReservationId].user = msg.sender;
        reservations[nextReservationId].listingId = _listingId;

        listingReservations[_listingId].push(reservations[nextReservationId]);
        userReservations[msg.sender].push(reservations[nextReservationId]);

        nextReservationId++;
    }

    function cancelReservation(uint _listingId) public {
        require(
            msg.sender == reservations[_listingId].user,
            "You did not make this reservation"
        );
        reservations[_listingId].cancelled = true;
    }

    function getReservation(
        uint _reservationId
    ) public view returns (Reservation memory) {
        return reservations[_reservationId];
    }

    function getReservationsForUser(
        address _userId
    ) public view returns (Reservation[] memory) {
        return userReservations[_userId];
    }

    function getReservationsForListing(
        uint _listingId
    ) public view returns (Reservation[] memory) {
        return listingReservations[_listingId];
    }
}
