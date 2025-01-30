import React, { useContext } from 'react'
import { EmpleadosContext } from '../context/EmpleadosContext'

const EmpleadosTable = () => {
    const {empleados, setEmpleados} = useContext(EmpleadosContext)
  return (
    <table>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Rol</th>
            <th>Email</th>
            <th>Imagen</th>
        </tr>
        {empleados.map(({id, nombre,rol, email, fotoUrl}) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{nombre}</td>
            <td>{rol}</td>
            <td>{email}</td>
            <td><img src={fotoUrl} alt={nombre} /></td>
          </tr>
        ))}
    </table>
  )
}

export default EmpleadosTable
