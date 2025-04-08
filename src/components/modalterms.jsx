import { useState } from "react";
import "../styles/modal.css";

function ModalTerms() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <a onClick={() => setIsOpen(true)}>Terminos y Condiciones</a>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={() => setIsOpen(false)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <h2>Términos y Condiciones</h2>
            <div className="modal-text">
              <h3>1. Aceptación de los Términos</h3>
              <p>
                Al acceder a este sitio web y a los servicios ofrecidos por
                CEGOD Ingenierías S.A.S., el usuario acepta estos Términos y
                Condiciones. Si no está de acuerdo con alguno de ellos, deberá
                abstenerse de utilizar el sitio y los servicios.
              </p>
              <h3>2. Objeto del sitio web</h3>
              <p>
                El sitio web tiene como finalidad ofrecer información sobre los
                servicios de diseño eléctrico, estudios técnicos y cotizaciones
                que presta CEGOD Ingenierías S.A.S., así como permitir a los
                usuarios interactuar mediante formularios de contacto y
                cotización automatizada.
              </p>
              <h3>3. Servicios ofrecidos</h3>
              <p>Los servicios incluyen, pero no se limitan a:</p>
              <ul>
                <li>
                  Diseño de planos eléctricos para viviendas, locales
                  comerciales e industriales.
                </li>
                <li>Estudios de localización y conexión eléctrica.</li>
                <li>Cotización de materiales eléctricos.</li>
                <li>Asesoría técnica en proyectos eléctricos.</li>
              </ul>
              <h3>4. Limitación de responsabilidad</h3>
              <p>
                Las cotizaciones generadas a través del sistema automatizado son
                aproximadas y no representan un compromiso formal. El valor real
                puede variar según condiciones técnicas específicas, normativas
                locales y visita técnica.
              </p>
              <h3>5. Propiedad intelectual</h3>
              <p>
                Todo el contenido del sitio web, incluyendo textos, imágenes,
                logotipos y diagramas, es propiedad de CEGOD Ingenierías S.A.S.
                y está protegido por las leyes colombianas de derechos de autor.
              </p>
              <h3>6. Modificaciones</h3>
              <p>
                CEGOD Ingenierías S.A.S. se reserva el derecho de modificar en
                cualquier momento estos términos, notificando mediante su página
                web.
              </p>
              <h3>7. Legislación aplicable</h3>
              <p>
                Estos términos se rigen por las leyes de la República de
                Colombia, en especial la Ley 1480 de 2011 (Estatuto del
                Consumidor).
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalTerms;
