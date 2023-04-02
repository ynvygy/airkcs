import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Offers from './components/Offers';
import Tabs from './components/Tabs';
import NewOwner from './components/NewOwner';
import Listings from './components/Listings';
import Browse from './components/Browse';
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
          <Header account={account} setAccount={setAccount} />
          <Tabs />
          <Search />
          <Offers />
          <Browse />
          <Routes>
            <Route exact path="/" element={<NewOwner/>} />
            <Route path="/joins" element={<NewOwner/>} />
            <Route path="/listings" element={<Listings/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
