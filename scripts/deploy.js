const hre = require("hardhat");

function tokens(n) {
  return ethers.utils.parseEther(n);
}

async function main() {
  const owner = process.env.OWNER;
  const whitelister = process.env.WHITELISTER;

  const HappyFun = await hre.ethers.getContractFactory("HappyFansToken");
  const happyFans = await HappyFun.deploy();

  await happyFans.deployed();

  await happyFans.transfer(owner, tokens('100000000000'));
  await happyFans.transferOwnership(owner);
  await happyFans.transferWhitelister(whitelister);
  
  console.log("HappyFansToken deployed to:", happyFans.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
