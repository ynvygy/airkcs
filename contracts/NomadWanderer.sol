// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract NomadWanderer {
  // Listings
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
        string memory name,
        uint stars,
        string memory image,
        uint price,
        string memory location,
        string memory description
    ) external {
        uint listingId = nextListingId;

        listings[listingId].name = name;
        listings[listingId].stars = stars;
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

    function getListings()
        public
        view
        returns (uint[] memory, Listing[] memory)
    {
        uint[] memory ids = new uint[](nextListingId);
        Listing[] memory result = new Listing[](nextListingId);

        for (uint i = 0; i < nextListingId; i++) {
            ids[i] = i;
            result[i] = listings[i];
        }

        return (ids, result);
    }

    function getLandlord(uint _listingId) public view returns (address) {
        return listings[_listingId].landlord;
    }

    // Reservations
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
        uint checkOutDate
    ) external payable {
        // Create a new reservation
        uint reservationId = reservationIdCounter;
        Reservation memory newReservation = Reservation(
            reservationId,
            listingId,
            msg.sender,
            ReservationStatus.Created,
            msg.value,
            checkInDate,
            checkOutDate
        );
        reservations.push(newReservation);

        reservationIdCounter++;
    }

    function cancelReservation(uint reservationId) external {
        reservations[reservationId].status = ReservationStatus.Cancelled;
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

    function isListingAvailable(
        uint listingId,
        uint checkInDate,
        uint checkOutDate
    ) internal view returns (bool) {
        // TODO: Implement listing availability check
        return true;
    }

    // Escrow

    // Reviews

    // Messages
}