# Tile.me Website

Moderne, responsive Website für Tile.me - Webentwicklung, Marketing & SEO Services.

Gebaut mit **React**, **Vite** und **Tailwind CSS** mit modernen Animationen und Custom Design.

---

## 🚀 Quick Start

### Voraussetzungen

- Node.js (v16 oder höher)
- npm oder yarn

### Installation

1. **Repository klonen oder Projekt-Ordner öffnen:**

```bash
# Wenn du das Projekt von GitHub klonst:
git clone <repository-url>
cd web-agency

# Oder falls bereits lokal:
cd web-agency
```

2. **Dependencies installieren:**

```bash
npm install
```

3. **Entwicklungs-Server starten:**

```bash
npm run dev
```

4. **Browser öffnen:**

```
http://localhost:5173
```

Die Website sollte jetzt live sein! 🎉

---

## 📁 Projekt-Struktur

```
web-agency/
├── src/
│   ├── assets/              # Bilder, Logos, etc.
│   │   ├── tile-logo.svg
│   │   └── tile-name.svg
│   ├── components/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx              # Haupt-App (Navigation)
│   ├── index.css            # Tailwind CSS
│   └── main.jsx
├── public/
├── vite.config.js           # Vite Config + Tailwind Plugin
├── tailwind.config.js       # Tailwind Konfiguration
├── package.json
└── README.md
```

---

## 🛠️ Wichtige Befehle

| Befehl            | Beschreibung                               |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Dev-Server starten (http://localhost:5173) |
| `npm run build`   | Produktions-Build erstellen                |
| `npm run preview` | Preview des Build                          |
| `npm install`     | Dependencies installieren                  |

---

## ⚙️ Konfiguration

### Tailwind Custom Farben

Öffne `tailwind.config.js` um Custom Farben zu verwenden:

```javascript
theme: {
  extend: {
    colors: {
      'brand': '#0F0937',      // Deine Primary Farbe
      'brand-light': '#6D5FFF', // Gradient-Farbe
    }
  }
}
```

### Logo ändern

Speichere deine Logos unter `src/assets/`:

- `tile-logo.svg` - Kleines Icon Logo
- `tile-name.svg` - Text/Name Logo

Nutze dann in `src/components/Header.jsx`:

```javascript
import logo from "../assets/tile-logo.svg";
import namelogo from "../assets/tile-name.svg";
```

---

## 📄 Seiten

- **Home** (`/`) - Landing Page mit Hero, Teaser, Services & CTA
- **Services** - Alle Service-Angebote
- **About** - Über Tile.me & Team
- **Contact** - Kontaktformular

Navigation funktioniert über interne Link-Buttons (keine echten URLs).

---

## 🎨 Design & Styling

- **Framework:** Tailwind CSS mit `@tailwindcss/vite` Plugin
- **Responsive:** Mobile-first Design (sm, md, lg Breakpoints)
- **Animationen:** Scroll-Animationen mit Intersection Observer
- **Farben:** Primary #0F0937, Gradient #6D5FFF

---

## 🚀 Deployment

### Build erstellen:

```bash
npm run build
```

Dies erstellt einen optimierten Build im `dist/` Ordner.

### Deploy zu Vercel (empfohlen):

```bash
npm install -g vercel
vercel
```

### Deploy zu Netlify:

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

---

## 📝 Änderungen vornehmen

### Home Page bearbeiten:

Öffne `src/pages/Home.jsx` und ändere Texte, Farben oder Layouts direkt.

### Header/Footer anpassen:

- Header: `src/components/Header.jsx`
- Footer: `src/components/Footer.jsx`

### Neue Seite hinzufügen:

1. Erstelle neue Datei in `src/pages/MeinePage.jsx`
2. Exportiere den Component
3. Importiere in `src/App.jsx`
4. Füge in App.jsx hinzu:
   ```javascript
   {
     currentPage === "meine-page" && <MeinePage />;
   }
   ```
5. Füge Navigation Button in Header ein

---

## 🐛 Häufige Probleme

### Tailwind Klassen werden nicht angewendet

**Lösung:** Neustarten nach `tailwind.config.js` Änderungen:

```bash
# Ctrl+C zum Stoppen
npm run dev
```

### SVG Logos werden nicht angezeigt

**Lösung:** Prüfe den Pfad in `Header.jsx`:

```javascript
import logo from "../assets/tile-logo.svg"; // Korrekt
```

### Animations funktionieren nicht

**Lösung:** Stelle sicher, dass `index.css` diese Zeile hat:

```css
@import "tailwindcss";
```

---

## 📦 Dependencies

```json
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "vite": "^5.x",
  "tailwindcss": "^3.x",
  "@tailwindcss/vite": "^1.x"
}
```

---

## 📞 Support

Bei Fragen oder Issues:

1. Browser-Console checken (`F12`)
2. Neustarten: `npm run dev`
3. Dependencies neu installieren: `rm -rf node_modules && npm install`

---

## 📄 Lizenz

Privates Projekt für Tile.me

---

**Viel Erfolg mit der Website! 🚀**
