import "../styles/container.css";
import Proyects from "./proyects.jsx";
import Choose from "./choose.jsx";
import YoutubeVideo from "./youtube.jsx";

function Container() {
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
        <div className="choose">
          <Choose />
        </div>
      </section>
    </>
  );
}

export default Container;
