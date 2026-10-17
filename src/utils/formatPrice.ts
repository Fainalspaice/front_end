const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const formatPrice = (priceInCents: number) =>
  currencyFormatter.format(priceInCents / 100);