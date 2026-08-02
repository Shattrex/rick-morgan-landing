import { Helmet } from 'react-helmet-async';
import PresentationShell from '../components/presentation/PresentationShell';
import '../presentation/presentation.css';

export default function PresentationPage() {
  return (
    <>
      <Helmet>
        <title>Bella Institute 2026 Growth Roadmap | Alanto AI</title>
        <meta
          name="description"
          content="Strategic growth presentation for Bella Institute School of Cosmetology leadership team."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <PresentationShell />
    </>
  );
}
