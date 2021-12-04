const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = process.env.mnemonic;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/0f2fd6eb9b2e431d8842fb2641370a7f")
      },
      network_id: 4
    }
  }
};
