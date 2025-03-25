import { useState } from "react";
import "./proyects.css";
import { div } from "framer-motion/client";

function Proyects({ projects }) {
  const [selected, setSelected] = useState("Vivienda I");

  return (
    <div className="proyects-main">
      <div className="projects-container">
        {/* Opciones de Vivienda */}
        <div className="options">
          {["Vivienda I", "Vivienda II", "Vivienda III"].map((option) => (
            <div
              key={option}
              className={`option ${selected === option ? "selected" : ""}`}
              onClick={() => setSelected(option)}
            >
              {option}
            </div>
          ))}
        </div>

        {/* Tarjetas filtradas según selección */}
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
