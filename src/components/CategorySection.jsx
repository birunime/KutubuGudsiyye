import { useState, useRef } from 'react';
import ArticleCard from './ArticleCard';
import SearchIcon from './SearchIcon';

function normalizeSearch(str) {
  return str
    .replace(/İ/g, 'i')
    .replace(/I/g, 'i')
    .replace(/ı/g, 'i')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export default function CategorySection({ catKey, category, animDelay }) {
  const [localFilter, setLocalFilter] = useState('');
  const sectionRef = useRef(null);

  const q = normalizeSearch(localFilter);
  const filtered = q
    ? category.articles.filter(
        (a) =>
          normalizeSearch(a.title).includes(q) ||
          normalizeSearch(a.excerpt).includes(q)
      )
    : category.articles;

  return (
    <section
      className="category-section"
      id={catKey}
      ref={sectionRef}
      style={{ animationDelay: `${animDelay}s` }}
    >
      <div className="category-header">
        <div className="category-title-group">
          <h2 className="category-title">{category.label}</h2>
          <span className="category-arabic">{category.arabic}</span>
        </div>
        <div className="cat-search-wrap">
          <SearchIcon size={13} />
          <input
            type="text"
            placeholder="Bu bölümde ara…"
            value={localFilter}
            onChange={(e) => setLocalFilter(e.target.value)}
            autoComplete="off"
          />
        </div>
      </div>

      <div className="articles-grid">
        {filtered.length === 0 ? (
          <div className="no-results">Bu aramayla eşleşen yazı bulunamadı.</div>
        ) : (
          filtered.map((article) => (
            <ArticleCard
              key={article.slug}
              article={article}
              categoryLabel={category.label}
              catKey={catKey}
            />
          ))
        )}
      </div>
    </section>
  );
}
