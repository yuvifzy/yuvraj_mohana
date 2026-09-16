// ===================================
// SHARED CONTACT CONFIGURATION
// ===================================
const CONTACT_LINKS = [
    {
        id: "email",
        url: "mailto:yuvrajmohana07@gmail.com",
        label: "Email",
        desc: "For detailed conversations",
        icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>`
    },
    {
        id: "linkedin",
        url: "https://www.linkedin.com/in/yuvrajmohana/",
        label: "LinkedIn",
        desc: "For professional connections",
        icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>`
    },
    {
        id: "github",
        url: "https://github.com/yuvifzy",
        label: "GitHub",
        desc: "For code & collabs",
        icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>`
    },
    {
        id: "instagram",
        url: "https://www.instagram.com/yuvraj_mohana/",
        label: "Instagram",
        desc: "For casual stuff",
        icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5zm8.5 4.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" /></svg>`
    }
];

function renderContactLinks() {
    // 1. Render bottom section "Start a Signal"
    const signalNodesContainer = document.getElementById('signalNodes');
    if (signalNodesContainer) {
        signalNodesContainer.innerHTML = '';
        
        CONTACT_LINKS.forEach((link, index) => {
            const a = document.createElement('a');
            a.href = link.url;
            if (link.id !== 'email') {
                a.target = '_blank';
                a.rel = 'noopener noreferrer';
            }
            a.className = 'signal-node';
            a.style.setProperty('--i', index + 1);
            a.setAttribute('data-label', link.label);
            
            a.innerHTML = `
                <div class="node-icon">
                    ${link.icon}
                </div>
                <div class="node-tooltip">
                    <span class="tooltip-title">${link.label}</span>
                    <span class="tooltip-desc">${link.desc}</span>
                </div>
            `;
            signalNodesContainer.appendChild(a);

            // Re-insert copy email button after the email node
            if (link.id === 'email') {
                const copyBtnHtml = `
                    <button class="copy-email-btn" id="copyEmailBtn" onclick="copyEmail()">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle; margin-right: 6px;">
                            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                        </svg>
                        Copy Email
                    </button>
                    <div class="copy-toast" id="copyToast">Copied! ✓</div>
                `;
                signalNodesContainer.insertAdjacentHTML('beforeend', copyBtnHtml);
            }
        });
    }

    // 2. Render orb links
    const orbLinksContainer = document.getElementById('orbLinksContainer');
    if (orbLinksContainer) {
        orbLinksContainer.innerHTML = '';
        CONTACT_LINKS.forEach(link => {
            const a = document.createElement('a');
            a.href = link.url;
            if (link.id !== 'email') {
                a.target = '_blank';
                a.rel = 'noopener noreferrer';
            }
            a.className = 'orb-link-item';
            a.innerHTML = `
                <div class="orb-link-icon">${link.icon}</div>
                <span class="orb-link-label">${link.label}</span>
            `;
            orbLinksContainer.appendChild(a);
        });
    }
}

document.addEventListener('DOMContentLoaded', renderContactLinks);

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
                loader.style.opacity = '0';
                setTimeout(() => loader.style.display = 'none', 800);

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

// ===================================
// TRIGGER TYPEWRITER ON SCROLL
// ===================================
const typeWriterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            typeWriterObserver.unobserve(entry.target); // Run only once
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% visible

const aboutTitle = document.querySelector('#about .section-title');
if (aboutTitle) {
    typeWriterObserver.observe(aboutTitle);
}

// ===================================
// HERO BLUR ON SCROLL
// ===================================
const heroSection = document.querySelector('.hero');
const handleHeroBlur = () => {
    if (heroSection) {
        if (window.scrollY > 100) {
            heroSection.classList.add('blur-out');
        } else {
            heroSection.classList.remove('blur-out');
        }
    }
};

window.addEventListener('scroll', throttle(handleHeroBlur, 10));



// ===================================
// PROJECTS HOVER REVEAL ANIMATIONS
// ===================================
const projectList = document.querySelector('.project-list');
const projectItems = document.querySelectorAll('.project-item');
const projectModal = document.querySelector('.project-modal');
const modalImage = document.getElementById('modal-image');
const titleStack = document.querySelector('.title-stack');

