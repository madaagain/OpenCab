import React from "react";
import Pricing from "../Components/Pricing/Pricing";
import styles from "./PricingPage.module.css";

const PricingPage = () => {
  return (
    <div className={styles.pricingPage}>
      <Pricing />
    </div>
  );
};

export default PricingPage;
