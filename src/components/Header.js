import { ethers } from 'ethers';
import { Link } from 'react-router-dom';

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
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <a className="navbar-brand" href="/">
            <img src="#" alt="Booqueen" />
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/joins">List your property</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Register
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Sign in
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                { account ? (
                  <button type="button">{account.slice(0, 6) + '...' + account.slice(38,42)}</button>) :
                  (<button type="button" onClick={connectHandler}>Connect</button>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;