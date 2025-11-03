import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier später Backend-Integration oder Email-Service
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Form nach 3 Sekunden zurücksetzen
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-black">
          Kontakt
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Hast du eine Frage oder möchtest ein Projekt starten? Schreib uns eine
          Nachricht.
        </p>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded p-8 text-center">
            <h2 className="text-2xl font-bold text-green-900 mb-2">Danke! ✓</h2>
            <p className="text-green-700">
              Wir melden uns schnellstmöglich bei dir.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-black mb-2"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black transition"
                placeholder="Dein Name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black mb-2"
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
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black transition"
                placeholder="deine@email.de"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-black mb-2"
              >
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black transition"
                placeholder="+49 123 456789"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-black mb-2"
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
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black transition resize-none"
                placeholder="Wie können wir dir helfen?"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white px-8 py-3 rounded font-medium hover:bg-gray-800 transition"
            >
              Nachricht senden
            </button>

            <p className="text-sm text-gray-500 text-center">
              * Erforderliche Felder
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
