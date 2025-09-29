// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const navOverlay = document.querySelector(".nav-overlay");
const navLinks = document.querySelectorAll(".nav-links a");

// Toggle menu function
function toggleMenu() {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
  navOverlay.classList.toggle("active");

  // Update aria-expanded attribute
  const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", !isExpanded);
}

// Event listeners
hamburger.addEventListener("click", toggleMenu);
navOverlay.addEventListener("click", toggleMenu);

// Close menu when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (nav.classList.contains("active")) {
      toggleMenu();
    }
  });
});

// Close menu when pressing Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && nav.classList.contains("active")) {
    toggleMenu();
  }
});

// Back to Top Button (vanilla JS version)
const backToTopBtn = document.getElementById("scroll");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add("visible");
  } else {
    backToTopBtn.classList.remove("visible");
  }
});

backToTopBtn.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const items = document.querySelectorAll(".timeline-item");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

items.forEach((item) => observer.observe(item));

const navToggle = document.querySelector(".nav-toggle");
const overlay = document.querySelector(".nav-overlay");

overlay.addEventListener("click", () => {
  navToggle.checked = false;
});

document.getElementById("scroll").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});

const modal = document.getElementById("event-modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".close-button");

// Event listener setup for calendar + mobile
function setupEventListeners(selector) {
  document.querySelectorAll(selector).forEach((item) => {
    item.addEventListener("click", () => {
      // Multi-event day
      if (item.classList.contains("multi-event")) {
        const events = item.querySelectorAll(".event-item");
        let content = "";

        events.forEach((ev) => {
          const extraClass = ev.classList.contains("social") ? " social" : "";
          content += `
            <div class="modal-event${extraClass}">
              <h2>${ev.dataset.title}</h2>
              <p><strong>Date:</strong> ${ev.dataset.date}</p>
              <p><strong>Time:</strong> ${ev.dataset.time}</p>
              <p><strong>Location:</strong> ${ev.dataset.location}</p>
            </div>
          `;
        });

        modalBody.innerHTML = `<div class="modal-event-wrapper">${content}</div>`;
      }
      // Single-event day
      else {
        modalBody.innerHTML = `
          <div class="modal-event">
            <h2>${item.dataset.title}</h2>
            <p><strong>Date:</strong> ${item.dataset.date}</p>
            <p><strong>Time:</strong> ${item.dataset.time}</p>
            <p><strong>Location:</strong> ${item.dataset.location}</p>
          </div>
        `;
      }

      // Show modal
      modal.style.display = "flex";
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });

    // Allow Enter key to trigger
    item.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        item.click();
      }
    });
  });
}

// Setup for both desktop and mobile
setupEventListeners(".calendar .event, .calendar .multi-event");
setupEventListeners(".mobile-event");

// Close button
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "auto";
});

// Click outside to close
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "auto";
  }
});
