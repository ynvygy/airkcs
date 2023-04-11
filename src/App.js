import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import './App.css';
import Nav from './components/Nav';
import NewListing from './components/NewListing';
import Listings from './components/Listings';
import Listing from './components/Listing';
import LegacyListings from './components/LegacyListings';
import LegacyListing from './components/LegacyListing';
import MainPage from './components/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [provider, setProvider] = useState(null)
  const [account, setAccount] = useState(null)
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    console.log('da')
    setSearchQuery(event.target.value);
  };

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
          <Nav account={account} setAccount={setAccount} />
          <Routes>
            <Route exact path="/" element={<MainPage searchQuery={searchQuery} handleSearch={handleSearch}/>} />
            <Route path="/joins" element={<NewListing account={account}/>} />
            <Route path="/legacylistings" element={<LegacyListings /> } />
            <Route path="/listings" element={<Listings searchQuery={searchQuery} handleSearch={handleSearch} /> } />
            <Route path="/legacylisting" element={<LegacyListing />} />
            <Route path="/listing/:listingId" element={<Listing />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
