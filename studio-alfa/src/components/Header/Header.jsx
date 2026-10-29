import "./Header.css";
import logoImg from "../../assets/imgs/alfa.png";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
      <div className="logo">
        <img className="logo-icon" src={logoImg} alt="Logo Studio Alfa" />
        <span className="logo-text">Studio Alfa</span>
      </div>

      <nav className="nav">
        <a href="#">Inicio</a>
        <a href="#">Servicos</a>
        <a href="#">Sobre</a>
        <a href="#" className="btn-contatos">
          Contato
        </a>
      </nav>
      </div>
    </header>
   
  );
}
export default Header;

