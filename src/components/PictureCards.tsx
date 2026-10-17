import banner from '../assets/Banner.png.png';
import './PictureCards.scss';

const cards = [
  { title: 'Parceiros', description: 'Conheça nossas marcas parceiras' },
  { title: 'Parceiros', description: 'Encontre ofertas especiais para você' },
];

export function PictureCards() {
  return (
    <section className="picture-cards" aria-label="Destaques de parceiros">
      {cards.map((card, index) => (
        <article className="picture-cards__card" key={`${card.title}-${index}`}>
          <img src={banner} alt="" loading="lazy" />
          <div className="picture-cards__content">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <a href="#marcas">Confira</a>
          </div>
        </article>
      ))}
    </section>
  );
}
