import { CALENDLY_URL } from '../constants';

export default function CalendlyButton({
  children = 'Talk With Richard',
  className = '',
  variant = 'primary',
}) {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn--${variant} ${className}`.trim()}
    >
      {children}
      <span className="visually-hidden"> (opens in a new tab)</span>
    </a>
  );
}