// Title Echo Animation (Keep existing if relevant, or simplified)
function handleEchoAnimation() {
    if (!titleStack) return;
    const windowHeight = window.innerHeight;
    const rect = titleStack.getBoundingClientRect();
    const top = rect.top;

    // Only animate if near viewport
    if (top < windowHeight && top > -300) {
        const offsetBase = (windowHeight - top) * 0.25;
        const echoes = titleStack.querySelectorAll('.echo');
        echoes.forEach((echo, i) => {
            const offset = offsetBase * (i + 1) * 0.5;
            const clampedOffset = Math.min(Math.max(0, offset), 100 * (i + 1));
            echo.style.transform = `translateY(${clampedOffset}px)`;
        });
    }
}

// Hover Reveal Logic
if (projectList && projectModal && modalImage) {
    // Move Modal with Cursor
    // We bind to document to ensure smooth tracking even if cursor moves fast
    document.addEventListener('mousemove', (e) => {
        // Only update if modal is potentially visible or soon to be
        // Optimization: Check bounds or just update
        projectModal.style.left = `${e.clientX}px`;
        projectModal.style.top = `${e.clientY}px`;
    });

    projectItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const imgUrl = item.getAttribute('data-image');
            if (imgUrl) {
                modalImage.src = imgUrl;
                projectModal.classList.add('active');
            }
        });

        item.addEventListener('mouseleave', () => {
            projectModal.classList.remove('active');
        });
    });
}

// Global Scroll Loop for Echo
window.addEventListener('scroll', () => {
    requestAnimationFrame(() => {
        handleEchoAnimation();
    });
});
handleEchoAnimation(); // Init

// ===================================
// PAGE TRANSITION LOGIC
// ===================================
window.addEventListener('DOMContentLoaded', () => {
    // 1. Enter Animation:
    // When page loads, if the body has the transition-overlay, we can trigger the 'enter' animation
    // But currently CSS is set up so .transition-color is translated 100% (below view).
    // To make it enter from top (covering) -> top, we need it to start covering.
    // Let's assume standard flow:
    // A. Page Unloads -> Overlay sides UP (translateY 0)
    // B. New Page Loads -> Overlay is THERE (translate 0 or -100%?)

    // Simplest flow: 
    // Overlay starts at translateY(0) (Covering screen) if we add a class 'loading' to body in HTML
    // seeing that we dynamically added the div, it starts 'below' per CSS.

    // Let's do this: 
    // By default CSS: .transition-color { transform: translateY(100%); } -> Sitting below view

    // 2. Click Link ->
    //    Add class to body -> .is-transitioning-out 
    //    CSS: .is-transitioning-out .transition-color { transform: translateY(0); } -> Slides UP to cover screen
    //    Wait 600ms -> window.location = href

    document.querySelectorAll('a[data-transition="true"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            // If it's a hash link on same page, ignore or handle smooth scroll separately
            if (href.startsWith('#') || href.includes('#')) {
                // If it's pure hash, regular smooth scroll takes over
                if (href.startsWith('#')) return;
                // If it is 'index.html#projects', we might need transition if we are on 'projects.html'
                const targetPath = href.split('#')[0];
                const currentPath = window.location.pathname.split('/').pop() || 'index.html';
                if (targetPath === currentPath) return; // Same page
            }

            e.preventDefault();
            document.body.classList.add('is-transitioning-out');

            // Update Text based on destination
            const textEl = document.querySelector('.transition-text');
            if (textEl) {
                if (href.includes('projects.html')) {
                    textEl.textContent = 'Work';
                } else if (href.includes('index.html') || href === '/') {
                    textEl.textContent = 'Home';
                } else {
                    textEl.textContent = '';
                }
            }

            setTimeout(() => {
                window.location.href = href;
            }, 1200); // 1.2s Match CSS transition time
        });
    });

    // 3. Page Load ->
    // We want it to feel like it's sliding AWAY (upwards) reveals content
    // But default CSS is 'below'. 
    // So immediately on load, we set it to 'covering' (without transition), then transition to 'above' (-100%)

    const overlay = document.querySelector('.transition-color');
    if (overlay) {
        // Force it to start 'covering' the screen to pretend we just arrived from the previous slight
        // But since this is a fresh load, we might flicker if we don't have it in critical CSS.
        // For now, let's just animate "In" from below? No, standard is swipe UP.

        // Let's try: Overlay starts 'covering' (via inline style or fast JS) -> then slides away.
        // We simulate 'Arriving':

        // Quick set to covering (0%)
        overlay.style.transition = 'none';
        overlay.style.transform = 'translateY(0)';

        // Force reflow
        overlay.offsetHeight;

        // Now slide UP (-100%)
        overlay.style.transition = 'transform 1.2s cubic-bezier(0.8, 0, 0.2, 1)';
        overlay.style.transform = 'translateY(-100%)';
    }
});

