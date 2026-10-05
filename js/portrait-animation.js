(() => {
  const portrait = document.querySelector('.hero__portrait');
  if (!portrait) return;
  // CSS выбирает планшетную ширину и учитывает reduced motion.
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    if (entries.some(entry => entry.isIntersecting)) {
      portrait.classList.add('is-revealed');
      observer.disconnect();
    }
  }, { threshold: 0.25 });
  observer.observe(portrait);
})();
