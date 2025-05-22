import React from "react";
import styles from "./Beta.module.css";

const CTA = () => {
  return (
    <section className={styles.betaSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Beta ouverte pour les chauffeurs de VTC
          </h2>
          <p className={styles.subtitle}>
            Limiter les trajets à vide, optimiser les temps d'attente et
            améliorer la rentabilité de votre activité. Rejoignez notre beta
            ouverte et testez notre application avant tout le monde.
          </p>
          <div className={styles.buttonContainer}>
            <a href="#" className={styles.downloadButton}>
              Seulement 100 places disponibles
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
