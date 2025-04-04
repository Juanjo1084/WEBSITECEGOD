import Menu from './Menu.jsx'
import './header.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
const [content, setContent] = useState("inicio");
const navigate = useNavigate();

const sections = {
    inicio: {
        title: "Bienvenidos",
        subtitle: "Sobre CEGOD Ingenierías",
        text: "Nos especializamos en el diseño de sistemas eléctricos para distintos tipos de residencias, garantizando seguridad, eficiencia y cumplimiento con normativas como el RETIE y el RETILAP. Con aproximadamente un año en el mercado, ofrecemos precios accesibles sin comprometer la calidad. Nos enfocamos en brindar soluciones adaptadas a las necesidades de cada cliente, utilizando herramientas avanzadas y aplicando las mejores prácticas del sector. Nuestro compromiso es diseñar instalaciones confiables y seguras, optimizando recursos y asegurando un servicio profesional y personalizado.",
        link: "¿Quiénes somos?",
        rute: "/",
    },
    servicios: {
        title: "",
        subtitle: "Soluciones eléctricas a medida",
        text: "Tenga en cuenta que nuestros servicios son a nivel nacional, nuestros diseños se adaptan para diferentes tipos de residencias, desde viviendas unifamiliares de un piso hasta edificaciones más complejas de varios niveles. Cada proyecto es diseñado considerando factores clave como la demanda energética, sistemas de protección, distribución de circuitos y la instalación de tableros eléctricos. Para residencias más grandes o conjuntos residenciales, evaluamos la necesidad de transformadores, bancos de condensadores y sistemas de puesta a tierra, asegurando un suministro estable y seguro. ",
        link: "Conoce nuestros servicios",
        rute: "/services",
    },
    contacto: {
        title: "",
        subtitle: "Estamos listos para ayudarte",
        text: "Si está interesado en nuestros servicios, es importante tener en cuenta que la disponibilidad del proyecto dependerá de los requerimientos específicos y la complejidad del diseño. El costo varía según el área a intervenir, los estudios previos necesarios y la cantidad de información disponible. Para ofrecerle una cotización precisa y ajustada a sus necesidades, evaluamos cada caso de manera detallada, garantizando una solución eficiente y conforme a la normativa vigente.",
        link: "Realiza tus propías cotizaciones",
        rute: "/consultation",
    },
};

    return (
        <div className="header">
            <Menu setContent={setContent} />
            <div className="container">
                <div className='header-content'>
                    <div key={content} className="fade-slide">
                        <h1>{sections[content].title}</h1>
                        <h2>{sections[content].subtitle}</h2>
                        <p>{sections[content].text}</p>
                        <button className='navigate' onClick={() => {window.scrollTo(0, 0); navigate(sections[content].rute)}}>{sections[content].link}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header