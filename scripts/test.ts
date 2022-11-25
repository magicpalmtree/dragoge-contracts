import { ethers } from "hardhat";

async function test() {
  const NFTToken = await ethers.getContractFactory("NFT");
  const nftToken = await NFTToken.attach('0xB0f05d25e41FbC2b52013099ED9616f1206Ae21B');
  const tokenURI = await nftToken.tokenURI(1);
  console.log('tokenURI: ', tokenURI);
  const totalSupply = await nftToken.totalSupply();
  console.log('total supply', totalSupply);
}

test();