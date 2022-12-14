// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract DiscountManager {
        
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    address payable public owner;
    uint256 public dividend = 1000;
    uint256 public minAstrogeCount = 1;
    uint256 public minDogepunksCount = 10;

    IERC721 public astrogeToken;
    IERC721 public dogepunksToken;

    constructor() {
        owner = payable(msg.sender);
        astrogeToken = IERC721(0xe0CA71b33b1E640Cb761c10fa9Cbb18f123e5c3a);
        dogepunksToken = IERC721(0x7e99f08a92B9A99bA4ba682326Ff7c91AD6cbFE4);
    }

    function getDiscount(address buyer) external view returns (uint256 discount) {
        uint256 astrogeCount = astrogeToken.balanceOf(buyer);
        if(astrogeCount >= minAstrogeCount) return 0;
        
        uint256 dogepunksCount = dogepunksToken.balanceOf(buyer);
        if(dogepunksCount >= minDogepunksCount) return 0;

        return dividend;
    }
    
    function setDividend(uint256 _dividend) public onlyOwner {
        dividend = _dividend;
    }

    function setAstroge(address _astrogeAddr) public onlyOwner {
        astrogeToken = IERC721(_astrogeAddr);
    }

    function setDogepunksToken(address _dogepunkAddr) public onlyOwner {
        dogepunksToken = IERC721(_dogepunkAddr);
    }

    function setMinAstrogeCount(uint256 _minAstrogeCount) public onlyOwner {
        minAstrogeCount = _minAstrogeCount;
    }

    function setMinDogepunksCount(uint256 _minDogepunksCount) public onlyOwner {
        minDogepunksCount = _minDogepunksCount;
    }
}