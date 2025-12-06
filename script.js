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

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(255, 107, 53, 0.2)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for animation
document.querySelectorAll('.mode-card, .feature-card, .info-card, .contact-item').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add active state to nav links based on scroll position
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

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = '#FF6B35';
        } else {
            link.style.color = '#E8E8E8';
        }
    });
});

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Animate stat boxes on load
    const statBoxes = document.querySelectorAll('.stat-box h3');
    statBoxes.forEach(box => {
        const finalValue = box.textContent;
        if (finalValue !== 'FREE') {
            const numValue = parseInt(finalValue);
            let currentValue = 0;
            const increment = numValue / 20;
            const interval = setInterval(() => {
                currentValue += increment;
                if (currentValue >= numValue) {
                    box.textContent = finalValue;
                    clearInterval(interval);
                } else {
                    box.textContent = Math.floor(currentValue);
                }
            }, 50);
        }
    });
});

// Parallax effect on hero section
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (window.scrollY < 1000) {
        hero.style.backgroundPosition = '0 ' + (window.scrollY * 0.5) + 'px';
    }
});

console.log('Invasion Zero website loaded successfully!');
