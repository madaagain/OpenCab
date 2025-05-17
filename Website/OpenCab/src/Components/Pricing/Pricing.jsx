import React, { useState } from "react";
import { Check } from "lucide-react";
import styles from "./Pricing.module.css";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Solo",
      description:
        "Parfait pour les chauffeurs VTC indépendants qui veulent optimiser leurs revenus",
      price: 29.99,
      trial: "2 semaines gratuites à l'essai",
      features: [
        "Dashboard centralisé",
        "Comparaison temps réel des courses",
        "Synchronisation 3 plateformes VTC",
        "Notifications intelligentes",
        "Historique des courses",
        "Support par email",
      ],
      cta: "Commencer l'essai gratuit",
      popular: false,
    },
    {
      name: "Entreprise",
      description: "Idéal pour les flottes VTC avec plusieurs chauffeurs",
      price: "Sur mesure",
      priceNote: "En fonction du nombre de chauffeurs",
      features: [
        "Tout du plan Solo",
        "Gestion multi-chauffeurs",
        "Tableau de bord analytique",
        "Facturation centralisée",
        "API personnalisée",
        "Support prioritaire 24/7",
        "Gestionnaire de compte dédié",
        "Formation équipe incluse",
      ],
      cta: "Contacter les ventes",
      popular: true,
    },
  ];

  return (
    <section className={styles.pricingSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Tarifs simples et transparents</h2>
          <p className={styles.subtitle}>
            Choisissez le plan qui correspond à vos besoins. Commencez
            gratuitement.
          </p>

          {/* Toggle Pro/Enterprise buttons */}
        </div>

        <div className={styles.plansGrid}>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${styles.planCard} ${plan.popular ? styles.planCardPopular : ""}`}
            >
              <div className={styles.planHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDescription}>{plan.description}</p>

                <div className={styles.planPricing}>
                  {plan.price === "Sur mesure" ? (
                    <div className={styles.customPrice}>
                      <span className={styles.customPriceText}>Sur mesure</span>
                      <p className={styles.priceNote}>{plan.priceNote}</p>
                    </div>
                  ) : (
                    <>
                      <div className={styles.planPrice}>
                        <span className={styles.currency}>€</span>
                        <span className={styles.amount}>{plan.price}</span>
                        <span className={styles.period}>/mois</span>
                      </div>
                      {plan.trial && (
                        <p className={styles.trialNote}>{plan.trial}</p>
                      )}
                    </>
                  )}
                </div>
              </div>

              <ul className={styles.featuresList}>
                {plan.features.map((feature, featIndex) => (
                  <li key={featIndex} className={styles.featureItem}>
                    <Check size={20} className={styles.featureIcon} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`${styles.planButton} ${plan.popular ? styles.planButtonPopular : ""}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            Toutes les cartes acceptées. Changez ou annulez à tout moment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
