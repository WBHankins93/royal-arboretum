'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { StoryPage } from '@/types/story';
import { useIsMobile } from '@/utils/useIsMobile';

interface CharacterModalProps {
  character: StoryPage;
  onClose: () => void;
}

export default function CharacterModal({ character, onClose }: CharacterModalProps) {
  const isMobile = useIsMobile();
  const imageSrc = isMobile && character.mobileImageSrc ? character.mobileImageSrc : character.imageSrc;
  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Only show modal for pages with images (characters, images, blueprints)
  if (!imageSrc) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      
      {/* Modal Content */}
      <div 
        className="relative w-full max-w-6xl max-h-[95vh] overflow-auto
                   bg-parchment-bg border-4 border-parchment-text/30 rounded-lg shadow-2xl
                   animate-fade-in p-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4 z-10
            w-10 h-10
            flex items-center justify-center
            bg-parchment-dark/90 hover:bg-parchment-dark
            border-2 border-parchment-text/30 rounded-full
            text-parchment-text text-2xl font-bold
            transition-all duration-300
            hover:scale-110 hover:border-parchment-text/50
            shadow-lg
          "
          aria-label="Close modal"
        >
          ×
        </button>

        {/* Character Image */}
        <div className="flex items-center justify-center w-full h-full min-h-[80vh]">
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={imageSrc}
              alt={character.characterName || character.title}
              width={2000}
              height={2000}
              className="w-full h-full object-contain rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

