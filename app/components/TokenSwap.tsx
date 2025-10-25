'use client';

import { useState } from 'react';
import { ArrowDown, Settings2 } from 'lucide-react';

const tokens = [
  { symbol: 'ETH', name: 'Ethereum', balance: '1.5' },
  { symbol: 'USDC', name: 'USD Coin', balance: '1000' },
  { symbol: 'WETH', name: 'Wrapped Ether', balance: '0.5' },
];

export function TokenSwap() {
  const [fromToken, setFromToken] = useState(tokens[0]);
  const [toToken] = useState({ symbol: 'b402', name: 'b402 Token', balance: '0' });
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');

  const handleSwap = () => {
    console.log('Swap initiated');
  };

  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-fg mb-2">Swap to b402</h2>
          <p className="text-fg/60">Trade any token for b402</p>
        </div>
        <button className="p-2 bg-surface text-fg rounded-lg hover:bg-surface/80 transition-all duration-200">
          <Settings2 className="w-5 h-5" />
        </button>
      </div>

      <div className="bg-surface rounded-lg p-6 space-y-4">
        {/* From Token */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-fg/60">From</label>
            <span className="text-sm text-fg/60">
              Balance: {fromToken.balance} {fromToken.symbol}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={fromAmount}
              onChange={(e) => {
                setFromAmount(e.target.value);
                setToAmount((parseFloat(e.target.value) * 1000).toString());
              }}
              placeholder="0.0"
              className="flex-1 bg-bg text-fg text-2xl font-bold px-4 py-3 rounded-lg border border-surface focus:border-accent focus:outline-none transition-all duration-200"
            />
            <select
              value={fromToken.symbol}
              onChange={(e) => {
                const token = tokens.find((t) => t.symbol === e.target.value);
                if (token) setFromToken(token);
              }}
              className="bg-bg text-fg px-4 py-3 rounded-lg border border-surface focus:border-accent focus:outline-none transition-all duration-200 cursor-pointer"
            >
              {tokens.map((token) => (
                <option key={token.symbol} value={token.symbol}>
                  {token.symbol}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Swap Arrow */}
        <div className="flex justify-center">
          <div className="p-2 bg-bg rounded-lg border border-surface">
            <ArrowDown className="w-5 h-5 text-accent" />
          </div>
        </div>

        {/* To Token */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-fg/60">To</label>
            <span className="text-sm text-fg/60">
              Balance: {toToken.balance} {toToken.symbol}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={toAmount}
              readOnly
              placeholder="0.0"
              className="flex-1 bg-bg text-fg text-2xl font-bold px-4 py-3 rounded-lg border border-surface"
            />
            <div className="bg-bg text-fg px-4 py-3 rounded-lg border border-surface">
              <span className="font-medium">b402</span>
            </div>
          </div>
        </div>

        {/* Swap Info */}
        {fromAmount && (
          <div className="pt-4 border-t border-bg space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-fg/60">Rate</span>
              <span className="text-fg font-medium">1 {fromToken.symbol} = 1000 b402</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-fg/60">Gas Fee</span>
              <span className="text-green-400 font-medium">Sponsored ✨</span>
            </div>
          </div>
        )}
      </div>

      <button
        onClick={handleSwap}
        disabled={!fromAmount}
        className="w-full py-4 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        {fromAmount ? 'Swap Now' : 'Enter Amount'}
      </button>
    </div>
  );
}
