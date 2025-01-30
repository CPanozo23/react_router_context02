import React from 'react'

const MascotaCard = ({mascota}) => {
  return (
    <article className='card'>
      <img src={mascota.fotoUrl} alt={mascota.nombre} />
      <div>
        <h3>{mascota.nombre}</h3>
        <p>{mascota.tipo}</p>
        <p>{mascota.raza}</p>
        <p>{mascota.descripcion}</p>
      </div>
    </article>
  )
}

export default MascotaCard
