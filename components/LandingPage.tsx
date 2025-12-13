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
      <div 
        className="flex items-center justify-center min-h-screen parchment-bg relative"
        onClick={onSealClick}
        onTouchStart={(e) => {
          // Only trigger if not clicking on the instruction text
          if ((e.target as HTMLElement).tagName !== 'P') {
            onSealClick();
          }
        }}
      >
        <div className="text-center w-full h-full flex items-center justify-center relative">
          <div className="relative w-full h-full max-w-full max-h-full">
            <Image
              src="/mobile-images/book-cover-mobile.png"
              alt="Royal Arboretum Book Cover - Tap to open"
              width={800}
              height={1200}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <p 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-lg text-parchment-text/70 animate-fade-in z-20 pointer-events-none"
            onClick={(e) => e.stopPropagation()}
          >
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

