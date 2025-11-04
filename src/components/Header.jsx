import { useState } from "react";
import logo from "../assets/tile-logo.svg";
import namelogo from "../assets/tile-schriftzug.svg";

export default function Header({ onNavigate }) {
  const [active, setActive] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = (page) => {
    setActive(page);
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="border-b border-gray-100 bg-linear-to-r bg-[#0F0937] to-[#000002] sticky top-0 z-50">
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
              active === "home"
                ? "text-red-600 text-xl"
                : "text-white hover:text-red-600"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleClick("services")}
            className={`text-sm font-medium transition ${
              active === "services"
                ? "text-red-600 text-xl"
                : "text-white hover:text-red-600"
            }`}
          >
            Services
          </button>
          <button
            onClick={() => handleClick("about")}
            className={`text-sm font-medium transition ${
              active === "about"
                ? "text-red-600 text-xl"
                : "text-white hover:text-red-600"
            }`}
          >
            About
          </button>
          <button
            onClick={() => handleClick("contact")}
            className={`text-sm font-medium transition ${
              active === "contact"
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