# Jurassic World Alive MVP - Simplified Build Plan

## 🎯 MVP Core Features (Build in 2-4 Weeks)

**Essential Features Only:**
1. Map with GPS tracking
2. Dinosaur spawns you can collect
3. Basic dinosaur collection/inventory
4. Simple battle system (PvE only)
5. Basic progression (leveling dinosaurs)

---

## 🚀 Simplified Phase-by-Phase Prompts

### **PHASE 1: Project Setup (Day 1)**

```
Create a React Native project for a location-based dinosaur game MVP with:
- Basic folder structure: /screens, /components, /data, /utils
- React Navigation with 3 tabs: Map, Collection, Battle
- Mock location data for testing (so I can test without walking around)
- Package.json with: react-native-maps, @react-native-community/geolocation, react-navigation
- Simple Context API for global state (user location, collected dinosaurs, resources)
Keep it simple - no TypeScript needed for MVP
```

---

### **PHASE 2: Map & Spawns (Days 2-3)**

```
Build a simple map screen with:
1. Map showing user's current location (use mock location for testing)
2. 5-10 dinosaur spawn markers within 500m radius that regenerate every 5 minutes
3. When user taps a spawn marker within 50m, show a popup with:
   - Dinosaur name and image (use emoji or placeholder images)
   - "Collect DNA" button
4. Collecting gives random 10-50 DNA for that species
5. Remove spawn marker after collection
6. Show user's DNA count at top of screen

Create a simple dinosaurs.json file with 20 dinosaurs (just name, rarity: common/rare/epic, and emoji for now)
Keep UI minimal - just functional
```

---

### **PHASE 3: Collection Screen (Days 4-5)**

```
Create a dinosaur collection/inventory screen with:
1. Grid of cards showing all collected dinosaurs
2. Each card shows:
   - Dinosaur name and emoji/image
   - Current level (starts at 1)
   - DNA collected / DNA needed to level up
   - Current HP and Attack stats
3. Tap card to see detail view with:
   - Larger image
   - All stats (HP, Attack, Speed)
   - "Level Up" button (costs DNA + coins)
4. Gray out dinosaurs that haven't been collected yet (need 50 DNA to unlock)
5. Simple resource counter at top (DNA by species, Coins)

Level up formula:
- DNA needed = 50 * current_level
- Coin cost = 100 * current_level
- Stats increase by 10% per level

Start player with 10,000 coins for testing
```

---

### **PHASE 4: Simple Battle System (Days 6-8)**

```
Build a basic turn-based battle screen:
1. Player picks 4 dinosaurs from collection for their team
2. AI opponent has 4 random dinosaurs (similar level to player's average)
3. Battle UI shows:
   - Both current dinosaurs with HP bars
   - Player's 3 remaining dinosaurs at bottom
   - 3 buttons: Attack, Special Move, Switch Dinosaur
4. Combat mechanics:
   - Faster dinosaur (speed stat) goes first each turn
   - Attack: Deal damage = your attack - (enemy attack * 0.1)
   - Special Move: Deal 1.5x damage, 3 turn cooldown
   - Switch: Swap to another dinosaur, lose your turn
5. Battle ends when all 4 dinosaurs on one side faint
6. Victory gives: 500 coins + 50 XP + random DNA (50-100)

Simple AI: 70% attack, 20% special move, 10% switch randomly
Keep animations minimal - just show damage numbers
```

---

### **PHASE 5: Basic Progression (Days 9-10)**

```
Add simple progression systems:
1. Player level and XP:
   - Gain XP from battles and collecting DNA
   - Level up every 1000 XP
   - Show level and progress bar in Collection screen
2. Daily login reward:
   - 1000 coins + 1 random rare dinosaur DNA (100)
   - Simple popup on app open
3. Simple achievement tracking:
   - Total dinosaurs collected
   - Total battles won
   - Highest level dinosaur
   - Display on Collection screen
4. Add a "Shop" tab with:
   - Buy coins with mock purchases (just buttons for MVP)
   - Buy DNA packs (100 random DNA for 500 coins)

No need for complex backend - store everything locally with AsyncStorage
```

