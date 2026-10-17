import './CustomLinks.scss';

const categories = [
  { label: 'Tecnologia', icon: 'technology' },
  { label: 'Supermercado', icon: 'market' },
  { label: 'Bebidas', icon: 'drinks' },
  { label: 'Ferramentas', icon: 'tools' },
  { label: 'Saúde', icon: 'health' },
  { label: 'Esportes e Fitness', icon: 'fitness' },
  { label: 'Moda', icon: 'fashion' },
];

const categoryPaths: Record<string, string> = {
  technology: 'M4 3h12v13H4zM8 19h4M19 8h2v12h-9v-2',
  market: 'M3 9h18l-2-5H5L3 9zm2 0v11h14V9M3 9a3 3 0 006 0 3 3 0 006 0 3 3 0 006 0M9 20v-6h6v6',
  drinks: 'M8 3h6l-1 3 2 2v12H7V8l2-2-1-3zm0 5h7M10 11v6m8-4h3v8h-5v-8l2-2v-3h2v3',
  tools: 'm4 4 6 6m-3-8a5 5 0 006 6l7 7a2 2 0 01-3 3l-7-7a5 5 0 01-6-6l3 3 3-3-3-3zm8 10 6-6m-2-3 3 3-6 6',
  health: 'M12 21s-9-5.5-9-12a5 5 0 019-3 5 5 0 019 3c0 6.5-9 12-9 12zM3 18h5l2-3 3 5 2-3h6',
  fitness: 'M2 16h4l3-5 4 3 4-7h5M4 16v4m16-4v4M8 10 6 7m12 0 2-3M12 14l-1 6',
  fashion: 'M8 4l4 3 4-3 5 3-3 5-2-1v9H8v-9l-2 1-3-5 5-3zm4 3v5',
};

export function CustomLinks() {
  return (
    <nav className="category-links" id="categorias" aria-label="Explore por categoria">
      {categories.map((category, index) => (
        <a
          className={`category-links__item${index === 0 ? ' category-links__item--active' : ''}`}
          href="#produtos"
          key={category.label}
        >
          <span className="category-links__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d={categoryPaths[category.icon]} />
            </svg>
          </span>
          <span>{category.label}</span>
        </a>
      ))}
    </nav>
  );
}
