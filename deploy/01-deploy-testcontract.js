require('dotenv').config();
const {utils: {parseUnits}} = ethers;
module.exports = async ({
  getNamedAccounts,
  deployments,
}) => {
  const {deploy, catchUnknownSigner, log} = deployments;
  const {deployer} = await getNamedAccounts();
  await catchUnknownSigner(
    deploy('TestContract', {
      from: deployer,
      gasPrice: parseUnits('60', 'gwei'),
      proxy: {
        owner: deployer,
        proxyContract: 'OpenZeppelinTransparentProxy'
      },
      log: true,
    })  
  );
  log('Deployed');
};
module.exports.tags = ['test', 'polygonMumbai', 'ftmTestnet', 'skaletest'];
