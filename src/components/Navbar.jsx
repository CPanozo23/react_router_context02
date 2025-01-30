import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className='webName'>Eva Pets</div>
      <div>
        <Link to="/" className='link'>Home</Link>
        <Link to="/contacto" className='link'>Contacto</Link>
        <Link to="/empleados" className='link'>Empleados</Link>
      </div>
    </nav>
  )
}

export default Navbar
