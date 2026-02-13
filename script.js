// ===== i18n Translations =====
const translations = {
    en: {
        'company-name': 'Warm Smoke Games',
        'nav-about': 'About',
        'nav-team': 'Team',
        'nav-products': 'Products',
        'nav-socials': 'Socials',
        'nav-join': 'Join Us',
        'hero-subtitle': 'Crafting experiences in the smoke',
        
        'about-title': 'About Warm Smoke',
        'about-text': 'We are a passionate team of creators dedicated to developing unique gaming experiences and innovative software solutions. Warm Smoke Games was born from the vision of bringing fresh perspectives to the gaming industry, combining artistic vision with technical excellence.',
        
        'team-title': 'Our Command',
        'team-member-1-name': 'MiraDiv',
        'team-member-1-role': 'Programmer / CEO',
        'team-member-2-name': 'MrRelax',
        'team-member-2-role': 'Scenarist / Junior',
        'team-member-3-name': 'BiBy_BoX',
        'team-member-3-role': 'Narrative Designer / Junior',
        'team-member-4-name': 'UnluckyCat',
        'team-member-4-role': 'Art Designer / Junior',
        'team-member-5-name': 'Prycynna',
        'team-member-5-role': 'Compositor / Middle',
        
        'products-title': 'Our Products',
        'product-1-name': 'Game Title 1',
        'product-1-desc': 'Coming soon',
        'product-2-name': 'Software Tool',
        'product-2-desc': 'In development',
        
        'socials-title': 'Our Socials',
        'social-website': 'Website',
        
        'join-title': 'Join Us',
        'vacancy-1-title': 'Game Designer',
        'vacancy-1-desc': 'We\'re looking for a creative game designer to help shape our upcoming projects.',
        'vacancy-2-title': '3D Artist',
        'vacancy-2-desc': 'Join our team as a 3D artist and bring our game worlds to life.',
        'vacancy-3-title': 'Developer',
        'vacancy-3-desc': 'Experienced developer needed for game and software development.',
        
        'footer-email': 'Email:',
        'footer-address': 'Address:',
        'footer-address-value': 'Kyiv, Ukraine',
        'footer-phone': 'Phone:'
    },
    uk: {
        'company-name': 'Warm Smoke Games',
        'nav-about': 'Про нас',
        'nav-team': 'Команда',
        'nav-products': 'Продукти',
        'nav-socials': 'Соцмережі',
        'nav-join': 'Приєднатися',
        'hero-subtitle': 'Створюємо досвід у димі',
        
        'about-title': 'Про Warm Smoke',
        'about-text': 'Ми — пристрасна команда творців, яка присвячує себе розробці унікальних ігрових досвідів та інноваційних програмних рішень. Warm Smoke Games народилася з бачення привнести свіжі перспективи в ігрову індустрію, поєднуючи художнє бачення з технічною досконалістю.',
        
        'team-title': 'Наша Команда',
        'team-member-1-name': 'MiraDiv',
        'team-member-1-role': 'Програміст / Директор',
        'team-member-2-name': 'MrRelax',
        'team-member-2-role': 'Сценарист / Джуніор',
        'team-member-3-name': 'BiBy_BoX',
        'team-member-3-role': 'Наративний дизайнер / Джуніор',
        'team-member-4-name': 'UnluckyCat',
        'team-member-4-role': 'Креативний дизайнер / Джуніор',
        'team-member-5-name': 'Prycynna',
        'team-member-5-role': 'Композитор / Мідл',
        
        'products-title': 'Наші Продукти',
        'product-1-name': 'Назва Гри 1',
        'product-1-desc': 'Незабаром',
        'product-2-name': 'Програмний Інструмент',
        'product-2-desc': 'В розробці',
        
        'socials-title': 'Наші Соцмережі',
        'social-website': 'Вебсайт',
        
        'join-title': 'Приєднуйтесь до Нас',
        'vacancy-1-title': 'Геймдизайнер',
        'vacancy-1-desc': 'Ми шукаємо креативного геймдизайнера, щоб допомогти сформувати наші майбутні проекти.',
        'vacancy-2-title': '3D Художник',
        'vacancy-2-desc': 'Приєднуйтесь до нашої команди як 3D художник і оживіть наші ігрові світи.',
        'vacancy-3-title': 'Розробник',
        'vacancy-3-desc': 'Потрібен досвідчений розробник для розробки ігор та програмного забезпечення.',
        
        'footer-email': 'Email:',
        'footer-address': 'Адреса:',
        'footer-address-value': 'Київ, Україна',
        'footer-phone': 'Телефон:'
    }
};

// ===== Current Language State =====
let currentLang = 'en';

// ===== DOM Elements =====
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const langButtons = document.querySelectorAll('.lang-btn');
const navLinks = document.querySelectorAll('.nav-link');

// ===== Mobile Menu Toggle =====
function toggleMenu() {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.style.overflow = burger.classList.contains('active') ? 'hidden' : '';
}

burger.addEventListener('click', toggleMenu);

// Close menu when clicking on nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            toggleMenu();
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && 
        nav.classList.contains('active') && 
        !nav.contains(e.target) && 
        !burger.contains(e.target)) {
        toggleMenu();
    }
});

// ===== Language Switching =====
function setLanguage(lang) {
    currentLang = lang;
    
    // Update active button state
    langButtons.forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Update all translatable elements
    const elements = document.querySelectorAll('[data-i18n-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Save preference to localStorage
    localStorage.setItem('preferredLanguage', lang);
}

// Language button click handlers
langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        setLanguage(lang);
    });
});

// ===== Scroll Animations =====
function revealOnScroll() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.85) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
}

// Initialize sections for animation
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===== Smooth Scroll Offset for Fixed Header =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Header Background on Scroll =====
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
}

window.addEventListener('scroll', handleHeaderScroll);

// ===== Team Card Stagger Animation =====
function animateTeamCards() {
    const teamCards = document.querySelectorAll('.team-card');
    const teamSection = document.querySelector('.team-section');
    
    if (!teamSection) return;
    
    const sectionTop = teamSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (sectionTop < windowHeight * 0.7) {
        teamCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
        
        // Remove listener after animation
        window.removeEventListener('scroll', animateTeamCards);
    }
}

// Initialize team cards for animation
document.querySelectorAll('.team-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
});

window.addEventListener('scroll', animateTeamCards);

// ===== Product Card Stagger Animation =====
function animateProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    const productSection = document.querySelector('.products-section');
    
    if (!productSection) return;
    
    const sectionTop = productSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (sectionTop < windowHeight * 0.7) {
        productCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 150);
        });
        
        // Remove listener after animation
        window.removeEventListener('scroll', animateProductCards);
    }
}

// Initialize product cards for animation
document.querySelectorAll('.product-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
});

window.addEventListener('scroll', animateProductCards);

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    // Load saved language preference or detect from browser
    const savedLang = localStorage.getItem('preferredLanguage');
    const browserLang = navigator.language.startsWith('uk') ? 'uk' : 'en';
    const initialLang = savedLang || browserLang;
    
    setLanguage(initialLang);
    
    // Initial scroll reveal check
    revealOnScroll();
    animateTeamCards();
    animateProductCards();
});

// ===== Handle Window Resize =====
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && nav.classList.contains('active')) {
        toggleMenu();
    }
});

// ===== Add parallax effect to hero section =====
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});
