'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useIsMobile } from '@/utils/useIsMobile';

interface LandingPageProps {
  onSealClick: () => void;
}

export default function LandingPage({ onSealClick }: LandingPageProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();

  // On mobile, show book cover with clickable seal area
  if (isMobile) {
    return (
      <div className="flex items-center justify-center min-h-screen parchment-bg relative">
        <div className="text-center w-full h-full flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src="/mobile-images/book-cover-mobile.png"
              alt="Royal Arboretum Book Cover"
              width={800}
              height={1200}
              className="w-full h-full object-contain"
              priority
            />
            {/* Clickable seal area - positioned where seal appears on book cover */}
            <button
              onClick={onSealClick}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 opacity-0 hover:opacity-10 active:opacity-20 transition-opacity"
              aria-label="Click to open book"
            >
              {/* Invisible clickable area */}
            </button>
          </div>
          <p className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-lg text-parchment-text/70 animate-fade-in">
            Tap the seal to open
          </p>
        </div>
      </div>
    );
  }

  // Desktop version - show seal directly
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

