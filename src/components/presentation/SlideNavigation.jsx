import { ChevronLeft, ChevronRight, Grid3X3 } from 'lucide-react';

export default function SlideNavigation({
  onPrev,
  onNext,
  onOverview,
  current,
  total,
  canPrev,
  canNext,
}) {
  return (
    <nav
      className="no-print flex items-center justify-between gap-4 px-4 md:px-8 py-3 bg-bella-black/80 backdrop-blur-md border-t border-white/5"
      aria-label="Slide navigation"
    >
      <button
        onClick={onPrev}
        disabled={!canPrev}
        className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-bella-purple"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="hidden sm:inline">Previous</span>
      </button>

      <div className="flex items-center gap-3">
        <button
          onClick={onOverview}
          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-bella-purple"
          aria-label="Slide overview"
          title="Overview (O)"
        >
          <Grid3X3 className="w-4 h-4" />
        </button>
        <span className="text-white/50 text-sm tabular-nums">
          {current} / {total}
        </span>
      </div>

      <button
        onClick={onNext}
        disabled={!canNext}
        className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-bella-purple hover:bg-bella-purple/80 disabled:opacity-30 disabled:cursor-not-allowed text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-bella-lavender"
        aria-label="Next slide"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
}
