import { createContext, useState } from "react";

export const EmpleadosContext = createContext()


const EmpleadosProvider = ({children}) => {
    const origin=[
        { id: 1, nombre: 'Empleado 1', rol: 'gerencia', email: 'empleado1@evapets.cl', fotoUrl: 'https://randomuser.me/api/portraits/men/75.jpg'},
        { id: 2, nombre: 'Empleado 2', rol: 'operativo', email: 'empleado2@evapets.cl', fotoUrl: 'https://randomuser.me/api/portraits/men/75.jpg'},
        { id: 3, nombre: 'Empleado 3', rol: 'gerencia', email: 'empleado3@evapets.cl', fotoUrl: 'https://randomuser.me/api/portraits/men/75.jpg'},
        { id: 4, nombre: 'Empleado 4', rol: 'admin', email: 'empleado4@evapets.cl', fotoUrl: 'https://randomuser.me/api/portraits/men/75.jpg'}
       ]
    const [empleados, setEmpleados] = useState(origin)
  return (
    <EmpleadosContext.Provider value={{empleados, setEmpleados}} >
        {children}
    </EmpleadosContext.Provider>
  )
}

export default EmpleadosProvider
