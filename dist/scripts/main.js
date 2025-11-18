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