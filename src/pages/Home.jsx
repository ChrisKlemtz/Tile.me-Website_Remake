import { useState, useEffect } from "react";

export default function Home({ onNavigate }) {
  const [isVisible, setIsVisible] = useState({ hero: true });

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
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="../src/assets/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Fade to Black Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-b from-transparent to-black z-5 pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl w-full px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-start pt-42 h-full">
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-tight mb-6">
              <span className="text-white">Maßgeschneiderte </span>
              <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                Online-Lösungen
              </span>
            </h1>
          </div>

          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-lg sm:text-xl text-gray-100 mb-8 leading-relaxed max-w-2xl">
              Wir entwickeln moderne Websites, optimieren deine Online-Präsenz
              und bringen dein Business vorwärts. Echte Webentwicklung, keine
              Templates.
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <button
              onClick={() => onNavigate("services")}
              className="group bg-white text-gray-900 px-8 py-3 rounded font-medium hover:shadow-lg hover:shadow-white/30 transition-all duration-300 transform hover:scale-105"
            >
              <span className="inline-flex items-center gap-2">
                Services ansehen
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </span>
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="group bg-white text-gray-900 px-8 py-3 rounded font-medium hover:shadow-lg hover:shadow-white/30 transition-all duration-300 transform hover:scale-105"
            >
              Kontakt aufnehmen
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="text-white text-sm mb-2">Scroll</div>
          <svg
            className="w-6 h-6 text-white animate-pulse"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* ABOUT TEASER SECTION */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div
              data-animate
              id="about-teaser"
              className={`transition-all duration-1000 ${
                isVisible["about-teaser"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="mb-6">
                <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
                  Wer ist Tile?
                </h2>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Seit 2008 entwickeln wir Websites und optimieren
                Online-Präsenzen. Wir sind Entwickler, Marketing-Experten und
                Berater – mit dem klaren Fokus auf echte Ergebnisse und
                Lösungen.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                Unser Ansatz: Echte Webentwicklung, die versteht wie dein
                Business funktioniert. Mit Leidenschaft für Details, Effizienz
                und lösungsorientiertes Arbeiten.
              </p>

              <button
                onClick={() => onNavigate("about")}
                className="group bg-gray-900 text-white px-8 py-3 rounded font-medium hover:shadow-lg hover:shadow-gray-900/30 transition-all duration-300 transform hover:scale-105"
              >
                <span className="inline-flex items-center gap-2">
                  Mehr über uns
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </button>
            </div>

            {/* Image Container */}
            <div
              data-animate
              id="about-image"
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible["about-image"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-gray-900 to-indigo-600 rounded-lg opacity-10 z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-indigo-600 to-gray-900 rounded-lg opacity-10 z-0"></div>

              <div className="relative z-10">
                {/* Image */}
                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src="../src/assets/tilefoto.jpg"
                    alt="Tile Gabloffsky"
                    className="w-full h-auto object-cover rounded-lg transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Name Badge */}
                <div className="flex justify-center -translate-y-1/2 relative z-20">
                  <div className="bg-gradient-to-r from-gray-900 to-indigo-600 text-white px-8 py-3 rounded-lg font-bold shadow-xl whitespace-nowrap">
                    Tile Gabloffsky
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="bg-gradient-to-r from-transparent via-gray-900 to-transparent h-px"></div>

      {/* SERVICES SECTION */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            data-animate
            id="services-title"
            className={`transition-all duration-1000 mb-16 ${
              isVisible["services-title"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-black text-center">
              Wie können wir helfen?
            </h2>
            <div className="h-1 bg-gradient-to-r from-gray-900 to-indigo-600 mt-2 rounded w-full sm:w-96 md:w-2xl mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                title: "Webentwicklung",
                desc: "Echte, individuelle Webentwicklung. Keine Templates, keine 1000 Plugins – nur sauberer Code und Funktion.",
              },
              {
                title: "Marketing & SEO",
                desc: "Deine Website bringt keine Anfragen? Wir erhöhen Sichtbarkeit, optimieren Rankings und generieren echte Leads.",
              },
              {
                title: "Beratung",
                desc: "Von der Strategie bis zur Umsetzung. Wir verstehen dein Business und finden die richtige Lösung.",
              },
              {
                title: "Support & Security",
                desc: "Probleme? Optimierungsbedarf? Von Bug-Fixes bis zur IT-Security – wir sind da wenn es klemmt.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                data-animate
                id={`service-${idx}`}
                className={`group cursor-pointer transition-all duration-1000 ${
                  isVisible[`service-${idx}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="p-8 rounded-lg border border-gray-200 hover:border-gray-900 hover:shadow-xl hover:shadow-gray-900/10 transition-all duration-300 h-full transform hover:-translate-y-2">
                  <div className="h-1 w-12 bg-gradient-to-r from-gray-900 to-indigo-600 mb-6 rounded group-hover:w-full transition-all duration-500"></div>
                  <h3 className="text-2xl font-bold mb-3 text-black group-hover:text-gray-900 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section 
        className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-indigo-800" 
        data-animate 
        id="cta"
      >
        {/* Pattern Layer - zwischen Hintergrund und Content */}
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: 'url("../src/assets/techpattern.svg")',
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto'
          }}
        ></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div
          className={`relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center transition-all duration-1000 ${
            isVisible.cta
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Alles wird gut
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Wir sind Profis. Fragen kostet nichts und bleibt unverbindlich.
          </p>
          <button
            onClick={() => onNavigate("contact")}
            className="bg-white text-gray-900 px-8 py-3 rounded font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Kontakt aufnehmen
          </button>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
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