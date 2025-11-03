import { useState } from "react";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="border-t border-gray-100 bg-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          © 2024 Tile.me - All rights reserved.
        </p>

        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded hover:border-black transition"
            aria-label="Menu"
          >
            <span className="text-lg font-light">☰</span>
          </button>

          {isOpen && (
            <div className="absolute bottom-full right-0 mb-2 bg-white border border-gray-200 rounded shadow-xl z-50 min-w-48">
              <a
                href="#"
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition border-b border-gray-100"
              >
                Impressum
              </a>
              <a
                href="#"
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition border-b border-gray-100"
              >
                Datenschutz
              </a>
              <a
                href="#"
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition"
              >
                Kontakt
              </a>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
