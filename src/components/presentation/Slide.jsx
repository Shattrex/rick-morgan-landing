import { motion } from 'framer-motion';

const variants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 80 : -80,
    scale: 0.96,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -80 : 80,
    scale: 0.96,
  }),
};

export default function Slide({ children, slideKey, direction, className = '', variant = 'dark' }) {
  const bgClass =
    variant === 'light'
      ? 'bg-bella-offwhite text-bella-black'
      : 'bg-gradient-to-br from-bella-black via-bella-dark to-bella-black text-white';

  return (
    <motion.section
      key={slideKey}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute inset-0 flex flex-col overflow-hidden ${bgClass} ${className}`}
      aria-label="Presentation slide"
    >
      {children}
    </motion.section>
  );
}

export function SlideHeader({ section, title, subtitle, light = false }) {
  return (
    <header className="px-8 md:px-16 pt-10 md:pt-14 pb-6 shrink-0">
      {section && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`text-xs uppercase tracking-[0.2em] font-medium mb-3 ${
            light ? 'text-bella-purple' : 'text-bella-gold'
          }`}
        >
          {section}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className={`font-display text-3xl md:text-5xl font-semibold leading-tight mb-3 ${
          light ? 'text-bella-dark' : 'text-white'
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className={`text-sm md:text-base max-w-2xl ${
            light ? 'text-bella-black/60' : 'text-white/60'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </header>
  );
}

export function SlideContent({ children, className = '' }) {
  return (
    <div className={`flex-1 px-8 md:px-16 pb-8 overflow-y-auto ${className}`}>
      {children}
    </div>
  );
}
