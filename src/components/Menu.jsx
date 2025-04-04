import "../styles/menu.css";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Menu({ setContent }) {
  const [activeLink, setActiveLink] = useState("inicio");
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  function handleMenu() {
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    if (isMobile) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 991);
      if (window.innerWidth > 991) {
        setIsOpen(true);
      }
    }

    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobile]);

  return (
    <div className="menu" ref={menuRef}>
      <button
        onClick={() => {
          window.scrollTo(0, 0);
          navigate("/");
        }}
      >
        <i className="fa-solid fa-helmet-safety"></i>
      </button>
      {isMobile && (
        <button className="icon-menu" onClick={handleMenu}>
          <i className="fa-solid fa-bars"></i>
        </button>
      )}
      {(isOpen || !isMobile) && (
        <ul id="menu" className="navbar">
          <li>
            <a
              className={activeLink === "inicio" ? "active" : ""}
              onClick={() => {
                setContent("inicio");
                setActiveLink("inicio");
                closeMenu();
              }}
            >
              Sobre Nosotros
            </a>
          </li>
          <li>
            <a
              className={activeLink === "servicios" ? "active" : ""}
              onClick={() => {
                setContent("servicios");
                setActiveLink("servicios");
                closeMenu();
              }}
            >
              Nuestros Servicios
            </a>
          </li>
          <li>
            <a
              className={activeLink === "contacto" ? "active" : ""}
              onClick={() => {
                setContent("contacto");
                setActiveLink("contacto");
                closeMenu();
              }}
            >
              Información
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Menu;
