// Video carousel autoplay when in view
function setupVideoCarouselAutoplay() {
    const carouselVideos = document.querySelectorAll('.results-carousel video');
    if (carouselVideos.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                video.play().catch(e => console.log('Autoplay prevented:', e));
            } else {
                video.pause();
            }
        });
    }, { threshold: 0.5 });

    carouselVideos.forEach(video => observer.observe(video));
}

$(document).ready(function() {
    setupSmoothScrolling();

    var options = {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        draggable: true,
        swipe: true,
        animation: 'slide',
        perPage: 1,
        perPageCustom: [[768, 1], [1024, 1]],
        speed: 800,
    };

    var carousels = bulmaCarousel.attach('.carousel', options);
    bulmaSlider.attach();
    setupVideoCarouselAutoplay();

    // Scroll-triggered fade-in animations
    const animatedElements = document.querySelectorAll('[data-animation]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    animatedElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Video interaction effects
    document.querySelectorAll('video').forEach(video => {
        video.addEventListener('play', function() {
            this.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.3)';
        });
        video.addEventListener('pause', function() {
            this.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)';
        });
        video.addEventListener('loadstart', function() { this.style.opacity = 0.7; });
        video.addEventListener('canplay',   function() { this.style.opacity = 1; });
    });

    // Keyboard navigation for carousel
    $(document).keydown(function(e) {
        if (carousels && carousels.length > 0) {
            if (e.which === 37) { carousels[0].previous(); e.preventDefault(); }
            if (e.which === 39) { carousels[0].next();     e.preventDefault(); }
        }
    });

    // Touch swipe enhancement
    let startX = 0, startY = 0;
    $('.carousel').on('touchstart', function(event) {
        const touch = event.originalEvent.touches[0];
        startX = touch.clientX;
        startY = touch.clientY;
    });
    $('.carousel').on('touchmove', function(event) {
        if (!startX) return;
        const touch = event.originalEvent.touches[0];
        if (Math.abs(startX - touch.clientX) > Math.abs(startY - touch.clientY)) {
            event.preventDefault();
        }
    });
});
