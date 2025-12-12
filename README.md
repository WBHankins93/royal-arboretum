# 🌿 The Royal Arboretum - Interactive Storybook

An enchanting interactive storybook experience featuring the whimsical world of the Royal Arboretum and its delightful frog inhabitants. Built with Next.js, TypeScript, and Tailwind CSS.

![The Royal Arboretum](public/images/golden-frog-seal.png)

## 📖 The Story

Deep within an ancient forest, nestled high among the branches of a colossal, centuries-old tree, lies the **Royal Arboretum**—a magnificent treehouse complex that serves as home to a remarkable community of frogs. This is no ordinary dwelling; it is a masterpiece of arboreal architecture, designed by the renowned architect Ignatius P. Fogg & Associates.

The Royal Arboretum is a multi-level wonder, with copper-roofed turrets, stained glass windows, spiral staircases, and connecting bridges that weave through the tree's massive branches. At its heart stands the Great Hall, where stories are shared and the fire is always warm.

Our story begins when you discover the Royal Seal—a golden wax emblem bearing the image of the Frog King himself, crowned and regal, perched atop his castle in the trees. As you click the seal, the book opens, revealing the magical world within.

### Meet the Residents

**Finnley "The Pathfinder"** - A tireless messenger and explorer, always on the move with his trusty satchel, navigating the endless stairs to deliver news and parcels between the tree's many levels.

**The Gentleman** - A distinguished frog with impeccable style, wisdom, and a fine top hat. He brings elegance and grace to the arboretum.

**The Stargazer** - An astronomer who studies the stars from the observatory, mapping constellations and dreaming of distant worlds.

**The Mycologist** - A scholar of fungi and the mysteries of the forest floor, uncovering the secrets hidden beneath the roots.

**The Angler** - A patient fisher who tends to the water wheel and pond, ensuring the arboretum's aquatic systems run smoothly.

**The Hearth Keepers** - Guardians of the Great Hall, keeping the fire warm and stories alive, preserving the oral history of the Royal Arboretum.

Each character has their own story to tell, their own role in maintaining the delicate balance of this magical community. Through blueprints, illustrations, and interactive pages, you'll explore their world and discover the secrets of the Royal Arboretum.

## ✨ Features

### 🎬 Interactive Storybook Experience
- **Landing Page**: Click the golden Royal Seal to begin your journey
- **Book Opening Animation**: Watch as the storybook opens with a beautiful 3D page-turning effect
- **Animated Video**: The moving treehouse video welcomes you to the arboretum
- **Full-Page Character Profiles**: Detailed illustrations of each resident with embedded information
- **Architectural Blueprints**: Explore the treehouse and Great Hall through detailed blueprints

### 🎨 Beautiful Design
- **Parchment Aesthetic**: Authentic aged paper background with water stains and texture
- **Whimsical Typography**: Playfair Display font for elegant, storybook-style text
- **Responsive Layout**: Optimized for both desktop and mobile devices
- **Smooth Animations**: Page transitions, fade-ins, and interactive hover effects

### 🎮 Navigation Options
- **Button Navigation**: Previous/Next buttons at the bottom of each page
- **Keyboard Controls**: 
  - Arrow Right or Spacebar = Next page
  - Arrow Left = Previous page
- **Touch Gestures**: Swipe left/right on mobile devices to navigate
- **Character Gallery**: Jump directly to any character's page from the gallery

### 📚 Story Pages
1. **Landing Page** - The Royal Seal
2. **Video Page** - The Moving Treehouse (with main title)
3. **Treehouse Color** - The Aerial Arboretum Residence illustration
4. **Treehouse Blueprint** - Architectural plans
5. **Pathfinder Frog** - Character profile
6. **Tophat Frog (Gentleman)** - Character profile
7. **Star Frog (Stargazer)** - Character profile
8. **Mushroom Frog (Mycologist)** - Character profile
9. **Fishing Frog (Angler)** - Character profile
10. **Fireplace Frogs (Hearth Keepers)** - Character profile
11. **Great Hall Blueprint** - Architectural plans
12. **Character Gallery** - Interactive index of all characters

## 🚀 Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm or yarn

### Installation

1. **Clone the repository** (or navigate to the project directory):
```bash
cd ipfrog
```

2. **Install dependencies**:
```bash
npm install
```

3. **Run the development server**:
```bash
npm run dev
```

4. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## 🏗️ Project Structure

```
ipfrog/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with font imports
│   ├── page.tsx           # Main page with state management
│   └── globals.css        # Global styles and animations
├── components/            # React components
│   ├── LandingPage.tsx    # Landing page with seal
│   ├── BookOpening.tsx    # Book opening animation
│   ├── StoryPage.tsx      # Individual story page renderer
│   ├── StoryContainer.tsx # Main story navigation container
│   ├── PageTransition.tsx # Page turning animations
│   ├── Pagination.tsx     # Navigation buttons
│   └── CharacterGallery.tsx # Character index/gallery
├── public/                # Static assets
│   ├── images/           # Image assets
│   │   ├── golden-frog-seal.png
│   │   ├── treehouse-color.png
│   │   ├── treehouse-blueprint.png
│   │   ├── greathall-blueprint.png
│   │   └── [character images]
│   └── video/            # Video assets
│       └── moving-treehouse.mp4
├── types/                # TypeScript definitions
│   └── story.ts          # Story page types and data
├── utils/                # Utility functions
└── tailwind.config.ts    # Tailwind CSS configuration
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.5 (App Router)
- **Language**: TypeScript 5.5.4
- **Styling**: Tailwind CSS 3.4.7
- **React**: 18.3.1
- **Fonts**: Playfair Display (Google Fonts)

## 🎯 Key Features Explained

### Book Opening Animation
The initial book opening uses CSS 3D transforms to create a realistic page-turning effect. The cover rotates on the Y-axis, revealing the first page beneath.

### Page Transitions
Each page turn uses perspective transforms to simulate a real book. Different animations for forward and backward navigation create an immersive experience.

### Swipe Gestures
Touch event handlers detect horizontal swipes with a minimum distance threshold (50px). Vertical swipes are ignored to prevent conflicts with scrolling.

### Character Gallery
The gallery displays all characters in a responsive grid. Clicking any character card navigates directly to that character's page, bypassing linear navigation.

### Responsive Design
- Mobile-first approach
- Touch-optimized interactions
- Flexible layouts that adapt to screen size
- Optimized image loading with Next.js Image component

## 🎨 Customization

### Adding New Pages
Edit `types/story.ts` to add new story pages:

```typescript
{
  id: 'new-page',
  type: 'image' | 'character' | 'blueprint' | 'video',
  title: 'Page Title',
  description: 'Page description',
  imageSrc: '/images/new-image.png',
}
```

### Styling
- Parchment colors are defined in `app/globals.css` as CSS variables
- Animations can be customized in the same file
- Tailwind configuration is in `tailwind.config.ts`

### Fonts
The main title uses Playfair Display. To change it, update `app/layout.tsx` and import a different Google Font.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌟 Future Enhancements

Potential features for future development:
- Interactive hotspots on images
- Sound effects and background music
- Character dialogue or voiceovers
- Mini-games or interactive puzzles
- Save progress/bookmarking
- Print-friendly versions
- Additional character stories
- Animated character interactions

## 📄 License

This project is created for educational and entertainment purposes.

## 🙏 Acknowledgments

- Inspired by classic storybooks and fairy tales
- Built with modern web technologies
- Designed for an immersive, magical experience

---

**Welcome to the Royal Arboretum. May your journey through the branches be filled with wonder and discovery!** 🐸✨
