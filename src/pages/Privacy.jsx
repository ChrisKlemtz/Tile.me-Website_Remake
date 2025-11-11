import { useState, useEffect } from "react";

export default function Privacy() {
  const [isVisible, setIsVisible] = useState({});
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

  return (
    <div className="bg-white">
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
              Datenschutzerklärung
            </h1>
            <div className="h-1 bg-linear-to-r from-white to-indigo-400 rounded w-32 mb-8"></div>
            <p className="text-xl text-gray-200 max-w-3xl">
              Wir erheben, speichern und nutzen Ihre personenbezogenen Daten nach den Vorschriften der Datenschutzgesetze. In dieser Erklärung möchten wir Sie darüber informieren, welche Arten von Daten wir zu welchen Zwecken und in welchem Umfang verarbeiten und welche Rechte Ihnen zustehen.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* I. Verantwortliche Stelle */}
            <div
              data-animate
              id="section-1"
              className={`transition-all duration-1000 ${
                isVisible["section-1"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-3xl font-bold text-black mb-6">
                I. Verantwortliche Stelle
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Verantwortliche Stelle im Sinne der Datenschutzgesetze ist
              </p>
              <div className="text-lg text-gray-700 space-y-2">
                <p className="font-semibold text-black">Tile Gabloffsky</p>
                <p>Ahornallee 22A</p>
                <p>D-18445 Kramerhof Ortsteil Klein Kedingshagen</p>
                <p className="mt-4">
                  <span className="font-semibold text-black">Telefon:</span> 03831/355 45 65
                </p>
                <p>
                  <span className="font-semibold text-black">Fax:</span> 03831/355 45 63
                </p>
              </div>
            </div>

            {/* II. Hosting */}
            <div
              data-animate
              id="section-2"
              className={`transition-all duration-1000 ${
                isVisible["section-2"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-3xl font-bold text-black mb-6">
                II. Hosting auf unserem eigenen Server
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Auf unserem Server werden Datenverarbeitungsvorgänge zum Zwecke der Erstellung und Aufrechterhaltung unseres Internet-Angebots ausgeführt. Gegenstand der Verarbeitungsvorgänge anlässlich des Hostings sind Kommunikationsdaten (z. B. IP-Adressen, Datum und Uhrzeit des Besuchs) von Besuchern der Website, Kunden und Nutzern sowie Nutzungsdaten, Vertragsdaten, Kontaktdaten und Bestandsdaten.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-2">
                <span className="font-semibold text-black">Rechtsgrundlage (Art. 13 Absatz 1 Buchstabe c DSGVO):</span> Art. 6 Absatz 1 Satz 1 Buchstabe f DSGVO
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-2">
                <span className="font-semibold text-black">Berechtigtes Interesse des Verantwortlichen im Sinne von Art. 6 Absatz 1 Satz 1 Buchstabe f DSGVO (Art. 13 Absatz 1 Buchstabe d DSGVO):</span> Die Verarbeitung beruht auf dem Interesse an einer sicheren, leistungsfähigen, effizienten, zuverlässigen und schnellen Vorhaltung unseres Internet-Angebots.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold text-black">Dauer der Datenspeicherung (Art. 13 Absatz 2 Buchstabe a DSGVO):</span> Die Daten werden gespeichert: (i) bis zum Zeitpunkt der Löschung anlässlich eines Widerspruchs; (ii) bis zum Zeitpunkt der automatischen Löschung, welche in der Regel binnen 90 Tagen erfolgt; (iii) bis zu dem Zeitpunkt, an dem sich das Internet-Angebot dergestalt ändert, dass dies nicht mehr mit den anlässlich der Datenerhebung verfolgten Zwecken vereinbar ist. Das zuerst eintretende Ereignis ist maßgeblich.
              </p>
            </div>

            {/* III. Anonymisierte Datenerhebung */}
            <div
              data-animate
              id="section-3"
              className={`transition-all duration-1000 ${
                isVisible["section-3"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-3xl font-bold text-black mb-6">
                III. Anonymisierte Datenerhebung und -verarbeitung auf dieser Website
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Die vom Server erfassten Daten, die über Ihren Browser an den Server übermittelt werden, werden automatisch in Protokolldateien, so genannten Log-Files, gespeichert. Hierbei handelt es sich um folgende Daten:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-4 ml-4">
                <li>Typ und Version des von Ihnen verwendeten Browsers,</li>
                <li>Typ und Version des von Ihnen verwendeten Betriebssystems,</li>
                <li>URL der Seite, über die Sie zu uns gelangt sind,</li>
                <li>Suchworte, über die Sie unsere Seite gefunden haben,</li>
                <li>Datum und Uhrzeit des Abrufs unserer Website,</li>
                <li>Namen der von Ihnen abgerufenen Unterseiten,</li>
                <li>für die Anfrage verwendete IP-Adresse,</li>
                <li>für die Anfrage verwendeter Provider.</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Diese Daten erheben und verarbeiten wir in anonymisierter Form, das heißt: Die Daten können durch uns, d. h. insbesondere ohne Unterstützung seitens zuständiger Behörden, Gerichte oder seitens des anfragenden Providers, grundsätzlich nicht einer bestimmten Person zugeordnet werden. Zweck der Datenerhebung und -verarbeitung ist die Auswertung zu internen systembezogenen und statistischen Zwecken sowie im Falle eines Missbrauchs (z. B. Straftaten) für Zwecke der Ermittlung und Einleitung der Verfolgung und Ahndung durch zuständige Behörden sowie zur Geltendmachung zivilrechtlicher Ansprüche.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-2">
                <span className="font-semibold text-black">Rechtsgrundlage (Art. 13 Absatz 1 Buchstabe c DSGVO):</span> Art. 6 Absatz 1 Satz 1 Buchstabe f DSGVO, Art. 28 DSGVO, Auftragsdatenverarbeitungsvertrag
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-2">
                <span className="font-semibold text-black">Berechtigtes Interesse des Verantwortlichen im Sinne von Art. 6 Absatz 1 Satz 1 Buchstabe f DSGVO (Art. 13 Absatz 1 Buchstabe d DSGVO):</span> Die Verarbeitung beruht auf dem Interesse des Verantwortlichen an der Erlangung von Informationen zur Verbesserung und Optimierung des Internet-Angebots sowie zur Ermöglichung der Verfolgung missbräuchlichen Verhaltens.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold text-black">Dauer der Datenspeicherung (Art. 13 Absatz 2 Buchstabe a DSGVO):</span> Die Daten werden gespeichert: (i) bis zu 90 Tage; (ii) bis zum Zeitpunkt der Löschung anlässlich eines Widerspruchs; (iii) im Falle der Relevanz der Daten als Beweismittel bis zum Abschluss eines entsprechenden Verfahrens. In den zu i und ii genannten Fällen ist das zuerst eintretende Ereignis maßgeblich.
              </p>
            </div>

            {/* IV. Cookies */}
            <div
              data-animate
              id="section-4"
              className={`transition-all duration-1000 ${
                isVisible["section-4"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-3xl font-bold text-black mb-6">
                IV. Cookies
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Wir verwenden für unsere Websites sogenannte „Cookies". Cookies sind kleine Textdateien, die anlässlich des Aufrufens unserer Website auf Ihrem Rechner abgelegt und von Ihrem Browser gespeichert werden. Mithilfe von Cookies kann unser Server Ihren Browser, Ihre individuellen Einstellungen in unserem Internet-Auftritt (z. B. Sprache, Schriftgröße, Design) und gegebenenfalls Teile der Anmeldedaten in verschlüsselter Form erkennen, Ihnen auf diese Weise die Benutzung unserer Seiten erleichtern und ggfls. ein automatisches Einloggen ermöglichen. Cookies dienen darüber hinaus dazu, die Nutzung unseres Internet-Angebots zu analysieren im Hinblick auf Verhaltensweisen der Seitennutzung (wie oft und wie lange welche Seiten aufgerufen wurden), um unser Internet-Angebot zu optimieren und nutzerfreundlich zu gestalten. Cookies erlauben dem Server unserer Website die Wiedererkennung des aufrufenden Browsers nach einem Seitenwechsel. Die in Cookies gespeicherten Daten betreffen gegebenenfalls:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-4 ml-4">
                <li>Log-In Daten,</li>
                <li>Artikel in einem Warenkorb bzw. eine Bestellübersicht,</li>
                <li>Verfahrensstand bezüglich eines Bestell- oder Reservierungsvorgangs,</li>
                <li>Identifikationsnummer für den Nutzungsvorgang, so genannte Sitzungs-ID – englisch session identifier,</li>
                <li>Hinweis auf die Nutzung von Cookies auf durch die Website, so genanntes Cookiebanner.</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Über Ihre Browsereinstellungen haben Sie die Möglichkeit, Cookies abzulehnen, Cookies von Ihrem Rechner zu löschen, Cookies zu blockieren oder vor dem Setzen eines Cookies angefragt zu werden. Anlässlich des Aufrufens der Website werden Sie unter Hinweis auf diese Datenschutzerklärung über ein Cookiebanner darüber informiert, dass diese Website Cookies verwendet.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-2">
                <span className="font-semibold text-black">Rechtsgrundlage (Art. 13 Absatz 1 Buchstabe c DSGVO):</span> Art. 6 Absatz 1 Satz 1 Buchstabe f DSGVO, Art. 28 DSGVO, Auftragsdatenverarbeitungsvertrag
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-2">
                <span className="font-semibold text-black">Berechtigtes Interesse des Verantwortlichen im Sinne von Art. 6 Absatz 1 Satz 1 Buchstabe f DSGVO (Art. 13 Absatz 1 Buchstabe d DSGVO):</span> Die Verarbeitung beruht auf dem Interesse des Verantwortlichen an der Verbesserung der Schnelligkeit, Effizienz und Nutzerfreundlichkeit des Internet-Angebots. Soweit Cookies zu Analysezwecken verwendet werden, geschieht das zu dem Zweck, unser Internet-Angebot zu optimieren und die Nutzerfreundlichkeit zu verbessern.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold text-black">Dauer der Datenspeicherung (Art. 13 Absatz 2 Buchstabe a DSGVO):</span> Die Speicherung von Cookies erfolgt auf dem Gerät des Nutzers und dauert bis die Cookies gelöscht oder überschrieben werden.
              </p>
            </div>

            {/* V. Nutzung und Weitergabe personenbezogener Daten */}
            <div
              data-animate
              id="section-5"
              className={`transition-all duration-1000 ${
                isVisible["section-5"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-3xl font-bold text-black mb-6">
                V. Nutzung und Weitergabe personenbezogener Daten für Vertragszwecke
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Personenbezogenen Daten, soweit diese für die Begründung, inhaltliche Ausgestaltung oder Änderung eines Vertragsverhältnisses erforderlich sind (Bestandsdaten), werden ausschließlich zur Beantwortung Ihrer Anfragen, zur Abwicklung mit Ihnen geschlossener Verträge und für die technische Administration erhoben und verarbeitet. Die Verarbeitung Ihrer personenbezogenen Daten umfasst das Speichern, Verändern, Übermitteln, Sperren und Löschen dieser Daten. Ihre personenbezogenen Daten werden an Dritte nur weitergegeben oder sonst übermittelt, wenn dies zum Zwecke der Vertragsabwicklung – insbesondere Weitergabe von Bestelldaten an Lieferanten, das mit der Lieferung beauftragte Versandunternehmen und das mit der Zahlungsabwicklung beauftragte Kreditinstitut – erforderlich ist, dies zu Abrechnungszwecken erforderlich ist oder Sie zuvor eingewilligt haben. In diesen Fällen beschränkt sich der Umfang der übermittelten Daten jedoch nur auf das erforderliche Minimum.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Die Bereitstellung der personenbezogenen Daten ist grundsätzlich weder gesetzlich noch vertraglich vorgeschrieben aber für den Vertragsschluss erforderlich. Sie sind nicht zur Bereitstellung personenbezogener Daten verpflichtet. Die Nichtbereitstellung von für den Vertragsschluss notwendiger personenbezogener Daten hat zur Folge, dass der Vertrag nicht geschlossen werden kann und ein Leistungsaustausch nicht stattfinden kann.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-2">
                <span className="font-semibold text-black">Rechtsgrundlage (Art. 13 Absatz 1 Buchstabe c DSGVO):</span> Art. 6 Absatz 1 Satz 1 Buchstaben a, b und c DSGVO, Art. 28 DSGVO, Auftragsdatenverarbeitungsvertrag
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-2">
                <span className="font-semibold text-black">Empfänger oder Kategorien von Empfängern (Art. 13 Absatz 1 Buchstabe e DSGVO):</span> Host-Anbieter, Lieferanten, Subunternehmer, externe Werk- oder Dienstleister, Versandunternehmen, zur Zahlungsabwicklung einbezogene Dritte, Kreditinstitute
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold text-black">Dauer der Datenspeicherung (Art. 13 Absatz 2 Buchstabe a DSGVO):</span> Die Daten werden gespeichert (i) bis zum Zeitpunkt der Löschung anlässlich eines Widerspruchs; (ii) bis zu dem Zeitpunkt der Löschung anlässlich eines Widerrufs; (iii) wenn die Speicherung zur Erfüllung des mit der Speicherung verfolgten Zwecks nicht mehr erforderlich ist; (iv) bis zum Ende einer gesetzlich vorgeschriebenen Speicher- oder Aufbewahrungsdauer; (v) bis zum Ablauf von vertraglichen oder gesetzlichen Gewährleistungs- und Garantiefristen. Sofern nicht ein Fall gemäß iv oder v vorliegt, ist in den Fällen von i bis iii das zuerst eintretende Ereignis maßgeblich. Bei den Fällen nach iv und v erfolgt die Löschung bei Eintritt des zeitlich später eintretenden Ereignisses.
              </p>
            </div>

            {/* VI. E-Mail */}
            <div
              data-animate
              id="section-6"
              className={`transition-all duration-1000 ${
                isVisible["section-6"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-3xl font-bold text-black mb-6">
                VI. E-Mail
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Unser Internet-Angebot beinhaltet die Möglichkeit, mit uns Kontakt mittels E-Mail aufzunehmen. Wenn Sie davon Gebrauch machen, werden die eingegebenen Daten auf dem Server gespeichert. Bei den Daten handelt es sich um
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-4 ml-4">
                <li>die durch Sie verwendete E-Mail Adresse,</li>
                <li>Text der durch Sie an uns gerichteten Nachricht,</li>
                <li>IP-Adresse sowie Datum und Uhrzeit der Absendung sowie des Empfangs der E-Mail.</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Die Speicherung der Daten dient der Bearbeitung und gegebenenfalls Beantwortung der Kontaktaufnahme.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Die Bereitstellung der personenbezogenen Daten ist grundsätzlich weder gesetzlich noch vertraglich vorgeschrieben und grundsätzlich für einen Vertragsschluss nicht erforderlich. Sie sind nicht zur Bereitstellung personenbezogener Daten verpflichtet. Die Nichtbereitstellung notwendigen personenbezogenen Daten hat zur Folge, dass eine E-Mail nicht, nicht zutreffend oder nicht vollständig beantwortet werden kann.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-2">
                <span className="font-semibold text-black">Rechtsgrundlagen (Art. 13 Absatz 1 Buchstabe c DSGVO):</span> Art. 6 Absatz 1 Satz 1 Buchstaben a oder b DSGVO; Art. 28 DSGVO, Auftragsdatenverarbeitungsvertrag
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-2">
                <span className="font-semibold text-black">Empfänger oder Kategorien von Empfängern (Art. 13 Absatz 1 Buchstabe e DSGVO):</span> Host-Anbieter
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold text-black">Dauer der Datenspeicherung (Art. 13 Absatz 2 Buchstabe a DSGVO):</span> Die Daten werden gespeichert: (i) bis zur Löschung anlässlich eines Widerrufs; (ii) bis zur Löschung anlässlich eines Widerspruchs; (iii) bis zu dem Zeitpunkt, an dem die aus der Kontaktaufnahme resultierende Korrespondenz beendet ist, was dann der Fall ist, wenn nach den Umständen des Einzelfalls davon auszugehen ist, dass der Gegenstand der Anfrage erledigt ist; (iv) soweit Daten in Protokolldateien (Log-Files) gespeichert sind – das betrifft die IP-Adresse sowie Datum und Uhrzeit der Absendung sowie des Empfangs der E-Mail –, werden diese nach Maßgabe der in Nummer 3 gemachten Ausführungen gelöscht. In Fällen gemäß i bis iii ist das zuerst eintretende Ereignis maßgeblich.
              </p>
            </div>

            {/* VII. AWIN */}
            <div
              data-animate
              id="section-7"
              className={`transition-all duration-1000 ${
                isVisible["section-7"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-3xl font-bold text-black mb-6">
                VII. AWIN
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Diese Website nutzt das Performance Advertising Netzwerk der AWIN AG, Eichhornstraße 3, 10785 Berlin. Im Rahmen seiner Tracking-Dienste speichert AWIN zur Dokumentation von Transaktionen (z.B. von Leads und Sales) Cookies auf Endgeräten von Nutzern, die Webseiten oder andere Onlineangebote seiner Kunden besuchen oder nutzen (z.B. für einen Newsletter registrieren oder eine Bestellung in einem Onlineshop aufgeben). Diese Cookies dienen allein dem Zweck einer korrekten Zuordnung des Erfolgs eines Werbemittels und der entsprechenden Abrechnung im Rahmen seines Netzwerks. Personenbezogenen Daten werden hierbei durch AWIN nicht erhoben, verarbeitet oder genutzt. In einem Cookie wird lediglich die Information darüber platziert, wann von einem Endgerät ein bestimmtes Werbemittel angeklickt wurde. In den AWIN Tracking Cookies wird eine individuelle, jedoch nicht auf den einzelnen Nutzer zuordnungsfähige Ziffernfolge hinterlegt, mit der das Partnerprogramm eines Advertisers, der Publisher, der Zeitpunkt der Aktion des Nutzers (Click oder View) dokumentiert werden. Hierbei erhebt AWIN auch Informationen über das Endgerät, von dem eine Transaktion durchgeführt wird, z.B. das Betriebssystem und den aufrufenden Browser.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Die Speicherung von "AWIN-Cookies" erfolgt auf Grundlage von Art. 6 lit. f DSGVO. Der Websitebetreiber hat hieran ein berechtigtes Interesse, da nur durch die Cookies die Höhe seiner Affiliate-Vergütung feststellbar ist.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Für weitere Informationen zur Datenverarbeitung von AWIN haben möchten, finden Sie diese hier:{" "}
                <a
                  href="https://www.awin.com/de/rechtliches"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0F0937] hover:text-[#6D5FFF] transition-colors underline"
                >
                  https://www.awin.com/de/rechtliches
                </a>
              </p>
            </div>

            {/* VIII. Google AdSense */}
            <div
              data-animate
              id="section-8"
              className={`transition-all duration-1000 ${
                isVisible["section-8"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-3xl font-bold text-black mb-6">
                VIII. Google AdSense
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Diese Website nutzt Google AdSense. Es handelt sich dabei um einen Dienst der Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA, zur Einbindung von Werbeanzeigen. Google AdSense verwendet Cookies, die auf Ihrem PC gespeichert werden und mithilfe derer Google die Nutzung unserer Website analysieren kann. Zudem werden sogenannte Web Beacons verwendet. Also nicht sichtbare Grafiken, die es Google ermöglichen, Klicks auf dieser Website und ähnliche Informationen zu analysieren.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Die über Cookies und Web Beacons erhaltenen Informationen, Ihre IP-Adresse sowie die Auslieferung von Werbeformaten werden an einen Server von Google mit Standort in den USA übermittelt und dort gespeichert. Google wird diese gesammelten Informationen möglicherweise an Dritte weitergeben, wenn dies gesetzlich erforderlich ist oder Google gegenüber Dritten die Datenverarbeitung in Auftrag gibt. Allerdings wird Google Ihre IP-Adresse zusammen mit den anderen gespeicherten Daten zusammenführen.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Durch entsprechende Einstellungen an Ihrem Internetbrowser können Sie verhindern, dass die genannten Cookies auf Ihrem PC gespeichert werden. Dadurch besteht jedoch die Möglichkeit, dass die Inhalte dieser Website nicht mehr in gleichem Umfang genutzt werden können. Durch die Nutzung dieser Website willigen Sie in die Bearbeitung der zu Ihrer Person erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck ein.
              </p>
            </div>

            {/* IX. Ihre Rechte */}
            <div
              data-animate
              id="section-9"
              className={`transition-all duration-1000 ${
                isVisible["section-9"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-3xl font-bold text-black mb-6">
                IX. Ihre Rechte im Überblick
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Anlässlich der Verarbeitung personenbezogener Daten stehen betroffenen Personen Rechte zu.
              </p>

              {/* a) Recht auf Auskunft */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-black mb-4">
                  a) Recht auf Auskunft
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Betroffene Personen haben das Recht, vom Verantwortlichen (vgl. Nummer 1) eine Bestätigung darüber zu verlangen, ob sie betreffende personenbezogene Daten verarbeitet werden. Sofern das der Fall ist, steht betroffenen Personen das Recht zu, Auskunft über diese Daten zu verlangen und auf folgende Informationen:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 ml-4 mb-4">
                  <li>die Verarbeitungszwecke,</li>
                  <li>die Kategorien personenbezogener Daten, die verarbeitet werden,</li>
                  <li>die Empfänger oder Kategorien von Empfängern, gegenüber denen die personenbezogenen Daten offengelegt worden sind oder noch offengelegt werden, insbesondere bei Empfängern in Drittländern oder bei internationalen Organisationen,</li>
                  <li>falls möglich die geplante Dauer, für die die personenbezogenen Daten gespeichert werden, oder, falls dies nicht möglich ist, die Kriterien für die Festlegung dieser Dauer,</li>
                  <li>das Bestehen eines Rechts auf Berichtigung oder Löschung der sie betreffenden personenbezogenen Daten oder auf Einschränkung der Verarbeitung durch den Verantwortlichen oder eines Widerspruchsrechts gegen diese Verarbeitung,</li>
                  <li>das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde,</li>
                  <li>wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben werden, alle verfügbaren Informationen über die Herkunft der Daten,</li>
                  <li>das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling gemäß Artikel 22 Absätze 1 und 4 DSGVO und — zumindest in diesen Fällen — aussagekräftige Informationen über die involvierte Logik sowie die Tragweite und die angestrebten Auswirkungen einer derartigen Verarbeitung für die betroffene Person.</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Werden personenbezogene Daten an ein Drittland oder an eine internationale Organisation übermittelt, so hat die betroffene Person das Recht, über die geeigneten Garantien gemäß Artikel 46 im Zusammenhang mit der Übermittlung unterrichtet zu werden.
                </p>
              </div>

              {/* b) Recht auf Berichtigung */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-black mb-4">
                  b) Recht auf Berichtigung
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Betroffene Personen haben das Recht, von dem Verantwortlichen (vgl. Nummer 1) unverzüglich die Berichtigung sie betreffender unrichtiger personenbezogener Daten zu verlangen. Unter Berücksichtigung der Zwecke der Verarbeitung haben betroffene Personen das Recht, die Vervollständigung unvollständiger personenbezogener Daten – auch mittels ergänzenden Erklärung – zu verlangen.
                </p>
              </div>

              {/* c) Recht auf Löschung */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-black mb-4">
                  c) Recht auf Löschung
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Betroffene Personen haben das Recht, von dem Verantwortlichen (vgl. Nummer 1) zu verlangen, dass sie betreffende personenbezogene Daten unverzüglich gelöscht werden, und der Verantwortliche (vgl. Nummer 1) ist verpflichtet, personenbezogene Daten unverzüglich zu löschen, sofern einer der folgenden Gründe zutrifft:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 ml-4 mb-4">
                  <li>Die personenbezogenen Daten sind für die Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig.</li>
                  <li>Die betroffene Person widerruft ihre Einwilligung, auf die sich die Verarbeitung gemäß Artikel 6 Absatz 1 Satz 1 Buchstabe a DSGVO oder Artikel 9 Absatz 2 Buchstabe a DSGVO stützte, und es fehlt an einer anderweitigen Rechtsgrundlage für die Verarbeitung.</li>
                  <li>Die betroffene Person legt gemäß Artikel 21 Absatz 1 DSGVO Widerspruch gegen die Verarbeitung ein und es liegen keine vorrangigen berechtigten Gründe für die Verarbeitung vor, oder die betroffene Person legt gemäß Artikel 21 Absatz 2 DSGVO Widerspruch gegen die Verarbeitung ein.</li>
                  <li>Die personenbezogenen Daten wurden unrechtmäßig verarbeitet.</li>
                  <li>Die Löschung der personenbezogenen Daten ist zur Erfüllung einer rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich, dem der Verantwortliche unterliegt.</li>
                  <li>Die personenbezogenen Daten wurden in Bezug auf angebotene Dienste der Informationsgesellschaft gemäß Artikel 8 Absatz 1 DSGVO erhoben.</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Hat der Verantwortliche (vgl. Nummer 1) die personenbezogenen Daten öffentlich gemacht und ist er gemäß Art. 17 Absatz 1 DSGVO zur Löschung verpflichtet, so trifft er unter Berücksichtigung der verfügbaren Technologie und der Implementierungskosten angemessene Maßnahmen, auch technischer Art, um für die Datenverarbeitung Verantwortliche, die die personenbezogenen Daten verarbeiten, darüber zu informieren, dass eine betroffene Person von ihnen die Löschung aller Links zu diesen personenbezogenen Daten oder von Kopien oder Replikationen dieser personenbezogenen Daten verlangt hat.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Das Recht auf Löschung sowie die im vorstehenden Absatz beschriebenen Maßgaben gelten nicht, soweit die Verarbeitung erforderlich ist
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 ml-4">
                  <li>zur Ausübung des Rechts auf freie Meinungsäußerung und Information,</li>
                  <li>zur Erfüllung einer rechtlichen Verpflichtung, die die Verarbeitung nach dem Recht der Union oder der Mitgliedstaaten, dem der Verantwortliche unterliegt, erfordert, oder zur Wahrnehmung einer Aufgabe, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde,</li>
                  <li>zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</li>
                </ul>
              </div>

              {/* d) Recht auf Einschränkung */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-black mb-4">
                  d) Recht auf Einschränkung der Verarbeitung
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Betroffene Personen haben das Recht, von dem Verantwortlichen (vgl. Nummer 1) die Einschränkung der Verarbeitung zu verlangen, wenn eine der folgenden Voraussetzungen gegeben ist:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 ml-4 mb-4">
                  <li>die Richtigkeit der personenbezogenen Daten von der betroffenen Person bestritten wird, und zwar für eine Dauer, die es dem Verantwortlichen ermöglicht, die Richtigkeit der personenbezogenen Daten zu überprüfen,</li>
                  <li>die Verarbeitung unrechtmäßig ist und die betroffene Person die Löschung der personenbezogenen Daten ablehnt und stattdessen die Einschränkung der Nutzung der personenbezogenen Daten verlangt,</li>
                  <li>der Verantwortliche die personenbezogenen Daten für die Zwecke der Verarbeitung nicht länger benötigt, die betroffene Person sie jedoch zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigt, oder</li>
                  <li>die betroffene Person Widerspruch gegen die Verarbeitung gemäß Artikel 21 Absatz 1 DSGVO eingelegt hat, solange noch nicht feststeht, ob die berechtigten Gründe des Verantwortlichen gegenüber denen der betroffenen Person überwiegen.</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Wurde die Verarbeitung nach vorstehend beschriebenen Maßgaben eingeschränkt, so dürfen diese personenbezogenen Daten – von ihrer Speicherung abgesehen – nur mit Einwilligung der betroffenen Person oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Union oder eines Mitgliedstaats verarbeitet werden.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Eine betroffene Person, die eine Einschränkung der Verarbeitung nach den vorstehenden Maßgaben erwirkt hat, wird von dem Verantwortlichen (vgl. Nummer 1) unterrichtet, bevor die Einschränkung aufgehoben wird.
                </p>
              </div>

              {/* e) Widerspruchsrecht */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-black mb-4">
                  e) Widerspruchsrecht gegen die Verarbeitung
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Betroffene Personen haben das Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung sie betreffender personenbezogener Daten, die aufgrund von Artikel 6 Absatz 1 Buchstaben e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Der Verantwortliche (vgl. Nummer 1) verarbeitet die personenbezogenen Daten nicht mehr, es sei denn, er kann zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die die Interessen, Rechte und Freiheiten der betroffenen Person überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Werden personenbezogene Daten verarbeitet, um Direktwerbung zu betreiben, so haben betroffene Personen das Recht, jederzeit Widerspruch gegen die Verarbeitung sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Widerspricht die betroffene Person der Verarbeitung für Zwecke der Direktwerbung, so werden die personenbezogenen Daten nicht mehr für diese Zwecke verarbeitet.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Im Zusammenhang mit der Nutzung von Diensten der Informationsgesellschaft kann die betroffene Person ungeachtet der Richtlinie 2002/58/EG ihr Widerspruchsrecht mittels automatisierter Verfahren ausüben, bei denen technische Spezifikationen verwendet werden.
                </p>
              </div>

              {/* f) Datenübertragbarkeit */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-black mb-4">
                  f) Recht auf Datenübertragbarkeit
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Betroffene Personen haben das Recht, die dem Verantwortlichen (vgl. Nummer 1) bereitgestellten sie betreffenden personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Betroffene Personen haben ferner das Recht, diese Daten einem anderen Verantwortlichen ohne Behinderung durch den Verantwortlichen (vgl. Nummer 1), soweit dies technisch machbar ist und Rechte und Freiheiten anderer Personen nicht beeinträchtigt werden, auf direktem Weg zwischen dem anderen Verantwortlichen und dem Verantwortlichen (vgl. Nummer 1) zu übermitteln, sofern
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 ml-4">
                  <li>die Verarbeitung auf einer Einwilligung gemäß Artikel 6 Absatz 1 Satz 1 Buchstabe a oder Artikel 9 Absatz 2 Buchstabe a DSGVO oder auf einem Vertrag gemäß Artikel 6 Absatz 1 Buchstabe b DSGVO beruht und</li>
                  <li>die Verarbeitung mithilfe automatisierter Verfahren erfolgt.</li>
                </ul>
              </div>

              {/* g) Widerruf */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-black mb-4">
                  g) Recht auf Widerruf bei vorheriger Einwilligung
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Betroffene Personen haben das Recht, ihre Einwilligung zur Verarbeitung personenbezogener Daten jederzeit zu widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.
                </p>
              </div>

              {/* h) Profiling */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-black mb-4">
                  h) Automatisierte Entscheidung / Profiling
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Betroffene Personen haben das Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung – einschließlich Profiling – beruhenden Entscheidung unterworfen zu werden, die ihr gegenüber rechtliche Wirkung entfaltet oder sie in ähnlicher Weise erheblich beeinträchtigt. Das gilt nicht, wenn die Entscheidung
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 ml-4 mb-4">
                  <li>für den Abschluss oder die Erfüllung eines Vertrags zwischen der betroffenen Person und dem Verantwortlichen (vgl. Nummer 1) erforderlich ist,</li>
                  <li>aufgrund von Rechtsvorschriften der Union oder der Mitgliedstaaten, denen der Verantwortliche (vgl. Nummer 1) unterliegt, zulässig ist und diese Rechtsvorschriften angemessene Maßnahmen zur Wahrung der Rechte und Freiheiten sowie der berechtigten Interessen der betroffenen Person enthalten oder</li>
                  <li>mit ausdrücklicher Einwilligung der betroffenen Person erfolgt.</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  In den Fällen, in denen die Entscheidung für den Abschluss oder die Erfüllung eines Vertrags zwischen der betroffenen Person und dem Verantwortlichen (vgl. Nummer 1) erforderlich ist oder diese mit ausdrücklicher Einwilligung der betroffenen Person erfolgt, trifft der Verantwortliche (vgl. Nummer 1) angemessene Maßnahmen, um die Rechte und Freiheiten sowie die berechtigten Interessen der betroffenen Person zu wahren. Dazu gehören zumindest folgende Rechte:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 ml-4">
                  <li>das Recht auf Erwirkung des Eingreifens einer Person seitens des Verantwortlichen,</li>
                  <li>das Recht auf Darlegung des eigenen Standpunkts und</li>
                  <li>das Recht auf Anfechtung der Entscheidung.</li>
                </ul>
              </div>

              {/* i) Beschwerde */}
              <div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  i) Recht auf Beschwerde bei einer Aufsichtsbehörde
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Betroffene Personen haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren. Das Beschwerderecht gilt unabhängig anderweitiger Rechtsbehelfe betroffener Personen.
                </p>
              </div>
            </div>
          </div>
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
