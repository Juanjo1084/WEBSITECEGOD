import "../styles/container.css";
import Proyects from "./proyects.jsx";
import Choose from "./choose.jsx";
import YoutubeVideo from "./youtube.jsx";

function Container() {
  const projectsData = [
    {
      title: "Cabaña",
      description:
        "Plano eléctrico adaptado a entornos rurales o naturales, con enfoque en autonomía, eficiencia y seguridad. Considera iluminación ambiental, zonas exteriores.",
      image:
        "https://i.postimg.cc/kgSM3FhQ/Captura-de-pantalla-2025-04-08-122551.png",
    },
    {
      title: "Cafetería",
      description:
        "Diseño eléctrico adaptado al uso comercial, considerando zonas de preparación, consumo y equipos industriales. Incluye distribución de cargas, iluminación y puntos especiales.",
      image:
        "https://i.postimg.cc/50PVDyJL/HOGAR-JESUS-MISERICORDIOSO-1-ELECTRICO-page-0001.jpg",
    },
    {
      title: "Apartamento Residencial",
      description:
        "Plano eléctrico para unidades habitacionales tipo apartamento. Contempla distribución eficiente de tomas, puntos de luz, y protecciones conforme a la normativa RETIE.",
      image: "https://i.postimg.cc/kGBmCCMZ/Plano-A3-1-page-0001.jpg",
    },
    {
      title: "Casa Residencial",
      description:
        "Diseño completo para viviendas unifamiliares. Se incorporan circuitos independientes, puesta a tierra, y espacios húmedos con sus respectivas protecciones.",
      image: "https://i.postimg.cc/j2mrd1Lj/DISE-O-ELECTRICO-E1-page-0001.jpg",
    },
    {
      title: "Local Comercial",
      description:
        "Diseño pensado para espacios de atención al público, con énfasis en la capacidad instalada, señalización, iluminación comercial y carga de equipos.",
      image:
        "https://i.postimg.cc/wBR7TRTz/Captura-de-pantalla-2025-04-08-130611.jpg",
    },
    {
      title: "Proyecto Conexión BT",
      description:
        "Plano para la conexión en baja tensión (BT) desde el punto de acometida hasta el tablero general. Incluye ubicación del medidor y protecciones principales.",
      image:
        "https://i.postimg.cc/cJMs61W6/Captura-de-pantalla-2025-04-08-123021.png",
    },
    {
      title: "Estudio de localización/Conexión",
      description:
        "Plano de ubicación del inmueble en su contexto urbano o rural, con trazado del punto de conexión a red pública. Base para trámites ante el operador de red.",
      image:
        "https://i.postimg.cc/MT6zBkZ5/Captura-de-pantalla-2025-04-08-123149.png",
    },
    {
      title: "Cotización de Materiales",
      description:
        "Documento en formato Excel que lista los materiales eléctricos requeridos para el proyecto, con cantidades estimadas y referencias comerciales para facilitar la compra.",
      image:
        "https://i.postimg.cc/nLtFHj66/Captura-de-pantalla-2025-04-08-123332.png",
    },
  ];

  return (
    <>
      <section className="main">
        <div className="main-text">
          <h2>¿Quiénes Somos?</h2>
        </div>
        <YoutubeVideo />
        <div className="main-text">
          <h2>Experiencia Prevía</h2>
          <p>
            Tenemos experiencia en distintos tipos de proyectos eléctricos,
            desde instalaciones independientes hasta sistemas de servicio
            público. Nuestro trabajo abarca entornos residenciales, comerciales
            e industriales, siempre cumpliendo con las normativas técnicas y
            ofreciendo soluciones seguras y eficientes. Aquí te mostramos parte
            de nuestra trayectoria en campo.
          </p>
        </div>
        <div className="proyectos">
          <Proyects projects={projectsData} />
          <p className="message-proyects">
            Oprime sobre la imagen para obtener mas información
          </p>
        </div>
        <div className="choose">
          <Choose />
        </div>
      </section>
    </>
  );
}

export default Container;
