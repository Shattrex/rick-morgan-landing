import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Camera,
  Mic,
  ClipboardList,
  Building2,
  Search,
  Repeat,
  User,
} from 'lucide-react';
import {
  buildIntroParagraph,
  buildPersonalizedIntro,
  CONTENT_EXAMPLES,
  STEP_IDS,
  STEP_LABELS,
} from './brokerUtils';
import {
  AnimatedSection,
  FlowDiagram,
  PrimaryButton,
  SecondaryButton,
  BrokerAvatar,
} from './shared';

const PERCEPTION_FLOW = [
  'Seller considers exiting',
  'Searches for guidance',
  'Finds brokers online',
  'Studies their content and reputation',
  'Chooses who feels most trustworthy',
];

const AUTHORITY_FLOW = [
  'AI Digital Twin',
  'Educational Videos',
  'LinkedIn',
  'Facebook',
  'Website Articles',
  'Google Search',
  'Business Owners Discover You',
  'Trust Builds',
  'Seller Conversations',
];

const ENGINE_INPUTS = [
  { icon: Camera, label: '4 professional images' },
  { icon: Mic, label: '30-second voice sample' },
  { icon: ClipboardList, label: 'Broker questionnaire' },
  { icon: Building2, label: 'Brand and market information' },
];

const TIMELINE_PHASES = [
  {
    days: 'Days 1–14',
    title: 'Build',
    items: [
      'Voice adaptation',
      'Digital twin creation',
      'Positioning',
      'Content themes',
      'Visual identity',
    ],
  },
  {
    days: 'Days 15–45',
    title: 'Establish',
    items: [
      'LinkedIn content',
      'Facebook content',
      'Educational videos',
      'Search-focused articles',
      'Consistent publishing',
    ],
  },
  {
    days: 'Days 46–90',
    title: 'Compound',
    items: [
      'Content optimization',
      'Audience growth',
      'Search visibility',
      'Authority building',
      'Seller-focused messaging',
    ],
  },
];

const BEFORE_ITEMS = [
  'Expertise mostly visible during meetings',
  'Limited personal content',
  'Generic brokerage presence',
  'Inconsistent publishing',
  'No scalable personal voice',
  'Referral prospects still need convincing',
];

const AFTER_ITEMS = [
  'Recognizable personal brand',
  'Educational content in your voice',
  'Consistent online presence',
  'Searchable professional expertise',
  'Stronger trust before meetings',
  'A growing digital asset',
];

