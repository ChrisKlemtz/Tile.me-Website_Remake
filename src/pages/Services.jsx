import { useState, useEffect } from "react";
import techPattern from "../assets/techpattern.svg";

export default function Services({ onNavigate }) {
  const [isVisible, setIsVisible] = useState({});
  const [hoveredService, setHoveredService] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Back to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      title: "Webauftritt",
      desc: "Neue Website oder Relaunch – wir entwickeln Lösungen, die funktionieren und aussehen.",
      icon: "🌐",
      accent: "from-blue-600 to-blue-400",
    },
    {
      title: "Anfragen generieren",
      desc: "Website steht? Kampagnen laufen? Aber keine Anfragen? Wir finden heraus warum und optimieren.",
      icon: "📋",
      accent: "from-purple-600 to-purple-400",
    },
    {
      title: "Sichtbarkeit",
      desc: "Ohne Nutzer keine Kunden. Wir erhöhen deine Reichweite durch SEO, SEA und strategisches Marketing.",
      icon: "🚀",
      accent: "from-amber-600 to-amber-400",
    },
    {
      title: "Verkäufe & Conversion",
      desc: "Du möchtest verkaufen – aber es rührt sich nichts? Wir analysieren und optimieren deine Funnels.",
      icon: "💰",
      accent: "from-green-600 to-green-400",
    },
    {
      title: "Technik & Sicherheit",
      desc: "Bug-Fixes, Performance-Optimierung, IT-Security – wenn es irgendwo klemmt, sind wir die Feuerwehr.",
      icon: "🔒",
      accent: "from-red-600 to-red-400",
    },
    {
      title: "Compliance & DSGVO",
      desc: "Cookie-Bar, externe Ressourcen, rechtliche Anforderungen – wir bringen dich in die Spur.",
      icon: "⚖️",
      accent: "from-cyan-600 to-cyan-400",
    },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative bg-linear-to-br from-slate-950 to-indigo-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Was wir für dich tun
            </h1>
            <div className="h-1 bg-linear-to-r from-white to-indigo-400 rounded w-32 mb-8"></div>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl leading-relaxed">
              Von der Strategie bis zur Umsetzung – Full-Service-Lösungen für
              dein Business.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO TEXT - MODERNISIERT */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            data-animate
            id="intro-text"
            className={`transition-all duration-1000 ${
              isVisible["intro-text"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left: Text Content */}
                <div>
                  <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6 leading-tight">
                    Denken in Lösungen, nicht in Kategorien
                  </h2>
                  <div className="h-1 bg-linear-to-r from-gray-900 to-indigo-600 rounded w-24 mb-6"></div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Jedes Business ist unterschiedlich. Deshalb schneidern wir
                    unsere Services auf deine Anforderungen zu – nicht
                    umgekehrt.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Egal ob neue Website, mehr Anfragen oder technische Probleme
                    – wir haben die richtige Antwort. Und vor allem: wir finden
                    raus, was du wirklich brauchst.
                  </p>
                </div>

                {/* Right: Visual Stats */}
                <div
                  data-animate
                  id="intro-visual"
                  className={`transition-all duration-1000 delay-300 ${
                    isVisible["intro-visual"]
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                  }`}
                >
                  <div className="relative">
                    <div className="absolute -top-6 -right-6 w-full h-full border-2 border-gray-900 rounded-lg"></div>
                    <div className="relative bg-linear-to-br from-gray-900 to-indigo-800 p-12 rounded-lg shadow-2xl">
                      <div className="text-white space-y-8">
                        <div>
                          <div className="text-4xl font-bold bg-linear-to-r from-indigo-300 to-blue-300 bg-clip-text text-transparent mb-2">
                            6 Services
                          </div>
                          <p className="text-gray-300 text-sm">
                            für jeden Bedarf
                          </p>
                        </div>
                        <div>
                          <div className="text-4xl font-bold bg-linear-to-r from-indigo-300 to-blue-300 bg-clip-text text-transparent mb-2">
                            1 Partner
                          </div>
                          <p className="text-gray-300 text-sm">
                            für alle Fragen
                          </p>
                        </div>
                        <div>
                          <div className="text-4xl font-bold bg-linear-to-r from-indigo-300 to-blue-300 bg-clip-text text-transparent mb-2">
                            ∞ Möglichkeiten
                          </div>
                          <p className="text-gray-300 text-sm">
                            maßgeschneidert
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="bg-linear-to-r from-transparent via-gray-900 to-transparent h-px"></div>

      {/* SERVICES GRID */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            data-animate
            id="services-title"
            className={`transition-all duration-1000 mb-16 text-center ${
              isVisible["services-title"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
              Unsere Leistungen
            </h2>
            <div className="h-1 bg-linear-to-r from-gray-900 to-indigo-600 rounded w-32 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                data-animate
                id={`service-${idx}`}
                className={`group cursor-pointer transition-all duration-1000 ${
                  isVisible[`service-${idx}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
                onMouseEnter={() => setHoveredService(idx)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div
                  className={`relative h-full p-8 rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:border-gray-900 hover:shadow-xl hover:shadow-gray-900/10 transform ${
                    hoveredService === idx ? "-translate-y-2" : ""
                  }`}
                >
                  {/* Gradient accent line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${service.accent} rounded-t-lg`}
                  ></div>

                  {/* Icon */}
                  <div
                    className={`text-5xl mb-4 transition-all duration-300 ${
                      hoveredService === idx ? "scale-110 rotate-6" : ""
                    }`}
                  >
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 text-black transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors mb-4">
                    {service.desc}
                  </p>

                  {/* Hover indicator */}
                  <div className="flex items-center gap-2 text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">Mehr erfahren</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="bg-linear-to-r from-transparent via-gray-900 to-transparent h-px"></div>

      {/* PROCESS SECTION */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            data-animate
            id="process-title"
            className={`transition-all duration-1000 text-center mb-16 ${
              isVisible["process-title"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
              So arbeiten wir
            </h2>
            <div className="h-1 bg-linear-to-r from-gray-900 to-indigo-600 rounded w-32 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Verstehen",
                desc: "Wir lernen dein Business kennen, analysieren deine Ziele und Herausforderungen.",
              },
              {
                step: "02",
                title: "Planen",
                desc: "Gemeinsam entwickeln wir eine Strategie, die funktioniert und wirtschaftlich sinnvoll ist.",
              },
              {
                step: "03",
                title: "Umsetzen",
                desc: "Saubere Umsetzung. Schnell, professionell und ohne unnötige Umschweife.",
              },
              {
                step: "04",
                title: "Erfolg",
                desc: "Messbare Ergebnisse. Du weißt genau, was deine Investition gebracht hat.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                data-animate
                id={`process-${idx}`}
                className={`transition-all duration-1000 ${
                  isVisible[`process-${idx}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-r from-gray-900 to-indigo-600">
                      <span className="text-white font-bold text-xl">
                        {item.step}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed grow">
                    {item.desc}
                  </p>

                  {idx < 3 && (
                    <div className="hidden md:flex mt-6 text-2xl text-gray-300">
                      →
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="bg-linear-to-r from-transparent via-gray-900 to-transparent h-px"></div>

      {/* FAQ SECTION */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            data-animate
            id="faq-title"
            className={`transition-all duration-1000 text-center mb-16 ${
              isVisible["faq-title"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
              Häufig gefragt
            </h2>
            <div className="h-1 bg-linear-to-r from-gray-900 to-indigo-600 rounded w-32 mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Wie lange dauert eine typische Website-Entwicklung?",
                a: "Das hängt vom Umfang ab. Ein einfacher Webauftritt ist in 4-8 Wochen live, komplexere Lösungen 8-16 Wochen.",
              },
              {
                q: "Kann ich meine bestehende Website anpassen lassen?",
                a: "Ja, absolut. Egal ob Relaunch, Optimierung oder kompletter Umbau – wir schaffen das.",
              },
              {
                q: "Bietet ihr auch Support nach dem Launch?",
                a: "Ja, mit verschiedenen Support-Paketen. Von schnellen Bug-Fixes bis zu vollständiger Betreuung.",
              },
              {
                q: "Was kostet die Zusammenarbeit?",
                a: "Jedes Projekt ist unterschiedlich. Wir erstellen ein transparentes Angebot nach deinen Anforderungen. Kostenlose Erstberatung.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                data-animate
                id={`faq-${idx}`}
                className={`transition-all duration-1000 ${
                  isVisible[`faq-${idx}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="p-6 rounded-lg border border-gray-200 hover:border-gray-900 hover:bg-gray-50 transition-all duration-300">
                  <h3 className="font-bold text-black mb-3 text-lg">
                    {item.q}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative bg-linear-to-r from-gray-900 to-indigo-800 overflow-hidden">
        {/* Pattern Layer - zwischen Hintergrund und Content */}
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: `url("${techPattern}")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '150px 150px',
            opacity: 0.3,
            mixBlendMode: 'screen'
          }}
        ></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div
          data-animate
          id="cta"
          className={`relative z-20 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center transition-all duration-1000 ${
            isVisible.cta
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Lass uns sprechen
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Du hast ein Projekt im Kopf? Wir hören zu, beraten ehrlich und
            finden gemeinsam die beste Lösung.
          </p>
          <button onClick={() => onNavigate("contact")} className="bg-white text-gray-900 px-8 py-3 rounded font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Kontakt aufnehmen
          </button>
        </div>
      </section>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
      `}</style>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 bg-gray-900/80 hover:bg-gray-900 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 backdrop-blur-sm ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Zurück nach oben"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
}
