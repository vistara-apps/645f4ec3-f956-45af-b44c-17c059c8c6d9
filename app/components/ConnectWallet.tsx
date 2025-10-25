'use client';

import { useState } from 'react';
import { Wallet } from 'lucide-react';

export function ConnectWallet() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState('');

  const handleConnect = () => {
    // Simulate wallet connection
    setIsConnected(true);
    setAddress('0x1234...5678');
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setAddress('');
  };

  if (isConnected) {
    return (
      <button
        onClick={handleDisconnect}
        className="flex items-center gap-2 px-4 py-2 bg-surface text-fg rounded-lg hover:bg-surface/80 transition-all duration-200"
      >
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-slow"></div>
        <span className="text-sm font-medium">{address}</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleConnect}
      className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all duration-200"
    >
      <Wallet className="w-4 h-4" />
      <span className="text-sm font-medium">Connect Wallet</span>
    </button>
  );
}
