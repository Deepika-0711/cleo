import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { BubbleCluster } from '../../design-system/DecorativeBubbles';
import { DecorativeStar, StarCluster } from '../../design-system/DecorativeStars';
import { ShellIcon } from '../../design-system/ShellIcon';

export type WorldId = 'pearl-kingdom' | 'cloud-village' | 'dinosaur-garden';

export interface WorldCharacter {
  name: string;
  role: string;
  badge: string;
  description: string;
}

export interface WorldThemeColors {
  accentHex: string;
  borderHex: string;
  bgTint: string;
  headerGradient: string;
  moralCardBg: string;
  moralBorder: string;
  badgeBg: string;
  badgeText: string;
  tagColor: string;
  ambientGlow: string;
}

export interface WorldDetailData {
  id: WorldId;
  name: string;
  tagline: string;
  shellType: string;
  shellVariant: 'nautilus' | 'conch' | 'scallop';
  image: string;
  cardImage?: string;
  imageAlt: string;
  objectPosition?: string;
  paletteColors: string[];
  atmosphericDescription: string;

  // Fairytale narrative details
  fairytaleTitle: string;
  chapterBadge: string;
  openingLine: string;
  storyParagraphs: string[];
  characters: WorldCharacter[];
  closingMoral: string;
  cleoNote: string;
  theme: WorldThemeColors;

  playfulDetail: {
    title: string;
    content: string;
    badge: string;
  };
  miniatureHighlights: string[];
}

interface WorldModalProps {
  world: WorldDetailData | null;
  isOpen: boolean;
  onClose: () => void;
}

