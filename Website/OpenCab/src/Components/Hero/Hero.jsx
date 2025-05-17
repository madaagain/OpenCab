import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      {/* Video Container with Rounded Corners */}
      <div className={styles.videoContainer}>
        <video
          className={styles.backgroundVideo}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/HeroVideo.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </div>

      {/* Hero Content */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Partout, plus intelligemment</h1>
          <p className={styles.subtitle}>
            Toutes vos courses VTC réunies. Comparez, choisissez, maximisez vos
            revenus.
          </p>

          {/* Download Section */}
          <div className={styles.downloadSection}>
            <h3 className={styles.downloadTitle}>Téléchargez l'application</h3>
            <div className={styles.downloadButtons}>
              <a href="#" className={styles.downloadButton}>
                Android
              </a>
              <span className={styles.comingSoonButton}>Coming Soon</span>
            </div>
          </div>

          <button className={styles.ctaButton}>Découvrir nos offres</button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
