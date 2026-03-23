import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const loadYazar = () => import('../data/yazar.md?raw').then((m) => m.default);

export default function YazarPage() {
  const navigate = useNavigate();
  const [content, setContent] = useState('');

  useEffect(() => {
    loadYazar().then(setContent);
  }, []);

  return (
    <main>
      <button className="back-btn" onClick={() => navigate('/')}>
        ← Ana Sayfa
      </button>
      <article className="article-body">
        {content ? (
          <ReactMarkdown>{content}</ReactMarkdown>
        ) : (
          <p className="article-loading">Yükleniyor…</p>
        )}
      </article>
    </main>
  );
}
