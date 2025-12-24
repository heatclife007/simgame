
import { Asset, Quest, Player } from './types';

export const MOCK_ASSETS: Asset[] = [
  { id: '1', name: 'Bitcoin', symbol: 'BTC', price: 45200, change24h: 1.2, balance: 0.5, color: '#F7931A', icon: 'currency_bitcoin' },
  { id: '2', name: 'Ethereum', symbol: 'ETH', price: 3200, change24h: -0.5, balance: 2.0, color: '#627EEA', icon: 'token' },
  { id: '3', name: 'Solana', symbol: 'SOL', price: 110, change24h: 4.2, balance: 15.0, color: '#14F195', icon: 'bolt' },
  { id: '4', name: 'Avalanche', symbol: 'AVAX', price: 38, change24h: 2.1, balance: 45.0, color: '#E84142', icon: 'diamond' },
];

export const MOCK_QUESTS: Quest[] = [
  { 
    id: 'q1', 
    title: 'İlk Kar', 
    description: '%5 kar ile bir işlem kapat.', 
    reward: '+100 XP', 
    progress: 0, 
    target: 1, 
    status: 'active', 
    type: 'trade', 
    icon: 'trending_up', 
    color: 'emerald' 
  },
  { 
    id: 'q2', 
    title: 'Kripto Balinası', 
    description: 'Toplam 10.000$ işlem hacmine ulaş.', 
    reward: 'Yeni Avatar', 
    progress: 6500, 
    target: 10000, 
    status: 'active', 
    type: 'volume', 
    icon: 'waves', 
    color: 'indigo' 
  },
  { 
    id: 'q3', 
    title: 'Akademi Mezunu', 
    description: 'Eğitim modülünü başarıyla tamamladın.', 
    reward: 'Ödülü Topla (+500 Coin)', 
    progress: 1, 
    target: 1, 
    status: 'completed', 
    type: 'education', 
    icon: 'school', 
    color: 'green' 
  },
];

export const MOCK_LEADERS: Player[] = [
  { rank: 1, name: 'CryptoQueen', level: 54, profit: '+$45,200', profitPercent: 485, avatar: 'https://picsum.photos/seed/queen/200' },
  { rank: 2, name: 'Trader_Joe', level: 42, profit: '+$12,800', profitPercent: 312, avatar: 'https://picsum.photos/seed/joe/200' },
  { rank: 3, name: 'BullishBoy', level: 38, profit: '+$8,400', profitPercent: 289, avatar: 'https://picsum.photos/seed/boy/200' },
  { rank: 4, name: 'Satoshi_Fan', level: 30, profit: '+$5,100', profitPercent: 210, avatar: 'https://picsum.photos/seed/fan/200' },
  { rank: 5, name: 'MoonWalker', level: 28, profit: '+$4,200', profitPercent: 195, avatar: 'https://picsum.photos/seed/moon/200' },
  { rank: 6, name: 'Altcoin_Hunter', level: 25, profit: '+$3,900', profitPercent: 174, avatar: 'https://picsum.photos/seed/hunter/200' },
  { rank: 7, name: 'HODL_Queen', level: 24, profit: '+$3,100', profitPercent: 150, avatar: 'https://picsum.photos/seed/hodl/200' },
];

export const CURRENT_USER: Player = {
  rank: 142,
  name: 'KriptoKralı99',
  level: 12,
  profit: '+$1,240',
  profitPercent: 12.4,
  avatar: 'https://picsum.photos/seed/user/200',
  isCurrentUser: true
};
