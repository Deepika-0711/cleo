import React from 'react';

interface ShellVesselProps {
  className?: string;
  size?: number;
}

/**
 * Original Handcrafted SVG for The Pearl Kingdom Shell Vessel:
 * A shimmering Nautilus Shell inlaid with turquoise ocean currents and a glowing pearl portal.
 */
export const PearlKingdomShellVessel: React.FC<ShellVesselProps> = ({
  className = '',
  size = 180,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* Luminous Nautilus Chamber Gradients */}
        <radialGradient id="pearlNautilusOuter" cx="45%" cy="40%" r="55%">
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="35%" stop-color="#E0F7F6" />
          <stop offset="70%" stop-color="#5BB5A2" />
          <stop offset="100%" stop-color="#0C5A60" />
        </radialGradient>
        <radialGradient id="pearlPortalGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.9" />
          <stop offset="40%" stop-color="#72E0D1" stop-opacity="0.8" />
          <stop offset="80%" stop-color="#0C5A60" stop-opacity="0.5" />
          <stop offset="100%" stop-color="#073B3F" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="nautilusRibs" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.9" />
          <stop offset="50%" stop-color="#A8EAE2" stop-opacity="0.6" />
          <stop offset="100%" stop-color="#0C5A60" stop-opacity="0.2" />
        </linearGradient>
        <filter id="pearlKingdomGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Ambient background portal aura */}
      <circle cx="105" cy="100" r="70" fill="url(#pearlPortalGlow)" filter="url(#pearlKingdomGlow)" />

      {/* Main Nautilus Spiral Body */}
      <path
        d="M100 25C50 25 20 65 20 115C20 160 55 185 105 185C150 185 185 155 185 110C185 70 155 45 125 45C95 45 75 68 75 98C75 125 95 145 120 145C140 145 155 130 155 112C155 98 142 88 128 88C116 88 108 96 108 106C108 112 112 116 117 116"
        fill="url(#pearlNautilusOuter)"
        stroke="#FFFFFF"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Chamber Division Ribs */}
      <path d="M100 25C115 50 120 75 125 100" stroke="url(#nautilusRibs)" strokeWidth="3" strokeLinecap="round" />
      <path d="M60 45C85 70 105 90 125 105" stroke="url(#nautilusRibs)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M30 80C65 95 95 105 120 110" stroke="url(#nautilusRibs)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M25 125C60 128 90 125 115 118" stroke="url(#nautilusRibs)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M48 165C75 155 100 140 118 120" stroke="url(#nautilusRibs)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M90 182C108 165 122 148 125 128" stroke="url(#nautilusRibs)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M140 175C145 155 142 135 130 120" stroke="url(#nautilusRibs)" strokeWidth="2" strokeLinecap="round" />

      {/* Floating Pearls Inside the Spiral Portal */}
      <circle cx="120" cy="106" r="9" fill="#FFFFFF" stroke="#D0F3EE" strokeWidth="2" filter="url(#pearlKingdomGlow)" />
      <circle cx="118" cy="103" r="2.5" fill="#FFFFFF" />
      <circle cx="95" cy="88" r="4.5" fill="#E8F9F7" stroke="#A8EAE2" strokeWidth="1" />
      <circle cx="145" cy="122" r="3.5" fill="#FFFFFF" opacity="0.9" />
      <circle cx="132" cy="72" r="3" fill="#B2EFE8" opacity="0.8" />
    </svg>
  );
};

/**
 * Original Handcrafted SVG for The Cloud Village Shell Vessel:
 * A Spired Whelk Conch wrapped in lavender sunset wisps, pastel zephyr currents, and sky clouds.
 */
