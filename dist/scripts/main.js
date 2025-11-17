// Export for module compatibility
export { ThemeManager, 
// ScrollManager, 
TypingEffect };
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
// class ScrollManager {
//     private navLinks: NodeListOf<HTMLAnchorElement>;
//     private navbar: HTMLElement | null;
//     private fadeElements: NodeListOf<Element>;
//     private sections: NodeListOf<HTMLElement>;
//     constructor() {
//         this.navLinks = document.querySelectorAll('a[href^="#"]');
//         this.navbar = document.querySelector('.navbar');
//         this.fadeElements = document.querySelectorAll('.fade-in');
//         this.sections = document.querySelectorAll('section');
//         this.init();
//     }
//     private init(): void {
//         this.setupSmoothScroll();
//         this.setupNavbarScroll();
//         this.setupScrollAnimations();
//         this.setupActiveNavHighlight();
//     }
//     private setupSmoothScroll(): void {
//         this.navLinks.forEach(link => {
//             link.addEventListener('click', (e) => {
//                 e.preventDefault();
//                 const targetId = link.getAttribute('href');
//                 if (targetId) {
//                     const targetElement = document.querySelector(targetId) as HTMLElement;
//                     if (targetElement) {
//                         targetElement.scrollIntoView({
//                             behavior: 'smooth',
//                             block: 'start'
//                         });
//                     }
//                 }
//             });
//         });
//     }
//     private setupNavbarScroll(): void {
//         window.addEventListener('scroll', () => {
//             if (this.navbar && window.scrollY > 100) {
//                 this.navbar.classList.add('scrolled');
//             } else if (this.navbar) {
//                 this.navbar.classList.remove('scrolled');
//             }
//         });
//     }
//     private setupScrollAnimations(): void {
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add('visible');
//                 }
//             });
//         }, {
//             threshold: 0.1,
//             rootMargin: '0px 0px -50px 0px'
//         });
//         this.fadeElements.forEach(element => {
//             observer.observe(element);
//         });
//         // Add fade-in class to sections
//         this.sections.forEach(section => {
//             section.classList.add('fade-in');
//         });
//     }
//     private setupActiveNavHighlight(): void {
//         const sectionsForNav = document.querySelectorAll('section[id]');
//         const navObserver = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     const id = entry.target.getAttribute('id');
//                     const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
//                     // Remove active class from all links
//                     this.navLinks.forEach(link => link.classList.remove('active'));
//                     // Add active class to current link
//                     if (activeLink) {
//                         activeLink.classList.add('active');
//                     }
//                 }
//             });
//         }, {
//             threshold: 0.5
//         });
//         sectionsForNav.forEach(section => {
//             navObserver.observe(section);
//         });
//     }
// }
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
    // new ScrollManager();
    new TypingEffect();
});
const link_wpp = document.getElementById('link_wpp');
const link_linkedin = document.getElementById('link_linkedin');
const link_github = document.getElementById('link_github');
const link_github_bas = document.getElementById('link_github_bas');
const link_bas_website = document.getElementById('link_bas_website');
const phone = '+54 9 11-5836-8857';
if (link_wpp) {
    link_wpp.addEventListener('click', () => {
        window.open(`https://wa.me/${phone.replace(/\D/g, '')}`, '_blanck');
    });
}
if (link_linkedin) {
    link_linkedin.addEventListener('click', () => {
        window.open('https://www.linkedin.com/in/leonel-alejandro-hidalgo-53653217a/', '_blanck');
    });
}
if (link_github) {
    link_github.addEventListener('click', () => {
        window.open('https://github.com/Lahkpom', '_blanck');
    });
}
if (link_github_bas) {
    link_github_bas.addEventListener('click', () => {
        window.open('https://github.com/blackanvilsoftworks', '_blanck');
    });
}
if (link_bas_website) {
    link_bas_website.addEventListener('click', () => {
        window.open('https://blackanvilsoftworks.github.io/home/', '_blanck');
    });
}
//# sourceMappingURL=main.js.map