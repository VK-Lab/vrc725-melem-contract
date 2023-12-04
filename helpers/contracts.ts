import { Contract, ethers } from "ethers";
import { HardhatRuntimeEnvironment, HttpNetworkUserConfig } from "hardhat/types";
import configs from '../hardhat.config';

export function getUserNetworkConfig(): HttpNetworkUserConfig {
  return <HttpNetworkUserConfig> configs.networks?.[configs.defaultNetwork as string];
}

export function getProvider(): ethers.JsonRpcProvider {
    const networkConfig: HttpNetworkUserConfig = getUserNetworkConfig();

    return new ethers.JsonRpcProvider(
      networkConfig.url,
    );
}

export function getContract(
    name: string,
    hre: HardhatRuntimeEnvironment
  ): Promise<Contract> {
    if (!hre) {
      throw new Error('Hardhat runtime environment is undefined');
    }
  
    const WALLET = new ethers.Wallet(process.env.PRIVATE_KEY!, getProvider());
    return hre.ethers.getContractAt(name, process.env.CONTRACT_ADDRESS!, WALLET);
  }