// ===================================
// SIGNAL CONTACT INTERACTION
// ===================================
// Wrap in a function to avoid global scope pollution if preferred, or just append
(function initSignalContact() {
    const signalSection = document.getElementById('contact');
    const signalCore = document.getElementById('signalCore');
    const signalNodes = document.getElementById('signalNodes');
    const signalArea = document.querySelector('.signal-area');

    if (!signalSection || !signalCore || !signalNodes) return;

    // 1. Mouse Interaction (Soft Magnetic Effect)
    if (signalArea) {
        signalArea.addEventListener('mousemove', (e) => {
            const rect = signalArea.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Dampen the movement
            signalCore.style.transition = 'none'; // Instant move
            signalNodes.style.transition = 'none';

            signalCore.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;

            // Nodes move slightly opposite for depth (parallax)
            signalNodes.style.transform = `translate(calc(-50% + ${x * 0.03}px), calc(-50% + ${y * 0.03}px))`;
        });

        signalArea.addEventListener('mouseleave', () => {
            // Add transition for smooth snap back
            signalCore.style.transition = 'transform 0.5s ease-out';
            signalNodes.style.transition = 'transform 0.5s ease-out';

            signalCore.style.transform = 'translate(0, 0)';
            signalNodes.style.transform = 'translate(-50%, -50%)';
        });
    }

    // 2. Hover to Expand / Collapse
    const handleExpand = () => {
        signalNodes.classList.add('active');
        signalCore.classList.add('active');
    };

    const handleCollapse = () => {
        signalNodes.classList.remove('active');
        signalCore.classList.remove('active');
    };

    signalCore.addEventListener('mouseenter', handleExpand);
    // Use signalArea for mouseleave so users can reach the nodes without it closing
    signalArea.addEventListener('mouseleave', handleCollapse);

    // Also keep click for mobile/touch
    signalCore.addEventListener('click', () => {
        if (signalNodes.classList.contains('active')) {
            handleCollapse();
        } else {
            handleExpand();
        }
    });

    // Auto-expand on hover (optional, user asked for click interaction, but let's make it clickable as primary)
    // "When user clicks the core" -> Strict requirement.

    // 3. Status Rotator
    const statusText = document.getElementById('statusText');
    const statuses = [
        "Status: Open to projects · Internships · Collaborations",
        "Status: Currently building cool stuff 🚀",
        "Status: Learning WebGL & Creative Dev 🎨",
        "Status: Available for hire 💼"
    ];
    let statusIndex = 0;

    if (statusText) {
        // Add transition for smooth fade
        statusText.style.transition = 'opacity 0.5s ease';

        setInterval(() => {
            statusText.style.opacity = 0;
            setTimeout(() => {
                statusIndex = (statusIndex + 1) % statuses.length;
                statusText.textContent = statuses[statusIndex];
                statusText.style.opacity = 1;
            }, 500);
        }, 4000);
    }

    // 4. Easter Egg Timer
    const easterEgg = document.getElementById('easterEgg');
    let eggTimer;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // User is looking at the section
                eggTimer = setTimeout(() => {
                    if (easterEgg) easterEgg.classList.add('visible');
                }, 3000); // 3 seconds wait
            } else {
                clearTimeout(eggTimer);
                if (easterEgg) easterEgg.classList.remove('visible');
            }
        });
    }, { threshold: 0.6 });

    if (signalSection) observer.observe(signalSection);
})();

// ===================================
// CUSTOM CURSOR LOGIC
// ===================================
(function initCursor() {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorRing = document.querySelector('.cursor-ring');
    const interactiveElements = document.querySelectorAll('a, button, .nav-link, .card-wrapper, .signal-core-wrapper, .signal-node');

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let isMoving = false;

    if (cursorDot && cursorRing) {
        // Track mouse movement
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            if (!isMoving) {
                isMoving = true;
                // Initialize positions on first move
                ringX = mouseX;
                ringY = mouseY;
                cursorDot.style.opacity = '1';
                cursorRing.style.opacity = '1';
            }

            // Dot follows instantly
            cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
        });

        // Smooth ring movement (Lerp)
        const animateRing = () => {
            // Linear interpolation
            // Higher factor = faster, Lower = slower lag
            const factor = 0.15;

            ringX += (mouseX - ringX) * factor;
            ringY += (mouseY - ringY) * factor;

            cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;

            requestAnimationFrame(animateRing);
        };
        requestAnimationFrame(animateRing);

        // Hover Effects
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
        });

        // Dynamic check for new elements (like tooltips or expanded nodes)
        document.body.addEventListener('mouseover', (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.classList.contains('clickable') || e.target.closest('a') || e.target.closest('button') || e.target.closest('.grid-item')) {
                document.body.classList.add('hovering');
            }
        });
    }
})();

