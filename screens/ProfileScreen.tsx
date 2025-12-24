
import React from 'react';
import { CURRENT_USER } from '../constants';

const ProfileScreen: React.FC = () => {
  const sections = [
    {
      title: 'Hesap',
      items: [
        { icon: 'person', label: 'Profil Düzenle', color: 'text-primary', bg: 'bg-primary/10' },
        { icon: 'security', label: 'Güvenlik ve Şifre', color: 'text-success', bg: 'bg-success/10' },
        { icon: 'workspace_premium', label: 'Pro Üyelik', color: 'text-warning', bg: 'bg-warning/10', badge: 'AKTİF' },
      ]
    },
    {
      title: 'Oyun Deneyimi',
      items: [
        { icon: 'notifications', label: 'Fiyat Alarmları', color: 'text-purple-400', bg: 'bg-purple-400/10', toggle: true },
        { icon: 'volume_up', label: 'Ses Efektleri', color: 'text-pink-400', bg: 'bg-pink-400/10', toggle: true, checked: true },
        { icon: 'palette', label: 'Arayüz Teması', color: 'text-orange-400', bg: 'bg-orange-400/10', subLabel: 'Koyu Mod' },
      ]
    },
    {
      title: 'Uygulama',
      items: [
        { icon: 'language', label: 'Dil / Language', color: 'text-slate-400', bg: 'bg-slate-400/10', subLabel: 'TR' },
        { icon: 'logout', label: 'Çıkış Yap', color: 'text-danger', bg: 'bg-danger/10' },
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-full">
      <header className="p-4 flex items-center justify-between sticky top-0 bg-background-dark z-10">
        <button className="size-10 flex items-center justify-center">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold font-display">Profil & Ayarlar</h1>
        <button className="size-10 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined">edit_square</span>
        </button>
      </header>

      {/* Profile Header */}
      <div className="flex flex-col items-center pt-6 pb-2">
        <div className="relative">
          <div className="size-28 rounded-full border-2 border-primary border-dashed p-1">
            <img src={CURRENT_USER.avatar} alt="Profile" className="size-full rounded-full object-cover" />
          </div>
          <button className="absolute bottom-0 right-0 size-8 bg-primary rounded-full flex items-center justify-center border-2 border-background-dark">
            <span className="material-symbols-outlined text-sm">photo_camera</span>
          </button>
        </div>
        <h2 className="text-2xl font-bold font-display mt-4">{CURRENT_USER.name}</h2>
        <div className="flex items-center gap-1.5 text-slate-500 mt-1">
          <span className="material-symbols-outlined text-primary text-sm filled">verified</span>
          <p className="text-xs font-medium">Level 12 • Market Maker</p>
        </div>
      </div>

      {/* Progress */}
      <div className="px-6 py-4">
        <div className="flex justify-between mb-2">
          <span className="text-[10px] font-bold text-primary uppercase tracking-widest">XP İlerlemesi</span>
          <span className="text-[10px] font-bold text-slate-500">3250 / 5000</span>
        </div>
        <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(37,175,244,0.3)]" style={{ width: '65%' }}></div>
        </div>
        <p className="text-right text-[8px] text-slate-600 mt-1 font-bold uppercase tracking-widest">Sonraki: Balina</p>
      </div>

      {/* Stats Cards */}
      <div className="px-4 py-4 grid grid-cols-3 gap-3">
        {[
          { label: 'Toplam Kâr', val: '$124.5K', color: 'text-primary' },
          { label: 'Kazanma', val: '68%', color: 'text-success' },
          { label: 'Sıralama', val: '#42', color: 'text-purple-400' },
        ].map((stat, i) => (
          <div key={i} className="bg-surface-dark p-3 rounded-2xl border border-white/5 text-center flex flex-col justify-center gap-1">
            <p className={`text-lg font-bold font-display ${stat.color}`}>{stat.val}</p>
            <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-none">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Setting Sections */}
      <div className="flex flex-col gap-6 px-4 pb-12">
        {sections.map((section, idx) => (
          <div key={idx} className="flex flex-col gap-3">
            <h3 className="text-[10px] font-bold text-slate-600 uppercase tracking-widest ml-2">{section.title}</h3>
            <div className="bg-surface-dark rounded-2xl overflow-hidden border border-white/5 shadow-sm">
              {section.items.map((item, i) => (
                <button 
                  key={i} 
                  className={`w-full flex items-center justify-between p-4 active:bg-white/5 transition-colors ${i < section.items.length - 1 ? 'border-b border-white/5' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`size-8 rounded-full flex items-center justify-center ${item.bg} ${item.color}`}>
                      <span className="material-symbols-outlined text-lg">{item.icon}</span>
                    </div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {item.badge && <span className="text-[8px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded uppercase">{item.badge}</span>}
                    {item.subLabel && <span className="text-xs text-slate-500">{item.subLabel}</span>}
                    {item.toggle && (
                      <div className={`w-10 h-5 rounded-full relative transition-colors ${item.checked ? 'bg-primary' : 'bg-slate-700'}`}>
                        <div className={`size-4 rounded-full bg-white absolute top-0.5 transition-all ${item.checked ? 'left-5.5' : 'left-0.5'}`}></div>
                      </div>
                    )}
                    {!item.toggle && <span className="material-symbols-outlined text-slate-500">chevron_right</span>}
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center py-4">
           <p className="text-[10px] font-mono text-slate-600">Sürüm 2.4.1 (Build 8902)</p>
           <p className="text-[10px] font-mono text-slate-600">User ID: #839102-X</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
