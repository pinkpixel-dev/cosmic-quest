
import React from 'react';
import { Item } from '@/types/game';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface InventoryItemProps {
  item: Item;
  onUse?: (item: Item) => void;
}

const InventoryItem: React.FC<InventoryItemProps> = ({ item, onUse }) => {
  const isUsable = item.effect && item.effect.type === 'health';
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center justify-between p-2 my-1 bg-muted/20 rounded-md border border-cosmic-purple/20 hover:border-cosmic-purple/50 transition-all group">
            <div className="flex items-center">
              <div className="text-2xl mr-2">{item.icon || '✨'}</div>
              <div className="text-left">
                <p className="text-cosmic-gold font-medium group-hover:text-shadow-gold transition-all">{item.name}</p>
              </div>
            </div>
            {isUsable && onUse && (
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-muted/30 text-cosmic-blue hover:text-cosmic-gold hover:bg-muted/50"
                onClick={() => onUse(item)}
              >
                Use
              </Button>
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent className="bg-cosmic-dark/90 border-cosmic-purple text-game-description">
          <p>{item.description}</p>
          {item.effect && (
            <p className="text-cosmic-gold mt-1">
              {item.effect.type === 'health' ? `Restores ${item.effect.value} health` : item.effect.value}
            </p>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default InventoryItem;
