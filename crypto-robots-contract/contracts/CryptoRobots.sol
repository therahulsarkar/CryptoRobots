//contracts/CryptoRobots.sol
//SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract CryptoRobots is ERC721URIStorage {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenID; //0

    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {}

    function mint( string memory tokenURI) public returns (uint256){ //Here the tokenURI is the ipfs link of the JSON files of individual NFT images 
        _tokenID.increment(); 
        uint256 newItemId = _tokenID.current(); 
        _mint(msg.sender, newItemId); // 0xa9535.....9A7F -> ID
        _setTokenURI(newItemId, tokenURI); //ID -> https://ipfs.io/ipfs/QmWbLc/10.json
 
        return newItemId;
    }
}