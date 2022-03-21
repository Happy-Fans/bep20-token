require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");
require("hardhat-deploy-ethers");
require("solidity-coverage");
require("dotenv").config();

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.5.16",
    settings: {
      optimizer: {
        enabled: true,
        runs: 5000
      }
    }
  },
  networks: {
  // Binance Smart Chain
    bsc: {
      url: 'https://bsc-dataseed.binance.org/',
      accounts: { mnemonic: process.env.MNEMONIC },
      chainId: 56
    },
    bscTestnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
      accounts: { mnemonic: process.env.MNEMONIC },
      chainId: 97
    }
  },
  etherscan: {
    apiKey: {
      // Binance Smart Chain
      bsc: process.env.BSCSCAN_KEY,
      bscTestnet: process.env.BSCSCAN_KEY,
    }
  },
  namedAccounts: {
    deployer: 0,
    newOwner: 1
  }
};

