'use client';

export default function VideoPage() {
  return (
    <div className="w-full h-screen parchment-bg flex items-center justify-center p-4">
      <div className="w-full max-w-7xl h-full flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain rounded-lg shadow-2xl"
        >
          <source src="/video/moving-treehouse.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

