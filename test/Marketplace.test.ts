import { ethers, waffle } from "hardhat";
import { expect } from "chai";
import { Signer, BigNumber } from "ethers";
import type { NFTMarket } from "../typechain-types";

describe("Marketplace", async () => {
  let holder1: Signer;
  let holder1Addr: string;
  let holder2: Signer;
  let holder2Addr: string;
  let holder3: Signer;
  let holder3Addr: string;
  let holder4: Signer;
  let holder4Addr: string;
  let holder5: Signer;
  let holder5Addr: string;
  let holder6: Signer;
  let holder6Addr: string;

  let nftMarket: NFTMarket;
  
  before(async () => {
    [holder1, holder2, holder3, holder4, holder5, holder6] = await ethers.getSigners();
    holder1Addr = await holder1.getAddress();
    holder2Addr = await holder2.getAddress();
    holder3Addr = await holder3.getAddress();
    holder4Addr = await holder4.getAddress();
    holder5Addr = await holder5.getAddress();
    holder6Addr = await holder6.getAddress();
  });

  beforeEach(async () => {
    const Lottery = await ethers.getContractFactory("Lottery");
    lottery = await Lottery.deploy();
    await lottery.deployed();

  });


  it("Lottery function", async () => {
    await lottery.updateBalance(holder1Addr, 1);
    await lottery.updateBalance(holder2Addr, 2);
    await lottery.updateBalance(holder3Addr, 3);
    await lottery.updateBalance(holder4Addr, 4);    
    await lottery.updateBalance(holder5Addr, 5);
    await lottery.updateBalance(holder6Addr, 6);
    const winnerIndex = await lottery.draw();
    for(let i = 0; i < 10; i++) {
      const value = await lottery.BITree(i);
      console.log(`${i}-index: ${value}`);
    }
    console.log(winnerIndex);
  });
});
