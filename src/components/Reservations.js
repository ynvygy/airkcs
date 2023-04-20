import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import reservationsContractData from '../data/reservations-contract.json';
import escrowContractData from '../data/escrow-contract.json';

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const reservationsAddress = reservationsContractData.contract.address;
  const reservationsAbi = reservationsContractData.contract.abi;

  const escrowAddress = escrowContractData.contract.address;
  const escrowAbi = escrowContractData.contract.abi;

  const statusMap = {
    0: "Created",
    1: "Completed",
    2: "Cancelled"
  };

  async function cancelReservation(reservationId) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const reservationsContract = new ethers.Contract(reservationsAddress, reservationsAbi, provider);

    const tx = await reservationsContract.cancelReservation(reservationId);
    await tx.wait();

    // get the Escrow contract instance
    const escrowContract = new ethers.Contract(escrowAddress, escrowAbi, provider);

    const refundTx = await escrowContract.refund(reservationId);
    await refundTx.wait();
  };

  useEffect(() => {
    async function fetchReservations() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const reservationsContract = new ethers.Contract(reservationsAddress, reservationsAbi, provider);

      const allReservations = await reservationsContract.getAllReservations();

      const formattedReservations = allReservations.map((reservation) => ({
        ...reservation,
        id: ethers.BigNumber.from(reservation.id).toString(),
        checkInDate: new Date(reservation.checkInDate.toNumber() * 1000).toLocaleDateString(),
        checkOutDate: new Date(reservation.checkOutDate.toNumber() * 1000).toLocaleDateString(),
        amount: ethers.BigNumber.from(reservation.amount).toString()
      }));
      setReservations(formattedReservations);
    }

    fetchReservations();
  }, []);

  return (
    <>
      <h1>Reservations</h1>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Reservation {reservation.id}</h5>
                <p className="card-text">Check-in: {reservation.checkInDate}</p>
                <p className="card-text">Check-out: {reservation.checkOutDate}</p>
                <p className="card-text">Amount: {ethers.utils.formatEther(reservation.amount)} ETH</p>
                <p className="card-text">Status: {statusMap[reservation.status]}</p>
              </div>
              <button onClick={() => cancelReservation(reservation.id)}>Cancel Reservation</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reservations;