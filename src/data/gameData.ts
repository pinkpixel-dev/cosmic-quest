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
        nextSceneId: "portal
