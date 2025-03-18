import './proyects.css'

function Proyects({ title, description, image }) {
    return (
        <div className="flip-card-container">
            <div className="flip-card">
                <div className="card-front">
                    <figure>
                        <img src={image} alt="Brohm Lake" />
                        <figcaption>{title}</figcaption>
                    </figure>
                </div>

                <div className="card-back">
                    <ul>
                        <li>Descripción</li>
                        <p>{description}</p>
                        <button>Mantener</button>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Proyects