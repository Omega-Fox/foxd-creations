document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thanks! I’ll be in touch shortly.");
      form.reset();
    });
  }

  const projects = [
    {
      title: "Product Landing Page",
      image: "assets/project1.jpg",
      description: "A minimalist product page built for speed and clarity."
    },
    {
      title: "Portfolio Template",
      image: "assets/project2.jpg",
      description: "Custom-designed for freelance creatives and developers."
    },
    {
      title: "Marketing Microsite",
      image: "assets/project3.jpg",
      description: "Responsive, mobile-first site with smooth animations."
    }
  ];

  const grid = document.querySelector(".project-grid");
  if (grid) {
    projects.forEach(p => {
      const el = document.createElement("div");
      el.className = "project";
      el.innerHTML = `
        <img src="${p.image}" alt="${p.title}" onerror="this.src='https://via.placeholder.com/300?text=Image+Unavailable';">
        <h4>${p.title}</h4>
        <p>${p.description}</p>
      `;
      grid.appendChild(el);
    });
  }
});
