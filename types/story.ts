export type StoryPageType = 'video' | 'image' | 'character' | 'blueprint' | 'gallery';

export interface StoryPage {
  id: string;
  type: StoryPageType;
  title: string;
  description?: string;
  imageSrc?: string;
  videoSrc?: string;
  characterName?: string;
}

export const storyPages: StoryPage[] = [
  {
    id: 'video-treehouse',
    type: 'video',
    title: 'The Moving Treehouse',
    description: 'Welcome to the Royal Arboretum',
    videoSrc: '/video/moving-treehouse.mp4',
  },
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

// Helper function to get all character pages
export const getCharacterPages = (): StoryPage[] => {
  return storyPages.filter(page => page.type === 'character');
};

// Helper function to find page index by id
export const findPageIndexById = (id: string): number => {
  return storyPages.findIndex(page => page.id === id);
};

