/* ============================================================
   EXHIBIT A — Commissions Studio (§6)
   Live text preview, garment/placement/font switching.
   ============================================================ */

(function() {
  'use strict';

  function initCommissionsStudio() {
    const textInput = document.getElementById('commission-text');
    const previewText = document.getElementById('commission-preview-text');
    const garmentToggles = document.querySelectorAll('[data-garment]');
    const placementToggles = document.querySelectorAll('[data-placement]');
    const fontToggles = document.querySelectorAll('[data-font]');
    const garmentLabel = document.getElementById('commission-garment-label');
    const placementLabels = document.querySelectorAll('.commission-preview__placement-label');

    if (!textInput || !previewText) return;

    // ── Live text preview ──
    textInput.addEventListener('input', (e) => {
      const text = e.target.value.trim();
      previewText.textContent = text || 'Your words here';
      previewText.style.opacity = text ? '1' : '0.4';
    });

    // ── Garment type toggle ──
    garmentToggles.forEach(btn => {
      btn.addEventListener('click', () => {
        garmentToggles.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        if (garmentLabel) {
          garmentLabel.textContent = btn.dataset.garment;
        }
      });
    });

    // ── Placement toggle ──
    placementToggles.forEach(btn => {
      btn.addEventListener('click', () => {
        placementToggles.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        const placement = btn.dataset.placement;

        // Move preview text position
        if (previewText) {
          previewText.style.transition = 'all 300ms ease';
          if (placement === 'chest') {
            previewText.style.marginTop = '-30%';
            previewText.style.fontSize = '';
          } else if (placement === 'back') {
            previewText.style.marginTop = '0';
            previewText.style.fontSize = '';
          } else if (placement === 'sleeve') {
            previewText.style.marginTop = '-20%';
            previewText.style.fontSize = '0.8em';
          }
        }

        // Highlight placement label
        placementLabels.forEach(label => {
          label.style.opacity = '0.25';
        });
        const activeLabel = document.querySelector(`.commission-preview__placement-label--${placement}`);
        if (activeLabel) {
          activeLabel.style.opacity = '1';
        }
      });
    });

    // ── Font style toggle ──
    fontToggles.forEach(btn => {
      btn.addEventListener('click', () => {
        fontToggles.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        const font = btn.dataset.font;

        // Remove all font classes
        previewText.classList.remove('font-serif', 'font-sans', 'font-mono');
        // Add selected
        previewText.classList.add(`font-${font}`);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCommissionsStudio);
  } else {
    initCommissionsStudio();
  }
})();
