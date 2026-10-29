import logoImg from "../../assets/fundolagoa.png";
import './Main.css';


function Main() {
  return (
    <main className="main">
      <div className="main-container">
        
         <section className="servicos">
          <h5>LAGOA DA CONCEIÇAO - FLORIANÓPOLIS</h5>
          <h1>Café coado,vista <br />para a lagoa.</h1>
          <p>Grãos de pequenos produtores do sul do Brasil, pães de <br /> fermentação natural e doces feitos todos os dias aqui na <br />casa</p>
        <img className="logo-icon" src={logoImg} alt="Logo Café lagoa" />
        </section>
        <section className="hero">

          <div className="hero-buttons">
            <a href="#orcamento" className="btn-primary">Ver Cardapio</a>
            <a href="#portfolio" className="btn-secondary">Falar com a gente</a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Main;
              