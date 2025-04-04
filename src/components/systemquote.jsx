import "../styles/systemquote.css";
import { useState } from "react";

function SystemQuote() {
  const [formData, setFormData] = useState({
    area: "",
    floors: "",
    usage: "residencial",
    location: "",
    type: "nueva",
  });

  const [quote, setQuote] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function calculateQuote(e) {
    e.preventDefault();
    const { area, floors, usage, location, type } = formData;
    let areaNum = parseFloat(area);
    let floorsNum = parseInt(floors);

    if (isNaN(areaNum) || isNaN(floorsNum)) {
      setQuote("Por favor ingresa valores válidos.");
      return;
    }

    // Base por metro cuadrado
    let basePrice = 0;

    if (areaNum <= 70) basePrice = 100000;
    else if (areaNum <= 200) basePrice = 300000;
    else basePrice = 600000;

    // Ajustes por tipo de uso
    if (usage === "comercial") basePrice *= 1.2;
    else if (usage === "industrial") basePrice *= 1.5;

    // Ajustes por número de pisos
    basePrice += (floorsNum - 1) * 50000;

    // Ajustes por tipo de instalación
    if (type === "remodelacion") basePrice *= 1.1;
    else if (type === "ampliacion") basePrice *= 1.2;

    // Redondear a la centena más cercana
    const finalPrice = Math.ceil(basePrice / 100) * 100;

    setQuote(
      `El valor estimado para tu proyecto es de aproximadamente $${finalPrice.toLocaleString()} COP`
    );
  }

  return (
    <div className="quote-container">
      <h2>Calcula tu cotización para planos eléctricos</h2>
      <form onSubmit={calculateQuote}>
        <label>
          Metros cuadrados del área:
          <input
            type="number"
            name="area"
            value={formData.area}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Número de pisos:
          <input
            type="number"
            name="floors"
            value={formData.floors}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Tipo de uso:
          <select name="usage" value={formData.usage} onChange={handleChange}>
            <option value="residencial">Residencial</option>
            <option value="comercial">Comercial</option>
            <option value="industrial">Industrial</option>
          </select>
        </label>

        <label>
          Ubicación del proyecto:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Tipo de instalación:
          <select name="type" value={formData.type} onChange={handleChange}>
            <option value="nueva">Nueva</option>
            <option value="remodelacion">Remodelación</option>
            <option value="ampliacion">Ampliación</option>
          </select>
        </label>

        <button type="submit">Calcular</button>
      </form>

      {quote && <div className="quote-result">{quote}</div>}
    </div>
  );
}

export default SystemQuote;
