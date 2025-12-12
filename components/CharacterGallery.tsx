'use client';

import Image from 'next/image';
import { useState } from 'react';
import { getCharacterPages, findPageIndexById, StoryPage } from '@/types/story';

interface CharacterGalleryProps {
  onCharacterSelect: (pageIndex: number) => void;
}

export default function CharacterGallery({ onCharacterSelect }: CharacterGalleryProps) {
  const [hoveredCharacter, setHoveredCharacter] = useState<string | null>(null);
  const characterPages = getCharacterPages();

  const handleCharacterClick = (character: StoryPage) => {
    const pageIndex = findPageIndexById(character.id);
    if (pageIndex !== -1) {
      onCharacterSelect(pageIndex);
    }
  };

  return (
    <div className="w-full h-screen parchment-bg overflow-auto p-4 md:p-8">
      <div className="max-w-7xl mx-auto py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-serif text-parchment-text mb-4">
            Character Gallery
          </h1>
          <p className="text-xl md:text-2xl text-parchment-text/80 font-serif italic">
            Meet all the residents of the Royal Arboretum
          </p>
        </div>

        {/* Character Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {characterPages.map((character, index) => (
            <div
              key={character.id}
              className={`
                relative group cursor-pointer
                transform transition-all duration-300
                ${hoveredCharacter === character.id 
                  ? 'scale-105 z-10' 
                  : 'scale-100'
                }
                animate-slide-up
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCharacter(character.id)}
              onMouseLeave={() => setHoveredCharacter(null)}
              onClick={() => handleCharacterClick(character)}
            >
              {/* Character Card */}
              <div className="
                bg-parchment-dark/60 backdrop-blur-sm
                border-2 border-parchment-text/30
                rounded-lg p-4 md:p-6
                shadow-lg
                transition-all duration-300
                group-hover:bg-parchment-dark/80
                group-hover:border-parchment-text/50
                group-hover:shadow-2xl
                h-full flex flex-col
              ">
                {/* Character Image */}
                <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={character.imageSrc!}
                    alt={character.characterName || character.title}
                    width={400}
                    height={400}
                    className={`
                      w-full h-full object-contain
                      transition-transform duration-300
                      ${hoveredCharacter === character.id ? 'scale-110' : 'scale-100'}
                    `}
                  />
                </div>

                {/* Character Info */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl md:text-3xl font-serif text-parchment-text mb-2">
                    {character.title}
                  </h3>
                  {character.characterName && (
                    <p className="text-lg md:text-xl font-serif text-parchment-text/70 mb-3">
                      {character.characterName}
                    </p>
                  )}
                  {character.description && (
                    <p className="text-sm md:text-base text-parchment-text/80 font-serif leading-relaxed">
                      {character.description}
                    </p>
                  )}
                </div>

                {/* Hover Indicator */}
                <div className={`
                  mt-4 text-center
                  transition-opacity duration-300
                  ${hoveredCharacter === character.id ? 'opacity-100' : 'opacity-0'}
                `}>
                  <span className="text-parchment-text/60 font-serif italic text-sm">
                    Click to view →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Story Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => onCharacterSelect(0)}
            className="
              px-8 py-4 font-serif text-lg text-parchment-text
              bg-parchment-dark/80 backdrop-blur-sm
              border-2 border-parchment-text/30 rounded-lg
              transition-all duration-300
              hover:bg-parchment-dark hover:border-parchment-text/50 hover:scale-105
              shadow-lg
            "
          >
            Return to Story
          </button>
        </div>
      </div>
    </div>
  );
}

