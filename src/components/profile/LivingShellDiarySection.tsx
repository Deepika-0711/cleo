import React, { useEffect, useState } from 'react';
import cleoCharacterImg from '../../assets/cleo-hero-transparent.png';
import { Badge } from '../../design-system/Badge';
import { BubbleCluster } from '../../design-system/DecorativeBubbles';
import { DecorativeStar } from '../../design-system/DecorativeStars';
import { StorybookFlourish } from '../../design-system/OrganicBorder';
import { ShellIcon } from '../../design-system/ShellIcon';
import { useSound } from '../../design-system/useSound';
import { useTheme } from '../../design-system/useTheme';

export type ShellMemoryId = 'identity' | 'nature' | 'talent' | 'memory' | 'whisper';

export interface ShellMemory {
  id: ShellMemoryId;
  shellName: string;
  shellType: string;
  fieldLabel: string;
  diaryChapter: string;
  title: string;
  content: string;
  subtext: string;
  color: string;
  accentColor: string;
  badgeVariant: 'teal' | 'coral' | 'seaglass' | 'sand' | 'ivory';
}

const FIVE_SHELL_MEMORIES: ShellMemory[] = [
  {
    id: 'identity',
    shellName: 'The Nautilus of Truth',
    shellType: 'Spiral Nautilus',
    fieldLabel: 'Name',
    diaryChapter: 'Page I • Her Name',
    title: 'The Girl of Whispering Sands',
    content: 'Cleo',
    subtext: 'Known simply by her given name across every tide pool, lagoon, and seaside cottage.',
    color: '#0C5A60',
    accentColor: '#5BB5A2',
    badgeVariant: 'teal',
  },
  {
    id: 'nature',
    shellName: 'The Scallop of Gentle Bloom',
    shellType: 'Fluted Fan Scallop',
    fieldLabel: 'What She Is',
    diaryChapter: 'Page II • Her Nature',
    title: 'A Curious, Kind Seaside Adventurer',
    content:
      'A curious, kind-hearted seaside adventurer with wavy chestnut hair, a shell-adorned floral crown, and a little bag for collecting magical seashells.',
    subtext:
      'Her heart is as wide as the ocean, greeting hermit crabs and starlit waves with equal gentle warmth.',
    color: '#DE6B54',
    accentColor: '#FCCFC5',
    badgeVariant: 'coral',
  },
  {
    id: 'talent',
    shellName: 'The Conch of Hidden Echoes',
    shellType: 'Spired Whelk Conch',
    fieldLabel: 'What She Does',
    diaryChapter: 'Page III • Her Calling',
    title: 'Explorer of Miniature Universes',
    content:
      'She discovers seashells containing miniature universes and explores the wonders hidden inside them.',
    subtext:
      'She can hold any spiral shell to her ear and listen to the breathing rhythm of the world cradled inside.',
    color: '#167D7F',
    accentColor: '#DFCEB7',
    badgeVariant: 'seaglass',
  },
  {
    id: 'memory',
    shellName: 'The Pearl Clam of the First Tide',
    shellType: 'Iridescent Clam Bivalve',
    fieldLabel: 'Story / Origin',
    diaryChapter: 'Page IV • Her Origin',
    title: 'The Day the Beach Whispered',
    content:
      'Cleo discovered a glowing shell on a quiet beach, found a miniature world inside, and began collecting tiny universes.',
    subtext:
      'It began on a foggy dawn at Pebble Cove when a soft golden shimmer caught her eye among the pebbles.',
    color: '#A89073',
    accentColor: '#F5EFEB',
    badgeVariant: 'sand',
  },
  {
    id: 'whisper',
    shellName: 'The Cowrie of Infinite Skies',
    shellType: 'Polished Tidal Cowrie',
    fieldLabel: 'Tagline',
    diaryChapter: 'Page V • Guiding Words',
    title: 'Her Ocean Motto',
    content: '“Small shells. Endless worlds.”',
    subtext:
      'Her steadfast reminder that the most boundless wonder is often cradled in the quietest, smallest places.',
    color: '#0C5A60',
    accentColor: '#FFB3A3',
    badgeVariant: 'coral',
  },
];

/**
 * Handcrafted SVG illustrations for each of the 5 memory shells
 */
