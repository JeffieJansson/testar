// Hantera år i footern
document.getElementById("year").textContent = new Date().getFullYear();

// Hantera meny-knappen
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.getElementById("mainmenu");

menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", !expanded);
  menu.classList.toggle("open");
});

// Hantera tema-växling
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

// Kolla sparat tema
if (localStorage.getItem("theme") === "dark") {
  root.setAttribute("data-theme", "dark");
  themeToggle.setAttribute("aria-pressed", "true");
}

themeToggle.addEventListener("click", () => {
  const isDark = root.getAttribute("data-theme") === "dark";
  if (isDark) {
    root.removeAttribute("data-theme");
    themeToggle.setAttribute("aria-pressed", "false");
    localStorage.setItem("theme", "light");
  } else {
    root.setAttribute("data-theme", "dark");
    themeToggle.setAttribute("aria-pressed", "true");
    localStorage.setItem("theme", "dark");
  }
});

// ------------------------------ Språkväxling ------------------------------
const langToggle = document.getElementById('langToggle');
let currentLang = 'sv'; // standard är svenska

// Definiera textinnehåll på svenska och engelska
const translations = {
  sv: {
    heroTitle: "En modern grund för din hemsida",
    heroText: "Starta snabbt med ett responsivt, tillgängligt och snyggt grundtema. Anpassa färger, layout och komponenter efter behov.",
    featuresHeading: "Byggstenar",
    contactHeading: "Kontakt",
    ctaTitle: "Redo att lansera?",
    // Lägg till fler texter du vill översätta
  },
  en: {
    heroTitle: "A modern foundation for your website",
    heroText: "Quickly start with a responsive, accessible, and sleek base theme. Customize colors, layout, and components as needed.",
    featuresHeading: "Building Blocks",
    contactHeading: "Contact",
    ctaTitle: "Ready to launch?",
    // Lägg till fler texter du vill översätta
  }
};

// Funktion som uppdaterar texterna
function updateLanguage(lang) {
  document.querySelector('.hero-inner h1').textContent = translations[lang].heroTitle;
  document.querySelector('.hero-inner p').textContent = translations[lang].heroText;
  document.querySelector('#features h2').textContent = translations[lang].featuresHeading;
  document.querySelector('#kontakt h2').textContent = translations[lang].contactHeading;
  document.querySelector('#cta-title').textContent = translations[lang].ctaTitle;
}

// Klickhantering
langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'sv' ? 'en' : 'sv';
  updateLanguage(currentLang);
});

