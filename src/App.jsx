//import { useState } from 'react'
//import './App.css'

import Banner from "./Componentes/Banner"
import Menu from "./Componentes/Menu"
import Servicos from "./Componentes/Servicos"
import Populares from "./Componentes/Populares"

function App() {
  return (
    <div className="App">
      <Menu />
      <Banner />
      <main>
        <Servicos />
        <Populares />
      </main>
    </div>
  )
}

export default App
