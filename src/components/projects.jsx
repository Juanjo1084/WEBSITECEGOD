import "../styles/projects.css";
import { useState } from "react";

const projectsData = [
  {
    id: 1,
    name: "Reubicación Red MT",
    image: "https://i.postimg.cc/cHDdf39J/1.jpg",
    description: "Construcción para la reubicación de red eléctrica de media tensión, incluyendo adecuación de infraestructura y cumplimiento de normativas técnicas vigentes.",
    location: "Puerto Caicedo, Putumayo, Colombia",
    date: "03 / 2023",
    capacity: "Media Tensión"
  },
  {
    id: 2,
    name: "Diseño Eléctrico Residencial",
    image: "https://i.postimg.cc/MTsz1BPT/2.jpg",
    description: "Diseño eléctrico de tomacorrientes e iluminación para vivienda residencial, garantizando seguridad, eficiencia y cumplimiento normativo.",
    location: "Sibundoy, Putumayo, Colombia",
    date: "06 / 2023",
    capacity: "Residencial"
  },
  {
    id: 3,
    name: "Edificio Mixto",
    image: "https://i.postimg.cc/bJ6q1nCw/3.jpg",
    description: "Diseño eléctrico completo y acometidas para edificio con apartamentos y locales comerciales, incluyendo distribución de cargas y sistemas eléctricos.",
    location: "Sibundoy, Putumayo, Colombia",
    date: "12 / 2022",
    capacity: "Comercial/Residencial"
  },
  {
    id: 4,
    name: "Viviendas Interés Social",
    image: "https://i.postimg.cc/LXymjPC5/4.jpg",
    description: "Correcciones y ajustes a diseños eléctricos para presentación ante entidad municipal, optimizando cumplimiento técnico y normativo del proyecto.",
    location: "San Francisco, Putumayo, Colombia",
    date: "06 / 2024",
    capacity: "Residencial"
  },
  {
    id: 5,
    name: "Sistema Riego Automatizado",
    image: "https://i.postimg.cc/MTsz1BPv/5.jpg",
    description: "Diseño eléctrico y sistema de control para riego agrícola automatizado, enfocado en eficiencia operativa y optimización de recursos.",
    location: "Popayán, Cauca, Colombia",
    date: "09 / 2024",
    capacity: "Agroindustrial"
  },
  {
    id: 6,
    name: "Licitación y Ancianato",
    image: "https://i.postimg.cc/RFPvwtsW/6.jpg",
    description: "Elaboración y presentación de propuesta técnica en licitación pública para instalaciones eléctricas en centro de atención al adulto mayor.",
    location: "San Francisco, Putumayo, Colombia",
    date: "03 / 2023",
    capacity: "Institucional"
  },
  {
    id: 7,
    name: "Iluminación Parque Cultural",
    image: "https://i.postimg.cc/j58Ryfgw/7.jpg",
    description: "Diseño de sistema de iluminación para parque cultural, integrando criterios de eficiencia energética, seguridad y estética urbana.",
    location: "Líbano, Tolima, Colombia",
    date: "05 / 2025",
    capacity: "Público"
  },
  {
    id: 8,
    name: "Hospital San Isidro",
    image: "https://i.postimg.cc/SsZmc9TX/8.jpg",
    description: "Diseño eléctrico integral incluyendo sistemas UPS, subestación eléctrica (SSEE) y equipos especiales para infraestructura hospitalaria.",
    location: "Alpujarras, Tolima, Colombia",
    date: "06 / 2025",
    capacity: "Hospitalario"
  },
  {
    id: 9,
    name: "Casa de la Mujer",
    image: "https://i.postimg.cc/50Pf8z7C/9.jpg",
    description: "Diseño eléctrico y acometida a transformador para infraestructura institucional, garantizando confiabilidad y cumplimiento RETIE.",
    location: "Rioblanco, Tolima, Colombia",
    date: "11 / 2025",
    capacity: "Institucional"
  },
  {
    id: 10,
    name: "Parque Solar 25MWp",
    image: "https://i.postimg.cc/mDdT79XF/10.jpg",
    description: "Inspección de diseños eléctricos en parque solar fotovoltaico de 25MWp, incluyendo seguimiento de obra y revisión documental técnica.",
    location: "Ibagué, Tolima, Colombia",
    date: "05 / 2026",
    capacity: "Solar - 25 MWp"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // 🔥 Parseo de fecha "MM / YYYY"
  const parseDate = (dateStr) => {
    const [month, year] = dateStr.split("/").map((d) => d.trim());
    return new Date(year, month - 1);
  };

  // 🔥 Ordenar de más nuevo a más viejo
  const sortedProjects = [...projectsData].sort((a, b) => {
    return parseDate(b.date) - parseDate(a.date);
  });

  return (
    <section className="projects">
      <h2>Proyectos</h2>
      <p>
        Algunos de nuestros proyectos en diseño eléctrico y energías renovables.
      </p>

      <div className="projects-grid">
        {sortedProjects.map((project) => (
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
  );
};

export default Projects;
