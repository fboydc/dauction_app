var DeedRepository = require('./contracts/DeedRepository')
var AuctionRepository = require('./contracts/AuctionRepository')

module.exports = {
    JSONRPC_ENDPOINT: 'https://rinkeby.infura.io/v3/338acf5c708a41fba4226891eb8564f5',
    JSONRPC_WS_ENDPOINT: 'wss://rinkeby.infura.io/ws/v3/338acf5c708a41fba4226891eb8564f5', //'ws://52.59.238.144:8546',
    BZZ_ENDPOINT: 'http://localhost:8500',
    SHH_ENDPOINT: 'ws://52.59.238.144:8546',

    DEEDREPOSITORY_ADDRESS: '0x72342f973cce9e40e3a132e9d698a770e8117fef',
    AUCTIONREPOSITORY_ADDRESS: '0xeb1a09c2aa752d51617272a104e19aac283e6b98',

    DEEDREPOSITORY_ABI: DeedRepository.abi,
    AUCTIONREPOSITORY_ABI: AuctionRepository.abi,

    GAS_AMOUNT: 500000,

    //whisper settings
    WHISPER_SHARED_KEY: '0x8bda3abeb454847b515fa9b404cede50b1cc63cfdeddd4999d074284b4c21e15'

}

// web3.eth.sendTransaction({from: web3.eth.accounts[0], to: "0x6f0023D1CFe5A7A56F96e61E0169B775Ac97f90E" , value: web3.toWei(1, 'ether'), gasLimit: 21000, gasPrice: 20000000000})
