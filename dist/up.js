(async () => {
  let importee;
  globalThis.App = {};
  // Is there is an injected web3 instance?
  if (globalThis.web3) {
    App.web3Provider = web3.currentProvider;
    globalThis.web3 = new Web3(web3.currentProvider);
  } else {
    await import('./web3.min-412bfc1d.js');
    // If no injected web3 instance is detected, fallback to Ganache CLI.
    App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:8545');
    globalThis.web3 = new Web3(App.web3Provider);
  }
  importee = await import('./abi-1933b96d.js');  
  const abi = importee.default;
  
  globalThis.PrivateUP = new web3.eth.Contract(abi, '0x8ce3de2c3d3dc0727fbd6e79912b3db6c4f06e90');

})();
