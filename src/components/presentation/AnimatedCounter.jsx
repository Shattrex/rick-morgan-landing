import { useEffect, useState, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

export default function AnimatedCounter({
  value,
  duration = 1.5,
  decimals = 0,
  suffix = '',
  prefix = '',
  className = '',
}) {
  const [display, setDisplay] = useState(0);
  const reducedMotion = useReducedMotion();
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (value == null || reducedMotion) {
      setDisplay(value ?? 0);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const animate = (now) => {
            const progress = Math.min((now - start) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(value * eased);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration, reducedMotion]);

  const formatted =
    decimals > 0
      ? display.toFixed(decimals)
      : Math.round(display).toLocaleString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
