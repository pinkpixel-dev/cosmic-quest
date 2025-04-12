
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface HealthBarProps {
  current: number;
  max: number;
}

const HealthBar: React.FC<HealthBarProps> = ({ current, max }) => {
  const percentage = Math.max(0, Math.min(100, (current / max) * 100));
  
  // Determine color based on health percentage
  const getHealthColor = () => {
    if (percentage > 70) return 'bg-green-500';
    if (percentage > 30) return 'bg-yellow-500';
    return 'bg-red-500';
  };
  
  return (
    <div className="mb-1">
      <div className="flex justify-between text-xs mb-1">
        <span className="text-muted-foreground">Health</span>
        <span className="text-cosmic-pink">{current}/{max}</span>
      </div>
      <Progress 
        value={percentage} 
        className="h-2 bg-muted/30" 
        // Using inline style since indicatorClassName isn't supported
        style={{ 
          '--progress-indicator-color': getHealthColor().replace('bg-', '')
        } as React.CSSProperties}
      />
    </div>
  );
};

export default HealthBar;
