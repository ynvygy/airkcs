// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hardhat = require("hardhat");
const fs = require("fs/promises")

async function main() {
  const Escrow = await hre.ethers.getContractFactory("Escrow");
  const escrowContract = await Escrow.deploy();
  await escrowContract.deployed()

  console.log("Escrow contract deployed to:", escrowContract.address);

  const Listings = await hre.ethers.getContractFactory("Listings");
  const listingsContract = await Listings.deploy();
  await listingsContract.deployed()

  console.log("Listings contract deployed to:", listingsContract.address);

  await writeDeploymentInfo("escrow", escrowContract)
  await writeDeploymentInfo("listings" ,listingsContract)
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
  await fs.writeFile(`${filename}-contract.json`, content, { encoding: "utf-8"})
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
