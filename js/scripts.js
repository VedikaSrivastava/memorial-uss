// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation for Testimonials on Scroll
const testimonials = document.querySelectorAll('.testimonial');
const options = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, options);

testimonials.forEach(testimonial => {
    observer.observe(testimonial);
});


(function() {
    emailjs.init('soCFT8uxl7SscaylW');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const statusMessage = document.getElementById('status-message');
        statusMessage.textContent = 'Sending...';

        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(() => {
                statusMessage.textContent = 'Message sent successfully!';
                statusMessage.style.color = 'green';
                document.getElementById('contact-form').reset();
            }, (error) => {
                statusMessage.textContent = 'Failed to send message. Please try again later.';
                statusMessage.style.color = 'red';
                console.error('EmailJS error:', error);
            });
    });
};