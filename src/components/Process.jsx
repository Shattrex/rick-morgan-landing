const steps = [
  'Understand your goals',
  'Review your capital and lifestyle needs',
  'Match opportunities to your operator profile',
  'Study the model, support, territory, and economics',
  'Move forward with clarity, not pressure',
];

export default function Process() {
  return (
    <section className="process section" aria-labelledby="process-heading">
      <div className="section__inner process__inner">
        <div className="process__header reveal">
          <h2 id="process-heading" className="process__title">
            A calmer way to evaluate franchise ownership.
          </h2>
        </div>
        <ol className="process__steps">
          {steps.map((step, index) => (
            <li
              key={step}
              className={`process__step reveal reveal--delay-${(index % 3) + 1}`}
            >
              <span className="process__number" aria-hidden="true">
                {index + 1}
              </span>
              <p className="process__text">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
