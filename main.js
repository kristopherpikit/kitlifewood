document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Navigation Toggle
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }

    // 2. Fade-in on Scroll Animation
    const sectionsToFade = document.querySelectorAll('.fade-in-section');

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1 // Triggers when 10% of the element is visible
    });

    sectionsToFade.forEach(section => {
        sectionObserver.observe(section);
    });

});
// Wait for the entire HTML document to be loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Get references to the HTML elements we need to work with
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    // Check if both the button and the nav menu actually exist on the page
    if (menuToggle && mainNav) {
        
        // Add a 'click' event listener to the hamburger button
        menuToggle.addEventListener('click', () => {
            
            // When the button is clicked, add or remove the 'is-open' class
            // from the navigation menu. This makes it appear or disappear.
            mainNav.classList.toggle('is-open');
            
            // Also toggle the class on the button itself. This triggers the
            // CSS animation that turns the hamburger into an 'X'.
            menuToggle.classList.toggle('is-open');
        });
    }
});