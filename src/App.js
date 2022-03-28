import logo from "./MageLogo.jpg";
import React, { useEffect } from "react";
import "./App.css";
import { useMoralis } from "react-moralis";
// import WalletConnectProvider from "@walletconnect/web3-provider";
import {providers} from "ethers"
import Onboard from '@web3-onboard/core'
import injectedModule from '@web3-onboard/injected-wallets'

// const MAINNET_RPC_URL =
// ---------- APP -------------
function App() {

  const MAINNET_RPC_URL = 'https://mainnet.infura.io/v3/c9b9223ea0ee4e159c68d2cd3554a5a5'

  const injected = injectedModule()

  const onBoard = Onboard({
    wallets: [injected],
    chains: [
      {
        id: '0x1',
        token: "ETH",
        label: "Ethereum Mainnet",
        rpcUrl: MAINNET_RPC_URL
      }
    ],
    appMetadata: {
      name: "Mutahir",
      icon: "https://png.pngtree.com/png-clipart/20190920/original/pngtree-correct-icon-png-image_4602219.jpg",
      description: "Hello<<>>"
    }
  })

  async function connectWallet() {
    const wallets = await onBoard.connectWallet()
    console.log(wallets)
  }
  
  //  Call method below when you want user to select a wallet
  connectWallet()

  return (
    <div>
      dkdfhkj
      <button >Connect</button>
      </div>
  );
}

export default App;
