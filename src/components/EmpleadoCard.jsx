import React from 'react'

const EmpleadoCard = ({empleado}) => {
  return (
    <article className='card'>
      <img src={empleado.fotoUrl} alt={empleado.nombre} />
      <div>
        <h3>{empleado.nombre}</h3>
        <p>{empleado.email}</p>
        <p>{empleado.rol}</p>
      </div>
    </article>
  )
}

export default EmpleadoCard
