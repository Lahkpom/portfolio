// Export for module compatibility
export { ThemeManager, ScrollManager, TypingEffect };
// Theme management
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        this.themeToggle = document.getElementById('themeToggle');
        this.themeIcon = document.getElementById('themeIcon');
        this.init();
    }
    init() {
        this.applyTheme(this.currentTheme);
        this.setupEventListeners();
    }
    setupEventListeners() {
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
    }
    toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
    }
    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        if (this.themeIcon) {
            if (theme === 'dark') {
                this.themeIcon.className = 'fas fa-moon';
            }
            else {
                this.themeIcon.className = 'fas fa-sun';
            }
        }
    }
    getCurrentTheme() {
        return this.currentTheme;
    }
}
// Smooth scrolling for navigation links
class ScrollManager {
    constructor() {
        this.navLinks = document.querySelectorAll('a[href^="#"]');
        this.navbar = document.querySelector('.navbar');
        this.fadeElements = document.querySelectorAll('.fade-in');
        this.sections = document.querySelectorAll('section');
        this.init();
    }
    init() {
        this.setupSmoothScroll();
        this.setupNavbarScroll();
        this.setupScrollAnimations();
        this.setupActiveNavHighlight();
    }
    setupSmoothScroll() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                if (targetId) {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }
    setupNavbarScroll() {
        window.addEventListener('scroll', () => {
            if (this.navbar && window.scrollY > 100) {
                this.navbar.classList.add('scrolled');
            }
            else if (this.navbar) {
                this.navbar.classList.remove('scrolled');
            }
        });
    }
    setupScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        this.fadeElements.forEach(element => {
            observer.observe(element);
        });
        // Add fade-in class to sections
        this.sections.forEach(section => {
            section.classList.add('fade-in');
        });
    }
    setupActiveNavHighlight() {
        const sectionsForNav = document.querySelectorAll('section[id]');
        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                    // Remove active class from all links
                    this.navLinks.forEach(link => link.classList.remove('active'));
                    // Add active class to current link
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        }, {
            threshold: 0.5
        });
        sectionsForNav.forEach(section => {
            navObserver.observe(section);
        });
    }
}
// Typing effect for hero title
class TypingEffect {
    constructor() {
        this.heroTitle = document.querySelector('.hero-title');
        this.init();
    }
    init() {
        if (this.heroTitle) {
            const text = this.heroTitle.textContent || '';
            this.heroTitle.textContent = '';
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    this.heroTitle.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            };
            // Start typing after a short delay
            setTimeout(typeWriter, 1000);
        }
    }
}
// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    new ScrollManager();
    new TypingEffect();
});
// Export for module compatibility
// export { ThemeManager, ScrollManager, TypingEffect };
//# sourceMappingURL=main.js.map