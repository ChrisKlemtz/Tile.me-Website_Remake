import { useState, useEffect, useRef } from "react";
import globalIcon from "../assets/icons/global-svgrepo-com.svg";
import callChatIcon from "../assets/icons/call-chat-rounded-svgrepo-com.svg";
import eyeIcon from "../assets/icons/eye-svgrepo-com.svg";
import diagramUpIcon from "../assets/icons/diagram-up-svgrepo-com.svg";
import donutIcon from "../assets/icons/donut-bitten-svgrepo-com.svg";
import cpuBoltIcon from "../assets/icons/cpu-bolt-svgrepo-com.svg";
import shieldNetworkIcon from "../assets/icons/shield-network-svgrepo-com.svg";
import accessibilityIcon from "../assets/icons/accessibility-svgrepo-com.svg";
import heroVideo from "../assets/hero-video.mp4";
import techPattern from "../assets/techpattern.svg";

export default function Home({ onNavigate }) {
  const [isVisible, setIsVisible] = useState({ hero: true });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);

  const inquiryCards = [
    {
      title: "Webauftritt",
      icon: globalIcon,
      description: "Eine neue Website entwickeln lassen, ein bestehendes Projekt optimieren: Sehr gerne. Fragen Sie einfach an und wir finden einen Weg.",
      prefilledText: "Ich möchte einen Webauftritt erstellen oder überdenken. Dabei benötige ich Unterstützung."
    },
    {
      title: "Anfragen",
      icon: callChatIcon,
      description: "Website steht; Kampagnen auch. Aber die Anfragen lassen zu wünschen übrig. Wir finden gemeinsam heraus, warum das so ist - und optimieren.",
      prefilledText: "Ich habe zu wenig Anfragen, bezahle zu viel für diese oder möchte analytischer an die Sache herangehen. Hilfe!"
    },
    {
      title: "Sichtbarkeit",
      icon: eyeIcon,
      description: "Wo keine Nutzer, da keine potenziellen Kunden: In puncto Reichweite führen viele Wege nach Rom. Ich zeige sie Ihnen.",
      prefilledText: "Mein Unternehmen/Meine Website hat zu wenig Sichtbarkeit im Web. Hilfe!"
    },
    {
      title: "Verkäufe",
      icon: diagramUpIcon,
      description: "Sie möchten ein Produkt oder eine Dienstleistung verkaufen - aber es rührt sich nichts oder zu wenig. Das können wir ändern.",
      prefilledText: "Meine Website soll Produkte verkaufen. Tut sie nicht. Hilfe!"
    },
    {
      title: "DSGVO/Cookies",
      icon: donutIcon,
      description: "Funktioniert die Cookie-Bar? Welche externen Ressourcen werden geladen? Welche Cookies gibt es überhaupt? Ich helfe gerne weiter.",
      prefilledText: "Die Cookies oder Tracking-Tools auf meiner Website machen nicht das, was sie eigentlich sollen."
    },
    {
      title: "Technik",
      icon: cpuBoltIcon,
      description: "Wenn nichts mehr geht, ist guter Rat - hier. Ich finde gerne heraus, welche Probleme Ihre Website hat und bringe sie wieder zum Laufen.",
      prefilledText: "Irgendwas stimmt mit der Technik nicht. Fehlermeldungen, Malware-Warnungen und Co. Hilfe!"
    },
    {
      title: "IT-Security",
      icon: shieldNetworkIcon,
      description: "Websites brauchen Schutz vor allerhand Gefahren, damit sie zuverlässig laufen und nicht zweckentfremdet können. Ich berate Sie diesbezüglich gerne.",
      prefilledText: "Der Sicherheitsbeauftragte meckert oder irgendwas zeigt irgendwo Warnmeldungen."
    },
    {
      title: "Barrierefreiheit",
      icon: accessibilityIcon,
      description: "Insbesondere Websites der älteren Generation haben Schwächen in der Barrierefreiheit. Das ist meist aber nicht dramatisch und lässt sich problemlos ändern.",
      prefilledText: "Unsere Website ist nicht barrierefrei und wir müssten das ändern."
    }
  ];

  const handlePrevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  };

  const handleNextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  };

  // Handle infinite loop logic
  useEffect(() => {
    if (!carouselRef.current) return;

    const handleTransitionEnd = () => {
      setIsTransitioning(false);

      // Reset position for infinite loop
      if (currentSlide >= inquiryCards.length) {
        carouselRef.current.style.transition = 'none';
        setCurrentSlide(0);
        setTimeout(() => {
          if (carouselRef.current) {
            carouselRef.current.style.transition = 'transform 500ms ease-in-out';
          }
        }, 50);
      } else if (currentSlide < 0) {
        carouselRef.current.style.transition = 'none';
        setCurrentSlide(inquiryCards.length - 1);
        setTimeout(() => {
          if (carouselRef.current) {
            carouselRef.current.style.transition = 'transform 500ms ease-in-out';
          }
        }, 50);
      }
    };

    const carousel = carouselRef.current;
    carousel.addEventListener('transitionend', handleTransitionEnd);

    return () => {
      carousel.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [currentSlide, inquiryCards.length]);

  const handleCardClick = (prefilledText) => {
    // Store prefilled text in sessionStorage to use in Contact form
    sessionStorage.setItem('contactMessage', prefilledText);
    onNavigate('contact');
  };

  // Check window size for responsive carousel
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black -mt-[88px] pt-[88px]">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Fade to Black Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-b from-transparent to-black z-5 pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl w-full px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-start pt-42 h-full">
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-tight mb-6">
              <span className="text-white">Maßgeschneiderte </span>
              <span className="bg-linear-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
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
            <div className="h-1 bg-linear-to-r from-gray-900 to-indigo-600 mt-2 rounded w-full sm:w-96 md:w-2xl mx-auto"></div>
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
                  <div className="h-1 w-12 bg-linear-to-r from-gray-900 to-indigo-600 mb-6 rounded group-hover:w-full transition-all duration-500"></div>
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

      {/* DIVIDER */}
      <div className="bg-linear-to-r from-transparent via-gray-900 to-transparent h-px"></div>

      {/* INQUIRY SLIDESHOW SECTION */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            data-animate
            id="inquiry-title"
            className={`transition-all duration-1000 mb-16 ${
              isVisible["inquiry-title"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-black text-center mb-4">
              Schnellanfragen
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Wählen Sie Ihr Anliegen aus und kontaktieren Sie uns direkt
            </p>
            <div className="h-1 bg-linear-to-r from-gray-900 to-indigo-600 mt-4 rounded w-full sm:w-96 mx-auto"></div>
          </div>

          {/* Slideshow Container */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={handlePrevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 z-10 bg-white hover:bg-gray-900 text-gray-900 hover:text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 group"
              aria-label="Vorherige Karte"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={handleNextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 z-10 bg-white hover:bg-gray-900 text-gray-900 hover:text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 group"
              aria-label="Nächste Karte"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Cards Container */}
            <div className="overflow-hidden">
              <div
                ref={carouselRef}
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * (isMobile ? 100 : 100 / 3)}%)`,
                }}
              >
                {/* Duplicate last card at the beginning for seamless loop */}
                <div className="w-full flex-shrink-0 px-4 md:w-1/3">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-8 h-full flex flex-col hover:border-gray-900 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="h-1 w-16 bg-linear-to-r from-gray-900 to-indigo-600 rounded mb-6"></div>
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={inquiryCards[inquiryCards.length - 1].icon}
                        alt={inquiryCards[inquiryCards.length - 1].title}
                        className="w-12 h-12"
                      />
                      <h3 className="text-2xl font-bold text-black">
                        {inquiryCards[inquiryCards.length - 1].title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                      {inquiryCards[inquiryCards.length - 1].description}
                    </p>
                    <button
                      onClick={() => handleCardClick(inquiryCards[inquiryCards.length - 1].prefilledText)}
                      className="group bg-gray-900 text-white px-6 py-3 rounded font-medium hover:shadow-lg hover:shadow-gray-900/30 transition-all duration-300 transform hover:scale-105 w-full"
                    >
                      <span className="inline-flex items-center justify-center gap-2">
                        Jetzt anfragen
                        <span className="group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </span>
                    </button>
                  </div>
                </div>

                {/* Original cards */}
                {inquiryCards.map((card, idx) => (
                  <div
                    key={idx}
                    className="w-full flex-shrink-0 px-4 md:w-1/3"
                  >
                    <div className="bg-white border-2 border-gray-200 rounded-xl p-8 h-full flex flex-col hover:border-gray-900 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="h-1 w-16 bg-linear-to-r from-gray-900 to-indigo-600 rounded mb-6"></div>
                      <div className="flex items-center gap-3 mb-4">
                        <img
                          src={card.icon}
                          alt={card.title}
                          className="w-12 h-12"
                        />
                        <h3 className="text-2xl font-bold text-black">
                          {card.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                        {card.description}
                      </p>
                      <button
                        onClick={() => handleCardClick(card.prefilledText)}
                        className="group bg-gray-900 text-white px-6 py-3 rounded font-medium hover:shadow-lg hover:shadow-gray-900/30 transition-all duration-300 transform hover:scale-105 w-full"
                      >
                        <span className="inline-flex items-center justify-center gap-2">
                          Jetzt anfragen
                          <span className="group-hover:translate-x-1 transition-transform">
                            →
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>
                ))}

                {/* Duplicate first card at the end for seamless loop */}
                <div className="w-full flex-shrink-0 px-4 md:w-1/3">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-8 h-full flex flex-col hover:border-gray-900 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="h-1 w-16 bg-linear-to-r from-gray-900 to-indigo-600 rounded mb-6"></div>
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={inquiryCards[0].icon}
                        alt={inquiryCards[0].title}
                        className="w-12 h-12"
                      />
                      <h3 className="text-2xl font-bold text-black">
                        {inquiryCards[0].title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                      {inquiryCards[0].description}
                    </p>
                    <button
                      onClick={() => handleCardClick(inquiryCards[0].prefilledText)}
                      className="group bg-gray-900 text-white px-6 py-3 rounded font-medium hover:shadow-lg hover:shadow-gray-900/30 transition-all duration-300 transform hover:scale-105 w-full"
                    >
                      <span className="inline-flex items-center justify-center gap-2">
                        Jetzt anfragen
                        <span className="group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {inquiryCards.map((_, idx) => {
                // Normalize currentSlide to match the dots (0 to inquiryCards.length - 1)
                let normalizedSlide = currentSlide;
                if (currentSlide < 0) normalizedSlide = inquiryCards.length - 1;
                if (currentSlide >= inquiryCards.length) normalizedSlide = 0;

                return (
                  <button
                    key={idx}
                    onClick={() => {
                      if (!isTransitioning) {
                        setIsTransitioning(true);
                        setCurrentSlide(idx);
                      }
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      idx === normalizedSlide
                        ? "bg-gray-900 w-8"
                        : "bg-gray-300 hover:bg-gray-500"
                    }`}
                    aria-label={`Gehe zu Karte ${idx + 1}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section 
        className="relative overflow-hidden bg-linear-to-r from-gray-900 to-indigo-800" 
        data-animate 
        id="cta"
      >
        {/* Pattern Layer - zwischen Hintergrund und Content */}
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: `url(${techPattern})`,
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