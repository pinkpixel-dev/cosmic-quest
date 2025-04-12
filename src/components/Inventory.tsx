
import React from 'react';
import { Item } from '@/types/game';
import { ScrollArea } from '@/components/ui/scroll-area';
import InventoryItem from './InventoryItem';

interface InventoryProps {
  items: Item[];
  onUseItem?: (item: Item) => void;
}

const Inventory: React.FC<InventoryProps> = ({ items, onUseItem }) => {
  if (items.length === 0) {
    return (
      <div className="border border-cosmic-purple/20 rounded-md p-4 bg-muted/10 h-full flex items-center justify-center">
        <p className="text-muted-foreground text-sm italic">Your inventory is empty...</p>
      </div>
    );
  }

  return (
    <ScrollArea className="border border-cosmic-purple/20 rounded-md p-2 bg-muted/10 h-full max-h-[200px]">
      <div className="space-y-1">
        {items.map((item) => (
          <InventoryItem key={item.id} item={item} onUse={onUseItem} />
        ))}
      </div>
    </ScrollArea>
  );
};

export default Inventory;
