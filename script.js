
document.addEventListener('DOMContentLoaded', function() {
    // Header Scroll Effect
    const header = document.querySelector('header.header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset > 50;
            header.classList.toggle('scrolled', scrolled);
        });
    }

    const typedElements = document.querySelectorAll('.text');
    if (typedElements.length > 0) {
        // Initialize Typed.js only if elements exist
        new Typed('.text', {
            strings: ["Research", "Discussion", "Information", "Literacy"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
    }
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


// Feedback Queries

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    var fullName = document.querySelector('input[name="fullName"]').value;
    var emailAddress = document.querySelector('input[name="emailAddress"]').value;
    var message = document.querySelector('textarea[name="message"]').value;

    // Create the data object
    var formData = {
        'fullName': fullName,
        'emailAddress': emailAddress,
        'message': message
     };

    // Google Apps Script Web App URL
    var scriptURL = 'https://script.google.com/macros/s/AKfycbxQGIn-0jF48F6toq6rKen4Zc6IktdqIB_zXlmj66DBXET4sYcLz13DQFEztGzOaHdd/exec';

    // Make the POST request
    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors', 
        body: new URLSearchParams(formData)
    })
    
    .then(response => {
        // The server returns a plain text string, so we use response.text()
        console.log('Success!', response);
        alert('Thank you for your feedback!'); // Optional: display a success message
        document.getElementById('feedbackForm').reset(); // Clear the form
    })
    // .catch(error => {
    //      console.error('Error!', error.message);
    //     alert('An error occurred. Please try again later.');
    // });
});

