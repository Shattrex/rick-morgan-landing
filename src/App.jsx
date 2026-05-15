import Header from './components/Header';
import Hero from './components/Hero';
import TrustIntro from './components/TrustIntro';
import Cards from './components/Cards';
import Quote from './components/Quote';
import WhoHelps from './components/WhoHelps';
import Process from './components/Process';
import CTA from './components/CTA';
import Footer from './components/Footer';
import useReveal from './hooks/useReveal';
import './index.css';

export default function App() {
  useReveal();

  return (
    <>
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
        <CTA />
      </main>
      <Footer />
    </>
  );
}