const ShellMemoryIcon: React.FC<{ id: ShellMemoryId; isSelected: boolean; size?: number }> = ({
  id,
  isSelected,
  size = 48,
}) => {
  if (id === 'identity') {
    // Spiral Nautilus
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className="transition-transform duration-300">
        <path
          d="M24 6C14 6 6 14 6 24C6 34 14 42 24 42C34 42 42 34 42 24C42 16 36 10 29 10C22 10 17 15 17 22C17 28 22 32 27 32C31 32 34 29 34 25C34 22 31 20 28 20"
          stroke={isSelected ? '#F48B76' : '#0C5A60'}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={isSelected ? '#E0F2EE' : '#FAF7EE'}
        />
        <path d="M24 6C27 12 29 18 29 25" stroke="#5BB5A2" strokeWidth="1.5" />
        <path d="M36 12C33 18 30 22 26 25" stroke="#5BB5A2" strokeWidth="1.5" />
        <circle cx="28" cy="22" r="2.5" fill="#F48B76" />
      </svg>
    );
  }

  if (id === 'nature') {
    // Fan Scallop
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className="transition-transform duration-300">
        <path
          d="M24 8C33 8 40 15 40 25C40 33 35 38 29 40H19C13 38 8 33 8 25C8 15 15 8 24 8Z"
          stroke={isSelected ? '#0C5A60' : '#DE6B54'}
          strokeWidth="2.5"
          strokeLinejoin="round"
          fill={isSelected ? '#FDECE8' : '#FAF7EE'}
        />
        <path d="M24 40V10" stroke="#FF9E8A" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 40L14 14" stroke="#FF9E8A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M24 40L34 14" stroke="#FF9E8A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 40H32" stroke={isSelected ? '#0C5A60' : '#DE6B54'} strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  if (id === 'talent') {
    // Spired Whelk Conch
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className="transition-transform duration-300">
        <path
          d="M24 4L28 12L34 16L38 26L32 38L24 44L16 38L10 26L14 16L20 12L24 4Z"
          stroke={isSelected ? '#F48B76' : '#167D7F'}
          strokeWidth="2.5"
          strokeLinejoin="round"
          fill={isSelected ? '#E0F2EE' : '#FAF7EE'}
        />
        <path d="M20 12C24 14 28 14 28 12" stroke="#DFCEB7" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 16C22 19 30 19 34 16" stroke="#DFCEB7" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 26C20 30 28 30 38 26" stroke="#DFCEB7" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="26" r="2.5" fill="#5BB5A2" />
      </svg>
    );
  }

  if (id === 'memory') {
    // Bivalve Clam Shell with glowing pearl inside
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className="transition-transform duration-300">
        <path
          d="M8 26C8 16 16 10 24 10C32 10 40 16 40 26C40 34 32 38 24 38C16 38 8 34 8 26Z"
          stroke={isSelected ? '#0C5A60' : '#A89073'}
          strokeWidth="2.5"
          fill={isSelected ? '#F5EFEB' : '#FAF7EE'}
        />
        <path d="M12 26C16 20 20 14 24 14C28 14 32 20 36 26" stroke="#DFCEB7" strokeWidth="1.5" />
        <circle cx="24" cy="26" r="5" fill="#FFFFFF" stroke="#D9BE91" strokeWidth="1.5" />
        <circle cx="23" cy="24" r="1.5" fill="#FFF275" />
      </svg>
    );
  }

  // Whisper Shell: Polished Cowrie Shell with acoustic ripples
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className="transition-transform duration-300">
      <ellipse
        cx="24"
        cy="24"
        rx="15"
        ry="18"
        stroke={isSelected ? '#DE6B54' : '#0C5A60'}
        strokeWidth="2.5"
        fill={isSelected ? '#FDECE8' : '#FAF7EE'}
      />
      <path
        d="M24 10V38M20 14C22 18 22 30 20 34M28 14C26 18 26 30 28 34"
        stroke="#5BB5A2"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="24" cy="24" r="3" fill="#F48B76" />
    </svg>
  );
};

