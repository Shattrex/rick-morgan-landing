import { Maximize, Minimize } from 'lucide-react';

export default function FullScreenToggle({ isFullscreen, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="no-print p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-bella-purple"
      aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
      title={isFullscreen ? 'Exit fullscreen (Esc)' : 'Fullscreen'}
    >
      {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
    </button>
  );
}
