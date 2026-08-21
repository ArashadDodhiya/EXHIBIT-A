/* ============================================================
   EXHIBIT A — Vitrine Card Spotlight Effect (§5, §8)
   Mouse-tracking spotlight drift on hover.
   Light source moves toward cursor position.
   ============================================================ */

(function() {
  'use strict';

  // Respect prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initVitrineSpotlight() {
    const cards = document.querySelectorAll('.vitrine-card');

    cards.forEach(card => {
      const stage = card.querySelector('.vitrine-card__stage');
      const spotlight = card.querySelector('.vitrine-card__spotlight');
      const image = card.querySelector('.vitrine-card__image') || card.querySelector('.vitrine-card__placeholder');

      if (!stage || !spotlight) return;

      if (prefersReducedMotion) return;

      card.addEventListener('mousemove', (e) => {
        const rect = stage.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        // Spotlight follows cursor with dampening
        spotlight.style.background = `radial-gradient(
          ellipse 60% 70% at ${x}% ${y}%,
          rgba(250, 250, 247, 0.12) 0%,
          transparent 70%
        )`;

        // Subtle image rotation toward cursor (±3 degrees max)
        if (image) {
          const rotateY = ((x - 50) / 50) * 3;
          const rotateX = ((y - 50) / 50) * -2;
          image.style.transform = `perspective(800px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
        }
      });

      card.addEventListener('mouseleave', () => {
        // Reset to center spotlight
        spotlight.style.background = `radial-gradient(
          ellipse 60% 70% at 50% 40%,
          rgba(250, 250, 247, 0.08) 0%,
          transparent 70%
        )`;

        if (image) {
          image.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg)';
        }
      });
    });
  }

  // Init on DOM ready and also expose for dynamic content
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVitrineSpotlight);
  } else {
    initVitrineSpotlight();
  }

  // Expose for re-initialization after dynamic content loads
  window.initVitrineSpotlight = initVitrineSpotlight;
})();
