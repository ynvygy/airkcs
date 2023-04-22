import { ethers } from 'ethers';
import { useParams } from 'react-router-dom';
import nomadWandererContractData from '../data/nomadwanderer-contract.json';
import Search from './Search';
import './listing.css';

const Listing = ({account, searchQuery, handleSearch, setSearchQuery}) => {
  const { listingId } = useParams();
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const nomadWandererAddress = nomadWandererContractData.contract.address;
  const nomadWandererAbi = nomadWandererContractData.contract.abi;

  const nomadWandererContract = new ethers.Contract(nomadWandererAddress, nomadWandererAbi, provider);

  const handleReserveClick = async () => {
    console.log(account);
    try {
      const signer = provider.getSigner();
      const reservationValue = ethers.utils.parseEther("5");

      const unixTimestampStart = Math.round(searchQuery.startDate.getTime() / 1000)
      const unixTimestampEnd = Math.round(searchQuery.endDate.getTime() / 1000)
      console.log(nomadWandererContract)
      console.log("nomad", nomadWandererAbi)
      const tx = await nomadWandererContract.connect(signer).createReservation(listingId, unixTimestampStart, unixTimestampEnd, { gasLimit: 1000000, value: reservationValue });

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
      <Search searchQuery={searchQuery} handleSearch={handleSearch} setSearchQuery={setSearchQuery}/>
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
              Ammenities  
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">The final price is</h5>
            <h4>price</h4>
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