// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Contenido from './components/Contenido.jsx'
import Formulario247M from './components/Formulario247M.jsx'
import LandingPage from './components/LandingPage.jsx'
import Contacto from './components/Contacto.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Contenido />} />
      <Route path="/formulario" element={<Formulario247M />} />
      <Route path="/contacto" element={<Contacto/>} />
    </Routes>
      <Footer/>
    </>
  )
}

export default App
