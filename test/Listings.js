const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Listings", async () => {
  let listings, owner
  let image, price, location, description

  beforeEach(async () => {
    [owner, fake_owner] = await ethers.getSigners()

    const Listings = await ethers.getContractFactory("Listings")
  
    listings = await Listings.deploy()
    await listings.deployed();

    image = "ipfs link"
    price = 10
    location = "London"
    description = "A nice cheap flat"
  })

  describe("Deployed", async () => {
    it("should deploy the contract", async function () {
      expect(listings.address).to.not.equal(0);
    });
  })

  describe("CreateListing", async () => {
    it("Should create a new listing with the correct values", async function () {
      await listings.connect(owner).createListing(image, price, location, description)

      let listing = await listings.listings(0);
      expect(listing.image).to.equal(image)
      expect(listing.price).to.equal(price)
      expect(listing.location).to.equal(location)
      expect(listing.description).to.equal(description)
      expect(listing.owner).to.equal(owner.address)
    });
  });

  describe("UpdateListing", async () => {
    it("Should create a new listing with the correct values", async function () {
      await listings.connect(owner).createListing(image, price, location, description)

      let listing = await listings.listings(0);

      image = "updated ipfs link"
      price = 100
      location = "New York"
      description = "A nice expensive flat"

      await listings.connect(owner).updateListing(0, image, price, location, description)
      expect(listing.image).to.equal(image)
      expect(listing.price).to.equal(price)
      expect(listing.location).to.equal(location)
      expect(listing.description).to.equal(description)
      expect(listing.owner).to.equal(owner.address)
    });
  });
});
