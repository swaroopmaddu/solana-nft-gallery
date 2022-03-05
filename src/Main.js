import React, { Fragment, useEffect, useMemo, useState } from 'react';
import './index.css';
import App from './App';
import NavigationBar from "./navbar/NavigationBar";
import { ConnectionProvider, WalletProvider, } from "@solana/wallet-adapter-react";
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  SolletExtensionWalletAdapter,
  SolletWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import Footer from './navbar/footer';


// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");
const Main = () => {

    const [network, setNetwork] = useState(WalletAdapterNetwork.Mainnet);
    const [variant, setVariant] = useState("success");
    const [title, setTitle] = useState("Mainnet");


    useEffect(() => {
        console.log(`Network changed ${network}`);
    }, [network]);

    const endpoint = useMemo(() => clusterApiUrl(network), [network]);


    const wallets = useMemo(
      () => [
        new PhantomWalletAdapter(),
        new SlopeWalletAdapter(),
        new SolflareWalletAdapter({ network }),
        new TorusWalletAdapter(),
        new LedgerWalletAdapter(),
        new SolletWalletAdapter({ network }),
        new SolletExtensionWalletAdapter({ network }),
      ],
      [network]
    );

    return (
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <Fragment>
              <NavigationBar
                setNetwork={setNetwork}
                variant={variant}
                setVariant={setVariant}
                title={title}
                setTitle={setTitle}
              />
              <App connection={endpoint} variant={variant} title={title} />
              <Footer/>
            </Fragment>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    );
}
export default Main;