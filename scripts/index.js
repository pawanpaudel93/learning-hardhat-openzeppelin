const { ethers } = require("hardhat");

// scripts/index.js
async function main() {
    // const accounts = await ethers.provider.listAccounts();
    // console.log("Accounts:", accounts);
    const address = "0x5fbdb2315678afecb367f032d93f642f64180aa3"
    const Box = await ethers.getContractFactory("Box");
    const box = await Box.attach(address);

    // Send a transaction to store() a new value in the Box
    await box.store(23);

    // Call the retrieve() function of the deployed Box contract
    const value = await box.retrieve();
    console.log('Box value is', value.toString());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });