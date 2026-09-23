// Language switcher. To add a language: add an entry below and a
// <button data-lang="xx">XX</button> to the navbar in index.html.
const TRANSLATIONS = {
  en: {
    title: "Authorized Translations",
    home: "Home", menu: "Menu", nav_about: "About", nav_services: "Services", nav_contact: "Contact",
    hero_title: "Linguistic Solutions",
    tagline: "Translation. Interpreting. Localization. Linguistic Audit",
    start: "Get Started",
    about_title: "Quality, Attention to detail, Results.",
    about_text: "These are the principles that guide my work.",
    s_translations_title: "Translations",
    s_translations_text: "Legal, medical, technical documents. Book translations and localization services",
    s_interpreting_title: "Interpreting",
    s_interpreting_text: "Consecutive interpreting services whenever you need to work with the Romanian government",
    s_audit_title: "Linguistic Audit",
    s_audit_text: "English language assessment and lessons for companies and individuals",
    address: "Address", address_value: "Al. Lipanesti 2, J22 B, floor 4 apartment no. 20",
    email: "Email", phone: "Phone",
    copyright: "Copyright © TradAGV 2026"
  },
  ro: {
    title: "Traduceri autorizate",
    home: "Acasă", menu: "Meniu", nav_about: "Despre", nav_services: "Servicii", nav_contact: "Contact",
    hero_title: "Soluții lingvistice",
    tagline: "Traduceri. Interpretariat. Localizare. Audit lingvistic",
    start: "Începeți",
    about_title: "Calitate, atenție la detalii, rezultate.",
    about_text: "Acestea sunt principiile care îmi ghidează munca.",
    s_translations_title: "Traduceri",
    s_translations_text: "Documente juridice, medicale, tehnice. Traduceri de cărți și servicii de localizare",
    s_interpreting_title: "Interpretariat",
    s_interpreting_text: "Servicii de interpretariat consecutiv ori de câte ori aveți de colaborat cu autoritățile române",
    s_audit_title: "Audit lingvistic",
    s_audit_text: "Evaluarea nivelului de limba engleză și lecții pentru companii și persoane fizice",
    address: "Adresă", address_value: "Al. Lipănești 2, J22 B, etaj 4, ap. 20",
    email: "Email", phone: "Telefon",
    copyright: "Drepturi de autor © TradAGV 2026"
  }
};

function setLanguage(lang) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t[el.dataset.i18n]; });
  document.querySelectorAll("[data-lang]").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

document.querySelectorAll("[data-lang]").forEach(b =>
  b.addEventListener("click", () => setLanguage(b.dataset.lang)));

let saved = null;
try { saved = localStorage.getItem("lang"); } catch (e) {}
const browser = (navigator.language || "en").slice(0, 2);
setLanguage(TRANSLATIONS[saved] ? saved : (TRANSLATIONS[browser] ? browser : "en"));
