'use client';

import Image from 'next/image';
import { StoryPage as StoryPageType } from '@/types/story';
import CharacterGallery from './CharacterGallery';

interface StoryPageProps {
  page: StoryPageType;
  onCharacterSelect?: (pageIndex: number) => void;
}

export default function StoryPage({ page, onCharacterSelect }: StoryPageProps) {
  if (page.type === 'video' && page.videoSrc) {
    return (
      <div className="w-full h-screen parchment-bg flex items-center justify-center p-4">
        <div className="w-full max-w-7xl h-full flex flex-col items-center justify-center gap-6">
          {/* Main Title */}
          <div className="text-center animate-fade-in z-10 px-4">
            <h1 className="storybook-title
              text-5xl md:text-7xl lg:text-8xl
              text-parchment-text
              drop-shadow-lg
              mb-2
              [text-shadow:_2px_2px_4px_rgba(0,0,0,0.1),_-2px_-2px_4px_rgba(255,255,255,0.1)]
            ">
              The Royal Arboretum
            </h1>
          </div>
          
          {/* Video */}
          <div className="w-full h-full flex items-center justify-center">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            >
              <source src={page.videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    );
  }

  if (page.type === 'image' && page.imageSrc) {
    return (
      <div className="w-full h-screen parchment-bg flex items-center justify-center p-4 overflow-auto">
        <div className="w-full max-w-7xl h-full flex flex-col items-center justify-center py-8">
          {page.title && (
            <div className="text-center mb-6 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-serif text-parchment-text mb-2">
                {page.title}
              </h2>
              {page.description && (
                <p className="text-lg md:text-xl text-parchment-text/80 font-serif italic">
                  {page.description}
                </p>
              )}
            </div>
          )}
          <div className="relative w-full h-full max-h-[80vh] flex items-center justify-center">
            <Image
              src={page.imageSrc}
              alt={page.title || 'Story page'}
              width={2000}
              height={2000}
              className="w-full h-full object-contain rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    );
  }

  if (page.type === 'blueprint' && page.imageSrc) {
    return (
      <div className="w-full h-screen parchment-bg flex items-center justify-center p-4 overflow-auto">
        <div className="w-full max-w-7xl h-full flex flex-col items-center justify-center py-8">
          {page.title && (
            <div className="text-center mb-6 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-serif text-parchment-text mb-2">
                {page.title}
              </h2>
              {page.description && (
                <p className="text-lg md:text-xl text-parchment-text/80 font-serif italic">
                  {page.description}
                </p>
              )}
            </div>
          )}
          <div className="relative w-full h-full max-h-[85vh] flex items-center justify-center">
            <Image
              src={page.imageSrc}
              alt={page.title || 'Blueprint'}
              width={2000}
              height={2000}
              className="w-full h-full object-contain rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    );
  }

  if (page.type === 'gallery' && onCharacterSelect) {
    return <CharacterGallery onCharacterSelect={onCharacterSelect} />;
  }

  if (page.type === 'character' && page.imageSrc) {
    return (
      <div className="w-full h-screen parchment-bg flex items-center justify-center p-4 overflow-auto">
        <div className="w-full max-w-7xl h-full flex items-center justify-center py-8">
          <div className="relative w-full h-full max-h-[90vh] flex items-center justify-center">
            <Image
              src={page.imageSrc}
              alt={page.characterName || page.title}
              width={2000}
              height={2000}
              className="w-full h-full object-contain rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    );
  }

  return null;
}

