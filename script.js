document.addEventListener('DOMContentLoaded', () => {
    var Typed= new Typed(".text",{
    strings:["Innovation", "Discussion", "Information", "Visualization"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
    });
});
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        const headerHeight = document.querySelector('.header').offsetHeight;
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - headerHeight,
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu
        if (window.innerWidth <= 768) {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        }
    });
});

// Mobile menu toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});
