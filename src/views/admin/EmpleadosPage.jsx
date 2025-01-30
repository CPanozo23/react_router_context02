import React from 'react'
import EmpleadoCreate from '../../components/EmpleadoCreate'
import EmpleadosTable from '../../components/EmpleadosTable'

const EmpleadosPage = () => {
  return (
    <main>
      <h1>Gestionar Empleados</h1>
      <EmpleadoCreate />
      <EmpleadosTable />
    </main>
  )
}

export default EmpleadosPage
