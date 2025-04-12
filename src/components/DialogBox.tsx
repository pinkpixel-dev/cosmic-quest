
import React from 'react';
import TextDisplay from './TextDisplay';

interface DialogBoxProps {
  text: string;
}

const DialogBox: React.FC<DialogBoxProps> = ({ text }) => {
  if (!text) return null;
  
  return (
    <div className="bg-muted/20 border border-cosmic-purple/30 rounded-lg p-4 mb-4 relative">
      <div className="absolute -top-3 left-4 bg-cosmic-dark px-2 text-xs text-cosmic-pink">
        NPC DIALOG
      </div>
      <TextDisplay 
        text={text} 
        textColor="text-game-dialog" 
        typingEffect={true} 
        delay={20}
        className="italic"
      />
    </div>
  );
};

export default DialogBox;
