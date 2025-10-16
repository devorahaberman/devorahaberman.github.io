// Simple scroll effect for navbar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.9)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.7)";
  }
});
