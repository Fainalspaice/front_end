import { useEffect, useState } from 'react';
import type { ProductData } from '../types/product';
import { formatPrice } from '../utils/formatPrice';
import './ProductModal.scss';

interface Props {
  product: ProductData;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: Props) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
    }

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="product-modal__backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
      >
        <button className="product-modal__close" type="button" onClick={onClose} aria-label="Fechar">
          ×
        </button>
        <img className="product-modal__image" src={product.photo} alt={product.productName} />
        <div className="product-modal__details">
          <h2 id="product-modal-title">{product.productName}</h2>
          <p className="product-modal__price">{formatPrice(product.price)}</p>
          <p className="product-modal__description">{product.descriptionShort}</p>
          <a className="product-modal__more" href="#produtos" onClick={onClose}>
            Veja mais detalhes do produto ›
          </a>
          <div className="product-modal__actions">
            <div className="product-modal__quantity" aria-label="Quantidade">
              <button
                type="button"
                onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                aria-label="Diminuir quantidade"
              >
                −
              </button>
              <span aria-live="polite">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((current) => current + 1)}
                aria-label="Aumentar quantidade"
              >
                +
              </button>
            </div>
            <button className="product-modal__buy" type="button" onClick={onClose}>
              Comprar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
