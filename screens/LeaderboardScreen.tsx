
import React from 'react';
import { MOCK_LEADERS, CURRENT_USER } from '../constants';

const LeaderboardScreen: React.FC = () => {
  const top3 = MOCK_LEADERS.slice(0, 3);
  const others = MOCK_LEADERS.slice(3);

  return (
    <div className="flex flex-col min-h-full">
      <header className="p-4 flex items-center justify-between sticky top-0 bg-background-dark z-10">
        <button className="size-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold font-display tracking-tight">Lider Tablosu</h1>
        <button className="size-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors">
          <span className="material-symbols-outlined">search</span>
        </button>
      </header>

      {/* Tabs */}
      <div className="px-6 py-2">
        <div className="bg-surface-dark p-1 rounded-full flex">
          <button className="flex-1 py-2 text-sm font-bold bg-primary text-white rounded-full shadow-lg">Genel</button>
          <button className="flex-1 py-2 text-sm font-bold text-slate-500">Arkadaşlar</button>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex gap-2 px-6 py-2 overflow-x-auto no-scrollbar">
        <button className="shrink-0 h-8 px-4 rounded-full bg-primary text-white text-[10px] font-bold">Bu Hafta</button>
        <button className="shrink-0 h-8 px-4 rounded-full bg-surface-dark text-slate-500 text-[10px] font-bold border border-white/5">Bu Ay</button>
        <button className="shrink-0 h-8 px-4 rounded-full bg-surface-dark text-slate-500 text-[10px] font-bold border border-white/5">Tüm Zamanlar</button>
      </div>

      {/* Podium */}
      <div className="flex items-end justify-center gap-4 px-4 pt-12 pb-8">
        {/* Rank 2 */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="relative">
            <div className="size-20 rounded-full border-4 border-slate-600 p-0.5 relative z-10 overflow-hidden">
              <img src={top3[1].avatar} alt="" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-slate-700 text-white text-[10px] font-bold px-2 rounded-full border-2 border-background-dark">#2</div>
          </div>
          <div className="text-center mt-2">
            <p className="text-xs font-bold truncate max-w-[80px]">{top3[1].name}</p>
            <p className="text-primary text-xs font-bold">+{top3[1].profitPercent}%</p>
            <span className="text-[9px] text-slate-500 uppercase font-bold tracking-wider">Lvl {top3[1].level}</span>
          </div>
        </div>

        {/* Rank 1 */}
        <div className="flex flex-col items-center gap-2 flex-1 -mt-8 pb-4">
          <div className="relative">
             <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-warning animate-bounce">
                <span className="material-symbols-outlined text-3xl filled">crown</span>
             </div>
            <div className="size-24 rounded-full border-4 border-warning p-0.5 relative z-10 overflow-hidden shadow-[0_0_20px_rgba(250,204,21,0.3)]">
              <img src={top3[0].avatar} alt="" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-warning text-black text-xs font-bold px-3 rounded-full border-2 border-background-dark">#1</div>
          </div>
          <div className="text-center mt-2">
            <p className="text-sm font-bold text-warning truncate max-w-[100px]">{top3[0].name}</p>
            <p className="text-primary text-base font-bold">+{top3[0].profitPercent}%</p>
            <span className="text-[9px] text-slate-500 uppercase font-bold tracking-wider">Lvl {top3[0].level} • Balina</span>
          </div>
        </div>

        {/* Rank 3 */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="relative">
            <div className="size-20 rounded-full border-4 border-amber-800 p-0.5 relative z-10 overflow-hidden">
              <img src={top3[2].avatar} alt="" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-amber-800 text-white text-[10px] font-bold px-2 rounded-full border-2 border-background-dark">#3</div>
          </div>
          <div className="text-center mt-2">
            <p className="text-xs font-bold truncate max-w-[80px]">{top3[2].name}</p>
            <p className="text-primary text-xs font-bold">+{top3[2].profitPercent}%</p>
            <span className="text-[9px] text-slate-500 uppercase font-bold tracking-wider">Lvl {top3[2].level}</span>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="bg-surface-dark rounded-t-3xl p-6 min-h-[400px]">
        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Diğer Oyuncular</h3>
        <div className="flex flex-col gap-3">
          {others.map((player) => (
            <div key={player.rank} className="flex items-center gap-4 p-3 bg-background-dark/50 rounded-2xl border border-white/5">
              <span className="text-slate-500 font-bold w-4 text-center text-xs">{player.rank}</span>
              <div className="relative size-11 flex-shrink-0">
                <img src={player.avatar} alt="" className="size-full rounded-full object-cover" />
                <div className="absolute -bottom-1 -right-1 bg-slate-700 text-[8px] text-white px-1.5 rounded-md border border-background-dark font-bold">Lvl {player.level}</div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold truncate">{player.name}</h4>
                <p className="text-[10px] text-slate-500">Kâr: {player.profit}</p>
              </div>
              <div className="flex items-center gap-1 text-primary font-bold text-sm">
                 <span className="material-symbols-outlined text-sm">trending_up</span>
                 {player.profitPercent}%
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky User Bar */}
      <div className="fixed bottom-24 left-0 right-0 max-w-md mx-auto px-4 z-20 pointer-events-none">
        <div className="bg-surface-card p-4 rounded-2xl border border-slate-700 shadow-2xl pointer-events-auto flex items-center gap-4">
          <div className="text-center">
            <p className="text-[8px] text-slate-500 font-bold uppercase">Sıra</p>
            <p className="text-lg font-bold">{CURRENT_USER.rank}</p>
          </div>
          <div className="relative size-12 flex-shrink-0">
             <img src={CURRENT_USER.avatar} alt="" className="size-full rounded-full border-2 border-primary object-cover" />
             <div className="absolute -bottom-1 -right-1 bg-primary text-[8px] text-white px-1.5 rounded-md border border-background-dark font-bold">Lvl {CURRENT_USER.level}</div>
          </div>
          <div className="flex-1">
             <h4 className="text-sm font-bold">Siz ({CURRENT_USER.name})</h4>
             <div className="flex items-center gap-2">
                <span className="text-[10px] text-slate-500 font-bold">$12,450</span>
                <span className="text-[10px] text-success font-bold">+{CURRENT_USER.profitPercent}%</span>
             </div>
          </div>
          <button className="size-10 rounded-full bg-slate-800 text-white flex items-center justify-center active:bg-primary transition-colors">
            <span className="material-symbols-outlined text-xl">share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardScreen;
