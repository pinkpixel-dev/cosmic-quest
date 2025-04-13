import React, { useEffect, useState } from 'react';
import WebFont from 'webfontloader';

interface FontLoaderProps {
  children: React.ReactNode;
}

const FontLoader: React.FC<FontLoaderProps> = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    // Use WebFontLoader to load fonts
    WebFont.load({
      google: {
        families: ['Press Start 2P', 'Jersey 10']
      },
      active: () => {
        console.log('Fonts loaded successfully');
        // Wait a bit to ensure fonts are applied
        setTimeout(() => {
          setFontsLoaded(true);
          // Remove loading class from body
          document.body.classList.remove('wf-loading');
          document.body.classList.add('wf-active');
        }, 100);
      },
      inactive: () => {
        console.log('Failed to load fonts');
        // Still show content even if fonts failed to load
        setFontsLoaded(true);
        document.body.classList.remove('wf-loading');
        document.body.classList.add('wf-inactive');
      },
      timeout: 5000 // 5 seconds
    });
  }, []);

  // Show a loading message until fonts are loaded
  if (!fontsLoaded) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-white text-xl">Loading fonts...</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default FontLoader;
