import React from "react";
import styles from "./Mission.module.css";

const Mission = () => {
  return (
    <section id="mission" className={styles.missionSection}>
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          {/* Left Image */}
          <div className={styles.imageContainer}>
            <img
              src="./image-3.jpg"
              alt="Chauffeur VTC"
              className={styles.missionImage}
            />
          </div>
          {/* Right Content */}
          <div className={styles.textContent}>
            <h2 className={styles.title}>
              Notre Mission — Mieux vous servir, pour que vous puissiez mieux
              servir à votre tour.
            </h2>
            <p className={styles.description}>
              Nous croyons que les chauffeurs VTC méritent des outils modernes
              pour optimiser leur métier. OpenCab simplifie votre quotidien en
              centralisant toutes vos plateformes et en vous aidant à prendre
              les meilleures décisions pour maximiser vos revenus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
