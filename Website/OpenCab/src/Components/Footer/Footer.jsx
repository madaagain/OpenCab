import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          {/* Logo et description */}
          <div className={styles.companySection}>
            <h3 className={styles.logoText}>OpenCab</h3>
            <p className={styles.companyDescription}>
              L'application de taxi qui simplifie vos déplacements. Réservez,
              suivez, payez en toute simplicité.
            </p>
          </div>

          {/* Entreprise */}
          <div className={styles.linkSection}>
            <h4 className={styles.sectionTitle}>Entreprise</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="#" className={styles.footerLink}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Ethos
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Help
                </a>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div className={styles.linkSection}>
            <h4 className={styles.sectionTitle}>Légal</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="#" className={styles.footerLink}>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Labs
                </a>
              </li>
            </ul>
          </div>

          {/* Téléchargement APK */}
          <div className={styles.downloadSection}>
            <h4 className={styles.sectionTitle}>Télécharger l'app</h4>
            <p className={styles.downloadDesc}>
              Disponible uniquement via notre site
            </p>
            <a href="#" className={styles.downloadButton}>
              Télécharger APK
            </a>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>&copy; {currentYear} Entropi, Paris, FR</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
