/**
 * TypesetOK — Before / After Accessible Drag Slider
 * Compares Legacy Word Processor Output vs TypesetOK Knuth-Plass Typesetting.
 * Fully supports RTL & LTR modes, touch-action pan-y, presets, and keyboard navigation.
 */
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('comparisonContainer');
  const afterLayer = document.getElementById('comparisonAfter');
  const handle = document.getElementById('comparisonHandle');

  if (!container || !afterLayer || !handle) return;

  let isDragging = false;
  let currentPercentage = 50;

  function setSliderPosition(percentage, smooth = false) {
    percentage = Math.max(3, Math.min(97, percentage));
    currentPercentage = percentage;

    const isRtl = document.documentElement.dir !== 'ltr';

    if (smooth) {
      afterLayer.style.transition = 'width 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
      handle.style.transition = 'left 0.3s, right 0.3s';
    } else {
      afterLayer.style.transition = 'none';
      handle.style.transition = 'none';
    }

    if (isRtl) {
      afterLayer.style.width = `${percentage}%`;
      afterLayer.style.right = '0';
      afterLayer.style.left = 'auto';
      afterLayer.style.borderLeft = '2px solid var(--color-brand-blue)';
      afterLayer.style.borderRight = 'none';
      handle.style.right = `${percentage}%`;
      handle.style.left = 'auto';
    } else {
      afterLayer.style.width = `${percentage}%`;
      afterLayer.style.left = '0';
      afterLayer.style.right = 'auto';
      afterLayer.style.borderRight = '2px solid var(--color-brand-blue)';
      afterLayer.style.borderLeft = 'none';
      handle.style.left = `${percentage}%`;
      handle.style.right = 'auto';
    }

    handle.setAttribute('aria-valuenow', Math.round(percentage));
  }

  function handleMove(clientX) {
    const rect = container.getBoundingClientRect();
    const isRtl = document.documentElement.dir !== 'ltr';
    let percentage;

    if (isRtl) {
      const offsetX = rect.right - clientX;
      percentage = (offsetX / rect.width) * 100;
    } else {
      const offsetX = clientX - rect.left;
      percentage = (offsetX / rect.width) * 100;
    }
    setSliderPosition(percentage, false);
  }

  // Pointer / Mouse Events
  handle.addEventListener('mousedown', (e) => {
    isDragging = true;
    e.preventDefault();
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  });

  // Touch Events
  handle.addEventListener('touchstart', () => {
    isDragging = true;
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging || !e.touches.length) return;
    handleMove(e.touches[0].clientX);
  }, { passive: true });

  // Direct Click on container
  container.addEventListener('click', (e) => {
    if (e.target === handle || handle.contains(e.target)) return;
    handleMove(e.clientX);
  });

  // Keyboard navigation
  handle.addEventListener('keydown', (e) => {
    let handled = true;
    const isRtl = document.documentElement.dir !== 'ltr';
    const delta = isRtl ? -5 : 5;

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        setSliderPosition(currentPercentage + delta, true);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        setSliderPosition(currentPercentage - delta, true);
        break;
      case 'Home':
        setSliderPosition(5, true);
        break;
      case 'End':
        setSliderPosition(95, true);
        break;
      default:
        handled = false;
    }

    if (handled) {
      e.preventDefault();
    }
  });

  // Presets
  const btnBefore = document.getElementById('compPresetBefore');
  const btnHalf = document.getElementById('compPresetHalf');
  const btnAfter = document.getElementById('compPresetAfter');

  if (btnBefore) {
    btnBefore.addEventListener('click', () => setSliderPosition(10, true));
  }
  if (btnHalf) {
    btnHalf.addEventListener('click', () => setSliderPosition(50, true));
  }
  if (btnAfter) {
    btnAfter.addEventListener('click', () => setSliderPosition(90, true));
  }

  // Initial position
  setSliderPosition(50);
});
