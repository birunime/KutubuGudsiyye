import { useNavigate } from 'react-router-dom';
import { categories } from '../data/categories';
import CategoryCard from '../components/CategoryCard';

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <main>
      <div className="home-grid">
        {Object.entries(categories).map(([key, cat]) => (
          <CategoryCard key={key} category={cat} onClick={() => navigate(`/${key}`)} />
        ))}
      </div>
    </main>
  );
}
