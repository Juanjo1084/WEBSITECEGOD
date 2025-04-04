import "../styles/consultation.css";
import SystemQuote from "./systemquote.jsx";

export default function Consultation() {
  return (
    <section className="consultation-container">
      <div className="consultation-main">
        <div className="consultation-title">
          <h1>Consulta</h1>
        </div>
        <div className="consultation-description">
          <p>
            En CEGOD Ingenierías te damos la posibilidad de realizar una
            cotización estimada de tu proyecto de forma rápida y sencilla. Este
            apartado ha sido diseñado para que puedas obtener un valor
            aproximado según las características básicas de tu proyecto, como:
          </p>
          <ul className="consultation-charactes">
            <li>Metros cuadrados del área a intervenir</li>
            <li>Número de pisos o niveles del inmueble</li>
            <li>Tipo de uso: residencial, comercial o industrial</li>
            <li>Ubicación del proyecto</li>
            <li>Tipo de instalación: nueva, remodelación o ampliación</li>
          </ul>
          <p>
            Este sistema tiene como objetivo brindarte una referencia inicial de
            costos, útil para planificar y tomar decisiones con mayor claridad.
          </p>
        </div>
        <div className="consultation-form">
            <SystemQuote />
        </div>
        <div className="consultation-description">
          <p className="important-message">
            Importante: Ten en cuenta que las cotizaciones generadas aquí son
            aproximadas. El valor real puede variar dependiendo de múltiples
            factores como condiciones específicas del sitio, normativas locales,
            requerimientos técnicos adicionales, disponibilidad de materiales,
            mano de obra, entre otros.
          </p>
        </div>
      </div>
    </section>
  );
}
