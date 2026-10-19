import React from 'react';
import { HeroPalaceSection } from './components/hero/HeroPalaceSection';
import { ShellCollectionSection } from './components/collection/ShellCollectionSection';
import { StoryJourneySection } from './components/story/StoryJourneySection';
import { LivingShellDiarySection } from './components/profile/LivingShellDiarySection';
import { StorybookFooter } from './components/layout/StorybookFooter';
import { Header } from './components/layout/Header';
import { BubbleBackground } from './design-system/BubbleBackground';
import { PrincessFairytaleDivider } from './design-system/OrganicBorder';
import { PaperTexture } from './design-system/PaperTexture';
import { SoundProvider } from './design-system/SoundContext';
import { ThemeProvider } from './design-system/ThemeContext';
import { useTheme } from './design-system/useTheme';

const AppContent: React.FC = () => {
  const { isMoonlight } = useTheme();

  return (
    <div
      className={`min-h-screen font-body relative transition-colors duration-700 ${
        isMoonlight
          ? 'bg-midnight-950 text-ivory-50 selection:bg-coral-500 selection:text-white'
          : 'bg-ivory-100 text-teal-800 selection:bg-coral-200 selection:text-teal-900'
      }`}
    >
      {/* Delicate floating magical bubbles floating upward across page background */}
      <BubbleBackground />

      {/* Tactile paper grain filter across viewport */}
      <PaperTexture />

      {/* Accessible Storybook Navigation Header with Theme Toggle */}
      <Header />

      <main id="main-content">
        {/* Section 1: The Enchanted Beach & Seashell Palace Hero */}
        <HeroPalaceSection />

        {/* Storybook Chapter Divider: Into the Shell Collection */}
        <div className="max-w-4xl mx-auto px-4" aria-hidden="true">
          <PrincessFairytaleDivider variant="shell" className="my-0 opacity-85" />
        </div>

        {/* Section 2: Interactive Shell Collection & Miniature Worlds */}
        <ShellCollectionSection />

        {/* Storybook Chapter Divider: Into Cleo's Story Journey */}
        <div className="max-w-4xl mx-auto px-4" aria-hidden="true">
          <PrincessFairytaleDivider variant="star" className="my-0 opacity-85" />
        </div>

        {/* Section 3: The Art-Directed Story Journey */}
        <StoryJourneySection />

        {/* Storybook Chapter Divider: Into Meet Cleo */}
        <div className="max-w-4xl mx-auto px-4" aria-hidden="true">
          <PrincessFairytaleDivider variant="pearl" className="my-0 opacity-85" />
        </div>

        {/* Section 4: Cleo's Living Shell Diary Character Profile */}
        <LivingShellDiarySection />
      </main>

      {/* Magical Storybook Colophon Footer */}
      <StorybookFooter />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <SoundProvider>
        <AppContent />
      </SoundProvider>
    </ThemeProvider>
  );
};

export default App;
