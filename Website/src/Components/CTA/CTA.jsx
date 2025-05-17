import React from "react";
import styles from "./CTA.module.css";

const CTA = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Pensé pour les chauffeurs, pas pour les plateformes.
          </h2>
          <p className={styles.subtitle}>
            Votre métier mérite mieux qu'un tableau de chiffres. Nous optimisons
            vos choix, pas leurs profits.
          </p>
          <div className={styles.buttonContainer}>
            <a href="#" className={styles.downloadButton}>
              Télécharger l'app
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
