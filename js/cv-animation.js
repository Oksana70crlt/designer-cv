(() => {
  const cv = document.querySelector(".hero__cv");

  if (!cv) {
    return;
  }

  const updateCvPosition = () => {
    cv.classList.toggle("is-scrolled", window.scrollY > 90);
  };

  window.addEventListener("scroll", updateCvPosition, {
    passive: true,
  });

  updateCvPosition();
})();
