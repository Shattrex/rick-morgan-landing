import { Link } from 'react-router-dom';
import CalendlyButton from './CalendlyButton';

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="#top" className="header__brand" aria-label="Richard Morgin, home">
          <span className="header__name">Richard Morgin</span>
          <span className="header__role">Senior Franchise Consultant</span>
        </a>
        <nav className="header__nav" aria-label="Site navigation">
          <Link to="/insights" className="header__nav-link">
            Insights
          </Link>
          <CalendlyButton variant="header" className="header__cta">
            Talk With Richard
          </CalendlyButton>
        </nav>
      </div>
    </header>
  );
}
