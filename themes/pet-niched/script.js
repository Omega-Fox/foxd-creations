document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  const revealSections = () => {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        section.classList.add("visible");
      }
    });
  };

  // Trigger on scroll and initial load
  window.addEventListener("scroll", revealSections);
  revealSections();
});