// ===================================
// INSANE ANIMATIONS (GSAP)
// ===================================
document.addEventListener("DOMContentLoaded", () => {

    // Integrate with GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // 2. Text Reveals (SplitType)
    const splitTypes = document.querySelectorAll('.hero-branding, .section-title, .project-heading');

    splitTypes.forEach((char, i) => {
        const text = new SplitType(char, { types: 'chars' });

        gsap.from(text.chars, {
            scrollTrigger: {
                trigger: char,
                start: 'top 80%',
                end: 'top 20%',
                scrub: false,
                markers: false
            },
            opacity: 0,
            y: 100, // Move from below
            rotateX: -90, // 3D rotation
            stagger: 0.02,
            duration: 1,
            ease: 'back.out(1.7)',
        });
    });

    // 5. Scroll Velocity Marquee
    const marqueeContent = document.querySelector('.marquee-content');

    if (marqueeContent) {
        let xPercent = 0;
        let direction = -1; // -1 = Left (default), 1 = Right
        let velocity = 0;
        let speed = 0.02; // Base speed (Very Slow)

        const animateMarquee = () => {
            // Move by base speed + velocity
            let moveBy = direction * (speed + Math.abs(velocity));

            xPercent += moveBy;

            // Seamless Loop Logic with GSAP Wrap
            xPercent = gsap.utils.wrap(-50, 0, xPercent);

            gsap.set(marqueeContent, { xPercent: xPercent });

            // Decay velocity for smooth stop
            velocity *= 0.90;

            requestAnimationFrame(animateMarquee);
        };

        requestAnimationFrame(animateMarquee);

        // Capture Scroll Velocity via ScrollTrigger
        ScrollTrigger.create({
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            onUpdate: (self) => {
                // Change direction based on scroll
                // self.direction: 1 = down, -1 = up
                // If scrolling down (1), we want standard left movement (-1)
                // If scrolling up (-1), we want reverse right movement (1)
                direction = self.direction === 1 ? -1 : 1;

                // Get velocity
                let vel = self.getVelocity(); // pixels/sec
                // Normalize and apply
                // Adjust factor to control sensitivity (Lower = Slower reaction)
                velocity = vel * 0.0001;
            }
        });
    }

    // 3. Staggered Fade Up for Content
    const staggerElements = document.querySelectorAll('.hero-cta, .hero-social-mini, .about-card, .project-item, .skill-item');

    staggerElements.forEach((el) => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
            },
            y: 40,
            opacity: 0,
            duration: 1.2,
            ease: 'expo.out',
        });
    });

    // 4. Parallax Images/Sections
    const parallaxSections = document.querySelectorAll('.hero-subject-wrapper, .about-grid, .project-list-container');

    parallaxSections.forEach(section => {
        gsap.to(section, {
            yPercent: -10,
            ease: 'none',
            scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });

    // 5. Hero Image Mouse Movement (Parallax)
    const heroImage = document.querySelector('.hero-subject');
    const heroSection = document.querySelector('.hero');

    if (heroImage && heroSection) {
        // Initial reveal animation 
        gsap.to(heroImage, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 2,
            ease: 'expo.out',
            delay: 0.8
        });

        heroSection.addEventListener('mousemove', (e) => {
            // Normalized coordinates (-1 to 1)
            const xNorm = (e.clientX / window.innerWidth - 0.5) * 2;
            const yNorm = (e.clientY / window.innerHeight - 0.5) * 2;

            const rotateY = xNorm * 15;
            const rotateX = -yNorm * 15;
            const shadowX = -xNorm * 30;
            const shadowY = -yNorm * 30;

            gsap.to(heroImage, {
                x: xNorm * 40,
                y: yNorm * 40,
                rotateY: rotateY,
                rotateX: rotateX,
                // Add dynamic shadow for 3D depth
                filter: `brightness(0.9) contrast(1.2) grayscale(0.2) drop-shadow(${shadowX}px ${shadowY}px 40px rgba(0, 0, 0, 0.9))`,
                duration: 0.8,
                ease: 'power2.out'
            });
        });

        heroSection.addEventListener('mouseleave', () => {
            gsap.to(heroImage, {
                x: 0,
                y: 0,
                rotateY: 0,
                rotateX: 0,
                filter: 'brightness(0.9) contrast(1.2) grayscale(0.2) drop-shadow(0 0 40px rgba(0, 0, 0, 0.8))',
                duration: 1,
                ease: 'power3.out'
            });
        });
    }

    console.log("Smooth Animations + Velocity Marquee Initialized 🚀");
});

