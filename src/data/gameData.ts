
import { Item, Scene } from "../types/game";

export const items: Record<string, Item> = {
  cosmicKey: {
    id: "cosmicKey",
    name: "Cosmic Key",
    description: "A mysterious key that seems to vibrate with celestial energy.",
    icon: "🔑"
  },
  starMap: {
    id: "starMap",
    name: "Star Map",
    description: "An ancient map showing mysterious constellations you've never seen before.",
    icon: "🗺️"
  },
  healingCrystal: {
    id: "healingCrystal",
    name: "Healing Crystal",
    description: "A glowing crystal that pulses with restorative energy.",
    effect: {
      type: "health",
      value: 20
    },
    icon: "💎"
  },
  ancientAmulet: {
    id: "ancientAmulet",
    name: "Ancient Amulet",
    description: "An amulet inscribed with symbols from a forgotten language.",
    icon: "🔮"
  },
  spaceCompass: {
    id: "spaceCompass",
    name: "Space Compass",
    description: "A compass that doesn't point north, but seems to guide you through the cosmos.",
    icon: "🧭"
  },
  
  // New items for the expanded game
  celestialCompass: {
    id: "celestialCompass",
    name: "Celestial Compass",
    description: "A compass that points toward the center of all realities. It glows brighter as you approach cosmic nexus points.",
    icon: "🧭"
  },
  voidShard: {
    id: "voidShard",
    name: "Void Shard",
    description: "A fragment of crystallized void. Cold to the touch and seems to absorb light around it.",
    icon: "🔮"
  },
  starlightEssence: {
    id: "starlightEssence",
    name: "Starlight Essence",
    description: "Liquid light captured in a small vial. It pulses with healing energy.",
    effect: {
      type: "health",
      value: 30
    },
    icon: "✨"
  },
  guardianSigil: {
    id: "guardianSigil",
    name: "Guardian Sigil",
    description: "A medallion bearing the symbol of the Cosmic Guardians. It hums when near areas of cosmic importance.",
    icon: "🔱"
  },
  echoMemory: {
    id: "echoMemory",
    name: "Echo Memory",
    description: "A crystalline fragment containing memories of a lost Guardian. Touching it reveals flashes of ancient knowledge.",
    icon: "💎"
  },
  
  // Additional new items for the expanded game
  voidShield: {
    id: "voidShield",
    name: "Void Shield",
    description: "A shield crafted from compressed void energy. It absorbs harmful energies directed at the bearer.",
    effect: {
      type: "defense",
      value: 40
    },
    icon: "🛡️"
  },
  cosmicHarp: {
    id: "cosmicHarp",
    name: "Cosmic Harp",
    description: "A miniature version of Lyra's instrument. When played, it can create harmonic resonances that affect reality in subtle ways.",
    icon: "🎵"
  },
  stellarInk: {
    id: "stellarInk",
    name: "Stellar Ink",
    description: "Ink distilled from the essence of a dying star. It glows with inner fire and can be used to mark reality itself.",
    icon: "🖋️"
  },
  timeFragment: {
    id: "timeFragment",
    name: "Time Fragment",
    description: "A shard of crystallized time. Holding it slows your personal time flow, giving you moments to think when everything else is in motion.",
    effect: {
      type: "time",
      value: 10
    },
    icon: "⏳"
  },
  realityAnchor: {
    id: "realityAnchor",
    name: "Reality Anchor",
    description: "A small device that stabilizes reality around you when activated. Essential when traveling through unstable cosmic regions.",
    icon: "⚓"
  },
  nexusKey: {
    id: "nexusKey",
    name: "Nexus Key",
    description: "A key forged from multiple realities fused together. It can unlock passages between cosmic planes.",
    icon: "🗝️"
  },
  guardianTear: {
    id: "guardianTear",
    name: "Guardian's Tear",
    description: "A teardrop from a Cosmic Guardian, crystallized into a potent healing catalyst. Restores significant health.",
    effect: {
      type: "health",
      value: 50
    },
    icon: "💧"
  }
};

