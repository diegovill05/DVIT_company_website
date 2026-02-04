// JavaScript for IT Support & Consulting website

(function() {
    'use strict';

    // ===========================
    // Set current year in footer
    // ===========================
    function setCurrentYear() {
        const yearElement = document.getElementById('current-year');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    }

    // ===========================
    // Mobile Navigation Toggle
    // ===========================
    function initMobileNav() {
        const mobileToggle = document.querySelector('.mobile-nav-toggle');
        const mainNav = document.querySelector('.main-nav');

        if (!mobileToggle || !mainNav) return;

        mobileToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            // Toggle aria-expanded attribute
            this.setAttribute('aria-expanded', !isExpanded);

            // Toggle active class on nav
            mainNav.classList.toggle('active');
        });

        // Close mobile nav when clicking a nav link
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                mainNav.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close mobile nav when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = mainNav.contains(event.target);
            const isClickOnToggle = mobileToggle.contains(event.target);

            if (!isClickInsideNav && !isClickOnToggle && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // ===========================
    // Smooth Scroll for Anchor Links
    // ===========================
    function initSmoothScroll() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');

        anchorLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');

                // Skip empty anchors or just "#"
                if (!href || href === '#') return;

                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    e.preventDefault();

                    // Get header height for offset
                    const header = document.querySelector('.site-header');
                    const headerHeight = header ? header.offsetHeight : 0;

                    // Calculate scroll position
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                    // Smooth scroll to target
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ===========================
    // Sticky Header Shadow on Scroll
    // ===========================
    function initHeaderScroll() {
        const header = document.querySelector('.site-header');

        if (!header) return;

        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 0) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // ===========================
    // Active Nav Link on Scroll
    // ===========================
    function initActiveNavLinks() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

        if (sections.length === 0 || navLinks.length === 0) return;

        function updateActiveLink() {
            const scrollPosition = window.pageYOffset + 100; // Offset for better UX

            let currentSection = '';

            sections.forEach(function(section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id');
                }
            });

            // Remove active class from all links
            navLinks.forEach(function(link) {
                link.classList.remove('active');

                // Add active class to matching link
                const href = link.getAttribute('href');
                if (href === '#' + currentSection) {
                    link.classList.add('active');
                }
            });

            // Handle edge case: if at top of page, activate home/first link
            if (window.pageYOffset < 100) {
                navLinks.forEach(function(link) {
                    link.classList.remove('active');
                });
                const firstLink = document.querySelector('.main-nav a[href="#home"]');
                if (firstLink) {
                    firstLink.classList.add('active');
                }
            }
        }

        // Throttle scroll event for performance
        let scrollTimeout;
        window.addEventListener('scroll', function() {
            if (scrollTimeout) {
                window.cancelAnimationFrame(scrollTimeout);
            }

            scrollTimeout = window.requestAnimationFrame(function() {
                updateActiveLink();
            });
        });

        // Initial call to set active link on page load
        updateActiveLink();
    }

    // ===========================
    // Initialize all functions on DOM ready
    // ===========================
    function init() {
        setCurrentYear();
        initMobileNav();
        initSmoothScroll();
        initHeaderScroll();
        initActiveNavLinks();
    }

    // Run initialization when DOM is fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
