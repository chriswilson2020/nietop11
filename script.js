(function () {
  const root = document.documentElement;
  const toggle = document.querySelector('[data-toggle-language]');
  const label = document.querySelector('[data-lang-label]');

  function setLanguage(lang) {
    root.setAttribute('data-lang', lang);
    root.setAttribute('lang', lang);
    if (label) label.textContent = lang === 'nl' ? 'English' : 'Nederlands';
    try { localStorage.setItem('nietop11-language', lang); } catch (e) {}
  }

  let preferred = 'nl';
  try { preferred = localStorage.getItem('nietop11-language') || 'nl'; } catch (e) {}
  setLanguage(preferred === 'en' ? 'en' : 'nl');

  if (toggle) {
    toggle.addEventListener('click', () => {
      setLanguage(root.getAttribute('data-lang') === 'nl' ? 'en' : 'nl');
    });
  }
})();
