//import { useState } from 'react'
//import './App.css'

import Banner from "./Componentes/Banner"
import Menu from "./Componentes/Menu"
import Servicos from "./Componentes/Servicos"

function App() {
  return (
    <div className="App">
      <Menu />
      <Banner />
      <main>
        <Servicos />
      </main>
    </div>
  )
}

export default App
