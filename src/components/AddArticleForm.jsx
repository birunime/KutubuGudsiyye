import { useState } from 'react';

export default function AddArticleForm({ catKey, categoryLabel, onAdd, onClose }) {
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) {
      alert('Lütfen en azından başlık ve içerik giriniz.');
      return;
    }
    onAdd({
      title: title.trim(),
      excerpt: excerpt.trim() || content.trim().substring(0, 120) + '…',
      content: content.trim(),
      tag: categoryLabel,
    });
    setTitle('');
    setExcerpt('');
    setContent('');
  };

  return (
    <div className="add-form open">
      <h3>Yeni {categoryLabel} Yazısı</h3>
      <div className="form-row">
        <label>Başlık</label>
        <input
          type="text"
          placeholder="Yazı başlığı…"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label>Kısa Özet</label>
        <input
          type="text"
          placeholder="Kısa açıklama…"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label>İçerik</label>
        <textarea
          rows="5"
          placeholder="Yazının tam metni…"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="form-actions">
        <button className="btn-submit" onClick={handleSubmit}>Kaydet</button>
        <button className="btn-cancel" onClick={onClose}>İptal</button>
      </div>
    </div>
  );
}
