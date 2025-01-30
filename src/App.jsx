import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import EmpleadosPage from './views/admin/EmpleadosPage'
import ContactPage from './views/ContactPage'
import HomePage from './views/HomePage'
import MascotasProvider from './context/MascotasContext'
import EmpleadosProvider from './context/EmpleadosContext'

function App() {

  return (
    <EmpleadosProvider>
      <MascotasProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/empleados" element={<EmpleadosPage />} />
        </Routes>
        <Footer />
      </MascotasProvider>
    </EmpleadosProvider>
  )
}

export default App
