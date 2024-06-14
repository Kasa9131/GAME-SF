const GameToken = artifacts.require("GameToken");
const CardNFT = artifacts.require("CardNFT");

module.exports = function (deployer) {
  deployer.deploy(GameToken, 1000000); // Initial supply of 1,000,000 tokens
  deployer.deploy(CardNFT);
};
