import React, { useEffect, useRef } from 'react';
import { Badge } from '../../design-system/Badge';
import { DecorativeStar } from '../../design-system/DecorativeStars';
import { StorybookFlourish } from '../../design-system/OrganicBorder';
import { ShellIcon } from '../../design-system/ShellIcon';
import {
  CloudVillageScene,
  DinosaurGardenScene,
  PearlKingdomScene,
} from './WorldSceneryIllustrations';

export type WorldId = 'pearl-kingdom' | 'cloud-village' | 'dinosaur-garden';

export interface WorldDetailData {
  id: WorldId;
  name: string;
  tagline: string;
  shellType: string;
  shellVariant: 'nautilus' | 'conch' | 'scallop';
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
        className="relative w-full max-w-4xl bg-ivory-50 rounded-3xl sm:rounded-4xl border border-sand-300 shadow-night overflow-hidden my-auto animate-in zoom-in-95 duration-300 flex flex-col max-h-[92vh]"
      >
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-8 py-3.5 sm:py-5 border-b border-sand-300/70 bg-sand-100/70 shrink-0 gap-2">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-sand-300 shadow-sm flex items-center justify-center shrink-0">
              <ShellIcon
                variant={world.shellVariant}
                size={20}
                color="#0C5A60"
                accentColor="#F48B76"
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-teal-600 font-semibold truncate">
                  Inside {world.shellType}
                </span>
                <DecorativeStar size={9} color="#F48B76" />
              </div>
              <h2
                id="world-modal-title"
                className="font-display font-bold text-lg sm:text-2xl text-teal-900 leading-tight truncate"
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
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-teal-800 bg-white border border-sand-300 hover:bg-sand-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
            >
              <span>&larr; Back to the Beach</span>
            </button>

            {/* Close button with focus management */}
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close world detail"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-sand-300 text-teal-800 flex items-center justify-center text-xl font-bold hover:bg-sand-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400"
            >
              &times;
            </button>
          </div>
        </div>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto px-5 sm:px-8 py-6 space-y-6 flex-1">
          {/* World Scenery Visual Canvas */}
          <div className="relative rounded-2xl overflow-hidden border border-sand-300 shadow-storybook">
            {world.id === 'pearl-kingdom' && <PearlKingdomScene />}
            {world.id === 'cloud-village' && <CloudVillageScene />}
            {world.id === 'dinosaur-garden' && <DinosaurGardenScene />}

            {/* Atmosphere Palette Tag floating on scene */}
            <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 p-1.5 bg-black/40 backdrop-blur-md rounded-full border border-white/30 text-white text-[11px] font-medium font-body px-3">
              <span className="w-2 h-2 rounded-full bg-coral-400 animate-ping" />
              <span>{world.tagline}</span>
            </div>
          </div>

          {/* Narrative Atmospheric Description */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/90 border border-sand-300 text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-teal-600 font-semibold block mb-2">
              Atmospheric Overview
            </span>
            <p className="font-body text-sm sm:text-base text-teal-900/90 leading-relaxed">
              {world.atmosphericDescription}
            </p>
          </div>

          {/* The Playful Detail Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-sand-100/90 to-ivory-100 border border-sand-300 text-left shadow-sm">
            <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-sand-300/60">
              <div className="flex items-center gap-2">
                <Badge variant="coral" isCollectorStamp>
                  {world.playfulDetail.badge}
                </Badge>
                <h4 className="font-display font-bold text-base sm:text-lg text-teal-900">
                  {world.playfulDetail.title}
                </h4>
              </div>
              <DecorativeStar size={14} color="#5BB5A2" />
            </div>
            <p className="font-body text-xs sm:text-sm text-teal-800/85 leading-relaxed">
              {world.playfulDetail.content}
            </p>
          </div>

          {/* Miniature Environment Highlights */}
          <div className="space-y-3 text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-teal-600 font-semibold block">
              Curiosities Found in this Shell
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {world.miniatureHighlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white/80 border border-sand-300/80 flex items-center gap-2.5 text-xs font-body text-teal-900 font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-seaglass-500 shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Palette Swatches */}
          <div className="flex items-center gap-3 pt-2 text-xs font-body text-teal-800/70">
            <span className="font-semibold text-teal-900">Atmospheric Palette:</span>
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
        <div className="px-4 sm:px-8 py-3 sm:py-4 bg-sand-100/90 border-t border-sand-300/70 flex flex-col-reverse sm:flex-row items-center justify-between gap-2.5 sm:gap-4 shrink-0">
          <div className="flex items-center gap-1.5 text-xs font-hand text-teal-700 text-center">
            <span>Carefully set the shell back upon the shore</span>
            <DecorativeStar size={10} color="#F48B76" />
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider bg-teal-800 text-ivory-50 hover:bg-teal-700 active:scale-95 transition-all shadow-storybook hover:shadow-storybook-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400"
          >
            <ShellIcon variant="scallop" size={16} color="#FAF7EE" accentColor="#5BB5A2" />
            <span>Back to the Beach</span>
          </button>
        </div>
      </div>
    </div>
  );
};
