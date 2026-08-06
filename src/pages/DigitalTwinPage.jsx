import { Helmet } from 'react-helmet-async';
import DigitalTwinPresentation from '../components/digital-twin/DigitalTwinPresentation';
import '../presentation/digital-twin.css';

export default function DigitalTwinPage() {
  return (
    <>
      <Helmet>
        <title>AI Digital Twin Infrastructure | Interactive Presentation</title>
        <meta
          name="description"
          content="Interactive sales presentation for business brokers. Discover how AI Digital Twin Infrastructure turns your experience into a scalable digital presence."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <DigitalTwinPresentation />
    </>
  );
}
