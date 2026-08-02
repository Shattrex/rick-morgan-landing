import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function PipelineFlow({ stages, earlyResult }) {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-0">
        {stages.map((stage, i) => (
          <div key={stage.label} className="flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.12 }}
              className="relative"
            >
              <div className="bg-bella-purple/20 border border-bella-purple/40 rounded-xl px-4 py-3 md:px-5 md:py-4 text-center min-w-[100px] md:min-w-[120px]">
                <div className="text-xs text-bella-lavender mb-1">Step {i + 1}</div>
                <div className="text-sm font-medium text-white">{stage.label}</div>
              </div>
              {i < stages.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-bella-lavender/40" />
              )}
            </motion.div>
            {i < stages.length - 1 && (
              <ArrowRight className="w-4 h-4 text-bella-lavender/50 mx-1 md:hidden shrink-0" />
            )}
          </div>
        ))}
      </div>

      {earlyResult && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: stages.length * 0.12 + 0.2 }}
          className="flex justify-center"
        >
          <div className="bg-bella-gold/10 border border-bella-gold/40 rounded-2xl px-8 py-5 text-center">
            <div className="text-xs uppercase tracking-wider text-bella-gold mb-1">
              {earlyResult.label}
            </div>
            <div className="text-4xl font-bold text-bella-gold mb-1">{earlyResult.value}</div>
            <p className="text-white/60 text-sm">{earlyResult.description}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