export const CloudVillageShellVessel: React.FC<ShellVesselProps> = ({
  className = '',
  size = 180,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cloudConchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFF5EE" />
          <stop offset="30%" stop-color="#DCECFB" />
          <stop offset="65%" stop-color="#C5B4E3" />
          <stop offset="100%" stop-color="#FFB3A3" />
        </linearGradient>
        <radialGradient id="cloudPortalAura" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.9" />
          <stop offset="50%" stop-color="#E5D9F8" stop-opacity="0.6" />
          <stop offset="100%" stop-color="#B8D5F8" stop-opacity="0" />
        </radialGradient>
        <filter id="cloudVillageGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Dreamy sunset sky aura */}
      <ellipse cx="100" cy="105" rx="65" ry="75" fill="url(#cloudPortalAura)" filter="url(#cloudVillageGlow)" />

      {/* Floating Cloud Wisps behind conch spire */}
      <path
        d="M50 145C45 135 55 125 70 128C75 120 90 120 95 128C105 125 115 132 110 142C120 145 118 158 105 158H58C48 158 45 150 50 145Z"
        fill="#FFFFFF"
        opacity="0.85"
      />
      <path
        d="M100 80C95 72 105 65 118 68C122 62 135 62 140 68C148 65 158 72 152 80C160 82 158 92 148 92H108C98 92 95 85 100 80Z"
        fill="#FFFFFF"
        opacity="0.75"
      />

      {/* Spired Whelk Shell Tiers */}
      {/* Tier 1: Apex Spire Tip */}
      <path
        d="M100 15L108 38L92 38L100 15Z"
        fill="#FFF9F5"
        stroke="#C5B4E3"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Tier 2 */}
      <path
        d="M86 38L114 38L122 62L78 62L86 38Z"
        fill="url(#cloudConchGrad)"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Tier 3 */}
      <path
        d="M74 62L126 62L138 92L62 92L74 62Z"
        fill="url(#cloudConchGrad)"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Tier 4: Main Body Chamber */}
      <path
        d="M58 92L142 92L162 135L145 170L100 190L55 170L38 135L58 92Z"
        fill="url(#cloudConchGrad)"
        stroke="#FFFFFF"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Sinuous Aperture & Pearl Cloud Bridges */}
      <path
        d="M100 190C125 180 145 150 145 125C145 105 128 95 105 95C85 95 68 110 68 132C68 155 85 180 100 190Z"
        fill="#FFFFFF"
        opacity="0.9"
        stroke="#FFB3A3"
        strokeWidth="2.5"
      />

      {/* Little Windmill and Pastel House Silhouette inside aperture */}
      <path d="M98 128V115H108V128H98Z" fill="#C5B4E3" />
      <path d="M95 115L103 105L111 115H95Z" fill="#FFB3A3" />
      <line x1="103" y1="110" x2="114" y2="103" stroke="#5BB5A2" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="103" y1="110" x2="92" y2="117" stroke="#5BB5A2" strokeWidth="1.5" strokeLinecap="round" />

      {/* Floating Star and Cloud Droplets */}
      <circle cx="148" cy="110" r="3.5" fill="#FFF275" filter="url(#cloudVillageGlow)" />
      <circle cx="48" cy="120" r="3" fill="#FFFFFF" opacity="0.9" />
    </svg>
  );
};

/**
 * Original Handcrafted SVG for The Dinosaur Garden Shell Vessel:
 * A wide Fan Scallop Shell adorned with sage-green prehistoric moss, golden sunbeam fluting, and warm coral blooms.
 */
export const DinosaurGardenShellVessel: React.FC<ShellVesselProps> = ({
  className = '',
  size = 180,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="dinoScallopGrad" cx="50%" cy="85%" r="75%">
          <stop offset="0%" stop-color="#FFEBB8" />
          <stop offset="35%" stop-color="#E8F4D9" />
          <stop offset="65%" stop-color="#7BB89A" />
          <stop offset="100%" stop-color="#386B52" />
        </radialGradient>
        <radialGradient id="dinoGardenAura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FFF7D6" stop-opacity="0.9" />
          <stop offset="50%" stop-color="#C2E7D0" stop-opacity="0.6" />
          <stop offset="100%" stop-color="#F4A261" stop-opacity="0" />
        </radialGradient>
        <filter id="dinoGardenGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Lush golden-green aura */}
      <circle cx="100" cy="100" r="72" fill="url(#dinoGardenAura)" filter="url(#dinoGardenGlow)" />

      {/* Prehistoric Fern Sprigs peeking from behind shell */}
      <path
        d="M35 125C25 95 40 70 65 60C55 75 52 95 58 115"
        stroke="#5A9E7A"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <circle cx="65" cy="60" r="3.5" fill="#F4A261" />
      <path
        d="M165 125C175 95 160 70 135 60C145 75 148 95 142 115"
        stroke="#5A9E7A"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <circle cx="135" cy="60" r="3.5" fill="#F48B76" />

      {/* Fan Scallop Shell Outer Rim with Scalloped Edges */}
      <path
        d="M100 25C138 25 175 55 178 105C180 138 160 162 135 170H65C40 162 20 138 22 105C25 55 62 25 100 25Z"
        fill="url(#dinoScallopGrad)"
        stroke="#FFFFFF"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Radiating Fan Ribs from Bottom Hinge to Scallop Crests */}
      <path d="M100 170V25" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
      <path d="M100 170L70 32" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
      <path d="M100 170L130 32" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
      <path d="M100 170L45 52" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
      <path d="M100 170L155 52" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
      <path d="M100 170L28 85" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      <path d="M100 170L172 85" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      <path d="M100 170L24 125" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M100 170L176 125" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* Base Hinge Shelf with Coral Blossom inlays */}
      <path d="M60 170H140L148 184H52L60 170Z" fill="#F48B76" stroke="#FFFFFF" strokeWidth="2" />
      <circle cx="75" cy="177" r="3.5" fill="#FFE58F" />
      <circle cx="100" cy="177" r="4.5" fill="#FFFFFF" />
      <circle cx="125" cy="177" r="3.5" fill="#FFE58F" />

      {/* Miniature Dinosaur Silhouette & Ancient Sprout Motif in Center */}
      <path
        d="M92 145C88 135 92 120 100 120C108 120 112 135 108 145"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="100" cy="116" r="4" fill="#FFFFFF" />
      <path d="M96 112C92 106 94 100 100 100C106 100 108 106 104 112" fill="#F48B76" />
    </svg>
  );
};
