"use client"; // This ensures the component is treated as a client component

import React from 'react';
import WalletConnector from '../components/WalletConnector'; // Adjust the import path if necessary

export default function Home() {
  return (
    <div>
      <h1>Welcome to the DeFi App</h1>
      <p>This is where your wallet connection component will go.</p>
      <WalletConnector /> {/* This is where your wallet connector component will be rendered */}
    </div>
  );
}
