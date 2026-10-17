import { useState } from 'react';
import type { ProductData } from '../types/product';
import { BrandNavigation } from '../components/BrandNavigation';
import { Carousel } from '../components/Carousel';
import { CustomLinks } from '../components/CustomLinks';
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';
import { PictureCards } from '../components/PictureCards';
import { ProductModal } from '../components/ProductModal';
import { useProducts } from '../hooks/useProducts';
import heroBanner from '../assets/Banner.png.png';

export function CatalogPage() {
  const { products, loading, error } = useProducts();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<ProductData | null>(null);

  const visibleProducts = products.filter((product) =>
    `${product.productName} ${product.descriptionShort}`
      .toLocaleLowerCase('pt-BR')
      .includes(searchTerm.toLocaleLowerCase('pt-BR')),
  );

  return (
    <div className="storefront" id="inicio">
      <NavBar onSearch={setSearchTerm} />
      <main>
        <section className="storefront__hero" id="ofertas" aria-label="Promoções">
          <img src={heroBanner} alt="" />
          <div className="storefront__hero-content">
            <h1>Venha conhecer nossas promoções</h1>
            <p><strong>50% Off</strong> nos produtos</p>
            <a href="#produtos">Ver produtos</a>
          </div>
        </section>
        <CustomLinks />
        {error && <p className="storefront__error" role="alert">{error}</p>}
        <Carousel
          products={visibleProducts}
          loading={loading}
          error={null}
          onSelect={setSelectedProduct}
        />
        <PictureCards />
        <BrandNavigation />
      </main>
      <Footer />
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
