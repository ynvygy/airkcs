// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Escrows {
    uint nextEscrowId;
    struct Escrow {
        uint reservationId;
        address user;
        bool completed;
    }

    mapping(uint => Escrow) public escrows;

    function createEscrow(uint _reservationId) external {
        escrows[nextEscrowId].user = msg.sender;
        escrows[nextEscrowId].reservationId = _reservationId;

        nextEscrowId++;
    }

    function completeEscrow(uint _escrowId) public {
        escrows[_escrowId].completed = true;
    }

    function refundEscrow(uint _escrowId) public {}

    function getEscrow(uint _escrowId) public view returns (Escrow memory) {
        return escrows[_escrowId];
    }
}
