import logo from "./MageLogo.jpg";
import React, { useEffect } from "react";
import "./App.css";
import { useMoralis } from "react-moralis";
import { Button, Box, Heading } from "@chakra-ui/react";
import { Container, Center } from "@chakra-ui/react";
import WalletConnectProvider from "@walletconnect/web3-provider";
import {providers} from "ethers"
// ---------- APP -------------
function App() {
  
const Prov = async () => {
  const provider = new WalletConnectProvider({
    infuraId: "76b2b48a68cb43df9b0654fcd9c30ce7",
    bridge: "https://bridge.walletconnect.org",
    qrcodeModalOptions: {
      mobileLinks: [
        "metamask",
        "trust",
        "rainbow",
      ]
    },
    clientMeta: {
      name: "Trust",
      description: "hjfkdhfjk"
    }
    // qrcode: false,
  });

  await provider.enable();

  

  
  const web3Provider = new providers.Web3Provider(provider);
  console.log("web3Provider", web3Provider)
}

useEffect(() => {
  Prov()
}, [])

  return (
    <div>
      dkdfhkj
      <button>Connect</button>
      </div>
  );
}

export default App;
