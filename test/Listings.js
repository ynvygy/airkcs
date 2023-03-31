const { expect } = require("chai");
const { ethers } = require("hardhat");
const { AddressZero } = ethers.constants;

describe("Listings", async () => {
  let listings, landlord
  let image, price, location, description

  beforeEach(async () => {
    [landlord, fake_landlord] = await ethers.getSigners()

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
      await listings.connect(landlord).createListing(image, price, location, description)

      let listing = await listings.listings(0);
      expect(listing.image).to.equal(image)
      expect(listing.price).to.equal(price)
      expect(listing.location).to.equal(location)
      expect(listing.description).to.equal(description)
      expect(listing.landlord).to.equal(landlord.address)
    });
  });

  describe("UpdateListing", async () => {
    it("Should update a listing by the landlord", async function () {
      await listings.connect(landlord).createListing(image, price, location, description)

      let listing = await listings.listings(0);

      image = "updated ipfs link"
      price = 100
      location = "New York"
      description = "A nice expensive flat"

      await listings.connect(landlord).updateListing(0, image, price, location, description)
      
      listing = await listings.getListing(0)

      expect(listing.image).to.equal(image)
      expect(listing.price).to.equal(price)
      expect(listing.location).to.equal(location)
      expect(listing.description).to.equal(description)
      expect(listing.landlord).to.equal(landlord.address)
    });

    it("Should not update a listing if it's not the landlord", async function () {
      await listings.connect(landlord).createListing(image, price, location, description)

      let listing = await listings.listings(0);

      image = "updated ipfs link"
      price = 100
      location = "New York"
      description = "A nice expensive flat"

      await expect(listings.connect(fake_landlord).updateListing(0, image, price, location, description)).to.be.reverted
    });
  });

  describe("RemoveListing", async () => {
    it("Should delete a listing by the landlord", async function () {
      await listings.connect(landlord).createListing(image, price, location, description)

      let listing = await listings.listings(0);

      await listings.connect(landlord).removeListing(0);

      listing = await listings.getListing(0);
      expect(listing.image).to.equal("");
      expect(listing.price).to.equal(0);
      expect(listing.location).to.equal("");
      expect(listing.description).to.equal("");
      expect(listing.landlord).to.equal(AddressZero);
    })

    it("Should not delete a listing if not landlord", async function () {
      await listings.connect(landlord).createListing(image, price, location, description)

      let listing = await listings.listings(0);

      await expect(listings.connect(fake_landlord).removeListing(0)).to.be.reverted
    })
  })

  describe("GetListing", async () => {
    it("Should delete a listing by the landlord", async function () {
      await listings.connect(landlord).createListing(image, price, location, description)

      let listing = await listings.listings(0);

      await listings.connect(landlord).removeListing(0);

      listing = await listings.getListing(0);
      expect(listing.image).to.equal("");
      expect(listing.price).to.equal(0);
      expect(listing.location).to.equal("");
      expect(listing.description).to.equal("");
      expect(listing.landlord).to.equal(AddressZero);
    })

    it("Should not delete a listing if not landlord", async function () {
      await listings.connect(landlord).createListing(image, price, location, description)

      let listing = await listings.listings(0);

      await expect(listings.connect(fake_landlord).removeListing(0)).to.be.reverted
    })
  })

  describe("GetLandlord", async () => {
    it("Should retrieve the landlord of a listing", async function () {
      await listings.connect(landlord).createListing(image, price, location, description)

      let listing = await listings.listings(0);

      expect(await listings.getLandlord(0)).to.equal(landlord.address);
    })
  })
});
