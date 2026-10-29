import { useState } from 'react'
import OracaoDoBackend from './components/OracaodoBackend'
import OracaodoFullstack from './components/OracaodoFullstack'
import OracaodoFrontend from './components/OracaodoFrontend'
import OracaododesenvolvedorWeb from './components/OracaododesenvolvedorWeb'
import Oracaodoprogramador from './components/Oracaodoprogramador'
import './App.css'

function App() {
 
  const [pagina, setPagina] = useState(0)

  
  function mostrarProgramador(){
    setPagina(0)
  }

  return (
    <div className="container">
 
      <h1 className="main-title">Orações Devs</h1>

     
      <nav className="nav-tags">
        <button 
          className={pagina === 0 ? 'tag-btn active' : 'tag-btn'} 
          onClick={mostrarProgramador}
        >
          Do programador
        </button>
        <button 
          className={pagina === 1 ? 'tag-btn active' : 'tag-btn'} 
          onClick={() => setPagina(1)}
        >
          Do backend
        </button>
        <button 
          className={pagina === 2 ? 'tag-btn active' : 'tag-btn'} 
          onClick={() => setPagina(2)}
        >
          Do frontend
        </button>
        <button 
          className={pagina === 3 ? 'tag-btn active' : 'tag-btn'} 
          onClick={() => setPagina(3)}
        >
          Do fullstack
        </button>
        <button 
          className={pagina === 4 ? 'tag-btn active' : 'tag-btn'} 
          onClick={() => setPagina(4)}
        >
          Do desenvolvedor Web
        </button>
      </nav>


      <article className="prayer-section">
        {pagina === 0 && <Oracaodoprogramador />}
        {pagina === 1 && <OracaoDoBackend />}
        {pagina === 2 && <OracaodoFrontend />}
        {pagina === 3 && <OracaodoFullstack />}
        {pagina === 4 && <OracaododesenvolvedorWeb />}
      </article>
    </div>
  )
}

export default App


