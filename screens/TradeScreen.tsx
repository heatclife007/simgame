
import React, { useState } from 'react';

const TradeScreen: React.FC = () => {
  const [tradeType, setTradeType] = useState<'long' | 'short'>('long');
  const [amount, setAmount] = useState('1000');

  return (
    <div className="flex flex-col min-h-full">
      {/* Top Bar */}
      <div className="p-4 flex items-center justify-between border-b border-white/5 sticky top-0 bg-background-dark z-10">
        <div className="size-10 rounded-full bg-slate-800 border-2 border-primary overflow-hidden">
          <img src="https://picsum.photos/seed/user/100" alt="Avatar" className="w-full h-full object-cover" />
        </div>
        <h2 className="text-base font-bold font-display uppercase tracking-widest">Ticaret Simülatörü</h2>
        <button className="size-10 rounded-full flex items-center justify-center">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </div>

      <div className="p-4 flex flex-col gap-6">
        {/* Market Summary Stats */}
        <div className="flex gap-3">
          <div className="flex-1 bg-surface-dark p-4 rounded-xl border border-white/5 text-center">
            <h3 className="text-xl font-bold font-display">$12,450</h3>
            <div className="flex items-center justify-center gap-1 mt-1 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-xs text-success">trending_up</span>
              Portföy Değeri
            </div>
          </div>
          <div className="flex-1 bg-surface-dark p-4 rounded-xl border border-white/5 text-center">
            <h3 className="text-xl font-bold font-display text-primary">#402</h3>
            <div className="flex items-center justify-center gap-1 mt-1 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-xs text-primary">trophy</span>
              Global Sıralama
            </div>
          </div>
        </div>

        {/* Price Chart Area */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-slate-500 text-xs font-medium">BTC Momentum</p>
              <div className="flex items-baseline gap-2">
                <h2 className="text-3xl font-bold font-display">$45,200</h2>
                <span className="text-xs font-bold text-success bg-success/10 px-1.5 py-0.5 rounded">+1.2%</span>
              </div>
            </div>
            <div className="flex gap-1 bg-slate-800 p-1 rounded-lg">
              <button className="px-3 py-1 rounded-md text-[10px] font-bold bg-slate-700 text-white">1H</button>
              <button className="px-3 py-1 rounded-md text-[10px] font-bold text-slate-500">1D</button>
              <button className="px-3 py-1 rounded-md text-[10px] font-bold text-slate-500">1W</button>
            </div>
          </div>
          
          <div className="h-48 relative border border-primary/20 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent overflow-hidden">
             {/* Mock Chart Line */}
             <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
               <path 
                d="M0 100 C 50 80, 100 120, 150 70 S 250 10, 300 40 S 400 0, 450 30 V 200 H 0 Z" 
                fill="url(#grad1)" 
               />
               <path 
                d="M0 100 C 50 80, 100 120, 150 70 S 250 10, 300 40 S 400 0, 450 30" 
                stroke="#25aff4" 
                strokeWidth="3" 
                fill="none" 
               />
               <defs>
                 <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                   <stop offset="0%" style={{ stopColor: '#25aff4', stopOpacity: 0.3 }} />
                   <stop offset="100%" style={{ stopColor: '#25aff4', stopOpacity: 0 }} />
                 </linearGradient>
               </defs>
             </svg>
             <div className="absolute top-4 right-4 bg-slate-900/80 px-2 py-1 rounded border border-primary/30 text-[9px] font-bold text-primary flex items-center gap-1">
                Büyük Balina Hareketi 🐋
             </div>
          </div>
        </div>

        {/* Trading Console */}
        <div className="bg-surface-dark p-6 rounded-t-3xl border-t border-white/10 mt-auto -mx-4 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
           <div className="flex bg-slate-800 p-1 rounded-full mb-6">
              <button 
                onClick={() => setTradeType('long')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-bold transition-all ${tradeType === 'long' ? 'bg-white text-emerald-500 shadow-lg' : 'text-slate-500'}`}
              >
                <span className="material-symbols-outlined text-lg">trending_up</span>
                ALIM (Long)
              </button>
              <button 
                onClick={() => setTradeType('short')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-bold transition-all ${tradeType === 'short' ? 'bg-white text-rose-500 shadow-lg' : 'text-slate-500'}`}
              >
                <span className="material-symbols-outlined text-lg">trending_down</span>
                SATIŞ (Short)
              </button>
           </div>

           <div className="flex flex-col gap-4">
              <div className="relative">
                <p className="absolute top-2 left-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Yatırım Tutarı</p>
                <input 
                  type="number" 
                  value={amount} 
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 pt-7 pb-2 text-2xl font-bold focus:outline-none focus:border-primary transition-colors font-display" 
                />
                <span className="absolute right-4 bottom-3 text-slate-500 font-bold">USDT</span>
              </div>
              
              <div className="flex gap-2">
                {['10%', '25%', '50%', 'MAX'].map((p) => (
                  <button key={p} className="flex-1 py-2 bg-slate-800 rounded-lg text-xs font-bold text-slate-400 hover:text-primary hover:bg-slate-700 transition-colors">
                    {p}
                  </button>
                ))}
              </div>

              <button className="w-full h-14 bg-gradient-to-r from-primary to-blue-400 rounded-full flex items-center justify-between px-6 shadow-xl shadow-primary/30 active:scale-95 transition-all">
                <span className="text-lg font-bold">EMRİ ONAYLA</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              
              <p className="text-center text-[10px] text-slate-500">
                Komisyon: <span className="text-slate-300">0.05%</span> • Tahmini PnL: <span className="text-success">+24.5%</span>
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default TradeScreen;
