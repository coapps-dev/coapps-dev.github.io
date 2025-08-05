document.addEventListener('DOMContentLoaded', function() {
    // Cursor Spotlight Effect (only on non-touch devices)
    const spotlight = document.querySelector('.cursor-spotlight');
    let isMouseMoving = false;
    let mouseTimeout;
    
    // Check if device supports hover (not a touch device)
    const supportsHover = window.matchMedia('(hover: hover)').matches;
    
    if (spotlight && supportsHover) {
        // Track mouse movement
        document.addEventListener('mousemove', function(e) {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            
            // Update CSS custom properties for spotlight position
            spotlight.style.setProperty('--mouse-x', x + '%');
            spotlight.style.setProperty('--mouse-y', y + '%');
            
            // Add active class when mouse is moving
            if (!isMouseMoving) {
                spotlight.classList.add('active');
                isMouseMoving = true;
            }
            
            // Clear existing timeout
            if (mouseTimeout) {
                clearTimeout(mouseTimeout);
            }
            
            // Set timeout to fade out spotlight when mouse stops moving
            mouseTimeout = setTimeout(() => {
                spotlight.classList.remove('active');
                isMouseMoving = false;
            }, 2000); // Fade out after 2 seconds of no movement
        });
        
        // Hide spotlight when mouse leaves the window
        document.addEventListener('mouseleave', function() {
            spotlight.classList.remove('active');
            isMouseMoving = false;
            if (mouseTimeout) {
                clearTimeout(mouseTimeout);
            }
        });
        
        // Show spotlight when mouse enters the window
        document.addEventListener('mouseenter', function() {
            spotlight.classList.add('active');
        });
    }

    // Simple navbar scroll effect
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(0, 0, 0, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        scrollTimeout = setTimeout(() => {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
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

    // Floating Shapes Animation
    const floatingShapesContainer = document.querySelector('.floating-shapes');
    
    function createFloatingShape() {
        if (!floatingShapesContainer) return;
        
        const shape = document.createElement('div');
        const shapeTypes = ['circle', 'square', 'triangle'];
        const randomType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
        
        // Random size between 20px and 60px
        const size = Math.random() * 40 + 20;
        
        // Random starting position from left or right side
        const startFromLeft = Math.random() > 0.5;
        const startX = startFromLeft ? -100 : window.innerWidth + 100;
        const startY = Math.random() * window.innerHeight;
        
        // Random end position
        const endX = startFromLeft ? window.innerWidth + 100 : -100;
        const endY = startY + (Math.random() - 0.5) * 200;
        
        shape.className = `floating-shape ${randomType}`;
        
        if (randomType === 'triangle') {
            shape.style.width = '0';
            shape.style.height = '0';
            shape.style.borderLeft = `${size/2}px solid transparent`;
            shape.style.borderRight = `${size/2}px solid transparent`;
            shape.style.borderBottom = `${size}px solid rgba(255, 255, 255, 0.1)`;
        } else {
            shape.style.width = `${size}px`;
            shape.style.height = `${size}px`;
        }
        
        shape.style.left = `${startX}px`;
        shape.style.top = `${startY}px`;
        
        // Custom animation for this shape
        shape.style.animation = `float-in 8s ease-out forwards`;
        
        floatingShapesContainer.appendChild(shape);
        
        // Remove shape after animation completes
        setTimeout(() => {
            if (shape.parentNode) {
                shape.parentNode.removeChild(shape);
            }
        }, 8000);
    }
    
    // Create shapes at random intervals
    function startFloatingShapes() {
        // Create initial shapes
        setTimeout(createFloatingShape, 1000);
        setTimeout(createFloatingShape, 3000);
        setTimeout(createFloatingShape, 5000);
        
        // Continue creating shapes at random intervals
        setInterval(() => {
            if (Math.random() > 0.7) { // 30% chance every interval
                createFloatingShape();
            }
        }, 4000);
    }
    
    // Start the floating shapes after a delay
    setTimeout(startFloatingShapes, 2000);
}); 