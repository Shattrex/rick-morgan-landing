import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.rickmorginfranchising.com';
const SITE_NAME = 'Richard Morgin Franchise Consulting';
const DEFAULT_IMAGE = `${SITE_URL}/images/richard-morgan.png`;

export default function SEO({
  title,
  description = 'Richard Morgin helps serious franchise buyers evaluate opportunities with clarity, fit, discipline, and long-term perspective.',
  canonical,
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  noindex = false,
}) {
  const fullTitle = title
    ? `${title} | Richard Morgin Franchise Consulting`
    : 'Richard Morgin | Senior Franchise Consultant';

  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
