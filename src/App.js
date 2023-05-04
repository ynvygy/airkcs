import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import './App.css';
import Nav from './components/Nav';
import NewListing from './components/NewListing';
import Listings from './components/Listings';
import Listing from './components/Listing';
import MainPage from './components/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reservations from './components/Reservations';

function App() {
  const [provider, setProvider] = useState(null)
  const [account, setAccount] = useState(null)
  const [user, setUser] = useState('guest');
  const [dateDifference, setDateDifference] = useState(0);
  const [searchQuery, setSearchQuery] = useState({
    location: '',
    startDate: null,
    endDate: null,
    guests: 2,
  });
  
  const handleSearch = (event) => {
    const { name, value } = event.target;
    setSearchQuery({ ...searchQuery, [name]: value });
  };

  function handleSwitchStatus() {
    setUser(user === 'guest' ? 'host' : 'guest');
  }

  const loadBlockchainData = async () => {
    // connect to blockchain
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    setProvider(provider)
  }
  console.log(searchQuery)
  useEffect(() => {
    loadBlockchainData()
  }, [])

  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Nav account={account} setAccount={setAccount} user={user} handleSwitchStatus={handleSwitchStatus} />
          <Routes>
            <Route exact path="/" element={<MainPage searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} dateDifference={dateDifference} setDateDifference={setDateDifference}/>} />
            <Route path="/joins" element={<NewListing account={account}/>} />
            {/*<Route path="/legacylistings" element={<LegacyListings /> } />
            <Route path="/legacylisting" element={<LegacyListing />} />*/}
            <Route path="/listings" element={<Listings searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} dateDifference={dateDifference} setDateDifference={setDateDifference}/> } />
            <Route path="/listing/:listingId" element={<Listing searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} dateDifference={dateDifference} setDateDifference={setDateDifference}/>} />
            <Route path="/myreservations" element={<Reservations />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
