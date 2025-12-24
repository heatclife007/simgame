
export type Screen = 'home' | 'leaderboard' | 'trade' | 'quests' | 'profile';

export interface Asset {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  balance: number;
  color: string;
  icon: string;
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  reward: string;
  progress: number;
  target: number;
  status: 'active' | 'completed' | 'claimed';
  type: 'trade' | 'volume' | 'education';
  icon: string;
  color: string;
}

export interface Player {
  rank: number;
  name: string;
  level: number;
  profit: string;
  profitPercent: number;
  avatar: string;
  isCurrentUser?: boolean;
}
