
import React from 'react';
import { MOCK_QUESTS } from '../constants';

const QuestScreen: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 p-4">
      {/* App Bar */}
      <header className="flex items-center justify-between py-2">
        <button className="size-10 flex items-center justify-center rounded-full">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold font-display">Görev Merkezi</h2>
        <button className="size-10 flex items-center justify-center rounded-full text-slate-500">
          <span className="material-symbols-outlined">help</span>
        </button>
      </header>

      {/* Level Card */}
      <div className="bg-surface-card rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 size-32 bg-primary/10 rounded-full blur-3xl -mr-12 -mt-12"></div>
        <div className="relative z-10">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Mevcut Seviye</p>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold font-display">Seviye 5 Tüccar</h3>
            <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/20">
               <span className="material-symbols-outlined">auto_graph</span>
            </div>
          </div>
          
          <div className="flex justify-between items-end mb-2">
            <span className="text-lg font-bold">750 <span className="text-xs font-normal text-slate-500">XP</span></span>
            <span className="text-xs text-slate-500 font-medium">1000 XP Hedef</span>
          </div>
          <div className="h-3 rounded-full bg-slate-800 overflow-hidden">
            <div className="h-full bg-primary rounded-full shadow-[0_0_15px_rgba(37,175,244,0.4)]" style={{ width: '75%' }}></div>
          </div>
          <p className="text-right text-[10px] text-slate-500 mt-2">Sonraki seviyeye 250 XP kaldı</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="flex gap-3">
         <div className="flex-1 bg-surface-card p-4 rounded-2xl border border-white/5">
            <div className="flex items-center gap-2 mb-2">
               <span className="material-symbols-outlined text-orange-500 text-lg">local_fire_department</span>
               <p className="text-[10px] font-bold text-slate-500 uppercase">Günlük Seri</p>
            </div>
            <p className="text-xl font-bold font-display">5 Gün</p>
         </div>
         <div className="flex-1 bg-surface-card p-4 rounded-2xl border border-white/5">
            <div className="flex items-center gap-2 mb-2">
               <span className="material-symbols-outlined text-warning text-lg">emoji_events</span>
               <p className="text-[10px] font-bold text-slate-500 uppercase">Başarımlar</p>
            </div>
            <p className="text-xl font-bold font-display">12 / 50</p>
         </div>
      </div>

      {/* Segmented Control */}
      <div className="bg-slate-800 p-1 rounded-full flex">
        <button className="flex-1 py-2.5 text-xs font-bold bg-white text-slate-900 rounded-full shadow-lg">Aktif Görevler</button>
        <button className="flex-1 py-2.5 text-xs font-bold text-slate-500">Başarımlar</button>
      </div>

      {/* Task List */}
      <div className="flex flex-col gap-4">
        {MOCK_QUESTS.map((quest) => (
          <div key={quest.id} className={`p-4 rounded-2xl bg-surface-card border transition-all ${quest.status === 'completed' ? 'border-success/30 shadow-[0_0_15px_rgba(11,218,87,0.1)]' : 'border-white/5'}`}>
             <div className="flex gap-4">
                <div className={`size-12 rounded-full flex-shrink-0 flex items-center justify-center bg-slate-800 text-2xl`}>
                   <span className="material-symbols-outlined">{quest.icon}</span>
                </div>
                <div className="flex-1">
                   <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-base font-display">{quest.title}</h4>
                      <span className="px-2 py-0.5 rounded-full bg-slate-800 text-[9px] font-bold text-warning border border-warning/20">
                         {quest.reward}
                      </span>
                   </div>
                   <p className="text-slate-500 text-xs mb-4">{quest.description}</p>
                   
                   <div className="flex justify-between text-[10px] font-bold mb-1">
                      <span className={quest.status === 'completed' ? 'text-success' : 'text-slate-500'}>
                         {quest.status === 'completed' ? 'Tamamlandı' : 'İlerleme'}
                      </span>
                      <span>{quest.progress} / {quest.target}</span>
                   </div>
                   <div className="h-2 rounded-full bg-slate-800 overflow-hidden mb-4">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${quest.status === 'completed' ? 'bg-success' : 'bg-primary'}`} 
                        style={{ width: `${(quest.progress / quest.target) * 100}%` }}
                      ></div>
                   </div>

                   <button 
                     className={`w-full py-2.5 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                       quest.status === 'completed' 
                        ? 'bg-success text-white shadow-lg shadow-success/20 active:scale-95' 
                        : 'bg-primary text-white shadow-lg shadow-primary/20 active:scale-95'
                     }`}
                   >
                     {quest.status === 'completed' && <span className="material-symbols-outlined text-sm">redeem</span>}
                     {quest.status === 'completed' ? 'Ödülü Topla' : 'Hemen Başla'}
                   </button>
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestScreen;
