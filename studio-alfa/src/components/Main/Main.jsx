import { LayoutGrid, Smartphone, Rocket } from 'lucide-react';
import './Main.css';
import ServicoCard from '../ServicoCard/ServicoCard';


function Main() {
  return (
    <main className="main">
      <div className="main-container">
        <section className="hero">
          <h1>Criamos sites que funcionam</h1>
          <p>
            Layouts responsivos, rápidos e acessíveis para o seu{' '}
            <span className="quebrar">negócio</span> crescer na web.
          </p>
          <div className="hero-buttons">
            <a href="#orcamento" className="btn-primary">Peça um orçamento</a>
            <a href="#portfolio" className="btn-secondary">Ver portfólio</a>
          </div>
        </section>

        <section className="servicos">
          <h2>Nossos Serviços</h2>
          <div className="servicos-icones">
            <ServicoCard 
              icone={<LayoutGrid color="#0b4f8c" size={40} />} 
              titulo="Design de interface" 
              descricao="Telas claras, pensadas para o usuário." 
            />
            <ServicoCard 
              icone={<Smartphone color="#0b4f8c" size={40} />} 
              titulo="Responsividade" 
              descricao="O mesmo site em qualquer tela." 
            />
            <ServicoCard 
              icone={<Rocket color="#0b4f8c" size={40} />} 
              titulo="Performance" 
              descricao="Páginas leves que carregam rápido." 
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default Main;
              