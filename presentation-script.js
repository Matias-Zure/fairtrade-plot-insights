// ===================================
// Presentation Script - Plot Insights
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all features
    initScrollReveal();
    initSmoothScroll();
    initNumberCounters();
    initParallaxEffects();
    initImageScrollZoom();
    initStoryChapters();
    
});

// ===================================
// Image Scroll Zoom (right-half pan)
// ===================================

function initImageScrollZoom() {
    const RIGHT      = '.flow-step-image--scroll-zoom';
    const LEFT       = '.flow-step-image--scroll-zoom-left';
    const TOP        = '.flow-step-image--scroll-zoom-top';
    const TOP_RIGHT  = '.flow-step-image--scroll-zoom-top-right';

    // Vertical pan (fixed x, y animates downward)
    [[RIGHT, '100%'], [LEFT, '0%']].forEach(([selector, xSide]) => {
        document.querySelectorAll(selector).forEach(container => {
            const img = container.querySelector('img');
            let animFrame = null;
            let yPercent = 20;
            let isHovering = false;

            container.addEventListener('mouseenter', () => {
                isHovering = true;
                yPercent = 20;
                img.style.transformOrigin = `${xSide} 20%`;

                function animate() {
                    if (!isHovering) return;
                    yPercent = Math.min(yPercent + 0.04, 100);
                    img.style.transformOrigin = `${xSide} ${yPercent}%`;
                    animFrame = requestAnimationFrame(animate);
                }
                animFrame = requestAnimationFrame(animate);
            });

            container.addEventListener('mouseleave', () => {
                isHovering = false;
                cancelAnimationFrame(animFrame);
                img.style.transformOrigin = `${xSide} 20%`;
                yPercent = 20;
            });
        });
    });

    // Horizontal pan (fixed y at top, x animates right → left)
    document.querySelectorAll(TOP_RIGHT).forEach(container => {
        const img = container.querySelector('img');
        let animFrame = null;
        let xPercent = 100;
        let isHovering = false;

        container.addEventListener('mouseenter', () => {
            isHovering = true;
            xPercent = 100;
            img.style.transformOrigin = `100% 20%`;

            function animate() {
                if (!isHovering) return;
                xPercent = Math.max(xPercent - 0.04, 0);
                img.style.transformOrigin = `${xPercent}% 20%`;
                animFrame = requestAnimationFrame(animate);
            }
            animFrame = requestAnimationFrame(animate);
        });

        container.addEventListener('mouseleave', () => {
            isHovering = false;
            cancelAnimationFrame(animFrame);
            img.style.transformOrigin = `100% 20%`;
            xPercent = 100;
        });
    });

    // Horizontal pan (fixed y at top, x animates left → right)
    document.querySelectorAll(TOP).forEach(container => {
        const img = container.querySelector('img');
        let animFrame = null;
        let xPercent = 0;
        let isHovering = false;

        container.addEventListener('mouseenter', () => {
            isHovering = true;
            xPercent = 0;
            img.style.transformOrigin = `0% 20%`;

            function animate() {
                if (!isHovering) return;
                xPercent = Math.min(xPercent + 0.04, 100);
                img.style.transformOrigin = `${xPercent}% 20%`;
                animFrame = requestAnimationFrame(animate);
            }
            animFrame = requestAnimationFrame(animate);
        });

        container.addEventListener('mouseleave', () => {
            isHovering = false;
            cancelAnimationFrame(animFrame);
            img.style.transformOrigin = `0% 20%`;
            xPercent = 0;
        });
    });
}

// ===================================
// Scroll Reveal Animation
// ===================================

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    // Intersection Observer for scroll-triggered animations
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

// ===================================
// Smooth Scroll for Internal Links
// ===================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

// ===================================
// Animated Number Counters
// ===================================