export const LivingShellDiarySection: React.FC = () => {
  const { isMoonlight } = useTheme();
  const { playCleoGreetingSound } = useSound();
  const [selectedShellId, setSelectedShellId] = useState<ShellMemoryId>('identity');
  const [openedShellIds, setOpenedShellIds] = useState<Set<ShellMemoryId>>(new Set(['identity']));
  const [isMemoryPanelOpen, setIsMemoryPanelOpen] = useState(true);

  const selectedIndex = FIVE_SHELL_MEMORIES.findIndex((m) => m.id === selectedShellId);
  const selectedMemory = FIVE_SHELL_MEMORIES[selectedIndex] || FIVE_SHELL_MEMORIES[0];
  const allOpened = openedShellIds.size === FIVE_SHELL_MEMORIES.length;

  const handleSelectShell = (id: ShellMemoryId) => {
    setSelectedShellId(id);
    setIsMemoryPanelOpen(true);
    setOpenedShellIds((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
    playCleoGreetingSound();
  };

  const handlePrevMemory = () => {
    const prevIndex = (selectedIndex - 1 + FIVE_SHELL_MEMORIES.length) % FIVE_SHELL_MEMORIES.length;
    handleSelectShell(FIVE_SHELL_MEMORIES[prevIndex].id);
  };

  const handleNextMemory = () => {
    const nextIndex = (selectedIndex + 1) % FIVE_SHELL_MEMORIES.length;
    handleSelectShell(FIVE_SHELL_MEMORIES[nextIndex].id);
  };

  // Keyboard accessibility for closing with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMemoryPanelOpen) {
        setIsMemoryPanelOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMemoryPanelOpen]);

  return (
    <section
      id="about"
      aria-labelledby="about-diary-heading"
      className="relative scroll-mt-20 py-20 sm:py-28 overflow-hidden transition-colors duration-700"
      style={{ backgroundColor: isMoonlight ? '#09101E' : '#FAF7EE' }}
    >
      {/* Tactile ambient water & paper gradient wash */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply transition-opacity duration-700"
        style={{
          backgroundImage: isMoonlight
            ? 'radial-gradient(circle at 15% 30%, rgba(91, 181, 162, 0.25) 0%, transparent 50%), radial-gradient(circle at 85% 70%, rgba(17, 26, 56, 0.6) 0%, transparent 60%)'
            : 'radial-gradient(circle at 15% 30%, rgba(140, 189, 181, 0.35) 0%, transparent 50%), radial-gradient(circle at 85% 70%, rgba(244, 139, 118, 0.25) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading & Whimsical Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <Badge variant={isMoonlight ? 'midnight' : 'seaglass'} isCollectorStamp>
              Cleo&apos;s Living Shell Diary
            </Badge>
            <span
              className={`font-hand text-xs sm:text-sm font-semibold transition-colors ${
                isMoonlight ? 'text-seaglass-300' : 'text-[#0C5A60]'
              }`}
            >
              Whispering Sands &bull; Five Treasured Memories
            </span>
          </div>

          <h2
            id="about-diary-heading"
            className={`font-display font-medium text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-3 transition-colors ${
              isMoonlight ? 'text-ivory-50' : 'text-[#0C5A60]'
            }`}
          >
            Cleo&apos;s Living Shell Diary
          </h2>

          <p
            className={`font-body text-base sm:text-lg leading-relaxed max-w-xl mx-auto transition-colors ${
              isMoonlight ? 'text-seaglass-100/80' : 'text-[#0C5A60]/85'
            }`}
          >
            Cleo keeps her truest memories inside five enchanted seashells. Tap any shell to open
            her illustrated journal page and discover her heart, calling, and wanderlust.
          </p>

          <StorybookFlourish className="mt-6 mb-2" />
        </div>

        {/* -------------------------------------------------------------
            MAIN INTERACTIVE STAGE: TWO-COLUMN EDITORIAL SHOWCASE
            Left: Cleo Character Keepsake Pedestal
            Right: The 5 Shells & Elegant Open Storybook Diary Page
        ------------------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT COLUMN: Cleo Storybook Keepsake Pedestal */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div
              className={`relative w-full max-w-[360px] sm:max-w-[400px] rounded-[36px] sm:rounded-[48px] p-5 sm:p-7 border shadow-storybook-hover overflow-hidden text-center transition-all duration-500 ${
                isMoonlight
                  ? 'bg-gradient-to-b from-[#0F1C33] via-[#0D182B] to-[#0A1324] border-[#2A4365] text-ivory-50 shadow-night'
                  : 'bg-gradient-to-b from-[#FFFFFF] via-[#FAF7EE] to-[#F5EFEB] border-[#D9BE91] text-teal-900'
              }`}
            >
              {/* Corner decorative pearl studs */}
              <span className="absolute top-3.5 left-3.5 w-2.5 h-2.5 rounded-full bg-white border border-[#D9BE91] shadow-sm" />
              <span className="absolute top-3.5 right-3.5 w-2.5 h-2.5 rounded-full bg-white border border-[#D9BE91] shadow-sm" />
              <span className="absolute bottom-3.5 left-3.5 w-2.5 h-2.5 rounded-full bg-white border border-[#D9BE91] shadow-sm" />
              <span className="absolute bottom-3.5 right-3.5 w-2.5 h-2.5 rounded-full bg-white border border-[#D9BE91] shadow-sm" />

              {/* Storybook Keepsake Header Tag */}
              <div
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest mb-4 shadow-sm border ${
                  isMoonlight
                    ? 'bg-midnight-900/90 text-seaglass-200 border-midnight-700'
                    : 'bg-white text-[#0C5A60] border-[#D9BE91]/70'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#5BB5A2]" />
                <span>CLEO&apos;S KEEPSAKE &bull; CHAPTER OF WONDER</span>
              </div>

              {/* Cleo 3D Storybook Character Portrait */}
              <div className="relative mx-auto my-2 flex items-center justify-center">
                <div
                  className="absolute w-52 h-52 rounded-full blur-2xl opacity-40 pointer-events-none"
                  style={{
                    background: isMoonlight
                      ? 'radial-gradient(circle, rgba(91, 181, 162, 0.4) 0%, rgba(17, 26, 56, 0.6) 60%, transparent 80%)'
                      : 'radial-gradient(circle, rgba(254, 215, 170, 0.7) 0%, rgba(91, 181, 162, 0.4) 60%, transparent 80%)',
                  }}
                  aria-hidden="true"
                />

                <img
                  src={cleoCharacterImg}
                  alt="Cleo the seaside adventurer standing gracefully in her vintage cream seashell dress and shell-adorned floral crown"
                  className="relative z-10 w-48 sm:w-56 h-auto object-contain filter drop-shadow(0 10px 24px rgba(12, 90, 96, 0.2)) animate-float-gentle"
                />
              </div>

              {/* Character Identification Card */}
              <div className="pt-4 border-t border-[#D9BE91]/50 space-y-1">
                <h3
                  className={`font-display font-bold text-2xl ${
                    isMoonlight ? 'text-ivory-50' : 'text-[#0C5A60]'
                  }`}
                >
                  Cleo
                </h3>
                <p
                  className={`font-body text-xs ${
                    isMoonlight ? 'text-seaglass-200/80' : 'text-[#0C5A60]/80'
                  }`}
                >
                  Seaside Adventurer &bull; Shell Botanist
                </p>
                <p className="font-hand text-base text-[#F48B76] pt-1">
                  &ldquo;Every shell is an unopened door.&rdquo;
                </p>
              </div>

              {/* Progress counter */}
              <div
                className={`mt-4 pt-3 border-t flex items-center justify-between text-xs font-mono ${
                  isMoonlight
                    ? 'border-midnight-700/60 text-seaglass-300'
                    : 'border-[#D9BE91]/30 text-[#0C5A60]/80'
                }`}
              >
                <span>Memories Awakened</span>
                <span className="font-bold text-[#DE6B54]">
                  {openedShellIds.size} of {FIVE_SHELL_MEMORIES.length}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The 5 Magical Shells & Elegant Open Storybook Page */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Shell Selector Chamber with Central Glowing Pearl */}
            <div
              className={`p-6 sm:p-8 rounded-[32px] sm:rounded-[40px] border shadow-storybook relative overflow-hidden transition-colors ${
                isMoonlight
                  ? 'bg-midnight-950/90 border-[#2A4365] text-ivory-100 shadow-night'
                  : 'bg-[#FFFFFF] border-[#D9BE91] text-teal-900'
              }`}
            >
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-sand-300/60">
                <div>
                  <span
                    className={`text-[11px] font-mono uppercase tracking-widest font-semibold block ${
                      isMoonlight ? 'text-seaglass-300' : 'text-[#0C5A60]'
                    }`}
                  >
                    Cleo&apos;s Five Memory Shells
                  </span>
                  <span className="text-xs font-hand text-[#F48B76]">
                    Click any shell to turn to its personal diary page
                  </span>
                </div>

                <Badge variant={allOpened ? 'coral' : 'sand'} isCollectorStamp>
                  {allOpened ? 'All 5 Awakened' : `${openedShellIds.size} / 5 Open`}
                </Badge>
              </div>

              {/* Five Shells Grid: Intuitive, Keyboard Accessible, and Mobile Responsive */}
              <div
                role="tablist"
                aria-label="Cleo's Five Memory Shells"
                className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-3.5 mb-6"
              >
                {FIVE_SHELL_MEMORIES.map((shell, index) => {
                  const isSelected = selectedShellId === shell.id && isMemoryPanelOpen;
                  const isOpened = openedShellIds.has(shell.id);

                  return (
                    <button
                      key={shell.id}
                      role="tab"
                      id={`shell-tab-${shell.id}`}
                      aria-selected={isSelected}
                      aria-controls={`diary-page-${shell.id}`}
                      type="button"
                      onClick={() => handleSelectShell(shell.id)}
                      className={`group relative flex flex-col items-center justify-between p-3.5 rounded-2xl sm:rounded-3xl border transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 cursor-pointer ${
                        isSelected
                          ? isMoonlight
                            ? 'bg-[#142642] border-[#5BB5A2] shadow-lg scale-105 ring-2 ring-[#5BB5A2]/30'
                            : 'bg-[#EAF7F4] border-[#0C5A60] shadow-md scale-105 ring-2 ring-[#0C5A60]/20'
                          : isOpened
                          ? isMoonlight
                            ? 'bg-midnight-900/80 border-[#243B5A] hover:bg-[#132238] hover:border-seaglass-400'
                            : 'bg-[#FAF7EE] border-[#D9BE91] hover:bg-white hover:border-[#5BB5A2]'
                          : isMoonlight
                          ? 'bg-midnight-900/50 border-midnight-800 hover:bg-midnight-850'
                          : 'bg-white/80 border-sand-300 hover:bg-[#FAF7EE] hover:border-[#D9BE91]'
                      } ${index === 4 ? 'col-span-2 sm:col-span-1' : ''}`}
                    >
                      {/* Active indicator bead */}
                      {isSelected && (
                        <span className="absolute -top-1.5 right-1/2 translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#F48B76] border-2 border-white shadow-sm" />
                      )}

                      {/* Shell Icon Graphic */}
                      <div className="w-12 h-12 flex items-center justify-center my-1 group-hover:scale-110 transition-transform">
                        <ShellMemoryIcon id={shell.id} isSelected={isSelected} size={44} />
                      </div>

                      {/* Label & Field */}
                      <div className="text-center mt-1">
                        <span
                          className={`block font-display font-bold text-xs leading-tight ${
                            isMoonlight ? 'text-ivory-50' : 'text-[#0C5A60]'
                          }`}
                        >
                          {shell.fieldLabel}
                        </span>
                        <span
                          className={`block font-mono text-[9px] uppercase tracking-wider mt-0.5 ${
                            isMoonlight ? 'text-seaglass-300/80' : 'text-[#0C5A60]/70'
                          }`}
                        >
                          {shell.shellType.split(' ')[1] || shell.shellType}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Central Pearl Aura Banner */}
              <div
                className={`p-4 rounded-2xl border transition-all duration-500 flex items-center gap-3.5 ${
                  allOpened
                    ? isMoonlight
                      ? 'bg-gradient-to-r from-[#10243E] via-[#1A2E4C] to-[#122238] border-[#5BB5A2] shadow-sm'
                      : 'bg-gradient-to-r from-[#FFF9F0] via-[#FDECE8] to-[#EAF7F4] border-[#DE6B54] shadow-sm'
                    : isMoonlight
                    ? 'bg-midnight-900/60 border-midnight-800'
                    : 'bg-[#FAF7EE] border-sand-300'
                }`}
              >
                {/* The Central Glowing Pearl */}
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 border-2 transition-all duration-700 shadow-md ${
                    allOpened
                      ? 'bg-white border-[#F48B76] ring-4 ring-[#FFB3A3]/50 animate-pulse'
                      : isMoonlight
                      ? 'bg-midnight-950 border-[#243B5A]'
                      : 'bg-white border-[#D9BE91]'
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full ${
                      allOpened
                        ? 'bg-gradient-to-br from-[#FFE58F] to-[#F48B76]'
                        : 'bg-gradient-to-br from-[#FFFFFF] to-[#E0F2EE]'
                    }`}
                  />
                </div>

                <div className="flex-1 text-xs font-body">
                  {allOpened ? (
                    <div>
                      <span
                        className={`font-display font-bold text-sm block mb-0.5 ${
                          isMoonlight ? 'text-ivory-50' : 'text-[#0C5A60]'
                        }`}
                      >
                        All Five Memories Awakened!
                      </span>
                      <p className="font-hand text-sm text-[#DE6B54] font-semibold leading-snug">
                        &ldquo;You know Cleo’s heart completely now. Every little shell has told its secret.&rdquo;
                      </p>
                    </div>
                  ) : (
                    <div>
                      <span
                        className={`font-semibold block ${
                          isMoonlight ? 'text-ivory-100' : 'text-[#0C5A60]'
                        }`}
                      >
                        The Central Pearl of Whispers
                      </span>
                      <p
                        className={`${
                          isMoonlight ? 'text-seaglass-200/80' : 'text-[#0C5A60]/75'
                        }`}
                      >
                        Open all five seashells above to illuminate Cleo&apos;s story in full.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* -------------------------------------------------------------
                ELEGANT, IMMERSIVE OPEN STORYBOOK DIARY PAGE
                (Single source of truth — No duplicate table underneath)
            ------------------------------------------------------------- */}
            {isMemoryPanelOpen && selectedMemory ? (
              <div
                role="tabpanel"
                id={`diary-page-${selectedMemory.id}`}
                aria-labelledby={`shell-tab-${selectedMemory.id}`}
                className={`relative rounded-[32px] sm:rounded-[40px] border-2 shadow-storybook-hover transition-all duration-500 overflow-hidden text-left ${
                  isMoonlight
                    ? 'bg-gradient-to-b from-[#0F1C33] via-[#0D182B] to-[#0A1324] border-[#2A4365] text-ivory-50 shadow-night'
                    : 'bg-gradient-to-b from-[#FFFDF9] via-[#FAF7EE] to-[#F5EFEB] border-[#D9BE91] text-teal-900'
                }`}
              >
                {/* Decorative Inner Inset Border Frame */}
                <div
                  className={`m-3 sm:m-4 p-5 sm:p-8 rounded-[24px] sm:rounded-[32px] border border-dashed relative ${
                    isMoonlight ? 'border-[#2A4365]/80' : 'border-[#D9BE91]/80'
                  }`}
                >
                  {/* Four Corner Pearl Studs */}
                  <span className="absolute top-2.5 left-2.5 w-2 h-2 rounded-full bg-white border border-[#D9BE91] shadow-xs" />
                  <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-white border border-[#D9BE91] shadow-xs" />
                  <span className="absolute bottom-2.5 left-2.5 w-2 h-2 rounded-full bg-white border border-[#D9BE91] shadow-xs" />
                  <span className="absolute bottom-2.5 right-2.5 w-2 h-2 rounded-full bg-white border border-[#D9BE91] shadow-xs" />

                  {/* Top Bar: Chapter Title, Shell Name, and Close Control */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-sand-300/60">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#5BB5A2] animate-pulse" />
                      <span
                        className={`font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-semibold ${
                          isMoonlight ? 'text-seaglass-300' : 'text-[#0C5A60]'
                        }`}
                      >
                        {selectedMemory.diaryChapter}
                      </span>
                    </div>

                    <span className="font-hand text-sm sm:text-base text-[#F48B76] font-semibold hidden md:inline">
                      {selectedMemory.shellName}
                    </span>

                    {/* Accessible Close Memory Button */}
                    <button
                      type="button"
                      onClick={() => setIsMemoryPanelOpen(false)}
                      aria-label="Close diary page"
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors border shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 cursor-pointer ${
                        isMoonlight
                          ? 'bg-midnight-900 text-seaglass-200 border-midnight-700 hover:bg-midnight-800 hover:border-coral-400'
                          : 'bg-white text-[#0C5A60] border-sand-300 hover:bg-[#FAF7EE] hover:border-coral-400'
                      }`}
                    >
                      <span className="text-sm font-bold leading-none">&times;</span>
                      <span>Close Page</span>
                    </button>
                  </div>

                  {/* Storybook Page Content */}
                  <div className="space-y-4">
                    {/* Header with Shell Emblem and Field Identity */}
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl border flex items-center justify-center shrink-0 shadow-sm animate-float-gentle ${
                          isMoonlight
                            ? 'bg-midnight-950 border-[#243B5A]'
                            : 'bg-white border-[#D9BE91]'
                        }`}
                      >
                        <ShellMemoryIcon id={selectedMemory.id} isSelected size={40} />
                      </div>

                      <div>
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold border mb-1 ${
                            isMoonlight
                              ? 'bg-midnight-900 text-seaglass-300 border-midnight-700'
                              : 'bg-[#FAF7EE] text-[#0C5A60] border-[#D9BE91]/70'
                          }`}
                        >
                          {selectedMemory.fieldLabel}
                        </span>
                        <h3
                          className={`font-display font-bold text-xl sm:text-2xl lg:text-3xl tracking-tight leading-tight ${
                            isMoonlight ? 'text-ivory-50' : 'text-[#0C5A60]'
                          }`}
                        >
                          {selectedMemory.title}
                        </h3>
                      </div>
                    </div>

                    {/* The Primary Memory Presentation (Soft pearl-ivory paper card) */}
                    {selectedMemory.id === 'identity' ? (
                      <div
                        className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl border shadow-sm my-4 transition-colors ${
                          isMoonlight
                            ? 'bg-midnight-950/80 border-[#2A4365]'
                            : 'bg-white border-[#D9BE91]/70'
                        }`}
                      >
                        <span
                          className={`font-mono text-[10px] uppercase tracking-widest font-semibold block mb-2 ${
                            isMoonlight ? 'text-seaglass-300' : 'text-[#5BB5A2]'
                          }`}
                        >
                          Her True Given Name
                        </span>
                        <p
                          className={`font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight ${
                            isMoonlight ? 'text-ivory-50' : 'text-[#0C5A60]'
                          }`}
                        >
                          {selectedMemory.content}
                        </p>
                      </div>
                    ) : selectedMemory.id === 'whisper' ? (
                      <div
                        className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl border shadow-sm my-4 transition-colors text-center ${
                          isMoonlight
                            ? 'bg-midnight-950/80 border-[#2A4365]'
                            : 'bg-white border-[#D9BE91]/70'
                        }`}
                      >
                        <span
                          className={`font-mono text-[10px] uppercase tracking-widest font-semibold block mb-3 ${
                            isMoonlight ? 'text-coral-400' : 'text-[#DE6B54]'
                          }`}
                        >
                          Cleo&apos;s Guiding Motto
                        </span>
                        <blockquote
                          className={`font-display font-medium text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-snug ${
                            isMoonlight ? 'text-ivory-50' : 'text-[#0C5A60]'
                          }`}
                        >
                          {selectedMemory.content}
                        </blockquote>
                      </div>
                    ) : (
                      <div
                        className={`p-5 sm:p-7 rounded-2xl sm:rounded-3xl border shadow-sm my-4 transition-colors ${
                          isMoonlight
                            ? 'bg-midnight-950/80 border-[#2A4365]'
                            : 'bg-white border-[#D9BE91]/70'
                        }`}
                      >
                        <span
                          className={`font-mono text-[10px] uppercase tracking-widest font-semibold block mb-2 ${
                            isMoonlight ? 'text-seaglass-300' : 'text-[#5BB5A2]'
                          }`}
                        >
                          {selectedMemory.fieldLabel}
                        </span>
                        <p
                          className={`font-body text-base sm:text-lg lg:text-xl leading-relaxed ${
                            isMoonlight ? 'text-seaglass-100' : 'text-[#0C5A60]'
                          }`}
                        >
                          {selectedMemory.content}
                        </p>
                      </div>
                    )}

                    {/* Cleo's Handwritten Personal Reflection Note */}
                    <div
                      className={`p-4 rounded-2xl border flex items-start gap-3 transition-colors ${
                        isMoonlight
                          ? 'bg-midnight-900/60 border-midnight-700/80'
                          : 'bg-[#FAF7EE] border-[#D9BE91]/50'
                      }`}
                    >
                      <div className="shrink-0 pt-0.5">
                        <DecorativeStar size={14} color="#F48B76" />
                      </div>
                      <div>
                        <span className="font-hand text-sm font-bold text-[#DE6B54] block mb-0.5">
                          Cleo&apos;s Personal Reflection
                        </span>
                        <p
                          className={`font-hand text-base sm:text-lg leading-snug italic ${
                            isMoonlight ? 'text-seaglass-200' : 'text-[#0C5A60]'
                          }`}
                        >
                          &ldquo;{selectedMemory.subtext}&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Storybook Page Turning Navigation */}
                  <div className="mt-8 pt-5 border-t border-sand-300/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                    <button
                      type="button"
                      onClick={handlePrevMemory}
                      aria-label="Previous diary memory"
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 ${
                        isMoonlight
                          ? 'text-seaglass-200 hover:text-white hover:bg-midnight-800'
                          : 'text-[#0C5A60] hover:text-teal-950 hover:bg-sand-200/60'
                      }`}
                    >
                      <span aria-hidden="true">&larr;</span>
                      <span>Previous Memory</span>
                    </button>

                    {/* Five Memory Shell Jump Beads */}
                    <div className="flex items-center gap-1.5">
                      {FIVE_SHELL_MEMORIES.map((m, idx) => (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => handleSelectShell(m.id)}
                          aria-label={`Jump to page ${idx + 1}: ${m.fieldLabel}`}
                          className={`h-7 px-2.5 rounded-full text-[10px] font-mono font-bold flex items-center justify-center transition-all ${
                            selectedShellId === m.id
                              ? 'bg-[#0C5A60] text-white shadow-xs scale-105 ring-2 ring-[#5BB5A2]/40'
                              : isMoonlight
                              ? 'bg-midnight-800 text-seaglass-300 hover:bg-midnight-700'
                              : 'bg-sand-200/80 text-[#0C5A60] hover:bg-[#5BB5A2] hover:text-white'
                          }`}
                        >
                          {m.fieldLabel}
                        </button>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={handleNextMemory}
                      aria-label="Next diary memory"
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 ${
                        isMoonlight
                          ? 'text-seaglass-200 hover:text-white hover:bg-midnight-800'
                          : 'text-[#0C5A60] hover:text-teal-950 hover:bg-sand-200/60'
                      }`}
                    >
                      <span>Next Memory</span>
                      <span aria-hidden="true">&rarr;</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Closed Diary State: Clean, Whimsical, and Inviting */
              <div
                className={`p-8 sm:p-10 rounded-[32px] sm:rounded-[40px] border-2 border-dashed text-center transition-all duration-300 ${
                  isMoonlight
                    ? 'bg-midnight-950/60 border-midnight-700 text-ivory-100'
                    : 'bg-white/60 border-[#D9BE91] text-teal-900'
                }`}
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center border animate-float-gentle ${
                    isMoonlight
                      ? 'bg-midnight-900 border-midnight-700'
                      : 'bg-[#FAF7EE] border-sand-300'
                  }`}
                >
                  <ShellIcon
                    variant="scallop"
                    size={28}
                    color={isMoonlight ? '#5BB5A2' : '#0C5A60'}
                    accentColor="#F48B76"
                  />
                </div>
                <h4
                  className={`font-display font-bold text-xl sm:text-2xl mb-2 ${
                    isMoonlight ? 'text-ivory-50' : 'text-[#0C5A60]'
                  }`}
                >
                  Cleo&apos;s Diary Is Waiting
                </h4>
                <p
                  className={`font-body text-sm sm:text-base max-w-md mx-auto mb-5 leading-relaxed ${
                    isMoonlight ? 'text-seaglass-200/80' : 'text-[#0C5A60]/80'
                  }`}
                >
                  Select any of the five seashells above to open her personal storybook page and discover who Cleo is.
                </p>
                <button
                  type="button"
                  onClick={() => handleSelectShell('identity')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-teal-800 text-ivory-50 hover:bg-teal-700 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 cursor-pointer"
                >
                  <span>Open Cleo&apos;s First Page</span>
                  <span>&rarr;</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Storybook Footer Seal */}
        <div className="mt-14 sm:mt-18 text-center">
          <div
            className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full border shadow-sm text-xs transition-colors ${
              isMoonlight
                ? 'bg-midnight-900/80 border-midnight-700 text-seaglass-200'
                : 'bg-white/80 border-[#D9BE91] text-[#0C5A60]'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#5BB5A2] animate-pulse" />
            <span>Cleo&apos;s Living Shell Diary &bull; Five Treasured Memories</span>
            <BubbleCluster className="scale-75 hidden sm:flex" />
          </div>
        </div>
      </div>
    </section>
  );
};
