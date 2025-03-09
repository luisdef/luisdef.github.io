document.addEventListener("DOMContentLoaded", function () {
  const mainText = document.querySelector("p.description");
  const htmlElement = document.documentElement;

  function loadLanguage(lang) {
    fetch(`./assets/js/${lang}.json`)
      .then((response) => response.json())
      .then((data) => {
        mainText.textContent = data.main.intro;
        htmlElement.setAttribute("lang", lang);
      })
      .catch((error) => console.error("Error loading language file:", error));
  }

  document.querySelector("a#pt").addEventListener("click", (e) => {
    e.preventDefault();
    loadLanguage("pt");
  });

  document.querySelector("a#en").addEventListener("click", (e) => {
    e.preventDefault();
    loadLanguage("en");
  });
});
