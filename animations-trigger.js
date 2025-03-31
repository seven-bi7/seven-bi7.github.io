const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.getAnimations().forEach(animation => {
                animation.play();
            });
        }
    });
});

const animable = document.querySelectorAll('.animate');
animable.forEach((element) => observer.observe(element));