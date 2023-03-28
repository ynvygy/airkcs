import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Tabs from './components/Tabs';
import NewOwner from './components/NewOwner';
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
      <BrowserRouter>
        <Header account={account} setAccount={setAccount} />
        <Tabs />
        <Search />
        <Routes>
          <Route path="/joins" element={<NewOwner />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
