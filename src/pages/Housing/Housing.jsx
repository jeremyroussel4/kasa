import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProperties } from "../../api/properties";

import Gallery from "../../components/Gallery/Gallery";
import Collapse from "../../components/Collapse/Collapse";
import "./Housing.css";

function Housing() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProperties()
      .then((properties) => {
        const selectedProperty = properties.find(
          (propertyItem) => propertyItem.id === id,
        );

        if (!selectedProperty) {
          navigate("/error", { replace: true });
        } else {
          setProperty(selectedProperty);
        }

        setLoading(false);
      })
      .catch(() => {
        setError("Impossible de récupérer le logement");
        setLoading(false);
      });
  }, [id, navigate]);

  if (loading) {
    return <p>Chargement du logement...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className="housing-page">
      <Gallery pictures={property.pictures} title={property.title} />
      <section className="housing-summary">
        <div className="housing-details">
          <h1>{property.title}</h1>
          <p className="housing-location">{property.location}</p>
          <div className="housing-tags">
            {property.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="housing-host">
          <div className="housing-host__identity">
            <span>{property.host.name}</span>
            <img src={property.host.picture} alt={property.host.name} />
          </div>
          <div className="housing-rating" aria-label={`Note : ${property.rating} sur 5`}>
            {Array.from({ length: 5 }, (_, index) => (
              <span
                className={index < Number(property.rating) ? "is-active" : ""}
                key={index}
                aria-hidden="true"
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="housing-collapses">
        <Collapse title="Description">
          <p>{property.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul>
            {property.equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </section>
    </main>
  );
}

export default Housing;
