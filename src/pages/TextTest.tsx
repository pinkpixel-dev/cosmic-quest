import React, { useState } from 'react';
import TextDisplay from '../components/TextDisplay';
import PlainTextDisplay from '../components/PlainTextDisplay';
import { Link } from 'react-router-dom';

const TextTest: React.FC = () => {
  const [selectedFont, setSelectedFont] = useState<string>('quicksand');
  
  const testText = "You wake with a start, your heart pounding. The dream was so vivid - stars swirling, voices calling. As your eyes adjust to the darkness of your bedroom, you notice something impossible: your ceiling has vanished, replaced by an endless sea of stars. A gentle blue light fills the room, emanating from a small crystalline object on your nightstand that definitely wasn't there when you went to sleep.";
  
  return (
    <div className="container max-w-4xl mx-auto p-4">
      <h1 className="text-2xl md:text-3xl text-cosmic-purple mb-6">Text Rendering Test</h1>
      
      <div className="mb-4">
        <label className="block mb-2">Select Font:</label>
        <select 
          value={selectedFont} 
          onChange={(e) => setSelectedFont(e.target.value)}
          className="bg-cosmic-dark border border-cosmic-purple/30 text-white p-2 rounded"
        >
          <option value="quicksand">Quicksand</option>
          <option value="space-grotesk">Space Grotesk</option>
          <option value="system">System Font</option>
          <option value="serif">Serif</option>
          <option value="monospace">Monospace</option>
        </select>
      </div>
      
      <div className="bg-cosmic-dark/80 border border-cosmic-purple/30 p-4 rounded-lg mb-6">
        <h2 className="text-xl text-cosmic-gold mb-2">Original TextDisplay Component:</h2>
        <TextDisplay 
          text={testText} 
          className={`mb-4 ${
            selectedFont === 'quicksand' ? 'font-adventure' : 
            selectedFont === 'space-grotesk' ? 'font-pixel' : 
            selectedFont === 'system' ? 'font-sans' : 
            selectedFont === 'serif' ? 'font-serif' : 
            'font-mono'
          }`}
        />
      </div>
      
      <div className="bg-cosmic-dark/80 border border-cosmic-purple/30 p-4 rounded-lg mb-6">
        <h2 className="text-xl text-cosmic-gold mb-2">Character-by-Character Rendering:</h2>
        <PlainTextDisplay 
          text={testText} 
          className={`mb-4 ${
            selectedFont === 'quicksand' ? 'font-adventure' : 
            selectedFont === 'space-grotesk' ? 'font-pixel' : 
            selectedFont === 'system' ? 'font-sans' : 
            selectedFont === 'serif' ? 'font-serif' : 
            'font-mono'
          }`}
        />
      </div>
      
      <div className="bg-cosmic-dark/80 border border-cosmic-purple/30 p-4 rounded-lg mb-6">
        <h2 className="text-xl text-cosmic-gold mb-2">Basic HTML Rendering:</h2>
        <p 
          className={`text-lg md:text-xl mb-4 ${
            selectedFont === 'quicksand' ? 'font-adventure' : 
            selectedFont === 'space-grotesk' ? 'font-pixel' : 
            selectedFont === 'system' ? 'font-sans' : 
            selectedFont === 'serif' ? 'font-serif' : 
            'font-mono'
          }`}
        >
          {testText}
        </p>
      </div>
      
      <div className="bg-cosmic-dark/80 border border-cosmic-purple/30 p-4 rounded-lg mb-6">
        <h2 className="text-xl text-cosmic-gold mb-2">Pre-formatted Text:</h2>
        <pre 
          className={`text-lg md:text-xl mb-4 whitespace-pre-wrap ${
            selectedFont === 'quicksand' ? 'font-adventure' : 
            selectedFont === 'space-grotesk' ? 'font-pixel' : 
            selectedFont === 'system' ? 'font-sans' : 
            selectedFont === 'serif' ? 'font-serif' : 
            'font-mono'
          }`}
        >
          {testText}
        </pre>
      </div>
      
      <div className="mt-6">
        <Link 
          to="/" 
          className="bg-cosmic-purple text-white px-4 py-2 rounded hover:bg-cosmic-purple/80 transition-colors"
        >
          Back to Game
        </Link>
        
        <a 
          href="/text-test.html" 
          target="_blank" 
          className="bg-cosmic-gold text-cosmic-dark px-4 py-2 rounded hover:bg-cosmic-gold/80 transition-colors ml-4"
        >
          Open Plain HTML Test
        </a>
      </div>
    </div>
  );
};

export default TextTest;
