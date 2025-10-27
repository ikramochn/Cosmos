document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar_two');
  
      if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  });
  