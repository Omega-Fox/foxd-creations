document.addEventListener("DOMContentLoaded", () => {
  // ===== THEME TOGGLE =====
  const toggle = document.getElementById("theme-switch");
  const body = document.body;

  // Check saved theme preference
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    toggle.checked = true;
  }

  // Toggle switch event
  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  });

  // ===== PROJECTS =====
  const projects = [
    {
      title: "Portfolio Redesign",
      image: "assets/project1.jpg",
      description: "A sleek rebuild of my personal site, focused on responsive design and elegant interactions."
    },
    {
      title: "Startup Landing Page",
      image: "assets/project2.jpg",
      description: "High-converting launch page for a SaaS beta release."
    },
    {
      title: "Admin Dashboard UI",
      image: "assets/project3.jpg",
      description: "Dark mode dashboard with charts, notifications, and modular components."
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

  // ===== CONTACT FORM =====
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thanks for your message! I’ll get back to you soon.");
      form.reset();
    });
  }
});
