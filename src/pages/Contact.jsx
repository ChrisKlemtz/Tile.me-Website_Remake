import { useState, useEffect } from "react";
import techPattern from "../assets/techpattern.svg";

export default function Contact({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    // Check for prefilled message from sessionStorage
    const prefilledMessage = sessionStorage.getItem("contactMessage");
    if (prefilledMessage) {
      setFormData((prev) => ({
        ...prev,
        message: prefilledMessage,
      }));
      // Clear the sessionStorage after using it
      sessionStorage.removeItem("contactMessage");
    }

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);

    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setPrivacyAccepted(false);
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* INTRO SECTION */}
      <section className="bg-white py-8 sm:py-10">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10">
          <div
            data-animate
            id="intro-text"
            className={`transition-all duration-1000 ${
              isVisible["intro-text"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl sm:text-2xl font-semibold text-black leading-relaxed">
                Hast du Fragen? Ein Projekt im Kopf? Oder willst du einfach
                wissen, wie wir ticken? Kontaktiere uns – wir freuen uns auf
                dich.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="bg-linear-to-b from-white to-gray-50 py-10 sm:py-10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div
              data-animate
              id="success-message"
              className={`transition-all duration-1000 ${
                isVisible["success-message"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative overflow-hidden rounded-xl p-12 text-center">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-linear-to-br from-green-50 to-emerald-50"></div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

                <div className="relative z-10">
                  <div className="text-6xl mb-6 animate-bounce">✓</div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-3">
                    Danke für deine Nachricht!
                  </h2>
                  <p className="text-lg text-green-700">
                    Wir melden uns schnellstmöglich bei dir. Bis bald!
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div
              onSubmit={handleSubmit}
              data-animate
              id="contact-form"
              className={`transition-all duration-1000 ${
                isVisible["contact-form"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="space-y-6">
                {/* Name */}
                <div
                  data-animate
                  id="field-name"
                  className={`transition-all duration-1000 ${
                    isVisible["field-name"]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: "100ms" }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-black mb-3"
                  >
                    Dein Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#0F0937] focus:shadow-lg focus:shadow-[#0F0937]/10 transition-all duration-300 bg-white placeholder:text-gray-400"
                    placeholder="Max Mustermann"
                  />
                </div>

                {/* Email */}
                <div
                  data-animate
                  id="field-email"
                  className={`transition-all duration-1000 ${
                    isVisible["field-email"]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: "150ms" }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-black mb-3"
                  >
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#0F0937] focus:shadow-lg focus:shadow-[#0F0937]/10 transition-all duration-300 bg-white placeholder:text-gray-400"
                    placeholder="max@example.de"
                  />
                </div>

                {/* Phone */}
                <div
                  data-animate
                  id="field-phone"
                  className={`transition-all duration-1000 ${
                    isVisible["field-phone"]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-black mb-3"
                  >
                    Telefon (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#0F0937] focus:shadow-lg focus:shadow-[#0F0937]/10 transition-all duration-300 bg-white placeholder:text-gray-400"
                    placeholder="+49 123 456789"
                  />
                </div>

                {/* Message */}
                <div
                  data-animate
                  id="field-message"
                  className={`transition-all duration-1000 ${
                    isVisible["field-message"]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: "250ms" }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-black mb-3"
                  >
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#0F0937] focus:shadow-lg focus:shadow-[#0F0937]/10 transition-all duration-300 bg-white resize-none placeholder:text-gray-400"
                    placeholder="Erzähl uns von deinem Projekt oder deinen Fragen..."
                  />
                </div>

                {/* Privacy Checkbox */}
                <div
                  data-animate
                  id="field-privacy"
                  className={`transition-all duration-1000 ${
                    isVisible["field-privacy"]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: "300ms" }}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={privacyAccepted}
                      onChange={(e) => setPrivacyAccepted(e.target.checked)}
                      className="mt-1 w-4 h-4 border-2 border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-[#0F0937] transition-all cursor-pointer"
                    />
                    <label
                      htmlFor="privacy"
                      className="text-sm text-gray-700 cursor-pointer"
                    >
                      Ich habe die{" "}
                      <button
                        type="button"
                        onClick={() => onNavigate("datenschutz")}
                        className="text-[#0F0937] hover:text-[#6D5FFF] underline font-semibold transition-colors"
                      >
                        Datenschutzerklärung
                      </button>{" "}
                      gelesen und akzeptiere diese. *
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div
                  data-animate
                  id="field-submit"
                  className={`transition-all duration-1000 ${
                    isVisible["field-submit"]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: "350ms" }}
                >
                  <button
                    onClick={handleSubmit}
                    disabled={!privacyAccepted}
                    className={`w-full group px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg ${
                      privacyAccepted
                        ? "bg-linear-to-r from-[#0F0937] to-[#1a0d52] text-white hover:shadow-lg hover:shadow-[#0F0937]/30 transform hover:scale-105 cursor-pointer"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    <span className="inline-flex items-center justify-center gap-2">
                      Nachricht senden
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </span>
                  </button>
                </div>

                <p className="text-sm text-gray-500 text-center">
                  * Erforderliche Felder
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            data-animate
            id="info-title"
            className={`transition-all duration-1000 text-center mb-16 ${
              isVisible["info-title"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
              Andere Wege uns zu erreichen
            </h2>
            <div className="h-1 bg-linear-to-r from-[#0F0937] to-[#6D5FFF] mt-4 rounded w-full sm:w-96 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "📧",
                title: "Email",
                desc: "Lieber schreiben?",
                content: "tile@tile.me",
                href: "mailto:tile@tile.me",
              },
              {
                icon: "📱",
                title: "Telefon",
                desc: "Direkter Draht?",
                content: "03831/3554565",
                href: "tel:038313554565",
              },
              {
                icon: "💬",
                title: "Chat",
                desc: "Schnelle Frage?",
                content: "+49 151 62645258",
                href: "https://wa.me/4915162645258",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                data-animate
                id={`info-${idx}`}
                className={`transition-all duration-1000 ${
                  isVisible[`info-${idx}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="text-center p-8 rounded-xl border border-gray-200 hover:border-[#0F0937] hover:shadow-lg hover:shadow-[#0F0937]/10 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                  <a
                    href={item.href}
                    target={item.title === "Chat" ? "_blank" : undefined}
                    rel={item.title === "Chat" ? "noopener noreferrer" : undefined}
                    className="text-black font-semibold hover:text-[#0F0937] transition-colors inline-block"
                  >
                    {item.content}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative overflow-hidden bg-linear-to-r from-gray-900 to-indigo-800">
        {/* Pattern Layer - zwischen Hintergrund und Content */}
        <div
          className="absolute inset-0 opacity-60 md:opacity-80"
          style={{
            backgroundImage: `url(${techPattern})`,
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
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
          data-animate
          id="cta"
          className={`relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center transition-all duration-1000 ${
            isVisible.cta
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Wir freuen uns auf dich
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Fragen kostet nichts und bleibt unverbindlich. Lass uns sprechen.
          </p>
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

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
