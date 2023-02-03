import Banner from "./Componentes/Banner"
import Menu from "./Componentes/Menu"
import Servicos from "./Componentes/Servicos"
import Populares from "./Componentes/Populares"
import Depoimentos from "./Componentes/Depoimentos"
import Footer from "./Componentes/Footer"

function App() {
  return (
    <div className="App">
      <Menu />

      <main>
        <Banner />
        <Servicos />
        <Populares />
        <Depoimentos />
      </main>
      <Footer />
    </div>
  )
}

export default App
