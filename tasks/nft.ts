import { task } from "hardhat/config";
import { Contract } from "ethers";
import { TransactionResponse } from "@ethersproject/abstract-provider";
import { getContract } from "../helpers/contracts";

task("mint-nft", "Mint an NFT")
  .setAction(async (_t, hre) => {
    return getContract("NFTSimple", hre)
      .then((contract: Contract) => {
        return contract.mint('0xCE16CDf11574629cAC4550D1f215e6e393eB4C5D', {
          gasLimit: 500_000,
        });
      })
      .then((tr: TransactionResponse) => {
        process.stdout.write(`TX hash: ${tr.hash}`);
      });
  });

task("total-supply", "Total Supply")
  .setAction(async (_t, hre) => {
    return getContract("NFTSimple", hre)
      .then(async (contract: Contract) => {
        const total = await contract.totalSupply({
          gasLimit: 500_000,
        });

        process.stdout.write(`Total: ${total}`);
      })
  });


// task('token-uri', "Get token uri")
//   .addParam('id')
//   .setAction(async (_t, hre) => {
//     return getContract("NFTSimple", hre)
//       .then((contract: Contract) => {
//         return contract.tokenURI('0xCE16CDf11574629cAC4550D1f215e6e393eB4C5D', {
//           gasLimit: 500_000,
//         });
//       })
//       .then((tr: TransactionResponse) => {
//         process.stdout.write(`TX hash: ${tr.hash}`);
//       });
//   });