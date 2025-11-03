export default function Services() {
  const services = [
    {
      title: 'Webauftritt',
      desc: 'Neue Website oder Relaunch – wir entwickeln Lösungen, die funktionieren und aussehen.'
    },
    {
      title: 'Anfragen generieren',
      desc: 'Website steht? Kampagnen laufen? Aber keine Anfragen? Wir finden heraus warum und optimieren.'
    },
    {
      title: 'Sichtbarkeit',
      desc: 'Ohne Nutzer keine Kunden. Wir erhöhen deine Reichweite durch SEO, SEA und strategisches Marketing.'
    },
    {
      title: 'Verkäufe & Conversion',
      desc: 'Du möchtest verkaufen – aber es rührt sich nichts? Wir analysieren und optimieren deine Funnels.'
    },
    {
      title: 'Technik & Sicherheit',
      desc: 'Bug-Fixes, Performance-Optimierung, IT-Security – wenn es irgendwo klemmt, sind wir die Feuerwehr.'
    },
    {
      title: 'Compliance & DSGVO',
      desc: 'Cookie-Bar, externe Ressourcen, rechtliche Anforderungen – wir bringen dich in die Spur.'
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <h1 className="text-5xl sm:text-6xl font-bold mb-16 text-black">
          Services
        </h1>
        
        <div className="space-y-12">
          {services.map((service, idx) => (
            <div key={idx} className="border-b border-gray-200 pb-8">
              <h3 className="text-2xl font-bold mb-3 text-black">
                {service.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}