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

document.querySelectorAll('.nav-links .dropdown > a').forEach(link => {
    link.addEventListener('click', e => {
        const parent = link.parentElement;
        const expanded = link.getAttribute('aria-expanded') === 'true';
        link.setAttribute('aria-expanded', !expanded);
        parent.classList.toggle('open');
        e.preventDefault(); // prevent default link behavior
    });
});

const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

faders.forEach(fade => observer.observe(fade));