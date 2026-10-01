/**
 * TypesetOK — Before / After Accessible Drag Slider
 * Compares Legacy/Raw Word Processor Output vs TypesetOK Knuth-Plass Typesetting.
 */
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('comparisonContainer');
  const afterLayer = document.getElementById('comparisonAfter');
  const handle = document.getElementById('comparisonHandle');

  if (!container || !afterLayer || !handle) return;

  let isDragging = false;
  let currentPercentage = 50; // default 50%

  function setSliderPosition(percentage) {
    // Clamp between 5% and 95%
    percentage = Math.max(5, Math.min(95, percentage));
    currentPercentage = percentage;

    // After layer width (from right to left in RTL)
    afterLayer.style.width = `${percentage}%`;
    handle.style.right = `${percentage}%`;
    handle.style.left = 'auto';

    // Update ARIA
    handle.setAttribute('aria-valuenow', Math.round(percentage));
  }

  function handleMove(clientX) {
    const rect = container.getBoundingClientRect();
    // In RTL, 0% is right edge, 100% is left edge
    const offsetX = rect.right - clientX;
    const percentage = (offsetX / rect.width) * 100;
    setSliderPosition(percentage);
  }

  // Mouse Events
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
  handle.addEventListener('touchstart', (e) => {
    isDragging = true;
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging || !e.touches.length) return;
    handleMove(e.touches[0].clientX);
  }, { passive: true });

  // Click on container to jump
  container.addEventListener('click', (e) => {
    // ignore if clicked on handle itself
    if (e.target === handle || handle.contains(e.target)) return;
    handleMove(e.clientX);
  });

  // Keyboard Navigation (WCAG 2.2 Accessible Slider)
  handle.addEventListener('keydown', (e) => {
    let handled = true;
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        setSliderPosition(currentPercentage - 5);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        setSliderPosition(currentPercentage + 5);
        break;
      case 'PageDown':
        setSliderPosition(currentPercentage - 15);
        break;
      case 'PageUp':
        setSliderPosition(currentPercentage + 15);
        break;
      case 'Home':
        setSliderPosition(5);
        break;
      case 'End':
        setSliderPosition(95);
        break;
      default:
        handled = false;
    }

    if (handled) {
      e.preventDefault();
    }
  });

  // Initialize
  setSliderPosition(50);
});
