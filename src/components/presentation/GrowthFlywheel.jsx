import { motion } from 'framer-motion';
import { ArrowRight, RefreshCw } from 'lucide-react';

export default function GrowthFlywheel({ steps, phases }) {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="relative flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute w-48 h-48 md:w-56 md:h-56 rounded-full border border-bella-purple/20 border-dashed"
        />
        <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-bella-purple/10 border border-bella-purple/30 flex items-center justify-center">
          <RefreshCw className="w-10 h-10 text-bella-lavender" />
        </div>
        {steps.map((step, i) => {
          const angle = (i / steps.length) * 360 - 90;
          const rad = (angle * Math.PI) / 180;
          const radius = 130;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;
          return (
            <motion.div
              key={step}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="absolute bg-bella-dark border border-bella-purple/40 rounded-lg px-3 py-2 text-xs font-medium text-white whitespace-nowrap"
              style={{ transform: `translate(${x}px, ${y}px)` }}
            >
              {step}
            </motion.div>
          );
        })}
      </div>

      <div className="space-y-4">
        {phases.map((phase, i) => (
          <motion.div
            key={phase.phase}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            className="bg-bella-dark/50 border border-bella-purple/20 rounded-xl p-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-bella-gold text-xs font-bold">{phase.phase}</span>
              <span className="text-white/30 text-xs">strategic target</span>
            </div>
            <ul className="space-y-1">
              {phase.targets.map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-white/70">
                  <ArrowRight className="w-3 h-3 text-bella-lavender shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