export const WorldModal: React.FC<WorldModalProps> = ({ world, isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const openedAtRef = useRef<number>(0);

  // Synchronous scroll reset: guarantees story always begins at top on open or world switch
  useLayoutEffect(() => {
    if (!isOpen) return;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [isOpen, world?.id]);

  // Body scroll lock, Escape key handling, and robust post-paint scroll verification
  useEffect(() => {
    if (!isOpen) return;

    openedAtRef.current = Date.now();
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Ensure scrollTop is locked at 0 on initial frame without triggering focus-induced browser scroll jumps
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }

    const rafId = requestAnimationFrame(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      cancelAnimationFrame(rafId);
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, world?.id, onClose]);

  if (!isOpen || !world || typeof document === 'undefined') return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Ghost-click protection: don't dismiss if click occurred within 250ms of opening
    if (Date.now() - openedAtRef.current < 250) return;
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const modalContent = (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="fairytale-modal-title"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-2.5 sm:p-4 md:p-6 lg:p-8 bg-[#16121E]/60 backdrop-blur-md overflow-hidden"
      onClick={handleBackdropClick}
    >
      {/* Modal Dialog Card: Centered within viewport width & height, Non-Overlapping Header */}
      <div
        ref={modalRef}
        className="relative w-full max-w-5xl h-[calc(100dvh-1.25rem)] sm:h-[calc(100dvh-2rem)] md:h-[min(880px,calc(100dvh-3rem))] bg-[#FFFDF9] rounded-3xl sm:rounded-[36px] border border-[#D4BA88]/60 shadow-[0_24px_70px_rgba(44,36,32,0.35),0_0_0_1px_rgba(212,186,136,0.35)] overflow-hidden flex flex-col outline-none mx-auto"
      >
        {/* Soft Champagne Gold & Blush Storybook Ribbon Strip */}
        <div
          className="h-1.5 w-full shrink-0 bg-gradient-to-r from-[#FCECE8] via-[#D4BA88] to-[#FCECE8]"
          aria-hidden="true"
        />

        {/* Modal Top Header Bar: Pinned in Normal Flow, Never Overlaps Content */}
        <div className="flex items-center justify-between px-4 sm:px-7 md:px-8 py-3 sm:py-3.5 border-b border-[#D4BA88]/30 bg-[#FAF7EE] shrink-0 gap-3 z-10">
          <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-[#D4BA88]/70 shadow-xs flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105">
              <ShellIcon
                variant={world.shellVariant}
                size={20}
                color="#BF9F65"
                accentColor="#D4BA88"
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#D4BA88] font-semibold truncate">
                  Storybook Treasury &bull; {world.shellType}
                </span>
                <DecorativeStar size={8} color="#D4BA88" />
              </div>
              <h2
                id="fairytale-modal-title"
                className="font-display italic font-normal text-lg sm:text-2xl text-[#2C2420] leading-tight truncate"
              >
                {world.name}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Quick Back to Cleo's Worlds link */}
            <button
              type="button"
              onClick={onClose}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#5A4D43] bg-white border border-[#D4BA88]/60 hover:bg-[#FAF7EE] hover:border-[#D4BA88] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 cursor-pointer shadow-xs"
            >
              <span aria-hidden="true">&larr;</span>
              <span>Back to Cleo&apos;s Worlds</span>
            </button>

            {/* Accessible & Obvious Close button */}
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close fairytale and return to worlds"
              title="Close fairytale"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white text-[#2C2420] border border-[#D4BA88] hover:bg-[#FDF4F2] hover:text-[#DE6B54] hover:border-[#DE6B54] transition-all duration-200 cursor-pointer shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 group/close"
            >
              <span className="text-base sm:text-lg leading-none font-bold text-[#8A7566] group-hover/close:text-[#DE6B54] transition-colors" aria-hidden="true">&times;</span>
              <span className="text-xs font-semibold tracking-wide">Close</span>
            </button>
          </div>
        </div>

        {/* Scrollable Storybook Content Area: Single Unified Scroll Container Below Header */}
        <div
          ref={scrollContainerRef}
          key={world.id}
          className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden px-4 sm:px-6 md:px-8 py-4 sm:py-6 pb-12 sm:pb-16 paper-grain storybook-scrollbar"
        >
          {/* Centered Two-Column Fairytale Spread with Comfortable Gutter */}
          <div className="flex flex-col md:flex-row items-start gap-5 md:gap-6 lg:gap-7 xl:gap-8 w-full max-w-[960px] mx-auto">
            {/* Left Column (~42% on desktop/tablet): The Complete Fairytale Folio Illustration */}
            <div className="w-full md:w-[42%] min-w-0 shrink-0 flex flex-col space-y-3 sm:space-y-3.5 text-center">
              {/* Illustrated Bookplate Frame */}
              <div className="relative w-full rounded-[24px] sm:rounded-[28px] p-2.5 sm:p-3 lg:p-3.5 border border-[#D4BA88]/45 shadow-storybook text-center transition-all bg-gradient-to-b from-[#FFFFFF] to-[#FAF7EE]">
                {/* Storybook Corner Pearl Accents */}
                <span className="absolute top-2 left-2 w-2 h-2 rounded-full bg-white border border-[#D4BA88] shadow-xs z-20" aria-hidden="true" />
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-white border border-[#D4BA88] shadow-xs z-20" aria-hidden="true" />
                <span className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-white border border-[#D4BA88] shadow-xs z-20" aria-hidden="true" />
                <span className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-white border border-[#D4BA88] shadow-xs z-20" aria-hidden="true" />

                {/* Picture Container - Preserves Entire Vertical Illustration Aspect Ratio and Frame */}
                <div
                  className={`relative w-full rounded-2xl sm:rounded-[22px] overflow-hidden border border-[#D4BA88]/40 shadow-inner bg-[#FAF7EE] ${
                    world.id === 'pearl-kingdom' ? 'animate-pearl-glow' : 'animate-dreamy-float'
                  }`}
                >
                  <img
                    src={world.image}
                    alt={world.imageAlt}
                    className="w-full h-auto block select-none transition-transform duration-700 ease-out hover:scale-[1.015]"
                    loading="eager"
                    decoding="async"
                  />

                  {/* Soft atmospheric gradient vignette */}
                  <div
                    className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/25 via-transparent to-black/10 opacity-40"
                    aria-hidden="true"
                  />

                  {/* Chapter badge top-left */}
                  <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 py-0.5 px-2.5 bg-black/60 backdrop-blur-md rounded-full border border-white/30 text-white text-[10px] font-mono tracking-wider uppercase shadow-xs">
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-pearl-pulse"
                      style={{ backgroundColor: world.theme.accentHex }}
                    />
                    <span>{world.chapterBadge.split('•')[0]}</span>
                  </div>

                  {/* Shell Seal top-right */}
                  <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1 py-0.5 px-2 bg-white/90 backdrop-blur-md rounded-full border border-[#D4BA88]/70 text-[#2C2420] text-[10px] font-hand font-semibold shadow-xs">
                    <ShellIcon variant={world.shellVariant} size={11} color="#BF9F65" accentColor="#D4BA88" />
                    <span>{world.shellType}</span>
                  </div>

                  {/* World-Specific Floating Atmosphere Detail */}
                  {world.id === 'pearl-kingdom' && (
                    <div className="absolute bottom-2.5 right-2.5 z-10 pointer-events-none flex items-center gap-1.5">
                      <BubbleCluster className="opacity-90" />
                      <span className="py-0.5 px-2 bg-[#0C3035]/85 backdrop-blur-md rounded-full border border-seaglass-300/40 text-seaglass-200 text-[9.5px] font-hand">
                        Lumi&apos;s Moonlit Realm
                      </span>
                    </div>
                  )}

                  {world.id === 'cloud-village' && (
                    <div className="absolute bottom-2.5 right-2.5 z-10 pointer-events-none flex items-center gap-1.5">
                      <StarCluster className="opacity-95" />
                      <span className="py-0.5 px-2 bg-[#241B3B]/80 backdrop-blur-md rounded-full border border-[#C7B2E4]/40 text-[#FFEED6] text-[9.5px] font-hand">
                        Puff&apos;s Starlight Sanctuary
                      </span>
                    </div>
                  )}

                  {world.id === 'dinosaur-garden' && (
                    <div className="absolute bottom-2.5 right-2.5 z-10 pointer-events-none flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#69B98E] animate-ping" />
                      <span className="py-0.5 px-2 bg-[#142A1D]/80 backdrop-blur-md rounded-full border border-[#69B98E]/40 text-[#E2F7E9] text-[9.5px] font-hand">
                        Pip&apos;s Wonder-Seed Garden
                      </span>
                    </div>
                  )}
                </div>

                {/* Plate Caption & Pigment Palette */}
                <div className="pt-2.5 pb-0.5 border-t border-[#D4BA88]/20 flex flex-col sm:flex-row items-center justify-between gap-1.5 text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4BA88]" />
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#7A6756] font-semibold">
                      Storybook Pigments
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {world.paletteColors.map((color, i) => (
                      <span
                        key={i}
                        className="w-3.5 h-3.5 rounded-full border border-black/10 shadow-xs"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Playful Curiosity Marginalia Footnote */}
              <div className="w-full p-2.5 sm:p-3 rounded-2xl bg-[#FAF7EE]/80 border border-[#D4BA88]/25 text-left shadow-2xs space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <DecorativeStar size={7} color="#D4BA88" />
                    <h4 className="font-display font-medium text-xs sm:text-[13px] text-[#2C2420]">
                      {world.playfulDetail.title}
                    </h4>
                  </div>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-[#D4BA88] font-semibold">
                    {world.playfulDetail.badge}
                  </span>
                </div>
                <p className="font-hand text-xs sm:text-[13px] text-[#5A4D43] leading-snug italic">
                  &ldquo;{world.playfulDetail.content}&rdquo;
                </p>
              </div>
            </div>

            {/* Right Column (~58% on desktop/tablet): The Fairytale Narrative as an Ivory Storybook Page */}
            <div className="w-full md:flex-1 min-w-0 flex flex-col space-y-4 text-left">
              <div className="relative w-full rounded-[24px] sm:rounded-[28px] p-3.5 sm:p-5 lg:p-6 border border-[#D4BA88]/45 shadow-storybook bg-gradient-to-b from-[#FFFDF9] via-[#FAF7EE] to-[#FAF5EB] text-left transition-all space-y-3.5 sm:space-y-4">
                {/* Storybook Corner Pearl Accents */}
                <span className="absolute top-2 left-2 w-2 h-2 rounded-full bg-white border border-[#D4BA88] shadow-xs z-20" aria-hidden="true" />
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-white border border-[#D4BA88] shadow-xs z-20" aria-hidden="true" />
                <span className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-white border border-[#D4BA88] shadow-xs z-20" aria-hidden="true" />
                <span className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-white border border-[#D4BA88] shadow-xs z-20" aria-hidden="true" />

                {/* Fairytale Chapter Eyebrow Header */}
                <div className="flex items-center justify-between gap-2 pb-1.5 border-b border-[#D4BA88]/20">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <DecorativeStar size={7} color="#D4BA88" />
                    <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8C7654] truncate">
                      {world.chapterBadge}
                    </span>
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#A08C78] font-medium hidden sm:inline shrink-0">
                    Folio Spread &bull; {world.shellType}
                  </span>
                </div>

                {/* Cohesive Chapter Opening: Title + Introductory Quotation */}
                <div className="space-y-1.5 sm:space-y-2 pt-0.5">
                  <h3 className="font-display italic font-normal text-xl sm:text-2xl lg:text-[25px] text-[#2C2420] tracking-tight leading-snug max-w-lg">
                    &ldquo;{world.fairytaleTitle}&rdquo;
                  </h3>

                  {/* Enchanting Opening Line Epigraph */}
                  <p className="font-hand text-[15px] sm:text-[16px] text-[#7A5B47] leading-relaxed italic border-l-2 border-[#D4BA88]/60 pl-3 py-0.5 max-w-lg">
                    &ldquo;{world.openingLine}&rdquo;
                  </p>
                </div>

                {/* Subtle Hairline Storybook Divider */}
                <div className="h-px w-full bg-gradient-to-r from-[#D4BA88]/30 via-[#D4BA88]/15 to-transparent my-0.5" aria-hidden="true" />

                {/* Story Narrative: Graceful, Readable Serif Typography (16–18px desktop, 1.65–1.8 line-height) */}
                <div className="space-y-3.5 sm:space-y-4 max-w-[58ch] text-left">
                  {world.storyParagraphs.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="font-display text-[15px] sm:text-[16px] lg:text-[16.5px] xl:text-[17px] text-[#2C2420]/95 leading-[1.72] tracking-normal"
                    >
                      {idx === 0 ? (
                        <>
                          <span
                            className="float-left font-display italic text-[36px] sm:text-[38px] font-bold text-[#BF9F65] leading-[0.82] mr-2 mt-0.5 select-none"
                            aria-hidden="true"
                          >
                            {paragraph.charAt(0)}
                          </span>
                          {paragraph.slice(1)}
                        </>
                      ) : (
                        paragraph
                      )}
                    </p>
                  ))}
                </div>

                {/* Creatures & Companions of this Tale: Tidy, Compact Layout */}
                <div className="pt-2 space-y-2">
                  <div className="flex items-center justify-between pb-1 border-b border-[#D4BA88]/25">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4BA88]" aria-hidden="true" />
                      <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#8C7654] font-semibold">
                        Creatures &amp; Companions of this Tale
                      </span>
                    </div>
                    <span className="text-[11px] font-hand text-[#8C7654]/80 hidden sm:inline">
                      Friends Cleo met along the way
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {world.characters.map((char, index) => (
                      <div
                        key={index}
                        className="p-2.5 rounded-xl bg-[#FFFDF9]/85 border border-[#D4BA88]/25 hover:border-[#D4BA88]/50 shadow-2xs transition-colors flex flex-col justify-between gap-1"
                      >
                        <div className="flex items-baseline justify-between gap-1.5 border-b border-[#D4BA88]/15 pb-1">
                          <div className="flex items-baseline gap-1.5 min-w-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4BA88] shrink-0 self-center" aria-hidden="true" />
                            <h4 className="font-display font-medium text-xs sm:text-[13px] text-[#2C2420] truncate">
                              {char.name}
                            </h4>
                            <span className="text-[9.5px] font-mono uppercase tracking-wider text-[#9E8B76] truncate">
                              &bull; {char.role}
                            </span>
                          </div>
                          <span className="font-hand text-[11px] sm:text-xs text-[#8C7654] italic shrink-0">
                            {char.badge}
                          </span>
                        </div>
                        <p className="font-display text-[11px] sm:text-[11.5px] text-[#5A4D43] leading-relaxed pt-0.5">
                          {char.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fairytale Moral & Keepsake: Illuminated Calligraphy Parchment Inset */}
                <div className="relative py-3.5 px-4 sm:px-5 rounded-2xl bg-[#FAF6F0]/80 border border-[#D4BA88]/30 shadow-2xs text-center my-2">
                  <div className="inline-flex items-center gap-1.5 mb-1">
                    <DecorativeStar size={7} color="#D4BA88" />
                    <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-[#8C7654] font-semibold">
                      Fairytale Moral &amp; Keepsake
                    </span>
                    <DecorativeStar size={7} color="#D4BA88" />
                  </div>

                  <blockquote className="font-display italic text-[15px] sm:text-base lg:text-[16.5px] text-[#2C2420] font-normal leading-relaxed max-w-lg mx-auto my-0.5">
                    &ldquo;{world.closingMoral}&rdquo;
                  </blockquote>

                  <div className="mt-2 pt-1.5 border-t border-[#D4BA88]/20 max-w-md mx-auto">
                    <p className="font-hand text-sm sm:text-[14.5px] text-[#5A4D43] italic">
                      &ldquo;{world.cleoNote}&rdquo;
                    </p>
                    <span className="block mt-0.5 font-mono text-[9px] uppercase tracking-wider text-[#A08C78] font-semibold">
                      &mdash; Cleo, Shoreline Seeker
                    </span>
                  </div>
                </div>

                {/* Miniature Curiosities Highlights */}
                <div className="pt-0.5 text-left space-y-1">
                  <span className="font-mono text-[9.5px] sm:text-[10px] uppercase tracking-widest text-[#8C7654] font-semibold block">
                    Wonders Discovered in This Realm:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {world.miniatureHighlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="py-1.5 px-2.5 rounded-lg bg-white/60 border border-[#D4BA88]/20 flex items-center gap-2 text-xs font-display text-[#3A302A]"
                      >
                        <DecorativeStar size={6} color="#D4BA88" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Natural Storybook Footer Navigation */}
                <div className="mt-4 pt-3.5 border-t border-[#D4BA88]/25 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs font-hand text-[#8C7654] text-center sm:text-left">
                    <ShellIcon variant={world.shellVariant} size={14} color="#BF9F65" accentColor="#D4BA88" />
                    <span>Carefully set the {world.shellType} back upon the shoreline sand</span>
                  </div>

                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2 px-5 rounded-full text-xs font-semibold tracking-wider bg-white text-[#2C2420] border border-[#D4BA88] hover:bg-[#FAF6F0] hover:border-[#DE6B54] hover:text-[#DE6B54] transition-all cursor-pointer shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 active:scale-[0.98]"
                  >
                    <span aria-hidden="true">&larr;</span>
                    <span>Return to Shore &amp; Worlds</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};


