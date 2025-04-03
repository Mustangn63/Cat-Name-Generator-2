import React, { useState, useEffect } from 'react';
import catImages from '../data/cat-images.json';
import { RefreshCw } from 'lucide-react';

const CatImage: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    if (catImages && catImages.length > 0) {
      setImageUrl(catImages[0]); // Use the first (and only) image
    } else {
      console.error("No cat images found in cat-images.json");
    }
  }, [catImages]);

  return (
    <div className="card flex flex-col items-center justify-center space-y-4">
      <h3 className="text-lg font-medium text-brand-gray-dark">Meet Your Inspiration!</h3>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Cute Anime Cat"
          className="w-64 h-64 object-cover rounded-lg shadow-md border-4 border-brand-pink-light"
        />
      ) : (
        <div className="w-64 h-64 bg-brand-gray-light rounded-lg flex items-center justify-center text-brand-gray">
          Loading image...
        </div>
      )}
    </div>
  );
};

export default CatImage;
