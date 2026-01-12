/**
 * DIGTRACKS - Main Application JavaScript
 * Converted from Next.js/React to vanilla JS
 */

(function() {
  'use strict';

  // ========================================
  // DOM Ready
  // ========================================
  document.addEventListener('DOMContentLoaded', function() {
    // Initialize i18n
    if (window.i18n) {
      window.i18n.init();
    }

    // Initialize all components
    initDropdowns();
    initMobileDrawer();
    initModals();
    initFAQ();
    initAlbumGrid();
    initScrollAnimations();
    initStickyNav();
    initLanguageSwitcher();
    initPasswordToggle();
    initPolicyModals();
  });

  // ========================================
  // Dropdown Menus
  // ========================================
  function initDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
      const trigger = dropdown.querySelector('button, .nav-link');
      const menu = dropdown.querySelector('.dropdown-menu');

      if (!trigger || !menu) return;

      let timeoutId;

      // Desktop: hover behavior
      dropdown.addEventListener('mouseenter', function() {
        clearTimeout(timeoutId);
        closeAllDropdowns();
        dropdown.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      });

      dropdown.addEventListener('mouseleave', function() {
        timeoutId = setTimeout(() => {
          dropdown.classList.remove('open');
          trigger.setAttribute('aria-expanded', 'false');
        }, 150);
      });

      // Mobile/Touch: click behavior
      trigger.addEventListener('click', function(e) {
        if (window.innerWidth < 1024) {
          e.preventDefault();
          const isOpen = dropdown.classList.contains('open');
          closeAllDropdowns();
          if (!isOpen) {
            dropdown.classList.add('open');
            trigger.setAttribute('aria-expanded', 'true');
          }
        }
      });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.dropdown')) {
        closeAllDropdowns();
      }
    });
  }

  function closeAllDropdowns() {
    document.querySelectorAll('.dropdown.open').forEach(dropdown => {
      dropdown.classList.remove('open');
      const trigger = dropdown.querySelector('button, .nav-link');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    });
  }

  // ========================================
  // Mobile Drawer
  // ========================================
  function initMobileDrawer() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const drawer = document.getElementById('mobile-drawer');
    const backdrop = document.getElementById('mobile-drawer-backdrop');
    const closeBtn = document.getElementById('mobile-drawer-close');

    if (!menuBtn || !drawer) return;

    function openDrawer() {
      drawer.classList.add('open');
      if (backdrop) backdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      drawer.classList.remove('open');
      if (backdrop) backdrop.classList.remove('open');
      document.body.style.overflow = '';
    }

    menuBtn.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (backdrop) backdrop.addEventListener('click', closeDrawer);

    // Mobile dropdown submenus
    document.querySelectorAll('[data-mobile-dropdown]').forEach(btn => {
      btn.addEventListener('click', function() {
        const target = this.getAttribute('data-mobile-dropdown');
        const submenu = document.getElementById('mobile-submenu-' + target);
        if (submenu) {
          submenu.classList.toggle('open');
          const chevron = this.querySelector('svg');
          if (chevron) {
            chevron.style.transform = submenu.classList.contains('open') ? 'rotate(180deg)' : '';
          }
        }
      });
    });

    // Close drawer on link click
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeDrawer);
    });
  }

  // ========================================
  // Registration Modal
  // ========================================
  function initModals() {
    const modal = document.getElementById('registration-modal');
    const modalClose = document.getElementById('modal-close');

    if (!modal) return;

    // Buttons that open modal
    const openButtons = [
      'login-btn',
      'mobile-login-btn',
      'hero-cta-btn',
      'sticky-cta-btn',
      'pricing-cta-btn',
      'final-cta-btn',
      'massive-cta-btn'
    ];

    openButtons.forEach(id => {
      const btn = document.getElementById(id);
      if (btn) {
        btn.addEventListener('click', function() {
          openModal(modal);
        });
      }
    });

    // Close button
    if (modalClose) {
      modalClose.addEventListener('click', function() {
        closeModal(modal);
      });
    }

    // Close on backdrop click
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeModal(modal);
      }
    });

    // Close on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal(modal);
      }
    });

    // Form submission
    const form = document.getElementById('registration-form');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Handle form submission here
        alert('Registration submitted! (Demo)');
        closeModal(modal);
      });
    }
  }

  function openModal(modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // ========================================
  // FAQ Accordion
  // ========================================
  function initFAQ() {
    const faqList = document.getElementById('faq-list');
    if (!faqList) return;

    // Get FAQ items from translations
    const faqItems = window.i18n ? window.i18n.t('Faq.items') : [];

    if (!Array.isArray(faqItems)) return;

    // Generate FAQ HTML
    faqList.innerHTML = faqItems.map((item, index) => `
      <div class="faq-item fade-in fade-in-delay-${index % 4}" data-faq-index="${index}">
        <button class="faq-question" type="button">
          <span>${item.question}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">${item.answer}</div>
        </div>
      </div>
    `).join('');

    // Add click handlers
    faqList.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', function() {
        const item = this.closest('.faq-item');
        const wasOpen = item.classList.contains('open');

        // Close all items
        faqList.querySelectorAll('.faq-item').forEach(faqItem => {
          faqItem.classList.remove('open');
        });

        // Open clicked item if it wasn't already open
        if (!wasOpen) {
          item.classList.add('open');
        }
      });
    });

    // Update FAQ on locale change
    window.addEventListener('localeChanged', function() {
      initFAQ();
    });
  }

  // ========================================
  // Album Grid (Massive Library Section)
  // ========================================
  function initAlbumGrid() {
    const grid = document.getElementById('album-grid');
    if (!grid) return;

    const albumArts = [
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1508854710579-5cecc3a9ff17?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1485579149621-3123dd979885?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1501612780327-45045538702b?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1460667262436-cf19894f4774?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1499415479124-43c32433a620?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1445375011782-2384686778a0?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1517230878791-4d28214057c2?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1461784121038-f088ca1e7714?w=300&h=300&fit=crop',
    ];

    grid.innerHTML = albumArts.map(src => `
      <div class="massive-library-bg-item">
        <img src="${src}" alt="" loading="lazy">
      </div>
    `).join('');
  }

  // ========================================
  // Scroll Animations
  // ========================================
  function initScrollAnimations() {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });
  }

  // ========================================
  // Sticky Navigation
  // ========================================
  function initStickyNav() {
    const stickyNav = document.getElementById('sticky-nav');
    const header = document.getElementById('header');

    if (!stickyNav || !header) return;

    let lastScrollY = window.scrollY;
    let headerHeight = header.offsetHeight;

    window.addEventListener('scroll', function() {
      const currentScrollY = window.scrollY;

      // Show/hide sticky nav based on scroll direction
      if (currentScrollY > headerHeight) {
        if (currentScrollY < lastScrollY) {
          // Scrolling up - show sticky nav
          stickyNav.classList.remove('hidden');
        } else {
          // Scrolling down - hide sticky nav
          stickyNav.classList.add('hidden');
        }
      } else {
        stickyNav.classList.add('hidden');
      }

      lastScrollY = currentScrollY;
    });

    // Smooth scroll for anchor links
    stickyNav.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          const offset = stickyNav.offsetHeight + 20;
          const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ========================================
  // Language Switcher
  // ========================================
  function initLanguageSwitcher() {
    // Language switch links
    document.querySelectorAll('[data-lang]').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const lang = this.getAttribute('data-lang');
        if (window.i18n) {
          window.i18n.setLocale(lang);
        }
        closeAllDropdowns();
      });
    });
  }

  // ========================================
  // Password Toggle
  // ========================================
  function initPasswordToggle() {
    document.querySelectorAll('.form-password-toggle').forEach(btn => {
      btn.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const input = document.getElementById(targetId);
        const eyeIcon = this.querySelector('.eye-icon');
        const eyeOffIcon = this.querySelector('.eye-off-icon');

        if (input) {
          if (input.type === 'password') {
            input.type = 'text';
            if (eyeIcon) eyeIcon.style.display = 'none';
            if (eyeOffIcon) eyeOffIcon.style.display = 'block';
          } else {
            input.type = 'password';
            if (eyeIcon) eyeIcon.style.display = 'block';
            if (eyeOffIcon) eyeOffIcon.style.display = 'none';
          }
        }
      });
    });
  }

  // ========================================
  // Policy Modals (Cookie, Privacy, Terms)
  // ========================================
  function initPolicyModals() {
    // Cookie Policy
    const cookieLink = document.getElementById('cookie-link');
    const cookieModal = document.getElementById('cookie-modal');
    const cookieContent = document.getElementById('cookie-policy-content');

    if (cookieLink && cookieModal && cookieContent) {
      cookieLink.addEventListener('click', function(e) {
        e.preventDefault();
        renderCookiePolicy();
        openModal(cookieModal);
      });
    }

    // Privacy Policy
    const privacyLink = document.getElementById('privacy-link');
    const privacyModal = document.getElementById('privacy-modal');
    const privacyContent = document.getElementById('privacy-policy-content');

    if (privacyLink && privacyModal && privacyContent) {
      privacyLink.addEventListener('click', function(e) {
        e.preventDefault();
        renderPrivacyPolicy();
        openModal(privacyModal);
      });
    }

    // Terms of Use
    const termsLink = document.getElementById('terms-link');
    const termsModal = document.getElementById('terms-modal');
    const termsContent = document.getElementById('terms-policy-content');

    if (termsLink && termsModal && termsContent) {
      termsLink.addEventListener('click', function(e) {
        e.preventDefault();
        renderTermsOfUse();
        openModal(termsModal);
      });
    }

    // Close buttons for policy modals
    document.querySelectorAll('[data-close-modal]').forEach(btn => {
      btn.addEventListener('click', function() {
        const modalId = this.getAttribute('data-close-modal');
        const modal = document.getElementById(modalId);
        if (modal) closeModal(modal);
      });
    });

    // Close on backdrop click
    [cookieModal, privacyModal, termsModal].forEach(modal => {
      if (modal) {
        modal.addEventListener('click', function(e) {
          if (e.target === modal) {
            closeModal(modal);
          }
        });
      }
    });
  }

  function renderCookiePolicy() {
    const content = document.getElementById('cookie-policy-content');
    if (!content || !window.i18n) return;

    const t = (key) => window.i18n.t('CookiePolicy.' + key);

    content.innerHTML = `
      <section>
        <h3>${t('section1Title')}</h3>
        <p>${t('section1Content')}</p>
      </section>
      <section>
        <h3>${t('section2Title')}</h3>
        <p>${t('section2Intro')}</p>
        <ul>
          <li><strong>${t('essentialCookies')}</strong> ${t('essentialCookiesDesc')}</li>
          <li><strong>${t('functionalCookies')}</strong> ${t('functionalCookiesDesc')}</li>
          <li><strong>${t('analyticsCookies')}</strong> ${t('analyticsCookiesDesc')}</li>
          <li><strong>${t('advertisingCookies')}</strong> ${t('advertisingCookiesDesc')}</li>
        </ul>
      </section>
      <section>
        <h3>${t('section3Title')}</h3>
        <p>${t('section3Intro')}</p>
        <ul>
          <li>${t('acceptAllCookies')}</li>
          <li>${t('notifyOnCookies')}</li>
          <li>${t('rejectAllCookies')}</li>
        </ul>
        <p><em>${t('section3Note')}</em></p>
      </section>
      <section>
        <h3>${t('section4Title')}</h3>
        <p>${t('section4Content')}</p>
      </section>
      <section>
        <h3>${t('section5Title')}</h3>
        <p>${t('section5Content')}</p>
      </section>
      <section>
        <h3>${t('section6Title')}</h3>
        <p>${t('section6Content')}</p>
      </section>
    `;
  }

  function renderPrivacyPolicy() {
    const content = document.getElementById('privacy-policy-content');
    if (!content || !window.i18n) return;

    const t = (key) => window.i18n.t('PrivacyPolicy.' + key);

    let html = '';
    for (let i = 1; i <= 9; i++) {
      html += `
        <section>
          <h3>${t('section' + i + 'Title')}</h3>
          <p>${t('section' + i + 'Content')}</p>
        </section>
      `;
    }

    content.innerHTML = html;
  }

  function renderTermsOfUse() {
    const content = document.getElementById('terms-policy-content');
    if (!content || !window.i18n) return;

    const t = (key) => window.i18n.t('TermsOfUse.' + key);

    content.innerHTML = `
      <section>
        <p>${t('intro')}</p>
        <p>${t('intro1')}</p>
        <p>${t('intro2')}</p>
        <p>${t('intro3')}</p>
        <p>${t('intro4')}</p>
      </section>
    `;
  }

  // ========================================
  // Utility Functions
  // ========================================

  // Debounce function
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

  // Throttle function
  function throttle(func, limit) {
    let inThrottle;
    return function executedFunction(...args) {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

})();
