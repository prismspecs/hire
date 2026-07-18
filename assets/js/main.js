
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

