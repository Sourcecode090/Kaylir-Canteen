/* ================================
   Kaylir Canteen – Global Script
   Author: Academic + Portfolio Use
================================ */

/* -------- Smooth Page Load Fade -------- */
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 0.6s ease";
  setTimeout(() => {
    document.body.style.opacity = 1;
  }, 100);
});

/* -------- Active Navigation Highlight -------- */
const navLinks = document.querySelectorAll("nav a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.style.fontWeight = "600";
    link.style.borderBottom = "2px solid #5a3e2b";
    link.style.paddingBottom = "4px";
  }
});

/* -------- Button Hover Micro Interaction -------- */
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
    btn.style.transition = "transform 0.25s ease";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});

/* -------- Card Hover Elevation -------- */
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-6px)";
    card.style.transition = "all 0.3s ease";
    card.style.boxShadow = "0 18px 35px rgba(0,0,0,0.08)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.05)";
  });
});

/* -------- Smooth Scroll for Internal Links -------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

/* -------- Contact Page: Map Button Confirmation -------- */
const mapButton = document.querySelector('a[href*="google.com/maps"]');

if (mapButton) {
  mapButton.addEventListener("click", () => {
    console.log("Redirecting user to Google Maps location");
  });
}

