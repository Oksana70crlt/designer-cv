const languageButtons = document.querySelectorAll("[data-lang]");
const translatableElements = document.querySelectorAll("[data-i18n]");

function setLanguage(language) {
  document.documentElement.lang = language;

  translatableElements.forEach((element) => {
    const key = element.dataset.i18n;
    const translation = translations[language][key];

    if (translation) {
      element.textContent = translation;
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", isActive);
  });

  localStorage.setItem("language", language);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const language = button.dataset.lang;

    setLanguage(language);
  });
});

const savedLanguage = localStorage.getItem("language") || "en";

setLanguage(savedLanguage);
