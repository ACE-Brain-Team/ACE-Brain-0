// Toggle mobile navbar menu
function toggleNavbarMenu() {
    const navbarMenu = document.getElementById('navbar-menu');
    const navbarBurger = document.querySelector('.navbar-burger');
    navbarMenu.classList.toggle('is-active');
    navbarBurger.classList.toggle('is-active');
}

// Smooth scrolling for anchor links in navbar
function setupSmoothScrolling() {
    const navbarItems = document.querySelectorAll('.navbar-item[href^="#"]');
    navbarItems.forEach(item => {
        item.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80;
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
            }
        });
    });
}

// Highlight active navigation item based on scroll position
function highlightActiveNav() {
    const sections = document.querySelectorAll('section[id], div[id]');
    const navLinks = document.querySelectorAll('.navbar-item[href^="#"]');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 85 && pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('is-active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('is-active');
        }
    });
}

window.addEventListener('scroll', highlightActiveNav);
