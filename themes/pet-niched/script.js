document.addEventListener("DOMContentLoaded", () => {
  // === Scroll Reveal ===
  const sections = document.querySelectorAll(".section");

  const revealSections = () => {
    sections.forEach((section, i) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85 && !section.classList.contains("visible")) {
        section.classList.add("visible");
        section.style.transitionDelay = `${i * 0.1}s`; // staggered fade-in
      }
    });
  };

  window.addEventListener("scroll", revealSections);
  revealSections();

  // === Theme Toggle ===
  const themeSwitch = document.getElementById("theme-switch");
  const body = document.body;

  // Check saved theme
  if (localStorage.getItem("theme") === "pastel") {
    body.classList.add("pastel");
    themeSwitch.checked = true;
  }

  themeSwitch.addEventListener("change", () => {
    if (themeSwitch.checked) {
      body.classList.add("pastel");
      localStorage.setItem("theme", "pastel");
    } else {
      body.classList.remove("pastel");
      localStorage.setItem("theme", "classic");
    }
  });

  // === Hero Text Parallax ===
  const heroOverlay = document.querySelector(".hero-overlay");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    if (heroOverlay) {
      heroOverlay.style.transform = `translateY(${scrollY * 0.2}px)`;
      heroOverlay.style.opacity = `${1 - scrollY / 600}`;
    }
  });

  // === Button Click Pulse ===
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.add("clicked");
      setTimeout(() => btn.classList.remove("clicked"), 300);
    });
  });
});
