// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Escrow {
    mapping(uint => uint) public escrowBalances;

    function depositEscrow(uint reservationId) external payable {
        escrowBalances[reservationId] += msg.value;
    }

    // an alternative to releasing
    function releaseEscrow(
        uint reservationId,
        address payable recipient
    ) external {
        uint amount = escrowBalances[reservationId];
        require(amount > 0, "no escrow found for reservation ID");

        escrowBalances[reservationId] = 0;
        recipient.transfer(amount);
    }
}
