/* eslint-disable @next/next/no-img-element */
// components/Gallery.tsx
import React from "react";

const Gallery: React.FC = () => {
  // Generate the image URLs dynamically
  const imageUrls = Array.from(
    { length: 31 },
    (_, i) => `/sushi/mesakuSushi${i + 1}.jpg`
  );

  return (
    <div>
      <h1 className="font-cinzel text-center m-12 text-4xl">Food Gallery</h1>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 sm:gap-4 lg:gap-8 sm:m-14 m-6">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            className="object-cover w-full h-full rounded-sm shadow-sm shadow-black border-white border"
            src={url}
            alt={`Food ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
