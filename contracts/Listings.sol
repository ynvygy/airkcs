// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Listings {
    uint nextListingId;

    struct Listing {
        string name;
        uint stars;
        string image;
        uint price;
        string location;
        string description;
        address landlord;
    }

    mapping(uint => Listing) public listings;

    event ListingCreated(
        uint indexed id,
        uint price,
        string location,
        uint timestamp
    );
    event ListingUpdated(
        uint indexed id,
        uint price,
        string location,
        uint timestamp
    );
    event ListingRemoved(uint indexed id, uint timestamp);

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

        emit ListingCreated(nextListingId, price, location, block.timestamp);

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

        emit ListingUpdated(_listingId, _price, _location, block.timestamp);
    }

    function removeListing(uint _listingId) external onlyLandlord(_listingId) {
        delete listings[_listingId];

        emit ListingRemoved(_listingId, block.timestamp);
    }

    function getListing(uint _listingId) public view returns (Listing memory) {
        return listings[_listingId];
    }

    function getListings() public view returns (Listing[] memory) {
        Listing[] memory result = new Listing[](nextListingId);

        for (uint i = 0; i < nextListingId; i++) {
            result[i] = listings[i];
        }

        return result;
    }

    function getLandlord(uint _listingId) public view returns (address) {
        return listings[_listingId].landlord;
    }
}
