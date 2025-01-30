import React, { useContext, useEffect, useState } from 'react'
import { EmpleadosContext } from '../context/EmpleadosContext'

const EmpleadoCreate = () => {
    const {empleados, setEmpleados} = useContext(EmpleadosContext)
    const [empleado, setEmpleado] = useState({
        id:0, nombre:"", rol:"", email:"", fotoUrl:"https://randomuser.me/api/portraits/men/75.jpg"
    })

    useEffect(() => {
        const maxId = empleados.length > 0 ? Math.max(...empleados.map(emp => emp.id)) : 1
        setEmpleado(prevEmpleado => ({ ...prevEmpleado, id: maxId + 1 }))
      }, [empleados])

    const handleSubmit = (e) => {
        e.preventDefault()
        setEmpleados([...empleados, empleado])
        alert("Empleado agregado")
        setEmpleado({
            id:0, nombre:"", rol:"", email:"", fotoUrl:"https://randomuser.me/api/portraits/men/75.jpg"
        })
    }

  return (
    <form onSubmit={handleSubmit}>
        <h2>Nuevo empleado</h2>
        <label>Nombre</label>
        <input type="text" value={empleado.nombre} onChange={(e) => setEmpleado({...empleado, nombre:e.target.value})} />
        <label>Rol</label>
        <input type="text" value={empleado.rol} onChange={(e) => setEmpleado({...empleado, rol:e.target.value})} />
        <label>Email</label>
        <input type="text" value={empleado.email} onChange={(e) => setEmpleado({...empleado, email:e.target.value})} />

        <button type="submit">Agregar</button>
    </form>
  )
}

export default EmpleadoCreate
