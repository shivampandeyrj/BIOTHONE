console.log('WebX Challenge project initialized.');

// Initialize Lucide icons
lucide.createIcons();

// Extend each organizing-team track so the marquee stays filled while looping.
document.querySelectorAll('.team-track').forEach(track => {
  const cards = Array.from(track.children);

  cards.forEach(card => {
    const clone = card.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    clone.querySelectorAll('a, button').forEach(control => {
      control.setAttribute('tabindex', '-1');
    });
    track.appendChild(clone);
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Interactive hover effects handled via CSS for better performance and automatic looping

// Mobile Menu Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
    const icon = navToggle.querySelector('[data-lucide]');
    if (navLinks.classList.contains('active')) {
      icon.setAttribute('data-lucide', 'x');
    } else {
      icon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      const icon = navToggle.querySelector('i');
      icon.setAttribute('data-lucide', 'menu');
      lucide.createIcons();
    });
  });
}
// Preloader removal
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    // Give it a bit of time for the splash animation to show
    setTimeout(() => {
      loader.classList.add('fade-out');
      // Remove from DOM after transition (1s) plus a small buffer
      setTimeout(() => {
        if (loader.parentNode) {
          loader.remove();
        }
      }, 1100);
    }, 2000);
  }
});
