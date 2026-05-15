import CalendlyButton from './CalendlyButton';

export default function CTA() {
  return (
    <section className="final-cta section" aria-labelledby="final-cta-heading">
      <div className="section__inner final-cta__inner reveal">
        <h2 id="final-cta-heading" className="final-cta__title">
          Before you ask which franchise to buy, ask what kind of operator you
          are.
        </h2>
        <CalendlyButton className="final-cta__btn" />
        <p className="final-cta__note">15-minute private franchise consultation</p>
      </div>
    </section>
  );
}
