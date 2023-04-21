const { expect} = require("chai");
const { ethers } = require("hardhat");

describe("ReservationEscrowHolder", async () => {
  beforeEach(async () => {
    [landlord, user] = await ethers.getSigners()

    const Reservations = await ethers.getContractFactory("Reservations")
    reservations = await Reservations.deploy()
    await reservations.deployed()
    
    const Escrow = await ethers.getContractFactory("Escrow")
    escrow = await Escrow.deploy()
    await escrow.deployed();

    const REHolder = await ethers.getContractFactory("ReservationEscrowHolder")
    reHolder = await REHolder.deploy(reservations.address, escrow.address)
    await reHolder.deployed()

    const Listings = await ethers.getContractFactory("Listings")
    listings = await Listings.deploy()
    await listings.deployed();

    var name = "my hotel"
    stars = 5
    image = "ipfs link"
    price = 10
    location = "London"
    description = "A nice cheap flat"

    await listings.connect(landlord).createListing(name, stars, image, price, location, description)
  })

  describe("createReservationAndEscrow", async () => {
    it("should create a new Reservation and deposit to escrow", async () => {
      listingId = 0;
      unixTimestampStart = Math.floor(Date.now() / 1000);
      unixTimestampEnd = unixTimestampStart + 86400;
      reservationValue = "5";
      //console.log(await reservations.getAllReservations())
      //console.log(await escrow.escrowBalances)
      value = ethers.utils.parseEther(reservationValue);
      await reHolder.connect(user).createReservationAndEscrow(listingId, unixTimestampStart, unixTimestampEnd, {value: value});

      //console.log(await reservations.getAllReservations())
      //console.log(await escrow.escrowBalances)

      // check the reservation
      const reservation = await reservations.reservations(0);
      expect(reservation.listingId).to.equal(listingId);
      expect(reservation.checkInDate).to.equal(unixTimestampStart);
      expect(reservation.checkOutDate).to.equal(unixTimestampEnd);
      expect(reservation.amount).to.equal(value);

      // check the escrow
      const balanceAfter = await ethers.provider.getBalance(escrow.address)
      expect(balanceAfter).to.equal(value);
    })
  })

  describe("cancelReservationAndRefund", async () => {
    it("should create a new Reservation and deposit to escrow", async () => {
      listingId = 0;
      unixTimestampStart = Math.floor(Date.now() / 1000);
      unixTimestampEnd = unixTimestampStart + 86400;
      reservationValue = "5";
      value = ethers.utils.parseEther(reservationValue);
      await reHolder.connect(user).createReservationAndEscrow(listingId, unixTimestampStart, unixTimestampEnd, {value: value});

      await reHolder.connect(user).cancelReservationAndRefund(0, { gasLimit: 1000000 });
      const reservation = await reservations.reservations(0)
      expect(reservation.status).to.equal(2)

      const balanceAfter = await ethers.provider.getBalance(escrow.address)
      expect(balanceAfter).to.equal(0)

      const userBalance = await ethers.provider.getBalance(user.address)
      expect(userBalance).to.equal(value);
    })
  })
})