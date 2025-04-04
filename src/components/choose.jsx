import "../styles/choose.css";
import { motion } from "framer-motion";

const Choose = () => {
  return (
    <div className="choose-main">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
        className="choose-container"
      >
        <h2 className="choose-title">¿Por qué elegirnos?</h2>

        <motion.ul
          className="choose-list"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
          }}
          viewport={{ once: false }}
        >
          {[
            "Experiencia y profesionalismo: Contamos con un equipo de ingenieros altamente capacitados y con amplia trayectoria en el sector.",
            "Calidad garantizada: Utilizamos materiales certificados y cumplimos con todas las normativas vigentes.",
            "Compromiso con el cliente: Diseñamos soluciones personalizadas y brindamos acompañamiento en cada etapa del proyecto.",
            "Eficiencia y cumplimiento: Nos aseguramos de entregar proyectos en tiempo y forma, optimizando recursos y garantizando los mejores resultados.",
          ].map((text, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <p>
                <strong>{text.split(":")[0]}:</strong> {text.split(":")[1]}
              </p>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="choose-icons"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <i className="fa-solid fa-lightbulb"></i>
          <i className="fa-solid fa-helmet-safety"></i>
          <i className="fa-solid fa-shield-halved"></i>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Choose;
