/**
 * RHCSA Study Guide - JavaScript
 * DevOps ni Diary
 * Features: Dark Mode, Search, Mobile Menu, Smooth Scroll, Interactive Elements
 */

// ===============================================
// DARK MODE FUNCTIONALITY
// ===============================================

const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Load saved theme preference
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

// Update theme icon
function updateThemeIcon(theme) {
    if (themeToggle) {
        themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Toggle theme
function toggleTheme() {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

// Event listener for theme toggle
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// Initialize theme on page load
loadTheme();

// ===============================================
// MOBILE MENU FUNCTIONALITY
// ===============================================

const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenuToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });

    // Close menu when clicking a link
    const navLinkItems = navLinks.querySelectorAll('.nav-link');
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });
}

// ===============================================
// SEARCH FUNCTIONALITY
// ===============================================

const searchInput = document.getElementById('searchInput');
const chaptersGrid = document.getElementById('chaptersGrid');

if (searchInput && chaptersGrid) {
    const chapterCards = chaptersGrid.querySelectorAll('.chapter-card');
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        chapterCards.forEach(card => {
            const title = card.querySelector('.chapter-title').textContent.toLowerCase();
            const description = card.querySelector('.chapter-description').textContent.toLowerCase();
            const topics = Array.from(card.querySelectorAll('.topic-tag'))
                .map(tag => tag.textContent.toLowerCase())
                .join(' ');
            
            const searchableText = `${title} ${description} ${topics}`;
            
            if (searchableText.includes(searchTerm)) {
                card.style.display = 'flex';
                card.classList.add('fade-in');
            } else {
                card.style.display = 'none';
            }
        });
        
        // Show message if no results
        const visibleCards = Array.from(chapterCards).filter(card => card.style.display !== 'none');
        
        let noResultsMsg = document.getElementById('noResultsMessage');
        
        if (visibleCards.length === 0 && searchTerm !== '') {
            if (!noResultsMsg) {
                noResultsMsg = document.createElement('div');
                noResultsMsg.id = 'noResultsMessage';
                noResultsMsg.className = 'no-results';
                noResultsMsg.innerHTML = `
                    <p style="text-align: center; color: var(--text-secondary); padding: 2rem; font-size: 1.1rem;">
                        No chapters found for "${searchTerm}". Try a different search term.
                    </p>
                `;
                chaptersGrid.appendChild(noResultsMsg);
            }
        } else if (noResultsMsg) {
            noResultsMsg.remove();
        }
    });
}

// ===============================================
// SMOOTH SCROLL FUNCTIONALITY
// ===============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Don't prevent default for empty hash or just "#"
        if (href === '#' || href === '') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
            const targetPosition = target.offsetTop - navbarHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===============================================
// ACTIVE NAVIGATION HIGHLIGHTING
// ===============================================

function highlightActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (sections.length === 0) return;
    
    let currentSection = '';
    const scrollPosition = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Throttle scroll events for performance
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(() => {
        highlightActiveSection();
    });
});

// ===============================================
// CHAPTER PAGE FUNCTIONALITY
// ===============================================

// Table of Contents smooth scroll
document.addEventListener('DOMContentLoaded', () => {
    const tocLinks = document.querySelectorAll('.toc-list a');
    
    tocLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Sidebar active link highlighting
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    const currentPath = window.location.pathname;
    
    sidebarLinks.forEach(link => {
        if (link.getAttribute('href') && currentPath.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });
});

// ===============================================
// EXPANDABLE SECTIONS
// ===============================================

function initExpandableSections() {
    const expandButtons = document.querySelectorAll('.expand-toggle');
    
    expandButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            
            button.setAttribute('aria-expanded', !isExpanded);
            content.style.display = isExpanded ? 'none' : 'block';
            button.textContent = isExpanded ? '▶ Expand' : '▼ Collapse';
        });
    });
}

// ===============================================
// QUIZ FUNCTIONALITY
// ===============================================

function initQuiz() {
    const quizOptions = document.querySelectorAll('.quiz-options li');
    
    quizOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove previous selections
            const siblings = this.parentElement.querySelectorAll('li');
            siblings.forEach(sib => {
                sib.style.backgroundColor = '';
                sib.style.borderColor = '';
            });
            
            // Highlight selected option
            this.style.backgroundColor = 'var(--bg-tertiary)';
            this.style.borderColor = 'var(--color-brand)';
            
            // Show answer for this question
            const questionContainer = this.closest('.quiz-question');
            const answer = questionContainer.querySelector('.quiz-answer');
            
            if (answer) {
                answer.classList.add('show');
            }
        });
    });
}

