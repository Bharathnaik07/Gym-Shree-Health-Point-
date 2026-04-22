// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
}

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if(navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});

// Sticky Navbar & Scroll to Top functionality
const navbar = document.getElementById('navbar');
const scrollTop = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(5, 5, 5, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';
    }

    if (window.scrollY > 500) {
        scrollTop.classList.add('show');
    } else {
        scrollTop.classList.remove('show');
    }
});

// Scroll Animation using Intersection Observer
const fadeElements = document.querySelectorAll('.fade-in');
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeElements.forEach(el => observer.observe(el));

// Gallery Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.querySelector('.close-lightbox');
const galleryItems = document.querySelectorAll('.gallery-item');

if (galleryItems.length > 0 && lightbox) {
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = item.src;
        });
    });

    closeLightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = 'none';
        }
    });
}

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(faq => faq.classList.remove('active'));
            
            // Open clicked if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    }
});

// BMI Calculator Logic
function calculateBMI() {
    const weightInput = document.getElementById('bmi-weight');
    const heightInput = document.getElementById('bmi-height');
    const resultDiv = document.getElementById('bmi-result');

    if (!weightInput || !heightInput || !resultDiv) return;

    const weight = parseFloat(weightInput.value);
    const heightCm = parseFloat(heightInput.value);

    // Validation
    if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        resultDiv.innerHTML = '<span style="color: #ff4d4d;">Please enter valid numbers.</span>';
        return;
    }

    const heightM = heightCm / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(1);
    
    let category = '';
    let color = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        color = '#3498db'; // blue
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal Weight';
        color = '#2ecc71'; // green
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
        color = '#f1c40f'; // orange/yellow
    } else {
        category = 'Obese';
        color = '#e74c3c'; // red
    }

    resultDiv.innerHTML = `Your BMI: <span style="color: ${color}">${bmi} (${category})</span>`;
}
