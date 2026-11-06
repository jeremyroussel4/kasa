import "./Card.css";

function Card({ property }) {
  return (
    <article className="property-card">
      <h2>{property.title}</h2>
      <img src={property.cover} alt={property.title} />
    </article>
  )
}

export default Card