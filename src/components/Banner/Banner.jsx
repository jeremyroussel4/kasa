import "./Banner.css";

function Banner({ image, title }) {
  return (
    <section
      className="banner"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image})`,
      }}
    >
      <h1>{title}</h1>
    </section>
  )
}

export default Banner