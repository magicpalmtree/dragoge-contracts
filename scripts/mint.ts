import { ethers } from "hardhat";

async function mint() {

  const NFTToken = await ethers.getContractFactory("NFT");
  const nftToken = await NFTToken.attach('0xB0f05d25e41FbC2b52013099ED9616f1206Ae21B');
  const buyer = "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199";
  for(let i = 0; i < 9999; i ++) {
    await nftToken.mintTo(buyer);
  }
}

mint();