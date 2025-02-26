// script.js

// =============== 1. Smooth Scrolling ===============
function initSmoothScrolling() {
    const anchors = document.querySelectorAll('a[href^="#"]');
    
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// =============== 2. Scroll Animations ===============
function initScrollAnimations() {
    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    const elementsToAnimate = document.querySelectorAll('.product-card, .hero-content, .grid-title');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
}

// =============== 3. Navbar Scroll Effect ===============
function initNavbarEffect() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        if (currentScroll > lastScroll && currentScroll > 80) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
}

// =============== 4. Loading Animation ===============
function initLoadingAnimation() {
    const loader = document.getElementById('loader');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 1000);
    });
}

// =============== Initialize Everything ===============
function initializeWebsite() {
    initSmoothScrolling();
    initScrollAnimations();
    initNavbarEffect();
    initLoadingAnimation();
}

// Start everything when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeWebsite);
document.querySelector('.contact-us').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
});
// Add this function to script.js
function scrollToContact() {
    const helpDesk = document.getElementById('help-desk');
    if (helpDesk) {
        helpDesk.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}