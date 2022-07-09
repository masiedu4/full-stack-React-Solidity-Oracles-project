/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 09/07/2022 - 10:13:36
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 09/07/2022
 * - Author          : Michael
 * - Modification    :
 **/
const { ethers } = require("hardhat");

async function main() {
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so fundContract here is a factory for instances of our FundMe contract.
  */
  const fundContract = await ethers.getContractFactory("FundMe");

  // here we deploy the contract
  const deployedFundContract = await fundContract.deploy();

  // Wait for it to finish deploying
  await deployedFundContract.deployed();

  // print the address of the deployed contract
  console.log("Fund Contract Address:", deployedFundContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
