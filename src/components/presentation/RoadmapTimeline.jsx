import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function RoadmapTimeline({ milestones }) {
  return (
    <div className="relative overflow-x-auto pb-4">
      <div className="flex gap-0 min-w-[800px] md:min-w-0">
        {milestones.map((milestone, i) => (
          <motion.div
            key={milestone.week}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="flex-1 relative"
          >
            <div className="flex flex-col items-center px-3">
              <div className="w-full h-1 bg-bella-purple/20 relative mb-6">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: i * 0.15 + 0.3, duration: 0.6 }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-bella-purple to-bella-lavender rounded-full"
                />
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-bella-purple border-2 border-bella-lavender flex items-center justify-center">
                  <span className="text-[10px] font-bold text-white">{i + 1}</span>
                </div>
              </div>
              <div className="bg-bella-dark/60 border border-bella-purple/30 rounded-xl p-4 w-full min-h-[160px]">
                <div className="text-bella-gold text-xs font-medium mb-1">{milestone.week}</div>
                <div className="text-white font-semibold text-sm mb-3">{milestone.title}</div>
                <ul className="space-y-1.5">
                  {milestone.items.map((item) => (
                    <li key={item} className="flex items-start gap-1.5 text-xs text-white/60">
                      <CheckCircle2 className="w-3 h-3 text-bella-lavender shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
