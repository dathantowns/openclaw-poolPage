import { useState } from "react";
import "./Header.css";
import headerLogo from "../../assets/monclovaLogo.PNG";
import hamburger from "../../assets/hamburger.svg";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <a href="#home" className="header__logo-link">
        <img src={headerLogo} alt="logo" className="header__logo" />
        <div className="header__logo-text-cont">
          <p className="header__logo-text_top">Monclova's Pool</p>
          <p className="header__logo-text_bottom">Service & Repair</p>
        </div>
      </a>
      <nav className="header__nav">
        <button
          className="header__hamburger"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <img src={hamburger} alt="menu" className="header__icon" />{" "}
          {/* Hamburger icon */}
        </button>
        <ul
          className={`header__nav-list ${isMobileMenuOpen ? "header__nav-list--open" : ""}`}
        >
          <li className="header__nav-item">
            <a
              href="#home"
              className="header__nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
          </li>
          <li className="header__nav-item">
            <a
              href="#about"
              className="header__nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li className="header__nav-item">
            <a
              href="#services"
              className="header__nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
          </li>
          <li className="header__nav-item">
            <a
              href="#testimonials"
              className="header__nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
          </li>
          <li className="header__nav-item">
            <a
              href="#contact"
              className="header__nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
