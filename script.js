// ===================================
// NAVIGATION SCROLL EFFECT
// ===================================
const nav = document.getElementById('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed nav
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// 3D PARALLAX EFFECT FOR HERO IMAGE
// ===================================
const heroImage = document.getElementById('heroImage');

if (heroImage) {
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        // Calculate rotation based on mouse position
        // Center of screen = 0 rotation
        const xRotation = ((clientY / innerHeight) - 0.5) * 20; // -10 to 10 degrees
        const yRotation = ((clientX / innerWidth) - 0.5) * -20; // -10 to 10 degrees

        // Apply 3D transform
        heroImage.style.transform = `
            perspective(1000px)
            rotateX(${xRotation}deg)
            rotateY(${yRotation}deg)
            scale3d(1.05, 1.05, 1.05)
        `;
    });

    // Reset on mouse leave
    document.addEventListener('mouseleave', () => {
        heroImage.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
}

// ===================================
// 3D TILT EFFECT FOR PROJECT CARDS
// ===================================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // -10 to 10 degrees
        const rotateY = ((x - centerX) / centerX) * 10; // -10 to 10 degrees

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-10px)
            scale3d(1.02, 1.02, 1.02)
        `;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale3d(1, 1, 1)';
    });
});

// ===================================
// PARALLAX EFFECT FOR BACKGROUND TEXT
// ===================================
const heroBgText = document.querySelector('.hero-bg-text');

if (heroBgText) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;

        heroBgText.style.transform = `translate(-50%, calc(-50% + ${scrolled * parallaxSpeed}px))`;
    });
}

// ===================================
// INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add staggered delay for multiple items
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);

            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach((element) => {
    observer.observe(element);
});

// ===================================
// DYNAMIC GRADIENT ANIMATION
// ===================================
const gradientElements = document.querySelectorAll('.gradient-text');

gradientElements.forEach(element => {
    let hue = 0;

    setInterval(() => {
        hue = (hue + 1) % 360;
        const gradient = `linear-gradient(135deg, 
            hsl(${hue}, 70%, 60%) 0%, 
            hsl(${(hue + 60) % 360}, 70%, 60%) 50%, 
            hsl(${(hue + 120) % 360}, 70%, 60%) 100%)`;

        element.style.background = gradient;
        element.style.webkitBackgroundClip = 'text';
        element.style.backgroundClip = 'text';
    }, 50);
});

// ===================================
// CURSOR TRAIL EFFECT (Optional Enhancement)
// ===================================
class CursorTrail {
    constructor() {
        this.dots = [];
        this.mouse = { x: 0, y: 0 };
        this.init();
    }

    init() {
        // Create trail dots
        for (let i = 0; i < 12; i++) {
            const dot = document.createElement('div');
            dot.className = 'cursor-dot';
            dot.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background: linear-gradient(135deg, #8b5cf6, #3b82f6);
                pointer-events: none;
                z-index: 9999;
                opacity: ${1 - (i * 0.08)};
                transition: transform 0.2s ease-out;
            `;
            document.body.appendChild(dot);
            this.dots.push({
                element: dot,
                x: 0,
                y: 0
            });
        }

        // Track mouse position
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        // Animate trail
        this.animate();
    }

    animate() {
        let x = this.mouse.x;
        let y = this.mouse.y;

        this.dots.forEach((dot, index) => {
            dot.element.style.left = x + 'px';
            dot.element.style.top = y + 'px';

            // Create trailing effect
            const nextDot = this.dots[index + 1] || this.dots[0];
            x += (nextDot.x - x) * 0.3;
            y += (nextDot.y - y) * 0.3;

            dot.x = x;
            dot.y = y;
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Initialize cursor trail (comment out if too distracting)
// new CursorTrail();

// ===================================
// PERFORMANCE OPTIMIZATION
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

// Throttle function for mouse events
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===================================
// PRELOADER & HERO REVEAL
// ===================================
window.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const hero = document.querySelector('.hero');

    // Lock scroll during preloader
    document.body.style.overflow = 'hidden';

    // 1.5 Second Loader Duration
    setTimeout(() => {
        if (loader) {
            loader.classList.add('fade-out');

            // Allow scroll again
            document.body.style.overflow = '';

            // Wait for fade animation to finish then remove from DOM
            setTimeout(() => {
                loader.style.display = 'none';

                // Trigger Hero Reveal Animation
                if (hero) {
                    hero.classList.add('revealed');
                }
            }, 800);
        }
    }, 1500);
});

// ===================================
// HERO DETAIL REVEAL (Side Details)
// ===================================
const handleHeroDetailReveal = () => {
    const sideDetails = document.querySelectorAll('.side-detail');
    const scrollY = window.scrollY;

    sideDetails.forEach(detail => {
        // Trigger reveal immediately (10px) for a snappy response
        if (scrollY > 10) {
            detail.classList.add('revealed');
        } else {
            detail.classList.remove('revealed');
        }
    });

    // Handle Socials reveal
    const socials = document.getElementById('heroSocials');
    if (socials && scrollY > 10) {
        socials.classList.add('revealed'); // Direct class on the element
    } else if (socials) {
        socials.classList.remove('revealed');
    }
};

window.addEventListener('scroll', throttle(handleHeroDetailReveal, 10));

// ===================================
// ACTIVE SECTION HIGHLIGHTING IN NAV
// ===================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const highlightNav = debounce(() => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, 100);

window.addEventListener('scroll', highlightNav);

// ===================================
// NAV REVEAL LOGIC (After 20px)
// ===================================
const toggleNavVisibility = () => {
    const nav = document.getElementById('nav');
    if (window.scrollY > 20) {
        nav.classList.add('visible');
    } else {
        nav.classList.remove('visible');
    }
};

window.addEventListener('scroll', throttle(toggleNavVisibility, 10));

// ===================================
// HERO PARALLAX EFFECT
// ===================================
const hero = document.querySelector('.hero');
if (hero) {
    hero.addEventListener('mousemove', (e) => {
        // Calculate mouse position relative to window center (-1 to 1)
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = (e.clientY / window.innerHeight) * 2 - 1;

        // Update CSS variables
        hero.style.setProperty('--mouse-x', x);
        hero.style.setProperty('--mouse-y', y);
    });
}

// ===================================
// CONSOLE EASTER EGG
// ===================================
console.log('%c👋 Hello, curious developer!', 'font-size: 20px; font-weight: bold; color: #8b5cf6;');
console.log('%cLike what you see? Let\'s connect!', 'font-size: 14px; color: #3b82f6;');
console.log('%c💼 LinkedIn: linkedin.com/in/yuvrajmohana', 'font-size: 12px; color: #a0a0a0;');
console.log('%c💻 GitHub: github.com/yuvrajmohana', 'font-size: 12px; color: #a0a0a0;');

// ===================================
// ACCESSIBILITY ENHANCEMENTS
// ===================================
// Respect reduced motion preferences
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    document.querySelectorAll('*').forEach(element => {
        element.style.animation = 'none';
        element.style.transition = 'none';
    });
}

// Keyboard navigation enhancement
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});


