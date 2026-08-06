export function buildIntroParagraph(broker) {
  const { firstName, description, location, company } = broker;
  const desc = description.trim();

  if (desc.length > 20) {
    const cleaned = desc.endsWith('.') ? desc.slice(0, -1) : desc;
    return `${firstName} ${cleaned.charAt(0).toLowerCase() + cleaned.slice(1)}. That experience gives ${firstName} a perspective most brokers cannot offer. But unless a seller speaks with ${firstName} directly, much of that value remains invisible.`;
  }

  return `${firstName} brings deep experience serving business owners in ${location}. That background gives ${firstName} a perspective most brokers cannot offer. But unless a seller speaks with ${firstName} directly, much of that value remains invisible.`;
}

export function buildPersonalizedIntro(broker) {
  const { firstName } = broker;
  return `${firstName}, here is how your experience can become a digital presence that works even when you are not actively marketing.`;
}

export const CONTENT_EXAMPLES = {
  video: (broker) => ({
    type: 'Seller Video',
    title: 'Three Things Business Owners Should Do Before Selling Their Company',
    body: `"Many owners wait until they feel ready to exit before preparing their business for sale," ${broker.firstName} explains. "In reality, the strongest exits begin with simple steps taken months—or even years—earlier. Understanding valuation drivers, documenting operations, and reducing owner dependency are not just good practice. They are what separate a smooth exit from a stressful one."`,
  }),
  linkedin: (broker) => ({
    type: 'LinkedIn Post',
    title: `${broker.firstName} on Exit Preparation`,
    body: `"Many business owners wait until they are ready to exit before preparing their company for sale. In reality, the strongest exits begin months or even years earlier."\n\n— ${broker.fullName}, ${broker.company}`,
  }),
  article: (broker) => ({
    type: 'Educational Article',
    title: `How Business Owners in ${broker.location} Can Prepare for a Profitable Exit`,
    body: `Business owners in ${broker.location} face a common challenge: their companies are valuable, but buyers cannot see that value until due diligence begins. ${broker.firstName} outlines the preparation steps that help owners protect value, reduce surprises, and enter conversations from a position of strength—not urgency.`,
  }),
  insight: (broker) => ({
    type: 'Market Insight',
    title: `${broker.location} Exit Market Update`,
    body: `Buyers in ${broker.location} are increasingly selective. They want businesses with documented systems, transferable leadership, and clean financials. ${broker.firstName} shares what owners in the region should understand about current buyer expectations—and why waiting to prepare often costs more than starting early.`,
  }),
};

export const STEP_IDS = [
  'form',
  'intro',
  'perception-gap',
  'infrastructure',
  'generate-content',
  'authority-engine',
  'timeline',
  'before-after',
  'final-cta',
];

export const STEP_LABELS = [
  'Start',
  'Introduction',
  'Perception Gap',
  'Digital Twin',
  'Content',
  'Authority',
  '90 Days',
  'Before & After',
  'Get Started',
];
