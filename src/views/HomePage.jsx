import React, { useContext } from 'react'
import { MascotasContext } from '../context/MascotasContext'
import MascotaCard from '../components/MascotaCard'

const HomePage = () => {
  const {mascotas, setMascotas} = useContext(MascotasContext)
  return (
    <main>
      <h1>Bienvenidos a Eva Pets</h1>
      <h2>Nuestras mascotas</h2>
      <section className='cards'>
        {mascotas.map(({id, nombre, tipo, raza, color, tamanio, descripcion, fotoUrl}) => (
          <MascotaCard key={id} mascota={{id, nombre, tipo, raza, color, tamanio, descripcion, fotoUrl}}  />
        ))}
      </section>
    </main>
  )
}

export default HomePage