function initNumberCounters() {
    const numberElements = document.querySelectorAll('.stat-number, .impact-number');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateNumber(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    numberElements.forEach(element => {
        counterObserver.observe(element);
    });
}

function animateNumber(element) {
    const text = element.textContent.trim();
    const hasPlus = text.includes('+');
    const hasTilde = text.includes('~');
    const hasPercent = text.includes('%');
    
    // Extract numeric value
    let numericValue = text.replace(/[^0-9kK]/g, '');
    
    // Handle 'k' suffix
    let multiplier = 1;
    if (text.toLowerCase().includes('k')) {
        multiplier = 1000;
        numericValue = numericValue.replace(/[kK]/g, '');
    }
    
    const targetNumber = parseInt(numericValue) * multiplier;
    
    // Don't animate if it's 0 or NaN
    if (isNaN(targetNumber)) return;
    
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepValue = targetNumber / steps;
    const stepDuration = duration / steps;
    
    let currentNumber = 0;
    let currentStep = 0;
    
    const counter = setInterval(() => {
        currentStep++;
        currentNumber += stepValue;
        
        if (currentStep >= steps) {
            currentNumber = targetNumber;
            clearInterval(counter);
        }
        
        // Format the number
        let displayValue = Math.floor(currentNumber);
        
        if (multiplier === 1000) {
            displayValue = Math.floor(currentNumber / 1000) + 'k';
        }
        
        // Add prefixes/suffixes
        let finalValue = '';
        if (hasTilde) finalValue += '~';
        finalValue += displayValue;
        if (hasPlus) finalValue += '+';
        if (hasPercent) finalValue += '%';
        
        element.textContent = finalValue;
    }, stepDuration);
}

// ===================================
// Parallax Effects
// ===================================

function initParallaxEffects() {
    const parallaxElements = [
        { selector: '.hero-content', speed: 0.5 }
    ];
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(item => {
            const elements = document.querySelectorAll(item.selector);
            elements.forEach(element => {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    const yPos = -(scrolled * item.speed);
                    element.style.transform = `translateY(${yPos}px)`;
                }
            });
        });
    });
}

// ===================================
// Story Chapter Progress + Activation
// ===================================

function initStoryChapters() {
    const chapters = document.querySelectorAll('.story-chapter[data-chapter]');
    const navItems = document.querySelectorAll('.chapter-dot[data-target]');

    if (!chapters.length || !navItems.length) return;

    const chapterObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const chapterId = entry.target.dataset.chapter;
                entry.target.classList.add('in-view');
                setActiveChapter(chapterId, navItems);
            }
        });
    }, {
        threshold: 0.35,
        rootMargin: '-15% 0px -35% 0px'
    });

    chapters.forEach((chapter) => {
        chapterObserver.observe(chapter);
    });
}

function setActiveChapter(chapterId, navItems) {
    navItems.forEach((item) => {
        const active = item.dataset.target === chapterId;
        item.classList.toggle('active', active);
    });
}

// ===================================
// Keyboard Navigation
// ===================================

// Add keyboard shortcuts for presentation mode
document.addEventListener('keydown', function(e) {
    // Arrow keys to navigate sections
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        scrollToNextSection();
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        scrollToPreviousSection();
    }
});

function scrollToNextSection() {
    const sections = document.querySelectorAll('section');
    const currentScroll = window.pageYOffset;
    
    for (let i = 0; i < sections.length; i++) {
        const sectionTop = sections[i].offsetTop;
        if (sectionTop > currentScroll + 100) {
            sections[i].scrollIntoView({ behavior: 'smooth' });
            break;
        }
    }
}

function scrollToPreviousSection() {
    const sections = document.querySelectorAll('section');
    const currentScroll = window.pageYOffset;
    
    for (let i = sections.length - 1; i >= 0; i--) {
        const sectionTop = sections[i].offsetTop;
        if (sectionTop < currentScroll - 100) {
            sections[i].scrollIntoView({ behavior: 'smooth' });
            break;
        }
    }
}

// ===================================
// Loading Animation
// ===================================

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add stagger animation to hero elements
    const heroElements = document.querySelectorAll('.hero-title-line');
    heroElements.forEach((element, index) => {
        element.style.animationDelay = `${0.3 + (index * 0.2)}s`;
    });
});

// ===================================
// Performance Optimization
// ===================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add scroll progress indicator (optional)
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #00A7E1, #0088B8);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', debounce(() => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    }, 10));
}

// Initialize scroll progress
initScrollProgress();

// ===================================
// Console Easter Egg
// ===================================

console.log('%c🚀 Plot Insights Presentation', 'font-size: 24px; font-weight: bold; color: #00A7E1;');
console.log('%cDesigned & Developed by Zure', 'font-size: 14px; color: #666;');
console.log('%cInterested in working with us? Visit zure.com', 'font-size: 12px; color: #00A7E1;');
