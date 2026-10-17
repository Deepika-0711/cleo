import React, { useState } from 'react';
import { Badge } from '../../design-system/Badge';
import { BubbleCluster, DecorativeBubble } from '../../design-system/DecorativeBubbles';
import { DecorativeStar, StarCluster } from '../../design-system/DecorativeStars';
import { StorybookFlourish } from '../../design-system/OrganicBorder';
import { ShellIcon } from '../../design-system/ShellIcon';
import { StoryCard } from '../../design-system/StoryCard';
import { COLOR_PALETTE, TYPOGRAPHY_SPECS } from '../../design-system/tokens';

export const DesignSystemShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'palette' | 'typography' | 'elements' | 'night'>('palette');
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopy = (hex: string) => {
    navigator.clipboard?.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  return (
    <div id="design-system" className="scroll-mt-24">
      <StoryCard variant="storybook" isOrganicBorder className="mb-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-teal-800/10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="coral" isCollectorStamp>
                Foundation Spec 1.0
              </Badge>
              <span className="text-xs font-hand text-teal-700/80">Crafted with care</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-teal-800 tracking-tight">
              Design System & Token Architecture
            </h3>
            <p className="font-body text-sm text-teal-700/80 mt-1 max-w-xl">
              Harmonious tokens engineered for tactile storybook warmth, nostalgic early-web charm, and high readability.
            </p>
          </div>

          {/* Tab selector */}
          <div
            role="tablist"
            aria-label="Design system showcase tabs"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-sand-200/60 rounded-2xl border border-sand-400/30"
          >
            {[
              { id: 'palette', label: 'Color Palette' },
              { id: 'typography', label: 'Typography' },
              { id: 'elements', label: 'Tactile Elements' },
              { id: 'night', label: 'Midnight Blue' },
            ].map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium font-body transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 ${
                  activeTab === tab.id
                    ? 'bg-ivory-50 text-teal-900 shadow-sm font-semibold'
                    : 'text-teal-800/75 hover:text-teal-900 hover:bg-sand-100/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab 1: Color Palette */}
        {activeTab === 'palette' && (
          <div className="pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {COLOR_PALETTE.map((swatch) => (
                <div
                  key={swatch.name}
                  onClick={() => handleCopy(swatch.hex)}
                  className="group relative p-4 rounded-2xl bg-white/70 border border-teal-800/10 hover:border-teal-600/30 shadow-sm hover:shadow-storybook transition-all cursor-pointer text-left"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <span
                      className="w-10 h-10 rounded-xl shadow-inner border border-black/10 shrink-0 transition-transform group-hover:scale-105"
                      style={{ backgroundColor: swatch.hex }}
                    />
                    <div>
                      <h4 className="font-display font-medium text-sm text-teal-900 leading-tight">
                        {swatch.name}
                      </h4>
                      <code className="text-xs text-teal-700/70 font-mono tracking-wider">
                        {swatch.hex}
                      </code>
                    </div>
                  </div>
                  <p className="font-body text-xs text-teal-800/70 line-clamp-2 leading-relaxed">
                    {swatch.description}
                  </p>
                  <span className="absolute top-3 right-3 text-[10px] uppercase font-mono text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    {copiedHex === swatch.hex ? 'Copied!' : 'Click to copy'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Typography */}
        {activeTab === 'typography' && (
          <div className="pt-6 space-y-6">
            {TYPOGRAPHY_SPECS.map((spec) => (
              <div
                key={spec.fontFamily}
                className="p-5 rounded-2xl bg-white/80 border border-teal-800/10 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-teal-800/10 mb-4">
                  <div>
                    <span className="text-xs uppercase tracking-widest font-semibold text-coral-600">
                      {spec.role} typeface
                    </span>
                    <h4 className="font-display text-xl text-teal-900 font-bold">
                      {spec.fontFamily}
                    </h4>
                  </div>
                  <Badge variant="sand">Weights: {spec.weightRange}</Badge>
                </div>

                <div className="py-2">
                  <p
                    className="text-teal-900 tracking-normal"
                    style={{
                      fontFamily:
                        spec.fontFamily === 'Fraunces'
                          ? 'var(--font-display)'
                          : spec.fontFamily === 'Caveat'
                          ? 'var(--font-hand)'
                          : 'var(--font-body)',
                      fontSize:
                        spec.fontFamily === 'Fraunces'
                          ? '1.75rem'
                          : spec.fontFamily === 'Caveat'
                          ? '1.85rem'
                          : '1.05rem',
                      lineHeight: '1.3',
                    }}
                  >
                    "{spec.sampleText}"
                  </p>
                </div>

                <p className="font-body text-xs text-teal-700/75 mt-3 pt-3 border-t border-teal-800/5">
                  <span className="font-semibold text-teal-900">Purpose: </span>
                  {spec.purpose}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Tactile Elements */}
        {activeTab === 'elements' && (
          <div className="pt-6 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Shell Illustrations */}
              <div className="p-5 rounded-2xl bg-white/80 border border-teal-800/10 text-center">
                <span className="text-xs uppercase tracking-widest font-semibold text-coral-600 mb-3 block">
                  Original Handcrafted Shells
                </span>
                <div className="flex items-center justify-center gap-6 py-4">
                  <div className="text-center">
                    <ShellIcon variant="nautilus" size={40} color="#0C5A60" accentColor="#5BB5A2" />
                    <span className="block text-[11px] font-hand text-teal-700 mt-1">Nautilus</span>
                  </div>
                  <div className="text-center">
                    <ShellIcon variant="scallop" size={40} color="#0C5A60" accentColor="#F48B76" />
                    <span className="block text-[11px] font-hand text-teal-700 mt-1">Scallop</span>
                  </div>
                  <div className="text-center">
                    <ShellIcon variant="conch" size={40} color="#0C5A60" accentColor="#DFCEB7" />
                    <span className="block text-[11px] font-hand text-teal-700 mt-1">Conch</span>
                  </div>
                </div>
                <p className="text-xs text-teal-800/70 font-body">
                  Lightweight inline SVG linework with no raster dependencies.
                </p>
              </div>

              {/* Twinkling Stars & Shimmers */}
              <div className="p-5 rounded-2xl bg-white/80 border border-teal-800/10 text-center">
                <span className="text-xs uppercase tracking-widest font-semibold text-coral-600 mb-3 block">
                  Decorative Twinkling Stars
                </span>
                <div className="flex items-center justify-center py-6">
                  <StarCluster />
                </div>
                <p className="text-xs text-teal-800/70 font-body">
                  Subtle 4-point fairy stars with controlled keyframe scale and shimmer.
                </p>
              </div>

              {/* Translucent Sea Bubbles */}
              <div className="p-5 rounded-2xl bg-white/80 border border-teal-800/10 text-center">
                <span className="text-xs uppercase tracking-widest font-semibold text-coral-600 mb-3 block">
                  Gentle Sea Bubbles
                </span>
                <div className="flex items-center justify-center py-5">
                  <BubbleCluster />
                </div>
                <p className="text-xs text-teal-800/70 font-body">
                  Tactile glass highlights that drift gently without consuming GPU power.
                </p>
              </div>
            </div>

            {/* Storybook Flourish Demo */}
            <div className="p-6 rounded-2xl bg-sand-100/70 border border-sand-300 text-center">
              <span className="text-xs uppercase tracking-widest font-semibold text-teal-700 block mb-2">
                Storybook Section Divider Flourish
              </span>
              <StorybookFlourish />
              <p className="text-xs text-teal-800/75 max-w-md mx-auto font-body">
                Elegant center-aligned linework with miniature scallop and twin stars to rhythmically punctuate chapters.
              </p>
            </div>
          </div>
        )}

        {/* Tab 4: Deep Midnight Blue Night Scenes */}
        {activeTab === 'night' && (
          <div className="pt-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-midnight-950 text-ivory-50 border border-midnight-800 shadow-night relative overflow-hidden">
              {/* Starry Night Sky Accents */}
              <div className="absolute top-4 right-6 opacity-80" aria-hidden="true">
                <DecorativeStar size={16} color="#5BB5A2" className="animate-star-shimmer" />
              </div>
              <div className="absolute bottom-6 left-8 opacity-70" aria-hidden="true">
                <DecorativeStar size={12} color="#FF9E8A" className="animate-star-shimmer" />
              </div>
              <div className="absolute top-1/2 right-16 opacity-60" aria-hidden="true">
                <DecorativeBubble size={16} delay="1s" />
              </div>

              <div className="relative z-10 max-w-xl">
                <Badge variant="midnight" className="mb-3">
                  Nocturnal Horizon Mode
                </Badge>
                <h4 className="font-display text-2xl sm:text-3xl text-ivory-50 tracking-tight mb-2">
                  Deep Midnight Blue (#0B1124)
                </h4>
                <p className="font-body text-sm text-seaglass-200/80 leading-relaxed mb-6">
                  Engineered specifically for night scenes on Cleo’s magical beach and cosmic shell interiors, where celestial starlight illuminates bioluminescent flora and oceanic echoes.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="px-3.5 py-2 rounded-xl bg-midnight-900 border border-midnight-700 flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-midnight-950 border border-midnight-700" />
                    <span className="text-xs font-mono text-ivory-200">#0B1124 (Canvas)</span>
                  </div>
                  <div className="px-3.5 py-2 rounded-xl bg-midnight-900 border border-midnight-700 flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-seaglass-500" />
                    <span className="text-xs font-mono text-seaglass-300">#5BB5A2 (Bioluminescence)</span>
                  </div>
                  <div className="px-3.5 py-2 rounded-xl bg-midnight-900 border border-midnight-700 flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-coral-400" />
                    <span className="text-xs font-mono text-coral-300">#FF9E8A (Starlight Amber)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </StoryCard>
    </div>
  );
};
