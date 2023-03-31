// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Listings {
    uint nextListingId;

    struct Listing {
        string image;
        uint price;
        string location;
        string description;
        address landlord;
    }

    mapping(uint => Listing) public listings;

    modifier onlyLandlord(uint _listingId) {
        require(
            msg.sender == listings[_listingId].landlord,
            "you are not the landlord"
        );
        _;
    }

    function createListing(
        string memory image,
        uint price,
        string memory location,
        string memory description
    ) external {
        uint listingId = nextListingId;

        listings[listingId].image = image;
        listings[listingId].price = price;
        listings[listingId].location = location;
        listings[listingId].description = description;
        listings[listingId].landlord = msg.sender;

        nextListingId++;
    }

    function updateListing(
        uint _listingId,
        string memory _image,
        uint _price,
        string memory _location,
        string memory _description
    ) external onlyLandlord(_listingId) {
        listings[_listingId].image = _image;
        listings[_listingId].price = _price;
        listings[_listingId].location = _location;
        listings[_listingId].description = _description;
        listings[_listingId].landlord = msg.sender;
    }

    function removeListing(uint _listingId) external onlyLandlord(_listingId) {
        delete listings[_listingId];
    }

    function getListing(uint _listingId) public view returns (Listing memory) {
        return listings[_listingId];
    }

    function getLandlord(uint _listingId) public view returns (address) {
        return listings[_listingId].landlord;
    }
}
