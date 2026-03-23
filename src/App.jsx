import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ArticlePage from './pages/ArticlePage';
import YazarPage from './pages/YazarPage';
import Navbar from './components/Navbar';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      {/* HEADER */}
      <header
        className={!isHome ? 'clickable' : ''}
        onClick={() => !isHome && navigate('/')}
        title={!isHome ? 'Ana sayfaya dön' : undefined}
      >
        <div className="header-ornament">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>
        <h1>
          Kütüb-ü <span>Guddusiyye</span>
        </h1>
        <p className="subtitle">İtikad & Amel iki kanat, Ahlak & Zühd ise
        iki göz ve ferasettir. Kanatları olup gözü olmayan uçamadığı gibi,
        gözü olup kanadı olmayanlar da uçamaz.
        </p>
        <div className="header-line" />
      </header>

      <Navbar />

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:catKey" element={<CategoryPage />} />
        <Route path="/:catKey/:slug" element={<ArticlePage />} />
        <Route path="/yazar" element={<YazarPage />} />
      </Routes>

      {/* FOOTER */}
      <footer>
        <span className="ornament">❧</span>
      </footer>
    </>
  );
}
