import { useState } from "react";
import "../styles/modal.css";

function ModalPrivacy() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <a onClick={() => setIsOpen(true)}>Política de Privacidad</a>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={() => setIsOpen(false)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <h2>Política de Privacidad</h2>
            <div className="modal-text">
              <h3>1. Responsable del tratamiento de datos</h3>
              <p>
                CEGOD Ingenierías S.A.S. domiciliada en Pasto, Colombia, es
                responsable del tratamiento de los datos personales recopilados
                a través del sitio web y otros medios comerciales.
              </p>
              <h3>2. Datos recopilados</h3>
              <p>Recolectamos los siguientes datos personales:</p>
              <ul>
                <li>Nombre, correo electrónico y número de contacto.</li>
                <li>
                  Información sobre ubicación del proyecto y características
                  técnicas (para cotización).
                </li>
                <li>
                  Datos derivados del uso del sitio web mediante cookies (ver
                  sección de cookies).
                </li>
              </ul>
              <h3>3. Finalidad del tratamiento</h3>
              <p>Los datos se utilizarán para:</p>
              <ul>
                <li>
                  Contacto con el usuario para ofrecer servicios eléctricos.
                </li>
                <li>Envío de cotizaciones y asesoría técnica.</li>
                <li>Mejorar la experiencia del usuario en el sitio web.</li>
              </ul>
              <h3>4. Derechos del titular</h3>
              <p>
                El usuario tiene derecho a conocer, actualizar, rectificar y
                suprimir sus datos personales. Puede ejercer estos derechos
                escribiendo a: contacto@cegodingenierias.com.
              </p>
              <h3>5. Seguridad de la información</h3>
              <p>
                Implementamos medidas técnicas y organizativas para proteger los
                datos personales contra pérdida, acceso no autorizado o uso
                indebido.
              </p>
              <h3>6. Cookies</h3>
              <p>
                Utilizamos cookies para mejorar la navegación y realizar
                análisis estadísticos. Al continuar usando el sitio, el usuario
                acepta su uso.
              </p>
              <h3>7. Vigencia y modificaciones</h3>
              <p>
                Esta política entra en vigencia a partir del [fecha de
                publicación] y puede ser modificada en cualquier momento. Las
                modificaciones se publicarán en el sitio web.
              </p>
              <h3>8. Normativa aplicable</h3>
              <p>
                Esta política cumple con la Ley 1581 de 2012 y el Decreto 1377
                de 2013 sobre protección de datos personales en Colombia.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalPrivacy;
