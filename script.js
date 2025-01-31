// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Get the button
const backToTopButton = document.getElementById('back-to-top');

// Show the button when the user scrolls down
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {  // When the page is scrolled down 300px or more
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

// Scroll to the top when clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
