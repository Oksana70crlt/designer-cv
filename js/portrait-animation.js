(() => {
  const portrait = document.querySelector(".hero__portrait");

  if (!portrait) {
    return;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const primaryHalftone = portrait.querySelector(".portrait-halftone--primary");

  const playPrintEffect = () => {
    if (reducedMotion.matches) {
      return;
    }

    portrait.classList.remove("is-animating");

    void portrait.offsetWidth;

    portrait.classList.add("is-animating");
  };

  portrait.addEventListener("click", playPrintEffect);

  portrait.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    playPrintEffect();
  });

  primaryHalftone?.addEventListener("animationend", () => {
    portrait.classList.remove("is-animating");
  });
})();
