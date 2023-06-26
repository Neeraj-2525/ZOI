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


  // ******* horizontal bar ********

  const prevScrollButton = document.getElementById('prevScrollButton');

  window.addEventListener('scroll', () => {
    if (window.scrollX > 0) {
      prevScrollButton.classList.add('show');
    } else {
      prevScrollButton.classList.remove('show');
    }
  });
  