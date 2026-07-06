import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import useReveal from '../hooks/useReveal';

const SITE_URL = 'https://www.rickmorginfranchising.com';

export default function InsightsPage() {
  useReveal();

  return (
    <>
      <SEO
        title="Franchise Insights"
        description="Practical franchise ownership insights from Richard Morgin for serious buyers evaluating business ownership opportunities."
        canonical="/insights"
        ogImage={`${SITE_URL}/images/insights/how-to-choose-the-right-franchise-thumb.png`}
      />

      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">

        {/* Hero */}
        <section className="insights-hero section" aria-labelledby="insights-hero-heading">
          <div className="section__inner insights-hero__inner">
            <div className="reveal">
              <p className="insights-hero__eyebrow">Richard Morgin Insights</p>
              <h1 id="insights-hero-heading" className="insights-hero__heading">
                Clarity for Serious Franchise Buyers
              </h1>
              <p className="insights-hero__body">
                Thoughtful guidance on franchise ownership, operating fit, capital readiness,
                and the questions worth asking before you invest.
              </p>
            </div>
          </div>
        </section>

        {/* Articles grid */}
        <section className="insights-grid section" aria-labelledby="insights-grid-heading">
          <div className="section__inner">
            <h2 id="insights-grid-heading" className="visually-hidden">Articles</h2>
            <div className="insights-grid__list">

              {/* Featured article card */}
              <Link
                to="/insights/how-to-choose-the-right-franchise"
                className="insight-card reveal"
                aria-label="Read: How to Choose the Right Franchise"
              >
                <div className="insight-card__image-wrap">
                  <img
                    src="/images/insights/how-to-choose-the-right-franchise-thumb.png"
                    alt="How to Choose the Right Franchise — a practical framework for serious buyers"
                    className="insight-card__image"
                    width={1200}
                    height={630}
                    loading="lazy"
                  />
                </div>
                <div className="insight-card__body">
                  <p className="insight-card__category">Franchise Ownership</p>
                  <h3 className="insight-card__title">
                    How to Choose the Right Franchise
                  </h3>
                  <p className="insight-card__excerpt">
                    A practical framework for evaluating franchise opportunities based on fit,
                    capital, lifestyle, and long-term goals.
                  </p>
                  <div className="insight-card__meta">
                    <span className="insight-card__reading-time">6 min read</span>
                    <span className="insight-card__read-label">Read Insight</span>
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
