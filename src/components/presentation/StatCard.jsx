import { motion } from 'framer-motion';
import { Users, AlertTriangle, Calendar, Building2, Star } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const iconMap = {
  users: Users,
  alert: AlertTriangle,
  calendar: Calendar,
  building: Building2,
  star: Star,
};

export default function StatCard({ stat, index }) {
  const ResolvedIcon = iconMap[stat.icon] || Users;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-bella-dark/60 border border-bella-purple/30 rounded-2xl p-6 backdrop-blur-sm hover:border-bella-lavender/50 transition-colors"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-2.5 rounded-xl bg-bella-purple/20">
          <ResolvedIcon className="w-5 h-5 text-bella-lavender" />
        </div>
      </div>
      <div className="text-3xl font-bold text-white mb-1">
        {stat.value != null ? (
          <AnimatedCounter
            value={stat.value}
            decimals={stat.decimals || 0}
            suffix={stat.suffix || ''}
          />
        ) : (
          <span className="text-2xl">{stat.text}</span>
        )}
      </div>
      <div className="text-bella-lavender font-medium text-sm mb-2">{stat.label}</div>
      <p className="text-white/50 text-xs leading-relaxed">{stat.note}</p>
    </motion.div>
  );
}
