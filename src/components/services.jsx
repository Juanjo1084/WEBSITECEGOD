import './services.css'

export default function Services(){
    return(
        <>
            <div className='services'>
                <section className="general">
                    <div className="general-1">
                        <h2>Diseño de planos eléctricos</h2>
                        <p>Nos encargamos de la elaboración de planos eléctricos completos para diversos tipos de edificaciones, asegurando que cada diseño cumpla con las normativas vigentes y sea altamente funcional.</p>
                        {/* <a href="#" className="btn-1">Información</a> */}
                        <div className='services-caracteristicas'>
                            <ul>
                                <li><p>Desarrollo de planos eléctricos con especificaciones técnicas precisas.</p></li>
                                <li><p>Cálculo y distribución de cargas eléctricas para un consumo eficiente.</p></li>
                                <li><p>Diseño de tableros de distribución y diagramas unifilares.</p></li>
                                <li><p>Cumplimiento de normativas nacionales e internacionales.</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className="general-2"></div>
                </section>
                <section className="general">
                    <div className="general-3"></div>
                    <div className="general-1">
                        <h2>Instalaciones eléctricas</h2>
                        <p>Realizamos la implementación y mantenimiento de sistemas eléctricos, asegurando confiabilidad y eficiencia en cada instalación.</p>
                        {/* <a href="#" className="btn-1">Información</a> */}
                        <div className='services-caracteristicas'>
                            <ul>
                                <li><p>Implementación de redes eléctricas en baja y media tensión.</p></li>
                                <li><p>Mantenimiento preventivo y correctivo de redes eléctricas.</p></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="general">
                    <div className="general-1">
                        <h2>Construcción de Proyectos</h2>
                        <p>Brindamos soluciones integrales en la construcción de proyectos eléctricos para diversas aplicaciones, asegurando calidad y cumplimiento en cada etapa del proceso. Nos encargamos desde la planificación hasta la ejecución, garantizando eficiencia energética y seguridad.</p>
                        {/* <a href="#" className="btn-1">Información</a> */}
                        <div className='services-caracteristicas'>
                            <ul>
                                <li><p>Diseño y ejecución de sistemas eléctricos para edificaciones e industrias.</p></li>
                                <li><p>Evaluación y modernización de infraestructuras eléctricas obsoletas.</p></li>
                                <li><p>Evaluación de proyectos en energías renovables, como paneles solares y sistemas híbridos.</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className="general-4"></div>
                </section>
                <section className="general">
                    <div className="general-5"></div>
                    <div className="general-1">
                        <h2>Cotizaciones</h2>
                        <p>Facilitamos el proceso de presupuestación y planificación financiera de proyectos eléctricos, proporcionando cotizaciones detalladas y ajustadas a las necesidades del cliente.</p>
                        {/* <a href="#" className="btn-1">Información</a> */}
                        <div className='services-caracteristicas'>
                            <ul>
                                <li><p>Elaboración de presupuestos detallados y ajustados a normativas.</p></li>
                                <li><p>Análisis de costos y optimización de recursos.</p></li>
                                <li><p>Comparación de opciones de materiales y proveedores.</p></li>
                                <li><p>Asesoramiento técnico para una toma de decisiones informada.</p></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}