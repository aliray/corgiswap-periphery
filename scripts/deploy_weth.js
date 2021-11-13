const hre = require("hardhat")

async function main() {
    const weth = await hre.ethers.getContractFactory("WETH9")
    const wethContract = await weth.deploy()
    await wethContract.deployed()
    console.log("weth9 address", wethContract.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })