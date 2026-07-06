import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustIntro from '../components/TrustIntro';
import Cards from '../components/Cards';
import Quote from '../components/Quote';
import WhoHelps from '../components/WhoHelps';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import useReveal from '../hooks/useReveal';

const SITE_URL = 'https://www.rickmorginfranchising.com';

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Richard Morgin Franchise Consulting',
  url: SITE_URL,
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Richard Morgin',
  jobTitle: 'Senior Franchise Consultant',
  url: SITE_URL,
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Richard Morgin Franchise Consulting',
  description:
    'Richard Morgin helps serious franchise buyers evaluate opportunities with clarity, fit, discipline, and long-term perspective.',
  url: SITE_URL,
  founder: {
    '@type': 'Person',
    name: 'Richard Morgin',
  },
};

export default function HomePage() {
  useReveal();

  return (
    <>
      <SEO canonical="/" />
      <JsonLd schema={websiteSchema} />
      <JsonLd schema={personSchema} />
      <JsonLd schema={serviceSchema} />

      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <TrustIntro />
        <Cards />
        <Quote />
        <WhoHelps />
        <Process />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
