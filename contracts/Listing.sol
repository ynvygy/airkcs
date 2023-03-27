// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Listing {
    string public image;
    uint public price;
    string public location;
    string public description;
    address public owner;

    // Some structs for Bookings and Reviews - they might be contracts in the end

    constructor(
        string memory _image,
        uint _price,
        string memory _location,
        string memory _description
    ) {
        image = _image;
        price = _price;
        location = _location;
        description = _description;
        owner = msg.sender;
    }

    function getOwner() public {}
}
