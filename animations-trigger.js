// triggers when entering in the viewport
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add(entry.target.getAttribute('data-animation'));
        }
    });
});

// triggers when centered in the viewport
const viewportCenter = window.innerHeight / 2;
function checkCentered() {
    const cards = document.querySelectorAll('.ux-tool-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distanceFromCenter = Math.abs(viewportCenter - cardCenter);
        console.log(distanceFromCenter);

        if (distanceFromCenter < 100) { // 50px di tolleranza
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 0 20px 0px rgba(0, 0, 0, 0.35)';
        } else {
            card.style.transform = '';
            card.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
        }
    });
}

const animable = document.querySelectorAll('.animate');
animable.forEach((element) => {
    element.style.opacity = 0;
    observer.observe(element);
});

if(window.innerWidth <= 768)
    window.addEventListener('scroll', checkCentered);