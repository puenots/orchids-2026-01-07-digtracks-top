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
    initPopularSection();
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

    // Buttons that open registration modal (CTA buttons only)
    const openButtons = [
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

    // Login buttons - redirect to signin page
    const loginButtons = ['login-btn', 'mobile-login-btn'];
    loginButtons.forEach(id => {
      const btn = document.getElementById(id);
      if (btn) {
        btn.addEventListener('click', function() {
          window.location.href = 'users/sign_in.html';
        });
      }
    });

    // Login link inside registration modal
    const loginLink = document.getElementById('login-link');
    if (loginLink) {
      loginLink.addEventListener('click', function() {
        closeModal(modal);
        window.location.href = 'users/sign_in.html';
      });
    }

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

    // Form submission with password validation
    const form = document.getElementById('registration-form');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const submitButton = document.getElementById('registration-submit');
    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirmPassword-error');
    const MIN_PASSWORD_LENGTH = 8;

    function getErrorMessage(type) {
      if (window.i18n) {
        if (type === 'minLength') {
          return window.i18n.t('Validation.password.minLength');
        } else if (type === 'mismatch') {
          return window.i18n.t('Validation.password.mismatch');
        }
      }
      // Fallback messages
      if (type === 'minLength') {
        return 'パスワードは8文字以上で入力してください。';
      }
      return 'パスワードが一致しません。';
    }

    function validateAndUpdate() {
      if (!passwordInput || !confirmPasswordInput || !submitButton) return;

      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;

      // Check password length
      const passwordTooShort = password.length > 0 && password.length < MIN_PASSWORD_LENGTH;
      if (passwordTooShort && passwordError) {
        passwordInput.style.borderColor = '#ef4444';
        passwordError.textContent = getErrorMessage('minLength');
        passwordError.style.display = 'block';
      } else if (passwordError) {
        passwordInput.style.borderColor = '';
        passwordError.style.display = 'none';
      }

      // Check password match
      const passwordsDoNotMatch = confirmPassword.length > 0 && password !== confirmPassword;
      if (passwordsDoNotMatch && confirmPasswordError) {
        confirmPasswordInput.style.borderColor = '#ef4444';
        confirmPasswordError.textContent = getErrorMessage('mismatch');
        confirmPasswordError.style.display = 'block';
      } else if (confirmPasswordError) {
        confirmPasswordInput.style.borderColor = '';
        confirmPasswordError.style.display = 'none';
      }

      // Update button state
      const isValid = password.length >= MIN_PASSWORD_LENGTH &&
                     confirmPassword.length > 0 &&
                     password === confirmPassword;

      submitButton.disabled = !isValid;
      if (isValid) {
        submitButton.style.backgroundColor = '';
        submitButton.style.cursor = '';
        submitButton.style.opacity = '';
      } else {
        submitButton.style.backgroundColor = '#52525b';
        submitButton.style.cursor = 'not-allowed';
        submitButton.style.opacity = '0.5';
      }
    }

    // Add event listeners
    if (passwordInput) {
      passwordInput.addEventListener('input', validateAndUpdate);
      passwordInput.addEventListener('keyup', validateAndUpdate);
    }

    if (confirmPasswordInput) {
      confirmPasswordInput.addEventListener('input', validateAndUpdate);
      confirmPasswordInput.addEventListener('keyup', validateAndUpdate);
    }

    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();

        const password = passwordInput ? passwordInput.value : '';
        const confirmPassword = confirmPasswordInput ? confirmPasswordInput.value : '';

        // Validate password length
        if (password.length < MIN_PASSWORD_LENGTH) {
          validateAndUpdate();
          if (passwordInput) passwordInput.focus();
          return;
        }

        // Validate password match
        if (password !== confirmPassword) {
          validateAndUpdate();
          if (confirmPasswordInput) confirmPasswordInput.focus();
          return;
        }

        // All validations passed, redirect to verification page
        window.location.href = 'verify.html';
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
    if (!stickyNav) return;

    const navLinks = stickyNav.querySelectorAll('.sticky-nav-link');
    const sectionIds = Array.from(navLinks).map(link => link.getAttribute('href').slice(1));

    // Active section tracking with IntersectionObserver
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '-80px 0px 0px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const activeId = entry.target.id;
          navLinks.forEach(link => {
            const linkHref = link.getAttribute('href').slice(1);
            if (linkHref === activeId) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    // Observe all sections
    sectionIds.forEach(id => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    // Smooth scroll for anchor links
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          const offset = 80; // Match sticky nav height
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
            if (eyeIcon) eyeIcon.style.display = 'block';
            if (eyeOffIcon) eyeOffIcon.style.display = 'none';
          } else {
            input.type = 'password';
            if (eyeIcon) eyeIcon.style.display = 'none';
            if (eyeOffIcon) eyeOffIcon.style.display = 'block';
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
  // Popular Section (Genre Ranking)
  // ========================================
  function initPopularSection() {
    const tabsContainer = document.getElementById('popular-tabs');
    const grid = document.getElementById('popular-grid');
    const progressBar = document.getElementById('popular-progress-bar');

    if (!tabsContainer || !grid || !progressBar) return;

    const GENRES = ['HIP HOP', 'R&B', 'DANCE', 'REGGAE', 'LATIN', 'INTERNATIONAL', 'MAINSTREAM'];
    const AUTO_SWITCH_INTERVAL = 6000;

    const RANKING_DATA = {
      'HIP HOP': [
        { id: 'h1', title: 'Rich Flex', artist: 'Drake & 21 Savage', bpm: 154, key: '12A', artwork: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&h=400&fit=crop' },
        { id: 'h2', title: 'Just Wanna Rock', artist: 'Lil Uzi Vert', bpm: 150, key: '4A', artwork: 'https://images.unsplash.com/photo-1514525253344-f8570094d81b?w=400&h=400&fit=crop' },
        { id: 'h3', title: 'Superhero', artist: 'Metro Boomin', bpm: 117, key: '5A', artwork: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&h=400&fit=crop' },
        { id: 'h4', title: "Creepin'", artist: 'Metro Boomin, The Weeknd & 21 Savage', bpm: 98, key: '1A', artwork: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=400&h=400&fit=crop' },
        { id: 'h5', title: 'Shirt', artist: 'SZA', bpm: 120, key: '8A', artwork: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop' }
      ],
      'R&B': [
        { id: 'r1', title: 'Kill Bill', artist: 'SZA', bpm: 89, key: '11A', artwork: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop' },
        { id: 'r2', title: 'Cuff It', artist: 'Beyoncé', bpm: 115, key: '8A', artwork: 'https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?w=400&h=400&fit=crop' },
        { id: 'r3', title: 'Under The Influence', artist: 'Chris Brown', bpm: 116, key: '6A', artwork: 'https://images.unsplash.com/photo-1518911710364-17ec553bde5d?w=400&h=400&fit=crop' },
        { id: 'r4', title: 'Snooze', artist: 'SZA', bpm: 143, key: '2B', artwork: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=400&fit=crop' },
        { id: 'r5', title: 'Wait For U', artist: 'Future, Drake & Tems', bpm: 84, key: '1A', artwork: 'https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?w=400&h=400&fit=crop' }
      ],
      'DANCE': [
        { id: 'd1', title: "I'm Good (Blue)", artist: 'David Guetta & Bebe Rexha', bpm: 128, key: '6A', artwork: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=400&fit=crop' },
        { id: 'd2', title: 'Unholy', artist: 'Sam Smith & Kim Petras', bpm: 131, key: '9A', artwork: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=400&fit=crop' },
        { id: 'd3', title: 'Forget Me', artist: 'Lewis Capaldi', bpm: 126, key: '2A', artwork: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=400&fit=crop' },
        { id: 'd4', title: 'B.O.T.A.', artist: 'Eliza Rose', bpm: 137, key: '10A', artwork: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop' },
        { id: 'd5', title: 'Deep Down', artist: 'Alok, Ella Eyre & Kenny Dope', bpm: 124, key: '4B', artwork: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=400&fit=crop' }
      ],
      'REGGAE': [
        { id: 're1', title: 'Last Last', artist: 'Burna Boy', bpm: 125, key: '4A', artwork: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=400&fit=crop' },
        { id: 're2', title: 'Calm Down', artist: 'Rema', bpm: 107, key: '2A', artwork: 'https://images.unsplash.com/photo-1453090927415-5f45085b65c0?w=400&h=400&fit=crop' },
        { id: 're3', title: 'Essence', artist: 'Wizkid ft. Tems', bpm: 102, key: '11B', artwork: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400&h=400&fit=crop' },
        { id: 're4', title: 'Free Mind', artist: 'Tems', bpm: 95, key: '10A', artwork: 'https://images.unsplash.com/photo-1514533212735-5df27d970db0?w=400&h=400&fit=crop' },
        { id: 're5', title: 'Rush', artist: 'Ayra Starr', bpm: 102, key: '8A', artwork: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=400&h=400&fit=crop' }
      ],
      'LATIN': [
        { id: 'l1', title: 'Tití Me Preguntó', artist: 'Bad Bunny', bpm: 111, key: '9A', artwork: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=400&h=400&fit=crop' },
        { id: 'l2', title: 'Me Porto Bonito', artist: 'Bad Bunny & Chencho Corleone', bpm: 92, key: '10A', artwork: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=400&fit=crop' },
        { id: 'l3', title: 'Bzrp Music Sessions, Vol. 52', artist: 'Bizarrap & Quevedo', bpm: 128, key: '1B', artwork: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop' },
        { id: 'l4', title: 'Provenza', artist: 'Karol G', bpm: 125, key: '5A', artwork: 'https://images.unsplash.com/photo-1499415479124-43c32433a620?w=400&h=400&fit=crop' },
        { id: 'l5', title: 'Despechá', artist: 'Rosalía', bpm: 130, key: '12A', artwork: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=400&h=400&fit=crop' }
      ],
      'INTERNATIONAL': [
        { id: 'i1', title: 'Ditto', artist: 'NewJeans', bpm: 134, key: '8B', artwork: 'https://images.unsplash.com/photo-1491333078588-55b6733c7de6?w=400&h=400&fit=crop' },
        { id: 'i2', title: 'OMG', artist: 'NewJeans', bpm: 127, key: '10B', artwork: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop' },
        { id: 'i3', title: 'Anti-Hero', artist: 'Taylor Swift', bpm: 97, key: '1B', artwork: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=400&fit=crop' },
        { id: 'i4', title: 'Unholy', artist: 'Sam Smith & Kim Petras', bpm: 131, key: '5A', artwork: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=400&h=400&fit=crop' },
        { id: 'i5', title: "Star Walkin'", artist: 'Lil Nas X', bpm: 142, key: '12A', artwork: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=400&h=400&fit=crop' }
      ],
      'MAINSTREAM': [
        { id: 'm1', title: 'As It Was', artist: 'Harry Styles', bpm: 174, key: '4A', artwork: 'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=400&h=400&fit=crop' },
        { id: 'm2', title: 'Bad Habit', artist: 'Steve Lacy', bpm: 169, key: '2A', artwork: 'https://images.unsplash.com/photo-1526218626217-dc65a29bb444?w=400&h=400&fit=crop' },
        { id: 'm3', title: 'About Damn Time', artist: 'Lizzo', bpm: 109, key: '11B', artwork: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=400&fit=crop' },
        { id: 'm4', title: 'Vegas', artist: 'Doja Cat', bpm: 160, key: '10A', artwork: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&h=400&fit=crop' },
        { id: 'm5', title: 'First Class', artist: 'Jack Harlow', bpm: 107, key: '8A', artwork: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=400&h=400&fit=crop' }
      ]
    };

    const CAMELOT_COLORS = {
      '1A': '#ADFFD6', '2A': '#ADFFAD', '3A': '#D7FFAE', '4A': '#FFFFAD',
      '5A': '#FFD6AD', '6A': '#FFADAE', '7A': '#FFADD7', '8A': '#FFADFF',
      '9A': '#D6ADFF', '10A': '#ADAEFF', '11A': '#ADD6FF', '12A': '#ADFFFF',
      '1B': '#5BFFAD', '2B': '#5CFF5D', '3B': '#AEFF5D', '4B': '#FAFB5B',
      '5B': '#FEAD5C', '6B': '#F35A5C', '7B': '#FF5CAC', '8B': '#FF5CFE',
      '9B': '#AD5CFF', '10B': '#5B5CFF', '11B': '#5DADFF', '12B': '#5BFFFF'
    };

    let currentGenreIndex = 0;
    let autoSwitchTimer = null;
    let progressTimer = null;
    let startTime = Date.now();

    function renderTracks(genre) {
      const tracks = RANKING_DATA[genre] || [];
      grid.innerHTML = tracks.map((track, index) => `
        <div class="popular-track">
          <div class="popular-track-image">
            <span class="popular-track-rank">${index + 1}</span>
            <img src="${track.artwork}" alt="${track.title}" loading="lazy">
          </div>
          <div class="popular-track-info">
            <h3 class="popular-track-title">${track.title}</h3>
            <div class="popular-track-meta">
              <span class="popular-track-artist">${track.artist}</span>
              <div class="popular-track-details">
                <span class="popular-track-bpm">${track.bpm}</span>
                <span class="popular-track-separator">/</span>
                <span class="popular-track-key" style="color: ${CAMELOT_COLORS[track.key] || '#71717a'}">${track.key}</span>
              </div>
            </div>
          </div>
        </div>
      `).join('');
    }

    function setActiveTab(index) {
      const tabs = tabsContainer.querySelectorAll('.popular-tab');
      tabs.forEach((tab, i) => {
        tab.classList.toggle('active', i === index);
      });
      currentGenreIndex = index;
      renderTracks(GENRES[index]);
      resetProgress();
    }

    function nextGenre() {
      currentGenreIndex = (currentGenreIndex + 1) % GENRES.length;
      setActiveTab(currentGenreIndex);
    }

    function resetProgress() {
      startTime = Date.now();
      progressBar.style.width = '0%';
    }

    function updateProgress() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min((elapsed / AUTO_SWITCH_INTERVAL) * 100, 100);
      progressBar.style.width = progress + '%';

      if (elapsed >= AUTO_SWITCH_INTERVAL) {
        nextGenre();
      }
    }

    function startAutoSwitch() {
      stopAutoSwitch();
      progressTimer = setInterval(updateProgress, 50);
    }

    function stopAutoSwitch() {
      if (progressTimer) {
        clearInterval(progressTimer);
        progressTimer = null;
      }
    }

    // Tab click handlers
    tabsContainer.querySelectorAll('.popular-tab').forEach((tab, index) => {
      tab.addEventListener('click', function() {
        setActiveTab(index);
      });
    });

    // Initialize
    renderTracks(GENRES[0]);
    startAutoSwitch();
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
