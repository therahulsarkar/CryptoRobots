const { ethers } = require('hardhat');

async function main(){
  const CryptoRobotsContract = await ethers.getContractFactory('CryptoRobots');   // Getting the Smart contract 
  //Creating an instance after Calling the .deploy() method for the smart contract & passing the argument for the constructor
  const cryptoRobots = await CryptoRobotsContract.deploy("CryptoRobots", "CRTS");  //Arguments for the constructor

  await cryptoRobots.deployed();
  console.log(`Contract successfully deployed to ${cryptoRobots.address}`);
  const newItemId = await cryptoRobots.mint("https://ipfs.io/ipfs/QmWbLcGAL9PZPo6wo6ApsLCTV8AsA2582AQRVJmYQcfVsr/1.json");
  console.log(`NFT minted successfully :: ${newItemId}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  /*
    try {
    await cryptoRobots.deployed();
    console.log(`Contract successfully deployed to ${cryptoRobots.address}`);
    mintNFT();
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }

  const mintNFT = async () =>{
    try {
      const newItemId = await cryptoRobots.mint("https://ipfs.io/ipfs/QmWbLcGAL9PZPo6wo6ApsLCTV8AsA2582AQRVJmYQcfVsr/1.json");
      console.log(`NFT minted successfully :: ${newItemId}`);
    } catch (err) { 
      console.log(`Minting Error: ${err.message}`);
    }
  }
  
  */