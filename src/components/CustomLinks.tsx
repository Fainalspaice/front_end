import './CustomLinks.scss';
import tecnologia from '../assets/tecnologia.png';
import whiskey from '../assets/whiskey.png';
import saude from '../assets/saude.png';
import supermercado from '../assets/supermercados.png';
import moda from '../assets/moda.png';
import esportes from '../assets/esportefiness.png';
import ferramentas from '../assets/ferramentas.png';

const categories = [
  { label: 'Tecnologia', Image: tecnologia },
  { label: 'Supermercado', Image: supermercado },
  { label: 'Bebidas', Image: whiskey },
  { label: 'Ferramentas', Image: ferramentas },
  { label: 'Saúde', Image: saude },
  { label: 'Esportes e Fitness', Image: esportes },
  { label: 'Moda', Image: moda },
];



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
            <img src={category.Image} alt="" />
          </span>
          <span>{category.label}</span>
        </a>
      ))}
    </nav>
  );
}