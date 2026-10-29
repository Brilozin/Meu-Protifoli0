import "./Footer.css";
import { FaInstagram, FaGithub, FaRegEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer-icons">
        <a href="#">
          <FaInstagram size={24} />
        </a>
        <a href="#">
          <FaGithub size={24} />
        </a>
        <a href="#">
          <FaRegEnvelope size={24} />
        </a>
      </div>
       <div className="footer-bottom">
        <p>&copy; 2026 Studio Alfa.</p>
      </div>
    </footer>
  );
}

export default Footer;


