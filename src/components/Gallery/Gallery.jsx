import { useState } from "react";
import "./Gallery.css";

function Gallery({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function goToNextPicture() {
    setCurrentIndex((currentIndex + 1) % pictures.length);
  }

  function goToPreviousPicture() {
    setCurrentIndex((currentIndex - 1 + pictures.length) % pictures.length);
  }

  return (
    <div className="gallery">
      {pictures.length > 1 && (
        <>
          <button
            className="gallery__previous"
            type="button"
            aria-label="Photo précédente"
            onClick={goToPreviousPicture}
          >
            Précédent
          </button>
          <button
            className="gallery__next"
            type="button"
            aria-label="Photo suivante"
            onClick={goToNextPicture}
          >
            Suivant
          </button>
        </>
      )}
      <img className="gallery__image" src={pictures[currentIndex]} alt={title} />
      <p className="gallery__counter">
        {currentIndex + 1}/{pictures.length}
      </p>
    </div>
  );
}

export default Gallery;
