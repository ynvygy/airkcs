import { useNavigate } from 'react-router-dom';
import './search.css';
import { ethers } from 'ethers';
import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Search = ({searchQuery, setSearchQuery, handleSearch, dateDifference, setDateDifference}) => {
  const navigate = useNavigate();
  const minDate = new Date();

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      setSearchQuery({...searchQuery, guests: (searchQuery.guests + 1)});
    } else if (e.key === 'ArrowDown' && searchQuery.guests > 1) {
      setSearchQuery({...searchQuery, guests: (searchQuery.guests - 1)});
    }
  };

  const ListingsABI = [
    "event ListingCreated(uint256 indexed id, uint256 price, string location, uint256 timestamp)",
    "event ListingRemoved(uint256 indexed id, uint256 timestamp)",
    "event ListingUpdated(uint256 indexed id, uint256 price, string location, uint256 timestamp)",
    "function createListing(string name, uint256 stars, string image, uint256 price, string location, string description)",
    "function getLandlord(uint256 _listingId) view returns (address)",
    "function getListing(uint256 _listingId) view returns (tuple(string name, uint256 stars, string image, uint256 price, string location, string description, address landlord))",
    "function getListings() view returns (uint256[], tuple(string name, uint256 stars, string image, uint256 price, string location, string description, address landlord)[])",
    "function listings(uint256) view returns (string name, uint256 stars, string image, uint256 price, string location, string description, address landlord)",
    "function nextListingId() view returns (uint256)",
    "function removeListing(uint256 _listingId)",
    "function updateListing(uint256 _listingId, string _image, uint256 _price, string _location, string _description)"
  ]
  
  const contractAddress = '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512';
  const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
  const signer = provider.getSigner();
  const listingsContract = new ethers.Contract(contractAddress, ListingsABI, signer);

  const [listings, setListings] = useState([]);

  const getListings = async () => {
    const [listingIds, listings] = await listingsContract.getListings();
    setListings(listings)
  };

  const handleStartDateChange = (date) => {
    setSearchQuery({...searchQuery, startDate: date});
  };

  const handleEndDateChange = (date) => {
    setSearchQuery({...searchQuery, endDate: date})
    if (searchQuery.startDate && searchQuery.endDate) {
      const differenceInMs = searchQuery.endDate.getTime() - searchQuery.startDate.getTime();
      const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
      setDateDifference(differenceInDays)
    }
  };

  useEffect(() => {
    if (searchQuery.startDate && searchQuery.endDate) {
      const differenceInMs = searchQuery.endDate.getTime() - searchQuery.startDate.getTime();
      const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
      setDateDifference(differenceInDays);
    }
  }, [searchQuery.startDate, searchQuery.endDate]);

  return (
    <>
      <div className="search-background">
        <div className='col-md-7 offset-md-2 mx-auto'>
          <div className="text-wrapper" style={{ color: "#fff" }}>
            <h2 style={{ fontSize: "3em", marginBottom: "0", fontWeight: "bold", paddingTop: "10px" }}>Find your dream holiday</h2>
            <p style={{ fontSize: "1.5em", marginTop: "0.5em", paddingBottom: "30px"}}>
              Explore affordable options for your next stay, from hotels to homes and more
            </p>
          </div>
          <form className="form-inline">
            <div style={{backgroundColor: '#3498DB', borderRadius: '2px', display: 'flex', alignItems: 'center', padding: '5px', height: '4vh'}}>
              <div style={{width: '26%', borderRadius: '3px', marginRight: '5px', display: 'flex', whiteSpace: 'nowrap', alignItems: 'center', backgroundColor: 'white'}}>
                <input type="text" style={{width: '100%', padding: '5px', borderRadius: '3px', marginRight: '5px', height: '3vh', border: 'none', outline: 'none', fontSize:"0.9em"}} defaultValue={searchQuery.location} onChange={(e) => setSearchQuery({...searchQuery, location: e.target.value})} placeholder="Where are you going?" />
              </div>
              <div style={{width: '49%', padding: '0px', borderRadius: '3px', marginRight: '5px', display: 'flex', whiteSpace: 'nowrap', alignItems: 'center', backgroundColor: 'white'}}>
                <DatePicker
                  selected={searchQuery.startDate}
                  onChange={(date) => handleStartDateChange(date)}
                  selectsStart
                  startDate={searchQuery.startDate}
                  endDate={searchQuery.endDate}
                  placeholderText="Check-in Date"
                  minDate={minDate}
                  style={{width: '50%'}}
                />
                <DatePicker
                  selected={searchQuery.endDate}
                  onChange={(date) => handleEndDateChange(date)}
                  selectsEnd
                  startDate={searchQuery.startDate}
                  endDate={searchQuery.endDate}
                  placeholderText="Check-out Date"
                  minDate={minDate}
                  style={{width: '50%'}}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ position: 'relative', width: '100px' }}>
                  Guests
                </div>
                <div style={{ position: 'relative', width: '100px' }}>
                  <input type="number" value={searchQuery.guests} onChange={(e) => setSearchQuery({...searchQuery, guests: e.target.value})} onKeyDown={handleKeyDown} style={{ width: '100%', textAlign: 'center', border: 'none', outline: 'none', fontWeight: 'bold' }} placeholder="Guests" />
                </div>
              </div>
              <button type="button" onClick={() => { navigate('/listings') } } style={{width: '10%', padding: '5px', backgroundColor: '#0071c2', color: 'white', borderRadius: '3px', height: '3.4vh', border: 'none', fontSize: "1em"}} onMouseOver={(e) => e.target.style.backgroundColor = '#003580'} onMouseOut={(e) => e.target.style.backgroundColor = '#0071c2'} >Search</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Search;