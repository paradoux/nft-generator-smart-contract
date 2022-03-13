const main = async () => {
  const NFTGenerator = await hre.ethers.getContractFactory("NFTGenerator");
  const myContract = await NFTGenerator.deploy();

  await myContract.deployed();
  console.log("My Contract deployed to:", myContract.address);

  // Call the function.
  const txn = await myContract.sayHello();
  // Wait for it to be mined.
  //   await wait(txn);
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
