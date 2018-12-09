var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "range anchor trophy jeans column stool emotion hurdle sun hamster avocado kite";

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*",
      gas: 3000000
    },
    ropsten: {
      provider: ()=>{
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/6eba0f6bbeda4f62aa9b6ac51c83fc7a");
      },
      network_id: 3,
      gas: 4500000,
      gasPrice: 10000000000
    },
    rinkeby: {
      provider: ()=>{
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/338acf5c708a41fba4226891eb8564f5");
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000
    }
  }
};
