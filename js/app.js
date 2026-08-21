/* ============================================================
   EXHIBIT A — Core Application Logic
   Cart state (localStorage), directory overlay, scroll reveal,
   dynamic header updates, and shared utilities.
   ============================================================ */

(function() {
  'use strict';

  // ══════════════════════════════════════════════════════════
  // CART — localStorage-backed collection
  // ══════════════════════════════════════════════════════════

  const CART_KEY = 'exhibitA_collection';

  const Cart = {
    getItems() {
      try {
        return JSON.parse(localStorage.getItem(CART_KEY)) || [];
      } catch {
        return [];
      }
    },

    saveItems(items) {
      localStorage.setItem(CART_KEY, JSON.stringify(items));
      Cart.updateUI();
    },

    addItem(product, size, qty = 1) {
      const items = Cart.getItems();
      const existing = items.find(i => i.id === product.id && i.size === size);

      if (existing) {
        existing.qty += qty;
      } else {
        items.push({
          id: product.id,
          title: product.title,
          image: product.image || null,
          wing: product.wing,
          wingLabel: product.wingLabel,
          medium: product.medium,
          mediumLabel: product.mediumLabel,
          plate_no: product.plate_no,
          price: product.price,
          size: size,
          qty: qty,
          is_commission: product.is_commission || false,
          custom_text: product.custom_text || null,
          custom_font: product.custom_font || null,
          custom_placement: product.custom_placement || null
        });
      }

      Cart.saveItems(items);
      Cart.showNotification(product.title);
    },

    removeItem(id, size) {
      let items = Cart.getItems();
      items = items.filter(i => !(i.id === id && i.size === size));
      Cart.saveItems(items);
    },

    updateQty(id, size, qty) {
      const items = Cart.getItems();
      const item = items.find(i => i.id === id && i.size === size);
      if (item) {
        item.qty = Math.max(1, qty);
        Cart.saveItems(items);
      }
    },

    getCount() {
      return Cart.getItems().reduce((sum, i) => sum + i.qty, 0);
    },

    getTotal() {
      return Cart.getItems().reduce((sum, i) => sum + (i.price * i.qty), 0);
    },

    clear() {
      localStorage.removeItem(CART_KEY);
      Cart.updateUI();
    },

    updateUI() {
      // Update all collection count badges
      const badges = document.querySelectorAll('.site-header__collection-count');
      const count = Cart.getCount();
      badges.forEach(badge => {
        badge.textContent = `(${count})`;
      });
    },

    showNotification(title) {
      // Create a brief "Added to Collection" notification
      const existing = document.querySelector('.cart-notification');
      if (existing) existing.remove();

      const notification = document.createElement('div');
      notification.className = 'cart-notification';
      notification.innerHTML = `
        <span class="cart-notification__text">Added to collection — ${title}</span>
      `;
      notification.style.cssText = `
        position: fixed;
        bottom: 32px;
        left: 50%;
        transform: translateX(-50%) translateY(20px);
        background-color: #17140F;
        color: #FAFAF7;
        padding: 14px 28px;
        font-family: 'IBM Plex Mono', monospace;
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        z-index: 1000;
        opacity: 0;
        transition: opacity 250ms ease, transform 250ms ease;
      `;

      document.body.appendChild(notification);

      // Animate in
      requestAnimationFrame(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(-50%) translateY(0)';
      });

      // Remove after 2.5s
      setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(-50%) translateY(20px)';
        setTimeout(() => notification.remove(), 300);
      }, 2500);
    }
  };

  // Expose Cart globally
  window.Cart = Cart;


  // ══════════════════════════════════════════════════════════
  // DIRECTORY OVERLAY — full-screen index nav
  // ══════════════════════════════════════════════════════════

  function initDirectory() {
    const openBtns = document.querySelectorAll('[data-directory-open]');
    const overlay = document.getElementById('directory-overlay');
    const closeBtn = document.querySelector('[data-directory-close]');

    if (!overlay) return;

    openBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        overlay.classList.add('is-open');
        document.body.style.overflow = 'hidden';
        // Focus trap
        closeBtn?.focus();
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        overlay.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    }

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
        overlay.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });
  }


  // ══════════════════════════════════════════════════════════
  // SCROLL REVEAL — fade + 8px rise, staggered (§8)
  // ══════════════════════════════════════════════════════════

  let revealObserver = null;

  function initScrollReveal() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Show everything immediately
      document.querySelectorAll('.reveal:not(.is-visible)').forEach(el => {
        el.classList.add('is-visible');
      });
      return;
    }

    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      });
    }

    document.querySelectorAll('.reveal:not(.is-visible)').forEach(el => {
      revealObserver.observe(el);
    });
  }

  // Expose so dynamically populated grids can trigger observation
  window.observeReveals = initScrollReveal;


  // ══════════════════════════════════════════════════════════
  // FILTER DROPDOWNS
  // ══════════════════════════════════════════════════════════

  function initFilters() {
    const filterGroups = document.querySelectorAll('.filter-group');

    filterGroups.forEach(group => {
      const label = group.querySelector('.filter-group__label');

      if (label) {
        label.addEventListener('click', (e) => {
          e.stopPropagation();
          // Close other open dropdowns
          filterGroups.forEach(g => {
            if (g !== group) g.classList.remove('is-open');
          });
          group.classList.toggle('is-open');
        });
      }

      // Handle option selection
      const options = group.querySelectorAll('.filter-option');
      options.forEach(option => {
        option.addEventListener('click', () => {
          options.forEach(o => o.classList.remove('is-active'));
          option.classList.add('is-active');
          group.classList.remove('is-open');

          // Update label text
          if (label) {
            const filterName = label.dataset.filterName || '';
            label.childNodes[0].textContent = option.textContent.trim() === 'All'
              ? filterName
              : option.textContent.trim() + ' ';
          }
        });
      });
    });

    // Close dropdowns on outside click
    document.addEventListener('click', () => {
      filterGroups.forEach(g => g.classList.remove('is-open'));
    });
  }


  // ══════════════════════════════════════════════════════════
  // SIZE SELECTOR
  // ══════════════════════════════════════════════════════════

  function initSizeSelector() {
    const sizeButtons = document.querySelectorAll('.size-btn:not(.is-disabled)');

    sizeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        sizeButtons.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
      });
    });
  }


  // ══════════════════════════════════════════════════════════
  // HELPERS
  // ══════════════════════════════════════════════════════════

  // Generate a Vitrine Card HTML string
  window.createVitrineCardHTML = function(product) {
    const accentMap = {
      anime: '#D62839',
      cinema: '#E3A008',
      commissions: '#2C4A6E',
      permanent: '#B08D57'
    };

    return `
      <a href="exhibit.html?id=${product.id}" class="vitrine-card reveal" data-wing="${product.wing}">
        <div class="vitrine-card__stage">
          <div class="vitrine-card__spotlight"></div>
          ${product.image ? `<img src="assets/${product.image}" alt="${product.title}" class="vitrine-card__image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">` : ''}
          <div class="vitrine-card__placeholder" ${product.image ? 'style="display: none;"' : ''}>
            <div class="vitrine-card__placeholder-icon"></div>
            <span class="vitrine-card__placeholder-text">${product.medium}</span>
          </div>
        </div>
        <div class="vitrine-card__placard">
          <div class="vitrine-card__plate">Plate No. ${product.plate_no}</div>
          <div class="vitrine-card__title">${product.title}</div>
          <div class="vitrine-card__meta">
            <span class="wing-dot" style="background-color: ${accentMap[product.wing]}"></span>
            <span>${product.wingLabel} · ${product.mediumLabel?.split(' ').pop() || product.medium}</span>
            <span class="vitrine-card__price">$${product.price}</span>
          </div>
        </div>
      </a>
    `;
  };

  // Get URL query param
  window.getQueryParam = function(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  };

  // Find product by ID
  window.findProduct = function(id) {
    return typeof CATALOG !== 'undefined' ? CATALOG.find(p => p.id === id) : null;
  };


  // ══════════════════════════════════════════════════════════
  // INIT
  // ══════════════════════════════════════════════════════════

  function init() {
    Cart.updateUI();
    initDirectory();
    initScrollReveal();
    initFilters();
    initSizeSelector();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
