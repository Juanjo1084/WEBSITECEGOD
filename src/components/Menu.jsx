import './menu.css'

function Menu({setContent}) {
    return (    
        <div className="menu">
            <a className='logo' href="#">MI LOGO</a>
            <input type="checkbox" id='menu' />
            <label htmlFor="menu">
                <img className='menu-icono' src="/src/components/images/menu.png" alt="" />
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