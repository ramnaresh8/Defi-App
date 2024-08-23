"use client";

import React, { useState, useEffect } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';

const WalletConnector: React.FC = () => {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
  const [account, setAccount] = useState<string | null>(null);

  const connectWallet = async () => {
    try {
      const web3Modal = new Web3Modal({
        cacheProvider: true,
        providerOptions: {} 
      });
  
      const instance = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(instance);
      setProvider(provider);
  
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setAccount(address);
  
      // Save session data
      localStorage.setItem('isWalletConnected', 'true');
    } catch (error) {
      console.error('Wallet connection error:', error);
      alert('Failed to connect wallet. Please try again.');
    }
  };
  
  useEffect(() => {
    if (localStorage.getItem('isWalletConnected') === 'true') {
      connectWallet();
    }
  }, []);
  

  return (
    <div>
      {account ? (
        <div>
          <p>Connected Account: {account}</p>
        </div>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
};

export default WalletConnector;
