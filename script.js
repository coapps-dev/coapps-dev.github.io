document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.floating-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    let scrollTimeout;
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        scrollTimeout = setTimeout(() => {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }, 150);
    });

    const gradientOrbs = document.querySelectorAll('.gradient-orb');
    gradientOrbs.forEach((orb, index) => {
        orb.style.animationDelay = `${index * -7}s`;
    });

    const floatingCards = document.querySelectorAll('.floating-card');
    floatingCards.forEach((card, index) => {
        card.style.animationDelay = `${index * -2}s`;
    });

    const logo = document.querySelector('.logo-text');
    if (logo) {
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    const parallaxElements = document.querySelectorAll('.gradient-orb');
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    const typingTextElement = document.querySelector('.typing-text');
    
    if (typingTextElement) {
        const fullText = "Improving Lifestyle with AI-Powered Apps";
        typingTextElement.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < fullText.length) {
                typingTextElement.textContent += fullText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 1000);
    }
}); 