---

## 🗂️ Support Files You'll Need

### **Quick Dinosaur Data**

```
Generate a simple dinosaurs.json with 20 dinosaurs:
- 10 Common (T-Rex, Velociraptor, Triceratops, etc.)
- 6 Rare (Spinosaurus, Allosaurus, etc.)
- 4 Epic (Indoraptor, Giganotosaurus, etc.)

Each dinosaur needs:
{
  "id": "trex",
  "name": "Tyrannosaurus Rex",
  "rarity": "common",
  "emoji": "🦖",
  "baseHP": 1500,
  "baseAttack": 800,
  "baseSpeed": 100
}

Make stats balanced where Epic > Rare > Common
```

---

### **Simple Spawn System**

```
Create a utility function that:
1. Generates 8 random spawn points in a circle around user location (200-500m away)
2. Each spawn is a random dinosaur weighted by rarity (70% common, 25% rare, 5% epic)
3. Spawns refresh every 5 minutes
4. Returns array of {lat, lng, dinosaurId, spawnTime}

Use Math.random() for simplicity - no complex algorithms needed for MVP
```

---

## 📱 MVP User Flow

1. **Open app** → See map with nearby dinosaur spawns
2. **Tap spawn** → Collect DNA (need 50 to unlock that dinosaur)
3. **Go to Collection** → See collected dinosaurs, level them up with DNA + coins
4. **Go to Battle** → Pick 4 dinosaurs, fight AI opponent
5. **Win battle** → Get coins and DNA rewards
6. **Repeat** → Collect more dinosaurs, level them up, win battles

---

## ⚡ Quick Start Order

**Week 1:**
- Day 1: Setup project
- Days 2-3: Map + spawns working
- Days 4-5: Collection screen working

**Week 2:**
- Days 6-8: Battle system working
- Days 9-10: Add progression + polish

---

## 🎨 MVP Shortcuts (Keep It Simple!)

1. **Use emojis** instead of real dinosaur images (🦖🦕🐊)
2. **No backend** - store everything in AsyncStorage/local storage
3. **No AR** - just show dinosaur emoji/image on screen
4. **No multiplayer** - only battle AI opponents
5. **No authentication** - one local player per device
6. **Mock location** - use fake GPS coordinates for testing
7. **No animations** - just functional UI updates
8. **No sounds** - just visual feedback

---

## 🔧 One-Prompt Shortcut (If You Want Everything At Once)

```
Create a React Native MVP for a location-based dinosaur collection game:

CORE FEATURES:
- Map screen with user location and 8 dinosaur spawn markers nearby
- Tap spawn to collect DNA (10-50 random amount)
- Collection screen showing all 20 dinosaurs (grid of cards)
- Need 50 DNA to unlock each dinosaur, then can level up with DNA + coins
- Battle screen: pick 4 dinosaurs, fight AI, turn-based combat
- Simple stats: HP, Attack, Speed
- Combat: faster goes first, Attack button, damage = atk - def*0.1
- Win battles to earn coins and DNA

TECH STACK:
- React Native with React Navigation (3 tabs)
- react-native-maps for map
- AsyncStorage for data persistence
- Context API for state management
- Mock GPS data for testing

KEEP IT SIMPLE:
- Use emojis for dinosaur images
- No backend/API needed
- No auth needed
- Store everything locally
- Minimal animations
- 20 dinosaurs total (common/rare/epic)

Include complete code with all screens, navigation, and game logic working.
```

---

## ✅ MVP Success Criteria

Your MVP is done when:
- ✅ You can see a map with dinosaur spawns
- ✅ You can collect DNA by tapping spawns
- ✅ You can unlock and level up dinosaurs
- ✅ You can battle AI with your team
- ✅ Battles feel fun and strategic
- ✅ You can earn resources to progress

**Then** you can add: real images, multiplayer, AR, backend, etc.

This MVP should take 2-4 weeks with AI assistance! 🦖
