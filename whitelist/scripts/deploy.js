const { ethers } = require("hardhat");

async function main() {
const whitelistContract = await ethers.getContractFactory("Whitelist");
//creating an instance of the smart contract

const deployedWhitelistContract = await whitelistContract.deploy(10);
//Deploy with 10 max

await deployedWhitelistContract.deployed();
//wait for finishing the deployment

console.log("Whitelist Contract Address: ", deployedWhitelistContract.address);
}

//call the main function to check error
main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});