// script.js

// Example: Form Submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your message! We'll get back to you soon.");
});

// Example: Dynamically Add Projects
const projects = [
  { title: "Project One", image: "assets/project1.jpg", description: "Description of project one." },
  { title: "Project Two", image: "assets/project2.jpg", description: "Description of project two." },
  { title: "Project Three", image: "assets/project3.jpg", description: "Description of project three." },
];

const projectGrid = document.querySelector(".project-grid");

projects.forEach((project) => {
  const projectElement = document.createElement("div");
  projectElement.classList.add("project");
  projectElement.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
  `;
  projectGrid.appendChild(projectElement);
});
