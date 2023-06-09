// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hardhat = require("hardhat");
const fs = require("fs/promises")

async function main() {
  const Reservations = await hre.ethers.getContractFactory("Reservations");
  //const reservationsContract = await Reservations.deploy(escrowContract.address);
  const reservationsContract = await Reservations.deploy();
  await reservationsContract.deployed()
  console.log("Reservations contract deployed to:", reservationsContract.address);

  const Listings = await hre.ethers.getContractFactory("Listings");
  const listingsContract = await Listings.deploy(reservationsContract.address);
  await listingsContract.deployed()

  console.log("Listings contract deployed to:", listingsContract.address);

  // Create some initial listings
  await listingsContract.createListing(
    "Beautiful house with pool",
    4,
    "https://cloudflare-ipfs.com/ipfs/QmNc976UqzyFFXC9gmEffvANL4AQUUHKNRZy9nb1KZogsd",
    ethers.utils.parseEther("2.5"),
    "Miami, FL",
    "This beautiful house has everything you need for a comfortable stay."
  );

  await listingsContract.createListing(
    "Cozy apartment in the city center",
    5,
    "https://cloudflare-ipfs.com/ipfs/QmNc976UqzyFFXC9gmEffvANL4AQUUHKNRZy9nb1KZogsd",
    ethers.utils.parseEther("1.5"),
    "New York, NY",
    "This cozy apartment is perfect for a short stay in the city."
  );
  await listingsContract.createListing(
    "Luxury villa with ocean view",
    5,
    "https://cloudflare-ipfs.com/ipfs/QmNc976UqzyFFXC9gmEffvANL4AQUUHKNRZy9nb1KZogsd",
    ethers.utils.parseEther("10"),
    "Bali, Indonesia",
    "This luxurious villa offers breathtaking views of the ocean."
  );
  console.log("Seed listings created.");

  const Escrow = await hre.ethers.getContractFactory("Escrow");
  const escrowContract = await Escrow.deploy();
  await escrowContract.deployed()

  console.log("Escrow contract deployed to:", escrowContract.address);

  const REHolder = await hre.ethers.getContractFactory("ReservationEscrowHolder");
  const reHolderContract = await REHolder.deploy(reservationsContract.address, escrowContract.address, listingsContract.address);
  await reHolderContract.deployed()
  console.log("RE Holder contract deployed to:", reHolderContract.address);
  console.log( await reHolderContract.getContractAddresses());

  await writeDeploymentInfo("escrow", escrowContract)
  await writeDeploymentInfo("listings" ,listingsContract)
  await writeDeploymentInfo("reservations", reservationsContract)
  await writeDeploymentInfo("reholder", reHolderContract)
}

async function writeDeploymentInfo(filename, contract) {
  const data = {
    contract: {
      address: contract.address,
      signerAddress: contract.signer.address,
      abi: contract.interface.format()
    }
  }

  const content = JSON.stringify(data, null, 2);
  await fs.writeFile(`src/data/${filename}-contract.json`, content, { encoding: "utf-8"})
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
