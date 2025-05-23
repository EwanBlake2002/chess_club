// Close mobile menu when clicking a link
const navCheckbox = document.querySelector('.nav-container .checkbox');
const navLinks = document.querySelectorAll('.menu-items a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navCheckbox.checked = false;
    });
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