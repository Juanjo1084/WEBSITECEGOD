import './container.css'
import Proyects from './proyects.jsx'
import Services from './services.jsx'

function Container() {
    
    return (
        <>
        <div className='main-text'>
                    <h2>Servicios</h2>
                    <p>Un poco de nuestros servicios</p>
        </div>
        <div className='indicator'></div>
        <div className='services'>
                <Services />
        </div>
        <div className='main-text'>
                <h2>Experiencia Prevía</h2>
                <p>Un poco de nuestra experiencia en campo</p>
            </div>
            <div className='indicator'></div>
        <section className="main">
            <div className='proyectos'>
                <Proyects title = 'Vivienda Tipo I'
                description = 'Este diseño está pensado para viviendas compactas o locales pequeños, asegurando una distribución eficiente de la energía. Incluye una red básica de iluminación y tomacorrientes estratégicamente ubicados, considerando zonas de alto consumo como la cocina y el baño. Además, cuenta con circuitos independientes para iluminación y tomas, garantizando seguridad y eficiencia energética.'
                image = "https://i.postimg.cc/nL1G7RdM/casa1.jpg"
                />
                <Proyects title = 'Vivienda Tipo II'
                description = 'Para espacios de mayor tamaño, este diseño incorpora un sistema eléctrico más robusto, con circuitos dedicados para electrodomésticos de alto consumo, como aire acondicionado, horno y calentadores. Se optimiza la distribución de luminarias para garantizar una iluminación eficiente en varias habitaciones, área social y exteriores. También incluye protecciones como disyuntores y diferenciales para mayor seguridad.'
                image = "https://i.postimg.cc/0QWGX61s/casa2.jpg"
                />
                <Proyects title = 'Vivienda Tipo III'
                description = 'Este diseño está enfocado en edificaciones de gran tamaño, como residencias amplias o instalaciones comerciales. Incluye tableros eléctricos secundarios para distribuir mejor la carga, un sistema de iluminación LED con sensores de movimiento y circuitos de respaldo para equipos esenciales. También se contemplan sistemas de energía renovable, como paneles solares, y protecciones avanzadas contra sobretensiones y fallos eléctricos.'
                image = "https://i.postimg.cc/SsN7G65d/casa3.jpg"
                />
            </div>
        </section>
        </>
    )
}

export default Container