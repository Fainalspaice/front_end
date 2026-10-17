import logo from '../assets/logo.png';
import './Footer.scss';

const columns = [
  { title: 'Institucional', links: ['Sobre Nós', 'Movimento', 'Trabalhe conosco'] },
  { title: 'Ajuda', links: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'] },
  { title: 'Termos', links: ['Termos e Condições', 'Política de Privacidade', 'Troca e Devolução'] },
];

export function Footer() {
  return (
    <footer className="store-footer">
      <section className="store-footer__newsletter">
        <div>
          <h2>Inscreva-se na nossa newsletter</h2>
          <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
        </div>
        <form onSubmit={(event) => event.preventDefault()}>
          <label>
            <span className="visually-hidden">Digite seu nome</span>
            <input type="text" placeholder="Digite seu nome" required />
          </label>
          <label>
            <span className="visually-hidden">Digite seu e-mail</span>
            <input type="email" placeholder="Digite seu e-mail" required />
          </label>
          <button type="submit">Inscrever</button>
          <label className="store-footer__consent">
            <input type="checkbox" required />
            Aceito os termos e condições
          </label>
        </form>
      </section>
      <div className="store-footer__main">
        <div className="store-footer__about">
          <a href="#inicio" className="store-footer__wordmark" aria-label="Econverse - início">
            <img src={logo} alt="Econverse" />
          </a>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="store-footer__socials" aria-label="Redes sociais">
            <a href="https://www.instagram.com/" aria-label="Instagram">◎</a>
            <a href="https://www.facebook.com/" aria-label="Facebook">f</a>
            <a href="https://www.linkedin.com/" aria-label="LinkedIn">in</a>
          </div>
        </div>
        {columns.map((column) => (
          <nav className="store-footer__column" aria-label={column.title} key={column.title}>
            <h3>{column.title}</h3>
            {column.links.map((link) => <a href="#inicio" key={link}>{link}</a>)}
          </nav>
        ))}
      </div>
      <div className="store-footer__copyright">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </footer>
  );
}
