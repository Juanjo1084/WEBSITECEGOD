import React, { useState } from "react";
import "../styles/contacts.css";

const Contacts = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Solicitud de servicio - ${form.service}`;
    const body = `
Nombre: ${form.name}
Correo: ${form.email}
Teléfono: ${form.phone}
Servicio: ${form.service}

Mensaje:
${form.message}
    `;

    window.location.href = `mailto:cegodingenierias@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleWhatsApp = () => {
    const text = `
Hola, soy ${form.name}.
Estoy interesado en: ${form.service}

Mensaje:
${form.message}
    `;

    window.open(
      `https://wa.me/573000000000?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  };

  return (
    <section className="contacts">
      <div className="contacts-container">
        <div className="contacts-info">
          <h2>Contáctanos</h2>
          <p>
            En CEGOD Ingenierías estamos listos para ayudarte en el desarrollo
            de tus proyectos eléctricos, energías renovables y soluciones
            técnicas.
          </p>

          <div className="info-item">
            <strong>Email:</strong>
            <span> cegodingenierias@gmail.com</span>
          </div>

          <div className="info-item">
            <strong>Teléfono:</strong>
            <span> +57 313 457 8141</span>
          </div>

          <div className="info-item">
            <strong>Ubicación:</strong>
            <span> Colombia</span>
          </div>

          <div className="contacts-extra">
            <p>✔ Respuesta en menos de 24 horas</p>
            <p>✔ Asesoría personalizada</p>
            <p>✔ Experiencia en proyectos eléctricos y solares</p>
          </div>
        </div>

        <form className="contacts-form" onSubmit={handleSubmit}>
          <h3>Solicita tu cotización</h3>

          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            required
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            required
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Teléfono"
            onChange={handleChange}
          />

          <select name="service" onChange={handleChange} required>
            <option value="">Selecciona un servicio</option>
            <option value="Diseño eléctrico">Diseño eléctrico</option>
            <option value="Energía solar">Energía solar</option>
            <option value="Supervisión de proyectos">Supervisión</option>
            <option value="Estudios técnicos">Estudios técnicos</option>
          </select>

          <textarea
            name="message"
            placeholder="Describe tu proyecto..."
            rows="4"
            required
            onChange={handleChange}
          ></textarea>

          <div className="buttons">
            <button type="submit">Enviar por correo</button>
            <button type="button" onClick={handleWhatsApp}>
              <a className='btn-whats' target='_blank' rel='noopener noreferrer' href="https://wa.me/573134578141">WhatsApp</a>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
