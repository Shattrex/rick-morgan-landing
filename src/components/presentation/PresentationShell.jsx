import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { slides, totalSlides } from '../../data/presentation';
import Slide from './Slide';
import SlideRenderer from './SlideRenderer';
import SlideNavigation from './SlideNavigation';
import ProgressBar from './ProgressBar';
import FullScreenToggle from './FullScreenToggle';

export default function PresentationShell() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [showOverview, setShowOverview] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentSlide = slides[currentIndex];

  const goTo = useCallback(
    (index) => {
      if (index < 0 || index >= totalSlides) return;
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
      setShowOverview(false);
    },
    [currentIndex]
  );

  const next = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
  const prev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

  useEffect(() => {
    const handleKey = (e) => {
      if (showOverview) {
        if (e.key === 'Escape') setShowOverview(false);
        return;
      }
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          next();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          prev();
          break;
        case 'Home':
          e.preventDefault();
          goTo(0);
          break;
        case 'End':
          e.preventDefault();
          goTo(totalSlides - 1);
          break;
        case 'o':
        case 'O':
          setShowOverview((v) => !v);
          break;
        case 'f':
        case 'F':
          toggleFullscreen();
          break;
        case 'Escape':
          if (isFullscreen) exitFullscreen();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next, prev, goTo, showOverview, isFullscreen]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().then(() => setIsFullscreen(true));
    } else {
      document.exitFullscreen?.().then(() => setIsFullscreen(false));
    }
  };

  const exitFullscreen = () => {
    document.exitFullscreen?.().then(() => setIsFullscreen(false));
  };

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  return (
    <div id="presentation-root" className="h-screen w-screen flex flex-col bg-bella-black overflow-hidden">
      {/* Top bar */}
      <div className="no-print shrink-0 flex items-center justify-between px-4 md:px-8 py-2 bg-bella-black/90 backdrop-blur-sm border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-bella-purple flex items-center justify-center">
            <span className="text-white text-xs font-bold">B</span>
          </div>
          <span className="text-white/60 text-xs hidden sm:inline">
            Bella Institute — Growth Roadmap 2026
          </span>
        </div>
        <FullScreenToggle isFullscreen={isFullscreen} onToggle={toggleFullscreen} />
      </div>

      <ProgressBar
        current={currentIndex + 1}
        total={totalSlides}
        section={currentSlide.section}
      />

      {/* Slide area */}
      <main className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <Slide
            key={currentSlide.id}
            slideKey={currentSlide.id}
            direction={direction}
            variant={currentSlide.type === 'cover' || currentSlide.type === 'final' ? 'dark' : 'dark'}
          >
            <SlideRenderer
              slide={currentSlide}
              onStart={() => goTo(1)}
            />
          </Slide>
        </AnimatePresence>
      </main>

      <SlideNavigation
        onPrev={prev}
        onNext={next}
        onOverview={() => setShowOverview(true)}
        current={currentIndex + 1}
        total={totalSlides}
        canPrev={currentIndex > 0}
        canNext={currentIndex < totalSlides - 1}
      />

      {/* Overview menu */}
      <AnimatePresence>
        {showOverview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-bella-black/95 backdrop-blur-md overflow-y-auto p-6 md:p-10"
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-white font-display text-2xl">Slide Overview</h2>
                <button
                  onClick={() => setShowOverview(false)}
                  className="text-white/50 hover:text-white text-sm"
                >
                  Close (Esc)
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {slides.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => goTo(i)}
                    className={`text-left rounded-xl p-4 border transition-colors ${
                      i === currentIndex
                        ? 'bg-bella-purple/20 border-bella-purple'
                        : 'bg-white/5 border-white/10 hover:border-bella-purple/50'
                    }`}
                  >
                    <div className="text-bella-gold text-[10px] uppercase tracking-wider mb-1">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="text-white text-sm font-medium leading-snug">{s.title}</div>
                    <div className="text-white/40 text-[10px] mt-1">{s.section}</div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}