
import React from 'react';
import Game from '@/components/Game';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cosmic-dark to-black py-6 px-4">
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-title text-cosmic-gold animate-pulse-soft mb-2">
          Cosmic Quest
        </h1>
        <p className="text-game-text text-base md:text-lg max-w-lg mx-auto font-text">
          An epic journey through the cosmos where your choices shape destiny
        </p>
      </header>

      <main>
        <Game />
      </main>

      <footer className="text-center mt-10 text-xs text-muted-foreground">
        <p>Use your imagination and follow the story. Make choices wisely!</p>
      </footer>
    </div>
  );
};

export default Index;
