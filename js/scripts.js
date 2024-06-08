// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start' 
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

// // EmailJS Integration
// (function() {
//     emailjs.init('soCFT8uxl7SscaylW');
// })();

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


// Add Firebase configuration and initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDNckNxwZ0t8TyNMbcRYup2qOoEOjepoQ4",
    authDomain: "memorial-uss-d78f9.firebaseapp.com",
    projectId: "memorial-uss-d78f9",
    storageBucket: "memorial-uss-d78f9.appspot.com",
    messagingSenderId: "960015456761",
    appId: "1:960015456761:web:d56977c6ea4f56ae154528",
    measurementId: "G-QHEPN0X28H"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

window.onload = function() {
    // Fetch and display testimonials on index.html
    // fetchAndDisplayTestimonials();

    // Handle form submission for tributes
    document.getElementById('tribute-form').addEventListener('submit', function(event) {
        event.preventDefault();

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var relation = document.getElementById('relation').value;
        var message = document.getElementById('message').value;
        var statusMessage = document.getElementById('status-message');

        db.collection('tributes').doc(email).set({
            name: name,
            relation: relation,
            message: message,
            status: "pending"
        })
        .then(function() {
            statusMessage.textContent = 'Tribute submitted successfully!';
            statusMessage.style.color = 'green';
            document.getElementById('tribute-form').reset();
        })
        .catch(function(error) {
            statusMessage.textContent = 'Error submitting tribute: ' + error.message;
            statusMessage.style.color = 'red';
        });
    });

    // Fetch and display all tributes on tributes.html
    fetchAndDisplayAllTributes();

    // Refresh testimonials every 30 seconds
    // setInterval(fetchAndDisplayTestimonials, 30000);
};

// function fetchAndDisplayTestimonials() {
//     db.collection('tributes').limit(3).get().then((querySnapshot) => {
//         var testimonialsContainer = document.getElementById('testimonials-container');
//         testimonialsContainer.innerHTML = '';
//         querySnapshot.forEach((doc) => {
//             var data = doc.data();
//             testimonialsContainer.innerHTML += `
//                 <div class="testimonial">
//                     <p>"${data.message}"</p>
//                     <h5>- ${data.name} (${data.relation})</h5>
//                 </div>
//             `;
//         });
//     });
// }

function fetchAndDisplayAllTributes() {
    db.collection('tributes').where('status', '==', 'approved').get().then((querySnapshot) => {
        var tributesContainer = document.getElementById('testimonials-container');
        tributesContainer.innerHTML = '';
        querySnapshot.forEach((doc) => {
            var data = doc.data();
            tributesContainer.innerHTML += `
                <div class="testimonial">
                    <p>"${data.message}"</p>
                    <h5>- ${data.name} (${data.relation})</h5>
                </div>
            `;
        });
    });
}




