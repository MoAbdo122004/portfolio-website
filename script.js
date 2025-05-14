document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  // Toggle mobile menu
  menuToggle.addEventListener('click', function () {
    mobileMenu.classList.toggle('show');
    this.setAttribute('aria-expanded', mobileMenu.classList.contains('show'));
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });

        // Close mobile menu after navigation
        if (mobileMenu.classList.contains('show')) {
          mobileMenu.classList.remove('show');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });
});