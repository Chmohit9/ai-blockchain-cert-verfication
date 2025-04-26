import { expect } from "chai";
import hre from "hardhat";       // ✅ Correct
const { ethers } = hre;   

describe("CertificateVerifier", function() {
  it("Should return the right name", async function() {
    const Contract = await ethers.getContractFactory("CertificateVerifier");
    const contract = await Contract.deploy();
    expect(await contract.getAddress()).to.be.properAddress;
  });
});