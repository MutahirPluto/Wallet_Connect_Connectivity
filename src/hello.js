async function authenticate() {
    try {
     if (typeof web3 !== 'undefined') {
       const user = await Moralis.authenticate();
       web3 = await Moralis.enable();
   } else {
     const user = await Moralis.authenticate({  provider: "walletconnect"});
     web3 = await Moralis.enable({  provider: "walletconnect" });
   }
       walletAddress = user.get('ethAddress');
     } catch (error) {
       console.log('authenticate failed', error);
     }
   }