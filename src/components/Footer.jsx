import { useState, useEffect } from "react";

export default function Footer({ onNavigate }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const footer = document.getElementById("footer");
    if (footer) {
      observer.observe(footer);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      id="footer"
      className={`relative bg-linear-to-r from-[#0F0937] to-[#000002] transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-90"
      }`}
    >
      {/* Decorative top border */}
      <div className="h-1 bg-linear-to-r from-[#6D5FFF] via-[#a78bfa] to-[#6D5FFF]"></div>

      {/* Main content */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
          {/* Logo / Brand */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <h3 className="text-xl sm:text-2xl font-bold bg-linear-to-r from-[#6D5FFF] to-[#a78bfa] bg-clip-text text-transparent">
              Tile
            </h3>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-12 bg-linear-to-b from-transparent via-[#6D5FFF]/30 to-transparent"></div>

          {/* Copyright */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <p className="text-sm text-gray-300 text-center">
              © 2024 Tile – Alle Rechte vorbehalten.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-12 bg-linear-to-b from-transparent via-[#6D5FFF]/30 to-transparent"></div>

          {/* Links */}
          <div
            className={`flex items-center gap-6 sm:gap-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <button
              onClick={() => onNavigate("impressum")}
              className="text-sm text-gray-300 hover:text-white transition-colors duration-300 group"
            >
              <span className="relative">
                Impressum
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-[#6D5FFF] to-[#a78bfa] group-hover:w-full transition-all duration-300"></span>
              </span>
            </button>

            <div className="hidden sm:block w-px h-4 bg-gray-600/30"></div>

            <button
              onClick={() => onNavigate("datenschutz")}
              className="text-sm text-gray-300 hover:text-white transition-colors duration-300 group"
            >
              <span className="relative">
                Datenschutz
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-[#6D5FFF] to-[#a78bfa] group-hover:w-full transition-all duration-300"></span>
              </span>
            </button>

            <div className="hidden sm:block w-px h-4 bg-gray-600/30"></div>

            <button
              onClick={() => onNavigate("contact")}
              className="text-sm text-gray-300 hover:text-white transition-colors duration-300 group"
            >
              <span className="relative">
                Kontakt
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-[#6D5FFF] to-[#a78bfa] group-hover:w-full transition-all duration-300"></span>
              </span>
            </button>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="mt-12 pt-8 border-t border-gray-700/50 flex items-center justify-center">
          <div
            className={`text-xs text-gray-400 transition-all duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            Echte Webentwicklung. Keine Kompromisse.
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </footer>
  );
}