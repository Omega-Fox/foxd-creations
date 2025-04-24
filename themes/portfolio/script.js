// Improved script.js

// Handle Form Submission with Enhanced Feedback
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Show loading state
    const submitButton = contactForm.querySelector("button[type='submit']");
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    // Simulate async form submission
    setTimeout(() => {
      alert("Thank you for your message! We'll get back to you soon.");
      contactForm.reset();
      submitButton.disabled = false;
      submitButton.textContent = "Send";
    }, 1500);
  });
}

// Dynamically Add Projects
const projects = [
  { title: "Project One", image: "assets/project1.jpg", description: "Description of project one." },
  { title: "Project Two", image: "assets/project2.jpg", description: "Description of project two." },
  { title: "Project Three", image: "assets/project3.jpg", description: "Description of project three." },
];

const projectGrid = document.querySelector(".project-grid");

if (projectGrid) {
  projects.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");
    projectElement.innerHTML = `
      <img 
        src="${project.image}" 
        alt="${project.title}" 
        loading="lazy" 
        onerror="this.src='https://via.placeholder.com/300?text=Image+Not+Available';"
      >
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;
    projectGrid.appendChild(projectElement);
  });
}

// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll("header nav ul li a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Intersection Observer for Animations
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach((section) => {
  section.classList.add("hidden"); // Add a hidden state initially
  observer.observe(section);
});
