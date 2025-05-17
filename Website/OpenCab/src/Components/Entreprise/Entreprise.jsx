import React from "react";
import styles from "./Enterprise.module.css";

const Enterprise = () => {
  return (
    <section id="entreprise" className={styles.enterpriseSection}>
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          {/* Left Content */}
          <div className={styles.textContent}>
            <h2 className={styles.title}>
              OpenCab que vous connaissez, réinventé pour les entreprises
            </h2>
            <p className={styles.description}>
              OpenCab Entreprise permet d'installer OpenCab pour votre flotte de
              chauffeurs afin de les aider à optimiser le trajet et transformer
              leur quotidien.
            </p>
          </div>
          {/* Right Image */}
          <div className={styles.imageContainer}>
            <img
              src="./image-2.jpg"
              alt="OpenCab Entreprise"
              className={styles.enterpriseImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enterprise;
