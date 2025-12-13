export type StoryPageType = 'video' | 'image' | 'character' | 'blueprint' | 'gallery';

export interface StoryPage {
  id: string;
  type: StoryPageType;
  title: string;
  description?: string;
  imageSrc?: string;
  videoSrc?: string;
  characterName?: string;
  // Mobile-specific assets
  mobileImageSrc?: string;
  mobileVideoSrc?: string;
}

// Mobile-specific first video
export const getMobileStoryPages = (): StoryPage[] => {
  return [
    {
      id: 'video-treehouse-vertical',
      type: 'video',
      title: 'The Moving Treehouse',
      description: 'Welcome to the Royal Arboretum',
      videoSrc: '/mobile-video/Vertical_Treehouse_Image_Animation.mp4',
    },
    {
      id: 'video-treehouse-color',
      type: 'video',
      title: 'The Aerial Arboretum Residence',
      description: 'A grand treehouse built into and around a massive, ancient tree',
      videoSrc: '/video/moving-treehouse-color.mp4',
    },
    ...getDesktopStoryPages().slice(2), // Skip first two desktop videos, continue with characters
  ];
};

// Desktop story pages
export const getDesktopStoryPages = (): StoryPage[] => {
  return [
    {
      id: 'video-treehouse',
      type: 'video',
      title: 'The Moving Treehouse',
      description: 'Welcome to the Royal Arboretum',
      videoSrc: '/video/moving-treehouse.mp4',
    },
    {
      id: 'video-treehouse-color',
      type: 'video',
      title: 'The Aerial Arboretum Residence',
      description: 'A grand treehouse built into and around a massive, ancient tree',
      videoSrc: '/video/moving-treehouse-color.mp4',
    },
    {
      id: 'pathfinder-frog',
      type: 'character',
      title: 'The Pathfinder',
      description: 'A brave explorer who maps the unknown paths of the arboretum',
      imageSrc: '/images/pathfinder-frog.png',
      mobileImageSrc: '/mobile-images/pathfinder-frog-mobile.png',
      characterName: 'Pathfinder',
    },
    {
      id: 'tophat-frog',
      type: 'character',
      title: 'The Gentleman',
      description: 'A distinguished frog with impeccable style and wisdom',
      imageSrc: '/images/tophat-frog.png',
      mobileImageSrc: '/mobile-images/tophat-frog-mobile.png',
      characterName: 'Gentleman',
    },
    {
      id: 'star-frog',
      type: 'character',
      title: 'The Stargazer',
      description: 'An astronomer who studies the stars from the observatory',
      imageSrc: '/images/star-frog.png',
      mobileImageSrc: '/mobile-images/start-frog-mobile.png',
      characterName: 'Stargazer',
    },
    {
      id: 'mushroom-frog',
      type: 'character',
      title: 'The Mycologist',
      description: 'A scholar of fungi and the mysteries of the forest floor',
      imageSrc: '/images/mushroom-frog.png',
      mobileImageSrc: '/mobile-images/mushroom-frog-mobile.png',
      characterName: 'Mycologist',
    },
    {
      id: 'fishing-frog',
      type: 'character',
      title: 'The Angler',
      description: 'A patient fisher who tends to the water wheel and pond',
      imageSrc: '/images/fishing-frog.png',
      mobileImageSrc: '/mobile-images/fishing-frog-mobile.png',
      characterName: 'Angler',
    },
    {
      id: 'fireplace-frogs',
      type: 'character',
      title: 'The Hearth Keepers',
      description: 'Guardians of the Great Hall, keeping the fire warm and stories alive',
      imageSrc: '/images/fireplace-frogs.png',
      mobileImageSrc: '/mobile-images/fireplace-frongs-mobile.png',
      characterName: 'Hearth Keepers',
    },
    {
      id: 'greathall-blueprint',
      type: 'blueprint',
      title: 'Great Hall Blueprint',
      description: 'Architectural plans for the Great Hall',
      imageSrc: '/images/greathall-blueprint.png',
    },
    {
      id: 'character-gallery',
      type: 'gallery',
      title: 'Character Gallery',
      description: 'Meet all the residents of the Royal Arboretum',
    },
  ];
};

// Default to desktop, but will be overridden by mobile detection
export const storyPages: StoryPage[] = getDesktopStoryPages();
  {
    id: 'pathfinder-frog',
    type: 'character',
    title: 'The Pathfinder',
    description: 'A brave explorer who maps the unknown paths of the arboretum',
    imageSrc: '/images/pathfinder-frog.png',
    characterName: 'Pathfinder',
  },
  {
    id: 'tophat-frog',
    type: 'character',
    title: 'The Gentleman',
    description: 'A distinguished frog with impeccable style and wisdom',
    imageSrc: '/images/tophat-frog.png',
    characterName: 'Gentleman',
  },
  {
    id: 'star-frog',
    type: 'character',
    title: 'The Stargazer',
    description: 'An astronomer who studies the stars from the observatory',
    imageSrc: '/images/star-frog.png',
    characterName: 'Stargazer',
  },
  {
    id: 'mushroom-frog',
    type: 'character',
    title: 'The Mycologist',
    description: 'A scholar of fungi and the mysteries of the forest floor',
    imageSrc: '/images/mushroom-frog.png',
    characterName: 'Mycologist',
  },
  {
    id: 'fishing-frog',
    type: 'character',
    title: 'The Angler',
    description: 'A patient fisher who tends to the water wheel and pond',
    imageSrc: '/images/fishing-frog.png',
    characterName: 'Angler',
  },
  {
    id: 'fireplace-frogs',
    type: 'character',
    title: 'The Hearth Keepers',
    description: 'Guardians of the Great Hall, keeping the fire warm and stories alive',
    imageSrc: '/images/fireplace-frogs.png',
    characterName: 'Hearth Keepers',
  },
  {
    id: 'greathall-blueprint',
    type: 'blueprint',
    title: 'Great Hall Blueprint',
    description: 'Architectural plans for the Great Hall',
    imageSrc: '/images/greathall-blueprint.png',
  },
  {
    id: 'character-gallery',
    type: 'gallery',
    title: 'Character Gallery',
    description: 'Meet all the residents of the Royal Arboretum',
  },
];

// Helper function to get all character pages (works with both mobile and desktop)
export const getCharacterPages = (isMobile: boolean = false): StoryPage[] => {
  const pages = isMobile ? getMobileStoryPages() : getDesktopStoryPages();
  return pages.filter(page => page.type === 'character');
};

// Gallery-only pages (not in main story flow)
export const galleryPages: StoryPage[] = [
  {
    id: 'treehouse-color',
    type: 'image',
    title: 'The Aerial Arboretum Residence',
    description: 'A grand treehouse built into and around a massive, ancient tree',
    imageSrc: '/images/treehouse-color.png',
  },
  {
    id: 'treehouse-blueprint',
    type: 'blueprint',
    title: 'Treehouse Blueprint',
    description: 'Architectural plans for the Aerial Arboretum Residence',
    imageSrc: '/images/treehouse-blueprint.png',
  },
];

// Get all gallery items (characters + gallery-only pages)
export const getAllGalleryPages = (isMobile: boolean = false): StoryPage[] => {
  return [...getCharacterPages(isMobile), ...galleryPages];
};

// Helper function to find page index by id
export const findPageIndexById = (id: string): number => {
  return storyPages.findIndex(page => page.id === id);
};

