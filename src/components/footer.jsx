import "../styles/footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-content ">
          <div className="link">
            <h3>CONTACTOS</h3>
            <ul>
              <h3 className="footer-email">
                Email:
                <li>
                  <a href="mailto:cegodingenierias@gmail.com">
                    cegodingenierias@gmail.com
                  </a>
                </li>
              </h3>
              <h3>Redes:</h3>
              <div className="networks">
                {/* <a href="https://www.instagram.com/juanjo_pabon/"><i class="fa-brands fa-instagram "></i></a> */}
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61557623222135"
                >
                  <i class="fa-brands fa-facebook "></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.tiktok.com/@cegodingenieria?lang=es"
                >
                  <i class="fa-brands fa-tiktok "></i>
                </a>
              </div>
            </ul>
          </div>
          <div className="indicador-footer"></div>
          <ul className="footer-info">
            <li>
              <a href="">Terminos y condiciones</a>
            </li>
            <li>
              <a href="">Politica de Privacidad</a>
            </li>
          </ul>
          <p>©CEGODINGENIERIAS | Todos los derechos reservados</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
