import { useState } from 'react';
import JsonLd from './JsonLd';

const faqs = [
  {
    q: 'What does a franchise consultant do?',
    a: 'A franchise consultant helps prospective owners evaluate franchise opportunities in a more structured way. The goal is to understand your capital, lifestyle, operating strengths, and long-term goals before narrowing the field. A good process helps buyers ask better questions and make a more informed decision.',
  },
  {
    q: 'How do I know which franchise is right for me?',
    a: 'The right franchise is not always the most familiar brand. It should fit your investment comfort zone, the amount of time you want to commit, your ability to lead a team, and the type of business you are prepared to operate. The best starting point is understanding yourself before comparing opportunities.',
  },
  {
    q: 'How much money do I need to buy a franchise?',
    a: 'The answer depends on the model. Buyers should look beyond the initial franchise fee and consider equipment, build-out, working capital, staffing, inventory, marketing, and personal living expenses while the business gets established. The goal is to choose an opportunity you can support responsibly.',
  },
  {
    q: 'Can I explore franchise ownership while keeping my current job?',
    a: 'In some cases, yes. It depends on the franchise model, your timeline, and whether the business requires an owner-operator from day one. Some buyers begin their search while employed so they can evaluate options carefully before making a transition.',
  },
  {
    q: 'Do I need previous business ownership experience?',
    a: 'Not always. A franchise provides a system, training, and support, but it still requires discipline, leadership, communication, and a willingness to follow a proven model. The most important question is whether the opportunity fits your strengths and your willingness to operate it well.',
  },
  {
    q: 'What should I review before investing in a franchise?',
    a: 'Before moving forward, review the business model, investment requirements, territory, staffing needs, training, support, daily responsibilities, and the Franchise Disclosure Document. It is also important to speak with qualified professional advisors and conduct thorough due diligence.',
  },
  {
    q: 'How do I get started with Richard Morgin?',
    a: 'Start with a conversation about your goals, capital comfort zone, lifestyle, and what you want business ownership to provide. From there, Richard can help you think through the types of opportunities that may be worth evaluating.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq section" aria-labelledby="faq-heading">
      <JsonLd schema={faqSchema} />
      <div className="section__inner faq__inner">
        <div className="faq__header reveal">
          <h2 id="faq-heading" className="faq__title">
            Franchise Questions, Answered Clearly
          </h2>
          <p className="faq__intro">
            Franchise ownership is a major decision. Here are a few of the questions
            serious buyers should consider before moving forward.
          </p>
        </div>
        <dl className="faq__list">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.q}
                className={`faq__item reveal reveal--delay-${(i % 3) + 1}${isOpen ? ' faq__item--open' : ''}`}
              >
                <dt>
                  <button
                    className="faq__question"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                    onClick={() => toggle(i)}
                  >
                    <span>{item.q}</span>
                    <span className="faq__icon" aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className="faq__answer"
                  hidden={!isOpen}
                >
                  <p>{item.a}</p>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
