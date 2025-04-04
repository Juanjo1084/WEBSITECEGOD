import './container.css'
import Proyects from './proyects.jsx'
import Choose from './choose.jsx'
import YoutubeVideo from './youtube.jsx'

function Container() {

    const projectsData = [
        {
          title: "Vivienda I",
          description: "Descripción del plano eléctrico de la Vivienda I.",
          image: "https://i.postimg.cc/50PVDyJL/HOGAR-JESUS-MISERICORDIOSO-1-ELECTRICO-page-0001.jpg",
        },
        {
          title: "Vivienda II",
          description: "Descripción del plano eléctrico de la Vivienda II.",
          image: "https://i.postimg.cc/kGBmCCMZ/Plano-A3-1-page-0001.jpg",
        },
        {
          title: "Vivienda III",
          description: "Descripción del plano eléctrico de la Vivienda III.",
          image: "https://i.postimg.cc/j2mrd1Lj/DISE-O-ELECTRICO-E1-page-0001.jpg",
        },
      ];
    
    return (
        <>
        <section className="main">
            <div className='main-text'>
                <h2>¿Quiénes Somos?</h2>
            </div>
            <YoutubeVideo />
            <div className='main-text'>
                <h2>Experiencia Prevía</h2>
                <p>Contamos con experiencia en varios tipos de vivienda, desde interes independiente hasta servicio publico, aquí tienes un poco de nuestra experiencia en campo.</p>
            </div>
                <div className='proyectos'>
                    <Proyects projects={projectsData} />
                </div>
            <div className='indicator'></div>
            <div className='choose'>
                <Choose />
            </div>
        </section>
        </>
    )
}

export default Container