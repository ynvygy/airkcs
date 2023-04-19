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
import { useState } from 'react'
import escrowContractData from '../data/escrow-contract.json';
import reservationsContractData from '../data/reservations-contract.json';
import Search from './Search';

const Listing = ({account, searchQuery, handleSearch}) => {
  const [selectedOption, setSelectedOption] = useState(0);

  const { listingId } = useParams();
  const escrowAddress = escrowContractData.contract.address;
  const escrowAbi = escrowContractData.contract.abi;
  const reservationsAddress = reservationsContractData.contract.address;
  const reservationsAbi = reservationsContractData.contract.abi;

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const escrowContract = new ethers.Contract(escrowAddress, escrowAbi, provider);
  const reservationsContract = new ethers.Contract(reservationsAddress, reservationsAbi, provider);

  //async function handleCreateReservationAndPay() {
  //  try {
      // First calling the Reservations contract to create the reservation
  //    const reservationTx = await escrowContract.connect(signer).createReservation(listingId);
  //    const reservationReceipt = await reservationTx.wait();
  
      // Secondly calling the escrow to hold the funds
  //    const paymentTx = await escrowContract.connect(signer).payForReservation(listingId, value: {reservationValue });
  //    const paymentReceipt = await paymentTx.wait();
  
  //   console.log('Reservation and payment successful!');
  //  } catch (error) {
  //    console.error(error);
  //  }
  //}

  return (
    <>
      <Search searchQuery={searchQuery} handleSearch={handleSearch}/>
      <div className='col-md-8 offset-md-2 mx-auto'>
        <div style={{ marginTop: '20px', fontSize: '0.8em', textAlign: 'left', width: "92%", marginLeft: "83px" }}>
          <div className="row">
            <div className="field5" style={{paddingTop: "10px", paddingLeft: "0px", width: "500px"}}>
              <span style={{ color: 'black' }}>Hotel Pajo (Hotel), Inflation (United States of America) Deals</span>
            </div>
          </div>
        </div>
        <div className="row" style={{marginTop: '5px', width: "92%", marginLeft: "70px"}}>
          <div className="col-md-9">
            <div className="with-width" style={{width: "25%", backgroundColor: "#ebf3ff", borderRadius: "5px", color: "#0071c2", height: "40px", paddingTop: "8px"}}>
              <p style={{fontSize: "0.9em"}}>Guest reviews (1,337)</p>
            </div>
          </div>
        </div>

        <div className="row" style={{marginTop: '20px', width: "92%", marginLeft: "70px"}}>
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
                  <p style={{fontSize: "0.93em", letterSpacing: "-0.3px", display: 'inline-block'}}>1 Inflated Avenue, 8055 Inflation, United States of America</p>
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
                    <select style={{fontSize: "0.85em", overflow: "auto", width: "90%",marginBottom: "365px", boxSizing: "border-box"}} onChange={(e) => setSelectedOption(e.target.value)}>
                        <option value="0" selected>0</option>
                        <option value="1.337">1 (1.337 ETH)</option>
                        <option value="2.674">2 (2.674 ETH)</option>
                        <option value="4.011">3 (4.011 ETH)</option>
                      </select>
                  </td>
                  <button style={{ backgroundColor: "#0071c2", color: "#fff", width: '86%', fontSize: "16px", height: "35px", border: 'none', marginTop: "10px", marginBottom: "10px"}}
                    onClick={async () => {
                      console.log(account)
                      try {
                        const signer = provider.getSigner();
                        const reservationValue = ethers.utils.parseEther(selectedOption);
                        const transaction = {
                          to: reservationsContract.address,
                          value: reservationValue
                        };
                        const options = { value: transaction.value };
                        //const tx = await reservationsContract.connect(signer).createReservation(listingId, 1, 2, 3, { value: reservationValue });
                        const tx = await reservationsContract.connect(signer).createReservation(listingId, 1, 2, reservationValue, { gasLimit: 1000000 });
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