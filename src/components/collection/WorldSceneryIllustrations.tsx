import React from 'react';

/**
 * World 1: The Pearl Kingdom Environment Scenery
 * Features: Glowing turquoise water, coral towers, floating pearls, tiny swimming fish, and luminous sea plants.
 * Palette: turquoise, ocean blue, pearl white.
 */
export const PearlKingdomScene: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-inner ${className}`}>
      <svg
        viewBox="0 0 800 480"
        className="w-full h-full object-cover"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="The Pearl Kingdom underwater scenery"
      >
        <defs>
          <linearGradient id="oceanLagoonBg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0E4856" />
            <stop offset="40%" stop-color="#146B7C" />
            <stop offset="75%" stop-color="#168E9B" />
            <stop offset="100%" stop-color="#55D1C5" />
          </linearGradient>
          <radialGradient id="sunkenLightRays" cx="50%" cy="0%" r="90%">
            <stop offset="0%" stop-color="#E2FAF8" stop-opacity="0.45" />
            <stop offset="60%" stop-color="#7BE2D6" stop-opacity="0.15" />
            <stop offset="100%" stop-color="#0E4856" stop-opacity="0" />
          </radialGradient>
          <linearGradient id="coralTowerGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FF9E8A" />
            <stop offset="50%" stop-color="#E26D5C" />
            <stop offset="100%" stop-color="#8E2D41" />
          </linearGradient>
          <linearGradient id="coralTowerGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FDECE8" />
            <stop offset="60%" stop-color="#FFB3A3" />
            <stop offset="100%" stop-color="#D45B6A" />
          </linearGradient>
          <radialGradient id="pearlGlowSphere" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stop-color="#FFFFFF" />
            <stop offset="50%" stop-color="#E8FDFB" />
            <stop offset="85%" stop-color="#9EE8DF" />
            <stop offset="100%" stop-color="#4DB6AC" />
          </radialGradient>
          <filter id="pearlBiolumGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="glow" />
            <feComposite in="SourceGraphic" in2="glow" operator="over" />
          </filter>
        </defs>

        {/* Deep Ocean Lagoon Backdrop */}
        <rect width="800" height="480" fill="url(#oceanLagoonBg)" />
        <rect width="800" height="480" fill="url(#sunkenLightRays)" />

        {/* Sunken Caustic Light Beams */}
        <polygon points="120,0 220,0 320,480 180,480" fill="#FFFFFF" opacity="0.08" />
        <polygon points="380,0 460,0 580,480 440,480" fill="#FFFFFF" opacity="0.07" />
        <polygon points="620,0 720,0 800,480 700,480" fill="#FFFFFF" opacity="0.06" />

        {/* Distant Sea Ridge and Coral Reef Silhouettes */}
        <path
          d="M0 380 C120 360 220 400 360 370 C520 340 640 380 800 350 L800 480 L0 480 Z"
          fill="#0C3D49"
          opacity="0.85"
        />

        {/* Coral Spire Towers (Left, Center, Right) */}
        {/* Left Spire */}
        <path
          d="M140 480 L140 260 C140 230 160 210 170 190 C180 210 200 230 200 260 L200 480 Z"
          fill="url(#coralTowerGrad1)"
        />
        <circle cx="170" cy="190" r="14" fill="url(#pearlGlowSphere)" filter="url(#pearlBiolumGlow)" />
        <ellipse cx="170" cy="270" rx="10" ry="16" fill="#0C4A57" opacity="0.8" />
        <ellipse cx="170" cy="330" rx="12" ry="20" fill="#0C4A57" opacity="0.8" />

        {/* Central Coral Cathedral */}
        <path
          d="M320 480 L320 200 C320 160 360 130 380 90 C400 130 440 160 440 200 L440 480 Z"
          fill="url(#coralTowerGrad2)"
        />
        {/* Central Crown Pearl */}
        <circle cx="380" cy="85" r="22" fill="url(#pearlGlowSphere)" filter="url(#pearlBiolumGlow)" />
        {/* Arched Sea Windows in Central Tower */}
        <path d="M360 220 C360 195 400 195 400 220 V260 H360 Z" fill="#0E3D48" />
        <circle cx="380" cy="235" r="6" fill="#8CE8DD" filter="url(#pearlBiolumGlow)" />
        <path d="M350 310 C350 280 410 280 410 310 V360 H350 Z" fill="#0E3D48" />
        <circle cx="380" cy="330" r="8" fill="#8CE8DD" filter="url(#pearlBiolumGlow)" />

        {/* Flanking Secondary Coral Minarets */}
        <path
          d="M480 480 L480 280 C480 250 500 235 510 215 C520 235 540 250 540 280 L540 480 Z"
          fill="url(#coralTowerGrad1)"
        />
        <circle cx="510" cy="215" r="12" fill="url(#pearlGlowSphere)" filter="url(#pearlBiolumGlow)" />

        {/* Luminous Sea Kelp and Anemones */}
        <path
          d="M60 480 C30 400 90 350 50 280 C20 350 60 420 50 480 Z"
          fill="#40BF9F"
          opacity="0.85"
        />
        <path
          d="M80 480 C110 390 60 320 90 250 C110 330 80 410 90 480 Z"
          fill="#7CE0C3"
          opacity="0.75"
        />
        <path
          d="M710 480 C740 390 680 330 720 260 C690 340 730 410 720 480 Z"
          fill="#40BF9F"
          opacity="0.85"
        />

        {/* Bioluminescent Sea Floor Blossoms */}
        <circle cx="240" cy="430" r="10" fill="#FFB3A3" filter="url(#pearlBiolumGlow)" />
        <circle cx="260" cy="445" r="7" fill="#7EE0D4" filter="url(#pearlBiolumGlow)" />
        <circle cx="590" cy="420" r="12" fill="#FF9E8A" filter="url(#pearlBiolumGlow)" />
        <circle cx="620" cy="440" r="8" fill="#A8F0E5" filter="url(#pearlBiolumGlow)" />

        {/* Schools of Swimming Golden & Turquoise Fairy Fish */}
        {/* School 1 (top right) */}
        <g fill="#FFE58F" opacity="0.9">
          <path d="M620 140 C635 135 645 140 655 138 L665 132 L662 140 L665 148 L655 142 Z" />
          <path d="M645 160 C660 155 670 160 680 158 L690 152 L687 160 L690 168 L680 162 Z" />
          <path d="M610 175 C625 170 635 175 645 173 L655 167 L652 175 L655 183 L645 177 Z" />
        </g>
        {/* School 2 (mid left) */}
        <g fill="#A8F0E5" opacity="0.85">
          <path d="M210 110 C195 105 185 110 175 108 L165 102 L168 110 L165 118 L175 112 Z" />
          <path d="M235 130 C220 125 210 130 200 128 L190 122 L193 130 L190 138 L200 132 Z" />
        </g>

        {/* Floating Bioluminescent Pearls Drifting Upward */}
        <circle cx="280" cy="210" r="8" fill="url(#pearlGlowSphere)" filter="url(#pearlBiolumGlow)" />
        <circle cx="310" cy="140" r="5" fill="#FFFFFF" filter="url(#pearlBiolumGlow)" />
        <circle cx="460" cy="160" r="9" fill="url(#pearlGlowSphere)" filter="url(#pearlBiolumGlow)" />
        <circle cx="490" cy="100" r="6" fill="#FFFFFF" filter="url(#pearlBiolumGlow)" />
        <circle cx="210" cy="310" r="7" fill="url(#pearlGlowSphere)" filter="url(#pearlBiolumGlow)" />

        {/* Gentle Rising Sea Bubbles */}
        <circle cx="160" cy="380" r="4" fill="#FFFFFF" opacity="0.5" />
        <circle cx="165" cy="350" r="3" fill="#FFFFFF" opacity="0.6" />
        <circle cx="390" cy="420" r="5" fill="#FFFFFF" opacity="0.5" />
        <circle cx="520" cy="360" r="4" fill="#FFFFFF" opacity="0.6" />
      </svg>
    </div>
  );
};

/**
 * World 2: The Cloud Village Environment Scenery
 * Features: Dreamy village floating among fluffy clouds, tiny pastel houses, suspended islands, flower gardens, little bridges in the sky.
 * Palette: powder blue, lavender, cream, and peach.
 */
export const CloudVillageScene: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-inner ${className}`}>
      <svg
        viewBox="0 0 800 480"
        className="w-full h-full object-cover"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="The Cloud Village sky scenery"
      >
        <defs>
          <linearGradient id="cloudSkySunset" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#8DB6E8" />
            <stop offset="35%" stop-color="#C7B2E4" />
            <stop offset="70%" stop-color="#F7C6B8" />
            <stop offset="100%" stop-color="#FFEED6" />
          </linearGradient>
          <radialGradient id="skySunGlow" cx="50%" cy="40%" r="55%">
            <stop offset="0%" stop-color="#FFFDF5" />
            <stop offset="40%" stop-color="#FFE4B5" stop-opacity="0.8" />
            <stop offset="100%" stop-color="#F7C6B8" stop-opacity="0" />
          </radialGradient>
          <linearGradient id="floatingIslandGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#8ECBA5" />
            <stop offset="25%" stop-color="#65A683" />
            <stop offset="70%" stop-color="#7B6D8D" />
            <stop offset="100%" stop-color="#4F4263" />
          </linearGradient>
          <filter id="cloudSoftGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="glow" />
            <feComposite in="SourceGraphic" in2="glow" operator="over" />
          </filter>
        </defs>

        {/* Sunset Sky Gradient & Warm Sun Sphere */}
        <rect width="800" height="480" fill="url(#cloudSkySunset)" />
        <circle cx="400" cy="180" r="110" fill="url(#skySunGlow)" />

        {/* Distant Cumulonimbus Cloud Banks */}
        <path
          d="M0 320 C60 300 120 310 180 290 C220 260 290 260 330 290 C380 270 460 270 510 300 C580 280 660 290 720 310 C760 290 800 300 800 320 V480 H0 Z"
          fill="#FFFFFF"
          opacity="0.45"
        />

        {/* Main Floating Island Center */}
        {/* Island Rock Base Underneath */}
        <polygon points="260,250 540,250 490,360 410,410 330,360" fill="url(#floatingIslandGrad)" />
        {/* Island Grassy Meadow Top */}
        <ellipse cx="400" cy="250" rx="145" ry="32" fill="#88D4A8" />
        <ellipse cx="400" cy="246" rx="135" ry="24" fill="#A7E8C1" />

        {/* Tiny Pastel Houses on Main Island */}
        {/* House 1: Lavender Cottage */}
        <rect x="310" y="200" width="45" height="40" rx="4" fill="#D7C4EB" stroke="#FFFFFF" strokeWidth="2" />
        <polygon points="305,200 332,175 360,200" fill="#FF9E8A" stroke="#FFFFFF" strokeWidth="2" />
        <rect x="328" y="222" width="12" height="18" rx="2" fill="#583F72" />
        <circle cx="332" cy="190" r="5" fill="#FFE58F" />

        {/* House 2: Center Powder Blue Tower */}
        <rect x="380" y="170" width="55" height="70" rx="6" fill="#BBE1FA" stroke="#FFFFFF" strokeWidth="2" />
        <polygon points="370,170 407,130 445,170" fill="#F48B76" stroke="#FFFFFF" strokeWidth="2" />
        <circle cx="407" cy="125" r="5" fill="#FFFFFF" />
        {/* Windmill Sails on Tower */}
        <circle cx="407" cy="155" r="4" fill="#FFE58F" />
        <line x1="407" y1="155" x2="435" y2="135" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="407" y1="155" x2="379" y2="175" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="407" y1="155" x2="387" y2="135" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="407" y1="155" x2="427" y2="175" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />

        {/* House 3: Cream & Peach Bakery Cottage */}
        <rect x="455" y="205" width="40" height="35" rx="4" fill="#FFF2E2" stroke="#FFFFFF" strokeWidth="2" />
        <polygon points="450,205 475,185 500,205" fill="#A8D5BA" stroke="#FFFFFF" strokeWidth="2" />
        <rect x="470" y="225" width="10" height="15" rx="2" fill="#FF9E8A" />

        {/* Flower Gardens & Pastel Lanterns on Main Island */}
        <circle cx="295" cy="250" r="4" fill="#FFB3A3" />
        <circle cx="302" cy="248" r="3.5" fill="#FFF275" />
        <circle cx="510" cy="252" r="4" fill="#FFB3A3" />
        <circle cx="518" cy="250" r="3.5" fill="#BBE1FA" />

        {/* Secondary Floating Island (Left) with Rope Bridge */}
        <polygon points="80,280 220,280 190,345 130,370 95,330" fill="url(#floatingIslandGrad)" />
        <ellipse cx="150" cy="280" rx="70" ry="18" fill="#88D4A8" />
        {/* Left Island Tiny Gazebo */}
        <polygon points="135,260 150,240 165,260" fill="#FF9E8A" />
        <line x1="140" y1="260" x2="140" y2="275" stroke="#FFFFFF" strokeWidth="2" />
        <line x1="160" y1="260" x2="160" y2="275" stroke="#FFFFFF" strokeWidth="2" />

        {/* Arched Rope Bridge connecting Left & Main Islands */}
        <path d="M210 278 C250 288 270 286 300 258" stroke="#FFE4B5" strokeWidth="3" fill="none" strokeDasharray="4 2" />
        <path d="M210 284 C250 294 270 292 300 264" stroke="#D7C4EB" strokeWidth="2" fill="none" />

        {/* Secondary Floating Island (Right) with Sky Pier */}
        <polygon points="590,270 730,270 700,340 640,365 605,320" fill="url(#floatingIslandGrad)" />
        <ellipse cx="660" cy="270" rx="70" ry="18" fill="#88D4A8" />
        {/* Right Island Cottage */}
        <rect x="645" y="240" width="30" height="25" rx="3" fill="#D7C4EB" stroke="#FFFFFF" strokeWidth="1.5" />
        <polygon points="640,240 660,225 680,240" fill="#FFB3A3" stroke="#FFFFFF" strokeWidth="1.5" />

        {/* Sky Bridge connecting Main & Right Islands */}
        <path d="M510 258 C540 284 565 284 600 272" stroke="#FFE4B5" strokeWidth="3" fill="none" strokeDasharray="4 2" />

        {/* Miniature Floating Cloud Islands & Fluffy Puffs */}
        {/* Foreground Fluffy Cloud Bank */}
        <path
          d="M0 420 C50 380 120 380 180 400 C240 370 320 370 380 395 C450 360 550 365 620 395 C680 370 750 380 800 410 V480 H0 Z"
          fill="#FFFFFF"
          opacity="0.95"
        />

        {/* Drifting Petals & Zephyr Sparkles */}
        <circle cx="250" cy="180" r="3" fill="#FFF275" filter="url(#cloudSoftGlow)" />
        <circle cx="560" cy="190" r="3.5" fill="#FFB3A3" filter="url(#cloudSoftGlow)" />
        <circle cx="340" cy="120" r="2.5" fill="#FFFFFF" />
        <circle cx="680" cy="160" r="3" fill="#FFFFFF" />
      </svg>
    </div>
  );
};

