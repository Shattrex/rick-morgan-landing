import { motion } from 'framer-motion';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import AnimatedCounter from './AnimatedCounter';

export default function TrafficChart({ chartData, current, target, locations }) {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <div className="flex items-end gap-6 mb-6">
          <div>
            <div className="text-xs text-white/50 uppercase tracking-wider mb-1">Current</div>
            <div className="text-4xl font-bold text-white">
              <AnimatedCounter value={current} suffix="" />
            </div>
            <div className="text-xs text-white/40">MAU — current reported data</div>
          </div>
          <div className="text-white/30 text-2xl pb-1">→</div>
          <div>
            <div className="text-xs text-bella-gold uppercase tracking-wider mb-1">
              Strategic Target
            </div>
            <div className="text-4xl font-bold text-bella-gold">
              {target.min.toLocaleString()}–{target.max.toLocaleString()}
            </div>
            <div className="text-xs text-white/40">Monthly visitors</div>
          </div>
        </div>

        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="trafficGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6D28D9" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#6D28D9" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" stroke="#ffffff40" tick={{ fill: '#ffffff60', fontSize: 12 }} />
              <YAxis stroke="#ffffff20" tick={{ fill: '#ffffff40', fontSize: 11 }} />
              <Tooltip
                contentStyle={{
                  background: '#3B0764',
                  border: '1px solid #6D28D9',
                  borderRadius: 8,
                  color: '#fff',
                }}
              />
              <ReferenceLine y={target.min} stroke="#D4AF37" strokeDasharray="4 4" label={{ value: 'Target', fill: '#D4AF37', fontSize: 10 }} />
              <Area
                type="monotone"
                dataKey="visitors"
                stroke="#A78BFA"
                strokeWidth={2}
                fill="url(#trafficGrad)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="relative bg-bella-dark/50 border border-bella-purple/20 rounded-2xl p-6 min-h-[280px]"
      >
        <div className="text-xs uppercase tracking-wider text-bella-lavender mb-4">
          Portland Metro Coverage
        </div>
        <div className="relative h-48 flex items-center justify-center">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-bella-purple/10 to-bella-dark/30" />
          {locations.map((loc, i) => {
            const positions = [
              { top: '20%', left: '30%' },
              { top: '45%', left: '55%' },
              { top: '60%', left: '25%' },
              { top: '35%', left: '70%' },
            ];
            const pos = positions[i] || { top: '50%', left: '50%' };
            return (
              <motion.div
                key={loc}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="absolute"
                style={pos}
              >
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-bella-purple animate-pulse" />
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-white/70 font-medium">
                    {loc}
                  </div>
                </div>
              </motion.div>
            );
          })}
          <div className="text-white/20 text-sm font-display">Beaverton HQ</div>
        </div>
      </motion.div>
    </div>
  );
}
