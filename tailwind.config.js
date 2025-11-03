// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B35", // Orange
        "primary-dark": "#E85A2E", // Dunkleres Orange
        "primary-light": "#FFB399", // Helleres Orange
        secondary: "#0F0937", // Navy Blau
        "secondary-light": "#1A7BA7", // Helleres Navy
      },
    },
  },
  plugins: [],
};
