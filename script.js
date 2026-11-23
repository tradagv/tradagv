// ========== TradAGV — site script ==========

// All texts in both languages. To change a text, edit it here (and in index.html for English).
const TRANSLATIONS = {
  en: {
    title: "Authorized Translations",
    nav_about: "About", nav_services: "Services", nav_contact: "Contact",
    hero_title: "Linguistic Solutions",
    tagline: "Translation. Interpreting. Localization. Linguistic Audit",
    start: "Get Started",
    about_title: "Quality, Attention to detail, Results.",
    about_text: "These are the principles that guide my work.",
    p_quality: "Quality", p_detail: "Attention to detail", p_results: "Results",
    services_title: "How I can help",
    s_translations_title: "Translations",
    s_translations_text: "Legal, medical, technical documents. Book translations and localization services",
    s_interpreting_title: "Interpreting",
    s_interpreting_text: "Consecutive interpreting services whenever you need to work with the Romanian government",
    s_audit_title: "Linguistic Audit",
    s_audit_text: "English language assessment and lessons for companies and individuals",
    contact_title: "Let's work together",
    contact_text: "For a quote or any question, you can reach me here.",
    address: "Address", address_value: "Al. Lipanesti 2, J22 B, floor 4 apartment no. 20",
    email: "Email", phone: "Phone",
    copyright_label: "Copyright",
    menu: "Menu",
  },
  ro: {
    title: "Traduceri autorizate",
    nav_about: "Despre", nav_services: "Servicii", nav_contact: "Contact",
    hero_title: "Soluții lingvistice",
    tagline: "Traduceri. Interpretariat. Localizare. Audit lingvistic",
    start: "Începeți",
    about_title: "Calitate, atenție la detalii, rezultate.",
    about_text: "Acestea sunt principiile care îmi ghidează munca.",
    p_quality: "Calitate", p_detail: "Atenție la detalii", p_results: "Rezultate",
    services_title: "Cu ce vă pot ajuta",
    s_translations_title: "Traduceri",
    s_translations_text: "Documente juridice, medicale, tehnice. Traduceri de cărți și servicii de localizare",
    s_interpreting_title: "Interpretariat",
    s_interpreting_text: "Servicii de interpretariat consecutiv ori de câte ori aveți de colaborat cu autoritățile române",
    s_audit_title: "Audit lingvistic",
    s_audit_text: "Evaluarea nivelului de limba engleză și lecții pentru companii și persoane fizice",
    contact_title: "Să lucrăm împreună",
    contact_text: "Pentru o ofertă sau orice întrebare, mă găsiți aici.",
    address: "Adresă", address_value: "Al. Lipănești 2, J22 B, etaj 4, ap. 20",
    email: "Email", phone: "Telefon",
    copyright_label: "Drepturi de autor",
    menu: "Meniu",
  },
};

function setLanguage(lang) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  document.documentElement.lang = lang;
  document.title = "TradAGV — " + t.title;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = t[el.dataset.i18n];
    if (v) el.textContent = v;
  });
  document.querySelectorAll("[data-lang]").forEach((b) => {
    const on = b.dataset.lang === lang;
    b.classList.toggle("is-active", on);
    b.setAttribute("aria-pressed", on);
  });
  document.getElementById("navToggle").setAttribute("aria-label", t.menu);
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

document.querySelectorAll("[data-lang]").forEach((b) =>
  b.addEventListener("click", () => setLanguage(b.dataset.lang))
);

let saved = null;
try { saved = localStorage.getItem("lang"); } catch (e) {}
const browserLang = (navigator.language || "en").slice(0, 2);
setLanguage(TRANSLATIONS[saved] ? saved : TRANSLATIONS[browserLang] ? browserLang : "en");

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", open);
});
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    links.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// Nav border on scroll
const nav = document.querySelector(".nav");
const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 10);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Rotating words in the hero card
const words = [...document.querySelectorAll(".words li")];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let w = 0;
if (words.length) {
  words[0].classList.add("is-on");
  if (!reduceMotion) {
    setInterval(() => {
      words[w].classList.remove("is-on");
      words[w].classList.add("is-off");
      const prev = words[w];
      setTimeout(() => prev.classList.remove("is-off"), 700);
      w = (w + 1) % words.length;
      words[w].classList.add("is-on");
    }, 2200);
  }
}

// Reveal on scroll
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}
