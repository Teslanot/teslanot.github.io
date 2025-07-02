export const initSmoothScroll = () => {
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
};

export const initMobileMenu = () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('mobile-menu-open');
        });
    }
};

export const initScrollAnimations = (selector = '.animate-on-scroll') => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
                entry.target.classList.remove('initial-hidden');
            }
        });
    }, observerOptions);

    document.querySelectorAll(selector).forEach(el => {
        observer.observe(el);
    });

    return observer;
};

export const initProjectCardEffects = () => {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) rotateX(5deg)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) rotateX(0deg)';
        });
    });
};

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const homeScreen = document.getElementById('home');
    const rate = scrolled * -0.5;

    if (homeScreen) {
        homeScreen.style.transform = `translateY(${rate}px)`;
    }
});

export const initParallaxEffect = (elementId = 'home') => {
    const handleScroll = () => {
        const scrolled = window.pageYOffset;
        const homeScreen = document.getElementById(elementId);
        const rate = scrolled * -0.5;

        if (homeScreen) {
            homeScreen.style.transform = `translateY(${rate}px)`;
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
};

export const initTypeWriter = (selector = 'h1', options = {}) => {
    const {
        speed = 100,
        delay = 1000,
        borderColor = '#12f537'
    } = options;

    const title = document.querySelector(selector);
    if (!title) return;

    const text = title.textContent;
    title.textContent = '';
    title.style.borderRight = `2px solid ${borderColor}`;

    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            title.style.borderRight = 'none';
        }
    };

    setTimeout(typeWriter, delay);
};

export const cleanup = (observers = []) => {
    observers.forEach(observer => {
        if (observer && observer.disconnect) {
            observer.disconnect();
        }
    });
};