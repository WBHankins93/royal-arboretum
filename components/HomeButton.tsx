'use client';

import Image from 'next/image';
import { useState } from 'react';

interface HomeButtonProps {
  onHomeClick: () => void;
}

export default function HomeButton({ onHomeClick }: HomeButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onHomeClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="
        fixed top-4 left-4 z-50
        transition-all duration-300
        ${isHovered ? 'scale-110' : 'scale-100'}
        hover:brightness-110
        active:scale-95
        group
      "
      aria-label="Return to home"
    >
      <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
        <Image
          src="/images/main-seal-arboretum.png"
          alt="Royal Seal - Return Home"
          width={160}
          height={160}
          className="
            w-full h-full object-contain
            drop-shadow-lg
            transition-all duration-300
            ${isHovered ? 'drop-shadow-2xl' : 'drop-shadow-lg'}
          "
          priority
        />
        {/* Tooltip */}
        {isHovered && (
          <div className="
            absolute top-full left-1/2 transform -translate-x-1/2 mt-2
            px-3 py-1.5
            bg-parchment-dark/95 backdrop-blur-sm
            border border-parchment-text/30 rounded
            text-sm font-serif text-parchment-text
            whitespace-nowrap
            shadow-lg
            animate-fade-in
            pointer-events-none
          ">
            Return Home
          </div>
        )}
      </div>
    </button>
  );
}

