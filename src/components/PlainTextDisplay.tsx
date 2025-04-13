import React from 'react';

interface PlainTextDisplayProps {
  text: string;
  className?: string;
}

const PlainTextDisplay: React.FC<PlainTextDisplayProps> = ({ text, className = "" }) => {
  // Create an array of spans, one character per span
  const characters = text.split('').map((char, index) => (
    <span key={index} className="inline-block">{char}</span>
  ));

  return (
    <div className={`${className} font-sans text-lg md:text-xl leading-relaxed`}>
      {characters}
    </div>
  );
};

export default PlainTextDisplay;
