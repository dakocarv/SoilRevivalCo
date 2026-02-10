/* ============================================
   SOIL REVIVAL CO — SCRIPTS
   Mobile menu, sticky header, form handling
   ============================================ */

(function () {
    'use strict';

    // ---------- ELEMENTS ----------
    const header = document.getElementById('site-header');
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('main-nav');
    const navLinks = nav.querySelectorAll('.nav-link, .nav-cta');
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');

    // ---------- MOBILE MENU ----------
    function openMenu() {
        hamburger.classList.add('active');
        nav.classList.add('open');
        hamburger.setAttribute('aria-expanded', 'true');
        hamburger.setAttribute('aria-label', 'Close menu');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        hamburger.classList.remove('active');
        nav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Open menu');
        document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', function () {
        if (nav.classList.contains('open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            closeMenu();
        });
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && nav.classList.contains('open')) {
            closeMenu();
            hamburger.focus();
        }
    });

    // ---------- STICKY HEADER SHADOW ----------
    var lastScroll = 0;

    function handleScroll() {
        var scrollY = window.scrollY || window.pageYOffset;

        if (scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = scrollY;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // ---------- CONTACT FORM ----------
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Basic client validation
            var name = contactForm.querySelector('#form-name');
            var email = contactForm.querySelector('#form-email');
            var message = contactForm.querySelector('#form-message');

            if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
                return;
            }

            // Show success message
            contactForm.hidden = true;
            formSuccess.hidden = false;
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Reset form in background
            contactForm.reset();
        });
    }

    // ---------- SMOOTH SCROLL POLYFILL (for older Safari) ----------
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;

            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                var headerHeight = header.offsetHeight;
                var targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Update URL hash without jump
                history.pushState(null, null, targetId);
            }
        });
    });

})();
