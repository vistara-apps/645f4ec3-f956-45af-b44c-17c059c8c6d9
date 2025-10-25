'use client';

import { Trophy, TrendingUp, Users } from 'lucide-react';

const leaderboardData = [
  {
    rank: 1,
    fid: '9152',
    username: 'bullwhale',
    displayName: 'Bull Whale',
    holdings: '1,250,000',
    socialScore: 9850,
    pfp: '🐋',
  },
  {
    rank: 2,
    fid: '7834',
    username: 'diamondhands',
    displayName: 'Diamond Hands',
    holdings: '980,000',
    socialScore: 8920,
    pfp: '💎',
  },
  {
    rank: 3,
    fid: '5621',
    username: 'moonshot',
    displayName: 'Moon Shot',
    holdings: '750,000',
    socialScore: 7650,
    pfp: '🚀',
  },
  {
    rank: 4,
    fid: '4892',
    username: 'hodlking',
    displayName: 'HODL King',
    holdings: '620,000',
    socialScore: 6840,
    pfp: '👑',
  },
  {
    rank: 5,
    fid: '3456',
    username: 'bullrunner',
    displayName: 'Bull Runner',
    holdings: '500,000',
    socialScore: 5920,
    pfp: '🏃',
  },
];

export function Leaderboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-fg mb-2">Top Holders</h2>
        <p className="text-fg/60">Community leaders and contributors</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          icon={<Users className="w-5 h-5" />}
          label="Total Holders"
          value="12,458"
          change="+8.2%"
        />
        <StatCard
          icon={<TrendingUp className="w-5 h-5" />}
          label="Total Supply"
          value="100M b402"
          change="+2.1%"
        />
        <StatCard
          icon={<Trophy className="w-5 h-5" />}
          label="Active Contributors"
          value="3,842"
          change="+15.3%"
        />
      </div>

      {/* Leaderboard Table */}
      <div className="bg-surface rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-bg">
                <th className="px-6 py-4 text-left text-sm font-medium text-fg/60">Rank</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-fg/60">User</th>
                <th className="px-6 py-4 text-right text-sm font-medium text-fg/60">Holdings</th>
                <th className="px-6 py-4 text-right text-sm font-medium text-fg/60">Social Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((entry) => (
                <tr
                  key={entry.fid}
                  className="border-b border-bg last:border-0 hover:bg-bg/50 transition-all duration-200"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {entry.rank <= 3 && (
                        <Trophy
                          className={`w-5 h-5 ${
                            entry.rank === 1
                              ? 'text-yellow-400'
                              : entry.rank === 2
                              ? 'text-gray-400'
                              : 'text-orange-400'
                          }`}
                        />
                      )}
                      <span className="text-fg font-medium">#{entry.rank}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center text-xl">
                        {entry.pfp}
                      </div>
                      <div>
                        <p className="text-fg font-medium">{entry.displayName}</p>
                        <p className="text-fg/60 text-sm">@{entry.username}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <p className="text-fg font-medium">{entry.holdings}</p>
                    <p className="text-fg/60 text-sm">b402</p>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-fg font-medium">{entry.socialScore}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  change,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  change: string;
}) {
  const isPositive = change.startsWith('+');

  return (
    <div className="bg-surface rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-accent/20 rounded-lg text-accent">{icon}</div>
        <span
          className={`text-sm font-medium ${
            isPositive ? 'text-green-400' : 'text-red-400'
          }`}
        >
          {change}
        </span>
      </div>
      <p className="text-fg/60 text-sm mb-1">{label}</p>
      <p className="text-fg text-2xl font-bold">{value}</p>
    </div>
  );
}
