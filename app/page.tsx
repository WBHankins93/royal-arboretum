'use client';

import { useState } from 'react';
import LandingPage from '@/components/LandingPage';
import BookOpening from '@/components/BookOpening';
import StoryContainer from '@/components/StoryContainer';

type AppState = 'landing' | 'opening' | 'story';

export default function Home() {
  const [appState, setAppState] = useState<AppState>('landing');

  const handleSealClick = () => {
    setAppState('opening');
  };

  const handleAnimationComplete = () => {
    setAppState('story');
  };

  const handleHomeClick = () => {
    setAppState('landing');
  };

  if (appState === 'landing') {
    return <LandingPage onSealClick={handleSealClick} />;
  }

  if (appState === 'opening') {
    return (
      <BookOpening onAnimationComplete={handleAnimationComplete}>
        <StoryContainer initialPage={0} onHomeClick={handleHomeClick} />
      </BookOpening>
    );
  }

  return <StoryContainer initialPage={0} onHomeClick={handleHomeClick} />;
}
