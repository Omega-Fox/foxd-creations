document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");

  const projects = [
    {
      title: "Terminal Dashboard",
      description: "A CLI-based interface for server monitoring.",
      image: "https://via.placeholder.com/300x200?text=Project+1"
    },
    {
      title: "Dark Web App UI",
      description: "Fully responsive dark-themed admin panel.",
      image: "https://via.placeholder.com/300x200?text=Project+2"
    },
    {
      title: "Portfolio Redesign",
      description: "My journey into sleek, modern design.",
      image: "https://via.placeholder.com/300x200?text=Project+3"
    }
  ];

  projects.forEach(({ title, description, image }) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${image}" alt="${title}" />
      <h3>${title}</h3>
      <p>${description}</p>
    `;
    grid.appendChild(card);
  });

  const form = document.getElementById("form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Thanks! I’ll be in touch soon.");
      form.reset();
    });
  }
});
