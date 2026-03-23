export default function CategoryCard({ category, onClick }) {
  const count = category.articles.length;
  return (
    <div className="cat-card" onClick={onClick}>
      <span className="cat-card-arabic">{category.arabic}</span>
      <h2 className="cat-card-title">{category.label}</h2>
      <span className="cat-card-count">{count} yazı</span>
    </div>
  );
}
