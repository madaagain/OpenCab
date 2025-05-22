import React, { useState } from "react";
import { Check } from "lucide-react";
import styles from "./Register.module.css";

const Pricing = () => {
  return (
    <section className={styles.registerSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>S'inscrire à notre beta privé</h2>
          <p className={styles.subtitle}>
            Soyez parmis les premiers à découvrir notre application et à
            bénéficier de nos fonctionnalités exclusives ainsi que d'une réduction
            de 50% sur votre abonnement pendant 6 mois.
          </p>
        </div>

        <div className={styles.regisrationForm}>

        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            En vous inscrivant, vous acceptez nos{" "}
            <a href="/terms" className={styles.link}>
              conditions d'utilisation
            </a>{" "}
            et notre{" "}
            <a href="/privacy" className={styles.link}>
              politique de confidentialité
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
