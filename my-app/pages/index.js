import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useEffect, useRef, useState } from "react";
import Web3Modal, { providers } from "web3modal";

export default function Home() {
  const [walletConnected, setwalletConnected] = useState(false);
  const [numOfWhitelisted, setNumOfWhitelisted] = useState(0);
  const web3ModalRef = useRef();
  

const getProviderSigner = async(needSigner = false) => {
  try{
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.web3Provider(provider);
    const {chainId} = await web3Provider.getNetwork();
    if(chainId !== 5) {
      window.alert("Change the network to Goerli");
      throw new Error("Change the network to Goerli");
    }
    return web3Provider;
  }
  catch(err){
    console.error(err);
  }
}

const connectWallet = async() => {
  try{
    await getProviderSigner()
    setwalletConnected(true)
    checkIfAddressIsWhitelisted();
    getNumberOfWhitelisted();
  }
  catch(err){
    console.error(err)
  }
}

  //useeffect: loads the page and asks for pop of wallets, any change in credentials(variables) will load the page again and function will be called
useEffect(() => {
  if(!walletConnected){
  //if wallet is not conected then use web3 modal and set up the connection
  //useRef: remain connected once set up
    web3ModalRef.current = new Web3Modal({
      network: "goerli",
      providerOptions: {},
      disabledInjectionProvider: false,
    });
    connectWallet();
  }
}, [walletConnected]);
  return (
    <div>
      <Head>
        <title>Whitelist dApp</title>
        <meta name="description" content="Whitelist-dApp"/>
      </Head>
        <div className={styles.main}>
          <h1 className={styles.title}>Welcome to Developer's NFT</h1>
          <div className={styles.description}>
            {numOfWhitelisted} have already joined the Whitelist
          </div>
        <div>
          <img className={styles.image} src="./crypto-devs.svg"/></div>  
        </div>
      <footer className={styles.footer}>
          Made with &#10084; by Ashhh
      </footer>
    </div>

  );
}