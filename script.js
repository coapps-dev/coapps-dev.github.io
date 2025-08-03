document.addEventListener('DOMContentLoaded', function() {
    // Simple navbar scroll effect
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        scrollTimeout = setTimeout(() => {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }, 150);
    });

    // Simple logo hover effect
    const logo = document.querySelector('.logo-text');
    if (logo) {
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // Status dot animation
    const statusDot = document.querySelector('.status-dot');
    if (statusDot) {
        statusDot.style.boxShadow = '0 0 10px rgba(236, 253, 245, 0.5)';
    }

    // Simple fade in for hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(20px)';
        heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
}); 