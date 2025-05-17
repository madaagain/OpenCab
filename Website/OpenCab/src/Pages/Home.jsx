import React from "react";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Features from "../Components/Features/Features";
import Mission from "../Components/Mission/Mission";
import Enterprise from "../Components/Entreprise/Entreprise";
import CTA from "../Components/CTA/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Mission />
      <Enterprise />
      <CTA />
    </>
  );
};

export default Home;
