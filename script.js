// Booking Form Handler
document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form data
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    service: document.getElementById('service').value,
    date: document.getElementById('date').value,
    time: document.getElementById('time').value,
    passengers: document.getElementById('passengers').value,
    location: document.getElementById('location').value,
    destination: document.getElementById('destination').value,
    message: document.getElementById('message').value
  };
  
  // Create mailto link with booking details
  const emailBody = `
Booking Request from: ${formData.name}

Contact Information:
Email: ${formData.email}
Phone: ${formData.phone}

Booking Details:
Service: ${formData.service}
Date: ${formData.date}
Time: ${formData.time}
Number of Passengers: ${formData.passengers}
Pickup Location: ${formData.location}
Destination: ${formData.destination}

Special Requests:
${formData.message || 'None'}
  `;
  
  // Send email via mailto
  window.location.href = `mailto:premierchauffeurscontact@gmail.com?subject=New Booking Request from ${formData.name}&body=${encodeURIComponent(emailBody)}`;
  
  // Show confirmation message
  alert('Thank you for your booking request! We will contact you soon to confirm.');
  this.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add active state to navigation
window.addEventListener('scroll', function() {
  let current = '';
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });
  
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// Set minimum date to today
const dateInput = document.getElementById('date');
if (dateInput) {
  const today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('min', today);
}