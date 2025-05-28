// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const navOverlay = document.querySelector('.nav-overlay');
const navLinks = document.querySelectorAll('.nav-links a');

// Toggle menu function
function toggleMenu() {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    navOverlay.classList.toggle('active');

    // Update aria-expanded attribute
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
}

// Event listeners
hamburger.addEventListener('click', toggleMenu);
navOverlay.addEventListener('click', toggleMenu);

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('active')) {
            toggleMenu();
        }
    });
});

// Close menu when pressing Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
        toggleMenu();
    }
});

// Back to Top Button (vanilla JS version)
const backToTopBtn = document.getElementById('scroll');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const items = document.querySelectorAll('.timeline-item');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

items.forEach(item => observer.observe(item));

const navToggle = document.querySelector('.nav-toggle');
const overlay = document.querySelector('.nav-overlay');

overlay.addEventListener('click', () => {
    navToggle.checked = false;
});

document.getElementById('scroll').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});

const modal = document.getElementById('event-modal');
const title = document.getElementById('modal-title');
const time = document.getElementById('modal-time');
const modalLocation = document.getElementById('modal-location'); // Changed variable name
const closeBtn = document.querySelector('.close-button');

// Update the event listener to work for both versions
function setupEventListeners(selector) {
    document.querySelectorAll(selector).forEach(item => {
        item.addEventListener('click', () => {
            title.textContent = item.dataset.title;
            time.textContent = `Time: ${item.dataset.time}`;
            modalLocation.textContent = `Location: ${item.dataset.location}`;
            modal.style.display = 'block';
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        });

        item.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                title.textContent = item.dataset.title;
                time.textContent = `Time: ${item.dataset.time}`;
                modalLocation.textContent = `Location: ${item.dataset.location}`;
                modal.style.display = 'block';
                modal.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden';
            }
        });
    });
}

// Set up listeners for both desktop and mobile events
setupEventListeners('.calendar .event');
setupEventListeners('.mobile-event');

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto';
    }
});