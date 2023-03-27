const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Listing", async () => {
  let listing, owner

  beforeEach(async () => {
    [owner] = await ethers.getSigners()

    const Listing = await ethers.getContractFactory("Listing")

    const image = "ipfs link"
    const price = 10
    const location = "London"
    const description = "A nice cheap flat"
  
    listing = await Listing.deploy(image, price, location, description)
    await listing.deployTransaction.wait();
  })

  describe("Deployment", async () => {
    it("Returns listing", async function () {
      expect(await listing.owner()).to.equal(owner.address)
    });
  });
});
