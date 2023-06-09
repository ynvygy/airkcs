// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "./Reservations.sol";

interface IReservations {
    struct Reservation {
        uint id;
        uint listingId;
        address guest;
        ReservationStatus status;
        uint amount;
        uint checkInDate;
        uint checkOutDate;
    }

    enum ReservationStatus {
        Created,
        Completed,
        Cancelled
    }

    function createReservation(
        uint listingId,
        uint checkInDate,
        uint checkOutDate,
        uint amount,
        address guest
    ) external returns (uint);

    function cancelReservation(uint reservationId) external;

    function completeReservation(uint reservationId) external;

    function getReservation(
        uint reservationId
    ) external returns (Reservation memory);
}

contract Listings {
    uint nextListingId;
    IReservations public reservations;

    constructor(IReservations _reservations) {
        reservations = _reservations;
    }

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

    function getAvailableListings(
        uint checkInDate,
        uint checkOutDate
    ) public view returns (Listing[] memory, uint) {
        Listing[] memory availableListings = new Listing[](0);
        uint numAvailableListings = 0;

        for (uint i = 0; i < listings.length; i++) {
            uint listingId = listings[i].id;
            bool isListingAvailable = true;
            IReservations.Reservation[] memory reservations = IReservations
                .getReservationsForListing(listingId);

            for (uint j = 0; j < reservations.length; j++) {
                IReservations.Reservation memory _reservation = reservations[j];
                if (_reservation.status != ReservationStatus.Canceled) {
                    if (
                        (checkInDate >= _reservation.checkInDate &&
                            checkInDate < _reservation.checkOutDate) ||
                        (checkOutDate > _reservation.checkInDate &&
                            checkOutDate <= _reservation.checkOutDate) ||
                        (checkInDate <= _reservation.checkInDate &&
                            checkOutDate >= _reservation.checkOutDate)
                    ) {
                        isListingAvailable = false;
                        break;
                    }
                }
            }

            if (isListingAvailable) {
                availableListings[numAvailableListings] = listings[i];
                numAvailableListings++;
            }
        }
        return (availableListings, numAvailableListings);
    }

    function getLandlord(uint _listingId) public view returns (address) {
        return listings[_listingId].landlord;
    }
}
