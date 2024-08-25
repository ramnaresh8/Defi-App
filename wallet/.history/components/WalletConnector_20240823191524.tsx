import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const WalletConnector: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        console.log('Connected to wallet:', accounts[0]);
      } catch (error) {
        console.error('Error connecting to MetaMask', error);
      }
    } else {
      alert('MetaMask is not installed. Please install it to use this app.');
    }
  };

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
        } else {
          setWalletAddress(null);
        }
      });

      window.ethereum.on('chainChanged', (_chainId: string) => {
        window.location.reload();
      });
    }
  }, []);

  return (
    <div>
      <button onClick={connectWallet}>
        {walletAddress ? `Connected: ${walletAddress}` : 'Connect to MetaMask'}
      </button>
    </div>
  );
};

export default WalletConnector;
