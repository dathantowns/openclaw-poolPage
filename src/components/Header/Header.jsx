import "./Header.css";
import headerLogo from "../../assets/monclova_logo01.png";

export default function Header() {
  return (
    <header className="header">
      <a href="#home" className="header__logo-link">
        <img src={headerLogo} alt="logo" className="header__logo" />
      </a>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a href="#home" className="header__nav-link">
              Home
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#about" className="header__nav-link">
              About
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#services" className="header__nav-link">
              Services
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#contact" className="header__nav-link">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
