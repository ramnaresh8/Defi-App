"use client"; // This ensures the component is treated as a client component

import React from 'react';
import WalletConnector from '../components/WalletConnector';
import SwapComponent from '../components/SwapComponent';

const Home: React.FC = () => {
  return (
    <div>
      <h1>DeFi Wallet Application</h1>
      <WalletConnector />
      <SwapComponent />
    </div>
  );
};

export default Home;

