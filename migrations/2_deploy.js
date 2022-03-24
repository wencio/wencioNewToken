const wencioNewToken = artifacts.require("wencioNewToken");

module.exports = async function (deployer){
    await deployer.deploy(wencioNewToken);
}