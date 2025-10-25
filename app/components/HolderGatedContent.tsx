'use client';

import { Lock, Unlock, Bell, Star } from 'lucide-react';
import { useState } from 'react';

const exclusiveContent = [
  {
    id: 1,
    title: 'Weekly Alpha Report',
    description: 'Exclusive market insights and b402 analysis',
    icon: '📊',
    locked: false,
  },
  {
    id: 2,
    title: 'Community AMA Access',
    description: 'Join live Q&A sessions with the team',
    icon: '🎤',
    locked: false,
  },
  {
    id: 3,
    title: 'Early Feature Access',
    description: 'Test new features before public release',
    icon: '🚀',
    locked: false,
  },
  {
    id: 4,
    title: 'Premium Trading Signals',
    description: 'Advanced trading indicators and alerts',
    icon: '📈',
    locked: true,
  },
];

export function HolderGatedContent() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-fg mb-2">Exclusive Content</h2>
        <p className="text-fg/60">Premium features for b402 holders</p>
      </div>

      {/* Holder Status */}
      <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg p-6 border border-accent/20">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-accent/20 rounded-lg">
              <Star className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-fg">Verified Holder</h3>
              <p className="text-fg/60 text-sm">You hold 50,000 b402 tokens</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-green-400/20 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-slow"></div>
            <span className="text-green-400 text-sm font-medium">Active</span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-accent/20">
          <div className="flex items-center gap-2 text-fg/60">
            <Bell className="w-4 h-4" />
            <span className="text-sm">Exclusive Notifications</span>
          </div>
          <button
            onClick={() => setNotificationsEnabled(!notificationsEnabled)}
            className={`
              relative w-12 h-6 rounded-full transition-all duration-200
              ${notificationsEnabled ? 'bg-accent' : 'bg-surface'}
            `}
          >
            <div
              className={`
                absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-200
                ${notificationsEnabled ? 'left-7' : 'left-1'}
              `}
            ></div>
          </button>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {exclusiveContent.map((content) => (
          <ContentCard key={content.id} content={content} />
        ))}
      </div>

      {/* Upgrade CTA */}
      <div className="bg-surface rounded-lg p-6 text-center">
        <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
          <Lock className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-lg font-bold text-fg mb-2">Unlock More Features</h3>
        <p className="text-fg/60 text-sm mb-4">
          Hold 100,000+ b402 tokens to access premium trading signals and advanced analytics
        </p>
        <button className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all duration-200">
          Get More b402
        </button>
      </div>
    </div>
  );
}

function ContentCard({ content }: { content: typeof exclusiveContent[0] }) {
  return (
    <div
      className={`
        bg-surface rounded-lg p-6 border transition-all duration-200
        ${
          content.locked
            ? 'border-surface opacity-60'
            : 'border-accent/20 hover:border-accent/40'
        }
      `}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl">{content.icon}</div>
        {content.locked ? (
          <Lock className="w-5 h-5 text-fg/40" />
        ) : (
          <Unlock className="w-5 h-5 text-accent" />
        )}
      </div>
      <h3 className="text-lg font-bold text-fg mb-2">{content.title}</h3>
      <p className="text-fg/60 text-sm mb-4">{content.description}</p>
      <button
        disabled={content.locked}
        className={`
          w-full py-2 rounded-lg font-medium transition-all duration-200
          ${
            content.locked
              ? 'bg-surface text-fg/40 cursor-not-allowed'
              : 'bg-accent/20 text-accent hover:bg-accent/30'
          }
        `}
      >
        {content.locked ? 'Locked' : 'Access Now'}
      </button>
    </div>
  );
}
