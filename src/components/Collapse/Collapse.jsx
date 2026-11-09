import { useState } from "react";
import "./Collapse.css";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={`collapse ${isOpen ? "collapse--open" : ""}`}>
      <button
        className="collapse__button"
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((previous) => !previous)}>
        <span>{title}</span>
        <span className="collapse__chevron" aria-hidden="true" />
      </button>
      <div className="collapse__content">
        <div className="collapse__content-inner">{children}</div>
      </div>
    </section>
  );
}

export default Collapse;