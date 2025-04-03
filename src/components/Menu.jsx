import './menu.css';
import { useState, useEffect } from 'react';

function Menu({ setContent }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);

    function handleMenu() {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 991);
            if (window.innerWidth > 991) {
                setIsOpen(true); 
            }
        }

        window.addEventListener("resize", handleResize);
        handleResize(); 

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="menu">
            <i className="fa-solid fa-helmet-safety"></i>
            {isMobile && (
                <button onClick={handleMenu}>
                    <i className="fa-solid fa-bars"></i>
                </button>
            )}
            {(isOpen || !isMobile) && (
                <ul id="menu" className="navbar">
                    <li><a onClick={() => setContent("inicio")}>Sobre Nosotros</a></li>
                    <li><a onClick={() => setContent("servicios")}>Nuestros Servicios</a></li>
                    <li><a onClick={() => setContent("contacto")}>Información</a></li>
                </ul>
            )}
        </div>
    );
}

export default Menu;
