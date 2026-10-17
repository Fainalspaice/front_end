import { useEffect, useState } from 'react';
import axios, { isCancel } from 'axios';
import type { ProductData } from '../types/product';

interface ProductsResponse {
  success: boolean;
  products: ProductData[];
}

const apiUrl = new URL(import.meta.env.VITE_URL_SITE);
console.log('API URL:', apiUrl.href);
const ENDPOINT = `/api-econverse${apiUrl.pathname}`;
console.log('URL:', ENDPOINT);

  export function useProducts() {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        const { data } = await axios.get<ProductsResponse>(ENDPOINT, {
          signal: controller.signal,
        });
        if (!Array.isArray(data.products)) {
          throw new Error('Resposta inesperada');
}
  setProducts(data.products);
      }  catch (err) {
  if (isCancel(err)) return;
  console.error(err);
  setError('Não foi possível carregar os produtos.');
}
       finally {
        setLoading(false);
      }
    }

    load();
    return () => controller.abort();
  }, []);

  return { products, loading, error };
}