/**
 * World 3: The Dinosaur Garden Environment Scenery
 * Features: Peaceful prehistoric garden with adorable baby dinosaurs, oversized tropical plants, tiny flowers, and sparkling crystal streams.
 * Palette: sage green, soft yellow, coral, and warm cream.
 */
export const DinosaurGardenScene: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-inner ${className}`}>
      <svg
        viewBox="0 0 800 480"
        className="w-full h-full object-cover"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="The Dinosaur Garden prehistoric scenery"
      >
        <defs>
          <linearGradient id="dinoCanopySky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#FDF6D8" />
            <stop offset="40%" stop-color="#E8F4D9" />
            <stop offset="75%" stop-color="#C2E7D0" />
            <stop offset="100%" stop-color="#84C7A4" />
          </linearGradient>
          <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#A8F0E5" />
            <stop offset="50%" stop-color="#6ED1C6" />
            <stop offset="100%" stop-color="#3FA69A" />
          </linearGradient>
          <radialGradient id="babySauropodGrad" cx="45%" cy="35%" r="60%">
            <stop offset="0%" stop-color="#A7E4C4" />
            <stop offset="70%" stop-color="#69B98E" />
            <stop offset="100%" stop-color="#4B906A" />
          </radialGradient>
          <radialGradient id="babyTriGrad" cx="45%" cy="35%" r="60%">
            <stop offset="0%" stop-color="#FFD1B3" />
            <stop offset="65%" stop-color="#F48B76" />
            <stop offset="100%" stop-color="#D45D47" />
          </radialGradient>
          <filter id="dinoWarmSunlight" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="glow" />
            <feComposite in="SourceGraphic" in2="glow" operator="over" />
          </filter>
        </defs>

        {/* Sunlit Prehistoric Canopy Backdrop */}
        <rect width="800" height="480" fill="url(#dinoCanopySky)" />

        {/* Distant Misty Ancient Hills */}
        <path
          d="M0 260 C120 220 220 250 350 210 C480 180 620 230 800 200 V480 H0 Z"
          fill="#A4D7B9"
          opacity="0.6"
        />

        {/* Sunbeams filtering through ancient leaves */}
        <polygon points="100,0 180,0 280,480 160,480" fill="#FFFDE0" opacity="0.25" />
        <polygon points="400,0 470,0 560,480 460,480" fill="#FFFDE0" opacity="0.22" />

        {/* Sparkling Prehistoric Stream flowing down */}
        <path
          d="M360 210 C380 260 320 310 390 370 C440 410 420 450 460 480 H330 C300 440 310 390 280 340 C260 300 320 250 330 210 Z"
          fill="url(#streamGrad)"
        />
        {/* Stream Water Ripples & Shimmers */}
        <path d="M340 330 C360 325 380 335 400 330" stroke="#FFFFFF" strokeWidth="2.5" fill="none" opacity="0.75" />
        <path d="M370 390 C390 385 410 395 430 390" stroke="#FFFFFF" strokeWidth="2.5" fill="none" opacity="0.75" />

        {/* Stepping River Stones */}
        <ellipse cx="340" cy="350" rx="14" ry="8" fill="#DFCEB7" stroke="#FFFFFF" strokeWidth="1.5" />
        <ellipse cx="375" cy="380" rx="16" ry="9" fill="#DFCEB7" stroke="#FFFFFF" strokeWidth="1.5" />
        <ellipse cx="400" cy="425" rx="18" ry="10" fill="#DFCEB7" stroke="#FFFFFF" strokeWidth="1.5" />

        {/* Oversized Prehistoric Tropical Ferns & Monsteras (Left) */}
        <path
          d="M0 160 C80 180 120 240 100 340 C60 280 20 240 0 220 Z"
          fill="#448B66"
        />
        <path
          d="M40 100 C140 130 180 220 150 340 C110 260 70 200 40 170 Z"
          fill="#5CB488"
        />
        <path
          d="M120 180 C200 170 240 240 220 350 C180 290 140 240 120 220 Z"
          fill="#76CE9F"
        />

        {/* ADORABLE BABY SAUROPOD DINOSAUR (Center-Left near Stream) */}
        <g id="babySauropod">
          {/* Gentle Plump Body */}
          <ellipse cx="270" cy="340" rx="42" ry="30" fill="url(#babySauropodGrad)" />
          {/* Sturdy Cute Little Legs */}
          <rect x="245" y="355" width="14" height="22" rx="7" fill="#4B906A" />
          <rect x="278" y="355" width="14" height="22" rx="7" fill="#4B906A" />
          {/* Little Curled Tail */}
          <path d="M235 340 C210 345 195 330 200 315 C205 325 220 332 235 332 Z" fill="#69B98E" />
          {/* Graceful Long Baby Neck */}
          <path d="M295 335 C310 310 305 270 315 240 C322 270 315 310 305 335 Z" fill="url(#babySauropodGrad)" />
          {/* Cute Rounded Baby Head */}
          <ellipse cx="320" cy="235" rx="18" ry="14" fill="url(#babySauropodGrad)" />
          {/* Big Expressive Chocolate Eye */}
          <circle cx="324" cy="233" r="5" fill="#3D2012" />
          <circle cx="326" cy="231" r="1.8" fill="#FFFFFF" />
          {/* Soft Blushing Pink Cheek */}
          <circle cx="316" cy="239" r="4.5" fill="#FF9E8A" opacity="0.8" />
          {/* Tiny Flower Crown on Dino Head */}
          <circle cx="318" cy="222" r="3" fill="#FFF275" />
          <circle cx="324" cy="221" r="3.5" fill="#FF8B76" />
          <circle cx="330" cy="223" r="3" fill="#A8F0E5" />
        </g>

        {/* ADORABLE BABY TRICERATOPS (Right side peeking from coral blossoms) */}
        <g id="babyTriceratops">
          {/* Body */}
          <ellipse cx="580" cy="370" rx="36" ry="26" fill="url(#babyTriGrad)" />
          <rect x="560" y="380" width="12" height="18" rx="6" fill="#D45D47" />
          <rect x="590" y="380" width="12" height="18" rx="6" fill="#D45D47" />
          {/* Cute Frill Fan Headpiece */}
          <path d="M525 340 C530 320 560 320 565 340 Z" fill="#FFEBB8" stroke="#F48B76" strokeWidth="2" />
          <circle cx="532" cy="330" r="2.5" fill="#FF9E8A" />
          <circle cx="545" cy="326" r="3" fill="#FFEBB8" />
          <circle cx="558" cy="330" r="2.5" fill="#FF9E8A" />
          {/* Head & Snout */}
          <ellipse cx="545" cy="355" rx="16" ry="14" fill="url(#babyTriGrad)" />
          {/* Tiny Cute Little Horns */}
          <polygon points="536,344 538,336 542,344" fill="#FFF7D6" />
          <polygon points="552,344 554,336 558,344" fill="#FFF7D6" />
          <polygon points="530,356 523,354 530,360" fill="#FFF7D6" />
          {/* Eye & Rosy Cheek */}
          <circle cx="542" cy="352" r="4" fill="#3D2012" />
          <circle cx="544" cy="350" r="1.5" fill="#FFFFFF" />
          <circle cx="548" cy="360" r="3.5" fill="#FFB3A3" opacity="0.8" />
        </g>

        {/* Giant Tropical Prehistoric Ferns & Fiddleheads (Right) */}
        <path
          d="M800 160 C720 180 680 240 700 340 C740 280 780 240 800 220 Z"
          fill="#448B66"
        />
        <path
          d="M760 100 C660 130 620 220 650 340 C690 260 730 200 760 170 Z"
          fill="#5CB488"
        />
        {/* Curled Fiddlehead Sprout */}
        <path
          d="M660 410 C665 340 680 300 710 300 C730 300 735 320 720 330 C710 335 695 325 705 315"
          stroke="#448B66"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />

        {/* Tiny Jungle Flowers & Sparkling Pollen Fireflies */}
        <circle cx="210" cy="420" r="5" fill="#FF8B76" />
        <circle cx="210" cy="420" r="2" fill="#FFFFFF" />
        <circle cx="470" cy="430" r="6" fill="#FFE58F" />
        <circle cx="470" cy="430" r="2.5" fill="#FF9E8A" />
        <circle cx="640" cy="420" r="5" fill="#A8F0E5" />

        {/* Floating Golden Pollen Fireflies */}
        <circle cx="340" cy="270" r="3" fill="#FFF275" filter="url(#dinoWarmSunlight)" />
        <circle cx="450" cy="230" r="3.5" fill="#FFEBB8" filter="url(#dinoWarmSunlight)" />
        <circle cx="280" cy="190" r="2.5" fill="#FFFFFF" />
        <circle cx="580" cy="260" r="3" fill="#FFF275" filter="url(#dinoWarmSunlight)" />
      </svg>
    </div>
  );
};