export const scenes: Record<string, Scene> = {
  start: {
    id: "start",
    title: "The Cosmic Call",
    description: "You wake with a start, your heart pounding. The dream was so vivid - stars swirling, voices calling. As your eyes adjust to the darkness of your bedroom, you notice something impossible: your ceiling has vanished, replaced by an endless sea of stars. A gentle blue light fills the room, emanating from a small crystalline object on your nightstand that definitely wasn't there when you went to sleep.",
    imagePath: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    choices: [
      {
        id: "examine",
        text: "Examine the crystalline object",
        nextSceneId: "crystal"
      },
      {
        id: "hide",
        text: "Hide under your blanket",
        nextSceneId: "hide"
      },
      {
        id: "window",
        text: "Look out the window",
        nextSceneId: "window"
      }
    ]
  },
  
  crystal: {
    id: "crystal",
    title: "The Messenger",
    description: "You cautiously pick up the crystal. It's warm to the touch and pulses with an inner light that syncs with your heartbeat. Suddenly, a voice speaks directly into your mind: 'The cosmos calls, traveler. The boundaries between worlds grow thin. We need your help.'",
    imagePath: "https://images.unsplash.com/photo-1598517989203-885ffd58e81f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    npcDialog: "You must come. The Cosmic Guardians are fading, and the void grows. Take the key and find the portal. Please... you're our only hope.",
    choices: [
      {
        id: "accept",
        text: "Accept the call to adventure",
        nextSceneId: "accept",
        consequences: {
          addItems: ["cosmicKey"],
          unlockScenes: ["forest"]
        }
      },
      {
        id: "question",
        text: "Ask who's speaking",
        nextSceneId: "question"
      },
      {
        id: "refuse",
        text: "Refuse and put the crystal down",
        nextSceneId: "refuse"
      }
    ]
  },
  
  question: {
    id: "question",
    title: "The Guardian's Plea",
    description: "The crystal pulses brighter as you question it. The voice returns, clearer now, tinged with both hope and urgency.",
    npcDialog: "I am Elara, last of the Astral Guardians. Our realm exists parallel to yours, but the cosmic barrier is fracturing. Strange creatures slip through, and soon our worlds will collide catastrophically. Only someone of both worlds - someone like you - can help restore the balance.",
    choices: [
      {
        id: "accept-now",
        text: "Accept the responsibility",
        nextSceneId: "accept",
        consequences: {
          addItems: ["cosmicKey"],
          unlockScenes: ["forest"]
        }
      },
      {
        id: "more-questions",
        text: "Ask how you were chosen",
        nextSceneId: "more_questions"
      }
    ]
  },
  
  "more_questions": {
    id: "more_questions",
    title: "The Connection",
    description: "The crystal shows you flashes of memories: a childhood illness, a shooting star on your eighth birthday, a strange dream that repeated for years. Connections to the cosmic realm that have always been part of you.",
    npcDialog: "You've always been connected to both worlds, though you didn't know it. That's why you can hear me now, why you alone can traverse the boundary. Please, take the key. Time grows short.",
    choices: [
      {
        id: "finally-accept",
        text: "Take the key and accept your destiny",
        nextSceneId: "accept",
        consequences: {
          addItems: ["cosmicKey"],
          unlockScenes: ["forest"]
        }
      },
      {
        id: "last-refusal",
        text: "This is too much responsibility",
        nextSceneId: "refuse"
      }
    ]
  },
  
  refuse: {
    id: "refuse",
    title: "The Persistent Call",
    description: "You set the crystal down, but it continues to pulse insistently. The ceiling remains a window to the stars, and you realize this isn't something you can simply ignore. The voice doesn't speak again, but the crystal's glow intensifies, casting shadows that seem to move with purpose around your room.",
    choices: [
      {
        id: "reconsider",
        text: "Reconsider and pick up the crystal",
        nextSceneId: "crystal"
      },
      {
        id: "sleep",
        text: "Try to go back to sleep",
        nextSceneId: "sleep"
      }
    ]
  },
  
  sleep: {
    id: "sleep",
    title: "Uneasy Dreams",
    description: "You pull the covers over your head and somehow manage to fall into a fitful sleep. Your dreams are filled with strange worlds, cosmic vortexes, and a sense of impending doom. You wake frequently, each time seeing the crystal glowing ever brighter on your nightstand.",
    npcDialog: "Time grows short, traveler. The boundary weakens with each passing moment.",
    choices: [
      {
        id: "give-in",
        text: "Finally give in and accept the call",
        nextSceneId: "accept",
        consequences: {
          addItems: ["cosmicKey"],
          unlockScenes: ["forest"]
        }
      },
      {
        id: "continue-refusing",
        text: "Continue refusing (but honestly, the adventure awaits!)",
        nextSceneId: "game-over"
      }
    ]
  },
  
  window: {
    id: "window",
    title: "Changed World",
    description: "You approach your window and pull back the curtains. What you see makes your breath catch: your ordinary neighborhood street is gone. Instead, a vast cosmic landscape stretches before you - floating islands connected by bridges of starlight, strange plants that seem to be made of crystalline structures, and in the distance, a massive purple-black vortex that pulses ominously.",
    imagePath: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    choices: [
      {
        id: "back-to-crystal",
        text: "Return to examine the crystal",
        nextSceneId: "crystal"
      },
      {
        id: "panic",
        text: "Panic!",
        nextSceneId: "panic"
      }
    ]
  },
  
  panic: {
    id: "panic",
    title: "Calming Presence",
    description: "Your heart races as you try to make sense of what you're seeing. Just as panic fully sets in, a calming warmth emanates from the crystal on your nightstand, washing over you like a gentle wave. Your breathing steadies as you feel an empathetic presence touch your mind.",
    npcDialog: "Fear is natural, but you are not alone in this journey. I will guide you as best I can.",
    choices: [
      {
        id: "back-to-crystal-calm",
        text: "Approach the crystal with new resolve",
        nextSceneId: "crystal"
      }
    ]
  },
  
  hide: {
    id: "hide",
    title: "No Escape",
    description: "You dive under your blanket, heart pounding. The fabric that should block out all light now seems translucent, the starry vista still visible through it as if your blanket has become a thin veil between worlds. The blue glow from the crystal intensifies, gently pulling back your covers of its own accord.",
    choices: [
      {
        id: "face-reality",
        text: "Accept that you can't hide from this",
        nextSceneId: "crystal"
      }
    ]
  },
  
  accept: {
    id: "accept",
    title: "The First Step",
    description: "As your fingers close around the crystal, a surge of energy flows through you. The room around you begins to dissolve, reality shifting like sand through an hourglass. The crystal transforms, elongating into a key of pure starlight. 'The Cosmic Key will guide you,' whispers Elara. 'Find the first portal in the ancient forest.'",
    imagePath: "https://images.unsplash.com/photo-1439853949127-fa647821eba0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    npcDialog: "Remember, traveler - nothing is quite what it seems between worlds. Trust your instincts, and look for the signs of the Guardians. I will meet you on the other side.",
    choices: [
      {
        id: "step-through",
        text: "Step through the dissolving walls of your room",
        nextSceneId: "forest"
      }
    ]
  },
  
  forest: {
    id: "forest",
    title: "The Cosmic Forest",
    description: "You emerge into a forest unlike any on Earth. Trees spiral impossibly toward a sky filled with unfamiliar constellations. The plants glow with bioluminescence, casting dancing shadows. The Cosmic Key pulses in your hand, pointing deeper into the woods. In the distance, you hear beautiful but melancholy music.",
    imagePath: "https://images.unsplash.com/photo-1518623001779-eb9e83f3e262?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    choices: [
      {
        id: "follow-key",
        text: "Follow where the Key points",
        nextSceneId: "deeper-forest"
      },
      {
        id: "follow-music",
        text: "Investigate the music",
        nextSceneId: "music"
      },
      {
        id: "examine-surroundings",
        text: "Examine your surroundings more carefully",
        nextSceneId: "forest-search",
        consequences: {
          addItems: ["healingCrystal"]
        }
      }
    ]
  },
  
  "forest-search": {
    id: "forest-search",
    title: "Hidden Treasure",
    description: "You take time to examine the strange forest around you. Among the roots of a spiraling tree, you spot a small crystal formation that pulses with gentle pink energy. It seems to react to your presence, glowing brighter as you approach.",
    choices: [
      {
        id: "take-crystal",
        text: "Take the healing crystal",
        nextSceneId: "after-crystal",
      },
      {
        id: "leave-crystal",
        text: "Leave it alone and continue",
        nextSceneId: "deeper-forest"
      }
    ]
  },
  
  "after-crystal": {
    id: "after-crystal",
    title: "Energized",
    description: "As you pick up the crystal, it dissolves into particles of light that sink into your skin. You feel refreshed and rejuvenated, your fatigue washing away. Now you can continue your journey with renewed strength.",
    choices: [
      {
        id: "continue-key",
        text: "Follow where the Key points",
        nextSceneId: "deeper-forest"
      },
      {
        id: "continue-music",
        text: "Investigate the music",
        nextSceneId: "music"
      }
    ]
  },
  
  music: {
    id: "music",
    title: "The Cosmic Musician",
    description: "Following the haunting melody, you come to a small clearing. There, perched on a crystal formation, sits a being with translucent skin that reveals swirling galaxies beneath. They play an instrument resembling a harp made of light. The being looks up as you approach, their eyes widening in surprise.",
    npcDialog: "A human? Here, in the Cosmic Wilds? How fascinating! I am Lyra, collector of cosmic melodies. I haven't seen a traveler from your realm in centuries.",
    choices: [
      {
        id: "ask-about-portal",
        text: "Ask about the portal you seek",
        nextSceneId: "lyra-help"
      },
      {
        id: "ask-about-music",
        text: "Ask about the beautiful music",
        nextSceneId: "lyra-music"
      }
    ]
  },
  
  "lyra-music": {
    id: "lyra-music",
    title: "Songs of the Cosmos",
    description: "Lyra's face lights up at your interest, the galaxies beneath their skin spinning faster in excitement.",
    npcDialog: "I collect the songs of the cosmos - every celestial body has its own melody, you know. Stars sing differently than planets, and black holes have the most fascinating bass lines! Would you like to hear the song of your own planet? I visited Earth once, centuries ago by your time.",
    choices: [
      {
        id: "hear-earth-song",
        text: "Listen to Earth's song",
        nextSceneId: "earth-song"
      },
      {
        id: "ask-portal-instead",
        text: "Politely redirect to ask about the portal",
        nextSceneId: "lyra-help"
      }
    ]
  },
  
  "earth-song": {
    id: "earth-song",
    title: "Homesick Melody",
    description: "Lyra plays a melody that somehow captures everything you love about Earth - the rush of ocean waves, wind through trees, the busy hum of cities, and quiet moments of peace. You feel a pang of homesickness even as you marvel at how a few notes can contain so much.",
    npcDialog: "Your world has such range! So many conflicting notes that somehow create harmony. You know, I believe I can help you. A traveler with a cosmic key will certainly be heading to the Ancient Portal, yes? I have something that might help you find your way.",
    consequences: {
      addItems: ["starMap"]
    },
    choices: [
      {
        id: "thank-lyra",
        text: "Thank Lyra and accept their help",
        nextSceneId: "lyra-help"
      }
    ]
  },
  
  "lyra-help": {
    id: "lyra-help",
    title: "The Star Map",
    description: "Lyra reaches into the space beside them, their hand disappearing as if into an invisible pocket. They pull out an ancient-looking map made of some thin, shimmering material.",
    npcDialog: "This Star Map will guide you to the Ancient Portal. It's not far from here, but the forest has a way of... shifting. The map will keep you on the true path. Mind the Void Shadows, though - they're drawn to travelers between worlds.",
    choices: [
      {
        id: "deeper-forest-map",
        text: "Thank Lyra and continue deeper into the forest",
        nextSceneId: "deeper-forest",
        consequences: {
          addItems: ["starMap"]
        }
      }
    ]
  },
  
  "deeper-forest": {
    id: "deeper-forest",
    title: "Deepening Mystery",
    description: "The forest grows denser, the trees more twisted and alien. Occasionally, you glimpse shadowy forms darting between trunks - too quick to identify, but clearly watching. The Cosmic Key pulses more urgently in your hand, and if you have the Star Map, it reveals a path that seems to shift as you watch.",
    choices: [
      {
        id: "follow-map",
        text: "Follow the Star Map's guidance",
        nextSceneId: "map-path",
        requiredItems: ["starMap"]
      },
      {
        id: "trust-key",
        text: "Trust the Key's pull",
        nextSceneId: "key-path"
      },
      {
        id: "confront-shadows",
        text: "Call out to the watching shadows",
        nextSceneId: "shadows"
      }
    ]
  },
  
  shadows: {
    id: "shadows",
    title: "Void Watchers",
    description: "You gather your courage and call out to the darting shadows. For a moment, everything goes still. Then, three figures step out from behind the trees - humanoid but wrong somehow, as if they're three-dimensional shadows rather than solid beings. Their eyes glow with pinpricks of distant starlight.",
    npcDialog: "A boundary-crosser... with a key no less. Brave or foolish to announce yourself, little one? We are the Void Watchers. We serve neither light nor dark, merely... observe the unfolding of fate.",
    choices: [
      {
        id: "ask-help",
        text: "Ask for their guidance",
        nextSceneId: "watcher-guidance"
      },
      {
        id: "flee-watchers",
        text: "Back away slowly",
        nextSceneId: "flee-watchers"
      }
    ]
  },
  
  "watcher-guidance": {
    id: "watcher-guidance",
    title: "Cryptic Advice",
    description: "The central shadow figure tilts its head, regarding you with curious interest.",
    npcDialog: "How refreshing. Most run. Very well, boundary-crosser, a piece of guidance freely given: when you reach the portal, remember that cosmic doorways require balance. What comes in must go out. What is given must be returned. And most importantly - trust nothing that claims to be a Guardian but does not bear the mark of the Seven Stars.",
    choices: [
      {
        id: "thank-watchers",
        text: "Thank them and continue on your way",
        nextSceneId: "after-watchers"
      }
    ]
  },
  
  "flee-watchers": {
    id: "flee-watchers",
    title: "Swift Retreat",
    description: "You back away from the shadow figures, keeping your eyes on them. They make no move to follow, but their starlight eyes track your movement with unnerving precision.",
    npcDialog: "Wise to be cautious, boundary-crosser. But remember - in the space between worlds, sometimes what you flee is safer than what you run toward.",
    choices: [
      {
        id: "continue-after-flee",
        text: "Continue on your journey",
        nextSceneId: "after-watchers"
      }
    ]
  },
  
  "after-watchers": {
    id: "after-watchers",
    title: "The Path Revealed",
    description: "With the Watchers' cryptic words echoing in your mind, you press on. The forest begins to thin, and ahead you see a clearing bathed in ethereal light. The pull of the Cosmic Key is strongest yet.",
    choices: [
      {
        id: "approach-clearing",
        text: "Approach the clearing",
        nextSceneId: "clearing"
      }
    ]
  },
  
  "map-path": {
    id: "map-path",
    title: "The Ancient Way",
    description: "Following the Star Map leads you along a path that seems to exist between the trees rather than among them. Symbols on the map glow in sequence, and as you follow each one, you notice ancient marker stones partially hidden by foliage - proof you're on a path walked by many before you.",
    consequences: {
      addItems: ["ancientAmulet"]
    },
    choices: [
      {
        id: "examine-stone",
        text: "Examine one of the marker stones",
        nextSceneId: "marker-stone"
      },
      {
        id: "continue-map-path",
        text: "Continue following the map",
        nextSceneId: "clearing"
      }
    ]
  },
  
  "marker-stone": {
    id: "marker-stone",
    title: "Ancient Relic",
    description: "You brush away cosmic vines from one of the larger marker stones. It's covered in spiral patterns that match some on your map. At the base of the stone, half-buried in soil that sparkles like crushed stars, you find a small amulet with a seven-starred constellation pattern.",
    choices: [
      {
        id: "take-amulet",
        text: "Take the Ancient Amulet",
        nextSceneId: "amulet-taken"
      }
    ]
  },
  
  "amulet-taken": {
    id: "amulet-taken",
    title: "Guardian's Mark",
    description: "As you lift the amulet, it glows with a soft blue light. The seven stars in its pattern rearrange themselves briefly to match the constellation directly above you before settling back into their original formation. You recall the Watchers' words about the mark of Seven Stars.",
    choices: [
      {
        id: "wear-amulet",
        text: "Wear the amulet and continue",
        nextSceneId: "clearing"
      }
    ]
  },
  
  "key-path": {
    id: "key-path",
    title: "The Direct Approach",
    description: "You follow the pull of the Cosmic Key, which leads you on a more direct but challenging route. The forest grows denser here, the plants more alien and occasionally hostile - fronds reach for you as you pass, and luminous spores make your skin tingle where they land.",
    choices: [
      {
        id: "push-through",
        text: "Push through the difficult terrain",
        nextSceneId: "key-difficulty",
        consequences: {
          health: -10
        }
      },
      {
        id: "find-easier-way",
        text: "Look for an easier path",
        nextSceneId: "compass-discovery",
        consequences: {
          addItems: ["spaceCompass"]
        }
      }
    ]
  },
  
  "key-difficulty": {
    id: "key-difficulty",
    title: "Harsh Journey",
    description: "The direct path taxes your strength. Thorny vines scratch at your skin, and the air grows thick with spores that make breathing difficult. But your persistence pays off - ahead, you see a clearing bathed in light.",
    choices: [
      {
        id: "reach-clearing-tired",
        text: "Push through to the clearing",
        nextSceneId: "clearing"
      }
    ]
  },
  
  "compass-discovery": {
    id: "compass-discovery",
    title: "Fortuitous Discovery",
    description: "Searching for an easier route, you discover a small cave entrance hidden behind cascading luminous vines. Inside, you find the remains of a previous traveler - now just dust and tattered clothing. Among the remains is an unusual compass with cosmic symbols instead of cardinal directions.",
    choices: [
      {
        id: "take-compass",
        text: "Take the Space Compass",
        nextSceneId: "use-compass"
      },
      {
        id: "leave-compass",
        text: "Leave it and find another way",
        nextSceneId: "key-difficulty",
        consequences: {
          health: -10
        }
      }
    ]
  },
  
  "use-compass": {
    id: "use-compass",
    title: "Cosmic Navigation",
    description: "The Space Compass springs to life in your hand, its needle spinning wildly before settling on a symbol that matches one of the stars pulsing in the Cosmic Key. Following its guidance, you find a much easier path that winds through the forest in a gentle spiral.",
    choices: [
      {
        id: "follow-compass",
        text: "Follow the compass to the clearing",
        nextSceneId: "clearing"
      }
    ]
  },
  
  clearing: {
    id: "clearing",
    title: "The Ancient Portal",
    description: "You emerge into a perfectly circular clearing. In the center stands a massive archway made of what appears to be pure starlight solidified into crystal. The arch is dark and dormant, but as you approach with the Cosmic Key, tiny motes of light begin to swirl around its frame. From the shadows at the edge of the clearing, a figure approaches - tall, elegant, with skin like the night sky.",
    imagePath: "https://images.unsplash.com/photo-1596079890744-c1a0462d0975?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    npcDialog: "At last you've arrived. I am Elara, Guardian of the Cosmic Threshold. The key, traveler - it must be used now before the window of alignment passes.",
    choices: [
      {
        id: "use-key",
        text: "Use the Cosmic Key on the portal",
        nextSceneId: "key-portal"
      },
      {
        id: "question-guardian",
        text: "Ask to see the Guardian's mark",
        nextSceneId: "guardian-test",
        requiredItems: ["ancientAmulet"]
      },
      {
        id: "hesitate",
        text: "Hesitate and observe more carefully",
        nextSceneId: "observation"
      }
    ]
  },
  
  observation: {
    id: "observation",
    title: "Something Amiss",
    description: "You pause, studying the figure claiming to be Elara. Something feels wrong - the voice doesn't match the gentle presence you felt through the crystal back in your bedroom. As you watch carefully, you notice the 'Guardian' occasionally flickers, like an image with poor reception.",
    choices: [
      {
        id: "confront-fake",
        text: "Confront the false Guardian",
        nextSceneId: "confrontation"
      },
      {
        id: "play-along",
        text: "Pretend to comply while looking for escape",
        nextSceneId: "feigned-compliance"
      }
    ]
  },
  
  "guardian-test": {
    id: "guardian-test",
    title: "The True Test",
    description: "You hold up the Ancient Amulet with the seven-starred pattern. 'Show me the mark of the Guardian,' you request. The figure's expression flickers with momentary surprise and then anger.",
    npcDialog: "Insolent mortal! Those old symbols are meaningless tradition. Give me the key now!",
    choices: [
      {
        id: "reject-fake",
        text: "Refuse and back away",
        nextSceneId: "confrontation"
      }
    ]
  },
  
  confrontation: {
    id: "confrontation",
    title: "The Void Deceiver",
    description: "The false Guardian's disguise melts away, revealing a being of churning darkness with pinpricks of dying stars caught in its mass. 'Clever human,' it hisses, voice now a dissonant chorus. 'But not clever enough to escape the Void!'",
    choices: [
      {
        id: "use-amulet",
        text: "Hold up the Ancient Amulet defensively",
        nextSceneId: "amulet-defense",
        requiredItems: ["ancientAmulet"]
      },
      {
        id: "run-to-portal",
        text: "Sprint toward the portal with the key",
        nextSceneId: "portal-rush",
        consequences: {
          health: -20
        }
      }
    ]
  },
  
  "feigned-compliance": {
    id: "feigned-compliance",
    title: "Strategic Deception",
    description: "You pretend to approach with the key extended. The false Guardian reaches out eagerly, but just as its fingers are about to touch the key, you dodge sideways and sprint toward the portal itself.",
    choices: [
      {
        id: "insert-key",
        text: "Quickly insert the key into the portal",
        nextSceneId: "true-elara"
      }
    ]
  },
  
  "amulet-defense": {
    id: "amulet-defense",
    title: "Guardian's Protection",
    description: "You raise the Ancient Amulet, which flares with brilliant light. The Void creature shrinks back, hissing in pain. 'The mark of the Seven Stars! How did a mortal find-' Before it can finish, a beam of light strikes from above, and a melodious voice calls out.",
    npcDialog: "This way, traveler! Quickly to the portal!",
    choices: [
      {
        id: "run-to-true-voice",
        text: "Run toward the new voice",
        nextSceneId: "true-elara"
      }
    ]
  },
  
  "portal-rush": {
    id: "portal-rush",
    title: "Desperate Dash",
    description: "You run toward the portal with all your might. Behind you, the Void creature shrieks and gives chase. Tendrils of darkness lash at your back, burning cold where they touch. Just as you reach the portal, a beam of light strikes down from above, holding the creature at bay.",
    choices: [
      {
        id: "activate-portal",
        text: "Quickly use the key on the portal",
        nextSceneId: "true-elara"
      }
    ]
  },
  
  "key-portal": {
    id: "key-portal",
    title: "The Springing Trap",
    description: "As you move toward the portal with the key, the false Elara's eyes gleam with triumph. Just as you're about to insert the key, a real voice - the one you recognize from the crystal - calls out in alarm from above.",
    npcDialog: "Stop! That's not me! It's a Void Deceiver!",
    choices: [
      {
        id: "pull-back",
        text: "Pull back from the false Guardian",
        nextSceneId: "true-elara"
      }
    ]
  },
  
  "true-elara": {
    id: "true-elara",
    title: "The True Guardian",
    description: "A figure descends from the stars above - similar to the impostor but radiating genuine warmth and light. On her brow, the constellation of Seven Stars glows softly. The Void Deceiver snarls but cannot approach as she creates a barrier of light around you and the portal.",
    imagePath: "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    npcDialog: "I am Elara, the true Guardian. You've done well to come this far, traveler. Now we must activate the portal and seal the rift before more Void creatures break through.",
    choices: [
      {
        id: "activate-with-elara",
        text: "Use the Cosmic Key with Elara's guidance",
        nextSceneId: "portal-activation"
      }
    ]
  },
  
  "portal-activation": {
    id: "portal-activation",
    title: "Gateway Between Worlds",
    description: "You approach the massive crystalline arch with Elara. The Cosmic Key in your hand vibrates with increasing intensity, almost pulling you forward. 'Place it in the keystone,' Elara instructs, pointing to a small indentation at the apex of the arch.",
    choices: [
      {
        id: "insert-key",
        text: "Insert the Cosmic Key into the keystone",
        nextSceneId: "portal-opens",
        consequences: {
          removeItems: ["cosmicKey"]
        }
      }
    ]
  },
  
  "portal-opens": {
    id: "portal-opens",
    title: "The Awakening",
    description: "As the key slides into place, the entire arch awakens with brilliant light. The empty space within fills with a swirling vortex of stars and cosmic energy. A deep humming fills the air, and you feel the ground beneath you tremble slightly.",
    imagePath: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    npcDialog: "The portal awakens! Now we must stabilize it. The Cosmic Nexus lies beyond - the center of all realities and the source of the disturbance. Are you ready to face what lies beyond, traveler?",
    choices: [
      {
        id: "enter-portal",
        text: "Step through the portal",
        nextSceneId: "cosmic-nexus"
      },
      {
        id: "hesitate-portal",
        text: "Ask what to expect on the other side",
        nextSceneId: "portal-explanation"
      }
    ]
  },
  
  "portal-explanation": {
    id: "portal-explanation",
    title: "Final Preparations",
    description: "Elara's expression softens at your hesitation. The portal continues to shimmer behind her, casting waves of light across the clearing.",
    npcDialog: "Beyond lies the Cosmic Nexus - a place between all worlds where reality is... flexible. The Void has breached the Guardian's sanctum at its center, and is using it to pull energy from countless realms. Time flows differently there. Trust your instincts, and remember that intent shapes reality in the Nexus. Your belief matters more than physical laws.",
    choices: [
      {
        id: "ready-now",
        text: "Take a deep breath and step through",
        nextSceneId: "cosmic-nexus"
      }
    ]
  },
  
  "cosmic-nexus": {
    id: "cosmic-nexus",
    title: "The Cosmic Nexus",
    description: "Stepping through the portal feels like diving into a sea of stars. For a moment, you exist everywhere and nowhere at once. Then reality solidifies around you. You stand on a floating island of crystalline material, one of many suspended in an infinite void. Paths of pure light connect some islands, while others drift in isolation. The sky - if it can be called that - is a maelstrom of cosmic energy and distant realities.",
    imagePath: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    choices: [
      {
        id: "follow-elara",
        text: "Follow Elara along the light paths",
        nextSceneId: "nexus-journey"
      },
      {
        id: "observe-nexus",
        text: "Take a moment to observe the Nexus",
        nextSceneId: "nexus-observation"
      }
    ]
  },
  
  "nexus-observation": {
    id: "nexus-observation",
    title: "Cosmic Revelations",
    description: "You pause to take in the impossible landscape around you. In the distance, you can see windows into other worlds - some familiar, some utterly alien. Through one, you glimpse a version of Earth where the continents formed differently. Through another, a world of sentient crystal beings. And in the furthest distance, a growing darkness that seems to be consuming these windows one by one.",
    npcDialog: "What you see is the multiverse itself - infinite variations of reality. The Cosmic Nexus connects them all. That darkness is the Void's work. It doesn't simply destroy - it unmakes reality itself, returning everything to the primal nothing. We must reach the Guardian Sanctum at the center.",
    choices: [
      {
        id: "continue-journey",
        text: "Continue the journey to the Sanctum",
        nextSceneId: "nexus-journey"
      }
    ]
  },
  
  "nexus-journey": {
    id: "nexus-journey",
    title: "Paths of Light",
    description: "Elara leads you across bridges of pure light that seem to form beneath your feet as you walk. The floating islands vary dramatically - some are lush with alien vegetation, others barren crystal, some appear to be fragments of civilizations now long gone. As you travel, you notice shadows moving between distant islands, similar to the Void Watchers but more purposeful, more dangerous.",
    npcDialog: "Void Hunters. They serve the darkness directly. Stay close to me - my light conceals us somewhat, but if they spot us, we'll need to move quickly.",
    choices: [
      {
        id: "stay-course",
        text: "Stay on the main path with Elara",
        nextSceneId: "sanctum-approach"
      },
      {
        id: "investigate-island",
        text: "Suggest investigating a nearby island with strange ruins",
        nextSceneId: "ancient-ruins",
        consequences: {
          addItems: ["echoMemory"]
        }
      }
    ]
  },
  
  "ancient-ruins": {
    id: "ancient-ruins",
    title: "Echoes of the Past",
    description: "The island holds the ruins of what appears to be a small temple or observatory. The architecture is unlike anything from Earth - angles that seem to bend in impossible ways, materials that shimmer between solid and translucent. At the center, a small crystalline fragment hovers above a pedestal.",
    npcDialog: "A Guardian outpost, from before the Fall. This is... was my sister's posting. The crystal may hold her memories - her echo. It could provide valuable information, but touching another Guardian's echo is... intimate. The choice must be yours.",
    choices: [
      {
        id: "take-echo",
        text: "Respectfully take the Echo Memory",
        nextSceneId: "memory-acquired"
      },
      {
        id: "leave-echo",
        text: "Leave it undisturbed",
        nextSceneId: "sanctum-approach"
      }
    ]
  },
  
  "memory-acquired": {
    id: "memory-acquired",
    title: "Visions of the Fall",
    description: "As your fingers close around the crystal, your mind floods with fragmented memories - a Guardian's last moments. You see the Void's first assault on the Nexus, the desperate defense, a plan to seal the breach using the combined power of seven Guardian artifacts. Then darkness, as the memory ends.",
    npcDialog: "You saw it, didn't you? The Seven Seals. It was our contingency plan, never implemented because we fell too quickly. But with these memories... we might be able to adapt the plan. Come, we must continue to the Sanctum.",
    choices: [
      {
        id: "continue-to-sanctum",
        text: "Continue to the Sanctum with new purpose",
        nextSceneId: "sanctum-approach"
      }
    ]
  },
  
  "sanctum-approach": {
    id: "sanctum-approach",
    title: "The Central Spire",
    description: "After crossing countless light bridges, you approach what must be the center of the Nexus - a massive crystalline spire that stretches infinitely upward and downward. Light and energy pulse within its translucent structure, but dark veins now mar its surface, spreading like an infection. The entrance, once grand, is now partially collapsed and guarded by writhing shadows.",
    imagePath: "https://images.unsplash.com/photo-1599148400620-8e1ff0bf28d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    npcDialog: "The Guardian Sanctum - the heart of the Cosmic Nexus. The Void has already breached it, but hasn't fully corrupted the core yet. We must find a way past those Void Sentinels.",
    choices: [
      {
        id: "direct-approach",
        text: "Suggest a direct approach using Elara's light",
        nextSceneId: "direct-confrontation",
        consequences: {
          health: -15
        }
      },
      {
        id: "find-another-way",
        text: "Look for another entrance",
        nextSceneId: "secret-entrance"
      },
      {
        id: "use-amulet-entrance",
        text: "Use the Ancient Amulet to reveal a path",
        nextSceneId: "hidden-path",
        requiredItems: ["ancientAmulet"]
      }
    ]
  },
  
  "direct-confrontation": {
    id: "direct-confrontation",
    title: "Light Against Shadow",
    description: "Elara summons her power, her form glowing with increasing brightness until she's almost painful to look at directly. The Void Sentinels hiss and writhe as you approach, their shadowy forms recoiling from Elara's radiance. But they don't retreat completely - tendrils of darkness lash out, some connecting with you before Elara can deflect them.",
    npcDialog: "Quickly! I cannot maintain this level of power for long. The entrance is just ahead!",
    choices: [
      {
        id: "rush-entrance",
        text: "Rush through the entrance",
        nextSceneId: "sanctum-interior"
      }
    ]
  },
  
  "secret-entrance": {
    id: "secret-entrance",
    title: "The Hidden Way",
    description: "You circle the base of the spire, keeping to the shadows while scanning for alternative entrances. Elara follows, her glow dimmed to avoid detection. Eventually, you discover a small crack in the crystalline structure, barely large enough for a person to squeeze through.",
    npcDialog: "Good eye. This wasn't here before - it must have formed during the Void's attack. It's risky, but it should lead us into the maintenance tunnels beneath the main chamber.",
    choices: [
      {
        id: "enter-crack",
        text: "Squeeze through the crack",
        nextSceneId: "maintenance-tunnels"
      }
    ]
  },
  
  "hidden-path": {
    id: "hidden-path",
    title: "The Guardian's Way",
    description: "You hold up the Ancient Amulet, which begins to glow with a soft blue light matching the purer areas of the spire. A previously invisible doorway materializes in the structure's side, well away from the Void Sentinels. The seven-starred pattern on the amulet aligns perfectly with indentations around the doorframe.",
    npcDialog: "The Guardian's Way - reserved for those who carry the mark. This will lead us directly to the inner chambers, bypassing the outer defenses entirely.",
    choices: [
      {
        id: "use-guardian-door",
        text: "Enter through the Guardian's Way",
        nextSceneId: "inner-chambers"
      }
    ]
  },
  
  "maintenance-tunnels": {
    id: "maintenance-tunnels",
    title: "Beneath the Sanctum",
    description: "The narrow tunnel opens into a network of maintenance passages that run beneath the main structures of the Sanctum. Strange pipes carry flowing energy of various colors, and occasionally the crystals around you pulse in synchronized patterns. The air feels charged with potential.",
    npcDialog: "These tunnels were used by assistant keepers to maintain the energy flows of the Nexus. We should be able to reach the central chamber from below, but we must be careful. If the Void has corrupted these systems...",
    choices: [
      {
        id: "follow-blue-energy",
        text: "Follow the blue energy conduits",
        nextSceneId: "energy-nexus",
        consequences: {
          addItems: ["stellarInk"]
        }
      },
      {
        id: "head-upward",
        text: "Find a way to ascend to the main level",
        nextSceneId: "ascension-chamber"
      }
    ]
  },
  
  "energy-nexus": {
    id: "energy-nexus",
    title: "Confluence of Powers",
    description: "Following the blue energy conduits leads you to a chamber where multiple streams of power converge. The room is dominated by a complex machinery that seems to be regulating and redirecting the energy flows. On a small workbench, you spot a container of swirling blue-white liquid that seems to be used for maintenance.",
    choices: [
      {
        id: "take-ink",
        text: "Take the stellar ink",
        nextSceneId: "after-ink"
      }
    ]
  },
  
  "after-ink": {
    id: "after-ink",
    title: "Continuing Upward",
    description: "With the stellar ink secured, you look for a way to continue your journey upward. A maintenance ladder seems to lead to an access hatch in the ceiling.",
    npcDialog: "That ink is used for inscribing reality anchors. It might prove useful if we encounter unstable areas. The ladder should take us closer to the central chamber.",
    choices: [
      {
        id: "use-ladder",
        text: "Climb the maintenance ladder",
        nextSceneId: "ascension-chamber"
      }
    ]
  },
  
  "ascension-chamber": {
    id: "ascension-chamber",
    title: "The Lift",
    description: "You emerge into a circular chamber with a platform in its center. The platform is surrounded by pillars inscribed with glowing symbols, and the ceiling above opens into a vertical shaft that seems to extend upward throughout the spire.",
    npcDialog: "A celestial lift. It can take us directly to the central chamber, but it normally requires Guardian energy to activate. I can provide that, but the ascent might attract attention.",
    choices: [
      {
        id: "activate-lift",
        text: "Activate the lift and ascend",
        nextSceneId: "lift-ambush"
      },
      {
        id: "look-for-stairs",
        text: "Look for stairs or another less noticeable path",
        nextSceneId: "hidden-stairway"
      }
    ]
  },
  
  "lift-ambush": {
    id: "lift-ambush",
    title: "Ascending Danger",
    description: "Elara places her hands on two of the pillars, which begin to glow brighter. The platform hums to life and begins to rise smoothly up the shaft. Halfway up, the lift suddenly jolts to a stop. Dark tendrils begin to seep through the walls of the shaft, reaching for you.",
    npcDialog: "Void parasites! They've infected the lift mechanism. I must maintain our ascent - you must keep them at bay!",
    choices: [
      {
        id: "use-amulet-defense",
        text: "Use the Ancient Amulet to create a barrier",
        nextSceneId: "successful-ascent",
        requiredItems: ["ancientAmulet"]
      },
      {
        id: "physical-defense",
        text: "Physically fend off the tendrils",
        nextSceneId: "difficult-ascent",
        consequences: {
          health: -25
        }
      }
    ]
  },
  
  "hidden-stairway": {
    id: "hidden-stairway",
    title: "The Spiral Path",
    description: "Searching around the chamber's perimeter, you discover a narrow spiral staircase built into the wall itself. It seems rarely used, with dust undisturbed on its steps.",
    npcDialog: "The Keeper's Path. This will be slower but much less likely to draw attention. Good find.",
    choices: [
      {
        id: "climb-stairs",
        text: "Ascend the spiral staircase",
        nextSceneId: "mid-level-discovery",
        consequences: {
          addItems: ["timeFragment"]
        }
      }
    ]
  },
  
  "mid-level-discovery": {
    id: "mid-level-discovery",
    title: "The Keeper's Study",
    description: "Halfway up the long spiral staircase, you come across a small study built into an alcove. Scrolls and strange instruments cover a desk, and a small pedestal holds what appears to be a fragment of crystallized time - moments flowing backward and forward within its structure.",
    choices: [
      {
        id: "take-time-fragment",
        text: "Take the time fragment",
        nextSceneId: "continue-ascent"
      },
      {
        id: "leave-fragment",
        text: "Leave it undisturbed",
        nextSceneId: "continue-ascent"
      }
    ]
  },
  
  "continue-ascent": {
    id: "continue-ascent",
    title: "The Upper Reaches",
    description: "You continue climbing the spiral staircase, which grows narrower as you ascend. The walls around you increasingly show signs of corruption - veins of darkness spreading through the once-pure crystal, and occasionally you must step over sections where the stairs themselves have partially dissolved into shadow.",
    npcDialog: "We're approaching the central levels. The Void corruption is stronger here. Be on your guard.",
    choices: [
      {
        id: "proceed-carefully",
        text: "Proceed with extreme caution",
        nextSceneId: "sanctum-interior"
      }
    ]
  },
  
  "difficult-ascent": {
    id: "difficult-ascent",
    title: "Fighting Shadows",
    description: "You swipe and tear at the encroaching tendrils, which feel both impossibly cold and burning at the same time where they touch your skin. It's like fighting smoke - insubstantial yet somehow able to cause pain. You manage to keep them at bay long enough for Elara to restart the lift, but not without cost to yourself.",
    choices: [
      {
        id: "reach-top-injured",
        text: "Reach the top level, wounded but alive",
        nextSceneId: "sanctum-interior"
      }
    ]
  },
  
  "successful-ascent": {
    id: "successful-ascent",
    title: "The Amulet's Power",
    description: "You hold up the Ancient Amulet, which flares with bright blue light. The seven stars in its pattern spin rapidly, creating a protective dome around the lift platform. The void tendrils hiss and steam where they touch the barrier, unable to penetrate it. The lift continues its ascent unimpeded.",
    npcDialog: "The mark of the Seven Stars - the Void cannot stand against it. The artifact is even more powerful than I remembered.",
    choices: [
      {
        id: "reach-top-safely",
        text: "Reach the top level safely",
        nextSceneId: "sanctum-interior"
      }
    ]
  },
  
  "inner-chambers": {
    id: "inner-chambers",
    title: "Heart of the Sanctum",
    description: "The Guardian's Way leads you through a series of small, elegant chambers, each adorned with crystalline murals depicting the history of the cosmos. Though beautiful, many now show signs of the spreading corruption - figures in the murals partially consumed by shadow, once-bright colors dulled and darkened.",
    npcDialog: "These were our living quarters and meditation chambers. Through here lies the central chamber where the Core is housed.",
    choices: [
      {
        id: "examine-murals",
        text: "Examine the murals more closely",
        nextSceneId: "mural-discovery",
        consequences: {
          addItems: ["guardianTear"]
        }
      },
      {
        id: "proceed-to-core",
        text: "Proceed directly to the Core chamber",
        nextSceneId: "sanctum-interior"
      }
    ]
  },
  
  "mural-discovery": {
    id: "mural-discovery",
    title: "Hidden Knowledge",
    description: "You pause to study one mural that seems less corrupted than the others. It depicts seven Guardians standing in a circle around a central light, each holding a different artifact. As you watch, one of the painted Guardian figures seems to look directly at you, a tear falling from its eye. The tear separates from the mural, becoming real and crystallizing as it falls into your waiting hand.",
    npcDialog: "A Guardian's Tear... I haven't seen one in ages. They contain pure creative energy - the essence of what we use to maintain reality. This is a precious gift.",
    choices: [
      {
        id: "continue-with-tear",
        text: "Continue to the Core chamber",
        nextSceneId: "sanctum-interior"
      }
    ]
  },
  
  "sanctum-interior": {
    id: "sanctum-interior",
    title: "The Chamber of Stars",
    description: "All paths converge on an enormous spherical chamber at the heart of the spire. The walls, floor, and ceiling are transparent crystal, giving the impression of standing in open space. At the center floats what can only be the Core - a swirling mass of pure creative energy, light and color dancing within its form. But dark tendrils have wrapped around it, squeezing and draining its power into a growing rift of absolute darkness that hovers opposite where you stand.",
    imagePath: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    npcDialog: "The Cosmic Core - the wellspring of creative energy that sustains the Nexus and, through it, all connected realities. And there - the Void Breach. It's worse than I feared. The corruption has nearly reached the Core's center.",
    choices: [
      {
        id: "approach-core",
        text: "Approach the Core carefully",
        nextSceneId: "core-examination"
      },
      {
        id: "examine-breach",
        text: "Study the Void Breach",
        nextSceneId: "void-examination"
      }
    ]
  },
  
  "core-examination": {
    id: "core-examination",
    title: "The Fading Light",
    description: "You move closer to the Core, feeling waves of energy washing over you - sometimes warm and invigorating, sometimes sharp and painful as corrupted strands pulse. Up close, you can see the struggle playing out - light fighting against encroaching darkness, creating beautiful but chaotic patterns where they meet.",
    npcDialog: "The Core is fighting, but it's losing. The Void feeds on creative energy, distorting it, inverting it into destructive force. We must sever the tendrils before they reach the center.",
    choices: [
      {
        id: "ask-how-to-help",
        text: "Ask how you can help",
        nextSceneId: "guardian-plan"
      }
    ]
  },
  
  "void-examination": {
    id: "void-examination",
    title: "The Growing Darkness",
    description: "You cautiously study the Void Breach from a distance. It's not simply darkness - it's an absence, a negation of existence itself. Around its edges, reality seems to fray and unravel. Occasionally, shadowy forms move within the breach, as if watching from the other side.",
    npcDialog: "The Void Between exists in the spaces between realities. It's not evil - it's simply the counterbalance to creation. But something has disturbed the natural balance, making it aggressive, invasive. It should not be able to penetrate this far into the Nexus.",
    choices: [
      {
        id: "ask-about-imbalance",
        text: "Ask what caused the imbalance",
        nextSceneId: "revelation"
      }
    ]
  },
  
  "revelation": {
    id: "revelation",
    title: "The Terrible Truth",
    description: "Elara's expression becomes grave as she considers your question. For a moment, she seems to be debating how much to reveal.",
    npcDialog: "The truth? We did. The Guardians. Or more precisely, our arrogance. We discovered how to extract creative energy directly from the Core to enhance our powers, to build wonders throughout the cosmos. We thought we were being careful, but we disrupted the balance. The Void is not invading - it's rushing in to fill a vacuum we created. And now it cannot be stopped by conventional means.",
    choices: [
      {
        id: "ask-for-solution",
        text: "Ask if there's any solution",
        nextSceneId: "guardian-plan"
      }
    ]
  },
  
  "guardian-plan": {
    id: "guardian-plan",
    title: "The Seven Seals",
    description: "Elara gestures toward the murals you may have seen earlier, or describes them if you came by another path. Her expression is one of desperate hope mixed with fear.",
    npcDialog: "The Seven Seals ritual. It was designed as a last resort to rebalance the cosmic forces if disaster struck. It requires seven artifacts of Guardian making, placed at specific points around the Core. Together, they can create a harmonic resonance that will push back the Void and reestablish proper boundaries. But I am the last Guardian, and I have only my Sigil.",
    choices: [
      {
        id: "offer-help",
        text: "Offer to help find the artifacts",
        nextSceneId: "quest-acceptance"
      },
      {
        id: "suggest-alternatives",
        text: "Ask if there are other options",
        nextSceneId: "no-alternatives"
      }
    ]
  },
  
  "no-alternatives": {
    id: "no-alternatives",
    title: "The Only Way",
    description: "Elara shakes her head, the stars beneath her skin pulsing with stress and urgency.",
    npcDialog: "There is no other way. We've passed the point where the balance can naturally restore itself. Either we complete the Seven Seals ritual, or the Void will consume everything - not just the Nexus, but all connected realities, including your Earth. The artifacts were scattered for safekeeping. Some may be lost, but we must try to find as many as we can.",
    choices: [
      {
        id: "accept-quest-reluctantly",
        text: "Accept the quest with determination",
        nextSceneId: "quest-acceptance"
      }
    ]
  },
  
  "quest-acceptance": {
    id: "quest-acceptance",
    title: "The Cosmic Quest",
    description: "You stand straighter, resolved to help save not just your world but countless others. Elara's expression softens with gratitude and hope.",
    npcDialog: "Thank you, traveler. I cannot leave the Core - my presence helps slow the corruption. But you can move between realms with the aid of artifacts. You'll need to find the remaining six Seals: The Stellar Compass, The Void Shield, The Reality Anchor, The Harmonic Key, The Chronomaster's Watch, and The Creation Quill. Each is hidden in a different realm, guarded or concealed.",
    choices: [
      {
        id: "ask-where-to-start",
        text: "Ask where to start the search",
        nextSceneId: "first-destination"
      }
    ]
  },
  
  "first-destination": {
    id: "first-destination",
    title: "The First Journey",
    description: "Elara waves her hand, and a smaller version of the celestial map appears in the air before you, showing countless interconnected worlds.",
    npcDialog: "The closest artifact should be the Stellar Compass, located in the Crystal Expanse. I can open a portal directly there from the Nexus. Once you have it, the Compass itself will help guide you to the next artifact. Are you ready to begin?",
    choices: [
      {
        id: "ready-for-quest",
        text: "Express readiness for the quest",
        nextSceneId: "crystal-expanse"
      },
      {
        id: "request-preparation",
        text: "Ask for time to prepare",
        nextSceneId: "preparation"
      }
    ]
  },
  
  "preparation": {
    id: "preparation",
    title: "Gathering Strength",
    description: "Understanding the magnitude of the quest ahead, you ask for a moment to prepare yourself mentally and physically. Elara nods and guides you to a small meditation chamber adjacent to the Core room.",
    npcDialog: "Take what time you need. I can sustain the Core a while longer. When you're ready, I'll open the portal to the Crystal Expanse.",
    consequences: {
      health: 50
    },
    choices: [
      {
        id: "finished-preparation",
        text: "Center yourself and prepare for the journey",
        nextSceneId: "crystal-expanse"
      }
    ]
  },
  
  "crystal-expanse": {
    id: "crystal-expanse",
    title: "The Crystal Expanse",
    description: "Elara creates a shimmering portal, and you step through into a world unlike any you've seen. Enormous crystal formations stretch in all directions, refracting light in dazzling patterns. The ground beneath your feet is smooth, polished crystal that somehow doesn't slip. The sky is a pale lavender, with three small suns orbiting each other.",
    imagePath: "https://images.unsplash.com/photo-1579544757872-ce8f6af30e0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    choices: [
      {
        id: "explore-landscape",
        text: "Explore the crystal landscape",
        nextSceneId: "crystal-discovery"
      },
      {
        id: "look-for-inhabitants",
        text: "Look for signs of inhabitants",
        nextSceneId: "crystal-beings"
      }
    ]
  },
  
  "crystal-discovery": {
    id: "crystal-discovery",
    title: "Reflections and Echoes",
    description: "As you venture through the glittering landscape, you notice something unusual - some crystal formations seem to capture and replay moments of time. Touching one, you see a fleeting image of strange beings constructing a magnificent spire. Another shows a terrible battle, crystal beings fighting shadowy invaders.",
    npcDialog: "The Crystal Expanse records history in its very structure. These are memories of the Crystal Keepers, who once served as allies to the Guardians. If they still exist, they may know where the Stellar Compass is kept.",
    choices: [
      {
        id: "follow-battle-memory",
        text: "Try to follow the battle memory to its conclusion",
        nextSceneId: "memory-trail"
      },
      {
        id: "seek-living-keepers",
        text: "Look for living Crystal Keepers",
        nextSceneId: "crystal-beings"
      }
    ]
  },
  
  "memory-trail": {
    id: "memory-trail",
    title: "Trail of Memories",
    description: "You move from crystal to crystal, following the recorded battle like piecing together frames of a film. The Crystal Keepers fought valiantly against the shadows, eventually retreating to a massive fortress at the center of a crystal lake. The final memory shows them sealing something important in the heart of the fortress before the recording abruptly ends.",
    choices: [
      {
        id: "find-fortress",
        text: "Seek out the crystal fortress",
        nextSceneId: "fortress-approach"
      }
    ]
  },
  
  "crystal-beings": {
    id: "crystal-beings",
    title: "The Last Keepers",
    description: "After walking for what seems like hours, you spot movement among the crystal formations. As you approach cautiously, you discover a small group of beings that seem to be made of living crystal. They are slim and graceful, with faceted features that catch and refract light as they move. They regard you with what appears to be curiosity.",
    npcDialog: "Greetings, flesh-form. It has been many cycles since we had visitors from beyond. What brings you to our diminished realm?",
    choices: [
      {
        id: "explain-quest",
        text: "Explain your quest for the Stellar Compass",
        nextSceneId: "keeper-response"
      },
      {
        id: "ask-about-realm",
        text: "Ask what happened to their realm",
        nextSceneId: "keeper-history"
      }
    ]
  },
  
  "keeper-history": {
    id: "keeper-history",
    title: "A Fallen Civilization",
    description: "The Crystal Keeper's facets dim slightly, suggesting sadness.",
    npcDialog: "Long ago, we were many, and our cities spanned the entire Expanse. We were scholars and recorders, keeping the histories of a thousand worlds in our crystal matrices. Then the shadows came - servants of the Void, seeking the artifacts we protected. Most of our kind shattered in the conflict. We few remain, guarding what little is left of our heritage.",
    choices: [
      {
        id: "express-sympathy",
        text: "Express sympathy and explain your quest",
        nextSceneId: "keeper-response"
      }
    ]
  },
  
  "keeper-response": {
    id: "keeper-response",
    title: "The Guardian's Friend",
    description: "The Crystal Keepers confer among themselves in a musical language of chimes and resonances. Finally, their apparent leader turns back to you.",
    npcDialog: "You seek the Stellar Compass, artifact of the Guardians. Yes, it was entrusted to us long ago. It rests within our last stronghold, the Crystal Spire, at the center of the Mirror Lake. But we cannot simply give it to you - the artifact must determine its own wielder. We can take you there, if you are willing to be tested.",
    choices: [
      {
        id: "accept-test",
        text: "Accept the test",
        nextSceneId: "journey-to-spire"
      },
      {
        id: "ask-about-test",
        text: "Ask about the nature of the test",
        nextSceneId: "test-explanation"
      }
    ]
  },
  
  "test-explanation": {
    id: "test-explanation",
    title: "The Compass's Choice",
    description: "The Crystal Keeper's facets shift in patterns that somehow suggest a smile.",
    npcDialog: "The Stellar Compass connects to all possible paths across realities. It must determine if your intended path serves balance or disruption. The test is not one of strength or even wisdom, but of intent and potential. It will look into your possible futures and judge whether you are worthy to wield its power. It can be... uncomfortable, but not harmful if your purpose is true.",
    choices: [
      {
        id: "accept-after-explanation",
        text: "Accept with new understanding",
        nextSceneId: "journey-to-spire"
      }
    ]
  },
  
  "fortress-approach": {
    id: "fortress-approach",
    title: "The Crystal Spire",
    description: "Following the directions gleaned from the memory crystals, you eventually come upon a breathtaking sight - a perfectly circular lake of what appears to be liquid crystal, reflective as a mirror. At its center rises an enormous spire that seems to be made of a single massive crystal, faceted and shimmering with inner light. But between you and the spire lies the seemingly impassable lake.",
    choices: [
      {
        id: "search-for-crossing",
        text: "Search for a way to cross the lake",
        nextSceneId: "discover-keepers"
      },
      {
        id: "test-lake-surface",
        text: "Test if the lake's surface can be walked on",
        nextSceneId: "sinking-danger",
        consequences: {
          health: -20
        }
      }
    ]
  },
  
  "sinking-danger": {
    id: "sinking-danger",
    title: "Deceptive Depths",
    description: "You carefully test the lake's surface with your foot, finding it solid at first touch. Emboldened, you step fully onto it - only to have it suddenly liquefy beneath you. You sink rapidly into the crystal fluid, which burns and numbs simultaneously. Just before you are completely submerged, crystalline hands grab you and pull you back to shore.",
    npcDialog: "Foolish traveler! The Mirror Lake permits passage only to those it recognizes. You are fortunate we were nearby to save you.",
    choices: [
      {
        id: "thank-rescuers",
        text: "Thank your rescuers and explain your quest",
        nextSceneId: "keeper-response"
      }
    ]
  },
  
  "discover-keepers": {
    id: "discover-keepers",
    title: "Lake Guardians",
    description: "As you search the perimeter of the lake for a crossing, you encounter a group of Crystal Keepers who appear to be performing some kind of ritual at the lake's edge. They notice your approach and pause their activities.",
    npcDialog: "A traveler from beyond our realm. What brings you to the Sacred Lake, flesh-being?",
    choices: [
      {
        id: "explain-quest-to-keepers",
        text: "Explain your quest for the Stellar Compass",
        nextSceneId: "keeper-response"
      }
    ]
  },
  
  "journey-to-spire": {
    id: "journey-to-spire",
    title: "Crossing the Mirror",
    description: "The Crystal Keepers lead you to the edge of the Mirror Lake. They arrange themselves in a semicircle and begin to sing in their resonant language. The surface of the lake ripples in response, and a path of solid crystal forms, leading from the shore directly to the Spire at the center.",
    npcDialog: "Follow the path. It will remain solid only for you, and only for your journey to the Spire. Inside, you will find the Chamber of Reflection where the Compass awaits. Remember - it tests intent above all else.",
    choices: [
      {
        id: "walk-the-path",
        text: "Walk the crystal path to the Spire",
        nextSceneId: "spire-entrance"
      }
    ]
  },
  
  "spire-entrance": {
    id: "spire-entrance",
    title: "The Gleaming Door",
    description: "The crystal path takes you across the perfectly still lake to the base of the towering Spire. Up close, it's even more impressive - easily a thousand feet tall, with perfect symmetrical facets that somehow show no joints or seams. Before you stands a tall, narrow doorway with symbols similar to those you saw on Elara's Sigil.",
    choices: [
      {
        id: "touch-doorway",
        text: "Place your hand on the doorway",
        nextSceneId: "spire-interior"
      }
    ]
  },
  
  "spire-interior": {
    id: "spire-interior",
    title: "Halls of Light",
    description: "The moment your hand touches the door, it dissolves into motes of light, allowing you entry. Inside is a vast, open space that seems larger than should be possible given the Spire's exterior dimensions. Light refracts through the crystal walls, creating rainbows that seem to form and re-form into shapes - figures walking, worlds turning, stars being born and dying.",
    npcDialog: "Welcome to the Hall of All Paths, traveler.",
    choices: [
      {
        id: "follow-lights",
        text: "Follow the most intense concentration of light",
        nextSceneId: "compass-chamber"
      },
      {
        id: "examine-visions",
        text: "Try to understand the visions in the light",
        nextSceneId: "vision-insights",
        consequences: {
          addItems: ["nexusKey"]
        }
      }
    ]
  },
  
  "vision-insights": {
    id: "vision-insights",
    title: "Temporal Glimpses",
    description: "You pause to study the ever-shifting patterns of light. Gradually, they seem to respond to your attention, coalescing into clearer scenes. You see glimpses of possible futures - some bright with hope, others dark with despair. One vision shows a confrontation at the Void Breach, another shows a key unlike any you've seen, which somehow resonates with your presence.",
    npcDialog: "The Spire shows possibilities, not certainties. But it seems to be guiding you toward something important.",
    choices: [
      {
        id: "reach-for-key",
        text: "Reach toward the vision of the key",
        nextSceneId: "key-manifestation"
      }
    ]
  },
  
  "key-manifestation": {
    id: "key-manifestation",
    title: "Manifested Potential",
    description: "As you reach toward the vision, it grows more solid and detailed. To your astonishment, the light coalesces into physical form - a key made of what appears to be compressed starlight and void essence twisted together in impossible harmony. It floats into your waiting hand.",
    npcDialog: "A Nexus Key! Created from the potential futures the Spire glimpsed in you. Such items are incredibly rare manifestations of probability. It seems your coming was foreseen.",
    choices: [
      {
        id: "continue-to-compass",
        text: "Continue seeking the Compass",
        nextSceneId: "compass-chamber"
      }
    ]
  },
  
  "compass-chamber": {
    id: "compass-chamber",
    title: "The Chamber of Reflection",
    description: "At the heart of the Spire, you find a perfectly circular chamber with a pedestal at its center. The walls are mirrored crystal, creating infinite reflections. On the pedestal floats what must be the Stellar Compass - a complex arrangement of concentric rings around a central star, all crafted from material that seems both solid and fluid simultaneously.",
    choices: [
      {
        id: "approach-compass",
        text: "Approach the Stellar Compass",
        nextSceneId: "compass-test"
      }
    ]
  },
  
  "compass-test": {
    id: "compass-test",
    title: "The Moment of Judgment",
    description: "As you approach the pedestal, the Compass begins to spin, its rings rotating in different directions. The mirrored walls activate, no longer showing your reflection but countless alternative versions of you from different realities - some noble, some corrupt, all watching. The Compass rises from its pedestal, hovering before you expectantly.",
    npcDialog: "Speak your intent, traveler. The Compass listens not just to your words, but to the truth in your heart.",
    choices: [
      {
        id: "state-true-purpose",
        text: "State your purpose to restore cosmic balance",
        nextSceneId: "compass-acceptance"
      },
      {
        id: "admit-uncertainty",
        text: "Honestly admit your uncertainty but determination",
        nextSceneId: "compass-consideration"
      }
    ]
  },
  
  "compass-consideration": {
    id: "compass-consideration",
    title: "Honest Doubt",
    description: "You admit that you're not certain of success, that you're afraid and doubtful of your abilities, but that you are determined to try your best to help restore balance to the cosmos. The Compass hovers, seemingly pondering your honesty.",
    npcDialog: "Truth even in doubt. Rare indeed.",
    choices: [
      {
        id: "await-judgment",
        text: "Await the Compass's judgment",
        nextSceneId: "compass-acceptance"
      }
    ]
  },
  
  "compass-acceptance": {
    id: "compass-acceptance",
    title: "Chosen Path",
    description: "The Stellar Compass glows brightly, its rings aligning into a single perfect circle. It floats gently into your hands, feeling warm and somehow alive. The moment you touch it, a rush of knowledge flows into your mind - glimpses of pathways between worlds, currents of cosmic energy, and the location of the next artifact you seek.",
    consequences: {
      addItems: ["celestialCompass"]
    },
    npcDialog: "The Compass has accepted you, traveler. It will guide you to the remaining artifacts - starting with the Void Shield, which lies in the Shadow Realm. Be warned - it is a place of danger, where light itself struggles to exist.",
    choices: [
      {
        id: "ask-how-to-travel",
        text: "Ask how to travel to the Shadow Realm",
        nextSceneId: "travel-explanation"
      },
      {
        id: "prepare-for-departure",
        text: "Prepare to depart immediately",
        nextSceneId: "return-to-nexus"
      }
    ]
  },
  
  "travel-explanation": {
    id: "travel-explanation",
    title: "Pathways Between Worlds",
    description: "A Crystal Keeper approaches, its facets glimmering with what seems like approval.",
    npcDialog: "The Compass itself will show you the way. Hold it before you and focus your intent on reaching the Shadow Realm. It will create a pathway through the cosmic currents. But first, you should return to the Nexus and speak with Elara. The journey ahead will be perilous, and her guidance will be valuable.",
    choices: [
      {
        id: "agree-to-return",
        text: "Agree to return to the Nexus first",
        nextSceneId: "return-to-nexus"
      }
    ]
  },
  
  "return-to-nexus": {
    id: "return-to-nexus",
    title: "The Path Opens",
    description: "With the Stellar Compass in hand, you focus on returning to the Cosmic Nexus. The Compass's rings begin to spin, faster and faster, until they blur into a disc of light. A portal opens before you, showing the now-familiar crystalline spire of the Guardian Sanctum.",
    npcDialog: "Go now, traveler. Know that the Crystal Keepers will preserve the knowledge of your coming. May your path lead to harmony.",
    choices: [
      {
        id: "step-through-portal",
        text: "Step through the portal to the Nexus",
        nextSceneId: "reunion-elara"
      }
    ]
  },
  
  "reunion-elara": {
    id: "reunion-elara",
    title: "Return to the Core",
    description: "You step through the portal and find yourself back in the Chamber of Stars. Elara waits beside the Core, which seems to have darkened further in your absence. When she sees the Compass in your hands, her face lights up with hope.",
    npcDialog: "You found it! The Stellar Compass - and it has accepted you as its wielder. This is more than I dared hope for. The Compass is perhaps the most crucial of all the artifacts, as it can guide us to the others. Tell me of your journey.",
    choices: [
      {
        id: "share-experiences",
        text: "Share your experiences in the Crystal Expanse",
        nextSceneId: "planning-next"
      },
      {
        id: "ask-about-core",
        text: "Ask about the Core's condition",
        nextSceneId: "deterioration"
      }
    ]
  },
  
  "deterioration": {
    id: "deterioration",
    title: "Racing Against Time",
    description: "Elara's expression darkens as she looks to the Core, where the tendrils of Void have spread further, choking more of the light.",
    npcDialog: "It worsens by the hour. I've maintained a barrier around the very center, but it taxes my strength considerably. We have little time - perhaps only enough to gather three or four more artifacts before the corruption becomes irreversible. We must prioritize the most crucial ones.",
    choices: [
      {
        id: "discuss-priorities",
        text: "Discuss which artifacts to prioritize",
        nextSceneId: "planning-next"
      }
    ]
  },
  
  "planning-next": {
    id: "planning-next",
    title: "The Path Forward",
    description: "After sharing your experiences and discussing the situation, Elara studies the Stellar Compass in your hands. She passes her hand over it, causing its rings to spin momentarily.",
    npcDialog: "The Compass confirms what I suspected. The next artifact, the Void Shield, lies in the Shadow Realm - a dangerous place indeed, but the Shield is crucial for our plan. It can create a barrier between the Core and the Void Breach long enough for us to implement the Seals. Are you ready to continue your quest?",
    choices: [
      {
        id: "express-readiness",
        text: "Express readiness to continue",
        nextSceneId: "shadow-realm-transition"
      },
      {
        id: "ask-for-guidance",
        text: "Ask for guidance about the Shadow Realm",
        nextSceneId: "shadow-guidance"
      }
    ]
  },
  
  "shadow-guidance": {
    id: "shadow-guidance",
    title: "Warnings and Wisdom",
    description: "Elara's expression becomes serious as she prepares to brief you on the dangers ahead.",
    npcDialog: "The Shadow Realm exists in the penumbra between light and Void. It is a world of perpetual twilight, where physical laws are... fluid. Emotions affect reality there, so guard your thoughts carefully. Fear will manifest dangers; courage will open paths. The inhabitants - Shadow Weavers - are neither good nor evil, but they are capricious and alien in their thinking. Trust your instincts, and let the Compass guide you.",
    choices: [
      {
        id: "thank-for-advice",
        text: "Thank her for the advice and prepare to depart",
        nextSceneId: "shadow-realm-transition"
      }
    ]
  },
  
  "shadow-realm-transition": {
    id: "shadow-realm-transition",
    title: "Between Worlds",
    description: "With the Stellar Compass in hand, you focus on the Shadow Realm as Elara has instructed. The Compass's rings begin to spin, creating a portal that looks different from before - darker, with swirling patterns of deep purple and black. Through it, you can see a landscape of twisted shadows and muted colors.",
    npcDialog: "I can't accompany you - my presence is needed here to slow the corruption. But I will be with you in spirit, and the Compass will guide your way. Remember what I told you about the nature of the Shadow Realm, and trust in your own resilience. You've already accomplished more than anyone could have expected.",
    choices: [
      {
        id: "enter-shadow-realm",
        text: "Step through the portal into the Shadow Realm",
        nextSceneId: "shadow-arrival"
      }
    ]
  },
  
  "shadow-arrival": {
    id: "shadow-arrival",
    title: "The Twilight Land",
    description: "The portal closes behind you, leaving you in a world unlike any you've seen before. The sky is a perpetual deep purple twilight, neither day nor night. The landscape consists of twisted, impossible shapes that seem to shift when not observed directly. The ground beneath your feet feels solid one moment and slightly yielding the next, like walking on packed sand that occasionally turns to mud.",
    imagePath: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    choices: [
      {
        id: "consult-compass",
        text: "Consult the Stellar Compass for guidance",
        nextSceneId: "compass-direction"
      },
      {
        id: "observe-surroundings",
        text: "Carefully observe your surroundings",
        nextSceneId: "shadow-landscape"
      }
    ]
  },
  
  "compass-direction": {
    id: "compass-direction",
    title: "The Guiding Star",
    description: "You hold up the Stellar Compass, which immediately activates. Its rings align to point in a specific direction, toward what appears to be a mountain range made of sharp, crystalline shadows. The central star pulses with a steady rhythm, like a heartbeat.",
    choices: [
      {
        id: "follow-compass",
        text: "Follow the direction indicated by the Compass",
        nextSceneId: "shadow-path"
      }
    ]
  },
  
  "shadow-landscape": {
    id: "shadow-landscape",
    title: "Things Unseen",
    description: "As you carefully study your surroundings, you begin to notice subtle patterns in the seemingly chaotic landscape. The shadows don't fall quite right, as if there are multiple light sources, or as if the objects casting them don't fully exist in this reality. Occasionally, you catch glimpses of movement at the corner of your vision, but nothing is there when you look directly.",
    npcDialog: "Visitor from the light realms... how curious. What brings you to our twilight domain?",
    choices: [
      {
        id: "turn-to-voice",
        text: "Turn toward the voice",
        nextSceneId: "shadow-weaver"
      },
      {
        id: "draw-compass-defensively",
        text: "Ready the Stellar Compass defensively",
        nextSceneId: "compass-defense"
      }
    ]
  },
  
  "compass-defense": {
    id: "compass-defense",
    title: "Light in Shadow",
    description: "You quickly pull out the Stellar Compass, which flares with bright light in the dim landscape. A figure that was approaching seems to recoil, hissing slightly.",
    npcDialog: "Peace, light-bearer! I intend no harm. But that artifact... it marks you as an emissary of the Guardians. Has the balance finally tipped beyond recovery in the upper realms?",
    choices: [
      {
        id: "lower-compass",
        text: "Lower the Compass and explain your quest",
        nextSceneId: "shadow-conversation"
      }
    ]
  },
  
  "shadow-weaver": {
    id: "shadow-weaver",
    title: "The Twilight Inhabitant",
    description: "You turn to find a tall, slender figure standing where nothing was a moment before. Its form seems to be made of concentrated shadow, with subtle variations creating the impression of features. Two points of deep purple light serve as eyes. It regards you with what seems like curiosity.",
    npcDialog: "Forgive my abrupt appearance. We don't often receive visitors from the light realms, especially not ones who can see so clearly. You have the look of a quest about you. Perhaps we might... help each other?",
    choices: [
      {
        id: "ask-about-help",
        text: "Ask how you might help each other",
        nextSceneId: "shadow-conversation"
      },
      {
        id: "inquire-about-shield",
        text: "Ask directly about the Void Shield",
        nextSceneId: "direct-inquiry"
      }
    ]
  },
  
  "shadow-path": {
    id: "shadow-path",
    title: "The Winding Way",
    description: "Following the Compass's guidance, you begin walking toward the distant shadow mountains. The path seems to twist and change, sometimes stretching longer than it should, other times contracting unexpectedly. Occasionally, you feel watched, though you see no observers in the strange landscape.",
    choices: [
      {
        id: "continue-carefully",
        text: "Continue carefully toward the mountains",
        nextSceneId: "shadow-encounter"
      },
      {
        id: "call-out",
        text: "Call out to any watchers",
        nextSceneId: "shadow-response"
      }
    ]
  },
  
  "shadow-encounter": {
    id: "shadow-encounter",
    title: "Ambiguous Encounter",
    description: "As you make your way toward the mountains, the shadows around you suddenly condense, forming into three figure-like shapes that bar your path. They're similar to the Shadow Watchers you encountered in the forest, but somehow more solid, more present in this realm that seems to be their natural habitat.",
    npcDialog: "A boundary-crosser, bearing a light artifact no less. Your kind seldom ventures here willingly. State your purpose, traveler, before we decide whether you are threat or opportunity.",
    choices: [
      {
        id: "explain-purpose",
        text: "Explain your quest to restore cosmic balance",
        nextSceneId: "shadow-deliberation"
      },
      {
        id: "display-compass",
        text: "Show them the Stellar Compass",
        nextSceneId: "compass-recognition"
      }
    ]
  },
  
  "shadow-response": {
    id: "shadow-response",
    title: "Emerging from Darkness",
    description: "Your call echoes strangely in the twilight landscape, the sound seeming to bend and refract. For a moment, nothing happens. Then, as if materializing from the air itself, a figure composed of living shadow steps into view, regarding you with glowing eyes.",
    npcDialog: "Bold, to announce yourself so openly in the Shadow Realm. Most visitors attempt to slink through unnoticed. I am Umbral, a Weaver of this domain. What brings a creature of light to our threshold world?",
    choices: [
      {
        id: "explain-quest",
        text: "Explain your quest for the Void Shield",
        nextSceneId: "umbral-response"
      }
    ]
  },
  
  "umbral-response": {
    id: "umbral-response",
    title: "A Guide in Darkness",
    description: "The shadow figure - Umbral - listens to your explanation with unreadable expressions shifting across its featuresless face. When you finish, it seems to consider for a long moment.",
    npcDialog: "The Void Shield... yes, it still exists within our realm. It was entrusted to our keeping long ago, when the Guardians and Shadow Weavers still maintained diplomatic relations. But reaching it will not be simple. It is kept in the Obsidian Citadel, at the heart of the Crystal Shadows - those mountains your artifact points toward. I could guide you, but I would require something in exchange.",
    choices: [
      {
        id: "ask-about-price",
        text: "Ask what Umbral wants in exchange",
        nextSceneId: "shadow-bargain"
      },
      {
        id: "decline-offer",
        text: "Politely decline and continue alone",
        nextSceneId: "solo-journey"
      }
    ]
  },
  
  "shadow-bargain": {
    id: "shadow-bargain",
    title: "Terms of Agreement",
    description: "Umbral's form seems to ripple with something like anticipation.",
    npcDialog: "Nothing onerous, I assure you. In the Obsidian Citadel, there is another artifact - a crystallized shadow that once belonged to my lineage. It was... confiscated during the last conflict with the Guardians. I want it returned. The Shield is kept in the upper chambers, my family's crystal in the lower vaults. Help me retrieve what is mine, and I will ensure you leave our realm with the Shield.",
    choices: [
      {
        id: "accept-bargain",
        text: "Accept Umbral's terms",
        nextSceneId: "journey-to-citadel"
      },
      {
        id: "clarify-terms",
        text: "Ask for clarification about the crystal's nature",
        nextSceneId: "crystal-explanation"
      }
    ]
  },
  
  "crystal-explanation": {
    id: "crystal-explanation",
    title: "Shadow Heritage",
    description: "Umbral's eyes flare slightly brighter as you ask about the crystal.",
    npcDialog: "It is called a Soul Shadow - a crystallized essence of our people's collective memory and power. Each major family maintains one, passed through generations. When the Guardians intervened in our civil conflict centuries ago, they 'safeguarded' several Soul Shadows in their Citadel. They claimed it was temporary, but they never returned them. The one I seek belongs to my family line - it contains memories and knowledge I cannot access without it.",
    choices: [
      {
        id: "accept-after-explanation",
        text: "Accept the bargain with better understanding",
        nextSceneId: "journey-to-citadel"
      },
      {
        id: "express-concern",
        text: "Express concern about potential consequences",
        nextSceneId: "umbral-reassurance"
      }
    ]
  },
  
  "umbral-reassurance": {
    id: "umbral-reassurance",
    title: "Shadow's Honor",
    description: "Umbral seems to sense your hesitation, its form becoming more defined as if to appear more trustworthy.",
    npcDialog: "Your caution is reasonable, light-dweller. But know this - despite what the Guardians may have told you, we Shadow Weavers have our own code of honor. A bargain struck is binding to us, as fundamental as the laws of light are to you. I seek only what was wrongfully taken, not revenge or power. The Soul Shadow can only be wielded by one of its lineage - it has no function to others except as a curious bauble.",
    choices: [
      {
        id: "accept-reassured",
        text: "Accept the bargain, reassured",
        nextSceneId: "journey-to-citadel"
      }
    ]
  },
  
  "solo-journey": {
    id: "solo-journey",
    title: "The Lone Path",
    description: "You politely decline Umbral's offer, preferring to rely on the Compass's guidance. The shadow figure inclines what passes for its head in acknowledgment.",
    npcDialog: "As you wish. The Compass will lead you true, but the Citadel has many defenses that respond differently to those of shadow and light. May your steps find solid ground, traveler.",
    choices: [
      {
        id: "continue-alone",
        text: "Continue your journey alone",
        nextSceneId: "mountain-path"
      }
    ]
  },
  
  "journey-to-citadel": {
    id: "journey-to-citadel",
    title: "Shadowed Companions",
    description: "With your agreement made, Umbral gestures and two more Shadow Weavers materialize from the darkness around you. 'My associates, Penumbra and Shade,' Umbral explains. 'They will help ensure our journey goes smoothly.' Together, you begin the trek toward the Crystal Shadows, the mountain range looming ever larger on the horizon.",
    npcDialog: "The path to the Citadel is not merely a physical journey in our realm. The mountains respond to intention and emotion. Stay close, and try to maintain clarity of purpose. Doubt or fear can... reshape the terrain in unfortunate ways.",
    choices: [
      {
        id: "ask-about-citadel",
        text: "Ask about the Obsidian Citadel as you travel",
        nextSceneId: "citadel-history"
      },
      {
        id: "focus-on-journey",
        text: "Focus on maintaining clear intentions during the journey",
        nextSceneId: "mountain-base"
      }
    ]
  },
  
  "citadel-history": {
    id: "citadel-history",
    title: "Tales of Shadow",
    description: "As your group traverses the shifting landscape, Umbral explains the history of the place you're heading toward.",
    npcDialog: "The Obsidian Citadel was built in the earliest days when the Guardians and Shadow Weavers still worked in concert to maintain cosmic balance. It served as an embassy between our realms, and later as a repository for artifacts too dangerous to keep in the light realms. During the Sundering - what you might call the Fall - it was sealed by mutual agreement. No Guardian has entered in centuries, though their wards and sentinels still guard its chambers.",
    choices: [
      {
        id: "ask-about-defenses",
        text: "Ask about the defenses you'll face",
        nextSceneId: "defense-briefing"
      },
      {
        id: "express-determination",
        text: "Express determination to succeed in your mission",
        nextSceneId: "mountain-base"
      }
    ]
  },
  
  "defense-briefing": {
    id: "defense-briefing",
    title: "Warnings and Preparations",
    description: "The Shadow Weavers exchange looks before Penumbra, the slimmest of the three, speaks for the first time.",
    npcDialog: "The outer defenses recognize intent - those who mean harm to the Citadel itself cannot approach. Within, light-based wards prevent Shadow Weavers from accessing certain chambers, while shadow-barriers do the same for light-dwellers. That is why we need each other. The most dangerous guardians are the Sentinel Echoes - imprints of Guardian power that maintain set patrol patterns. They cannot be reasoned with, only avoided or... disabled.",
    choices: [
      {
        id: "ask-for-strategy",
        text: "Ask for a strategic approach",
        nextSceneId: "infiltration-plan"
      },
      {
        id: "express-confidence",
        text: "Express confidence in overcoming the challenges",
        nextSceneId: "mountain-base"
      }
    ]
  },
  
  "infiltration-plan": {
    id: "infiltration-plan",
    title: "Planning the Approach",
    description: "Shade, the bulkiest of the Shadow Weavers, materializes a map-like projection from their shadowy form, showing the layout of the Citadel.",
    npcDialog: "We'll enter through the Twilight Gate - it requires both light and shadow presences to unlock. From there, we'll proceed to the central atrium. You'll need to ascend to the upper reliquary for the Shield while we descend to the lower vaults for the Soul Shadow. The timing must be precise - removing either artifact will trigger alert systems. We rendezvous at the Twilight Gate exactly one hour after separation, no matter what.",
    choices: [
      {
        id: "agree-to-plan",
        text: "Agree to the infiltration plan",
        nextSceneId: "mountain-base"
      }
    ]
  },
  
  "mountain-path": {
    id: "mountain-path",
    title: "The Shifting Ascent",
    description: "Without a guide, you begin the ascent toward the Crystal Shadows alone. The path constantly shifts beneath your feet, sometimes narrowing to a knife's edge, other times broadening into confusing plateaus with multiple identical paths. The Compass continues to point true, but the journey is far more difficult than anticipated.",
    choices: [
      {
        id: "trust-instincts",
        text: "Trust your instincts when the path is unclear",
        nextSceneId: "instinct-guidance"
      },
      {
        id: "rely-on-compass",
        text: "Rely solely on the Compass's direction",
        nextSceneId: "compass-limitation"
      }
    ]
  },
  
  "compass-limitation": {
    id: "compass-limitation",
    title: "The Compass's Limits",
    description: "You focus entirely on following the Compass's direction, ignoring your own intuition about the shifting paths. The Compass points true to the Citadel's location, but doesn't account for the changing nature of the terrain. You find yourself walking in circles, or facing dead ends where the path simply vanishes into mist.",
    choices: [
      {
        id: "reconsider-approach",
        text: "Reconsider your approach to the journey",
        nextSceneId: "instinct-guidance"
      }
    ]
  },
  
  "instinct-guidance": {
    id: "instinct-guidance",
    title: "Finding the True Path",
    description: "You begin to integrate your intuition with the Compass's guidance, using it as a general direction but trusting your own senses for the immediate path. This approach seems to work better - the mountains appear to respond to your adaptability, paths becoming more stable beneath your feet.",
    choices: [
      {
        id: "continue-ascent",
        text: "Continue the ascent with renewed confidence",
        nextSceneId: "mountain-encounter"
      }
    ]
  },
  
  "mountain-encounter": {
    id: "mountain-encounter",
    title: "The Path Guardian",
    description: "Halfway up the mountain path, you encounter a strange figure sitting cross-legged in the center of the trail. Unlike the Shadow Weavers, it appears to be made of crystal rather than shadow, though darkness swirls within its transparent form. It opens eyes that look like twin amethysts and regards you with ancient wisdom.",
    npcDialog: "Few come this way without shadow guides, light-dweller. You seek the Citadel, yes? Entry is not freely given. Show me what you carry that makes you worthy.",
    choices: [
      {
        id: "show-compass",
        text: "Show the Stellar Compass",
        nextSceneId: "guardian-judgment"
      },
      {
        id: "explain-mission",
        text: "Explain your mission to save the Cosmic Core",
        nextSceneId: "guardian-interest"
      }
    ]
  },
  
  "guardian-interest": {
    id: "guardian-interest",
    title: "Ancient Interest",
    description: "The crystalline figure listens to your explanation about the Cosmic Core and the Void breach with growing interest, the swirling shadows within its form moving faster.",
    npcDialog: "So... the balance finally tips toward entropy. Long have we sensed the shift, even here in our twilight domain. Yet you come alone, without Guardians to vouch for you or Shadow Weavers to guide you. You must possess something that gives you the right to seek the Shield, something that marks you as an agent of balance.",
    choices: [
      {
        id: "now-show-compass",
        text: "Now reveal the Stellar Compass",
        nextSceneId: "guardian-judgment"
      }
    ]
  },
  
  "guardian-judgment": {
    id: "guardian-judgment",
    title: "Recognition",
    description: "As you present the Stellar Compass, the crystalline figure leans forward, the shadows within it momentarily stilling. It extends a translucent hand, not quite touching the Compass but sensing its energy.",
    npcDialog: "The Compass of Stars... and it has bonded to you. Very well. I am Crystallos, Keeper of the Threshold. I will allow you passage to the Citadel. But heed this warning - the artifact you seek tests all who would claim it. The Shield responds to courage in the face of one's deepest fears. Prepare yourself for this trial.",
    choices: [
      {
        id: "thank-crystallos",
        text: "Thank Crystallos and continue your journey",
        nextSceneId: "citadel-approach"
      },
      {
        id: "ask-about-trial",
        text: "Ask for more details about the trial",
        nextSceneId: "trial-explanation"
      }
    ]
  },
  
  "trial-explanation": {
    id: "trial-explanation",
    title: "The Nature of Fear",
    description: "Crystallos's crystalline features shift into something resembling a sympathetic expression.",
    npcDialog: "The Void Shield was forged to protect against not just physical darkness, but the darkness within. When you reach the Shield's chamber, it will draw out your deepest fear and give it form. You must face this manifestation with true courage - not fearlessness, but action despite fear. Only then will the Shield recognize you as worthy. I can say no more, for each trial is unique to the seeker.",
    choices: [
      {
        id: "prepare-mentally",
        text: "Take a moment to center yourself before continuing",
        nextSceneId: "citadel-approach"
      }
    ]
  },
  
  "mountain-base": {
    id: "mountain-base",
    title: "The Foot of Shadow Peaks",
    description: "After a journey through the ever-shifting twilight landscape, you and your Shadow Weaver companions reach the base of the Crystal Shadows. Up close, the mountains are even more impressive - towering spires of what appears to be obsidian and dark crystal, with occasional veins of luminescent purple running through them like circuits.",
    choices: [
      {
        id: "begin-ascent",
        text: "Begin ascending toward the Citadel",
        nextSceneId: "mountain-climb"
      },
      {
        id: "search-for-path",
        text: "Search for the most direct path",
        nextSceneId: "hidden-shortcut"
      }
    ]
  },
  
  "hidden-shortcut": {
    id: "hidden-shortcut",
    title: "The Weaver's Way",
    description: "As you search for the best route up the mountain, Shade gestures toward what appears to be a solid wall of crystal. 'There is a faster way for those who know how to see it.' The Shadow Weaver places a hand against the surface, and what seemed like solid stone ripples like water, revealing a hidden passage leading upward through the mountain interior.",
    npcDialog: "The old ways are still open to those of shadow-blood. This passage will take us directly to the outer courtyard of the Citadel. It was used by messengers in more peaceful times.",
    choices: [
      {
        id: "take-shadow-passage",
        text: "Take the hidden shadow passage",
        nextSceneId: "inner-mountain"
      }
    ]
  },
  
  "inner-mountain": {
    id: "inner-mountain",
    title: "Crystalline Tunnels",
    description: "The hidden passage leads into a network of tunnels within the mountain itself. The walls are smooth, polished obsidian that reflects your form in distorted ways. Occasionally, you pass chambers where crystal formations grow in beautiful, alien patterns. The Shadow Weavers seem to know the way instinctively, never hesitating at intersections.",
    choices: [
      {
        id: "ask-about-tunnels",
        text: "Ask about the tunnel network",
        nextSceneId: "tunnel-explanation"
      },
      {
        id: "remain-alert",
        text: "Remain alert for potential dangers",
        nextSceneId: "tunnel-ambush"
      }
    ]
  },
  
  "tunnel-explanation": {
    id: "tunnel-explanation",
    title: "Shadows and Secrets",
    description: "As you walk, Umbral explains the nature of the passage you're traversing.",
    npcDialog: "These tunnels were created in the early days of cooperation between realms. Shadow Weavers carved them with thought and will, rather than physical tools. They respond to our presence, sometimes shifting to create more direct routes. Few light-dwellers have ever seen them - you are privileged indeed.",
    choices: [
      {
        id: "express-appreciation",
        text: "Express appreciation for their trust",
        nextSceneId: "mutual-trust"
      },
      {
        id: "continue-journey",
        text: "Continue the journey in thoughtful silence",
        nextSceneId: "tunnel-exit"
      }
    ]
  },
  
  "mutual-trust": {
    id: "mutual-trust",
    title: "Building Bridges",
    description: "Your genuine appreciation seems to affect the Shadow Weavers. Their forms become slightly more defined, less shifting, as if revealing more of their true selves to you.",
    npcDialog: "Your openness is... refreshing. Too often, those from the light realms come with fear or suspicion already in their hearts. Perhaps when this crisis is resolved, there might be opportunity for renewed understanding between our peoples.",
    choices: [
      {
        id: "agree-with-hope",
        text: "Agree that better understanding would benefit all",
        nextSceneId: "tunnel-exit"
      }
    ]
  },
  
  "tunnel-ambush": {
    id: "tunnel-ambush",
    title: "Unwelcome Guardians",
    description: "Your vigilance pays off - you notice subtle changes in the crystal walls moments before they happen. 'Stop!' you call out, just as sections of the tunnel ahead suddenly illuminate with harsh blue light. The Shadow Weavers recoil, hissing in pain.",
    npcDialog: "Light wards! Someone has activated the old defenses. Quick, down this side passage before they fully awaken!",
    choices: [
      {
        id: "follow-quickly",
        text: "Follow the Shadow Weavers down the side passage",
        nextSceneId: "evading-wards"
      }
    ]
  },
  
  "evading-wards": {
    id: "evading-wards",
    title: "Desperate Detour",
    description: "You rush down a narrow side tunnel, the blue light from the activated wards growing dimmer behind you. The passage twists and descends unexpectedly, taking you deeper into the mountain than you intended to go.",
    npcDialog: "The old defenses shouldn't have activated for us. Something else must be moving through these tunnels... something that triggered them. We must be more cautious.",
    choices: [
      {
        id: "suggest-alternative-route",
        text: "Suggest finding an alternative route to the surface",
        nextSceneId: "finding-new-path"
      }
    ]
  },
  
  "finding-new-path": {
    id: "finding-new-path",
    title: "Adaptation",
    description: "The Shadow Weavers confer briefly in their musical language before nodding in agreement with your suggestion.",
    npcDialog: "Yes, we must adapt. These lower tunnels connect to the undercroft of the Citadel - not our intended entry point, but it will serve. It may even be fortuitous, bringing us closer to the vault where the Soul Shadow is kept.",
    choices: [
      {
        id: "proceed-to-undercroft",
        text: "Proceed toward the Citadel undercroft",
        nextSceneId: "undercroft-approach"
      }
    ]
  },
  
  "tunnel-exit": {
    id: "tunnel-exit",
    title: "Emergence",
    description: "After navigating the crystalline tunnels for what seems like hours, you begin to ascend again. The passage gradually widens, the ceiling rising until you emerge into a vast cavern. Above, through a crystalline dome, you can see the Obsidian Citadel itself - a massive structure of black stone and crystal perched at the mountain's peak.",
    npcDialog: "The Twilight Courtyard. From here, we can access the Citadel proper through the ceremonial entrance. It requires both light and shadow to open - a symbol of the cooperation that once existed.",
    choices: [
      {
        id: "proceed-to-entrance",
        text: "Proceed to the ceremonial entrance",
        nextSceneId: "twilight-gate"
      }
    ]
  },
  
  "mountain-climb": {
    id: "mountain-climb",
    title: "The Winding Ascent",
    description: "You begin climbing the mountain path, which spirals around the peak in an almost perfect helix. As you ascend, the twilight grows deeper, the shadows more pronounced. Occasionally, the crystal of the mountain itself seems to shift and adjust, sometimes creating shortcuts, other times forcing detours.",
    npcDialog: "The mountain responds to intent and emotion. Maintain clarity of purpose, and the path will favor us.",
    choices: [
      {
        id: "maintain-focus",
        text: "Maintain focused determination during the climb",
        nextSceneId: "smooth-ascent"
      },
      {
        id: "observe-changes",
        text: "Carefully observe how the mountain changes",
        nextSceneId: "path-insight"
      }
    ]
  },
  
  "smooth-ascent": {
    id: "smooth-ascent",
    title: "Harmonious Progress",
    description: "Focusing intently on your mission, you find the path becoming smoother and more direct. The mountain seems to respond favorably to your determination, occasionally revealing shortcuts where the path would otherwise have wound extensively around outcroppings.",
    choices: [
      {
        id: "continue-focused-climb",
        text: "Continue the focused ascent",
        nextSceneId: "citadel-vista"
      }
    ]
  },
  
  "path-insight": {
    id: "path-insight",
    title: "Understanding the Mountain",
    description: "By carefully observing the mountain's reactions, you begin to understand its nature better. It doesn't simply respond to emotions but to intentions and expectations. When you anticipate difficulty, the path becomes challenging. When you expect clarity, junctions become more defined.",
    npcDialog: "You learn quickly, light-dweller. The Shadow Peaks are semi-sentient, formed from the collective unconscious of our people over eons. They test all who ascend, but reward those who understand.",
    choices: [
      {
        id: "apply-insight",
        text: "Apply your new insight to ease the journey",
        nextSceneId: "citadel-vista"
      }
    ]
  },
  
  "citadel-vista": {
    id: "citadel-vista",
    title: "First Glimpse",
    description: "Rounding a bend in the path, you get your first clear view of the Obsidian Citadel. It rises from the mountain's peak like a natural extension of the crystal, towers and spires of black stone reaching toward the twilight sky. Lights of deep purple and occasional flashes of blue glow from within its structure, suggesting both shadow and light energies coexist there.",
    choices: [
      {
        id: "pause-to-plan",
        text: "Pause to plan your approach",
        nextSceneId: "approach-planning"
      },
      {
        id: "continue-to-gates",
        text: "Continue directly to the Citadel gates",
        nextSceneId: "citadel-gates"
      }
    ]
  },
  
  "approach-planning": {
    id: "approach-planning",
    title: "Strategic Considerations",
    description: "You pause to examine the Citadel more carefully, noting potential entrances and signs of activity. From this vantage point, you can see several possible approaches - the main gates, which appear ceremonial but well-guarded; a smaller side entrance with less obvious security; and what looks like a maintenance access point near the base of one tower.",
    npcDialog: "Wise to consider options. The main entrance requires a specific ritual of light and shadow to open. The service entrance might be less secure, but often has practical defenses - traps and the like. What approach do you favor?",
    choices: [
      {
        id: "choose-main-entrance",
        text: "Suggest using the main entrance properly",
        nextSceneId: "twilight-gate"
      },
      {
        id: "choose-side-entrance",
        text: "Propose trying the side entrance",
        nextSceneId: "side-approach"
      }
    ]
  },
  
  "side-approach": {
    id: "side-approach",
    title: "The Keeper's Entrance",
    description: "Following your suggestion, the group approaches a smaller, less ornate entrance set into the side of the Citadel. It appears to have been designed for regular use rather than ceremony, with practical stone steps leading up to a doorway carved with simple utility rather than grandeur in mind.",
    npcDialog: "The Keeper's Entrance. It was used by the caretakers who maintained the Citadel daily. Its defenses are practical rather than magical - designed to recognize authorized personnel.",
    choices: [
      {
        id: "examine-lock",
        text: "Examine the entrance mechanism",
        nextSceneId: "practical-problem"
      }
    ]
  },
  
  "practical-problem": {
    id: "practical-problem",
    title: "Ancient Security",
    description: "The entrance appears to use a sophisticated lock system - a series of crystalline panels that would respond to the specific energy signature of authorized keepers. It's neither purely magical nor mechanical, but a hybrid system typical of the height of Guardian-Shadow cooperation.",
    npcDialog: "We cannot easily bypass this. Penumbra could attempt to mimic a keeper's energy signature, but it would be imperfect at best. The main gates, while more impressive, actually might be easier - they were designed to be opened by cooperative ritual rather than specific identification.",
    choices: [
      {
        id: "reconsider-main-gate",
        text: "Reconsider using the main entrance",
        nextSceneId: "twilight-gate"
      },
      {
        id: "attempt-bypass",
        text: "Ask Penumbra to attempt bypassing the lock",
        nextSceneId: "failed-attempt",
        consequences: {
          health: -15
        }
      }
    ]
  },
  
  "failed-attempt": {
    id: "failed-attempt",
    title: "Security Response",
    description: "Penumbra steps forward, their shadow-form shifting and reshaping as they attempt to mimic the energy pattern required. For a moment, it seems to be working as the crystals begin to glow. Then, suddenly, they flare with brilliant light. Penumbra recoils with a hiss of pain, and a wave of energy pulses outward, catching you in its blast.",
    npcDialog: "Defense wards! Everyone back! It was more sophisticated than I estimated. Are you injured, light-dweller?",
    choices: [
      {
        id: "recover-and-regroup",
        text: "Recover from the blast and suggest trying the main gate",
        nextSceneId: "twilight-gate"
      }
    ]
  },
  
  "citadel-gates": {
    id: "citadel-gates",
    title: "The Grand Entrance",
    description: "You follow the path as it completes its spiral around the mountain peak, eventually arriving at a large plateau before the main gates of the Obsidian Citadel. The entrance is imposing - two massive doors of black crystal inlaid with patterns of silver and amethyst, set beneath an arch carved with symbols representing both light and shadow forces in balance.",
    choices: [
      {
        id: "examine-symbols",
        text: "Examine the symbolic carvings",
        nextSceneId: "symbol-insight"
      },
      {
        id: "approach-directly",
        text: "Approach the gates directly",
        nextSceneId: "twilight-gate"
      }
    ]
  },
  
  "symbol-insight": {
    id: "symbol-insight",
    title: "Ancient Wisdom",
    description: "You study the intricate carvings that adorn the arch above the gates. They tell a story - the separation of light and shadow from primordial unity, their distinct evolution, and their eventual cooperation to maintain cosmic balance. The final symbols show light and shadow forces channeled together to create something greater than either alone.",
    npcDialog: "The Parable of Division and Reunion. It was the philosophical foundation of the alliance between Guardians and Shadow Weavers. A reminder that opposition need not mean enmity, that different forces can work together toward greater harmony.",
    choices: [
      {
        id: "appreciate-meaning",
        text: "Express appreciation for the profound meaning",
        nextSceneId: "twilight-gate"
      }
    ]
  },
  
  "twilight-gate": {
    id: "twilight-gate",
    title: "The Ritual of Opening",
    description: "Standing before the main gates of the Obsidian Citadel, Umbral explains the opening ritual. 'The Twilight Gate requires both light and shadow to acknowledge each other's right of passage. We must perform the Ritual of Mutual Recognition - an ancient ceremony that symbolizes cooperation between our realms.'",
    choices: [
      {
        id: "ask-about-ritual",
        text: "Ask about your role in the ritual",
        nextSceneId: "ritual-explanation"
      },
      {
        id: "express-readiness",
        text: "Express readiness to participate",
        nextSceneId: "ritual-begins"
      }
    ]
  },
  
  "undercroft-approach": {
    id: "undercroft-approach",
    title: "The Foundations",
    description: "Following the alternate tunnel route, you emerge into what appears to be the undercroft of the Citadel - massive crystalline columns support the weight of the structure above, creating a forest of obsidian pillars that stretch into darkness. The space has a solemn, cathedral-like quality, with occasional phosphorescent growths providing minimal illumination.",
    npcDialog: "The Burden Pillars - they support not just the physical structure of the Citadel, but absorb and distribute the magical energies that would otherwise destabilize the mountain. We must move carefully here - the balance is delicate.",
    choices: [
      {
        id: "ask-directions",
        text: "Ask directions to the upper levels",
        nextSceneId: "undercroft-navigation"
      },
      {
        id: "follow-compass",
        text: "Follow the Stellar Compass's guidance",
        nextSceneId: "resonance-chamber"
      }
    ]
  },
  
  "undercroft-navigation": {
    id: "undercroft-navigation",
    title: "Finding a Path Upward",
    description: "The Shadow Weavers confer briefly, then Shade points toward a spiral pattern on the floor that winds between the massive columns.",
    npcDialog: "Follow the spiral pathways - they lead to transition points between levels. The pattern nearest us should lead to the primary vault level, where both our objectives can be found. The Shield in the Light Vault, the Soul Shadow in the Shadow Vault.",
    choices: [
      {
        id: "follow-spiral",
        text: "Follow the spiral pathway",
        nextSceneId: "transition-point"
      }
    ]
  },
  
  "resonance-chamber": {
    id: "resonance-chamber",
    title: "Unexpected Discovery",
    description: "Following the Compass's guidance, you find yourself in a circular chamber different from the rest of the undercroft. The walls are inscribed with intricate patterns that seem to vibrate subtly. In the center sits a large crystal basin filled with a silvery liquid that moves on its own, forming and reforming patterns.",
    npcDialog: "The Resonance Chamber. I didn't expect to find it so easily. This was used to attune artifacts to their intended bearers. The liquid is pure potential - it can temporarily enhance an artifact's connection to its wielder. It might prove useful.",
    choices: [
      {
        id: "ask-about-enhancing",
        text: "Ask if it could enhance the Compass",
        nextSceneId: "compass-enhancement"
      },
      {
        id: "proceed-upward",
        text: "Suggest proceeding upward to the vaults",
        nextSceneId: "transition-point"
      }
    ]
  },
  
  "compass-enhancement": {
    id: "compass-enhancement",
    title: "Cosmic Attunement",
    description: "Umbral considers your question, shadowy features contorting in thought.",
    npcDialog: "It's possible. The Compass is already bonded to you, but the Resonance Pool could strengthen that connection temporarily, allowing for more precise guidance. There is some risk - the attunement process can be intense for both artifact and bearer. The decision must be yours.",
    choices: [
      {
        id: "attempt-attunement",
        text: "Attempt to enhance the Compass's connection",
        nextSceneId: "attunement-process"
      },
      {
        id: "decline-enhancement",
        text: "Decline the enhancement and continue upward",
        nextSceneId: "transition-point"
      }
    ]
  },
  
  "attunement-process": {
    id: "attunement-process",
    title: "Cosmic Harmony",
    description: "Following Umbral's instructions, you carefully lower the Stellar Compass into the silver liquid. Immediately, the chamber's inscriptions glow brighter, and the liquid begins to swirl around the Compass. You feel a pulling sensation in your mind, as if the Compass is drawing you toward it.",
    npcDialog: "Now place your hand in the liquid as well. The process will be brief but intense. Focus on your connection to the Compass, on your shared purpose.",
    choices: [
      {
        id: "complete-attunement",
        text: "Place your hand in the liquid and complete the attunement",
        nextSceneId: "enhanced-compass",
        consequences: {
          health: -10
        }
      },
      {
        id: "abort-process",
        text: "Pull the Compass out and abort the process",
        nextSceneId: "transition-point"
      }
    ]
  },
  
  "enhanced-compass": {
    id: "enhanced-compass",
    title: "Cosmic Vision",
    description: "The moment your hand touches the liquid, energy surges through you. The Compass's rings spin rapidly, and suddenly your perception expands dramatically. You can sense the layout of the Citadel as if seeing it from above, feel the presence of powerful artifacts within its walls, and perceive the currents of energy flowing through the structure. The experience is overwhelming but illuminating.",
    npcDialog: "The attunement is complete. The effect is temporary but should last long enough for our purpose. The Compass will now guide you with much greater precision. Are you well enough to continue?",
    choices: [
      {
        id: "recover-and-continue",
        text: "Take a moment to recover, then continue",
        nextSceneId: "transition-point"
      }
    ]
  },
  
  "transition-point": {
    id: "transition-point",
    title: "The Ascending Spiral",
    description: "Following the spiral pattern on the floor leads you to a circular platform marked with the same dual symbols of light and shadow seen throughout the Citadel. As your group steps onto it, the platform begins to rise smoothly, carrying you upward through a shaft in the ceiling.",
    npcDialog: "The transition point will take us to the vault level. From there, we must separate - you to the Light Vault for the Shield, we to the Shadow Vault for the Soul Crystal. The Compass will guide you, especially now that it's attuned to the Citadel's energies.",
    choices: [
      {
        id: "confirm-plan",
        text: "Confirm the separation plan",
        nextSceneId: "vault-level"
      },
      {
        id: "express-concern",
        text: "Express concern about separating",
        nextSceneId: "reassurance"
      }
    ]
  },
  
  "reassurance": {
    id: "reassurance",
    title: "Shadow's Promise",
    description: "The Shadow Weavers exchange glances at your concern, and Umbral steps closer, their form solidifying slightly as if to appear more trustworthy.",
    npcDialog: "Your caution is understandable, but necessary. The Light Vault would harm us as surely as the Shadow Vault would discomfort you. Our objectives align - neither of us can leave without the other. We will rendezvous at the transition point in exactly one hour, regardless of our success.",
    choices: [
      {
        id: "accept-necessity",
        text: "Accept the necessity of separation",
        nextSceneId: "vault-level"
      }
    ]
  },
  
  "ritual-explanation": {
    id: "ritual-explanation",
    title: "Ancient Ceremony",
    description: "Umbral gestures to specific positions before the gate where you and the Shadow Weavers should stand.",
    npcDialog: "The ritual is simple but symbolic. We will stand in the positions of shadow, forming a crescent. You, as the light-bearer, will stand opposite us, forming the symbolic eye. When we extend our essence toward the center, you must channel the Compass's light to meet it. The gate recognizes the balance of opposing forces in harmony.",
    choices: [
      {
        id: "take-position",
        text: "Take your position for the ritual",
        nextSceneId: "ritual-begins"
      }
    ]
  },
  
  "ritual-begins": {
    id: "ritual-begins",
    title: "The Opening",
    description: "You take your position before the gate as the Shadow Weavers arrange themselves in a crescent formation opposite you. They begin a low, harmonic chant that seems to resonate with the crystals of the gate itself. Tendrils of shadow extend from their forms, reaching toward the center of the space between you.",
    choices: [
      {
        id: "extend-compass",
        text: "Extend the Stellar Compass toward the shadow tendrils",
        nextSceneId: "gate-opens"
      }
    ]
  },
  
  "gate-opens": {
    id: "gate-opens",
    title: "Harmonious Entry",
    description: "As the Stellar Compass meets the shadow tendrils, a perfect balance of light and darkness forms in the space between. The gate responds immediately - symbols along the arch illuminate in sequence, and the massive doors begin to swing inward without a sound, revealing the grand entrance hall of the Obsidian Citadel.",
    npcDialog: "The Twilight Gate acknowledges our right of passage. The ritual is complete. We should proceed quickly - the Citadel has been sealed for so long, there's no telling what automated defenses might still function within.",
    choices: [
      {
        id: "enter-citadel",
        text: "Enter the Obsidian Citadel",
        nextSceneId: "entrance-hall"
      }
    ]
  },
  
  "citadel-approach": {
    id: "citadel-approach",
    title: "The Final Approach",
    description: "With Crystallos's blessing, you continue your ascent toward the Obsidian Citadel. The path becomes broader and more defined, clearly meant for ceremonial approaches. As you near the structure, its true scale becomes apparent - a towering fortress of black crystal that seems to both absorb and reflect the twilight around it.",
    choices: [
      {
        id: "approach-main-gate",
        text: "Approach the main gate",
        nextSceneId: "solitary-arrival"
      }
    ]
  },
  
  "solitary-arrival": {
    id: "solitary-arrival",
    title: "The Twilight Gate",
    description: "You arrive at the magnificent entrance to the Obsidian Citadel - two towering doors of black crystal inlaid with silver and amethyst patterns. The gate is clearly designed for a specific opening mechanism, with dual indentations on either side that suggest some kind of key or ritual is required.",
    choices: [
      {
        id: "examine-gate-mechanism",
        text: "Examine the gate mechanism more closely",
        nextSceneId: "gate-puzzle"
      },
      {
        id: "use-compass",
        text: "Use the Stellar Compass to attempt opening",
        nextSceneId: "compass-opening"
      }
    ]
  },
  
  "gate-puzzle": {
    id: "gate-puzzle",
    title: "Balance of Forces",
    description: "Upon closer examination, you see that the gate mechanism requires a balance of opposing forces. There are symbols representing light and shadow, carefully aligned in patterns suggesting harmonious interaction rather than conflict. The indentations appear designed to channel these forces simultaneously.",
    choices: [
      {
        id: "ponder-solution",
        text: "Consider how to generate both forces alone",
        nextSceneId: "creative-solution"
      }
    ]
  },
  
  "creative-solution": {
    id: "creative-solution",
    title: "Shadow and Light",
    description: "After careful consideration, you realize that while you cannot naturally generate shadow energy, you might be able to use the twilight environment itself. By positioning the Compass to reflect and focus the ambient light, you could potentially create both the necessary light and shadow patterns required by the gate.",
    choices: [
      {
        id: "attempt-reflection",
        text: "Attempt to reflect and focus light with the Compass",
        nextSceneId: "partial-success"
      }
    ]
  },
  
  "partial-success": {
    id: "partial-success",
    title: "Almost There",
    description: "Your innovative approach partially works - the light patterns align correctly, causing half of the symbols on the gate to illuminate. However, the shadow patterns remain inactive, the gate only partially responsive to your efforts.",
    npcDialog: "An impressive attempt, traveler.",
    choices: [
      {
        id: "turn-to-voice",
        text: "Turn toward the unexpected voice",
        nextSceneId: "unexpected-ally"
      }
    ]
  },
  
  "unexpected-ally": {
    id: "unexpected-ally",
    title: "The Observer",
    description: "You turn to find Crystallos standing nearby, watching your efforts with apparent interest. The crystalline figure approaches, shadows swirling within its transparent form.",
    npcDialog: "Few light-dwellers would think to use the environment itself to solve the puzzle. You show wisdom as well as determination. But the gate requires true shadow essence, not merely an absence of light. Allow me to assist - I contain both elements in balance.",
    choices: [
      {
        id: "accept-assistance",
        text: "Accept Crystallos's assistance",
        nextSceneId: "combined-effort"
      }
    ]
  },
  
  "combined-effort": {
    id: "combined-effort",
    title: "Harmony Achieved",
    description: "Together with Crystallos, you position yourselves on opposite sides of the gate. When you activate the Compass's light, Crystallos channels shadow essence from within their crystalline form. The dual energies meet in perfect balance, and the gate responds - symbols illuminating in sequence as the massive doors swing silently inward.",
    npcDialog: "The way is open. I cannot accompany you further - my duty is to the threshold only. But know this: the Shield responds to courage in the face of fear. Remember this when you face its trial.",
    choices: [
      {
        id: "thank-and-enter",
        text: "Thank Crystallos and enter the Citadel",
        nextSceneId: "entrance-hall"
      }
    ]
  },
  
  "compass-opening": {
    id: "compass-opening",
    title: "The Guiding Light",
    description: "You hold the Stellar Compass toward the gate, hoping its connection to Guardian artifacts might trigger a response. The Compass glows brighter, its rings aligning to point directly at the gate, but the massive doors remain closed. However, as the light touches the surface, a smaller portal - perhaps a service entrance - becomes visible to the side, previously camouflaged in the crystal facade.",
    choices: [
      {
        id: "investigate-side-door",
        text: "Investigate the revealed side entrance",
        nextSceneId: "service-entrance"
      }
    ]
  },
  
  "service-entrance": {
    id: "service-entrance",
    title: "The Keeper's Way",
    description: "The side entrance appears to be a more practical entrance, likely used by those who maintained the Citadel. It bears simpler markings than the grand gate, with a single indentation that resembles the shape of the Compass's central star.",
    choices: [
      {
        id: "try-compass-key",
        text: "Try using the Compass as a key",
        nextSceneId: "entry-granted"
      }
    ]
  },
  
  "entry-granted": {
    id: "entry-granted",
    title: "The Way Opens",
    description: "When you place the central star of the Compass against the indentation, it fits perfectly. A soft chime resonates, and the doorway slides open, revealing a practical corridor beyond - likely a service passage that would allow you to bypass the more ceremonial spaces of the Citadel.",
    choices: [
      {
        id: "enter-service-passage",
        text: "Enter through the service passage",
        nextSceneId: "service-corridors"
      }
    ]
  },
  
  "service-corridors": {
    id: "service-corridors",
    title: "The Hidden Paths",
    description: "The service passage leads you into a network of practical corridors that likely run throughout the Citadel. They're well-designed but utilitarian, meant for efficiency rather than impression. The Compass continues to guide you, its direction suggesting you should head upward toward the higher levels.",
    choices: [
      {
        id: "follow-compass-guidance",
        text: "Follow the Compass's guidance upward",
        nextSceneId: "relic-chamber-approach"
      },
      {
        id: "explore-level",
        text: "Explore the current level briefly",
        nextSceneId: "useful-discovery",
        consequences: {
          addItems: ["realityAnchor"]
        }
      }
    ]
  },
  
  "useful-discovery": {
    id: "useful-discovery",
    title: "Keeper's Cache",
    description: "Your brief exploration leads you to what appears to be a supply room for the Citadel's caretakers. Most of the equipment is strange and unfamiliar, but on one shelf you spot what looks like a small device emitting a faint blue glow. It bears markings similar to those on the Stellar Compass.",
    choices: [
      {
        id: "examine-device",
        text: "Examine the glowing device",
        nextSceneId: "reality-anchor"
      }
    ]
  },
  
  "reality-anchor": {
    id: "reality-anchor",
    title: "Stabilizing Force",
    description: "The device appears to be a Reality Anchor - a tool used by Keepers to stabilize areas where reality had become thin or unstable. According to the inscriptions, it creates a field of normalized physics around the bearer, protecting them from reality distortions.",
    choices: [
      {
        id: "take-anchor",
        text: "Take the Reality Anchor and continue upward",
        nextSceneId: "relic-chamber-approach"
      }
    ]
  },
  
  "entrance-hall": {
    id: "entrance-hall",
    title: "Grandeur and Solemnity",
    description: "The entrance hall of the Obsidian Citadel is a vast, cathedral-like space with soaring ceilings and columns of black crystal. The floor is inlaid with an intricate mosaic depicting the cosmos as it was understood in ancient times, with the Nexus at its center. Passages lead off in multiple directions, and a grand staircase rises to the upper levels.",
    npcDialog: "The Heart of Twilight - the ceremonial center of diplomatic relations between our realms. From here, we must separate. The Light Vault is on the upper level, accessible via the northern staircase. We will take the southern passage to the Shadow Vault. Remember - one hour, then we rendezvous here.",
    choices: [
      {
        id: "confirm-plan",
        text: "Confirm the plan and prepare to separate",
        nextSceneId: "plan-confirmation"
      }
    ]
  },
  
  "plan-confirmation": {
    id: "plan-confirmation",
    title: "Parting Ways",
    description: "You confirm the rendezvous plan with the Shadow Weavers. Umbral extends a tendril of shadow that briefly touches your hand - a gesture that seems to be their equivalent of a handshake or salute.",
    npcDialog: "Good fortune, light-dweller. Should you encounter Guardian Sentinels, remember they respond to intention as much as action. The Shield Chamber will likely test you - face it with true courage. We will see you in one hour, with both our prizes secured.",
    choices: [
      {
        id: "northern-staircase",
        text: "Ascend the northern staircase toward the Light Vault",
        nextSceneId: "upper-corridors"
      }
    ]
  },
  
  "vault-level": {
    id: "vault-level",
    title: "The Division",
    description: "The transition platform delivers you to an elegantly proportioned hall with two opposing corridors - one bathed in soft blue light, the other in deep purple shadows. The architecture here is more refined than the functional undercroft, with artistic carvings and inlays adorning the walls and ceilings.",
    npcDialog: "Here we must part ways. The Light Vault lies at the end of the blue corridor; the Shadow Vault down the purple. The Compass will guide you true. We rendezvous here in one hour, regardless of outcome.",
    choices: [
      {
        id: "blue-corridor",
        text: "Take the blue corridor toward the Light Vault",
        nextSceneId: "light-approach"
      }
    ]
  },
  
  "upper-corridors": {
    id: "upper-corridors",
    title: "Pathways of Light",
    description: "The northern staircase leads you to a level where the architecture shifts subtly - more crystalline, with occasional emissions of soft blue light from the walls themselves. The corridors here form a complex pattern, but the Compass guides you unerringly toward what must be the Light Vault.",
    choices: [
      {
        id: "follow-compass-direct",
        text: "Follow the Compass's direct guidance",
        nextSceneId: "sentinel-encounter"
      },
      {
        id: "move-cautiously",
        text: "Move cautiously, watching for defenses",
        nextSceneId: "careful-approach"
      }
    ]
  },
  
  "sentinel-encounter": {
    id: "sentinel-encounter",
    title: "Ancient Guardian",
    description: "Rounding a corner, you come face to face with a Guardian Sentinel - a construct of light that vaguely resembles the humanoid form of the Guardians but simplified and more geometric. It hovers several inches above the floor, its featureless face turning toward you with obvious sensory awareness.",
    choices: [
      {
        id: "show-compass",
        text: "Immediately show the Stellar Compass",
        nextSceneId: "sentinel-recognition"
      },
      {
        id: "retreat-slowly",
        text: "Slowly back away to find another route",
        nextSceneId: "sentinel-pursuit",
        consequences: {
          health: -20
        }
      }
    ]
  },
  
  "sentinel-recognition": {
    id: "sentinel-recognition",
    title: "Ancient Protocol",
    description: "You hold up the Stellar Compass, which glows more intensely in the presence of the Sentinel. The construct pauses, then extends what appears to be a hand. A beam of light emerges from its palm, scanning the Compass thoroughly. After a moment, the Sentinel drifts aside, clearing the path forward.",
    choices: [
      {
        id: "continue-past",
        text: "Continue past the Sentinel",
        nextSceneId: "vault-anteroom"
      }
    ]
  },
  
  "sentinel-pursuit": {
    id: "sentinel-pursuit",
    title: "Guardian's Wrath",
    description: "As you attempt to retreat, the Sentinel suddenly emits a high-pitched tone. Its form brightens painfully, and before you can react, it releases a burst of concentrated light that strikes you like a physical force. The blast is more stunning than damaging, but it leaves you disoriented.",
    choices: [
      {
        id: "defend-with-compass",
        text: "Recover and defend yourself with the Compass",
        nextSceneId: "sentinel-recognition"
      }
    ]
  },
  
  "careful-approach": {
    id: "careful-approach",
    title: "Prudent Progress",
    description: "Moving with careful deliberation, you advance through the corridors, keeping alert for any signs of defensive systems. Your caution pays off when you notice subtle patterns in the floor crystals that might indicate pressure triggers. By observing the dust patterns, you're able to identify a safe path forward.",
    choices: [
      {
        id: "navigate-safely",
        text: "Navigate the safe path you've identified",
        nextSceneId: "vault-anteroom"
      }
    ]
  },
  
  "light-approach": {
    id: "light-approach",
    title: "Corridor of Illumination",
    description: "The blue corridor gradually brightens as you progress, the crystals in the walls emitting an increasingly intense light. The architecture becomes more distinctly Guardian in style - geometric patterns with occasional organic flourishes, all emphasizing harmony and balance. The Compass continues pointing forward, its signal growing stronger.",
    choices: [
      {
        id: "continue-forward",
        text: "Continue toward the Light Vault",
        nextSceneId: "light-guardian"
      }
    ]
  },
  
  "light-guardian": {
    id: "light-guardian",
    title: "The Vault's Keeper",
    description: "Near the end of the corridor, you encounter a construct of pure light - a geometric approximation of a humanoid form that hovers several inches above the floor. It appears to be a Guardian Sentinel, left to protect the vault in the absence of living Guardians.",
    npcDialog: "Identify purpose and authorization, visitor.",
    choices: [
      {
        id: "present-compass",
        text: "Present the Stellar Compass as authorization",
        nextSceneId: "sentinel-verification"
      },
      {
        id: "explain-mission",
        text: "Explain your mission to restore cosmic balance",
        nextSceneId: "sentinel-consideration"
      }
    ]
  },
  
  "sentinel-verification": {
    id: "sentinel-verification",
    title: "Ancient Recognition",
    description: "You hold up the Stellar Compass, which glows brightly in proximity to the Sentinel. The construct extends what appears to be a hand, emitting a beam of light that scans the Compass thoroughly. After a moment of processing, the Sentinel drifts to the side.",
    npcDialog: "Guardian artifact recognized. Access to Light Vault granted. Be advised: artifact retrieval protocol requires worthiness assessment. Proceed with awareness.",
    choices: [
      {
        id: "thank-sentinel",
        text: "Thank the Sentinel and proceed",
        nextSceneId: "vault-anteroom"
      }
    ]
  },
  
  "sentinel-consideration": {
    id: "sentinel-consideration",
    title: "Program Parameters",
    description: "You explain the crisis at the Cosmic Core, the Void breach, and your mission to collect the Seven Seals artifacts. The Sentinel remains motionless, apparently processing your words.",
    npcDialog: "Mission parameters align with preservation protocols. However, standard authentication still required. Present Guardian authorization.",
    choices: [
      {
        id: "now-present-compass",
        text: "Now present the Stellar Compass",
        nextSceneId: "sentinel-verification"
      }
    ]
  },
  
  "vault-anteroom": {
    id: "vault-anteroom",
    title: "Threshold of Power",
    description: "Beyond the Sentinel lies a small anteroom that serves as the final approach to the Light Vault. The chamber is circular, with a domed ceiling covered in astronomical charts rendered in glowing crystal. In the center of the room stands a pedestal with a hand-shaped impression.",
    choices: [
      {
        id: "examine-pedestal",
        text: "Examine the pedestal more closely",
        nextSceneId: "final-authorization"
      },
      {
        id: "approach-vault-door",
        text: "Approach the vault door directly",
        nextSceneId: "locked-vault"
      }
    ]
  },
  
  "locked-vault": {
    id: "locked-vault",
    title: "Sealed Chamber",
    description: "The vault door remains firmly sealed despite your approach. It appears to be made of a material similar to the Cosmic Key, with intricate patterns that occasionally shift and realign. There is no obvious locking mechanism or handle.",
    choices: [
      {
        id: "return-to-pedestal",
        text: "Return to examine the pedestal",
        nextSceneId: "final-authorization"
      }
    ]
  },
  
  "final-authorization": {
    id: "final-authorization",
    title: "The Final Key",
    description: "The pedestal's hand-shaped impression seems designed for a specific purpose - likely the final authorization needed to open the vault. Near the base of the pedestal, an inscription reads: 'To access the power within, one must offer truth of self.'",
    choices: [
      {
        id: "place-hand",
        text: "Place your hand in the impression",
        nextSceneId: "mind-scan"
      },
      {
        id: "use-compass-instead",
        text: "Try placing the Compass on the pedestal instead",
        nextSceneId: "complementary-keys"
      }
    ]
  },
  
  "mind-scan": {
    id: "mind-scan",
    title: "Soul Reading",
    description: "As your hand settles into the impression, a warm sensation flows up your arm and into your mind. You feel the distinct sense of being examined - not just your thoughts, but your intentions, past actions, and core values. The experience is intimate but not invasive, as if being understood rather than judged.",
    choices: [
      {
        id: "remain-open",
        text: "Remain open and honest to the examination",
        nextSceneId: "vault-opens"
      },
      {
        id: "guard-thoughts",
        text: "Attempt to guard certain thoughts or memories",
        nextSceneId: "scan-resistance",
        consequences: {
          health: -15
        }
      }
    ]
  },
  
  "scan-resistance": {
    id: "scan-resistance",
    title: "Resistance Detected",
    description: "As you attempt to shield parts of your mind from the scan, the warm sensation turns sharp and uncomfortable. The pedestal emits a warning pulse of energy that forces you to withdraw your hand, leaving you with a residual discomfort that borders on pain.",
    choices: [
      {
        id: "try-again-honestly",
        text: "Try again with complete openness",
        nextSceneId: "mind-scan"
      },
      {
        id: "try-compass-instead",
        text: "Try using the Compass instead",
        nextSceneId: "complementary-keys"
      }
    ]
  },
  
  "complementary-keys": {
    id: "complementary-keys",
    title: "Unexpected Resonance",
    description: "You place the Stellar Compass on the pedestal instead of your hand. Initially, nothing happens - then the Compass begins to vibrate and emit a bright glow. The hand impression on the pedestal transforms, reshaping to accommodate the Compass perfectly. When the Compass settles into the new impression, both it and the pedestal chime in perfect harmony.",
    choices: [
      {
        id: "wait-for-response",
        text: "Wait for the system's response",
        nextSceneId: "vault-opens"
      }
    ]
  },
  
  "vault-opens": {
    id: "vault-opens",
    title: "Access Granted",
    description: "Whether from your hand or the Compass, the pedestal accepts the authorization. The astronomical patterns on the ceiling begin to rotate, aligning into a new configuration. With a soft harmonic tone, the vault door slides open, revealing a chamber bathed in pure white light. Floating at its center is what must be the Void Shield - a disc of material that seems to both absorb and emit darkness and light in perfect balance.",
    choices: [
      {
        id: "enter-vault",
        text: "Enter the Light Vault",
        nextSceneId: "shield-chamber"
      }
    ]
  },
  
  "shield-chamber": {
    id: "shield-chamber",
    title: "The Trial Chamber",
    description: "As you step into the vault, the door slides closed behind you. The chamber is perfectly circular, with the walls, floor, and ceiling made of a crystalline material that emits soft white light. In the center, floating above a small pedestal, is the Void Shield - a disc about the size of a dinner plate, its surface shifting between perfect darkness and radiant light in a hypnotic pattern.",
    npcDialog: "Approach, seeker. To claim the Shield, you must face the trial.",
    choices: [
      {
        id: "step-forward",
        text: "Step forward toward the Shield",
        nextSceneId: "trial-begins"
      },
      {
        id: "ask-about-trial",
        text: "Ask about the nature of the trial",
        nextSceneId: "trial-explanation-2"
      }
    ]
  },
  
  "trial-explanation-2": {
    id: "trial-explanation-2",
    title: "The Voice Explains",
    description: "The disembodied voice - neither male nor female, but somehow familiar - responds to your question.",
    npcDialog: "The Void Shield protects against the darkness without and within. To wield it, you must demonstrate mastery over your own inner void - the fears and doubts that would unbalance you. The trial will manifest your deepest fear. You must face it with true courage.",
    choices: [
      {
        id: "prepare-self",
        text: "Center yourself and prepare to face your fears",
        nextSceneId: "trial-begins"
      }
    ]
  },
  
  "trial-begins": {
    id: "trial-begins",
    title: "The Mirror of Fear",
    description: "As you approach the Shield, the light in the chamber dims. The shifting patterns on the Shield's surface accelerate, then project outward, surrounding you with mist-like energy that begins to take shape based on your own subconscious. The chamber around you seems to fade, replaced by a scenario drawn from your deepest fears...",
    choices: [
      {
        id: "face-fear",
        text: "Face your manifested fear",
        nextSceneId: "courage-shown"
      },
      {
        id: "resist-illusion",
        text: "Attempt to resist or dispel the illusion",
        nextSceneId: "illusion-strengthens"
      }
    ]
  },
  
  "illusion-strengthens": {
    id: "illusion-strengthens",
    title: "Inescapable Truth",
    description: "As you try to fight against the manifestation rather than confronting it, the illusion only grows stronger and more vivid. The voice speaks again, now with a hint of warning.",
    npcDialog: "Resistance strengthens fear. The trial cannot be circumvented, only confronted. Face what lies within, or remain here indefinitely.",
    choices: [
      {
        id: "accept-and-face",
        text: "Accept the necessity and face your fear",
        nextSceneId: "courage-shown"
      }
    ]
  },
  
  "courage-shown": {
    id: "courage-shown",
    title: "The True Test",
    description: "You stand firm against your manifested fear, acknowledging its reality while refusing to be controlled by it. The experience is intense and deeply personal, forcing you to confront aspects of yourself you might prefer to ignore. Yet in facing this truth, you find a strength you didn't know you possessed.",
    npcDialog: "Courage is not the absence of fear, but action in its presence. You have shown true courage - not fearlessness, but mastery of fear. The Shield accepts you as its bearer.",
    choices: [
      {
        id: "reach-for-shield",
        text: "Reach for the Void Shield",
        nextSceneId: "shield-acquired",
        consequences: {
          addItems: ["voidShield"]
        }
      }
    ]
  },
  
  "shield-acquired": {
    id: "shield-acquired",
    title: "Power and Responsibility",
    description: "As your hand closes around the edge of the Shield, the manifestation dissipates completely. The Shield feels surprisingly light in your grip, vibrating subtly with contained power. Knowledge of its use flows into your mind - not complete mastery, but enough to understand its basic functions and limitations.",
    npcDialog: "The Void Shield now recognizes you as its bearer. It will protect against Void energies, creating a barrier that neither light nor dark can easily penetrate. Use it wisely - its power comes at the cost of the bearer's own energy.",
    choices: [
      {
        id: "thank-voice",
        text: "Thank the voice and prepare to leave",
        nextSceneId: "vault-exit"
      }
    ]
  },
  
  "vault-exit": {
    id: "vault-exit",
    title: "Mission Accomplished",
    description: "With the Void Shield secured, the vault door slides open once more, allowing you to exit. The anteroom appears unchanged, though the pedestal has reset to its original configuration. The Compass, if you used it, returns to your possession, its connection to you seemingly strengthened by the experience.",
    choices: [
      {
        id: "return-to-meeting",
        text: "Return to the rendezvous point",
        nextSceneId: "rendezvous-approach"
      }
    ]
  },
  
  "rendezvous-approach": {
    id: "rendezvous-approach",
    title: "The Return Journey",
    description: "With the Void Shield in your possession, you make your way back through the corridors toward the rendezvous point. The Sentinels you pass seem to regard you differently now - not just as an authorized visitor, but as a recognized bearer of one of their artifacts. Your path is unimpeded as you return to the meeting location.",
    choices: [
      {
        id: "watch-for-allies",
        text: "Watch for the Shadow Weavers at the rendezvous point",
        nextSceneId: "shadow-return"
      }
    ]
  },
  
  "shadow-return": {
    id: "shadow-return",
    title: "Successful Reunion",
    description: "You arrive at the rendezvous point to find the Shadow Weavers already waiting. They seem different somehow - their forms more defined, with clearer features and more purposeful movement. Umbral steps forward, and you notice a small crystalline object floating within their shadowy form - presumably the Soul Shadow they sought.",
    npcDialog: "You succeeded! I can sense the Shield's energy - a powerful artifact indeed. We too have found what we sought. The Soul Shadow of my lineage is restored to us, and with it, much of our history and knowledge. Our bargain is fulfilled on both sides.",
    choices: [
      {
        id: "confirm-success",
        text: "Confirm your success and prepare to leave",
        nextSceneId: "departure-plans"
      },
      {
        id: "ask-about-shadow",
        text: "Ask about the Soul Shadow's significance",
        nextSceneId: "shadow-explanation"
      }
    ]
  },
  
  "shadow-explanation": {
    id: "shadow-explanation",
    title: "Heritage Reclaimed",
    description: "Umbral's form ripples with what seems to be pride or satisfaction as they explain the crystal's significance.",
    npcDialog: "The Soul Shadow contains the compressed experiences and knowledge of our lineage stretching back millennia. When it was taken, we lost access to our own history, our techniques, our very identity. Its return means we can once again grow and develop as we were meant to. Perhaps, in time, it may even help bridge the understanding between our peoples once more.",
    choices: [
      {
        id: "express-hope",
        text: "Express hope for future cooperation",
        nextSceneId: "departure-plans"
      }
    ]
  },
  
  "departure-plans": {
    id: "departure-plans",
    title: "The Way Forward",
    description: "With both your objectives achieved, the group discusses how to proceed. The Void Shield pulses gently in your hands, seeming to respond to the nearness of the Soul Shadow with harmonious resonance rather than rejection.",
    npcDialog: "The Citadel has served its purpose for us both. Now you must return to the Guardian at the Cosmic Core with your prize, while we return to our people with ours. The Stellar Compass can guide you back to the Nexus - it remembers the path. Would you like us to accompany you to the edge of our realm?",
    choices: [
      {
        id: "accept-escort",
        text: "Accept their offer of escort",
        nextSceneId: "shadow-escort"
      },
      {
        id: "decline-escort",
        text: "Thank them but decline, preferring to use the Compass",
        nextSceneId: "independent-return"
      }
    ]
  },
  
  "shadow-escort": {
    id: "shadow-escort",
    title: "Allies in Twilight",
    description: "The Shadow Weavers guide you safely back through the Citadel and down the mountain path. Their knowledge of the terrain makes the journey much easier than your ascent. As you reach the base of the Crystal Shadows, they lead you to a natural arch formation that seems to shimmer slightly.",
    npcDialog: "This is a natural weak point between realms - a place where the barrier thins. Your Compass can open the way back to the Nexus from here. We... have appreciated your cooperation, light-dweller. Perhaps not all interactions between our peoples must be characterized by suspicion.",
    choices: [
      {
        id: "farewell-shadows",
        text: "Bid farewell to the Shadow Weavers",
        nextSceneId: "compass-portal"
      }
    ]
  },
  
  "independent-return": {
    id: "independent-return",
    title: "Self-Reliant Journey",
    description: "Preferring to rely on the Compass's guidance, you thank the Shadow Weavers but choose to make your own way back. They respect your decision, offering a formal gesture of farewell before melting back into the shadows. The Compass leads you confidently through the twilight landscape, eventually bringing you to a natural arch formation that seems to shimmer slightly.",
    choices: [
      {
        id: "examine-arch",
        text: "Examine the shimmering arch",
        nextSceneId: "realm-boundary"
      }
    ]
  },
  
  "realm-boundary": {
    id: "realm-boundary",
    title: "The Thinning Veil",
    description: "The arch appears to be a natural thin point between realms - a place where the barrier between the Shadow Realm and the Nexus is at its weakest. The Compass's rings begin to spin more rapidly as you approach, suggesting it can interact with this phenomenon.",
    choices: [
      {
        id: "activate-compass",
        text: "Use the Compass to activate the crossing point",
        nextSceneId: "compass-portal"
      }
    ]
  },
  
  "compass-portal": {
    id: "compass-portal",
    title: "Gateway Home",
    description: "You hold up the Stellar Compass toward the shimmering arch. Its rings spin faster and faster until they blur into a disc of light. The shimmering intensifies, and a portal opens within the arch, showing the now-familiar sight of the Guardian Sanctum at the heart of the Cosmic Nexus.",
    choices: [
      {
        id: "step-through",
        text: "Step through the portal to the Nexus",
        nextSceneId: "elara-waiting"
      }
    ]
  },
  
  "elara-waiting": {
    id: "elara-waiting",
    title: "Return to the Core",
    description: "You step through the portal and find yourself back in the Chamber of Stars at the heart of the Nexus. Elara waits beside the Core, which seems to have darkened even further in your absence. Her face lights up with hope when she sees the Shield in your hands.",
    npcDialog: "You found it! The Void Shield - one of the most crucial artifacts for our plan. This will allow us to create a temporary barrier around the Core while we implement the remaining Seals. What of your journey? Did you encounter difficulties?",
    choices: [
      {
        id: "recount-adventure",
        text: "Share the details of your Shadow Realm journey",
        nextSceneId: "sharing-insights"
      },
      {
        id: "ask-about-core",
        text: "Ask about the Core's deteriorating condition",
        nextSceneId: "worsening-situation"
      }
    ]
  },
  
  "sharing-insights": {
    id: "sharing-insights",
    title: "Cultural Exchange",
    description: "You tell Elara about your experiences in the Shadow Realm, including your interactions with the Shadow Weavers and the exchange that took place at the Citadel. She listens with great interest, especially to the parts about the Soul Shadow's significance.",
    npcDialog: "This is fascinating. We Guardians have long misunderstood the Shadow Weavers - seeing them as creatures of chaos rather than simply a different form of order. Perhaps when this crisis is resolved, there may be opportunity for renewed diplomatic relations. But first, we must continue our quest for the remaining artifacts. The Reality Anchor you found will be especially helpful for the next realm we must visit.",
    choices: [
      {
        id: "discuss-next-steps",
        text: "Discuss the next steps in your quest",
        nextSceneId: "planning-session"
      }
    ]
  },
  
  "worsening-situation": {
    id: "worsening-situation",
    title: "Racing Against Time",
    description: "Elara's expression grows grave as she looks to the Core, where the Void corruption has spread even further during your absence. The tendrils of darkness have nearly reached the innermost layers, with only a thin shell of light remaining untouched.",
    npcDialog: "It worsens by the hour. My strength wanes with each moment spent maintaining the barrier. We have perhaps enough time to retrieve two more artifacts before the corruption becomes irreversible. The Void Shield will help tremendously, but it's not enough alone. We must prioritize the Chronomaster's Watch next - it can temporarily freeze the corruption's spread, buying us precious time.",
    choices: [
      {
        id: "agree-to-continue",
        text: "Agree to continue the quest immediately",
        nextSceneId: "planning-session"
      },
      {
        id: "ask-for-rest",
        text: "Ask for a brief rest before continuing",
        nextSceneId: "restoration-period",
        consequences: {
          health: 100
        }
      }
    ]
  },
  
  "restoration-period": {
    id: "restoration-period",
    title: "Brief Respite",
    description: "Understanding your need for recovery, Elara guides you to a small meditation chamber near the Core room. 'Rest here briefly,' she suggests. 'The chamber's energies will help restore your strength.' The room is peaceful, filled with soft light that seems to seep into your very being, healing and rejuvenating you.",
    choices: [
      {
        id: "return-refreshed",
        text: "Return to Elara refreshed and ready",
        nextSceneId: "planning-session"
      }
    ]
  },
  
  "planning-session": {
    id: "planning-session",
    title: "The Next Artifact",
    description: "Elara unfolds another section of the celestial map, revealing more interconnected realms. She points to a location that pulses with a strange, shifting temporal energy.",
    npcDialog: "The Chronomaster's Watch lies in the Flux Realm - a place where time flows... differently. Sometimes faster, sometimes slower, occasionally backward. The Reality Anchor you found will help stabilize your personal timeflow, but be cautious - prolonged exposure to temporal flux can be disorienting or even dangerous. The Compass will guide you, as always.",
    choices: [
      {
        id: "prepare-for-departure",
        text: "Prepare for departure to the Flux Realm",
        nextSceneId: "time-for-a-break"
      }
    ]
  },
  
  "time-for-a-break": {
    id: "time-for-a-break",
    title: "Journey's Pause",
    description: "As you prepare for the next phase of your journey, you realize this might be a good moment to take stock of what you've accomplished and prepare yourself mentally for the challenges ahead. Your quest continues, with new realms to explore and artifacts to find in the ongoing mission to save the Cosmic Core.",
    npcDialog: "Rest for a moment, brave traveler. You've accomplished much already - finding the Stellar Compass and the Void Shield puts us closer to our goal of restoring balance. When you're ready, we'll continue the quest for the remaining artifacts: the Chronomaster's Watch, the Harmonic Key, the Creation Quill, and beyond.",
    choices: [
      {
        id: "acknowledge-journey",
        text: "Acknowledge how far you've come and what lies ahead",
        nextSceneId: "to-be-continued"
      }
    ]
  },
  
  "to-be-continued": {
    id: "to-be-continued",
    title: "To Be Continued...",
    description: "Your cosmic quest has only just begun. With two powerful artifacts secured and allies made in unexpected places, you stand ready to face whatever challenges the multiverse presents next. The Cosmic Core still needs saving, and many realms await your exploration.",
    imagePath: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    npcDialog: "Rest now, but know that soon you must journey onward. The fate of countless realities depends on your continued courage and determination. When next we meet, new adventures and greater challenges await.",
    choices: [
      {
        id: "ready-for-more",
        text: "Express readiness for future adventures",
        nextSceneId: "start"
      }
    ]
  }
};

export const initialGameState = {
  currentSceneId: "start",
  health: 100,
  maxHealth: 100,
  inventory: [],
  unlockedScenes: [],
  seenText: [],
  playedTime: 0
};
