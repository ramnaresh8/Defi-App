"use client"; // This ensures the component is treated as a client component

// pages/index.tsx
import React from 'react';
import WalletConnector from '../components/WalletConnector';

const Home: React.FC = () => {
  return (
    <div>
      <h1>My DeFi Application</h1>
      <WalletConnector />
      {/* Other components like token swapping, price visualization, etc. */}
    </div>
  );
};

export default Home;

