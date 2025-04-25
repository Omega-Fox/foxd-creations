// Wait until the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thanks for reaching out! I'll get back to you soon.");
      form.reset();
    });
  }

  // Project data (you can add as many as you like)
  const projects = [
    {
      title: "Portfolio Redesign",
      image: "assets/project1.jpg",
      description: "A sleek rebuild of my personal site, focused on responsive design and elegant interactions."
    },
    {
      title: "Landing Page UI",
      image: "assets/project2.jpg",
      description: "A minimalist, high-converting landing page for a startup’s beta product."
    },
    {
      title: "Dashboard Prototype",
      image: "assets/project3.jpg",
      description: "Built a data dashboard with dark mode and clean visuals using HTML, CSS, and vanilla JS."
    }
  ];

  const projectGrid = document.querySelector(".project-grid");

  if (projectGrid) {
    projects.forEach(project => {
      const projectEl = document.createElement("div");
      projectEl.classList.add("project");

      projectEl.innerHTML = `
        <img src="${project.image}" alt="${project.title}" onerror="this.src='https://via.placeholder.com/300x200?text=Image+Unavailable';">
        <h4>${project.title}</h4>
        <p>${project.description}</p>
      `;

      projectGrid.appendChild(projectEl);
    });
  }
});
