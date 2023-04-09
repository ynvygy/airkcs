import MyMap from '../images/map.png';
import HotelOne from '../images/hotel1.jpeg';
import Letter from '../images/letter.png';
import Swiss from '../images/swiss.png';
import Facilities from '../images/facilities.png'
import RoomOne from '../images/room1.png'
import RoomTwo from '../images/room2.png'
import People from '../images/people.png'
import Choices from '../images/choices.png'
import { ethers } from 'ethers';
import { useNavigate, useParams } from 'react-router-dom';

const Listing = ({account}) => {
  const { listingId } = useParams();
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  return (
    <>
      <div style={{backgroundColor: "#fef3ec", fontSize: "1em", fontWeight: "bold"}}>
        <div className='col-md-8 offset-md-2 mx-auto'>
          <div className="row" style={{textAlign: "left", marginLeft: "70px", paddingTop: "13px"}}>
            <div style={{width: "4%", textAlign: "left"}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', fill: "none"}}>
                <path d="M14.25 15.75h-.75a.75.75 0 0 1-.75-.75v-3.75a1.5 1.5 0 0 0-1.5-1.5h-.75a.75.75 0 0 0 0 1.5h.75V15a2.25 2.25 0 0 0 2.25 2.25h.75a.75.75 0 0 0 0-1.5zM11.625 6a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z" fill="#923e01"/>
              </svg>
            </div>
            <div style={{width: "90%", textAlign: "left", padding: "0px"}}>
              <p style={{padding: "0px", display: "inline-block"}}>Coronavirus (COVID-19) support </p>
            </div>
          </div>
        </div>
      </div>
      <div className='col-md-8 offset-md-2 mx-auto'>
        <div style={{ marginTop: '20px', fontSize: '0.8em', textAlign: 'left', width: "92%", marginLeft: "83px" }}>
          <div className="row">
            <div className="field1" style={{paddingTop: "10px", width: "4%"}}>
              <span style={{ color: '#0071c2'}}>Home</span>
            </div>
            <div className="field2" style={{width: "190px"}}>
              <span style={{marginRight: "8px"}}> &gt; </span>
              <span style={{ color: '#0071c2' }}>United States of America</span>
              <br/>
              <p style={{paddingLeft: "18px"}}>Hotels</p>
            </div>
            <div className="field3" style={{paddingLeft: "0px", width: "80px"}}>
              <span style={{marginRight: "8px"}}> &gt; </span>
              <span style={{ color: '#0071c2' }}>Inflation</span>
              <br/>
              <p style={{paddingLeft: "18px"}}>Hotels</p>
            </div>
            <div className="field4" style={{paddingLeft: "0px", width: "20px"}}>
              <span> &gt; </span>
            </div>
            <div className="field5" style={{paddingTop: "10px", paddingLeft: "0px", width: "500px"}}>
              <span style={{ color: 'black' }}>Hotel Pajo (Hotel), Inflation (United States of America) Deals</span>
            </div>
          </div>
        </div>
        <div className="row" style={{marginTop: '5px', width: "92%", marginLeft: "70px"}}>
          <div className="col-md-3" style={{paddingTop: "8px", backgroundColor: "#ebf3ff", borderRadius: "5px", height: "40px", width: "23%", marginLeft: "10px", marginRight: "5px"}}>
            <div className="row" style={{textAlign: "center", justifyContent: "center"}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '40px', fill: "none", stroke: "black", strokeWidth: "1px"}}>
                <path d="M.311 2.56v6.257a3.75 3.75 0 0 0 1.098 2.651l11.56 11.562a2.25 2.25 0 0 0 3.182 0l6.88-6.88a2.25 2.25 0 0 0 0-3.181L11.468 1.408A3.75 3.75 0 0 0 8.818.31H2.56a2.25 2.25 0 0 0-2.25 2.25zm1.5 0a.75.75 0 0 1 .75-.75h6.257a2.25 2.25 0 0 1 1.59.659l11.562 11.56a.75.75 0 0 1 0 1.06l-6.88 6.88a.75.75 0 0 1-1.06 0L2.47 10.409a2.25 2.25 0 0 1-.659-1.59V2.56zm5.25 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm1.5 0a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0z"/>
              </svg>
              <p style={{fontSize: "0.9em", width: "40%", padding: "0px"}}>We price match</p>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="with-width" style={{width: "17%", backgroundColor: "#ebf3ff", borderRadius: "5px", color: "#0071c2", height: "40px", paddingTop: "8px", marginRight: "2px"}}>
                <p style={{fontSize: "0.9em"}}>Info & prices</p>
              </div>
              <div className="with-width" style={{width: "17%", backgroundColor: "#ebf3ff", borderRadius: "5px", color: "#0071c2", height: "40px", paddingTop: "8px", marginRight: "2px"}}>
                <p style={{fontSize: "0.9em"}}>Facilities</p>
              </div>
              <div className="with-width" style={{width: "17%", backgroundColor: "#ebf3ff", borderRadius: "5px", color: "#0071c2", height: "40px", paddingTop: "8px", marginRight: "2px"}}>
                <p style={{fontSize: "0.9em"}}>House rules</p>
              </div>
              <div className="with-width" style={{width: "17%", backgroundColor: "#ebf3ff", borderRadius: "5px", color: "#0071c2", height: "40px", paddingTop: "8px", marginRight: "2px"}}>
                <p style={{fontSize: "0.9em"}}>The fine print</p>
              </div>
              <div className="with-width" style={{width: "25%", backgroundColor: "#ebf3ff", borderRadius: "5px", color: "#0071c2", height: "40px", paddingTop: "8px"}}>
                <p style={{fontSize: "0.9em"}}>Guest reviews (1,337)</p>
              </div>
            </div>
          </div>
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
            <div className="map-container" style={{backgroundColor: "white", marginBottom: "10px", paddingBottom: "20px"}}>
              <div className="col-md-4" style={{height: "160px", width: "100%", margin: "auto"}}>
                <div style={{ 
                    border: "1px solid #e8e8e8",
                    borderRadius: "5px",
                    padding: "45px",
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${MyMap})`, 
                    backgroundSize: 'cover',
                    boxShadow: "50 50 5px rgba(0,0,5,0.5)"
                  }}>
                  <button style={{ backgroundColor: "#0071c2", color: "#fff", width: '80%', fontSize: "14px", height: "40px", border: 'none', marginTop: "25px"}}>
                    Show on Map
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="reserve-map" style={{width: "70%", padding: "0px"}}>
                <div style={{color: "white", textAlign: "left"}}>
                  <div style={{ backgroundColor: "#8c8c8c",width: "6%", height: "22px", display: "inline-block", borderRadius: "3px", marginRight: "5px" }}>
                    <p style={{fontSize: "0.8em", paddingLeft: "2px"}}>Hotel</p>
                  </div>
                  <div style={{ width: "15%", height: "22px", display: "inline-block" }}>
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
                  </div>
                </div>
                <div style={{textAlign: "left"}}>
                  <h4><strong>Hotel Poje</strong></h4>
                  <svg style={{fill: "#0071c2"}} width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                  <p style={{fontSize: "0.93em", letterSpacing: "-0.3px", display: 'inline-block'}}>1 Inflated Avenue, 8055 Inflation, United States of America -</p><p style={{fontSize: "0.9em", letterSpacing: "-0.3px", display: 'inline-block', color: "#0071c2", fontWeight: "bold", marginLeft: "2px"}}> Great location - show map</p>
                 </div>
              </div>
              <div className="reserve-map" style={{width: "30%"}}>
                <div className="row">
                  <div className="col-md-2" style={{paddingTop: "3px"}}>
                    <svg width="24" height="24" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '35px', fill: "none", stroke: "#0071c2", strokeWidth: "10px"}}>
                      <path d="M64 112a3.6 3.6 0 0 1-2-.5 138.8 138.8 0 0 1-44.2-38c-10-14.4-10.6-26-9.4-33.2a29 29 0 0 1 22.9-23.7c11.9-2.4 24 2.5 32.7 13a33.7 33.7 0 0 1 32.7-13 29 29 0 0 1 22.8 23.7c1.3 7.2.6 18.8-9.3 33.3-9.1 13.1-24 25.9-44.2 37.9a3.6 3.6 0 0 1-2 .5z"/>
                    </svg>
                  </div>
                  <div className="col-md-2" style={{paddingTop: "3px"}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '35px', fill: "#0071c2", stroke: "#0071c2", strokeWidth: "1px"}}>
                      <path d="M8.25 11.25a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm1.5 0a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0zm12-5.25a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm1.5 0a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0zm-1.5 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm1.5 0a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0zM9.018 10.59l6.508-2.531a.75.75 0 0 0-.544-1.398L8.474 9.192a.75.75 0 1 0 .544 1.398zm-.748 3.009l6.79 3.395a.75.75 0 1 0 .67-1.342l-6.79-3.395a.75.75 0 1 0-.67 1.342z"/>
                    </svg>
                  </div>
                  <div className="col-md-6">
                    <button style={{ paddingLeft: "0px", backgroundColor: "#0071c2", color: "#fff", width: '85%', fontSize: "14px", height: "35px", border: 'none', borderRadius: "5px", paddingTop: "4px"}}>
                      <p style={{fontSize: "1.1em"}}>Reserve</p>
                    </button>
                  </div>
                </div>
                <div className="col-md-3" style={{paddingTop: "8px", backgroundColor: "white", borderRadius: "5px", height: "40px", width: "100%", marginRight: "5px"}}>
                  <div className="row" style={{textAlign: "center", justifyContent: "center"}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '40px', fill: "none", stroke: "black", strokeWidth: "1px"}}>
                      <path d="M.311 2.56v6.257a3.75 3.75 0 0 0 1.098 2.651l11.56 11.562a2.25 2.25 0 0 0 3.182 0l6.88-6.88a2.25 2.25 0 0 0 0-3.181L11.468 1.408A3.75 3.75 0 0 0 8.818.31H2.56a2.25 2.25 0 0 0-2.25 2.25zm1.5 0a.75.75 0 0 1 .75-.75h6.257a2.25 2.25 0 0 1 1.59.659l11.562 11.56a.75.75 0 0 1 0 1.06l-6.88 6.88a.75.75 0 0 1-1.06 0L2.47 10.409a2.25 2.25 0 0 1-.659-1.59V2.56zm5.25 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm1.5 0a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0z"/>
                    </svg>
                    <p style={{fontSize: "0.88em", width: "40%", padding: "0px", marginRight:"20px"}}>We price match</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="leftphotos" style={{width: "28%"}}>
                <div className="for-image" style={{backgroundImage: `url(${HotelOne})`, height: "166px", marginTop: "7px", borderRadius: "5px", backgroundSize: "cover", paddingLeft: "0px"}}>
                </div>
                <div className="for-image" style={{backgroundImage: `url(${HotelOne})`, height: "166px", marginTop: "7px", borderRadius: "5px", backgroundSize: "cover", paddingLeft: "0px"}}>
                </div>
              </div>
              <div className="rightphotos" style={{width: "72%", paddingLeft: "0px", paddingRight: "55px"}}>
                <div className="for-image" style={{backgroundImage: `url(${HotelOne})`, height: "340px", marginTop: "7px", borderRadius: "5px", backgroundSize: "cover"}}>
                  <div className="row">
                    <div className="col-md-5" style={{marginTop: "10px", marginLeft: "325px"}}>
                      <div style={{backgroundColor: 'white', borderRadius: "3px"}}>
                        <div className="col-md-2" style={{width: "100%"}}>
                          <div className="row">
                            <div style={{width: "75%", paddingTop: "5px"}}>
                              <p style={{fontSize: "0.9em", marginBottom: "0px", textAlign: "right" }}>Excellent</p>
                              <p style={{fontSize: "0.76em", textAlign: "right", marginBottom: "0px"}}>1,337 reviews</p>
                            </div>
                            <div col-m-1 style={{width: "15%", backgroundColor: "#003b95", margin: "1px", borderRadius: "7px 7px 7px 0", marginTop: "8px", paddingLeft: "7px", marginBottom: "8px"}}>
                              <p style={{color: 'white', marginBottom: "10px"}}>9.9</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5" style={{marginTop: "10px", marginLeft: "325px"}}>
                      <div style={{backgroundColor: 'white', borderRadius: "3px"}}>
                      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"/></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg>
                      */}
                        <div className="row" style={{backgroundColor: '#ebf3ff', margin: "0px"}}>
                          <p style={{fontSize: "0.75em", textAlign: "left", marginTop: "5px"}}>Great place to spend money. I don't remember being so happy to max out my credit card. But it was worth every penny that i don't have anymore. You only live once !</p>
                        </div>
                        <div className="row" style={{paddingBottom: "0px", paddingTop: "3px"}}>
                          <div className="col-md-1"
                            style={{ 
                              border: "1px solid #e8e8e8",
                              borderRadius: "50px",
                              padding: "12px",
                              paddingRight: "12px",
                              marginLeft: "20px",
                              width: "1px",
                              height: "1px",
                              backgroundImage: `url(${Letter})`, 
                              backgroundSize: 'cover'  
                            }}>
                          </div>
                          <div className="col-md-2" style={{paddingLeft: "6px"}}>
                            <p style={{fontSize:"0.8em", marginTop: "3px", marginBottom: "10px"}}>Emily</p>
                          </div>
                          <div className="col-md-1"
                            style={{
                              marginTop: "6px", 
                              border: "1px solid #e8e8e8",
                              padding: "5px",
                              paddingLeft: "10px",
                              width: "1%",
                              height: "1%",
                              backgroundImage: `url(${Swiss})`, 
                              backgroundSize: 'cover'  
                            }}>
                          </div>
                          <div className="col-md-4" style={{paddingLeft: "6px"}}>
                            <p style={{fontSize:"0.8em", marginTop: "3px", marginBottom: "10px"}}>Switzerland</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5" style={{marginTop: "10px", marginLeft: "325px"}}>
                      <div className="row" style={{backgroundColor: 'white', borderRadius: "3px", marginLeft: "0px", marginRight: "0px"}}>
                        <div className="col-md-9">
                          <strong><p style={{fontSize: "0.88em", textAlign: "left", marginTop: "15px", width:"100%", marginBottom: "2px"}}>Excellent location!</p></strong>
                        </div>
                        <div className="col-md-3" style={{paddingLeft: "4px", paddingRight: "18px"}}>
                          <div col-m-1 style={{paddingTop: "7px", width: "115%", height:"38px", backgroundColor: "white", margin: "3px", borderRadius: "7px 7px 7px 0", marginTop: "8px", marginBottom: "8px", border: "1px solid black"}}>
                            <p style={{color: 'black', marginBottom: "10px"}}>9.9</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div style={{ 
                display: "flex",
                justifyContent: "space-between",
                paddingLeft: "12px",
                paddingTop: "5px",
                paddingRight: "52px"
              }}>
                <div style={{ 
                  border: "1px solid #e8e8e8",
                  borderRadius: "8px",
                  padding: "0px",
                  width: "19%",
                  backgroundImage: `url(${HotelOne})`, 
                  backgroundSize: 'cover',
                  height: "110px"
                }}>
                </div>
                <div style={{ 
                  border: "1px solid #e8e8e8",
                  borderRadius: "8px",
                  padding: "0px",
                  width: "19%",
                  backgroundImage: `url(${HotelOne})`, 
                  backgroundSize: 'cover',
                  height: "110px"
                }}>
                </div>
                <div style={{ 
                  border: "1px solid #e8e8e8",
                  borderRadius: "8px",
                  padding: "0px",
                  width: "19%",
                  backgroundImage: `url(${HotelOne})`, 
                  backgroundSize: 'cover',
                  height: "110px"
                }}>
                </div>
                <div style={{ 
                  border: "1px solid #e8e8e8",
                  borderRadius: "8px",
                  padding: "0px",
                  width: "19%",
                  backgroundImage: `url(${HotelOne})`, 
                  backgroundSize: 'cover',
                  height: "110px"
                }}>
                </div>
                <div style={{ 
                  border: "1px solid #e8e8e8",
                  borderRadius: "8px",
                  padding: "0px",
                  width: "19%",
                  backgroundImage: `url(${HotelOne})`, 
                  backgroundSize: 'cover',
                  height: "110px"
                }}><strong><p style={{color: "white", paddingTop: "35px"}}>+45 photos</p></strong>
                </div>
              </div>
            </div>
          </div>
        </div>
     
        <div className="row" style={{marginTop: "15px", marginBottom: "15px"}}>
          <div className="col-md-8" style={{marginLeft: "80px", width: "62%"}}>
            <p style={{textAlign: "left", fontSize: "0.95em"}}>Located near the city of Inflation, our hotel is the perfect accommodation option for those looking to explore the vibrant city of Inflation while still enjoying a peaceful and relaxing stay. Our prime location offers easy access to all the city's popular tourist destinations, while being situated just far enough away to ensure a quiet and tranquil retreat.</p>

            <p style={{textAlign: "left", fontSize: "0.95em"}}>Our hotel offers a wide range of well-appointed rooms and suites that are tastefully furnished and equipped with all the modern amenities you need for a comfortable stay. From plush bedding and comfortable furnishings to high-speed Wi-Fi and flat-screen TVs, our rooms are designed with your comfort in mind.</p>

            <p style={{textAlign: "left", fontSize: "0.95em"}}>For those looking to relax and unwind, our hotel offers a variety of facilities including a swimming pool, a fitness center, and a spa. You can also indulge in a variety of culinary delights at our on-site restaurant, which serves a wide range of local and international cuisine.</p>
          
            <p style={{textAlign: "left", fontSize: "0.95em"}}>Couples in particular like the location – they rated it <strong>9.8</strong> for a two-person trip. </p> 

            <p style={{textAlign: "left", fontSize: "0.95em"}}><strong>Hotel Poje has been welcoming Booking.com guests since Mar 15, 2020</strong></p>

            <strong><p style={{textAlign: "left", fontSize: "1em"}}>Most popular facilities</p></strong>
            <div className="col-md-10"
              style={{
                backgroundImage: `url(${Facilities})`, 
                backgroundSize: 'cover',
                width: "600px",
                height: "75px",
                marginBottom: "20px"  
              }}>
            </div>
          </div>
          <div className="col-md-4" style={{backgroundColor: "#e4f4ff", width: "25%", height: "270px"}}>
            <p style={{textAlign: "left", fontSize: "1em", paddingTop: "15px"}}><strong>Property Highlights</strong></p>
            <p style={{textAlign: "left", fontSize: "0.9em"}}><strong>Perfect for a 1-week stay!</strong></p>
            <div className="row">
              <div className="col-md-2">
                <svg width="24" height="24" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: '10px', width: '100%', fill: "none" }}>
                  <path d="M64 128a8 8 0 0 1-6.67-3.58c-4.21-6.35-13.62-21.53-22.15-38.1C25.11 66.76 20 52.52 20 44 20 19.7 39.7 0 64 0s44 19.7 44 44c0 8.52-5.11 22.76-15.18 42.32-8.53 16.57-17.94 31.75-22.15 38.1A8 8 0 0 1 64 128zM64 8C44.118 8 28 24.118 28 44c0 15.36 23.45 57.08 36 76 12.55-18.92 36-60.64 36-76 0-19.882-16.118-36-36-36zm0 60a4 4 0 0 1-2.89-1.23l-18.19-19c-5.616-5.901-5.384-15.238.517-20.853 5.73-5.452 14.739-5.415 20.423.083l.14.14.15-.14c5.639-5.88 14.976-6.074 20.855-.435 5.88 5.638 6.074 14.976.436 20.855-.144.15-.291.296-.441.44l-18.09 18.9A4 4 0 0 1 64 68zM53.42 30.67a7.853 7.853 0 0 0-1.08.08 6.76 6.76 0 0 0-3.69 11.45L64 58.22l15.28-15.95a6.753 6.753 0 0 0-9.48-9.62l-3 3a4 4 0 0 1-5.65 0l-3-3a6.75 6.75 0 0 0-4.73-1.98z" fill="black"/>
                </svg>
              </div>
              <div className="col-md-10">
                <p style={{textAlign: "left", fontSize: "0.9em"}}>Top Location: Highly rated by recent guests (9.9)</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: '10px', width: '100%', fill: "none" }}>
                  <path d="M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12zm-9.75-1.5a1.5 1.5 0 0 1-1.5 1.5H10.5l.75.75v-4.5L10.5 9h2.25a1.5 1.5 0 0 1 1.5 1.5zm1.5 0a3 3 0 0 0-3-3H10.5a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h2.25a3 3 0 0 0 3-3zm-4.5 6.75v-4.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0z" fill="black"/>
                </svg>
              </div>
              <div className="col-md-10">
                <p style={{textAlign: "left", fontSize: "0.9em"}}>Free private parking available at the hotel</p>
              </div>
            </div>

            <button style={{ backgroundColor: "#0071c2", color: "#fff", width: '90%', fontSize: "14px", height: "40px", border: 'none'}}>
              Reserve
            </button>
          </div>
        </div>

        <div className="row" style={{borderBottom: "1px solid #e7e7e7", width: "87%", marginLeft: "80px", marginBottom: "5px"}}>

        </div>

        <div className="row">
          <div className="availability">
            <div className="row">
              <div className="col-md-12" style={{marginLeft: "80px"}}>
                <div className="row">
                  <div className="col-md-8">
                    <p style={{fontSize: "1.5em", textAlign:"left"}}><strong>Availability</strong></p>
                  </div>
                  <div className="col-md-3">
                    <div className="row" style={{textAlign: "center", justifyContent: "center"}}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '40px', fill: "none", stroke: "black", strokeWidth: "1px"}}>
                        <path d="M.311 2.56v6.257a3.75 3.75 0 0 0 1.098 2.651l11.56 11.562a2.25 2.25 0 0 0 3.182 0l6.88-6.88a2.25 2.25 0 0 0 0-3.181L11.468 1.408A3.75 3.75 0 0 0 8.818.31H2.56a2.25 2.25 0 0 0-2.25 2.25zm1.5 0a.75.75 0 0 1 .75-.75h6.257a2.25 2.25 0 0 1 1.59.659l11.562 11.56a.75.75 0 0 1 0 1.06l-6.88 6.88a.75.75 0 0 1-1.06 0L2.47 10.409a2.25 2.25 0 0 1-.659-1.59V2.56zm5.25 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm1.5 0a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0z"/>
                      </svg>
                      <p style={{fontSize: "0.9em", width: "40%", padding: "0px"}}>We price match</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="search-backgroundz">
                    <form className="form-inlinez">
                      <div style={{borderRadius: '2px', display: 'flex', alignItems: 'center', padding: '5px', height: '4vh', paddingLeft: '3px', backgroundImage: "linear-gradient(to right, #ffb700 79%, #FFFFFF 20%)"}}>
                        <div style={{width: '29%', padding: '0px', borderRadius: '3px', marginRight: '5px', display: 'flex', whiteSpace: 'nowrap', alignItems: 'center', backgroundColor: 'white'}}>
                          <div style={{paddingLeft: '10px'}}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: '10px', width: '30px' }}>
                              <path d="M22.5 13.5v8.25a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v8.25zm1.5 0V5.25A2.25 2.25 0 0 0 21.75 3H2.25A2.25 2.25 0 0 0 0 5.25v16.5A2.25 2.25 0 0 0 2.25 24h19.5A2.25 2.25 0 0 0 24 21.75V13.5zm-23.25-3h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5zM7.5 6V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0zM18 6V.75a.75.75 0 0 0-1.5 0V6A.75.75 0 0 0 18 6zM5.095 14.03a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zm.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm-.53 6.53a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zm.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm5.845-3.97a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zm.53-1.28A1.125 1.125 0 1 0 12 15a1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm-.53 6.53a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zM12 18a1.125 1.125 0 1 0 0 2.25A1.125 1.125 0 0 0 12 18a.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm5.845-3.97a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zm.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm-.53 6.53a.75.75 0 1 0 1.06-1.06.75.75 0 0 0-1.06 1.06zm.53-1.28a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5z" fill="currentColor"/>
                            </svg>
                          </div>
                          <input type="text" style={{width: '100%', border: 'none', backgroundColor: 'white', borderRadius: '3px', padding: '5px', height: '3.6vh', fontSize:"0.9em"}} placeholder="Check-in Date- Check-out Date" />
                        </div>
                        <div style={{width: '29%', padding: '0px', borderRadius: '3px', marginRight: '5px', display: 'flex', whiteSpace: 'nowrap', alignItems: 'center', backgroundColor: 'white'}}>
                          <div style={{paddingLeft: '10px'}}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: '10px', width: '30px' }}>
                              <path d="M16.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zM18 6A6 6 0 1 0 6 6a6 6 0 0 0 12 0zM3 23.25a9 9 0 1 1 18 0 .75.75 0 0 0 1.5 0c0-5.799-4.701-10.5-10.5-10.5S1.5 17.451 1.5 23.25a.75.75 0 0 0 1.5 0z" fill="currentColor"/>
                            </svg>
                          </div>
                          <input type="text" style={{width: '100%', border: 'none', backgroundColor: 'white', borderRadius: '3px', padding: '5px', height: '3.6vh', fontSize:"0.9em"}} placeholder="2 adults - 0 children - 1 room" />
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: '10px', width: '30px' }}>
                            <path d="M18 9.45c0 .2-.078.39-.22.53l-5 5a1.08 1.08 0 0 1-.78.32 1.1 1.1 0 0 1-.78-.32l-5-5a.75.75 0 0 1 0-1.06.74.74 0 0 1 1.06 0L12 13.64l4.72-4.72a.74.74 0 0 1 1.06 0 .73.73 0 0 1 .22.53zm-5.72 4.47zm-.57 0z" fill="currentColor"/>
                          </svg>
                        </div>
                        <button style={{width: '20%', backgroundColor: '#0071c2', color: 'white', borderRadius: '3px', height: '3.6vh', border: 'none', fontSize: "0.9em", paddingBottom: "5px"}}>Change search</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="room-type-table" style={{marginLeft:"80px", width: "87.5%", marginTop: "20px"}}>
            <table>
              <thead>
                <tr style={{ backgroundColor: '#4c76b2', color: 'white' }}>
                  <th style={{width: "25%", border: '1px solid #5bbaff', textAlign: "left", fontSize: "0.9em", paddingLeft: "5px"}}>Room Type</th>
                  <th style={{width: "5%", border: '1px solid #5bbaff', fontSize: "0.9em"}}>Sleeps</th>
                  <th style={{width: "15%", backgroundColor: "#003580", border: '1px solid #5bbaff', fontSize: "0.9em"}}>Price for 1 week</th>
                  <th style={{width: "20%", border: '1px solid #5bbaff', textAlign: "left", fontSize: "0.9em"}}>Your Choices</th>
                  <th style={{width: "5%", border: '1px solid #5bbaff', fontSize: "0.9em"}}>Select<br/> Rooms</th>
                  <th style={{width: "20%", border: '1px solid #5bbaff', fontSize: "0.9em"}}></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div
                      style={{
                        backgroundImage: `url(${RoomOne})`, 
                        backgroundSize: 'cover',
                        width: "300px",
                        height: "400px",
                      }}>
                    </div>
                  </td>
                  <td style={{border: '1px solid #5bbaff'}}>
                    <div
                      style={{
                        backgroundImage: `url(${People})`, 
                        backgroundSize: 'cover',
                        width: "50px",
                        height: "30px",
                        marginBottom: "370px"
                      }}>
                    </div>
                  </td>
                  <td style={{border: '1px solid #5bbaff', paddingLeft:"6px"}}>
                    <strong><p style={{marginBottom: "0px", fontSize: "0.98em", textAlign: "left"}}>1,337 ETH</p></strong>
                    <p style={{marginBottom: "347px", textAlign: "left", fontSize: "0.8em"}}>Includes taxes and fees</p>
                  </td>
                  <td style={{border: '1px solid #5bbaff'}}>
                    <div
                      style={{
                        backgroundImage: `url(${Choices})`, 
                        backgroundSize: 'cover',
                        width: "220px",
                        height: "105px",
                        marginBottom: "290px"
                      }}>
                    </div>
                  </td>
                  <td style={{border: '1px solid #5bbaff', width: "3%"}}>
                    <select style={{fontSize: "0.85em", overflow: "auto", width: "90%",marginBottom: "365px", boxSizing: "border-box"}}>
                        <option value="apple" selected>0</option>
                        <option value="apple">1 (1.337 ETH)</option>
                        <option value="banana">2 (2.674 ETH)</option>
                        <option value="orange">3 (4.011 ETH)</option>
                      </select>
                  </td>
                  <button style={{ backgroundColor: "#0071c2", color: "#fff", width: '86%', fontSize: "16px", height: "35px", border: 'none', marginTop: "10px", marginBottom: "10px"}}
                    onClick={async () => {
                      console.log(account)
                      try {
                        const signer = provider.getSigner();
                        const transaction = {
                          to: '0x123...', // replace with the recipient's address
                          value: ethers.utils.parseEther('1')
                        };
                        const tx = await signer.sendTransaction(transaction);
                        console.log(tx);
                      } catch (error) {
                        console.error(error);
                      }
                    }}
                  >
                    <p style={{marginTop: "4px", fontSize: "0.9em"}}>I'll reserve</p>
                  </button>
                  <ul style={{fontSize: "0.9em", paddingLeft: "16px"}}>
                    <li style={{listStylePosition: "inside", textAlign: "left"}}>
                      Confirmation is immediate
                    </li>
                    <li style={{listStylePosition: "inside", textAlign: "left"}}>
                      No booking or credit card fees!
                    </li>
                  </ul>
                </tr>
                <tr>
                  <td style={{borderTop: "2px solid #5bbaff"}}>
                    <div
                      style={{
                        backgroundImage: `url(${RoomTwo})`, 
                        backgroundSize: 'cover',
                        width: "300px",
                        height: "400px",
                      }}>
                    </div>
                  </td>
                  <td style={{border: '1px solid #5bbaff', borderTop: "2px solid #5bbaff"}}>
                    <div
                      style={{
                        backgroundImage: `url(${People})`, 
                        backgroundSize: 'cover',
                        width: "50px",
                        height: "30px",
                        marginBottom: "370px"
                      }}>
                    </div>
                  </td>
                  <td style={{border: '1px solid #5bbaff', paddingLeft:"6px", borderTop: "2px solid #5bbaff"}}>
                    <strong><p style={{marginBottom: "0px", fontSize: "0.98em", textAlign: "left"}}>1,337 ETH</p></strong>
                    <p style={{marginBottom: "347px", textAlign: "left", fontSize: "0.8em"}}>Includes taxes and fees</p>
                  </td>
                  <td style={{border: '1px solid #5bbaff', borderTop: "2px solid #5bbaff"}}>
                    <div
                      style={{
                        backgroundImage: `url(${Choices})`, 
                        backgroundSize: 'cover',
                        width: "220px",
                        height: "105px",
                        marginBottom: "290px"
                      }}>
                    </div>
                  </td>
                  <td style={{border: '1px solid #5bbaff', fontSize: "1em", width: "3%", borderTop: "2px solid #5bbaff"}}>
                    <select style={{fontSize: "0.85em", overflow: "auto", width: "90%",marginBottom: "365px", boxSizing: "border-box"}}>
                      <option value="apple" selected>0</option>
                      <option value="apple">1 (1.337 ETH)</option>
                      <option value="banana">2 (2.674 ETH)</option>
                      <option value="orange">3 (4.011 ETH)</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Listing;