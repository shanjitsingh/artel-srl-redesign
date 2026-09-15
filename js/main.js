document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
    });

    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => links.classList.remove("open"));
    });
  }

  const dropdowns = document.querySelectorAll(".nav-dropdown details");
  document.addEventListener("click", (event) => {
    dropdowns.forEach((details) => {
      if (details.open && !details.contains(event.target)) {
        details.open = false;
      }
    });
  });
});
