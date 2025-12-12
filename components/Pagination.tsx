'use client';

import { useEffect, useState } from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrevious: () => void;
  isAnimating: boolean;
  hideOnGallery?: boolean;
  currentPageType?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  onNext,
  onPrevious,
  isAnimating,
  hideOnGallery = false,
  currentPageType,
}: PaginationProps) {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    // Show buttons after a short delay to avoid interfering with initial animations
    const timer = setTimeout(() => setShowButtons(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const canGoNext = currentPage < totalPages - 1;
  const canGoPrevious = currentPage > 0;

  // Hide pagination on gallery page
  if (hideOnGallery && currentPageType === 'gallery') return null;
  if (!showButtons) return null;

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-4">
      {/* Previous Button */}
      <button
        onClick={onPrevious}
        disabled={!canGoPrevious || isAnimating}
        className={`
          px-6 py-3 font-serif text-lg text-parchment-text
          bg-parchment-dark/80 backdrop-blur-sm
          border-2 border-parchment-text/30 rounded-lg
          transition-all duration-300
          ${canGoPrevious && !isAnimating
            ? 'hover:bg-parchment-dark hover:border-parchment-text/50 hover:scale-105 cursor-pointer'
            : 'opacity-50 cursor-not-allowed'
          }
          shadow-lg
        `}
        aria-label="Previous page"
      >
        ← Previous
      </button>

      {/* Page Indicator */}
      <div className="px-6 py-3 font-serif text-lg text-parchment-text bg-parchment-dark/80 backdrop-blur-sm border-2 border-parchment-text/30 rounded-lg shadow-lg">
        {currentPage + 1} / {totalPages}
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={!canGoNext || isAnimating}
        className={`
          px-6 py-3 font-serif text-lg text-parchment-text
          bg-parchment-dark/80 backdrop-blur-sm
          border-2 border-parchment-text/30 rounded-lg
          transition-all duration-300
          ${canGoNext && !isAnimating
            ? 'hover:bg-parchment-dark hover:border-parchment-text/50 hover:scale-105 cursor-pointer'
            : 'opacity-50 cursor-not-allowed'
          }
          shadow-lg
        `}
        aria-label="Next page"
      >
        Next →
      </button>
    </div>
  );
}

