// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "./Listings.sol";

contract Escrow {
    enum ReservationStatus {
        Created,
        Completed,
        Cancelled
    }

    struct Reservation {
        uint listingId;
        address user;
        address landlord;
        ReservationStatus status;
        uint amount;
    }

    uint public nextReservationId;

    //mapping(uint => Escrow) public balances;
    mapping(uint => Reservation) public reservations;

    mapping(uint => Reservation[]) public listingReservations;
    mapping(address => Reservation[]) public userReservations;

    function createReservation(uint _listingId) external payable {
        require(msg.value > 0, "Amount must be bigger than 0");

        reservations[nextReservationId].user = msg.sender;
        reservations[nextReservationId].listingId = _listingId;
        reservations[nextReservationId].status = ReservationStatus.Created;
        reservations[nextReservationId].amount = msg.value;

        listingReservations[_listingId].push(reservations[nextReservationId]);
        userReservations[msg.sender].push(reservations[nextReservationId]);

        nextReservationId++;
    }

    function completeReservation(uint _reservationId) external {
        Reservation storage reservation = reservations[_reservationId];

        require(
            reservation.status == ReservationStatus.Created,
            "This reservation cannot be completed"
        );

        reservation.status = ReservationStatus.Completed;

        //release funds to landlord
        sendFundsToLandlord(_reservationId);
    }

    function cancelReservation(uint _reservationId) public {
        require(
            msg.sender == reservations[_reservationId].user,
            "You did not make this reservation"
        );
        Reservation storage reservation = reservations[_reservationId];
        reservation.status = ReservationStatus.Cancelled;

        refundUser(_reservationId);
    }

    function sendFundsToLandlord(uint _reservationId) internal {
        Reservation storage reservation = reservations[_reservationId];

        address payable landlord = payable(reservation.landlord);
        landlord.transfer(reservation.amount);
    }

    function refundUser(uint _reservationId) internal {
        Reservation storage reservation = reservations[_reservationId];

        address payable user = payable(reservation.user);
        user.transfer(reservation.amount);
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
