import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function TeamResponsibilityGrid({ alanto, bella }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-bella-purple/10 border border-bella-purple/30 rounded-2xl p-6"
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-bella-purple flex items-center justify-center text-white font-bold text-sm">
            AI
          </div>
          <div>
            <h3 className="text-white font-semibold">Alanto AI</h3>
            <p className="text-white/50 text-xs">Marketing & Growth</p>
          </div>
        </div>
        <ul className="space-y-2.5">
          {alanto.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06 }}
              className="flex items-start gap-2 text-sm text-white/70"
            >
              <CheckCircle2 className="w-4 h-4 text-bella-lavender shrink-0 mt-0.5" />
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-bella-gold/5 border border-bella-gold/30 rounded-2xl p-6"
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-bella-gold flex items-center justify-center text-bella-black font-bold text-sm">
            BI
          </div>
          <div>
            <h3 className="text-white font-semibold">Bella Team</h3>
            <p className="text-white/50 text-xs">Operations & Delivery</p>
          </div>
        </div>
        <ul className="space-y-2.5">
          {bella.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06 }}
              className="flex items-start gap-2 text-sm text-white/70"
            >
              <CheckCircle2 className="w-4 h-4 text-bella-gold shrink-0 mt-0.5" />
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
