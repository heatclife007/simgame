
import React, { useState, useEffect } from 'react';
import { Screen } from './types';
import HomeScreen from './screens/HomeScreen';
import TradeScreen from './screens/TradeScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';
import QuestScreen from './screens/QuestScreen';
import ProfileScreen from './screens/ProfileScreen';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Screen;
      if (['home', 'leaderboard', 'trade', 'quests', 'profile'].includes(hash)) {
        setCurrentScreen(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home': return <HomeScreen />;
      case 'trade': return <TradeScreen />;
      case 'leaderboard': return <LeaderboardScreen />;
      case 'quests': return <QuestScreen />;
      case 'profile': return <ProfileScreen />;
      default: return <HomeScreen />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto relative bg-background-dark shadow-2xl overflow-hidden">
      <main className="flex-1 overflow-y-auto no-scrollbar pb-24">
        {renderScreen()}
      </main>
      <BottomNav activeScreen={currentScreen} onNavigate={setCurrentScreen} />
    </div>
  );
};

export default App;
