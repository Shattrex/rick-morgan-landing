import { motion } from 'framer-motion';

export default function ProgressBar({ current, total, section }) {
  const pct = ((current) / total) * 100;

  return (
    <div className="no-print shrink-0">
      <div className="h-1 bg-white/5 relative">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-bella-purple to-bella-lavender"
          initial={false}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>
      {section && (
        <div className="px-4 md:px-8 py-1.5 flex justify-between items-center">
          <span className="text-[10px] uppercase tracking-[0.15em] text-white/40">{section}</span>
          <span className="text-[10px] text-white/30 tabular-nums">
            {Math.round(pct)}%
          </span>
        </div>
      )}
    </div>
  );
}
