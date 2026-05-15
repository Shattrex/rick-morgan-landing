const audiences = [
  'Corporate executives exploring ownership',
  'Investors looking for structured business models',
  'Professionals tired of starting from zero',
  'Families evaluating long-term business ownership',
  'Buyers who want guidance before making a major decision',
];

export default function WhoHelps() {
  return (
    <section className="who section" aria-labelledby="who-heading">
      <div className="section__inner who__inner">
        <div className="who__header reveal">
          <h2 id="who-heading" className="who__title">
            Who Richard helps
          </h2>
        </div>
        <ul className="who__list">
          {audiences.map((item, index) => (
            <li
              key={item}
              className={`who__item reveal reveal--delay-${(index % 3) + 1}`}
            >
              <span className="who__marker" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
