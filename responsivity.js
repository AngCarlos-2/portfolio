document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.style.display = 'block';
        });
    }

    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.style.display = 'none';
        });
    }
});
