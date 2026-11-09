import "./Card.css";
import { Link } from "react-router-dom";

function Card({ property }) {
  return (
    <Link to={`/housing/${property.id}`}>
      <article className="property-card">
        <h2>{property.title}</h2>
        <img src={property.cover} alt={property.title} />
      </article>
    </Link>
  );
}

export default Card;