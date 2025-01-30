import React, { useContext } from 'react'
import { EmpleadosContext } from '../context/EmpleadosContext'
import EmpleadoCard from '../components/EmpleadoCard'

const ContactPage = () => {
    const {empleados, setEmpleados} = useContext(EmpleadosContext)
  
  return (
    <main>
      <h1>¡Conoce a nuestro equipo!</h1>
      <section className='cards'>
        {empleados.map(({id, nombre,rol, email, fotoUrl}) => (
          <EmpleadoCard key={id} empleado={{id, nombre,rol, email, fotoUrl}}  />
        ))}
      </section>
    </main>
  )
}

export default ContactPage
