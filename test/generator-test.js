const { expect } = require("chai");

describe("NFTGenerator contract", () => {
  it("should error when tokenURI is empty", async () => {
    const NFTGenerator = await ethers.getContractFactory("NFTGenerator");
    const contract = await NFTGenerator.deploy();
    await contract.deployed();

    await expect(contract.makeAnNFT("")).to.be.revertedWith(
      "tokenURI can't be empty"
    );
  });
});
