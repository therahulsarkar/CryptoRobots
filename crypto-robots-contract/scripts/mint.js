const { ethers } = require('hardhat');
const CryptoRobotsJSON = require('../artifacts/contracts/CryptoRobots.sol/CryptoRobots.json')

async function main(){
    const abi = CryptoRobotsJSON.abi;
    const provider = new ethers.providers.InfuraProvider("rinkeby", process.env.RINKEBY_ID);
    const wallet = new ethers.Wallet(process.env.RINKEBY_PRIVATE_KEY, provider);
    const signer = wallet.connect(provider);
    const cryptoRobots = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, signer);
    await cryptoRobots.mint('https://ipfs.io/ipfs/QmWbLcGAL9PZPo6wo6ApsLCTV8AsA2582AQRVJmYQcfVsr/10.json');
    console.log('NFT minted');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
