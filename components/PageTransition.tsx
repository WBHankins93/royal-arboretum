'use client';

import { useEffect, useState } from 'react';

interface PageTransitionProps {
  direction: 'next' | 'previous';
  onAnimationComplete: () => void;
  previousContent: React.ReactNode;
  newContent: React.ReactNode;
}

export default function PageTransition({
  direction,
  onAnimationComplete,
  previousContent,
  newContent,
}: PageTransitionProps) {
  const [showNewContent, setShowNewContent] = useState(false);

  useEffect(() => {
    setShowNewContent(false);

    const revealTimer = setTimeout(() => {
      setShowNewContent(true);
    }, 50);

    const completeTimer = setTimeout(() => {
      onAnimationComplete();
    }, 800); // Match animation duration

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(completeTimer);
    };
  }, [direction, onAnimationComplete]);

  const exitClass =
    direction === 'next' ? 'page-turn-next' : 'page-turn-previous';
  const enterClass =
    direction === 'next'
      ? 'page-turn-next-reveal'
      : 'page-turn-previous-reveal';

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Exiting page */}
      <div className={`absolute inset-0 ${exitClass}`}>
        {previousContent}
      </div>

      {/* Entering page */}
      <div
        className={`absolute inset-0 ${showNewContent ? enterClass : 'opacity-0 pointer-events-none'}`}
      >
        {newContent}
      </div>
    </div>
  );
}

