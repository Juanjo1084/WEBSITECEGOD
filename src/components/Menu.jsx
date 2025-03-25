import './menu.css'

function Menu({setContent}) {
    return (    
        <div className="menu">
            {/* <img src="https://i.postimg.cc/NGybPwpw/pngegg.png" alt="logo" /> */}
            <input type="checkbox" id='menu' />
            <label htmlFor="menu">
                <i class="fa-solid fa-bars"></i>
            </label>
            <nav className="navbar">
            <ul>
                <li><a onClick={() => setContent("inicio")}>Sobré Nosotros</a></li>
                <li><a onClick={() => setContent("servicios")}>Nuestros Servicios</a></li>
                <li><a onClick={() => setContent("contacto")}>Información</a></li>
            </ul>
            </nav>
        </div>
    )
}

export default Menu