export default function DigitalTwinPresentation() {
  const [broker, setBroker] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [enginePhase, setEnginePhase] = useState('inputs');
  const [engineStarted, setEngineStarted] = useState(false);
  const [twinVisible, setTwinVisible] = useState(false);
  const [activeContent, setActiveContent] = useState(null);
  const [flowActive, setFlowActive] = useState(-1);
  const containerRef = useRef(null);

  const scrollToStep = useCallback((index) => {
    const el = document.getElementById(STEP_IDS[index]);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveStep(index);
    }
  }, []);

  useEffect(() => {
    if (!broker) return;

    const sections = STEP_IDS.slice(1).map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = STEP_IDS.indexOf(entry.target.id);
            if (idx >= 0) setActiveStep(idx);
          }
        });
      },
      { threshold: 0.35, rootMargin: '-20% 0px -20% 0px' }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [broker]);

  useEffect(() => {
    if (activeStep !== 3 || engineStarted) return;
    const timer = setTimeout(() => {
      setEngineStarted(true);
      setEnginePhase('animating');
      setTimeout(() => setEnginePhase('ready'), 2400);
    }, 800);
    return () => clearTimeout(timer);
  }, [activeStep, engineStarted]);

  useEffect(() => {
    if (activeStep !== 2) return;
    setFlowActive(-1);
    const timers = PERCEPTION_FLOW.map((_, i) =>
      setTimeout(() => setFlowActive(i), 400 + i * 500)
    );
    return () => timers.forEach(clearTimeout);
  }, [activeStep]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = {
      firstName: fd.get('firstName').trim(),
      fullName: fd.get('fullName').trim(),
      company: fd.get('company').trim(),
      description: fd.get('description').trim(),
      location: fd.get('location').trim(),
    };
    setBroker(data);
    setTimeout(() => scrollToStep(1), 100);
  };

  const handleGenerateTwin = () => {
    setTwinVisible(true);
  };

  const progress = broker
    ? Math.round(((activeStep + 1) / STEP_IDS.length) * 100)
    : 5;

  return (
    <div id="digital-twin-root" ref={containerRef}>
      <div className="dt-brand-bar">
        <div className="dt-brand-bar__logo">
          AI <span>Digital Twin</span> Infrastructure
        </div>
        <div className="dt-brand-bar__tagline">Be everywhere without being everywhere</div>
      </div>

      {broker && (
        <>
          <div className="dt-progress" aria-hidden="true">
            <div className="dt-progress__bar" style={{ width: `${progress}%` }} />
          </div>
          <nav className="dt-nav-dots" aria-label="Presentation sections">
            {STEP_IDS.slice(1).map((id, i) => (
              <button
                key={id}
                type="button"
                className={`dt-nav-dot${activeStep === i + 1 ? ' dt-nav-dot--active' : ''}`}
                onClick={() => scrollToStep(i + 1)}
                aria-label={STEP_LABELS[i + 1]}
              />
            ))}
          </nav>
        </>
      )}

      {/* Step 1: Broker Form */}
      <section id="form" className="dt-section dt-section--form">
        <div className="dt-inner">
          <p className="dt-eyebrow">Interactive Presentation</p>
          <h1 className="dt-headline">AI Digital Twin Infrastructure</h1>
          <p className="dt-subheadline">
            A personalized walkthrough of how your professional experience can become a
            digital presence that works for you—without requiring you to be on camera every week.
          </p>

          {!broker ? (
            <form className="dt-form" onSubmit={handleFormSubmit}>
              <div className="dt-field">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  placeholder="Charles"
                  autoComplete="given-name"
                />
              </div>
              <div className="dt-field">
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  placeholder="Charles Whitfield"
                  autoComplete="name"
                />
              </div>
              <div className="dt-field">
                <label htmlFor="company">Brokerage or Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  placeholder="Whitfield Business Advisors"
                />
              </div>
              <div className="dt-field">
                <label htmlFor="description">Broker Description</label>
                <textarea
                  id="description"
                  name="description"
                  required
                  placeholder="Built, scaled, and exited businesses. Specializes in helping owners prepare for profitable exits."
                />
              </div>
              <div className="dt-field">
                <label htmlFor="location">Primary Market or Location</label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  required
                  placeholder="Hampton Roads, Virginia"
                />
              </div>
              <div className="dt-btn-row">
                <PrimaryButton type="submit">Build My Personalized Infrastructure</PrimaryButton>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="dt-quote-box"
            >
              <p>{buildPersonalizedIntro(broker)}</p>
              <div className="dt-btn-row">
                <PrimaryButton onClick={() => scrollToStep(1)}>
                  Continue Presentation
                </PrimaryButton>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {broker && (
        <>
          {/* Step 2: Personalized Introduction */}
          <AnimatedSection id="intro">
            <div className="dt-inner">
              <div className="dt-name-display">{broker.fullName}</div>
              <p className="dt-eyebrow">{broker.company}</p>
              <h2 className="dt-headline dt-headline--sm">
                Your reputation is already valuable. The problem is that most sellers cannot
                experience it until they speak with you.
              </h2>
              <p className="dt-lead">{buildIntroParagraph(broker)}</p>
              <div className="dt-btn-row">
                <PrimaryButton onClick={() => scrollToStep(2)}>
                  See the Perception Gap
                </PrimaryButton>
              </div>
            </div>
          </AnimatedSection>

          {/* Step 3: The Perception Gap */}
          <AnimatedSection id="perception-gap">
            <div className="dt-inner">
              <p className="dt-eyebrow">The Perception Gap</p>
              <h2 className="dt-headline dt-headline--sm">Perception Matters</h2>
              <p className="dt-body">
                Sellers do not always choose the most experienced broker. They often choose the
                broker who appears most credible, visible, familiar, and authoritative before
                the first conversation.
              </p>

              <FlowDiagram steps={PERCEPTION_FLOW} activeIndex={flowActive} />

              <p className="dt-body" style={{ marginTop: '2rem', textAlign: 'center' }}>
                Your experience may be <span className="dt-highlight">stronger</span> than your
                digital presence.
              </p>

              <div className="dt-card-grid">
                <div className="dt-card">
                  <h3 className="dt-card__title">Strong real-world experience</h3>
                  <p className="dt-card__text">
                    Years of deals, relationships, and market knowledge that sellers would value—if
                    they could see it.
                  </p>
                </div>
                <div className="dt-card">
                  <h3 className="dt-card__title">Limited time to create content</h3>
                  <p className="dt-card__text">
                    {broker.firstName} should not have to record videos every week just to prove
                    what {broker.firstName} already knows.
                  </p>
                </div>
                <div className="dt-card">
                  <h3 className="dt-card__title">Expertise not visible at scale</h3>
                  <p className="dt-card__text">
                    What makes {broker.firstName} exceptional in a meeting stays hidden from the
                    thousands of sellers searching online.
                  </p>
                </div>
              </div>

              <div className="dt-btn-row">
                <PrimaryButton onClick={() => scrollToStep(3)}>
                  Build My Digital Presence
                </PrimaryButton>
              </div>
            </div>
          </AnimatedSection>

          {/* Step 4: AI Digital Twin Infrastructure */}
          <AnimatedSection id="infrastructure">
            <div className="dt-inner dt-inner--wide">
              <p className="dt-eyebrow">The Solution</p>
              <h2 className="dt-headline dt-headline--sm">Be Everywhere Without Being Everywhere</h2>
              <p className="dt-subheadline">
                We build a digital version of your professional presence using your voice,
                experience, perspective, and communication style.
              </p>

              <div className="dt-engine">
                <div className="dt-engine__inputs">
                  {ENGINE_INPUTS.map(({ icon: Icon, label }, i) => (
                    <motion.div
                      key={label}
                      className="dt-engine__input-card"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      animate={
                        enginePhase === 'animating'
                          ? {
                              x: [0, 0, 80 - (i % 2) * 160, 0],
                              y: [0, 0, 60, 120],
                              opacity: [1, 1, 0.6, 0],
                            }
                          : enginePhase === 'ready' || twinVisible
                            ? { opacity: 0.35, scale: 0.96 }
                            : {}
                      }
                      transition={
                        enginePhase === 'animating'
                          ? { duration: 2, delay: i * 0.15, ease: 'easeInOut' }
                          : enginePhase === 'inputs'
                            ? { delay: i * 0.1 }
                            : { duration: 0.4 }
                      }
                    >
                      <span className="dt-engine__input-icon">
                        <Icon size={18} />
                      </span>
                      {label}
                    </motion.div>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  {enginePhase === 'animating' && (
                    <motion.div
                      key="processing"
                      className="dt-engine__core"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="dt-engine__core-label">Processing</div>
                      <div className="dt-engine__core-title">AI Engine</div>
                      <motion.div
                        style={{
                          width: '100%',
                          height: 4,
                          background: 'rgba(255,255,255,0.1)',
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginTop: 8,
                        }}
                      >
                        <motion.div
                          style={{
                            height: '100%',
                            background: '#c8ff00',
                            borderRadius: 999,
                          }}
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 2, ease: 'easeInOut' }}
                        />
                      </motion.div>
                    </motion.div>
                  )}

                  {(enginePhase === 'ready' || twinVisible) && (
                    <motion.div
                      key="ready"
                      className="dt-engine__core"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div className="dt-engine__core-label">Complete</div>
                      <div className="dt-engine__core-title">Your AI Digital Twin</div>
                      <p
                        style={{
                          fontSize: '0.875rem',
                          color: 'rgba(255,255,255,0.65)',
                          lineHeight: 1.6,
                          marginTop: 8,
                        }}
                      >
                        Within approximately two weeks, we create a professional digital twin that
                        can communicate in your voice, reflect your style, and educate your market
                        without requiring you to step in front of a camera.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {enginePhase === 'ready' && !twinVisible && (
                  <div className="dt-btn-row" style={{ justifyContent: 'center' }}>
                    <PrimaryButton onClick={handleGenerateTwin}>
                      Generate Digital Twin
                    </PrimaryButton>
                  </div>
                )}

                {twinVisible && <BrokerAvatar broker={broker} />}
              </div>

              {twinVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="dt-btn-row"
                  style={{ justifyContent: 'center' }}
                >
                  <PrimaryButton onClick={() => scrollToStep(4)}>
                    See What It Creates
                  </PrimaryButton>
                </motion.div>
              )}
            </div>
          </AnimatedSection>

          {/* Step 5: Generate Content */}
          <AnimatedSection id="generate-content">
            <div className="dt-inner">
              <p className="dt-eyebrow">Content Generation</p>
              <h2 className="dt-headline dt-headline--sm">
                Your Digital Twin Creates Content in Your Voice
              </h2>
              <p className="dt-subheadline">
                Select a content type to see how {broker.firstName}&apos;s expertise becomes
                professional, market-ready material.
              </p>

              <div className="dt-content-btns">
                {[
                  { key: 'video', label: 'Generate Seller Video' },
                  { key: 'linkedin', label: 'Generate LinkedIn Post' },
                  { key: 'article', label: 'Generate Educational Article' },
                  { key: 'insight', label: 'Generate Market Insight' },
                ].map(({ key, label }) => (
                  <button
                    key={key}
                    type="button"
                    className={`dt-content-btn${activeContent === key ? ' dt-content-btn--active' : ''}`}
                    onClick={() => setActiveContent(key)}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {activeContent && (
                  <motion.div
                    key={activeContent}
                    className="dt-content-preview"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4 }}
                  >
                    {(() => {
                      const example = CONTENT_EXAMPLES[activeContent](broker);
                      return (
                        <>
                          <div className="dt-content-preview__type">{example.type}</div>
                          <h3 className="dt-content-preview__title">{example.title}</h3>
                          <p className="dt-content-preview__body" style={{ whiteSpace: 'pre-line' }}>
                            {example.body}
                          </p>
                        </>
                      );
                    })()}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="dt-btn-row">
                <PrimaryButton onClick={() => scrollToStep(5)}>
                  See the Authority Engine
                </PrimaryButton>
              </div>
            </div>
          </AnimatedSection>

          {/* Step 6: Organic Authority Engine */}
          <AnimatedSection id="authority-engine">
            <div className="dt-inner">
              <p className="dt-eyebrow">Organic Authority</p>
              <h2 className="dt-headline dt-headline--sm">
                Turn Your Experience Into an Audience
              </h2>

              <FlowDiagram steps={AUTHORITY_FLOW} activeIndex={AUTHORITY_FLOW.length - 1} />

              <p className="dt-body" style={{ marginTop: '2rem' }}>
                We do not create random social media content. We turn your knowledge into
                educational content designed around the questions business owners are already
                asking.
              </p>

              <div className="dt-card-grid">
                <div className="dt-card">
                  <span className="dt-engine__input-icon" style={{ marginBottom: '0.75rem' }}>
                    <Search size={18} />
                  </span>
                  <h3 className="dt-card__title">Searchable</h3>
                  <p className="dt-card__text">
                    Your name and expertise become easier to discover online.
                  </p>
                </div>
                <div className="dt-card">
                  <span className="dt-engine__input-icon" style={{ marginBottom: '0.75rem' }}>
                    <Repeat size={18} />
                  </span>
                  <h3 className="dt-card__title">Consistent</h3>
                  <p className="dt-card__text">
                    Your presence continues growing without depending on your availability.
                  </p>
                </div>
                <div className="dt-card">
                  <span className="dt-engine__input-icon" style={{ marginBottom: '0.75rem' }}>
                    <User size={18} />
                  </span>
                  <h3 className="dt-card__title">Personal</h3>
                  <p className="dt-card__text">
                    The content reflects your voice, market, experience, and professional style.
                  </p>
                </div>
              </div>

              <div className="dt-btn-row">
                <PrimaryButton onClick={() => scrollToStep(6)}>
                  View the 90-Day Plan
                </PrimaryButton>
              </div>
            </div>
          </AnimatedSection>

          {/* Step 7: 90-Day Timeline */}
          <AnimatedSection id="timeline">
            <div className="dt-inner dt-inner--wide">
              <p className="dt-eyebrow">90-Day Infrastructure</p>
              <h2 className="dt-headline dt-headline--sm">
                Build the Perception of a Market Leader in 90 Days
              </h2>

              <div className="dt-timeline">
                {TIMELINE_PHASES.map((phase, i) => (
                  <motion.div
                    key={phase.title}
                    className="dt-timeline__phase"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                  >
                    <div className="dt-timeline__days">{phase.days}</div>
                    <h3 className="dt-timeline__title">{phase.title}</h3>
                    <ul className="dt-timeline__list">
                      {phase.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <p className="dt-disclaimer">
                Results depend on the market, consistency, existing reputation, and audience
                response. The objective is to build a long-term digital asset that compounds over
                time.
              </p>

              <div className="dt-btn-row">
                <PrimaryButton onClick={() => scrollToStep(7)}>
                  See Before &amp; After
                </PrimaryButton>
              </div>
            </div>
          </AnimatedSection>

          {/* Step 8: Before and After */}
          <AnimatedSection id="before-after">
            <div className="dt-inner dt-inner--wide">
              <p className="dt-eyebrow">The Transformation</p>
              <h2 className="dt-headline dt-headline--sm">Before and After</h2>

              <div className="dt-before-after">
                <div className="dt-before-after__col dt-before-after__col--before">
                  <div className="dt-before-after__label">Before</div>
                  <ul className="dt-before-after__list">
                    {BEFORE_ITEMS.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="dt-before-after__col dt-before-after__col--after">
                  <div className="dt-before-after__label">After</div>
                  <ul className="dt-before-after__list">
                    {AFTER_ITEMS.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="dt-btn-row">
                <PrimaryButton onClick={() => scrollToStep(8)}>
                  Take the Next Step
                </PrimaryButton>
              </div>
            </div>
          </AnimatedSection>

          {/* Step 9: Final CTA */}
          <AnimatedSection id="final-cta">
            <div className="dt-inner dt-final">
              <p className="dt-eyebrow">Your Next Step</p>
              <h2 className="dt-headline dt-headline--sm">
                {broker.firstName}, your experience should be working for you every day.
              </h2>
              <p className="dt-subheadline">
                We can build a personalized AI Digital Twin Infrastructure around your voice,
                expertise, market, and professional identity.
              </p>

              <div className="dt-btn-row">
                <PrimaryButton onClick={() => scrollToStep(0)}>
                  Build My Personalized Version
                </PrimaryButton>
                <SecondaryButton href="https://cal.com/your-link">
                  Book a Strategy Session
                </SecondaryButton>
              </div>

              <a
                href="https://cal.com/your-link"
                target="_blank"
                rel="noopener noreferrer"
                className="dt-cal-link"
              >
                https://cal.com/your-link
              </a>
            </div>
          </AnimatedSection>
        </>
      )}
    </div>
  );
}
