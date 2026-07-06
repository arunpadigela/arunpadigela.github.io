// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("open");
  navLinks.classList.toggle("open");
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

// Hide nav on scroll down, show on scroll up
let lastScroll = 0;
const navWrap = document.querySelector(".nav-wrap");

window.addEventListener("scroll", () => {
  const current = window.scrollY;
  if (current > lastScroll && current > 120 && !navLinks.classList.contains("open")) {
    navWrap.classList.add("hidden");
  } else {
    navWrap.classList.remove("hidden");
  }
  lastScroll = current;
});

// Reveal sections on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
