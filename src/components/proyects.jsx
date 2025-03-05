import './proyects.css'

function Proyects({ title, description, image }) {
    return (
        <div className="flip-card-container">
            <div className="flip-card">
                {/* Parte Frontal */}
                <div className="card-front">
                    <figure>
                        <img src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Brohm Lake" />
                        <figcaption>{title}</figcaption>
                    </figure>
                    <ul>
                        <li>Descripción</li>
                        <p>{description}</p>
                    </ul>
                </div>

                {/* Parte Trasera */}
                <div className="card-back">
                    <figure>
                    <img src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Brohm Lake" />
                    </figure>
                    <button>Retener</button>
                </div>
            </div>
        </div>
    );
}
export default Proyects