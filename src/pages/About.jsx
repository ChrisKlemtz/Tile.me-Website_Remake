export default function About() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <h1 className="text-5xl sm:text-6xl font-bold mb-16 text-black">
          Über uns
        </h1>
        
        <div className="max-w-3xl space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-4 text-black">Wer wir sind</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Seit Jahren entwickeln wir Websites, optimieren Online-Präsenzen und bringen Businesses vorwärts. 
              Wir sind Developer, Marketing-Experten und Strategen – mit dem klaren Fokus auf echte Ergebnisse.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-black">Unser Ansatz</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Keine Template-Websites. Keine 1000 Plugins. Keine versteckten Kosten. 
              Stattdessen: Echte Webentwicklung, die versteht wie dein Business funktioniert und wo die Chancen liegen.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-black">Team & Netzwerk</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Wir arbeiten mit erfahrenen Profis zusammen: Designer, Developer, Marketing-Spezialisten und 
              weitere Dienstleister. Gemeinsam realisieren wir Projekte in jeder Größe.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}