document.addEventListener('DOMContentLoaded', () => {
    // Burger menu
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  
    // Cambio lingua
    const langITA = document.getElementById('lang-ita');
    const langENG = document.getElementById('lang-eng');
  
    langITA.addEventListener('click', () => {
      langITA.classList.add('active');
      langENG.classList.remove('active');
    });
  
    langENG.addEventListener('click', () => {
      langENG.classList.add('active');
      langITA.classList.remove('active');
    });
  
    // Cambio sfondo navbar quando scrolli
    const navbar = document.getElementById('mainNavbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  });