import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import styles from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    // Si nous sommes déjà sur la page d'accueil
    if (window.location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      // Si nous sommes sur une autre page, naviguer vers la page d'accueil avec l'ancre
      navigate(`/#${sectionId}`);
    }
    // Fermer le menu mobile après la navigation
    setMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link to="/" className={styles.logoLink}>
          <h1 className={styles.logo}>OpenCab</h1>
        </Link>

        <nav className={styles.mainNav}>
          <button
            onClick={() => scrollToSection("features")}
            className={styles.navLink}
          >
            Fonctionnalités
          </button>
          <button
            onClick={() => scrollToSection("mission")}
            className={styles.navLink}
          >
            Notre mission
          </button>
          <button
            onClick={() => scrollToSection("entreprise")}
            className={styles.navLink}
          >
            Entreprise
          </button>
          <Link to="/pricing" className={styles.navLink}>
            Tarifs
          </Link>
        </nav>

        <div className={styles.rightNav}>
          <button className={styles.loginButton}>Se connecter</button>
          <button className={styles.signupButton}>S'inscrire</button>
        </div>

        <button
          className={styles.mobileMenuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <button
            onClick={() => scrollToSection("features")}
            className={styles.mobileNavLink}
          >
            Fonctionnalités
          </button>
          <button
            onClick={() => scrollToSection("mission")}
            className={styles.mobileNavLink}
          >
            Notre mission
          </button>
          <button
            onClick={() => scrollToSection("entreprise")}
            className={styles.mobileNavLink}
          >
            Entreprise
          </button>
          <Link
            to="/pricing"
            className={styles.mobileNavLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            Tarifs
          </Link>
          <div className={styles.mobileButtons}>
            <button className={styles.mobileLoginButton}>Se connecter</button>
            <button className={styles.mobileSignupButton}>S'inscrire</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
