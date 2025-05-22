import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/Home";
import PricingPage from "./Pages/Pricing";
import RegisterPage from "./Pages/Register";

// Composant pour gérer le scroll automatique
function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    // Attendre que la page soit complètement chargée
    const handleScroll = () => {
      const hash = location.hash;
      if (hash && hash.length > 1) {
        const elementId = hash.substring(1);
        const element = document.getElementById(elementId);

        if (element) {
          // Timeout plus long pour s'assurer que la page est entièrement rendue
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 300);
        }
      } else if (location.pathname === "/") {
        // Si pas de hash et qu'on arrive sur la page d'accueil, scroll vers le haut
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
      }
    };

    // Exécuter immédiatement
    handleScroll();

    // Et aussi après que la page soit chargée (au cas où les composants prendraient du temps à se monter)
    const timer = setTimeout(handleScroll, 500);

    return () => clearTimeout(timer);
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <Layout>
        <ScrollToHashElement />
        <div className="app-content">
          <main className="main">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Layout>
    </Router>
  );
}

export default App;
