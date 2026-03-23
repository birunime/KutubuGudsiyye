import { useNavigate } from 'react-router-dom';

export default function ArticleCard({ article, categoryLabel, catKey }) {
  const navigate = useNavigate();
  return (
    <div className="article-card" onClick={() => navigate(`/${catKey}/${article.slug}`)}>
      <div className="article-tag">{article.tag}</div>
      <div className="article-title">{article.title}</div>
      <div className="article-excerpt">{article.excerpt}</div>
      <div className="article-meta">{categoryLabel}</div>
    </div>
  );
}
