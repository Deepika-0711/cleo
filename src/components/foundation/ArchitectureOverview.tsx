import React from 'react';
import { Badge } from '../../design-system/Badge';
import { DecorativeStar } from '../../design-system/DecorativeStars';
import { ShellIcon } from '../../design-system/ShellIcon';
import { StoryCard } from '../../design-system/StoryCard';
import {
  CLEO_CHARACTER_DOSSIER,
  MINIATURE_WORLDS_BLUEPRINT,
  PLANNED_SECTIONS,
} from '../../design-system/tokens';

export const ArchitectureOverview: React.FC = () => {
  return (
    <div className="space-y-10">
      {/* Structural Overview Header */}
      <div className="text-center max-w-2xl mx-auto">
        <Badge variant="seaglass" isCollectorStamp className="mb-3">
          Architecture Blueprint
        </Badge>
        <h3 className="font-display text-3xl sm:text-4xl text-teal-800 tracking-tight mb-2">
          Single-Page Interactive Architecture
        </h3>
        <p className="font-body text-sm sm:text-base text-teal-700/80 leading-relaxed">
          Structured roadmap of the 5 narrative sections planned for Cleo’s portfolio.
          Engineered for accessible keyboard flow, responsive scaling, and storybook pacing.
        </p>
      </div>

      {/* 5 Planned Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PLANNED_SECTIONS.map((section, idx) => (
          <StoryCard
            key={section.id}
            variant="storybook"
            className="flex flex-col justify-between hover:border-teal-600/30 hover:shadow-storybook transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-hand text-xs text-teal-700/80">
                  Section 0{idx + 1}
                </span>
                <Badge variant={idx === 1 ? 'coral' : idx === 3 ? 'seaglass' : 'sand'}>
                  #{section.id}
                </Badge>
              </div>

              <h4 className="font-display font-bold text-xl text-teal-900 mb-2">
                {section.label}
              </h4>
              <p className="font-body text-xs sm:text-sm text-teal-800/75 leading-relaxed mb-4">
                {section.description}
              </p>
            </div>

            <div className="pt-3 border-t border-teal-800/10 flex items-center justify-between text-[11px] font-mono text-teal-600">
              <span>Status: Scaffolding Ready</span>
              <DecorativeStar size={10} color="#5BB5A2" />
            </div>
          </StoryCard>
        ))}
      </div>

      {/* Contract Preview: Miniature Worlds & Five-Field Character Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
        {/* The Three Miniature Worlds Contract */}
        <StoryCard variant="sand" className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-sand-400/40">
            <div className="flex items-center gap-2">
              <ShellIcon variant="nautilus" size={24} color="#0C5A60" accentColor="#5BB5A2" />
              <h4 className="font-display text-xl text-teal-900 font-semibold">
                Three Miniature Worlds Contract
              </h4>
            </div>
            <Badge variant="teal">3 Horizons</Badge>
          </div>

          <p className="font-body text-xs text-teal-800/75 leading-relaxed">
            Data models and thematic palettes prepared for the subsequent interactive world-reveal task:
          </p>

          <div className="space-y-3">
            {MINIATURE_WORLDS_BLUEPRINT.map((world) => (
              <div
                key={world.id}
                className="p-3.5 rounded-xl bg-ivory-50/90 border border-sand-300 text-left"
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <ShellIcon
                      variant={
                        world.id === 'underwater'
                          ? 'nautilus'
                          : world.id === 'cloud'
                          ? 'conch'
                          : 'scallop'
                      }
                      size={18}
                      color={world.primaryColor}
                      accentColor={world.accentColor}
                    />
                    <span className="font-display text-sm font-bold text-teal-900">
                      {world.title}
                    </span>
                  </div>
                  <span className="text-[11px] font-hand text-coral-600 font-semibold">
                    {world.shellType}
                  </span>
                </div>
                <p className="text-xs font-body text-teal-800/70 leading-relaxed">
                  {world.ambientDescription}
                </p>
              </div>
            ))}
          </div>
        </StoryCard>

        {/* Five-Field Character Sheet Contract */}
        <StoryCard variant="seaglass" className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-seaglass-300">
            <div className="flex items-center gap-2">
              <DecorativeStar size={20} color="#0C5A60" />
              <h4 className="font-display text-xl text-teal-900 font-semibold">
                Five-Field Character Sheet Schema
              </h4>
            </div>
            <Badge variant="coral" isCollectorStamp>
              Verified Specs
            </Badge>
          </div>

          <p className="font-body text-xs text-teal-800/75 leading-relaxed">
            Formal schema prepared for Cleo's character profile in the "About Cleo" section:
          </p>

          <div className="space-y-2.5 text-xs font-body">
            <div className="p-2.5 rounded-lg bg-ivory-50/90 border border-seaglass-200">
              <span className="font-mono text-[10px] uppercase text-teal-600 block">
                Field 1: Name & Identity
              </span>
              <span className="font-semibold text-teal-900">{CLEO_CHARACTER_DOSSIER.name}</span>
            </div>

            <div className="p-2.5 rounded-lg bg-ivory-50/90 border border-seaglass-200">
              <span className="font-mono text-[10px] uppercase text-teal-600 block">
                Field 2: Calling & Role
              </span>
              <span className="font-semibold text-teal-900">{CLEO_CHARACTER_DOSSIER.calling}</span>
            </div>

            <div className="p-2.5 rounded-lg bg-ivory-50/90 border border-seaglass-200">
              <span className="font-mono text-[10px] uppercase text-teal-600 block">
                Field 3: Origin & Sanctuary
              </span>
              <span className="font-semibold text-teal-900">{CLEO_CHARACTER_DOSSIER.origin}</span>
            </div>

            <div className="p-2.5 rounded-lg bg-ivory-50/90 border border-seaglass-200">
              <span className="font-mono text-[10px] uppercase text-teal-600 block">
                Field 4: Treasured Artifact
              </span>
              <span className="font-semibold text-teal-900">
                {CLEO_CHARACTER_DOSSIER.treasuredItem}
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-ivory-50/90 border border-seaglass-200">
              <span className="font-mono text-[10px] uppercase text-teal-600 block">
                Field 5: Core Philosophy
              </span>
              <span className="font-semibold text-teal-900">
                "{CLEO_CHARACTER_DOSSIER.corePhilosophy}"
              </span>
            </div>
          </div>
        </StoryCard>
      </div>

      {/* Accessibility & Performance Checklist */}
      <div className="p-6 rounded-2xl bg-ivory-50 border border-sand-300">
        <h4 className="font-display text-lg text-teal-900 font-semibold mb-3 flex items-center gap-2">
          <span>Accessibility & Performance Guarantees</span>
          <DecorativeStar size={12} color="#F48B76" />
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-body text-teal-800/80">
          <div className="p-3 rounded-xl bg-white border border-sand-200">
            <span className="font-semibold text-teal-900 block mb-1">Keyboard Navigation</span>
            Accessible focus rings, landmark regions, and skip link to main content.
          </div>
          <div className="p-3 rounded-xl bg-white border border-sand-200">
            <span className="font-semibold text-teal-900 block mb-1">Reduced Motion</span>
            Respects `prefers-reduced-motion` with zero-duration graceful fallback.
          </div>
          <div className="p-3 rounded-xl bg-white border border-sand-200">
            <span className="font-semibold text-teal-900 block mb-1">Lightweight SVGs</span>
            All illustrations are pure math/curves; no heavy 3D or raster clutter.
          </div>
          <div className="p-3 rounded-xl bg-white border border-sand-200">
            <span className="font-semibold text-teal-900 block mb-1">Contrast & Legibility</span>
            High contrast ratios exceeding WCAG AA for comfortable reading.
          </div>
        </div>
      </div>
    </div>
  );
};
