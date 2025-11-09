import { useState, useEffect } from "react";
import logo from "../assets/tile-logo.svg";
import namelogo from "../assets/tile-schriftzug.svg";

export default function Header({ onNavigate, currentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 200; // Pixel-Bereich für den Übergang

      // Berechne Opazität: von 1 (oben) zu 0.5 (bei maxScroll)
      const opacity = Math.max(0.5, 1 - (scrollPosition / maxScroll) * 0.5);
      setScrollOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-500 ease-out backdrop-blur-md border-b border-gray-100/20"
      style={{
        backgroundColor: `rgba(15, 9, 55, ${scrollOpacity})`,
      }}
    >
      <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        {/* Logo + Name SVG */}
        <button
          onClick={() => handleClick("home")}
          className="flex items-center gap-3 hover:opacity-70 transition"
        >
          <img
            src={logo}
            alt="Tile.me Logo"
            className="w-12 h-12 sm:w-20 sm:h-20 "
          />
          <img src={namelogo} alt="Tile.me" className="h-8 sm:h-10" />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex gap-8">
          <button
            onClick={() => handleClick("home")}
            className={`text-sm font-medium transition ${
              currentPage === "home"
                ? "text-red-600 text-xl"
                : "text-white hover:text-red-600"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleClick("services")}
            className={`text-sm font-medium transition ${
              currentPage === "services"
                ? "text-red-600 text-xl"
                : "text-white hover:text-red-600"
            }`}
          >
            Services
          </button>
          <button
            onClick={() => handleClick("about")}
            className={`text-sm font-medium transition ${
              currentPage === "about"
                ? "text-red-600 text-xl"
                : "text-white hover:text-red-600"
            }`}
          >
            About
          </button>
          <button
            onClick={() => handleClick("contact")}
            className={`text-sm font-medium transition ${
              currentPage === "contact"
                ? "text-red-600 text-xl"
                : "text-white hover:text-red-600"
            }`}
          >
            Kontakt
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="sm:hidden text-2xl text-white"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => handleClick("home")}
              className="block w-full text-left text-sm font-medium text-gray-700 hover:text-black"
            >
              Home
            </button>
            <button
              onClick={() => handleClick("services")}
              className="block w-full text-left text-sm font-medium text-gray-700 hover:text-black"
            >
              Services
            </button>
            <button
              onClick={() => handleClick("about")}
              className="block w-full text-left text-sm font-medium text-gray-700 hover:text-black"
            >
              About
            </button>
            <button
              onClick={() => handleClick("contact")}
              className="block w-full text-left text-sm font-medium text-gray-700 hover:text-black"
            >
              Kontakt
            </button>
          </div>
        </div>
      )}
    </header>
  );
}