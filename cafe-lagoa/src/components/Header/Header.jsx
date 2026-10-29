import "./Header.css";
import logoImg from '../../assets/cafe.png';



function Header() {
  return (
    <header className="header">
      <div className="header-container">
      <div className="logo">
        <img className="logo-icon" src={logoImg} alt="Logo Café lagoa" />
        <span className="logo-text">Café Lagoa</span>
      </div>

      <nav className="nav">
        <a href="#" className="btn-inicio">Inicio</a>
        <a href="#">Catalógo</a>
        <a href="#">Sobre</a>
        <a href="#" >Contato</a>
      </nav>
      </div>
    </header>
   
   
  );
}
export default Header;

