const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Note: Replace these addresses with actual token addresses before deployment
  const stakingTokenAddr = "0x0000000000000000000000000000000000000000"; 
  const rewardTokenAddr = "0x0000000000000000000000000000000000000000";

  const Staking = await hre.ethers.getContractFactory("StakingContract");
  const staking = await Staking.deploy(stakingTokenAddr, rewardTokenAddr);

  await staking.waitForDeployment();

  console.log("Staking Contract deployed to:", staking.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
