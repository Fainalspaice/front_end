import { useRef } from 'react';
import type { ProductData } from '../types/product';
import { ProductCard } from './ProductCard';
import './Carousel.scss';

interface Props {
  products: ProductData[];
  loading: boolean;
  error: string | null;
  onSelect: (product: ProductData) => void;
}

const tabs = ['CELULAR', 'TABLETS', 'ACESSÓRIOS', 'NOTEBOOKS', 'TVS', 'VER TODOS'];

export function Carousel({ products, loading, error, onSelect }: Props) {
  const listRef = useRef<HTMLDivElement>(null);

  function scrollProducts(direction: -1 | 1) {
    listRef.current?.scrollBy({ left: direction * 240, behavior: 'smooth' });
  }

  return (
    <section className="product-carousel" id="produtos" aria-labelledby="products-title">
      <div className="product-carousel__heading">
        <span />
        <h2 id="products-title">Produtos relacionados</h2>
        <span />
      </div>
      <nav className="product-carousel__tabs" aria-label="Departamentos de produtos">
        {tabs.map((tab, index) => (
          <a
            className={index === 0 ? 'product-carousel__tab product-carousel__tab--active' : 'product-carousel__tab'}
            href="#produtos"
            key={tab}
          >
            {tab}
          </a>
        ))}
      </nav>
      {error ? (
        <p className="product-carousel__message" role="alert">{error}</p>
      ) : loading ? (
        <p className="product-carousel__message" role="status">Carregando produtos...</p>
      ) : products.length === 0 ? (
        <p className="product-carousel__message">Nenhum produto encontrado.</p>
      ) : (
        <div className="product-carousel__viewport">
          <button
            className="product-carousel__arrow product-carousel__arrow--previous"
            type="button"
            onClick={() => scrollProducts(-1)}
            aria-label="Produtos anteriores"
          >
            ‹
          </button>
          <div className="product-carousel__list" ref={listRef}>
            {products.map((product, index) => (
              <ProductCard
                key={`${product.productName}-${index}`}
                product={product}
                onSelect={() => onSelect(product)}
                onQuickView={() => onSelect(product)}
              />
            ))}
          </div>
          <button
            className="product-carousel__arrow product-carousel__arrow--next"
            type="button"
            onClick={() => scrollProducts(1)}
            aria-label="Próximos produtos"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
