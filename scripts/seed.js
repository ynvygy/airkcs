const { ethers } = require("hardhat");

async function main() {
  const Listings = await ethers.getContractFactory("Listings");
  const listings = await Listings.deploy();
  await listings.deployed();

  console.log("Listings contract deployed to:", listings.address);

  // Create some initial listings
  await listings.createListing(
    "Beautiful house with pool",
    4,
    "https://cloudflare-ipfs.com/ipfs/QmNc976UqzyFFXC9gmEffvANL4AQUUHKNRZy9nb1KZogsd",
    ethers.utils.parseEther("2.5"),
    "Miami, FL",
    "This beautiful house has everything you need for a comfortable stay."
  );

  await listings.createListing(
    "Cozy apartment in the city center",
    5,
    "https://cloudflare-ipfs.com/ipfs/QmNc976UqzyFFXC9gmEffvANL4AQUUHKNRZy9nb1KZogsd",
    ethers.utils.parseEther("1.5"),
    "New York, NY",
    "This cozy apartment is perfect for a short stay in the city."
  );
  await listings.createListing(
    "Luxury villa with ocean view",
    5,
    "https://cloudflare-ipfs.com/ipfs/QmNc976UqzyFFXC9gmEffvANL4AQUUHKNRZy9nb1KZogsd",
    ethers.utils.parseEther("10"),
    "Bali, Indonesia",
    "This luxurious villa offers breathtaking views of the ocean."
  );
  console.log(await listings.getListings())
  console.log("Seed listings created.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });