import { createContext, useState } from "react";

export const MascotasContext = createContext()


const MascotasProvider = ({children}) => {
    const origin= [
        {
        id: 1, nombre: 'Eva', tipo: 'Perro', raza: 'Mestiza', color: 'Marrón naranjo', tamanio: 'Mediano',
        descripcion: 'Un perro amigable que le gusta correr y jugar.',
        fotoUrl: 'https://random.dog/12297f35-1812-4a63-9e17-64dd05c7a759.jpg'
      },
      {
        id: 2, nombre: 'Mia', tipo: 'Gato', raza: 'Persa', color: 'Blanco', tamanio: 'Pequeño',
        descripcion: 'Gata tranquila y cariñosa.',
        fotoUrl: 'https://random.dog/12297f35-1812-4a63-9e17-64dd05c7a759.jpg'
      },
      {
        id: 3,
        nombre: 'Rocky', tipo: 'Perro', raza: 'Bulldog', color: 'Gris', tamaño: 'Grande',
        descripcion: 'Un perro protector y juguetón.',
        fotoUrl: 'https://random.dog/12297f35-1812-4a63-9e17-64dd05c7a759.jpg'
      },
      {
        id: 4, nombre: 'Bobby', tipo: 'Perro', raza: 'Labrador', color: 'Marrón', tamanio: 'Mediano',
        descripcion: 'Un perro amigable que le gusta correr y jugar.',
        fotoUrl: 'https://random.dog/12297f35-1812-4a63-9e17-64dd05c7a759.jpg'
      },
      {
        id: 5, nombre: 'Mia', tipo: 'Gato', raza: 'Persa', color: 'Blanco', tamanio: 'Pequeño',
        descripcion: 'Gata tranquila y cariñosa.',
        fotoUrl: 'https://random.dog/12297f35-1812-4a63-9e17-64dd05c7a759.jpg'
      }
    ]

    const [mascotas, setMascotas] = useState(origin)
  return (
    <MascotasContext.Provider value={{mascotas, setMascotas}} >
        {children}
    </MascotasContext.Provider>
  )
}

export default MascotasProvider
