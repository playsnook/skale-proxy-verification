require('dotenv').config();

require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require('hardhat-deploy');

require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: {
    compilers: [
      {
        version: '0.8.15',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          },
        }
      },
      {
        version: '0.8.10',
        settings: {
          optimizer: {
            enabled: true,
            runs: 999999
          },
        }
      },
      
    ]
  },
  
  namedAccounts: {
    deployer: 0,
  },

  networks: {
    polygonMumbai: { 
      url: process.env.RPC_POLYGONMUMBAI,
      accounts: [
        process.env.DEPLOYER_PRIVATE_KEY
      ]
    },
    ftmTestnet: {
      url: process.env.RPC_FTMTESTNET,
      accounts: [
        process.env.DEPLOYER_PRIVATE_KEY
      ]
    },
    rinkeby: {
      url: process.env.RPC_RINKEBY,
      accounts: [
        process.env.DEPLOYER_PRIVATE_KEY
      ]
    },
    skaletest: {
      url: process.env.RPC_SKALETEST,
      accounts: [
        process.env.DEPLOYER_PRIVATE_KEY
      ]
    }
  },
  etherscan: {
    apiKey: {
      ftmTestnet: process.env.ETHERSCAN_TOKEN_FTMTESTNET,
      polygonMumbai: process.env.ETHERSCAN_TOKEN_POLYGONMUMBAI,
      skaletest: process.env.ETHERSCAN_TOKEN_SKALETEST
    },
    customChains: [
      {
        network: "skaletest",
        chainId: 1211818568165862,
        urls: {
          apiURL: process.env.ETHERSCAN_SKALETEST_API_URL,
          browserURL: process.env.ETHERSCAN_SKALETEST_BROWSER_URL
        }
      }
    ]
  }
};
