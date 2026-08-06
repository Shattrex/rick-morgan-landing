import { motion } from 'framer-motion';

export function AnimatedSection({ children, className = '', id }) {
  return (
    <motion.section
      id={id}
      className={`dt-section ${className}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}

export function FlowDiagram({ steps, activeIndex = -1 }) {
  return (
    <div className="dt-flow">
      {steps.map((step, i) => (
        <div key={step} style={{ width: '100%' }}>
          <motion.div
            className={`dt-flow__step${i <= activeIndex ? ' dt-flow__step--active' : ''}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
          >
            {step}
          </motion.div>
          {i < steps.length - 1 && (
            <div className="dt-flow__arrow" aria-hidden="true">
              ↓
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function PrimaryButton({ children, onClick, type = 'button' }) {
  return (
    <button type={type} className="dt-btn dt-btn--primary" onClick={onClick}>
      {children}
    </button>
  );
}

export function SecondaryButton({ children, onClick, href }) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="dt-btn dt-btn--secondary"
      >
        {children}
      </a>
    );
  }
  return (
    <button type="button" className="dt-btn dt-btn--secondary" onClick={onClick}>
      {children}
    </button>
  );
}

export function BrokerAvatar({ broker }) {
  return (
    <motion.div
      className="dt-avatar-card"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="dt-avatar-card__photo">
        <svg
          className="dt-avatar-card__silhouette"
          viewBox="0 0 120 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <ellipse cx="60" cy="42" rx="28" ry="32" fill="rgba(255,255,255,0.12)" />
          <path
            d="M20 160c0-28 18-48 40-48s40 20 40 48"
            fill="rgba(255,255,255,0.08)"
          />
          <rect x="35" y="95" width="50" height="55" rx="4" fill="rgba(255,255,255,0.06)" />
          <path
            d="M42 95 L60 78 L78 95"
            stroke="rgba(200,255,0,0.3)"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
        <span className="dt-avatar-card__badge">AI Digital Twin</span>
      </div>
      <div className="dt-avatar-card__body">
        <div className="dt-avatar-card__name">{broker.fullName}</div>
        <div className="dt-avatar-card__role">
          {broker.company} · {broker.location}
        </div>
        <p className="dt-avatar-card__tagline">
          Professional digital presence built from your voice, experience, and market expertise.
        </p>
      </div>
    </motion.div>
  );
}
