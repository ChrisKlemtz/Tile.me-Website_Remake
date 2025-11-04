export default function Privacy() {
  return (
    <div className="bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold mb-8 text-black">
            Datenschutzerklärung
          </h1>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">1. Allgemeines</h2>
              <p>
                Der Schutz Ihrer persönlichen Daten ist für uns sehr wichtig. Wir behandeln Ihre personenbezogenen 
                Daten vertraulich und gemäß den geltenden Datenschutzgesetzen und dieser Datenschutzerklärung.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">2. Verantwortlicher</h2>
              <p>
                Tile Gabloffsky<br />
                Stralsund<br />
                Deutschland<br />
                E-Mail: kontakt@tile.me
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">3. Datenerfassung und Verarbeitung</h2>
              <p>
                Wir erfassen und verarbeiten personenbezogene Daten nur, soweit dies für die Bereitstellung 
                und Verbesserung unserer Dienstleistungen erforderlich ist. Dies erfolgt auf Basis Ihrer Zustimmung 
                oder auf Grundlage berechtigter Interessen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">4. Kontaktformular</h2>
              <p>
                Wenn Sie uns über das Kontaktformular eine Nachricht senden, erfassen wir Ihre Angaben (Name, E-Mail, Telefon, Nachricht) 
                ausschließlich zur Bearbeitung Ihrer Anfrage. Ihre Daten werden nicht an Dritte weitergegeben.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">5. Cookies</h2>
              <p>
                Diese Website verwendet keine Tracking-Cookies. Wir setzen keine Cookies zur Verfolgung Ihres Verhaltens ein.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">6. Ihre Rechte</h2>
              <p>
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. 
                Kontaktieren Sie uns unter kontakt@tile.me, um von diesen Rechten Gebrauch zu machen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">7. Änderungen dieser Datenschutzerklärung</h2>
              <p>
                Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit anzupassen. Änderungen werden 
                auf dieser Seite veröffentlicht.
              </p>
            </section>

            <section>
              <p className="text-sm text-gray-500 mt-12">
                Zuletzt aktualisiert: {new Date().toLocaleDateString('de-DE')}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}