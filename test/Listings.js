const { expect } = require("chai");
const { ethers } = require("hardhat");
const { AddressZero } = ethers.constants;

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
    it("Should update a listing by the owner", async function () {
      await listings.connect(owner).createListing(image, price, location, description)

      let listing = await listings.listings(0);

      image = "updated ipfs link"
      price = 100
      location = "New York"
      description = "A nice expensive flat"

      await listings.connect(owner).updateListing(0, image, price, location, description)
      
      listing = await listings.getListing(0)

      expect(listing.image).to.equal(image)
      expect(listing.price).to.equal(price)
      expect(listing.location).to.equal(location)
      expect(listing.description).to.equal(description)
      expect(listing.owner).to.equal(owner.address)
    });

    it("Should not update a listing if it's not the owner", async function () {
      await listings.connect(owner).createListing(image, price, location, description)

      let listing = await listings.listings(0);

      image = "updated ipfs link"
      price = 100
      location = "New York"
      description = "A nice expensive flat"

      await expect(listings.connect(fake_owner).updateListing(0, image, price, location, description)).to.be.reverted
    });
  });

  describe("RemoveListing", async () => {
    it("Should delete a listing by the owner", async function () {
      await listings.connect(owner).createListing(image, price, location, description)

      let listing = await listings.listings(0);

      await listings.connect(owner).removeListing(0);

      listing = await listings.getListing(0);
      expect(listing.image).to.equal("");
      expect(listing.price).to.equal(0);
      expect(listing.location).to.equal("");
      expect(listing.description).to.equal("");
      expect(listing.owner).to.equal(AddressZero);
    })

    it("Should not delete a listing if not owner", async function () {
      await listings.connect(owner).createListing(image, price, location, description)

      let listing = await listings.listings(0);

      await expect(listings.connect(fake_owner).removeListing(0)).to.be.reverted
    })
  })

  describe("GetListing", async () => {
    it("Should delete a listing by the owner", async function () {
      await listings.connect(owner).createListing(image, price, location, description)

      let listing = await listings.listings(0);

      await listings.connect(owner).removeListing(0);

      listing = await listings.getListing(0);
      expect(listing.image).to.equal("");
      expect(listing.price).to.equal(0);
      expect(listing.location).to.equal("");
      expect(listing.description).to.equal("");
      expect(listing.owner).to.equal(AddressZero);
    })

    it("Should not delete a listing if not owner", async function () {
      await listings.connect(owner).createListing(image, price, location, description)

      let listing = await listings.listings(0);

      await expect(listings.connect(fake_owner).removeListing(0)).to.be.reverted
    })
  })

  describe("GetOwner", async () => {
    it("Should retrieve the owner of a listing", async function () {
      await listings.connect(owner).createListing(image, price, location, description)

      let listing = await listings.listings(0);

      expect(await listings.getOwner(0)).to.equal(owner.address);
    })
  })
});
