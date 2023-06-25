// To change the background of navbar
window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navbar');
    let scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

