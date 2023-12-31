import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'


const NavBar = () => {
  const [menu, setMenu] = useState(false);

  return (

    <nav>
      <Link to='/' className='titulo'> GINEZA </Link>
      <div className='menu' onClick={() => { setMenu(!menu) }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menu ? "open" : ""}>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/catalogo'>Catalogo</NavLink>
        </li>
        <li>
          <NavLink to='/contacto'>Contacto</NavLink>
        </li>
      </ul>
    </nav>

  )
}

export default NavBar