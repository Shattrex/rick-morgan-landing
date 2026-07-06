import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InsightsPage from './pages/InsightsPage';
import ArticlePage from './pages/ArticlePage';
import './index.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/insights" element={<InsightsPage />} />
      <Route
        path="/insights/how-to-choose-the-right-franchise"
        element={<ArticlePage />}
      />
    </Routes>
  );
}
