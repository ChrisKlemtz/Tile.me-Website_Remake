import { useState, useEffect } from "react";

export default function Services() {
  const [isVisible, setIsVisible] = useState({});
  const [hoveredService, setHoveredService] = useState(null);

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
      <section className="relative w-full min-h-screen flex items-center justify-center bg-linear-to-br from-[#0F0937] via-[#1a0d52] to-[#0F0937] overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#6D5FFF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div
            className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#a78bfa] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-[#0F0937] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: "4s" }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl w-full px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-tight mb-6">
              <span className="text-white">Was wir </span>
              <span className="bg-linear-to-r from-[#6D5FFF] to-[#a78bfa] bg-clip-text text-transparent">
                für dich tun
              </span>
            </h1>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto">
              Von der Strategie bis zur Umsetzung – wir bieten Full-Service-Lösungen für dein Business.
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 text-gray-300">
                <span className="text-sm">Scroll down</span>
                <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO TEXT */}
      <section className="bg-white py-16 sm:py-20">
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
            <div className="max-w-3xl mx-auto">
              <p className="text-2xl sm:text-3xl font-bold text-black leading-relaxed text-center">
                Wir denken nicht in Kategorien, sondern in Lösungen. Jedes Business ist unterschiedlich, 
                deshalb schneidern wir unsere Services auf deine Anforderungen zu. Ob du eine neue Website 
                brauchst, mehr Anfragen generieren möchtest oder technische Probleme zu lösen hast – wir haben 
                die richtige Antwort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div className={`relative h-full p-8 rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:border-[#0F0937] hover:shadow-2xl hover:shadow-[#0F0937]/10 transform ${hoveredService === idx ? "-translate-y-2" : ""}`}>
                  {/* Gradient accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${service.accent} rounded-t-xl`}></div>

                  {/* Icon */}
                  <div className={`text-5xl mb-4 transition-all duration-300 ${hoveredService === idx ? "scale-110 rotate-6" : ""}`}>
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 text-black group-hover:text-[#0F0937] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors mb-4">
                    {service.desc}
                  </p>

                  {/* Hover indicator */}
                  <div className="flex items-center gap-2 text-[#0F0937] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">Mehr erfahren</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="relative overflow-hidden bg-linear-to-b from-white via-white to-gray-50 py-20 sm:py-28">
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
            <div className="h-1 bg-linear-to-r from-[#0F0937] to-[#6D5FFF] mt-4 rounded w-full sm:w-96 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Verstehen", desc: "Wir lernen dein Business kennen, analysieren deine Ziele und Herausforderungen." },
              { step: "02", title: "Planen", desc: "Gemeinsam entwickeln wir eine Strategie, die funktioniert und wirtschaftlich sinnvoll ist." },
              { step: "03", title: "Umsetzen", desc: "Saubere Umsetzung. Schnell, professionell und ohne unnötige Umschweife." },
              { step: "04", title: "Erfolg", desc: "Messbare Ergebnisse. Du weißt genau, was deine Investition gebracht hat." },
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
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-r from-[#0F0937] to-[#6D5FFF]">
                      <span className="text-white font-bold text-xl">{item.step}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed grow">{item.desc}</p>
                  
                  {idx < 3 && (
                    <div className="hidden md:flex mt-6 text-2xl text-gray-300">→</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            <div className="h-1 bg-linear-to-r from-[#0F0937] to-[#6D5FFF] mt-4 rounded w-full sm:w-96 mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "Wie lange dauert eine typische Website-Entwicklung?", a: "Das hängt vom Umfang ab. Ein einfacher Webauftritt ist in 4-8 Wochen live, komplexere Lösungen 8-16 Wochen." },
              { q: "Kann ich meine bestehende Website anpassen lassen?", a: "Ja, absolut. Egal ob Relaunch, Optimierung oder kompletter Umbau – wir schaffen das." },
              { q: "Bietet ihr auch Support nach dem Launch?", a: "Ja, mit verschiedenen Support-Paketen. Von schnellen Bug-Fixes bis zu vollständiger Betreuung." },
              { q: "Was kostet die Zusammenarbeit?", a: "Jedes Projekt ist unterschiedlich. Wir erstellen ein transparentes Angebot nach deinen Anforderungen. Kostenlose Erstberatung." },
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
                <div className="p-6 rounded-lg border border-gray-200 hover:border-[#0F0937] hover:bg-gray-50 transition-all duration-300">
                  <h3 className="font-bold text-black mb-3 text-lg">{item.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        data-animate
        id="cta"
        className={`relative overflow-hidden transition-all duration-1000 ${
          isVisible.cta ? "opacity-100" : "opacity-90"
        }`}
      >
        <div className="absolute inset-0 bg-linear-to-r from-[#0F0937] to-[#1a0d52]"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6D5FFF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0F0937] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Bereit für die nächste Stufe?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Lass uns dich kennenlernen. Ein unverbindliches Gespräch über dein Projekt.
          </p>
          <button className="bg-white text-[#0F0937] px-8 py-3 rounded font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Kontakt aufnehmen
          </button>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

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

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}