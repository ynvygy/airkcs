import './listings.css';
import MyMap from '../images/map.png';
import HotelOne from '../images/hotel1.jpeg';
import { useNavigate, useParams } from 'react-router-dom';
import { Buffer } from 'buffer';
import { create } from 'ipfs-http-client'
import { ethers, BigNumber } from 'ethers';
import React, { useEffect, useState } from 'react';

import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const projectId = process.env.REACT_APP_INFURA_API_KEY
const projectSecret = process.env.REACT_APP_INFURA_API_SECRET
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
const client = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  apiPath: '/api/v0',
  headers: {
    authorization: auth,
  }
})

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

const Listings = ({account}) => {
  const navigate = useNavigate();
  const [listings, setListings] = useState([]);
  const [listingIds, setListingIds] = useState([]);

  const getListings = async () => {
    const [listingIds, listings] = await listingsContract.getListings();
    console.log('da')
    setListings(listings)
    setListingIds(listingIds)
    console.log(listings);
    console.log(listingIds)
  };

  useEffect(() => {
    getListings();
  }, []);

  return (
    <div className='col-md-8 offset-md-2 mx-auto'>
      <div style={{ marginTop: '10px', fontSize: '0.8em', textAlign: 'left', width: "92%", marginLeft: "83px" }}>
        <span style={{ color: '#0071c2' }}>Home</span>
        <span> &gt; </span>
        <span style={{ color: '#0071c2' }}>United States of America</span>
        <span> &gt; </span>
        <span style={{ color: '#0071c2' }}>New York</span>
        <span> &gt; </span>
        <span style={{ color: 'grey' }}>Search results</span>
      </div>

      <div className="row" style={{marginTop: '20px', width: "92%", marginLeft: "70px"}}>
        <div className="col-md-3">
          <div className="search-container" style={{backgroundColor: "#febb02", paddingBottom: "20px", marginBottom: "10px" }}>
            <div className="input-group">
              <p style={{fontSize: '1.3em', textAlign: 'left', paddingTop: '15px', paddingLeft: '18px'}}>Search</p>
            </div>
            <div className="input-group">
              <label htmlFor="destination" style={{fontSize: '0.8em', textAlign: 'left', backgroundColor: 'transparent', paddingLeft: '18px'}}>Destination/property name:</label>
            </div>
            <div className="input-group" style={{alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', width: "85%", marginLeft: "18px"}}>
              <div className="forsvg" style={{paddingLeft: "3px"}}>
                <svg width="24" height="24" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: '1px', width: '30px', paddingLeft: "1px" }}>
                  <path d="M118.8 113.2l-31-31A4 4 0 0 0 85 81a44 44 0 1 0-4 4 4 4 0 0 0 1.2 2.8l31 31a4 4 0 0 0 5.6-5.7zM52 88a36 36 0 1 1 36-36 36 36 0 0 1-36 36z" fill="currentColor"/>
                </svg>
              </div>
              <input type="text" id="destination" style={{padding: "10px", height: '35px', width: '85%', border: 'none', fontSize: "0.85em"}} placeholder= "Inflation"/>
            </div>   
            <div className="input-group" style={{backgroundColor: "#febb02"}}>
              <label htmlFor="check-in" style={{fontSize: '0.8em', textAlign: 'left', paddingLeft: '18px'}}>Check-in date</label>
            </div>
            <div className="input-group" style={{alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', width: "85%", marginLeft: "18px"}}>
              <div className="forsvg" style={{paddingLeft: "3px"}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: '1px', width: '30px', paddingLeft: "1px" }}>
                  <path d="M22.502 13.5v8.25a.75.75 0 0 1-.75.75h-19.5a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v8.25zm1.5 0V5.25A2.25 2.25 0 0 0 21.752 3h-19.5a2.25 2.25 0 0 0-2.25 2.25v16.5A2.25 2.25 0 0 0 2.252 24h19.5a2.25 2.25 0 0 0 2.25-2.25V13.5zm-23.25-3h22.5a.75.75 0 0 0 0-1.5H.752a.75.75 0 0 0 0 1.5zM7.502 6V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0zm10.5 0V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0z" fill="currentColor"/>
                </svg>
              </div>
              <input type="text" id="check-in" style={{padding: "10px", height: '35px', width: '85%', border: 'none', fontSize: "0.85em"}} placeholder= "Saturday, July 1, 2023"/>
            </div>
            <div className="input-group" style={{backgroundColor: "#febb02"}}>
              <label htmlFor="check-out" style={{fontSize: '0.8em', textAlign: 'left', paddingLeft: '18px'}}>Check-out date</label>
            </div>
            <div className="input-group" style={{alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', width: "85%", marginLeft: "18px"}}>
              <div className="forsvg" style={{paddingLeft: "3px"}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: '1px', width: '30px', paddingLeft: "1px" }}>
                  <path d="M22.502 13.5v8.25a.75.75 0 0 1-.75.75h-19.5a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v8.25zm1.5 0V5.25A2.25 2.25 0 0 0 21.752 3h-19.5a2.25 2.25 0 0 0-2.25 2.25v16.5A2.25 2.25 0 0 0 2.252 24h19.5a2.25 2.25 0 0 0 2.25-2.25V13.5zm-23.25-3h22.5a.75.75 0 0 0 0-1.5H.752a.75.75 0 0 0 0 1.5zM7.502 6V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0zm10.5 0V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0z" fill="currentColor"/>
                </svg>
              </div>
              <input type="text" id="check-out" style={{padding: "10px", height: '35px', width: '85%', border: 'none', fontSize: "0.85em"}} placeholder= "Saturday, July 8, 2023"/>
            </div>
            <div className="input-group" style={{backgroundColor: "#febb02"}}>
              <label htmlFor="guests" style={{fontSize: '0.8em', textAlign: 'left', paddingLeft: '18px'}}>1 week stay</label>
            </div>
            <div className="input-group" style={{alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', width: "85%", marginLeft: "18px"}}>
              <div className="forsvg" style={{paddingLeft: "0px"}}>
              </div>
              <input type="text" id="guests" style={{padding: "0px", height: '35px', width: '90%', border: 'none', fontSize: "0.85em"}} placeholder= "2 adults - 0 children - 1 room"/>
            </div>
            <div className="input-group" style={{backgroundColor: "#febb02"}}>
              <label style={{ display: "flex", justifyContent: 'center', alignItems: "center", marginTop: "10px", fontSize: "0.8em",paddingLeft: '18px', marginBottom: "10px" }}>
                <input type="checkbox" style={{ borderRadius: "2px", fontSize: "0.05em", height: "15px" }} />
                <span>I'm traveling for work</span>
              </label>
            </div>
            <div className="input-group" style={{backgroundColor: "#febb02",alignItems: 'center', justifyContent: 'center'}}>
              <button style={{ backgroundColor: "#0071c2", color: "#fff", width: '86%', fontSize: "16px", height: "50px", border: 'none'}}>
                Search
              </button>
            </div>
          </div>
          <div className="filter-container" style={{backgroundColor: "white", marginBottom: "10px", paddingBottom: "20px"}}>
            <div style={{border: '1px solid #e7e7e7' }}>
              <p style={{fontSize: '1em', textAlign: 'left', paddingLeft: "9px", paddingTop: "10px", marginBottom: "10px"}}><strong>Filter by:</strong></p>
            </div>
            <div style={{padding: "10px", border: '1px solid #e7e7e7'}}>
              <p style={{fontSize: '0.9em', textAlign: 'left'}}><strong>Your budget (per night)</strong></p>
              <p style={{fontSize: '0.8em', textAlign: 'left'}}>Set your own budget</p>
              <label style={{ display: "flex", alignItems: "center", marginTop: "10px", fontSize: "0.8em", justifyContent: "space-between" }}>
                <input type="checkbox" style={{ borderRadius: "2px", marginRight: "8px", fontSize: "0.1em" }} />
                <span>US$0 - US$50</span>
                <span style={{ marginLeft: "auto", color: "grey" }}>0</span>
              </label>
              <label style={{ display: "flex", alignItems: "center", marginTop: "10px", fontSize: "0.8em", justifyContent: "space-between" }}>
                <input type="checkbox" style={{ borderRadius: "2px", marginRight: "8px", fontSize: "0.1em" }} />
                <span>US$50 - US$100</span>
                <span style={{ marginLeft: "auto", color: "grey" }}>0</span>
              </label>
              <label style={{ display: "flex", alignItems: "center", marginTop: "10px", fontSize: "0.8em", justifyContent: "space-between" }}>
                <input type="checkbox" style={{ borderRadius: "2px", marginRight: "8px", fontSize: "0.1em" }} />
                <span>US$100 - US$150</span>
                <span style={{ marginLeft: "auto", color: "grey" }}>0</span>
              </label>
              <label style={{ display: "flex", alignItems: "center", marginTop: "10px", fontSize: "0.8em", justifyContent: "space-between" }}>
                <input type="checkbox" style={{ borderRadius: "2px", marginRight: "8px", fontSize: "0.1em" }} />
                <span>US$150 - US$200</span>
                <span style={{ marginLeft: "auto", color: "grey" }}>0</span>
              </label>
              <label style={{ display: "flex", alignItems: "center", marginTop: "10px", fontSize: "0.8em", justifyContent: "space-between" }}>
                <input type="checkbox" style={{ borderRadius: "2px", marginRight: "8px", fontSize: "0.1em" }} />
                <span>US$200 +</span>
                <span style={{ marginLeft: "auto", color: "grey" }}>0</span>
              </label>
            </div>
            <div style={{padding: "10px", border: '1px solid #e7e7e7' }}>
              <p style={{fontSize: '0.8em', textAlign: 'left'}}>Popular Filters</p>
              <label style={{ display: "flex", alignItems: "center", marginTop: "10px", fontSize: "0.8em", justifyContent: "space-between" }}>
                <input type="checkbox" style={{ borderRadius: "2px", marginRight: "8px", fontSize: "0.1em" }} />
                <span>Vacation Homes</span>
                <span style={{ marginLeft: "auto", color: "grey" }}>0</span>
              </label>
              <label style={{ display: "flex", alignItems: "center", marginTop: "10px", fontSize: "0.8em", justifyContent: "space-between" }}>
                <input type="checkbox" style={{ borderRadius: "2px", marginRight: "8px", fontSize: "0.1em" }} />
                <span>Beachfront</span>
                <span style={{ marginLeft: "auto", color: "grey" }}>0</span>
              </label>
              <label style={{ display: "flex", alignItems: "center", marginTop: "10px", fontSize: "0.8em", justifyContent: "space-between" }}>
                <input type="checkbox" style={{ borderRadius: "2px", marginRight: "8px", fontSize: "0.1em" }} />
                <span>Breakfast Included</span>
                <span style={{ marginLeft: "auto", color: "grey" }}>0</span>
              </label>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-8" style={{paddingTop: "20px"}}>
              <p style={{fontSize: "1.45em", textAlign: 'left', marginBottom: '0px'}}><strong>Inflation: 3 properties found</strong></p>
              <p style={{fontSize: "1em", textAlign: 'left', paddingTop: "0px", color: "gray"}}> + 6 properties around Solotvyno </p>
            </div>
            <div className="col-md-4" style={{height: "120px", width: "30%", margin: "auto"}}>
              <div style={{ 
                  border: "1px solid #e8e8e8",
                  borderRadius: "5px",
                  padding: "25px",
                  width: "80%",
                  height: "70%",
                  backgroundImage: `url(${MyMap})`, 
                  backgroundSize: 'cover',
                  boxShadow: "50 50 5px rgba(0,0,5,0.5)",
                  marginLeft: "65px"
                }}>
                <button style={{ backgroundColor: "#0071c2", color: "#fff", width: '80%', fontSize: "14px", height: "30px", border: 'none'}}>
                  Show on Map
                </button>
              </div>
            </div>
          </div>
          <div className="button">
            <div className="button-container" style={{ fontSize: "0.85em" }}>
              <a href="#" className="left-button" style={{ fontSize: "1em", textDecoration: 'none', display: 'flex' }}>
                Sort by: Top picks for long stays
              
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: '10px', width: '28px', fill: "#0071c2", strokeWidth: "10px", marginLeft: "10px", paddingBottom: "3px" }}>
                <path d="M12 20.09a1.24 1.24 0 0 1-.88-.36L6 14.61a.75.75 0 1 1 1.06-1.06L12 18.49l4.94-4.94A.75.75 0 0 1 18 14.61l-5.12 5.12a1.24 1.24 0 0 1-.88.36zm6-9.46a.75.75 0 0 0 0-1.06l-5.12-5.11a1.24 1.24 0 0 0-1.754-.006l-.006.006L6 9.57a.75.75 0 0 0 0 1.06.74.74 0 0 0 1.06 0L12 5.7l4.94 4.93a.73.73 0 0 0 .53.22c.2 0 .39-.078.53-.22z"/>
              </svg>
              </a>
            </div>
        </div>
          <div>

            <div style={{ 
              border: "1px solid black",
              borderRadius: "7px",
              padding: "7px",
              width: "100%",
              backgroundSize: 'cover',
              backgroundColor: "#f2f2f2",
              boxShadow: "50 50 5px rgba(0,0,5,0.5)",
              textAlign: "left",
              fontSize: "0.87em",
              marginTop: "10px",
              marginBottom: "15px",
              paddingLeft: "5px"
            }}>Commission paid and other benefits may affect an accommodation's ranking. Learn more.</div>
          </div>
          <div className="row" style={{border: "1px solid #c6c6c6", borderRadius: "7px", marginBottom: '15px'}}>
            <div className="col-md-3" style={{width: "28%"}}>
              <div className="for-image" style={{backgroundImage: `url(${HotelOne})`, height: "190px", margin: "10px", borderRadius: "5px"}}>
                <svg width="24" height="24" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: '10px', width: '35px', fill: "none", stroke: "white", strokeWidth: "10px", marginLeft: "160px", marginTop: "5px" }}>
                  <path d="M64 112a3.6 3.6 0 0 1-2-.5 138.8 138.8 0 0 1-44.2-38c-10-14.4-10.6-26-9.4-33.2a29 29 0 0 1 22.9-23.7c11.9-2.4 24 2.5 32.7 13a33.7 33.7 0 0 1 32.7-13 29 29 0 0 1 22.8 23.7c1.3 7.2.6 18.8-9.3 33.3-9.1 13.1-24 25.9-44.2 37.9a3.6 3.6 0 0 1-2 .5z"/>
                </svg>
              </div>
            </div>
            <div className="col-md-7" style={{width: "50%", paddingLeft: "0px"}}>
              <div className="hotel-text" style={{margin: "10px", textAlign: 'left'}}>
                <a href="#" onClick={() => navigate('/joins')}><h5 style={{color: "#0071c2", display: 'inline-block', paddingRight: "10px"}} onMouseOver={(e) => e.target.style.color = 'black'} onMouseOut={(e) => e.target.style.color = '#0071c2'}>Hotel Poje</h5></a>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '15px', fill: "white" }}>
                  <path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z" fill="#ffb700"/>
                </svg>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '15px', fill: "white" }}>
                  <path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z" fill="#ffb700"/>
                </svg>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '15px', fill: "white" }}>
                  <path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z" fill="#ffb700"/>
                </svg>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '15px', fill: "white" }}>
                  <path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z" fill="#ffb700"/>
                </svg>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '15px', fill: "white" }}>
                  <path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z" fill="#ffb700"/>
                </svg>
                <svg width="13" height="13" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '15px', fill: "white" }}>
                  <path d="M112 8H16a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8V16a8 8 0 0 0-8-8zM48 96H24V58h24zm56-25a8.7 8.7 0 0 1-2 6 8.9 8.9 0 0 1 1 4 6.9 6.9 0 0 1-5 7c-.5 4-4.8 8-9 8H56V58l10.3-23.3a5.4 5.4 0 0 1 10.1 2.7 10.3 10.3 0 0 1-.6 2.7L72 52h23c4.5 0 9 3.5 9 8a9.2 9.2 0 0 1-2 5.3 7.5 7.5 0 0 1 2 5.7z" fill="#ffb700"/>
                </svg>
                <br/>
                <p style={{color: "#0071c2", fontSize: "0.8em", marginRight: "10px", display: 'inline-block', fontWeight: "bold", textDecoration: "underline" }}>Inflation City Center, Inflation</p><p style={{color: "#0071c2", fontSize: "0.8em", display: 'inline-block', marginRight: "10px", fontWeight: "bold", textDecoration: "underline" }}>Show on map</p><p style={{fontSize: "0.8em", display: 'inline-block'}}>100 m from center</p>
                <div style={{borderLeft: "2px solid #e2e2e2", paddingLeft: "10px", marginTop: "10px", marginLeft: "10px"}}>
                  <p style={{fontSize: "0.8em", fontWeight: "bold", margin: "0px"}}>Economy Double Room</p>
                  <p style={{fontSize: "0.8em", margin: "0px"}}>1 full bed</p>
                  <p style={{fontSize: "0.8em",color: "#108940", fontWeight: "bold", margin: "0px"}}>Free cancellation</p>
                  <p style={{fontSize: "0.8em",color: "#108940", margin: "0px"}}>You can cancel later, so lock in this great price today!</p>
                  <p style={{fontSize: "0.8em",color: "#d4111e", margin: "0px"}}>Only 1 room left at this price on our site</p>
                </div>
              </div>
            </div>
            <div className="col-md-2" style={{width: "22%"}}>
              <div className="row">
                <div style={{width: "75%", paddingTop: "15px"}}>
                  <p style={{fontSize: "1em", marginBottom: "0px", textAlign: "right" }}>Excellent</p>
                  <p style={{fontSize: "0.8em", textAlign: "right", marginBottom: "0px"}}>1,337 reviews</p>
                </div>
                <div col-md-1 style={{width: "20%", backgroundColor: "#003b95", margin: "1px", borderRadius: "7px 7px 7px 0", marginTop: "18px", paddingLeft: "7px", paddingTop: "5px"}}>
                  <p style={{color: 'white', marginBottom: "10px"}}>9.9</p>
                </div>
                <p style={{color: "#0071c2", fontWeight: "bold", textAlign: "right", fontSize: "0.9em"}}>Comfort 9.9</p>
              </div>
              
              <div style={{textAlign: "right"}}>
                <p style={{marginBottom: "0px", fontSize: "0.8em"}}>1 week, 2 adults</p>
                <p style={{marginBottom: "0px"}}>1.337 ETH</p>
                <p style={{marginBottom: "0px", fontSize: "0.8em"}}>includes taxes and fees</p>
                <div className="input-group" style={{alignItems: 'right', justifyContent: 'right', marginTop: "10px", marginBottom: "10px"}}>
                  <button style={{ backgroundColor: "#0071c2", color: "#fff", width: '86%', fontSize: "16px", height: "40px", borderRadius: '5px', border: 'none'}}>
                    <p style={{fontSize: "0.9em", padding: "5px"}}>See availability</p>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row" style={{border: "1px solid #c6c6c6", borderRadius: "7px", marginBottom: '15px'}}>
            <div className="col-md-3" style={{width: "28%"}}>
              <div className="for-image" style={{backgroundImage: `url(${HotelOne})`, height: "190px", margin: "10px", borderRadius: "5px"}}>
                <svg width="24" height="24" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: '10px', width: '35px', fill: "none", stroke: "white", strokeWidth: "10px", marginLeft: "160px", marginTop: "5px" }}>
                  <path d="M64 112a3.6 3.6 0 0 1-2-.5 138.8 138.8 0 0 1-44.2-38c-10-14.4-10.6-26-9.4-33.2a29 29 0 0 1 22.9-23.7c11.9-2.4 24 2.5 32.7 13a33.7 33.7 0 0 1 32.7-13 29 29 0 0 1 22.8 23.7c1.3 7.2.6 18.8-9.3 33.3-9.1 13.1-24 25.9-44.2 37.9a3.6 3.6 0 0 1-2 .5z"/>
                </svg>
              </div>
            </div>
            <div className="col-md-7" style={{width: "50%", paddingLeft: "0px"}}>
              <div className="hotel-text" style={{margin: "10px", textAlign: 'left'}}>
                <h5 style={{color: "#0071c2", display: 'inline-block', paddingRight: "10px"}}>Hotel Poje</h5>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '15px', fill: "white" }}>
                  <path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z" fill="#ffb700"/>
                </svg>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '15px', fill: "white" }}>
                  <path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z" fill="#ffb700"/>
                </svg>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '15px', fill: "white" }}>
                  <path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z" fill="#ffb700"/>
                </svg>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '15px', fill: "white" }}>
                  <path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z" fill="#ffb700"/>
                </svg>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '15px', fill: "white" }}>
                  <path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z" fill="#ffb700"/>
                </svg>
                <svg width="13" height="13" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '15px', fill: "white" }}>
                  <path d="M112 8H16a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8V16a8 8 0 0 0-8-8zM48 96H24V58h24zm56-25a8.7 8.7 0 0 1-2 6 8.9 8.9 0 0 1 1 4 6.9 6.9 0 0 1-5 7c-.5 4-4.8 8-9 8H56V58l10.3-23.3a5.4 5.4 0 0 1 10.1 2.7 10.3 10.3 0 0 1-.6 2.7L72 52h23c4.5 0 9 3.5 9 8a9.2 9.2 0 0 1-2 5.3 7.5 7.5 0 0 1 2 5.7z" fill="#ffb700"/>
                </svg>
                <br/>
                <p style={{color: "#0071c2", fontSize: "0.8em", marginRight: "10px", display: 'inline-block', fontWeight: "bold", textDecoration: "underline" }}>Inflation City Center, Inflation</p><p style={{color: "#0071c2", fontSize: "0.8em", display: 'inline-block', marginRight: "10px", fontWeight: "bold", textDecoration: "underline" }}>Show on map</p><p style={{fontSize: "0.8em", display: 'inline-block'}}>100 m from center</p>
                <div style={{borderLeft: "2px solid #e2e2e2", paddingLeft: "10px", marginTop: "10px", marginLeft: "10px"}}>
                  <p style={{fontSize: "0.8em", fontWeight: "bold", margin: "0px"}}>Economy Double Room</p>
                  <p style={{fontSize: "0.8em", margin: "0px"}}>1 full bed</p>
                  <p style={{fontSize: "0.8em",color: "#108940", fontWeight: "bold", margin: "0px"}}>Free cancellation</p>
                  <p style={{fontSize: "0.8em",color: "#108940", margin: "0px"}}>You can cancel later, so lock in this great price today!</p>
                  <p style={{fontSize: "0.8em",color: "#d4111e", margin: "0px"}}>Only 1 room left at this price on our site</p>
                </div>
              </div>
            </div>
            <div className="col-md-2" style={{width: "22%"}}>
              <div className="row">
                <div style={{width: "75%", paddingTop: "15px"}}>
                  <p style={{fontSize: "1em", marginBottom: "0px", textAlign: "right" }}>Excellent</p>
                  <p style={{fontSize: "0.8em", textAlign: "right", marginBottom: "0px"}}>1,337 reviews</p>
                </div>
                <div col-md-1 style={{width: "20%", backgroundColor: "#003b95", margin: "1px", borderRadius: "7px 7px 7px 0", marginTop: "18px", paddingLeft: "7px", paddingTop: "5px"}}>
                  <p style={{color: 'white', marginBottom: "10px"}}>9.9</p>
                </div>
                <p style={{color: "#0071c2", fontWeight: "bold", textAlign: "right", fontSize: "0.9em"}}>Comfort 9.9</p>
              </div>
              
              <div style={{textAlign: "right"}}>
                <p style={{marginBottom: "0px", fontSize: "0.8em"}}>1 week, 2 adults</p>
                <p style={{marginBottom: "0px"}}>1.337 ETH</p>
                <p style={{marginBottom: "0px", fontSize: "0.8em"}}>includes taxes and fees</p>
                <div className="input-group" style={{alignItems: 'right', justifyContent: 'right', marginTop: "10px", marginBottom: "10px"}}>
                  <button style={{ backgroundColor: "#0071c2", color: "#fff", width: '86%', fontSize: "16px", height: "40px", borderRadius: '5px', border: 'none'}}>
                    <p style={{fontSize: "0.9em", padding: "5px"}}>See availability</p>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row" style={{border: "1px solid #c6c6c6", borderRadius: "7px", marginBottom: '15px'}}>
            <div className="col-md-3" style={{width: "28%"}}>
              <div className="for-image" style={{backgroundImage: `url(${HotelOne})`, height: "190px", margin: "10px", borderRadius: "5px"}}>
                <svg width="24" height="24" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: '10px', width: '35px', fill: "none", stroke: "white", strokeWidth: "10px", marginLeft: "160px", marginTop: "5px" }}>
                  <path d="M64 112a3.6 3.6 0 0 1-2-.5 138.8 138.8 0 0 1-44.2-38c-10-14.4-10.6-26-9.4-33.2a29 29 0 0 1 22.9-23.7c11.9-2.4 24 2.5 32.7 13a33.7 33.7 0 0 1 32.7-13 29 29 0 0 1 22.8 23.7c1.3 7.2.6 18.8-9.3 33.3-9.1 13.1-24 25.9-44.2 37.9a3.6 3.6 0 0 1-2 .5z"/>
                </svg>
              </div>
            </div>
            <div className="col-md-7" style={{width: "50%", paddingLeft: "0px"}}>
              <div className="hotel-text" style={{margin: "10px", textAlign: 'left'}}>
                <h5 style={{color: "#0071c2", display: 'inline-block', paddingRight: "10px"}}>Hotel Poje</h5>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '15px', fill: "white" }}>
                  <path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z" fill="#ffb700"/>
                </svg>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '15px', fill: "white" }}>
                  <path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z" fill="#ffb700"/>
                </svg>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '15px', fill: "white" }}>
                  <path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z" fill="#ffb700"/>
                </svg>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '15px', fill: "white" }}>
                  <path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z" fill="#ffb700"/>
                </svg>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '15px', fill: "white" }}>
                  <path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z" fill="#ffb700"/>
                </svg>
                <svg width="13" height="13" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '15px', fill: "white" }}>
                  <path d="M112 8H16a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8V16a8 8 0 0 0-8-8zM48 96H24V58h24zm56-25a8.7 8.7 0 0 1-2 6 8.9 8.9 0 0 1 1 4 6.9 6.9 0 0 1-5 7c-.5 4-4.8 8-9 8H56V58l10.3-23.3a5.4 5.4 0 0 1 10.1 2.7 10.3 10.3 0 0 1-.6 2.7L72 52h23c4.5 0 9 3.5 9 8a9.2 9.2 0 0 1-2 5.3 7.5 7.5 0 0 1 2 5.7z" fill="#ffb700"/>
                </svg>
                <br/>
                <p style={{color: "#0071c2", fontSize: "0.8em", marginRight: "10px", display: 'inline-block', fontWeight: "bold", textDecoration: "underline" }}>Inflation City Center, Inflation</p><p style={{color: "#0071c2", fontSize: "0.8em", display: 'inline-block', marginRight: "10px", fontWeight: "bold", textDecoration: "underline" }}>Show on map</p><p style={{fontSize: "0.8em", display: 'inline-block'}}>100 m from center</p>
                <div style={{borderLeft: "2px solid #e2e2e2", paddingLeft: "10px", marginTop: "10px", marginLeft: "10px"}}>
                  <p style={{fontSize: "0.8em", fontWeight: "bold", margin: "0px"}}>Economy Double Room</p>
                  <p style={{fontSize: "0.8em", margin: "0px"}}>1 full bed</p>
                  <p style={{fontSize: "0.8em",color: "#108940", fontWeight: "bold", margin: "0px"}}>Free cancellation</p>
                  <p style={{fontSize: "0.8em",color: "#108940", margin: "0px"}}>You can cancel later, so lock in this great price today!</p>
                  <p style={{fontSize: "0.8em",color: "#d4111e", margin: "0px"}}>Only 1 room left at this price on our site</p>
                </div>
              </div>
            </div>
            <div className="col-md-2" style={{width: "22%"}}>
              <div className="row">
                <div style={{width: "75%", paddingTop: "15px"}}>
                  <p style={{fontSize: "1em", marginBottom: "0px", textAlign: "right" }}>Excellent</p>
                  <p style={{fontSize: "0.8em", textAlign: "right", marginBottom: "0px"}}>1,337 reviews</p>
                </div>
                <div col-md-1 style={{width: "20%", backgroundColor: "#003b95", margin: "1px", borderRadius: "7px 7px 7px 0", marginTop: "18px", paddingLeft: "7px", paddingTop: "5px"}}>
                  <p style={{color: 'white', marginBottom: "10px"}}>9.9</p>
                </div>
                <p style={{color: "#0071c2", fontWeight: "bold", textAlign: "right", fontSize: "0.9em"}}>Comfort 9.9</p>
              </div>
              
              <div style={{textAlign: "right"}}>
                <p style={{marginBottom: "0px", fontSize: "0.8em"}}>1 week, 2 adults</p>
                <p style={{marginBottom: "0px"}}>1.337 ETH</p>
                <p style={{marginBottom: "0px", fontSize: "0.8em"}}>includes taxes and fees</p>
                <div className="input-group" style={{alignItems: 'right', justifyContent: 'right', marginTop: "10px", marginBottom: "10px"}}>
                  <button style={{ backgroundColor: "#0071c2", color: "#fff", width: '86%', fontSize: "16px", height: "40px", borderRadius: '5px', border: 'none'}}>
                    <p style={{fontSize: "0.9em", padding: "5px"}}>See availability</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p>Results Test</p>
      <Form.Group className="m-2 mt-4">
        <Button variant="success" onClick={getListings}>Get</Button>
      </Form.Group>
      <div>
        <h1>Listings</h1>
        <ul>
          {listings.map((listing, index) => (
            <li key={index}>
              <div className="row" style={{border: "1px solid #c6c6c6", borderRadius: "7px", marginBottom: '15px'}}>
                <div className="col-md-3" style={{width: "28%"}}>
                  <div className="for-image" style={{backgroundImage: `url(${listing.image})`, height: "190px", margin: "10px", borderRadius: "5px"}}>
                    <svg width="24" height="24" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: '10px', width: '35px', fill: "none", stroke: "white", strokeWidth: "10px", marginLeft: "160px", marginTop: "5px" }}>
                      <path d="M64 112a3.6 3.6 0 0 1-2-.5 138.8 138.8 0 0 1-44.2-38c-10-14.4-10.6-26-9.4-33.2a29 29 0 0 1 22.9-23.7c11.9-2.4 24 2.5 32.7 13a33.7 33.7 0 0 1 32.7-13 29 29 0 0 1 22.8 23.7c1.3 7.2.6 18.8-9.3 33.3-9.1 13.1-24 25.9-44.2 37.9a3.6 3.6 0 0 1-2 .5z"/>
                    </svg>
                  </div>
                </div>
                <div className="col-md-7" style={{width: "50%", paddingLeft: "0px"}}>
                  <div className="hotel-text" style={{margin: "10px", textAlign: 'left'}}>
                  <a href="#" onClick={() => navigate(`/listing/${listingIds[index]}`)}><h5 style={{color: "#0071c2", display: 'inline-block', paddingRight: "10px"}} onMouseOver={(e) => e.target.style.color = 'black'} onMouseOut={(e) => e.target.style.color = '#0071c2'}>{listing.name}}</h5></a>
                    { listings.stars}
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '15px', fill: "white" }}>
                      <path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z" fill="#ffb700"/>
                    </svg>
                    <svg width="13" height="13" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '15px', fill: "white" }}>
                      <path d="M112 8H16a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8V16a8 8 0 0 0-8-8zM48 96H24V58h24zm56-25a8.7 8.7 0 0 1-2 6 8.9 8.9 0 0 1 1 4 6.9 6.9 0 0 1-5 7c-.5 4-4.8 8-9 8H56V58l10.3-23.3a5.4 5.4 0 0 1 10.1 2.7 10.3 10.3 0 0 1-.6 2.7L72 52h23c4.5 0 9 3.5 9 8a9.2 9.2 0 0 1-2 5.3 7.5 7.5 0 0 1 2 5.7z" fill="#ffb700"/>
                    </svg>
                    <br/>
                    <p style={{color: "#0071c2", fontSize: "0.8em", marginRight: "10px", display: 'inline-block', fontWeight: "bold", textDecoration: "underline" }}>{listing.location}</p><p style={{color: "#0071c2", fontSize: "0.8em", display: 'inline-block', marginRight: "10px", fontWeight: "bold", textDecoration: "underline" }}>Show on map</p><p style={{fontSize: "0.8em", display: 'inline-block'}}>100 m from center</p>
                    <div style={{borderLeft: "2px solid #e2e2e2", paddingLeft: "10px", marginTop: "10px", marginLeft: "10px"}}>
                      <p style={{fontSize: "0.8em", fontWeight: "bold", margin: "0px"}}>Economy Double Room</p>
                      <p style={{fontSize: "0.8em", margin: "0px"}}>1 full bed</p>
                      <p style={{fontSize: "0.8em",color: "#108940", fontWeight: "bold", margin: "0px"}}>Free cancellation</p>
                      <p style={{fontSize: "0.8em",color: "#108940", margin: "0px"}}>You can cancel later, so lock in this great price today!</p>
                      <p style={{fontSize: "0.8em",color: "#d4111e", margin: "0px"}}>Only 1 room left at this price on our site</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2" style={{width: "22%"}}>
                  <div className="row">
                    <div style={{width: "75%", paddingTop: "15px"}}>
                      <p style={{fontSize: "1em", marginBottom: "0px", textAlign: "right" }}>Excellent</p>
                      <p style={{fontSize: "0.8em", textAlign: "right", marginBottom: "0px"}}>1,337 reviews</p>
                    </div>
                    <div col-md-1 style={{width: "20%", backgroundColor: "#003b95", margin: "1px", borderRadius: "7px 7px 7px 0", marginTop: "18px", paddingLeft: "7px", paddingTop: "5px"}}>
                      <p style={{color: 'white', marginBottom: "10px"}}>9.9</p>
                    </div>
                    <p style={{color: "#0071c2", fontWeight: "bold", textAlign: "right", fontSize: "0.9em"}}>Comfort 9.9</p>
                  </div>
                  
                  <div style={{textAlign: "right"}}>
                    <p style={{marginBottom: "0px", fontSize: "0.8em"}}>1 week, 2 adults</p>
                    <p style={{marginBottom: "0px"}}>{ethers.utils.formatEther(ethers.BigNumber.from(listing.price))} ETH</p>
                    <p style={{marginBottom: "0px", fontSize: "0.8em"}}>includes taxes and fees</p>
                    <div className="input-group" style={{alignItems: 'right', justifyContent: 'right', marginTop: "10px", marginBottom: "10px"}}>
                      <button style={{ backgroundColor: "#0071c2", color: "#fff", width: '86%', fontSize: "16px", height: "40px", borderRadius: '5px', border: 'none'}}>
                        <p style={{fontSize: "0.9em", padding: "5px"}}>See availability</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>              

            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Listings;