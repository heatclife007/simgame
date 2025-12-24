
import React from 'react';
import { Screen } from '../types';

interface BottomNavProps {
  activeScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeScreen, onNavigate }) => {
  const navItems = [
    { id: 'trade', icon: 'candlestick_chart', label: 'Piyasa' },
    { id: 'leaderboard', icon: 'leaderboard', label: 'Liderler' },
    { id: 'home', icon: 'home', label: 'Ana Ekran', isCenter: true },
    { id: 'quests', icon: 'verified', label: 'Görevler' },
    { id: 'profile', icon: 'person', label: 'Profil' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-6 pointer-events-none">
      <nav className="flex items-center justify-between w-[92%] max-w-sm px-2 py-2 bg-background-dark/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl pointer-events-auto">
        {navItems.map((item) => {
          if (item.isCenter) {
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id as Screen);
                  window.location.hash = item.id;
                }}
                className={`relative -top-8 flex items-center justify-center size-14 rounded-full bg-primary text-white shadow-lg shadow-primary/40 active:scale-90 transition-transform border-4 border-background-dark`}
              >
                <span className="material-symbols-outlined text-3xl filled">swap_horiz</span>
              </button>
            );
          }

          const isActive = activeScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id as Screen);
                window.location.hash = item.id;
              }}
              className="flex flex-col items-center gap-1 p-2 flex-1"
            >
              <span className={`material-symbols-outlined text-2xl ${isActive ? 'text-primary filled' : 'text-slate-400'}`}>
                {item.icon}
              </span>
              <span className={`text-[10px] font-bold ${isActive ? 'text-primary' : 'text-slate-500'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default BottomNav;
