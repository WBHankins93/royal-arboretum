'use client';

import { useState, useEffect, useRef } from 'react';
import StoryPage from './StoryPage';
import Pagination from './Pagination';
import PageTransition from './PageTransition';
import { storyPages } from '@/types/story';

interface StoryContainerProps {
  initialPage?: number;
}

export default function StoryContainer({ initialPage = 0 }: StoryContainerProps) {
  const [currentPageIndex, setCurrentPageIndex] = useState(initialPage);
  const [isAnimating, setIsAnimating] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<'next' | 'previous'>('next');
  const [previousPageIndex, setPreviousPageIndex] = useState(initialPage);
  
  // Swipe gesture state
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const touchEndY = useRef<number | null>(null);

  const totalPages = storyPages.length;

  const handleNext = () => {
    if (currentPageIndex < totalPages - 1 && !isAnimating) {
      setTransitionDirection('next');
      setPreviousPageIndex(currentPageIndex);
      setIsAnimating(true);
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPageIndex > 0 && !isAnimating) {
      setTransitionDirection('previous');
      setPreviousPageIndex(currentPageIndex);
      setIsAnimating(true);
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  const handleCharacterSelect = (pageIndex: number) => {
    if (!isAnimating && pageIndex >= 0 && pageIndex < totalPages) {
      setTransitionDirection(pageIndex > currentPageIndex ? 'next' : 'previous');
      setPreviousPageIndex(currentPageIndex);
      setIsAnimating(true);
      setCurrentPageIndex(pageIndex);
    }
  };

  // Swipe gesture handlers
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchEndY.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
    touchEndY.current = e.targetTouches[0].clientY;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current || !touchStartY.current || !touchEndY.current) return;
    if (isAnimating) return;

    const distanceX = touchStartX.current - touchEndX.current;
    const distanceY = touchStartY.current - touchEndY.current;
    const isLeftSwipe = distanceX > minSwipeDistance;
    const isRightSwipe = distanceX < -minSwipeDistance;
    const isVerticalSwipe = Math.abs(distanceY) > Math.abs(distanceX);

    // Only handle horizontal swipes
    if (isVerticalSwipe) return;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isAnimating) return;

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        if (currentPageIndex < totalPages - 1) {
          setTransitionDirection('next');
          setPreviousPageIndex(currentPageIndex);
          setIsAnimating(true);
          setCurrentPageIndex(currentPageIndex + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentPageIndex > 0) {
          setTransitionDirection('previous');
          setPreviousPageIndex(currentPageIndex);
          setIsAnimating(true);
          setCurrentPageIndex(currentPageIndex - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPageIndex, isAnimating, totalPages]);

  const currentPage = storyPages[currentPageIndex];
  const previousPage = storyPages[previousPageIndex];

  return (
    <div 
      className="relative w-full h-screen"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {isAnimating ? (
        <PageTransition
          direction={transitionDirection}
          onAnimationComplete={handleAnimationComplete}
          previousContent={<StoryPage page={previousPage} onCharacterSelect={handleCharacterSelect} />}
          newContent={<StoryPage page={currentPage} onCharacterSelect={handleCharacterSelect} />}
        />
      ) : (
        <StoryPage page={currentPage} onCharacterSelect={handleCharacterSelect} />
      )}

      <Pagination
        currentPage={currentPageIndex}
        totalPages={totalPages}
        onNext={handleNext}
        onPrevious={handlePrevious}
        isAnimating={isAnimating}
        hideOnGallery={true}
        currentPageType={currentPage.type}
      />
    </div>
  );
}

