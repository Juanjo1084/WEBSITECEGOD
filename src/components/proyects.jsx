import "../styles/proyects.css";
import { useState } from "react";

function Proyects({ projects }) {
  const [selected, setSelected] = useState("Cabaña");

  return (
    <div className="proyects-main">
      <div className="projects-container">
        <div className="options">
          {[
            "Cabaña",
            "Cafetería",
            "Apartamento Residencial",
            "Casa Residencial",
            "Local Comercial",
            "Proyecto Conexión BT",
            "Estudio de localización/Conexión",
            "Cotización de Materiales",
          ].map((option) => (
            <div
              key={option}
              className={`option ${selected === option ? "selected" : ""}`}
              onClick={() => setSelected(option)}
            >
              {option}
            </div>
          ))}
        </div>

        <div className="flip-card-container">
          <div className="flip-card-container">
            {projects
              .filter((project) => project.title === selected)
              .map((project, index) => (
                <div className="flip-card" key={index}>
                  <div className="card-front">
                    <figure>
                      <img src={project.image} alt={project.title} />
                      <figcaption>{project.title}</figcaption>
                    </figure>
                  </div>

                  <div className="card-back">
                    <ul>
                      <li>Descripción</li>
                      <p>{project.description}</p>
                      <button>Mantener</button>
                    </ul>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="card-icons">
          <i class="fa-solid fa-pen-ruler"></i>
          <i class="fa-solid fa-book"></i>
          <i class="fa-solid fa-plug-circle-xmark"></i>
        </div>
      </div>
    </div>
  );
}

export default Proyects;
