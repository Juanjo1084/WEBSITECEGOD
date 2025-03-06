import './container.css'
import Proyects from './proyects.jsx'

function Container() {
    
    return (
        <>
        
        <section className="main">
                <div className='main-text'>
                    <h2>Experiencia Prevía</h2>
                    <p>Un poco de nuestra experiencia en campo</p>
                </div>
                <div className='proyectos'>
                    <Proyects title = 'Vivienda'
                    description = 'Vivienda unifamiliar, 1 piso, contiene plano electrico, con tomas, iluminarias, fase, tierra.'
                    />
                    <Proyects title = 'Vivienda'
                    description = 'Vivienda unifamiliar, 1 piso, contiene plano electrico, con tomas, iluminarias, fase, tierra.'
                    />
                    <Proyects title = 'Vivienda'
                    description = 'Vivienda unifamiliar, 1 piso, contiene plano electrico, con tomas, iluminarias, fase, tierra.'
                    />
                </div>
        </section>
        </>
    )
}

export default Container