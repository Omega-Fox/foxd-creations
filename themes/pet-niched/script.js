document.addEventListener("DOMContentLoaded", () => {
  // Scroll Reveal
  const revealSections = () => {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section, i) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85 && !section.classList.contains("visible")) {
        section.classList.add("visible");
        section.style.transitionDelay = `${i * 0.1}s`;
      }
    });
  };

  window.addEventListener("scroll", revealSections);
  revealSections();

  // Theme Toggle
  const themeSwitch = document.getElementById("theme-switch");
  const body = document.body;

  if (localStorage.getItem("theme") === "pastel") {
    body.classList.add("pastel");
    themeSwitch.checked = true;
  }

  themeSwitch.addEventListener("change", () => {
    body.classList.toggle("pastel", themeSwitch.checked);
    localStorage.setItem("theme", themeSwitch.checked ? "pastel" : "classic");
  });

  // Parallax Effect
  const heroOverlay = document.querySelector(".hero-overlay");
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    if (heroOverlay) {
      heroOverlay.style.transform = `translateY(${scrollY * 0.2}px)`;
      heroOverlay.style.opacity = `${1 - scrollY / 600}`;
    }
  });

  // Button Click Animation
  document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.add("clicked");
      setTimeout(() => btn.classList.remove("clicked"), 300);
    });
  });
});
