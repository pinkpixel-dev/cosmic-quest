
import React from 'react';
import { Choice } from '@/types/game';

interface ChoiceButtonProps {
  choice: Choice;
  onClick: (choice: Choice) => void;
  disabled?: boolean;
  showRequirements?: boolean;
  hasRequirements?: boolean;
}

const ChoiceButton: React.FC<ChoiceButtonProps> = ({ 
  choice, 
  onClick, 
  disabled = false,
  showRequirements = true,
  hasRequirements = false
}) => {
  return (
    <button
      className={`text-left p-3 my-2 w-full rounded-md transition-all duration-200 choice-hover
        ${disabled 
          ? 'bg-muted/10 text-muted-foreground cursor-not-allowed border border-muted/20' 
          : 'bg-muted/20 text-game-choice hover:bg-muted/30 border border-cosmic-purple/20 hover:border-cosmic-purple/50'
        }
        ${hasRequirements && !disabled ? 'border-cosmic-gold/30 hover:border-cosmic-gold' : ''}
      `}
      onClick={() => !disabled && onClick(choice)}
      disabled={disabled}
    >
      <div className="flex items-center">
        <span className="mr-2">➤</span>
        <span>{choice.text}</span>
        {hasRequirements && showRequirements && (
          <span className="ml-2 text-cosmic-gold text-xs">(Special)</span>
        )}
      </div>
    </button>
  );
};

export default ChoiceButton;
