// Simple mobile navigation toggle
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('mobile-menu');
  const navUl = document.querySelector('nav ul');

  menuToggle.addEventListener('click', function () {
    navUl.classList.toggle('showing');
  });
});
