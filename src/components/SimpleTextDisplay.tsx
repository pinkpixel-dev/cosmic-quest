import React from 'react';

interface SimpleTextDisplayProps {
  text: string;
  className?: string;
  textColor?: string;
}

const SimpleTextDisplay: React.FC<SimpleTextDisplayProps> = ({ 
  text, 
  className = "", 
  textColor = "text-game-text"
}) => {
  return (
    <div className={`${className} ${textColor} relative`}>
      <pre className="text-lg md:text-xl font-text whitespace-pre-wrap break-words">
        {text}
      </pre>
    </div>
  );
};

export default SimpleTextDisplay;
