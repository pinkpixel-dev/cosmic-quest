
import React from 'react';

interface SceneImageProps {
  src?: string;
  alt?: string;
}

const SceneImage: React.FC<SceneImageProps> = ({ src, alt = "Scene illustration" }) => {
  if (!src) return null;
  
  return (
    <div className="w-full h-48 md:h-64 relative overflow-hidden rounded-lg mb-4 pixel-border">
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark/70 to-transparent pointer-events-none" />
    </div>
  );
};

export default SceneImage;
