
import React, { useState, useEffect, useRef } from 'react';

interface TextDisplayProps {
  text: string;
  className?: string;
  textColor?: string;
  typingEffect?: boolean;
  delay?: number;
}

const TextDisplay: React.FC<TextDisplayProps> = ({ 
  text, 
  className = "", 
  textColor = "text-game-text", 
  typingEffect = false,
  delay = 30
}) => {
  const [displayText, setDisplayText] = useState(typingEffect ? "" : text);
  const [isComplete, setIsComplete] = useState(!typingEffect);
  const textIndex = useRef(0);
  
  useEffect(() => {
    if (typingEffect) {
      setDisplayText("");
      textIndex.current = 0;
      setIsComplete(false);
      
      const interval = setInterval(() => {
        if (textIndex.current < text.length) {
          setDisplayText(prev => prev + text.charAt(textIndex.current));
          textIndex.current += 1;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, delay);
      
      return () => clearInterval(interval);
    } else {
      setDisplayText(text);
      setIsComplete(true);
    }
  }, [text, typingEffect, delay]);
  
  return (
    <div className={`${className} ${textColor} relative`}>
      <p className={`${isComplete ? "" : "after:content-['|'] after:ml-1 after:animate-pulse-soft"}`}>
        {displayText}
      </p>
    </div>
  );
};

export default TextDisplay;