// ===================================
// TECH STACK INTERACTION
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const techStackBtn = document.getElementById('techStackBtn');
    const techStackMarquee = document.getElementById('techStackMarquee');
    const techStackClose = document.getElementById('techStackClose');

    if (techStackBtn && techStackMarquee && techStackClose) {
        // Open Marquee
        techStackBtn.addEventListener('click', () => {
            gsap.to(techStackBtn, {
                opacity: 0,
                scale: 0.8,
                duration: 0.3,
                ease: 'power2.in',
                onComplete: () => {
                    techStackBtn.style.display = 'none';
                    techStackMarquee.classList.remove('hidden');
                    techStackMarquee.style.display = 'flex';
                    
                    gsap.fromTo(techStackMarquee, 
                        { opacity: 0, scale: 0.95, y: 10 },
                        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.5)' }
                    );
                }
            });
        });

        // Close Marquee
        techStackClose.addEventListener('click', () => {
            gsap.to(techStackMarquee, {
                opacity: 0,
                scale: 0.95,
                y: 10,
                duration: 0.3,
                ease: 'power2.in',
                onComplete: () => {
                    techStackMarquee.style.display = 'none';
                    techStackMarquee.classList.add('hidden');
                    techStackBtn.style.display = 'inline-block';
                    
                    gsap.fromTo(techStackBtn,
                        { opacity: 0, scale: 0.8 },
                        { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.5)' }
                    );
                }
            });
        });
    }
});

// ===================================
// COPY EMAIL FALLBACK
// ===================================
function copyEmail() {
    const email = 'yuvrajmohana07@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        const toast = document.getElementById('copyToast');
        if (toast) {
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 2000);
        }
    }).catch(err => {
        console.error('Failed to copy email: ', err);
    });
}

// ===================================
// CONTACT ORB INTERACTION
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const orb = document.getElementById('contactOrb');
    const orbWrapper = document.getElementById('contactOrbWrapper');
    const orbLinksContainer = document.getElementById('orbLinksContainer');
    
    if (!orb || !orbWrapper || !orbLinksContainer) return;

    // Toggle expansion
    orb.addEventListener('click', (e) => {
        const isExpanded = orbLinksContainer.classList.contains('expanded');
        if (isExpanded) {
            orbLinksContainer.classList.remove('expanded');
            orb.classList.remove('active');
            orb.setAttribute('aria-expanded', 'false');
        } else {
            orbLinksContainer.classList.add('expanded');
            orb.classList.add('active');
            orb.setAttribute('aria-expanded', 'true');
        }
        e.stopPropagation(); // prevent clicking outside from closing it immediately
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
        if (!orbWrapper.contains(e.target)) {
            orbLinksContainer.classList.remove('expanded');
            orb.classList.remove('active');
            orb.setAttribute('aria-expanded', 'false');
        }
    });

    // Magnetic effect (only if not reduced motion)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (!prefersReducedMotion.matches) {
        orbWrapper.addEventListener('mousemove', (e) => {
            const rect = orbWrapper.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            // Subtle movement
            gsap.to(orb, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.6,
                ease: 'power3.out'
            });
        });

        orbWrapper.addEventListener('mouseleave', () => {
            gsap.to(orb, {
                x: 0,
                y: 0,
                duration: 1,
                ease: 'elastic.out(1, 0.3)'
            });
        });
    }
});

// ===================================
// SMOOTH SCROLLING (LENIS)
// ===================================
if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({
        duration: 1.5, // Slower scroll for a more premium, deliberate feel
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
        smooth: true,
        smoothTouch: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
}
