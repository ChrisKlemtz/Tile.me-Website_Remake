import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Impressum from "./pages/Impressum";
import Privacy from "./pages/Privacy";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header onNavigate={navigateTo} currentPage={currentPage} />

      <main className="flex-grow">
        {currentPage === "home" && <Home onNavigate={navigateTo} />}
        {currentPage === "services" && <Services onNavigate={navigateTo} />}
        {currentPage === "about" && <About onNavigate={navigateTo} />}
        {currentPage === "contact" && <Contact onNavigate={navigateTo} />}
        {currentPage === "impressum" && <Impressum />}
        {currentPage === "privacy" && <Privacy />}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}
