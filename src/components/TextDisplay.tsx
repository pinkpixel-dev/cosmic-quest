
import React, { useState, useEffect, useRef } from 'react';

interface TextDisplayProps {
  text: string;
  className?: string;
  textColor?: string;
  typingEffect?: boolean;
  delay?: number;
}

// Function to ensure text is properly encoded
const ensureProperEncoding = (text: string): string => {
  // First decode any HTML entities that might be in the text
  const decoded = text.replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");

  // Then ensure it's properly encoded as UTF-8
  return decoded;
};

const TextDisplay: React.FC<TextDisplayProps> = ({
  text,
  className = "",
  textColor = "text-game-text",
  typingEffect = false,
  delay = 30
}) => {
  // Initialize with properly encoded text
  const [displayText, setDisplayText] = useState(typingEffect ? "" : ensureProperEncoding(text));
  const [isComplete, setIsComplete] = useState(!typingEffect);
  const textIndex = useRef(0);

  useEffect(() => {
    // Ensure text is properly encoded
    const processedText = ensureProperEncoding(text);

    if (typingEffect) {
      setDisplayText("");
      textIndex.current = 0;
      setIsComplete(false);

      const interval = setInterval(() => {
        if (textIndex.current < processedText.length) {
          setDisplayText(prev => prev + processedText.charAt(textIndex.current));
          textIndex.current += 1;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, delay);

      return () => clearInterval(interval);
    } else {
      setDisplayText(processedText);
      setIsComplete(true);
    }
  }, [text, typingEffect, delay]);

  return (
    <div className={`${className} ${textColor} relative`}>
      <p
        className={`text-lg md:text-xl ${isComplete ? "" : "after:content-['|'] after:ml-1 after:animate-pulse-soft"}`}
        style={{ wordBreak: 'normal', wordWrap: 'normal', whiteSpace: 'pre-wrap' }}
      >
        {displayText}
      </p>
    </div>
  );
};

export default TextDisplay;
