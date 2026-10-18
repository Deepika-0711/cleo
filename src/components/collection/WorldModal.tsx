import React, { useEffect, useRef } from 'react';
import { DecorativeStar } from '../../design-system/DecorativeStars';
import { StorybookFlourish } from '../../design-system/OrganicBorder';
import { ShellIcon } from '../../design-system/ShellIcon';


export type WorldId = 'pearl-kingdom' | 'cloud-village' | 'dinosaur-garden';

export interface WorldDetailData {
  id: WorldId;
  name: string;
  tagline: string;
  shellType: string;
  shellVariant: 'nautilus' | 'conch' | 'scallop';
  image: string;
  imageAlt: string;
  objectPosition?: string;
  paletteColors: string[];
  atmosphericDescription: string;
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

  // Body scroll lock & Escape key handling
  useEffect(() => {
    if (!isOpen) return;

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button on open
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    // Escape key listener
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !world) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="world-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto backdrop-blur-md bg-teal-950/60 animate-in fade-in duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Modal Dialog Card */}
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl bg-[#FFFDF9] rounded-3xl sm:rounded-4xl border border-[#D4BA88]/70 shadow-night overflow-hidden my-auto animate-in zoom-in-95 duration-300 flex flex-col max-h-[92vh]"
      >
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 border-b border-[#D4BA88]/40 bg-[#FAF7EE] shrink-0 gap-2">
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#D4BA88]/60 shadow-xs flex items-center justify-center shrink-0">
              <ShellIcon
                variant={world.shellVariant}
                size={22}
                color="#0C5A60"
                accentColor="#D4BA88"
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#D4BA88] font-semibold truncate">
                  Inside the {world.shellType}
                </span>
                <DecorativeStar size={9} color="#D4BA88" />
              </div>
              <h2
                id="world-modal-title"
                className="font-display italic font-normal text-xl sm:text-2xl text-teal-950 leading-tight truncate"
              >
                {world.name}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Quick Back to Beach link for top bar */}
            <button
              type="button"
              onClick={onClose}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-teal-900 bg-white border border-[#D4BA88]/60 hover:bg-[#FAF7EE] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 cursor-pointer"
            >
              <span>&larr; Back to the Beach</span>
            </button>

            {/* Close button with focus management */}
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close world detail"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#D4BA88]/60 text-teal-900 flex items-center justify-center text-lg font-bold hover:bg-[#FAF7EE] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400"
            >
              &times;
            </button>
          </div>
        </div>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto px-5 sm:px-8 py-6 space-y-6 flex-1">
          {/* World Fairytale Scenery Illustration */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D4BA88]/60 shadow-storybook bg-[#FAF7EE] group/scenery">
            <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] max-h-[380px] overflow-hidden">
              <img
                src={world.image}
                alt={world.imageAlt}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover/scenery:scale-103"
                style={{ objectPosition: world.objectPosition || 'center' }}
                loading="eager"
                decoding="async"
              />

              {/* Storybook edge vignette & atmospheric depth */}
              <div
                className="absolute inset-0 pointer-events-none bg-gradient-to-t from-teal-950/45 via-transparent to-black/20"
                aria-hidden="true"
              />

              {/* Atmosphere Palette Tag floating on scene */}
              <div className="absolute top-3 left-3 z-10 flex items-center gap-2 py-1 px-3 bg-black/50 backdrop-blur-md rounded-full border border-white/30 text-white text-[11px] font-medium font-body shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4BA88]" />
                <span>{world.tagline}</span>
              </div>

              {/* Shell Variant pill floating on scene top right */}
              <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 py-1 px-3 bg-white/85 backdrop-blur-md rounded-full border border-[#D4BA88]/60 text-teal-950 text-[11px] font-hand font-semibold shadow-xs">
                <span>{world.shellType}</span>
              </div>
            </div>
          </div>

          {/* Narrative Atmospheric Description */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#D4BA88]/40 text-left shadow-xs">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4BA88] font-semibold block mb-2">
              Atmospheric Chronicle
            </span>
            <p className="font-body text-sm sm:text-base text-teal-950/90 leading-relaxed">
              {world.atmosphericDescription}
            </p>
          </div>

          {/* The Playful Detail Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF7EE] border border-[#D4BA88]/50 text-left shadow-xs">
            <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-[#D4BA88]/30">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#DE6B54] font-semibold">
                  &bull; {world.playfulDetail.badge}
                </span>
                <h4 className="font-display font-medium text-base sm:text-lg text-teal-950">
                  {world.playfulDetail.title}
                </h4>
              </div>
              <DecorativeStar size={13} color="#D4BA88" />
            </div>
            <p className="font-body text-xs sm:text-sm text-teal-900/85 leading-relaxed">
              {world.playfulDetail.content}
            </p>
          </div>

          {/* Miniature Environment Highlights */}
          <div className="space-y-3 text-left">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4BA88] font-semibold block">
              Curiosities Preserved in this Shell
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {world.miniatureHighlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white border border-[#D4BA88]/35 flex items-center gap-2.5 text-xs font-body text-teal-950 font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5BB5A2] shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Palette Swatches */}
          <div className="flex items-center gap-3 pt-2 text-xs font-body text-teal-800/80">
            <span className="font-medium text-teal-950">Atmospheric Pigments:</span>
            <div className="flex items-center gap-2">
              {world.paletteColors.map((color, i) => (
                <span
                  key={i}
                  className="w-4 h-4 rounded-full border border-black/15 shadow-inner"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>

          <StorybookFlourish className="my-4" />
        </div>

        {/* Modal Bottom Footer with Primary "Back to the Beach" Button */}
        <div className="px-5 sm:px-8 py-3.5 sm:py-4 bg-[#FAF7EE] border-t border-[#D4BA88]/40 flex flex-col-reverse sm:flex-row items-center justify-between gap-3 sm:gap-4 shrink-0">
          <div className="flex items-center gap-1.5 text-xs font-hand text-teal-800/80 text-center">
            <span>Carefully set the shell back upon the shore</span>
            <DecorativeStar size={10} color="#D4BA88" />
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-850 text-ivory-50 hover:bg-teal-700 active:scale-95 transition-all shadow-storybook hover:shadow-storybook-hover border border-[#D4BA88]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 cursor-pointer"
            style={{ backgroundColor: '#0C5A60' }}
          >
            <ShellIcon variant="scallop" size={15} color="#FAF7EE" accentColor="#D4BA88" />
            <span>Return to the Shore</span>
          </button>
        </div>
      </div>
    </div>
  );
};
