'use client';

import { useEffect, useState } from 'react';

interface BookOpeningProps {
  onAnimationComplete: () => void;
  children: React.ReactNode;
}

export default function BookOpening({ onAnimationComplete, children }: BookOpeningProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setIsOpening(true);
    const timer = setTimeout(() => {
      setShowContent(true);
      onAnimationComplete();
    }, 1500); // Match animation duration

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Book cover animation */}
      <div
        className={`absolute inset-0 ${isOpening ? 'book-open' : ''}`}
      >
        <div className="w-full h-full parchment-bg flex items-center justify-center">
          <div className="text-4xl font-serif text-parchment-text/30">
            Opening...
          </div>
        </div>
      </div>

      {/* Book page reveal */}
      <div
        className={`absolute inset-0 ${showContent ? 'book-page-reveal' : 'opacity-0 pointer-events-none'}`}
      >
        {children}
      </div>
    </div>
  );
}

