import { HardhatUserConfig } from "hardhat/config";
import dotenv from "dotenv";
import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-toolbox";

import "./tasks/nft";

dotenv.config();

const config: HardhatUserConfig = {
  defaultNetwork: 'viction',
  networks: {
    hardhat: {
    },
    viction: {
      url: process.env.VICTION_TESTNET_RPC_URL!,
      accounts: [process.env.PRIVATE_KEY!]
    }
  },
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  }
 
};

export default config;
