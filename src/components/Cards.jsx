const cards = [
  {
    title: 'Clarity',
    text: 'Understand what kind of operator you are before choosing a franchise.',
  },
  {
    title: 'Fit',
    text: 'Evaluate opportunities based on lifestyle, capital, temperament, and risk tolerance.',
  },
  {
    title: 'Discipline',
    text: 'Avoid expensive confusion by slowing down, asking better questions, and studying the model.',
  },
];

export default function Cards() {
  return (
    <section className="cards section" aria-labelledby="cards-heading">
      <div className="section__inner">
        <h2 id="cards-heading" className="visually-hidden">
          Advisory pillars
        </h2>
        <ul className="cards__grid">
          {cards.map((card, index) => (
            <li
              key={card.title}
              className={`cards__item reveal reveal--delay-${index + 1}`}
            >
              <article className="cards__card">
                <h3 className="cards__title">{card.title}</h3>
                <p className="cards__text">{card.text}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
