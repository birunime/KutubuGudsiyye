import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { categories } from '../data/categories';

const mdModules = import.meta.glob('../data/articles/**/*.md', { query: '?raw', import: 'default' });

export default function ArticlePage() {
  const { catKey, slug } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  const category = categories[catKey];
  const article = category?.articles.find((a) => a.slug === slug);

  useEffect(() => {
    const key = `../data/articles/${catKey}/${slug}.md`;
    const loader = mdModules[key];
    if (loader) {
      loader().then((text) => {
        setContent(text);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [catKey, slug]);

  if (!article || (!loading && !content)) {
    return (
      <main>
        <button className="back-btn" onClick={() => navigate(`/${catKey}`)}>
          ← {category?.label ?? 'Kategoriler'}
        </button>
        <p>Yazı bulunamadı.</p>
      </main>
    );
  }

  return (
    <main>
      <button className="back-btn" onClick={() => navigate(`/${catKey}`)}>
        ← {category.label}
      </button>
      {loading ? (
        <p className="article-loading">Yükleniyor…</p>
      ) : (
        <article className="article-body">
          <div className="article-body-tag">{article.tag}</div>
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      )}
    </main>
  );
}
