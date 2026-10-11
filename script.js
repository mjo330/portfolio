const menuToggle = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    const setMenuOpen = (isOpen) => {
        menuToggle.classList.toggle('active', isOpen);
        navMenu.classList.toggle('active', isOpen);
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    };

    menuToggle.addEventListener('click', () => {
        setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
    });

    navMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => setMenuOpen(false));
    });
}

const currentYear = document.getElementById('year');
if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
}

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('#about, #projects, #experience, #involvement, #interests, #skills, #resume, #contact');

if ('IntersectionObserver' in window && navLinks.length && sections.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            navLinks.forEach((link) => {
                const isActive = link.getAttribute('href') === `#${entry.target.id}`;
                link.classList.toggle('active', isActive);
            });
        });
    }, {
        rootMargin: '-25% 0px -60% 0px'
    });

    sections.forEach((section) => sectionObserver.observe(section));
}
