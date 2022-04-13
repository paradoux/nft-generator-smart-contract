const main = async () => {
  const NFTGenerator = await hre.ethers.getContractFactory("NFTGenerator");
  const myContract = await NFTGenerator.deploy();
  await myContract.deployed();
  console.log("My Contract deployed to:", myContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
