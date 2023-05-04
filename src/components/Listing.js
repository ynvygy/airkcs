import { ethers } from 'ethers';
import { useParams } from 'react-router-dom';
import rchContractData from '../data/reholder-contract.json';
import listingsContractData from '../data/listings-contract.json';
import Search from './Search';
import './listing.css';
import { useState, useEffect } from 'react';

const Listing = ({account, searchQuery, handleSearch, setSearchQuery, dateDifference, setDateDifference}) => {
  const [listing, setListing] = useState({});
  const { listingId } = useParams();
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const rchAddress = rchContractData.contract.address;
  const rchAbi = rchContractData.contract.abi;

  const rchContract = new ethers.Contract(rchAddress, rchAbi, provider);

  const listingsAbi = listingsContractData.contract.abi;
  const contractAddress = listingsContractData.contract.address;
  const listingsContract = new ethers.Contract(contractAddress, listingsAbi, provider);

  useEffect(() => {
    const getListing = async () => {
      const listing = await listingsContract.getListing(listingId);
      setListing(listing);
    };
  
    getListing();
  }, []);

  const handleReserveClick = async () => {
    console.log(account);
    try {
      const signer = provider.getSigner();
      const etherValue = dateDifference * (listing.price && ethers.utils.formatEther(ethers.BigNumber.from(listing.price)))
      const reservationValue = ethers.utils.parseEther(etherValue.toString());

      const unixTimestampStart = Math.round(searchQuery.startDate.getTime() / 1000)
      const unixTimestampEnd = Math.round(searchQuery.endDate.getTime() / 1000)

      console.log(rchContract)
      const tx = await rchContract.connect(signer).createReservationAndEscrow(listingId, unixTimestampStart, unixTimestampEnd, { gasLimit: 1000000, value: reservationValue })

      console.log(tx);
    } catch (error) {
      console.error(error);
    }
  }

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
      <Search searchQuery={searchQuery} handleSearch={handleSearch} setSearchQuery={setSearchQuery} dateDifference={dateDifference} setDateDifference={setDateDifference}/>
      <div className='col-md-8 offset-md-2 mx-auto'>
        <div className="title">
          <div className="row">
            <div className="col-md-3" id="listing-type">
              Hotel
            </div>
            <div className="col-md-6" id="listing-title">
              Hotel Pajo
            </div>
            <div className="col-md-3" id="listing-title">
              Address
            </div> 
          </div>
        </div>

        <div className="photo-n-reviews">
          <div className="row">
            <div className="col-md-6" id="hotel-photo">
            
            </div>
            <div className="col-md-6">
              Reviews (if any)  
            </div>
          </div>
        </div>

        <div className="description-n-amenities">
          <div className="row">
            <div className="col-md-6">
              Description
            </div>
            <div className="col-md-6">
              Amenities  
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">The final price is</h5>
            <h4>{dateDifference * (listing.price && ethers.utils.formatEther(ethers.BigNumber.from(listing.price)))}</h4>
            <button id="reserve-button" onClick={handleReserveClick}>
              <p id="reserve-text">I'll reserve</p>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Listing;