// Language switcher. To add a language: add an entry below and a
// <button data-lang="xx">XX</button> to the navbar in index.html.
const TRANSLATIONS = {
  en: {
    menu: "Menu", nav_about: "About", nav_projects: "Projects", nav_contact: "Contact",
    tagline: "A free, responsive, one page Bootstrap theme created by Start Bootstrap.",
    start: "Get Started",
    about_title: "Built with Bootstrap 5",
    about_text: "Grayscale is a free Bootstrap theme created by Start Bootstrap. It can be yours right now, simply download the template on <a href='https://startbootstrap.com/theme/grayscale/'>the preview page.</a> The theme is open source, and you can use it for any purpose, personal or commercial.",
    p_shoreline: "Grayscale is open source and MIT licensed. This means you can use it for any project - even commercial projects! Download it, customize it, and publish your website!",
    p_misty: "An example of where you can put an image of a project, or anything else, along with a description.",
    p_mountains: "Another example of a project with its respective description. These sections work well responsively as well!",
    subscribe: "Subscribe to receive updates!", email_ph: "Enter email address...", notify: "Notify Me!",
    err_required: "An email is required.", err_email: "Email is not valid.",
    success: "Form submission successful!", error_send: "Error sending message!",
    address: "Address", email: "Email", phone: "Phone",
    copyright: "Copyright © Your Website 2023"
  },
  ro: {
    menu: "Meniu", nav_about: "Despre", nav_projects: "Proiecte", nav_contact: "Contact",
    tagline: "O temă Bootstrap gratuită, responsivă, pe o singură pagină, creată de Start Bootstrap.",
    start: "Începe",
    about_title: "Construit cu Bootstrap 5",
    about_text: "Grayscale este o temă Bootstrap gratuită creată de Start Bootstrap. O poți avea chiar acum, descărcând șablonul de pe <a href='https://startbootstrap.com/theme/grayscale/'>pagina de previzualizare.</a> Tema este open source și o poți folosi în orice scop, personal sau comercial.",
    p_shoreline: "Grayscale este open source și are licență MIT. Asta înseamnă că îl poți folosi în orice proiect, chiar și comercial! Descarcă-l, personalizează-l și publică-ți site-ul!",
    p_misty: "Un exemplu de loc unde poți pune imaginea unui proiect, sau orice altceva, împreună cu o descriere.",
    p_mountains: "Alt exemplu de proiect, cu descrierea lui. Aceste secțiuni se adaptează bine și pe ecrane mici!",
    subscribe: "Abonează-te pentru a primi noutăți!", email_ph: "Introdu adresa de email...", notify: "Anunță-mă!",
    err_required: "Adresa de email este obligatorie.", err_email: "Adresa de email nu este validă.",
    success: "Formular trimis cu succes!", error_send: "Eroare la trimiterea mesajului!",
    address: "Adresă", email: "Email", phone: "Telefon",
    copyright: "Drepturi de autor © Site-ul tău 2023"
  }
};

function setLanguage(lang) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t[el.dataset.i18n]; });
  document.querySelectorAll("[data-i18n-html]").forEach(el => { el.innerHTML = t[el.dataset.i18nHtml]; });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = t[el.dataset.i18nPlaceholder];
    el.setAttribute("aria-label", t[el.dataset.i18nPlaceholder]);
  });
  document.querySelectorAll("[data-lang]").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

document.querySelectorAll("[data-lang]").forEach(b =>
  b.addEventListener("click", () => setLanguage(b.dataset.lang)));

let saved = null;
try { saved = localStorage.getItem("lang"); } catch (e) {}
const browser = (navigator.language || "en").slice(0, 2);
setLanguage(TRANSLATIONS[saved] ? saved : (TRANSLATIONS[browser] ? browser : "en"));
