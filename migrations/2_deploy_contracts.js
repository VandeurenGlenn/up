// const ConvertLib = artifacts.require("ConvertLib");
const PrivateUP = artifacts.require("PrivateUP");

module.exports = function(deployer) {
  // deployer.deploy(ConvertLib);
  // deployer.link(ConvertLib, up);
  deployer.deploy(PrivateUP);
};