// mobil menu
function toggleMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const hamburger = document.querySelector('.hamburger-menu');
    
    mobileNav.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// klik event på hamburger menu
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    // Lukker menu når man klikker på et link
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('mobileNav').classList.remove('active');
            document.querySelector('.hamburger-menu').classList.remove('active');
        });
    });

    // anmeldelser slider
    const reviewsSlider = document.querySelector('.reviews-slider');
    if (reviewsSlider) {
        let isDown = false;
        let startX;
        let scrollLeft;

        reviewsSlider.addEventListener('mousedown', (e) => {
            isDown = true;
            reviewsSlider.style.cursor = 'grabbing';
            startX = e.pageX - reviewsSlider.offsetLeft;
            scrollLeft = reviewsSlider.scrollLeft;
        });

        reviewsSlider.addEventListener('mouseleave', () => {
            isDown = false;
            reviewsSlider.style.cursor = 'grab';
        });

        reviewsSlider.addEventListener('mouseup', () => {
            isDown = false;
            reviewsSlider.style.cursor = 'grab';
        });

        reviewsSlider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - reviewsSlider.offsetLeft;
            const walk = (x - startX) * 2;
            reviewsSlider.scrollLeft = scrollLeft - walk;
        });

        // Touch events til mobil
        let touchStartX = 0;
        let touchScrollLeft = 0;

        reviewsSlider.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].pageX;
            touchScrollLeft = reviewsSlider.scrollLeft;
        });

        reviewsSlider.addEventListener('touchmove', (e) => {
            const touchX = e.touches[0].pageX;
            const walk = (touchStartX - touchX) * 1.5;
            reviewsSlider.scrollLeft = touchScrollLeft + walk;
        });
    }
});