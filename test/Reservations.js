const { expect} = require("chai");
const { ethers } = require("hardhat");

describe("Reservations", async () => {
  let reservations

  beforeEach(async () => {
    [owner, user] = await ethers.getSigners()

    const Reservations = await ethers.getContractFactory("Reservations")
  
    reservations = await Reservations.deploy()
    await reservations.deployed();

    const Listings = await ethers.getContractFactory("Listings")
  
    listings = await Listings.deploy()
    await listings.deployed();

    image = "ipfs link"
    price = 10
    location = "London"
    description = "A nice cheap flat"

    await listings.connect(owner).createListing(image, price, location, description)
  })

  describe("Deployed", async () => {
    it("should deploy the contract", async () => {
      expect(reservations.address).to.not.equal(0);
    });
  })

  describe("CreateReservation", async () => {
    it("should create a new reservation", async () => {
      await reservations.connect(user).createReservation(0)

      let reservation = await reservations.reservations(0);

      expect(reservation.user).to.equal(user.address)
      expect(reservation.cancelled).to.equal(false)
    })
  })
});
