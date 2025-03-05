import './footer.css'

function Footer() {
    return (
        <>
        <footer className="footer">
        <div className="footer-content ">
            <div className="link">
                <h3>CONTACTOS</h3>
                <ul>
                    <li><a href="mailto:cegodingenierias@gmail.com">cegodingenierias@gmail.com</a></li>
                    <div className='networks'>
                        <a href="https://www.linkedin.com/in/juan-jos%C3%A9-7a19671aa/"><i class="fa-brands fa-linkedin "></i></a>
                        <a href="https://www.instagram.com/juanjo_pabon/"><i class="fa-brands fa-instagram "></i></a>
                        <a href="https://www.facebook.com/juanjo.pabonr"><i class="fa-brands fa-facebook "></i></a>
                        <a href="https://github.com/Juanjo1084"><i class="fa-brands fa-github "></i></a>
                    </div>
                </ul>
            </div>
        </div>
        </footer>
        </>
    )
}

export default Footer