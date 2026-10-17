import './ProductCard.scss';
import type { ProductData } from '../types/product';
import { formatPrice } from '../utils/formatPrice';

interface Props {
  product: ProductData;
  onSelect: () => void;
  onQuickView: () => void;
}

export function ProductCard({ product, onSelect, onQuickView }: Props) {
  return (
    <article className="product-card">
      <button
        type="button"
        className="product-card__quick-view"
        onClick={onQuickView}
        aria-label={`Ver detalhes de ${product.productName}`}
      >
        <img className="product-card__image" src={product.photo} alt="" loading="lazy" />
        <span className="product-card__name">{product.descriptionShort}</span>
      </button>
      <p className="product-card__price">{formatPrice(product.price)}</p>
      <p className="product-card__installments">ou 2x de {formatPrice(product.price / 2)} sem juros</p>
      <p className="product-card__shipping">Frete grátis</p>
      <button type="button" className="product-card__button" onClick={onSelect}>
        Comprar
      </button>
    </article>
  );
}