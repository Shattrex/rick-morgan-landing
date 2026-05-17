import CalendlyButton from './CalendlyButton';

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="#top" className="header__brand" aria-label="Richard Morgin, home">
          <span className="header__name">Richard Morgin</span>
          <span className="header__role">Senior Franchise Consultant</span>
        </a>
        <CalendlyButton variant="header" className="header__cta">
          Talk With Richard
        </CalendlyButton>
      </div>
    </header>
  );
}
