
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Heart } from 'lucide-react';

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

  // Determine health status text
  const getHealthStatus = () => {
    if (percentage > 75) return 'Excellent';
    if (percentage > 50) return 'Good';
    if (percentage > 25) return 'Injured';
    return 'Critical';
  };
  
  return (
    <div className="mb-2">
      <div className="flex justify-between items-center text-xs mb-1">
        <span className="text-muted-foreground flex items-center">
          <Heart className="h-3 w-3 mr-1 text-cosmic-pink" /> Health
          <span className="ml-1 text-xs opacity-70">{getHealthStatus()}</span>
        </span>
        <span className="text-cosmic-pink font-medium">{current}/{max}</span>
      </div>
      <Progress 
        value={percentage} 
        className="h-2.5 bg-muted/30" 
        // Using inline style for the indicator color
        style={{ 
          '--progress-indicator-color': getHealthColor().replace('bg-', '')
        } as React.CSSProperties}
      />
    </div>
  );
};

export default HealthBar;
