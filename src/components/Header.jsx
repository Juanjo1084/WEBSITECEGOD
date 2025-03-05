import Menu from './menu'
import './header.css'
import { useState } from 'react';
function Header() {
    // Estado para el contenido dinámico
    const [content, setContent] = useState("inicio");

    // Contenidos de cada sección
    const sections = {
        inicio: {
            title: "Bienvenidos",
            subtitle: "En nuestra empresa",
            text: "Nos especializamos en el diseño de sistemas eléctricos para distintos tipos de residencias, garantizando seguridad, eficiencia y cumplimiento con normativas como el RETIE y el RETILAP. Con aproximadamente un año en el mercado, ofrecemos precios accesibles sin comprometer la calidad. Nos enfocamos en brindar soluciones adaptadas a las necesidades de cada cliente, utilizando herramientas avanzadas y aplicando las mejores prácticas del sector. Nuestro compromiso es diseñar instalaciones confiables y seguras, optimizando recursos y asegurando un servicio profesional y personalizado.",
        },
        servicios: {
            title: "",
            subtitle: "Soluciones eléctricas a medida",
            text: "Tenga en cuenta que nuestros servicios son a nivel nacional, nuestros diseños se adaptan para diferentes tipos de residencias, desde viviendas unifamiliares de un piso hasta edificaciones más complejas de varios niveles. Cada proyecto es diseñado considerando factores clave como la demanda energética, sistemas de protección, distribución de circuitos y la instalación de tableros eléctricos. Para residencias más grandes o conjuntos residenciales, evaluamos la necesidad de transformadores, bancos de condensadores y sistemas de puesta a tierra, asegurando un suministro estable y seguro. ",
        },
        contacto: {
            title: "",
            subtitle: "Estamos listos para ayudarte",
            text: "Si está interesado en nuestros servicios, es importante tener en cuenta que la disponibilidad del proyecto dependerá de los requerimientos específicos y la complejidad del diseño. El costo varía según el área a intervenir, los estudios previos necesarios y la cantidad de información disponible. Para ofrecerle una cotización precisa y ajustada a sus necesidades, evaluamos cada caso de manera detallada, garantizando una solución eficiente y conforme a la normativa vigente.",
        },
    };

    return (
        <div className="header">
            <div className="container">
                <Menu setContent={setContent} />
                <div className='header-content'>
                    <div key={content} className="fade-slide">
                        <h2>{sections[content].title}</h2>
                        <h1>{sections[content].subtitle}</h1>
                        <p>{sections[content].text}</p>
                    </div>
                    <a href="#" className="btn-1">Quieres saber más</a>
                </div>
            </div>
        </div>
    );
}
    export default Header