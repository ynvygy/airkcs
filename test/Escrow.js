const { expect} = require("chai");
const { ethers } = require("hardhat");

describe("Reservations", async () => {
  let reservations
  let reservationIdCounter = 0

  const ReservationStatus = {
    Created: 0,
    Confirmed: 1,
    Completed: 2,
    Cancelled: 3,
  };

  beforeEach(async () => {
    [landlord, user] = await ethers.getSigners()

    const Escrow = await ethers.getContractFactory("Escrow")
  
    escrow = await Escrow.deploy()
    await escrow.deployed();

    const Listings = await ethers.getContractFactory("Listings")
  
    listings = await Listings.deploy()
    await listings.deployed();

    image = "ipfs link"
    price = 10
    location = "London"
    description = "A nice cheap flat"

    await listings.connect(landlord).createListing(image, price, location, description)
  })

  describe("Deployed", async () => {
    it("should deploy the contract", async () => {
      // to be filled in later
    });
  })

  describe("CreateReservation", async () => {
    it("should create a new reservation", async () => {
      const reservationId = reservationIdCounter++;
      await escrow.connect(user).createReservation(reservationId, { value: 100 })

      let reservation = await escrow.reservations(reservationId);

      expect(reservation.user).to.equal(user.address)
      expect(reservation.status).to.equal(ReservationStatus.Created)
    })
  })

  describe("CompleteReservation", async () => {
    it("should complete an existing reservation", async () => {
      const reservationId = reservationIdCounter++;
      await escrow.connect(user).createReservation(reservationId, { value: 100 })
      await escrow.connect(user).completeReservation(reservationId)

      let reservation = await escrow.reservations(reservationId);

      expect(reservation.status).to.equal(ReservationStatus.Completed)
    })
  })

  describe("CancelReservation", async () => {
    it("should cancel an existing reservation", async () => {
      const reservationId = reservationIdCounter++;
      await escrow.connect(user).createReservation(reservationId, { value: 100 })
      await escrow.connect(user).cancelReservation(reservationId)

      let reservation = await escrow.reservations(reservationId);

      expect(reservation.status).to.equal(ReservationStatus.Cancelled)
    })
  })

  describe("sendFundsToLandlord", async () => {
    
  })

  describe("refundUser", async () => {
    
  })
});
