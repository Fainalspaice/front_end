import logo from '../assets/logo.png';
import './BrandNavigation.scss';

const brands = ['Econverse', 'Econverse', 'Econverse', 'Econverse', 'Econverse'];

export function BrandNavigation() {
  return (
    <section className="brand-navigation" id="marcas" aria-labelledby="brand-navigation-title">
      <h2 id="brand-navigation-title">Navegue por marcas</h2>
      <div className="brand-navigation__list">
        {brands.map((brand, index) => (
          <a className="brand-navigation__item" href="#produtos" key={`${brand}-${index}`}>
            <img src={logo} alt={brand} loading="lazy" />
          </a>
        ))}
      </div>
    </section>
  );
}
