
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add(entry.target.getAttribute('data-animation'));
        }
    });
});

const animable = document.querySelectorAll('.animate');
animable.forEach((element) => {
    element.style.opacity = 0;
    observer.observe(element);
});