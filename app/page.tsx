'use client';

import { useEffect, useState } from 'react';
import { TrendingUp, Zap, Trophy, Bell } from 'lucide-react';
import { ConnectWallet } from './components/ConnectWallet';
import { FrameCreator } from './components/FrameCreator';
import { TokenSwap } from './components/TokenSwap';
import { Leaderboard } from './components/Leaderboard';
import { HolderGatedContent } from './components/HolderGatedContent';

type Tab = 'frames' | 'swap' | 'leaderboard' | 'exclusive';

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('frames');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="animate-pulse-slow">
          <div className="w-16 h-16 bg-accent rounded-lg"></div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-bg">
      {/* Header */}
      <header className="border-b border-surface">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-fg">b402 Bullish Hub</h1>
                <p className="text-sm text-fg/60">Connect, trade, amplify</p>
              </div>
            </div>
            <ConnectWallet />
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="border-b border-surface sticky top-0 bg-bg/95 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto">
            <TabButton
              active={activeTab === 'frames'}
              onClick={() => setActiveTab('frames')}
              icon={<Zap className="w-4 h-4" />}
              label="Create Frames"
            />
            <TabButton
              active={activeTab === 'swap'}
              onClick={() => setActiveTab('swap')}
              icon={<TrendingUp className="w-4 h-4" />}
              label="Swap b402"
            />
            <TabButton
              active={activeTab === 'leaderboard'}
              onClick={() => setActiveTab('leaderboard')}
              icon={<Trophy className="w-4 h-4" />}
              label="Leaderboard"
            />
            <TabButton
              active={activeTab === 'exclusive'}
              onClick={() => setActiveTab('exclusive')}
              icon={<Bell className="w-4 h-4" />}
              label="Exclusive"
            />
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="animate-fade-in">
          {activeTab === 'frames' && <FrameCreator />}
          {activeTab === 'swap' && <TokenSwap />}
          {activeTab === 'leaderboard' && <Leaderboard />}
          {activeTab === 'exclusive' && <HolderGatedContent />}
        </div>
      </div>
    </main>
  );
}

function TabButton({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 px-4 py-3 text-sm font-medium
        transition-all duration-200 border-b-2 whitespace-nowrap
        ${
          active
            ? 'border-accent text-accent'
            : 'border-transparent text-fg/60 hover:text-fg hover:border-fg/20'
        }
      `}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
