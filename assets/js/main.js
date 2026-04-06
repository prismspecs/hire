
// Slideshow on project thumbnails — click left/right halves to navigate
document.querySelectorAll('.project-thumb').forEach(thumb => {
    const slides = thumb.querySelectorAll('.thumb-slide');
    if (slides.length <= 1) return;

    let current = 0;

    function goTo(index) {
        slides[current].classList.remove('active');
        current = (index + slides.length) % slides.length;
        slides[current].classList.add('active');
    }

    const prev = thumb.querySelector('.slide-zone-prev');
    const next = thumb.querySelector('.slide-zone-next');
    if (prev) prev.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); goTo(current - 1); });
    if (next) next.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); goTo(current + 1); });
});

// Smooth scrolling with navbar offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = targetPosition - navHeight - 20; // 20px extra padding

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.project-row, .image-container').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
