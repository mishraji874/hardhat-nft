const { run } = require('hardhat')

const verify = async (contractAddress, args) => {
    console.log("Verifying contract...")
    try {
        await run("verify: verify", {
            address: contractAddress,
            constructorArguments: args
        })
    } catch (e) {
        if(e.message.toLowercase().includes("already verified")) {
            console.log("Already Verified!")
        } else {
            console.error(e);
        }
    }
}

module.exports = {
    verify,
}