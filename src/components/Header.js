import { ethers } from 'ethers';
import { Link } from 'react-router-dom';
import './nav.css';

const Header = ({ account, setAccount }) => {
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

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <a href="#" style={{ color: "#fff" }}>Booking.com</a>
        </div>
        <div className="navbar-right">
          <span>RON</span>
          <div className="circle"><img src="https://www.countryflags.io/US/shiny/64.png"/></div>
          <div className="circle"><span>?</span></div>
          <a href="#" style={{ color: "#fff" }}>List your property</a>
          <button className="white-button" style={{ fontSize: "0.6em" }}>Register</button>
          { account ? (
            <button className="white-button" style={{ fontSize: "0.6em" }}>{account.slice(0, 6) + '...' + account.slice(38,42)}</button>) :
            (<button className="white-button" onClick={connectHandler} style={{ fontSize: "0.6em" }}>Sign In</button>
          )}
        </div>
      </nav>

      <div className="buttons">
        <div className="button-container">
          <button className="rounded-button" style={{ fontSize: "0.8em" }}>Stays</button>
          <button className="rounded-button" style={{ fontSize: "0.8em" }}>Flights</button>
          <button className="rounded-button" style={{ fontSize: "0.8em" }}>Flight + Hotel</button>
          <button className="rounded-button" style={{ fontSize: "0.8em" }}>Car rentals</button>
          <button className="rounded-button" style={{ fontSize: "0.8em" }}>Attractions</button>
          <button className="rounded-button" style={{ fontSize: "0.8em" }}>Airport taxis</button>
        </div>
      </div>

      <div className="text-wrapper">
        <h2 style={{ fontSize: "2em", marginBottom: "0" }}>Find your next stay</h2>
        <p style={{ fontSize: "1em", marginTop: "0.5em" }}>
          Search deals on hotels, homes, and much more...
        </p>
      </div>
    </>
  );
};

export default Header;
