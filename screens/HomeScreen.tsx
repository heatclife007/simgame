
import React from 'react';
import { MOCK_ASSETS } from '../constants';

const HomeScreen: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/alex/100" 
              alt="Profile" 
              className="size-12 rounded-full border-2 border-primary/20" 
            />
            <div className="absolute bottom-0 right-0 size-3 bg-success rounded-full border-2 border-background-dark"></div>
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Hoşgeldin,</p>
            <h2 className="text-lg font-bold font-display">Alex Trader 👋</h2>
          </div>
        </div>
        <button className="size-10 rounded-full bg-surface-dark border border-white/5 flex items-center justify-center text-slate-400">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </header>

      {/* Level Card */}
      <div className="bg-surface-dark p-4 rounded-xl border border-white/5">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-primary uppercase tracking-wider">Level 12</span>
          <span className="text-xs text-slate-500 font-medium">Crypto Novice</span>
        </div>
        <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden relative">
          <div className="h-full bg-primary rounded-full" style={{ width: '75%' }}></div>
        </div>
        <div className="flex justify-between mt-2 text-[10px] text-slate-500">
          <span>2,450 XP</span>
          <span>Next: Market Whale 🐋</span>
        </div>
      </div>

      {/* Portfolio Summary */}
      <div className="text-center py-4">
        <p className="text-slate-500 text-sm font-medium mb-1">Toplam Portföy Değeri</p>
        <h1 className="text-4xl font-bold font-display tracking-tight">$12,450.00</h1>
        <div className="inline-flex items-center gap-1 mt-2 px-3 py-1 bg-success/10 text-success rounded-full text-xs font-bold">
          <span className="material-symbols-outlined text-sm">trending_up</span>
          <span>+$450 (3.5%)</span>
        </div>
      </div>

      {/* Performance Chart Placeholder */}
      <div className="bg-surface-dark p-5 rounded-2xl border border-white/5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-bold">Performans</h3>
          <div className="flex gap-2 bg-slate-800 p-1 rounded-full">
            <button className="px-3 py-0.5 rounded-full text-[10px] font-bold bg-primary text-white">24H</button>
            <button className="px-3 py-0.5 rounded-full text-[10px] font-bold text-slate-500">1W</button>
            <button className="px-3 py-0.5 rounded-full text-[10px] font-bold text-slate-500">1M</button>
          </div>
        </div>
        <div className="h-32 flex items-end gap-1">
          {[40, 60, 45, 70, 55, 80, 65, 90, 75, 95].map((val, i) => (
            <div 
              key={i} 
              className="flex-1 bg-primary/20 rounded-t-sm relative group cursor-pointer hover:bg-primary/40 transition-colors"
              style={{ height: `${val}%` }}
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-primary text-white text-[8px] font-bold px-1 rounded transition-opacity">
                {val}%
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Assets List */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold font-display">Varlıkların</h3>
          <button className="text-xs font-bold text-primary">Tümünü Gör</button>
        </div>
        {MOCK_ASSETS.map((asset) => (
          <div key={asset.id} className="flex items-center justify-between p-4 bg-surface-dark rounded-xl border border-white/5 active:scale-[0.98] transition-transform">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full flex items-center justify-center bg-slate-800 text-lg" style={{ color: asset.color }}>
                <span className="material-symbols-outlined">{asset.icon}</span>
              </div>
              <div>
                <p className="text-sm font-bold">{asset.name}</p>
                <p className="text-[10px] text-slate-500 font-medium">{asset.balance} {asset.symbol}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold">${asset.price.toLocaleString()}</p>
              <p className={`text-[10px] font-bold ${asset.change24h >= 0 ? 'text-success' : 'text-danger'}`}>
                {asset.change24h >= 0 ? '+' : ''}{asset.change24h}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
