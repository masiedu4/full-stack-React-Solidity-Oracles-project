/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 10/07/2022 - 13:01:34
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 10/07/2022
 * - Author          : Michael
 * - Modification    :
 **/
import React, { useState, createContext, useEffect } from "react";
import { ethers } from "ethers";

export const Context = createContext();
import { address, abi } from "../utils/constants";

// set up the provider, signer and contract

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(address, abi, signer);
  return contract;
}
export const ContextProvider = ({ children }) => {
  const [contract, setContract] = useState(getEthereumContract());
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState("Click to connect!");
  const [buttonConnectText, setButtonConnectText] = useState("Connect Wallet");



  // get ethers.js contract instance on load
  useEffect(() => {
    setContract(getEthereumContract());
    console.log(contract);
  }, []);

  // connect wallet to contract
  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("Please install MetaMask!");
        return;
      } else {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0].slice(0, 4) + "..." + accounts[0].slice(-4);
        setAccount(account);
        setButtonConnectText("Wallet Connected!")
        setIsConnected(true);
      }
    } catch (error) {
      console.log(error);

    }
  }

  return (<Context.Provider value={{ isConnected, buttonConnectText, account, connectWallet }}>{children}</Context.Provider>);
};

