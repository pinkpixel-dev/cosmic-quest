
import React, { useState, useEffect } from 'react';
import { items, scenes, initialGameState } from '@/data/gameData';
import { Item, Choice, GameState } from '@/types/game';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import HealthBar from './HealthBar';
import Inventory from './Inventory';
import SceneImage from './SceneImage';
import DialogBox from './DialogBox';
import TextDisplay from './TextDisplay';
import SimpleTextDisplay from './SimpleTextDisplay';
import ChoiceButton from './ChoiceButton';

const Game: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const [inventoryOpen, setInventoryOpen] = useState(false);
  const { toast } = useToast();

  const currentScene = scenes[gameState.currentSceneId];
  const inventoryItems = gameState.inventory.map(id => items[id]).filter(Boolean);

  useEffect(() => {
    // Start timer when component mounts
    const timer = setInterval(() => {
      setGameState(prev => ({
        ...prev,
        playedTime: prev.playedTime + 1
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleChoice = (choice: Choice) => {
    // Process consequences of choice
    let newHealth = gameState.health;
    let newInventory = [...gameState.inventory];
    let newUnlockedScenes = [...gameState.unlockedScenes];

    if (choice.consequences) {
      // Handle health changes
      if (choice.consequences.health) {
        newHealth = Math.min(
          gameState.maxHealth,
          Math.max(0, gameState.health + choice.consequences.health)
        );

        if (choice.consequences.health < 0) {
          toast({
            title: "Damage Taken",
            description: `You lost ${Math.abs(choice.consequences.health)} health`,
            variant: "destructive"
          });
        } else if (choice.consequences.health > 0) {
          toast({
            title: "Health Restored",
            description: `You gained ${choice.consequences.health} health`,
          });
        }
      }

      // Handle inventory changes
      if (choice.consequences.addItems) {
        choice.consequences.addItems.forEach(itemId => {
          if (!newInventory.includes(itemId)) {
            newInventory.push(itemId);
            toast({
              title: "Item Acquired",
              description: `Added ${items[itemId].name} to your inventory`
            });
          }
        });
      }

      if (choice.consequences.removeItems) {
        newInventory = newInventory.filter(id => !choice.consequences.removeItems?.includes(id));
        if (choice.consequences.removeItems.length > 0) {
          toast({
            title: "Item Used",
            description: "An item was removed from your inventory"
          });
        }
      }

      // Handle unlocking scenes
      if (choice.consequences.unlockScenes) {
        newUnlockedScenes = [
          ...newUnlockedScenes,
          ...choice.consequences.unlockScenes.filter(id => !newUnlockedScenes.includes(id))
        ];
      }
    }

    // Update game state with new scene and consequences
    setGameState(prev => ({
      ...prev,
      currentSceneId: choice.nextSceneId,
      health: newHealth,
      inventory: newInventory,
      unlockedScenes: newUnlockedScenes,
      seenText: [...prev.seenText, prev.currentSceneId]
    }));

    // Scroll to top when changing scenes
    window.scrollTo(0, 0);
  };

  const canSelectChoice = (choice: Choice): boolean => {
    if (!choice.requiredItems) return true;
    return choice.requiredItems.every(item => gameState.inventory.includes(item));
  };

  const hasSpecialRequirements = (choice: Choice): boolean => {
    return !!choice.requiredItems && choice.requiredItems.length > 0;
  };

  const handleUseItem = (item: Item) => {
    if (item.effect && item.effect.type === 'health') {
      const newHealth = Math.min(gameState.maxHealth, gameState.health + item.effect.value);
      setGameState(prev => ({
        ...prev,
        health: newHealth,
        inventory: prev.inventory.filter(id => id !== item.id)
      }));

      toast({
        title: "Item Used",
        description: `Used ${item.name} to restore ${item.effect.value} health`
      });
    }
  };

  const resetGame = () => {
    setGameState(initialGameState);
    toast({
      title: "Game Reset",
      description: "Starting a new adventure"
    });
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="container max-w-4xl mx-auto">
      <Card className="bg-cosmic-dark/80 border-cosmic-purple/30 shadow-lg shadow-cosmic-purple/10">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl md:text-3xl text-cosmic-purple text-shadow font-bold font-title">
              {currentScene.title}
            </CardTitle>
            <div className="text-xs text-muted-foreground">
              Time: {formatTime(gameState.playedTime)}
            </div>
          </div>
          <HealthBar current={gameState.health} max={gameState.maxHealth} />
        </CardHeader>
        <CardContent>
          <SceneImage src={currentScene.imagePath} alt={currentScene.title} />

          <SimpleTextDisplay
            text={currentScene.description}
            textColor="text-game-description"
            className="mb-4 leading-relaxed"
          />

          {currentScene.npcDialog && (
            <DialogBox text={currentScene.npcDialog} />
          )}

          <Separator className="my-6 bg-cosmic-purple/20" />

          <div className={`${inventoryOpen ? 'block' : 'hidden'} mb-6`}>
            <h3 className="text-cosmic-gold mb-2 flex items-center text-lg md:text-xl font-text">
              <span className="mr-2">🎒</span>
              <span>Inventory</span>
            </h3>
            <Inventory items={inventoryItems} onUseItem={handleUseItem} />
          </div>

          <div className="choices-container">
            <h3 className="text-cosmic-pink mb-2 flex items-center text-lg md:text-xl font-text">
              <span className="mr-2">👉</span>
              <span>What will you do?</span>
            </h3>
            {currentScene.choices.map((choice) => (
              <ChoiceButton
                key={choice.id}
                choice={choice}
                onClick={handleChoice}
                disabled={!canSelectChoice(choice)}
                hasRequirements={hasSpecialRequirements(choice)}
              />
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            size="sm"
            className="bg-muted/20 text-cosmic-blue hover:text-cosmic-gold hover:bg-muted/40"
            onClick={() => setInventoryOpen(!inventoryOpen)}
          >
            {inventoryOpen ? "Hide Inventory" : "Show Inventory"} ({inventoryItems.length})
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-muted/20 text-muted-foreground hover:text-cosmic-pink hover:bg-muted/40"
            onClick={resetGame}
          >
            Reset Game
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Game;
