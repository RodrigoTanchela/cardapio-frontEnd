import "./card.css";

export function Card({ price, image, title }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p><b>Valor:</b> {price}</p>
    </div>
  );
}
