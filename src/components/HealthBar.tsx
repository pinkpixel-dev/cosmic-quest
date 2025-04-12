
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface HealthBarProps {
  current: number;
  max: number;
}

const HealthBar: React.FC<HealthBarProps> = ({ current, max }) => {
  const percentage = Math.floor((current / max) * 100);
  
  let barColor = "bg-cosmic-blue";
  if (percentage < 30) {
    barColor = "bg-red-500";
  } else if (percentage < 60) {
    barColor = "bg-cosmic-gold";
  }
  
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-game-text">Health</span>
        <span className={`font-pixel text-xs ${percentage < 30 ? 'text-red-500 animate-pulse' : 'text-cosmic-blue'}`}>
          {current}/{max}
        </span>
      </div>
      <Progress 
        value={percentage} 
        className="h-2 bg-muted/20" 
        indicatorClassName={`${barColor} transition-all duration-500`}
      />
    </div>
  );
};

export default HealthBar;
