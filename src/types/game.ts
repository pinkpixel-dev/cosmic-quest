
// Game types
export interface Item {
  id: string;
  name: string;
  description: string;
  effect?: {
    type: string;
    value: number;
  };
  icon?: string;
}

export interface Choice {
  id: string;
  text: string;
  nextSceneId: string;
  requiredItems?: string[];
  consequences?: {
    addItems?: string[];
    removeItems?: string[];
    health?: number;
    unlockScenes?: string[];
  };
}

export interface Scene {
  id: string;
  title: string;
  description: string;
  imagePath?: string;
  choices: Choice[];
  items?: string[];
  npcDialog?: string;
}

export interface GameState {
  currentSceneId: string;
  health: number;
  maxHealth: number;
  inventory: string[];
  unlockedScenes: string[];
  seenText: string[];
  playedTime: number;
}
