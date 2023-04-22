// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "./Escrow.sol";
import "./Listings.sol";
import "./Reservations.sol";

contract ReservationEscrowHolder {
    Reservations reservationsContract;
    Escrow escrowContract;
    address public reservationsContractAddress;
    address public escrowContractAddress;

    constructor(
        address _reservationsContractAddress,
        address payable _escrowContractAddress
    ) {
        reservationsContract = Reservations(_reservationsContractAddress);
        escrowContract = Escrow(_escrowContractAddress);
        reservationsContractAddress = _reservationsContractAddress;
        escrowContractAddress = _escrowContractAddress;
    }

    function createReservationAndEscrow(
        uint listingId,
        uint unixTimestampStart,
        uint unixTimestampEnd
    ) external payable {
        // check if listing is available
        // create a new reservation
        uint reservationId = reservationsContract.createReservation(
            listingId,
            unixTimestampStart,
            unixTimestampEnd,
            msg.value,
            msg.sender
        );
        // transfer value to the escrow contract - could be an event emitted later on
        escrowContract.depositEscrow{value: msg.value}(reservationId);
    }

    function cancelReservationAndRefund(uint listingId) external {
        reservationsContract.cancelReservation(listingId);
        escrowContract.releaseEscrow(listingId, payable(msg.sender));
    }

    // this is just a testing function
    function getContractAddresses() public view returns (address, address) {
        return (address(reservationsContract), address(escrowContract));
    }

    fallback() external payable {
        emit FallbackCalled(reservationsContractAddress, escrowContractAddress);
    }

    event FallbackCalled(address reservationsContract, address escrowContract);
}
