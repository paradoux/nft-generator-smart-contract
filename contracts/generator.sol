// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

import "hardhat/console.sol";

contract NFTGenerator is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

  constructor() ERC721 ("SquareNFT", "SQUARE") {
    console.log("This is my contract");
  }

    function makeAnNFT(string calldata tokenURI) public {
        require(bytes(tokenURI).length != 0, "tokenURI can't be empty");
        uint256 newItemId = _tokenIds.current();

        _safeMint(msg.sender, newItemId);

        _setTokenURI(newItemId, tokenURI);

        _tokenIds.increment();
    }
}