import { ethers } from "hardhat";

async function main() {
  // Get the contract factory
  const CertificateVerifier = await ethers.getContractFactory("CertificateVerifier");
  
  // Deploy the contract
  const contract = await CertificateVerifier.deploy();
  
  // Wait for deployment confirmation
  await contract.waitForDeployment();
  
  // Get the contract address
  const address = await contract.getAddress();
  console.log(`Contract deployed to: ${address}`);
}

// Handle errors
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});