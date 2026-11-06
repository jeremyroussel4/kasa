import { useEffect, useState } from "react";
import { getProperties } from "../../api/properties";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import "./Home.css";
import bannerHome from "../../assets/banner-home.jpg";

function Home() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProperties()
      .then((data) => {
        setProperties(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Chargement des logements...</p>;
  }

  if (error) {
    return <p>Une erreur est survenue.</p>;
  }

  return (
    <main className="home">
      <Banner
        image={bannerHome}
        title="Chez vous, partout et ailleurs"
      />
      
      <div className="property-list">
        {properties.map((property) => (
          <Card key={property.id} property={property} />
        ))}
      </div>
    </main>
  );
}

export default Home;
