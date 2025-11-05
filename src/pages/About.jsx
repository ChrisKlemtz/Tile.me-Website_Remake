import { useState, useEffect } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState({});

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

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative bg-linear-to-br from-gray-900 via-gray-800 to-indigo-900 overflow-hidden">
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
              Über uns
            </h1>
            <div className="h-1 bg-linear-to-r from-white to-indigo-400 rounded w-32 mb-8"></div>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl leading-relaxed">
              Echte Webentwicklung seit 2008. Keine Templates, keine leeren Versprechen – nur Lösungen, die funktionieren.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE SECTION */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div
              data-animate
              id="who-we-are"
              className={`transition-all duration-1000 ${
                isVisible["who-we-are"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
                Wer wir sind
              </h2>
              <div className="h-1 bg-linear-to-r from-gray-900 to-indigo-600 rounded w-24 mb-8"></div>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Seit 2008 entwickeln wir Websites und optimieren Online-Präsenzen. 
                Wir sind Developer, Marketing-Experten und Strategen – mit dem klaren 
                Fokus auf echte Ergebnisse.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Unsere Expertise liegt in der Verbindung von technischer Exzellenz 
                und strategischem Denken. Wir verstehen Code genauso wie Business-Anforderungen.
              </p>
            </div>

            {/* Visual Element */}
            <div
              data-animate
              id="who-visual"
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible["who-visual"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-full h-full border-2 border-gray-900 rounded-lg"></div>
                <div className="relative bg-linear-to-br from-gray-900 to-indigo-800 p-12 rounded-lg shadow-2xl">
                  <div className="text-white space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl font-bold text-gray-900">
                        15+
                      </div>
                      <span className="text-lg">Jahre Erfahrung</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl font-bold text-gray-900">
                        ∞
                      </div>
                      <span className="text-lg">Projekte realisiert</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl font-bold text-gray-900">
                        100%
                      </div>
                      <span className="text-lg">Leidenschaft</span>
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

      {/* OUR APPROACH SECTION */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            data-animate
            id="approach-title"
            className={`transition-all duration-1000 mb-16 text-center ${
              isVisible["approach-title"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
              Unser Ansatz
            </h2>
            <div className="h-1 bg-linear-to-r from-gray-900 to-indigo-600 rounded w-32 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keine Template-Websites. Keine 1000 Plugins. Keine versteckten Kosten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Echte Entwicklung",
                desc: "Sauberer Code, maßgeschneiderte Lösungen. Wir entwickeln von Grund auf, nicht aus dem Baukasten.",
              },
              {
                icon: "🎯",
                title: "Business-Fokus",
                desc: "Wir verstehen wie dein Business funktioniert und entwickeln Lösungen, die echte Ergebnisse bringen.",
              },
              {
                icon: "🚀",
                title: "Performance",
                desc: "Schnell, sicher, skalierbar. Unsere Websites sind optimiert für Geschwindigkeit und Conversion.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                data-animate
                id={`approach-${idx}`}
                className={`transition-all duration-1000 ${
                  isVisible[`approach-${idx}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="group p-8 rounded-lg border border-gray-200 hover:border-gray-900 hover:shadow-xl hover:shadow-gray-900/10 transition-all duration-300 h-full transform hover:-translate-y-2">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-black">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="bg-linear-to-r from-transparent via-gray-900 to-transparent h-px"></div>

      {/* TEAM & NETWORK SECTION */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Visual Element */}
            <div
              data-animate
              id="network-visual"
              className={`relative transition-all duration-1000 order-2 lg:order-1 ${
                isVisible["network-visual"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="relative">
                {/* Connection Lines Visualization */}
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((item, idx) => (
                    <div
                      key={item}
                      className="aspect-square bg-linear-to-br from-gray-900 to-indigo-800 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                      style={{
                        animationDelay: `${idx * 100}ms`,
                        animation: "fadeInScale 0.8s ease-out forwards",
                        opacity: 0,
                      }}
                    >
                      <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
                        {["🎨", "💻", "📊", "🔧", "🎯", "⚡"][idx]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div
              data-animate
              id="network-text"
              className={`transition-all duration-1000 delay-300 order-1 lg:order-2 ${
                isVisible["network-text"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
                Team & Netzwerk
              </h2>
              <div className="h-1 bg-linear-to-r from-gray-900 to-indigo-600 rounded w-24 mb-8"></div>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Wir arbeiten mit erfahrenen Profis zusammen: Designer, Developer, 
                Marketing-Spezialisten und weitere Dienstleister.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Dieses Netzwerk ermöglicht es uns, Projekte jeder Größe zu realisieren – 
                von der kleinen Business-Website bis zur komplexen Web-Anwendung.
              </p>

              <div className="space-y-4">
                {[
                  "Full-Stack Development",
                  "UI/UX Design",
                  "Marketing & SEO",
                  "Copywriting & Content",
                  "IT-Security & Hosting",
                ].map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 animate-fade-in-up"
                    style={{ animationDelay: `${idx * 100 + 500}ms` }}
                  >
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative overflow-hidden bg-linear-to-r from-gray-900 to-indigo-800">
        {/* Pattern Layer */}
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto'
          }}
        ></div>

        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div
          data-animate
          id="cta"
          className={`relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center transition-all duration-1000 ${
            isVisible.cta
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Lass uns sprechen
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Du hast ein Projekt im Kopf? Wir hören zu, beraten ehrlich und finden gemeinsam die beste Lösung.
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
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

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
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
    </div>
  );
}