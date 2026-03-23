import { useParams, useNavigate } from 'react-router-dom';
import { categories } from '../data/categories';
import CategorySection from '../components/CategorySection';

export default function CategoryPage() {
  const { catKey } = useParams();
  const navigate = useNavigate();
  const category = categories[catKey];

  if (!category) {
    return (
      <main>
        <button className="back-btn" onClick={() => navigate('/')}>
          ← Kategoriler
        </button>
        <p>Kategori bulunamadı.</p>
      </main>
    );
  }

  return (
    <main>
      <button className="back-btn" onClick={() => navigate('/')}>
        ← Kategoriler
      </button>
      <CategorySection catKey={catKey} category={category} animDelay={0.1} />
    </main>
  );
}
