import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

export default function RatingMeter({ current, target }) {
  const currentPct = (current / 5) * 100;
  const targetMinPct = (target.min / 5) * 100;

  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="relative w-40 h-40">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          <circle cx="50" cy="50" r="42" fill="none" stroke="#ffffff15" strokeWidth="8" />
          <motion.circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="#6D28D9"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${currentPct * 2.64} 264`}
            initial={{ strokeDasharray: '0 264' }}
            animate={{ strokeDasharray: `${currentPct * 2.64} 264` }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="2"
            strokeDasharray={`${targetMinPct * 2.64} 264`}
            opacity={0.5}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <AnimatedCounter value={current} decimals={1} className="text-3xl font-bold text-white" />
          <div className="flex gap-0.5 mt-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                className={`w-3 h-3 ${s <= Math.round(current) ? 'text-bella-gold fill-bella-gold' : 'text-white/20'}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-3 text-center md:text-left">
        <div>
          <div className="text-xs text-white/50 uppercase tracking-wider">Current Rating</div>
          <div className="text-lg text-white font-medium">
            <AnimatedCounter value={current} decimals={1} suffix=" / 5.0" />
          </div>
          <div className="text-xs text-white/40">Current reported data</div>
        </div>
        <div className="h-px bg-white/10" />
        <div>
          <div className="text-xs text-bella-gold uppercase tracking-wider">Strategic Target</div>
          <div className="text-lg text-bella-gold font-medium">
            {target.min}–{target.max} / 5.0
          </div>
        </div>
      </div>
    </div>
  );
}
