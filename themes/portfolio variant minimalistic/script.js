const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! I’ll get back to you soon.");
    e.target.reset();
  });
}

const projects = [
  {
    title: "Glow UI Kit",
    image: "assets/project1.jpg",
    description: "Minimalist interface kit for developers."
  },
  {
    title: "Darkfolio",
    image: "assets/project2.jpg",
    description: "A sleek dark-themed portfolio template."
  },
  {
    title: "Scriptcraft",
    image: "assets/project3.jpg",
    description: "JS utilities for creative coders."
  }
];

const grid = document.querySelector(".project-grid");
projects.forEach(p => {
  const el = document.createElement("div");
  el.className = "project";
  el.innerHTML = `
    <img src="${p.image}" alt="${p.title}" onerror="this.src='https://via.placeholder.com/300?text=Image+Not+Found';">
    <h3>${p.title}</h3>
    <p>${p.description}</p>
  `;
  grid.appendChild(el);
});