// ===============================================
// CODE BLOCK COPY FUNCTIONALITY
// ===============================================

function initCodeCopy() {
    const codeBlocks = document.querySelectorAll('pre');
    
    codeBlocks.forEach((block, index) => {
        // Create copy button
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-code-btn';
        copyButton.innerHTML = '📋 Copy';
        copyButton.setAttribute('aria-label', 'Copy code to clipboard');
        
        // Style the button
        copyButton.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 0.5rem 1rem;
            background-color: var(--bg-secondary);
            border: 1px solid var(--border-color);
            border-radius: var(--radius-sm);
            cursor: pointer;
            font-size: 0.85rem;
            color: var(--text-primary);
            transition: all 0.2s ease;
        `;
        
        // Position parent
        block.style.position = 'relative';
        block.appendChild(copyButton);
        
        // Copy functionality
        copyButton.addEventListener('click', async () => {
            const code = block.querySelector('code')?.textContent || block.textContent;
            
            try {
                await navigator.clipboard.writeText(code);
                copyButton.innerHTML = '✅ Copied!';
                copyButton.style.backgroundColor = 'var(--color-success)';
                copyButton.style.color = 'white';
                
                setTimeout(() => {
                    copyButton.innerHTML = '📋 Copy';
                    copyButton.style.backgroundColor = 'var(--bg-secondary)';
                    copyButton.style.color = 'var(--text-primary)';
                }, 2000);
            } catch (err) {
                copyButton.innerHTML = '❌ Failed';
                setTimeout(() => {
                    copyButton.innerHTML = '📋 Copy';
                }, 2000);
            }
        });
        
        // Hover effect
        copyButton.addEventListener('mouseenter', () => {
            copyButton.style.borderColor = 'var(--color-brand)';
        });
        
        copyButton.addEventListener('mouseleave', () => {
            copyButton.style.borderColor = 'var(--border-color)';
        });
    });
}

// ===============================================
// SCROLL TO TOP BUTTON
// ===============================================

function initScrollToTop() {
    // Create button
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '↑';
    scrollButton.className = 'scroll-to-top';
    scrollButton.setAttribute('aria-label', 'Scroll to top');
    
    // Style
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: var(--color-brand);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        display: none;
        z-index: 999;
        box-shadow: var(--shadow-lg);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(scrollButton);
    
    // Show/hide based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });
    
    // Scroll to top on click
    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    scrollButton.addEventListener('mouseenter', () => {
        scrollButton.style.transform = 'scale(1.1)';
        scrollButton.style.backgroundColor = 'var(--color-brand-dark)';
    });
    
    scrollButton.addEventListener('mouseleave', () => {
        scrollButton.style.transform = 'scale(1)';
        scrollButton.style.backgroundColor = 'var(--color-brand)';
    });
}

// ===============================================
// READING PROGRESS BAR
// ===============================================

function initReadingProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--color-brand), var(--color-accent));
        width: 0%;
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.pageYOffset;
        const progress = (scrolled / documentHeight) * 100;
        
        progressBar.style.width = `${progress}%`;
    });
}

// ===============================================
// INITIALIZE ALL FEATURES
// ===============================================

document.addEventListener('DOMContentLoaded', () => {
    initExpandableSections();
    initQuiz();
    initCodeCopy();
    initScrollToTop();
    initReadingProgress();
    
    // Add fade-in animation to elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe chapter cards and sections
    document.querySelectorAll('.chapter-card, .about-card, .feature-item').forEach(el => {
        observer.observe(el);
    });
});

// ===============================================
// KEYBOARD SHORTCUTS
// ===============================================

document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput?.focus();
    }
    
    // Ctrl/Cmd + D to toggle dark mode
    if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        toggleTheme();
    }
});

// ===============================================
// PRINT OPTIMIZATION
// ===============================================

window.addEventListener('beforeprint', () => {
    // Expand all collapsed sections before printing
    const expandButtons = document.querySelectorAll('.expand-toggle');
    expandButtons.forEach(button => {
        const content = button.nextElementSibling;
        if (content) {
            content.style.display = 'block';
        }
    });
});

// ===============================================
// PERFORMANCE MONITORING
// ===============================================

if ('performance' in window) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page loaded in ${pageLoadTime}ms`);
    });
}

console.log('🎓 RHCSA Study Guide - DevOps ni Diary');
console.log('💡 Keyboard shortcuts: Ctrl+K (Search), Ctrl+D (Dark Mode)');
