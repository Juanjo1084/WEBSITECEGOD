import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import '../styles/choose.css'

const Choose = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Se activa cuando el 20% del componente es visible
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setVisible(true); // Activa la animación cada vez que entra en vista
    } else {
      setVisible(false); // Resetea para que la animación se repita
    }
  }, [inView]);

  return (
    <div className="choose-main">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 400 }} // Empieza fuera de la pantalla
        animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : 400 }} // Vuelve a animarse cada vez que reaparece
        transition={{ duration: 1, ease: "easeOut" }}
        className="choose-container"
      >
        <h2 className="choose-title">¿Por qué elegirnos?</h2>
        <ul className="choose-list">
          <li><p><strong>Experiencia y profesionalismo:</strong> Contamos con un equipo de ingenieros altamente capacitados y con amplia trayectoria en el sector.</p></li>
          <li><p><strong>Calidad garantizada:</strong> Utilizamos materiales certificados y cumplimos con todas las normativas vigentes.</p></li>
          <li><p><strong>Compromiso con el cliente:</strong> Diseñamos soluciones personalizadas y brindamos acompañamiento en cada etapa del proyecto.</p></li>
          <li><p><strong>Eficiencia y cumplimiento:</strong> Nos aseguramos de entregar proyectos en tiempo y forma, optimizando recursos y garantizando los mejores resultados.</p></li>
        </ul>
        <div className="choose-icons">
        <i class="fa-solid fa-lightbulb"></i>
        <i class="fa-solid fa-helmet-safety"></i>
        <i class="fa-solid fa-shield-halved"></i>
        </div>
      </motion.div>
    </div>
  );
};

export default Choose;

