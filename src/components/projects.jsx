import React from "react";
import Proyects from "./proyects.jsx";
import "../styles/projects.css";
import { useState } from "react";

const projectsData = [
  {
    id: 1,
    name: "Nombre del proyecto",
    image: "https://i.postimg.cc/Fz8k7BZS/Captura-de-pantalla-2026-04-12-212919.png",
    description: "Descripción breve del proyecto, tipo, alcance, etc.",
    location: "Colombia",
    date: "2025",
    capacity: "20 MW"
  },
  {
    id: 2,
    name: "Otro proyecto",
    image: "https://i.postimg.cc/nrg9CPkD/Captura-de-pantalla-2026-04-12-213117.png",
    description: "Descripción del proyecto.",
    location: "Perú",
    date: "2024",
    capacity: "10 MW"
  },
  {
    id: 2,
    name: "Otro proyecto",
    image: "https://i.postimg.cc/RhyJNDR3/Captura-de-pantalla-2026-04-12-213209.png",
    description: "Descripción del proyecto.",
    location: "Perú",
    date: "2024",
    capacity: "10 MW"
  },
  {
    id: 2,
    name: "Otro proyecto",
    image: "https://i.postimg.cc/kGzRBpcR/Captura-de-pantalla-2026-04-12-213355.png",
    description: "Descripción del proyecto.",
    location: "Perú",
    date: "2024",
    capacity: "10 MW"
  }
  // 👉 AQUÍ AGREGAS LOS TUYOS
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

//   const projectsData = [
//     {
//       title: "Cabaña",
//       description:
//         "Plano eléctrico adaptado a entornos rurales o naturales, con enfoque en autonomía, eficiencia y seguridad. Considera iluminación ambiental, zonas exteriores.",
//       image:
//         "https://i.postimg.cc/kgSM3FhQ/Captura-de-pantalla-2025-04-08-122551.png",
//     },
//     {
//       title: "Cafetería",
//       description:
//         "Diseño eléctrico adaptado al uso comercial, considerando zonas de preparación, consumo y equipos industriales. Incluye distribución de cargas, iluminación y puntos especiales.",
//       image:
//         "https://i.postimg.cc/50PVDyJL/HOGAR-JESUS-MISERICORDIOSO-1-ELECTRICO-page-0001.jpg",
//     },
//     {
//       title: "Apartamento Residencial",
//       description:
//         "Plano eléctrico para unidades habitacionales tipo apartamento. Contempla distribución eficiente de tomas, puntos de luz, y protecciones conforme a la normativa RETIE.",
//       image: "https://i.postimg.cc/kGBmCCMZ/Plano-A3-1-page-0001.jpg",
//     },
//     {
//       title: "Casa Residencial",
//       description:
//         "Diseño completo para viviendas unifamiliares. Se incorporan circuitos independientes, puesta a tierra, y espacios húmedos con sus respectivas protecciones.",
//       image: "https://i.postimg.cc/j2mrd1Lj/DISE-O-ELECTRICO-E1-page-0001.jpg",
//     },
//     {
//       title: "Local Comercial",
//       description:
//         "Diseño pensado para espacios de atención al público, con énfasis en la capacidad instalada, señalización, iluminación comercial y carga de equipos.",
//       image:
//         "https://i.postimg.cc/wBR7TRTz/Captura-de-pantalla-2025-04-08-130611.jpg",
//     },
//     {
//       title: "Proyecto Conexión BT",
//       description:
//         "Plano para la conexión en baja tensión (BT) desde el punto de acometida hasta el tablero general. Incluye ubicación del medidor y protecciones principales.",
//       image:
//         "https://i.postimg.cc/cJMs61W6/Captura-de-pantalla-2025-04-08-123021.png",
//     },
//     {
//       title: "Estudio de localización/Conexión",
//       description:
//         "Plano de ubicación del inmueble en su contexto urbano o rural, con trazado del punto de conexión a red pública. Base para trámites ante el operador de red.",
//       image:
//         "https://i.postimg.cc/MT6zBkZ5/Captura-de-pantalla-2025-04-08-123149.png",
//     },
//     {
//       title: "Cotización de Materiales",
//       description:
//         "Documento en formato Excel que lista los materiales eléctricos requeridos para el proyecto, con cantidades estimadas y referencias comerciales para facilitar la compra.",
//       image:
//         "https://i.postimg.cc/nLtFHj66/Captura-de-pantalla-2025-04-08-123332.png",
//     },
//   ];
  return (
    // <div className="projects">
    //   <h1>Proyectos</h1>
    //   <p>Esta es la página de proyectos.</p>
    //   <div className="proyectos">
    //     <Proyects projects={projectsData} />
    //     <p className="message-proyects">
    //       Oprime sobre la imagen para obtener mas información
    //     </p>
    //   </div>
    // </div>
    <>
    <section className="projects">
      <h2>Proyectos</h2>
      <p>
        Algunos de nuestros proyectos en diseño eléctrico y energías renovables.
      </p>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => setSelectedProject(project)}
          >
            <div className="image-container">
              <img src={project.image} alt={project.name} />

              <div className="overlay">
                <span>Ver más</span>
              </div>
            </div>

            <h3>{project.name}</h3>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div
          className="modal"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedProject.image} alt="" />
            <h3>{selectedProject.name}</h3>
            <p>{selectedProject.description}</p>

            <div className="modal-info">
              <span>{selectedProject.location}</span>
              <span>{selectedProject.date}</span>
              <span>{selectedProject.capacity}</span>
            </div>

            <button onClick={() => setSelectedProject(null)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
    </>
  );
};

export default Projects;
