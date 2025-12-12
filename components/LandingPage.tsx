'use client';

import Image from 'next/image';
import { useState } from 'react';

interface LandingPageProps {
  onSealClick: () => void;
}

export default function LandingPage({ onSealClick }: LandingPageProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen parchment-bg">
      <div className="text-center">
        <div
          className={`seal-hover inline-block ${isHovered ? 'scale-105' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={onSealClick}
        >
          <Image
            src="/images/golden-frog-seal.png"
            alt="Royal Arboretum Seal"
            width={800}
            height={800}
            className="max-w-[90vw] max-h-[90vh] object-contain drop-shadow-2xl"
            priority
          />
        </div>
        {isHovered && (
          <p className="mt-4 text-lg text-parchment-text/70 animate-fade-in">
            Click to open the story...
          </p>
        )}
      </div>
    </div>
  );
}

