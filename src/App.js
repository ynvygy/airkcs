import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import './App.css';
import Nav from './components/Nav';
import NewListing from './components/NewListing';
import Listings from './components/Listings';
import Listing from './components/Listing';
import MainPage from './components/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [provider, setProvider] = useState(null)
  const [account, setAccount] = useState(null)

  const loadBlockchainData = async () => {
    // connect to blockchain
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    setProvider(provider)
  }

  useEffect(() => {
    loadBlockchainData()
  }, [])

  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Nav account={account} setAccount={setAccount} />
          <Routes>
            <Route exact path="/" element={<MainPage/>} />
            <Route path="/joins" element={<NewListing account={account}/>} />
            <Route path="/listings" element={<Listings/>} />
            <Route path="/listing" element={<Listing />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
