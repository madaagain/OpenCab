import React from "react";
import { Car, CalendarClock, TrendingUp, Shield } from "lucide-react";
import styles from "./Features.module.css";

const Features = () => {
  const features = [
    {
      icon: <Car size={32} color="#091717" />,
      title: "Courses centralisées",
      description:
        "Toutes vos plateformes VTC dans un seul dashboard. Fini de jongler entre applications.",
    },
    {
      icon: <CalendarClock size={32} color="#091717" />,
      title: "Comparaison temps réel",
      description:
        "Prix, temps d'attente et distance comparés instantanément pour chaque course disponible.",
    },
    {
      icon: <TrendingUp size={32} color="#091717" />,
      title: "Revenus optimisés",
      description:
        "Choisissez la course la plus rentable et maximisez vos gains à chaque trajet.",
    },
    {
      icon: <Shield size={32} color="#091717" />,
      title: "Sécurité garantie",
      description:
        "Vos données sont protégées et la synchronisation se fait en toute sécurité.",
    },
  ];

  return (
    <section id="features" className={styles.featuresSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Fonctionnalités</h2>
        <div className={styles.contentGrid}>
          {/* Left side - Features grid */}
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.iconContainer}>{feature.icon}</div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Right side - App screenshot */}
          <div className={styles.imageContainer}>
            <img
              src="/screen-1.png"
              alt="OpenCab Dashboard"
              className={styles.appImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
