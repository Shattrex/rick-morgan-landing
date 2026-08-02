import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

const iconMap = {
  'user-check': LucideIcons.UserCheck,
  calendar: LucideIcons.Calendar,
  'message-circle': LucideIcons.MessageCircle,
  camera: LucideIcons.Camera,
};

export default function RequirementCard({ requirement, index }) {
  const Icon = iconMap[requirement.icon] || LucideIcons.Circle;
  const priorityColors = {
    critical: 'border-red-500/40 bg-red-500/5',
    high: 'border-bella-gold/40 bg-bella-gold/5',
    medium: 'border-bella-purple/30 bg-bella-purple/5',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`rounded-xl border p-5 ${priorityColors[requirement.priority] || priorityColors.medium}`}
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-bella-purple/20 shrink-0">
          <Icon className="w-5 h-5 text-bella-lavender" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h4 className="text-white font-semibold text-sm">{requirement.title}</h4>
            {requirement.priority === 'critical' && (
              <span className="text-[10px] uppercase tracking-wider text-red-400 font-bold">
                Critical
              </span>
            )}
          </div>
          <p className="text-white/60 text-xs leading-relaxed">{requirement.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
