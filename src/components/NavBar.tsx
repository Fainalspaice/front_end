import { useState, type FormEvent } from 'react';
import logo from '../assets/logo.png';
import './NavBar.scss';
import box from '../assets/box.png';
import heart from '../assets/heart.png';
import userCircle from '../assets/userCircle.png';
import shoppingCart from '../assets/shoppingCart.png';


interface Props {
  onSearch: (term: string) => void;
}

const categories = ['TODAS CATEGORIAS', 'SUPERMERCADO', 'LIVROS', 'MODA', 'LANÇAMENTOS', 'OFERTAS DO DIA', 'ASSINATURA'];

export function NavBar({ onSearch }: Props) {
  const [term, setTerm] = useState('');

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch(term.trim());
  }

  return (
    <header className="store-header">
      <div className="store-header__benefits">
        <span>Compra <strong>100% segura</strong></span>
        <span><strong>Frete grátis</strong> acima de R$ 200</span>
        <span><strong>Parcele</strong> suas compras</span>
      </div>
      <div className="store-header__main">
        <a className="store-header__logo" href="#inicio" aria-label="Econverse - início">
          <img src={logo} alt="Econverse" />
        </a>
        <form className="store-header__search" onSubmit={submitSearch} role="search">
          <input
            type="search"
            placeholder="O que você está buscando?"
            aria-label="Buscar produtos"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
          <button type="submit" aria-label="Buscar">⌕</button>
        </form>
        <div className="store-header__actions" aria-label="Atalhos da loja">
          <button type="button" aria-label="Comparar produtos"><img src={box} alt="Comparar produtos" /></button>
          <button type="button" aria-label="Favoritos"><img src={heart} alt="Favoritos" /></button>
          <button type="button" aria-label="Minha conta"><img src={userCircle} alt="Minha conta" /></button>
          <a href="#produtos" aria-label="Carrinho de compras"><img src={shoppingCart} alt="Carrinho de compras" /></a>
        </div>
      </div>
      <nav className="store-header__categories" aria-label="Categorias principais">
        {categories.map((category) => (
          <a key={category} href={category === 'OFERTAS DO DIA' ? '#ofertas' : '#categorias'}>
            {category}
          </a>
        ))}
      </nav>
    </header>
  );
}
