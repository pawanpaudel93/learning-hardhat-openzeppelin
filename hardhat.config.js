require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
const { infuraApiKey, mnemonic } = require("./secret.json");

module.exports = {
  solidity: "0.8.10",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${infuraApiKey}`,
      accounts: { mnemonic: mnemonic },
    },
  },
};
