import CalendlyButton from './CalendlyButton';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__inner">
        <div className="hero__content reveal">
          <p className="hero__eyebrow">Senior Franchise Consultant</p>
          <h1 id="hero-heading" className="hero__headline">
            Most buyers do not need another franchise list.
          </h1>
          <p className="hero__subheadline">
            They need clarity, discipline, and a consultant who can help them
            understand which opportunity actually fits their capital,
            temperament, and long-term goals.
          </p>
          <div className="hero__cta">
            <CalendlyButton />
            <p className="hero__cta-note">
              15-minute private franchise consultation
            </p>
          </div>
        </div>
        <div className="hero__visual reveal reveal--delay">
          <div className="hero__image-card">
            <img
              src="/images/richard-morgan.png"
              alt="Richard Morgin, senior franchise consultant, standing on a balcony in professional attire"
              className="hero__image"
              width={640}
              height={800}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
