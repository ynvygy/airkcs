import { ethers } from 'ethers';
import { Link } from 'react-router-dom';
import UsaFlag from '../images/usa.png';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './nav.css';

const Nav = ({ account, setAccount }) => {
  const navigate = useNavigate();
  const connectHandler = async (event) => {
    try {
      event.preventDefault();
      const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});

      // Get the first account from the array of accounts
      const account = ethers.utils.getAddress(accounts[0])
  
      // Update the account state
      setAccount(account)
    } catch (error) {
      console.log(error)
    }
  }

  const disconnectHandler = () => {
    setAccount(null);
  };

  useEffect(() => {
    async function checkAccount() {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });

          if (accounts.length > 0) {
            const account = ethers.utils.getAddress(accounts[0]);
            setAccount(account);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }

    checkAccount();
  }, []);

  return (
    <>
      <div className="booking-background">
        <div className='col-md-7 offset-md-2 mx-auto'>
          <nav className="navbar">
            <div className="navbar-left">
              <a href="#" style={{ color: "#fff", marginLeft: "20px" }}>Booqueen</a>
            </div>
            <div className="navbar-right">
              <span style={{ paddingRight: "25px" }}>ETH</span>
              <span style={{ paddingRight: "25px" }}>English</span>
              <span style={{ paddingRight: "25px" }}>Help</span>
              <a href="#" onClick={() => navigate('/joins')} style={{ color: "#fff" }}>List your property</a>
              { account ? (
                <>
                  <a href="#" onClick={() => navigate('/myreservations')} style={{ color: "#fff" }}>Your reservations</a>
                  <a href="#" className="white-button" onClick={disconnectHandler} style={{ fontSize: "0.6em", textDecoration: "none", padding: "8px 10px" }}>
                    <span style={{ fontSize: "1.45em", color: "#006ce4" }}>{account.slice(0, 6) + '...' + account.slice(38,42)}</span>
                  </a>
                </>) :
                (
                <>
                  <a href="#" className="white-button" onClick={connectHandler} style={{ fontSize: "0.6em", textDecoration: "none", padding: "8px 10px" }}>
                    <span style={{ fontSize: "1.45em", color: "#006ce4" }}>Connect Metamask</span>
                  </a>
                </>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Nav;
