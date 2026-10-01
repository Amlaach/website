/**
 * TypesetOK (TOK) — Universal Accessibility Engine (WCAG 2.2 AA/AAA)
 * Handles font scaling, high contrast, readable font, cursor, link highlights, and state persistence.
 */

document.addEventListener('DOMContentLoaded', () => {
  const triggerBtn = document.getElementById('a11yTriggerBtn');
  const drawer = document.getElementById('a11yDrawer');
  const closeBtn = document.getElementById('a11yCloseBtn');
  const resetBtn = document.getElementById('a11yResetBtn');
  const root = document.documentElement;

  if (!triggerBtn || !drawer) return;

  // Toggle drawer open/close
  triggerBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    triggerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    if (isOpen) {
      drawer.focus();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('open');
      triggerBtn.setAttribute('aria-expanded', 'false');
      triggerBtn.focus();
    });
  }

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      drawer.classList.remove('open');
      triggerBtn.setAttribute('aria-expanded', 'false');
      triggerBtn.focus();
    }
  });

  // State Management
  let a11yState = {
    fontScale: 0, // 0, 1, 2, 3
    highContrast: false,
    readableFont: false,
    highlightLinks: false,
    highlightHeadings: false,
    bigCursor: false,
    reducedMotion: false,
    lineSpacing: false,
    letterSpacing: false,
    monochrome: false
  };

  try {
    const saved = localStorage.getItem('tok_a11y_state');
    if (saved) {
      a11yState = Object.assign(a11yState, JSON.parse(saved));
    }
  } catch (err) {
    // Ignore localStorage parse errors
  }

  function applyA11yState() {
    // Font Scale
    if (a11yState.fontScale > 0) {
      root.setAttribute('data-font-scale', String(a11yState.fontScale));
    } else {
      root.removeAttribute('data-font-scale');
    }

    // High Contrast
    if (a11yState.highContrast) {
      root.setAttribute('data-high-contrast', 'true');
    } else {
      root.removeAttribute('data-high-contrast');
    }

    // Readable Font
    if (a11yState.readableFont) {
      root.setAttribute('data-readable-font', 'true');
    } else {
      root.removeAttribute('data-readable-font');
    }

    // Highlight Links
    if (a11yState.highlightLinks) {
      root.setAttribute('data-highlight-links', 'true');
    } else {
      root.removeAttribute('data-highlight-links');
    }

    // Highlight Headings
    if (a11yState.highlightHeadings) {
      root.setAttribute('data-highlight-headings', 'true');
    } else {
      root.removeAttribute('data-highlight-headings');
    }

    // Big Cursor
    if (a11yState.bigCursor) {
      root.setAttribute('data-big-cursor', 'true');
    } else {
      root.removeAttribute('data-big-cursor');
    }

    // Reduced Motion
    if (a11yState.reducedMotion) {
      root.setAttribute('data-reduced-motion', 'true');
    } else {
      root.removeAttribute('data-reduced-motion');
    }

    // Line Spacing
    if (a11yState.lineSpacing) {
      root.setAttribute('data-line-spacing', 'wide');
    } else {
      root.removeAttribute('data-line-spacing');
    }

    // Letter Spacing
    if (a11yState.letterSpacing) {
      root.setAttribute('data-letter-spacing', 'wide');
    } else {
      root.removeAttribute('data-letter-spacing');
    }

    // Monochrome
    if (a11yState.monochrome) {
      root.setAttribute('data-monochrome', 'true');
    } else {
      root.removeAttribute('data-monochrome');
    }

    // Update active button indicators in the drawer
    updateButtonStates();

    // Persist to localStorage
    try {
      localStorage.setItem('tok_a11y_state', JSON.stringify(a11yState));
    } catch (e) {}
  }

  function updateButtonStates() {
    const btnMap = {
      'btnA11yContrast': a11yState.highContrast,
      'btnA11yReadableFont': a11yState.readableFont,
      'btnA11yLinks': a11yState.highlightLinks,
      'btnA11yHeadings': a11yState.highlightHeadings,
      'btnA11yCursor': a11yState.bigCursor,
      'btnA11yMotion': a11yState.reducedMotion,
      'btnA11ySpacing': a11yState.lineSpacing,
      'btnA11yLetters': a11yState.letterSpacing,
      'btnA11yMonochrome': a11yState.monochrome
    };

    for (const [id, active] of Object.entries(btnMap)) {
      const el = document.getElementById(id);
      if (el) {
        el.classList.toggle('active', !!active);
        el.setAttribute('aria-pressed', active ? 'true' : 'false');
      }
    }
  }

  // Button Listeners
  const bindToggle = (id, prop) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', () => {
        a11yState[prop] = !a11yState[prop];
        applyA11yState();
      });
    }
  };

  bindToggle('btnA11yContrast', 'highContrast');
  bindToggle('btnA11yReadableFont', 'readableFont');
  bindToggle('btnA11yLinks', 'highlightLinks');
  bindToggle('btnA11yHeadings', 'highlightHeadings');
  bindToggle('btnA11yCursor', 'bigCursor');
  bindToggle('btnA11yMotion', 'reducedMotion');
  bindToggle('btnA11ySpacing', 'lineSpacing');
  bindToggle('btnA11yLetters', 'letterSpacing');
  bindToggle('btnA11yMonochrome', 'monochrome');

  // Font Scaling Buttons
  const fontInc = document.getElementById('btnA11yFontInc');
  if (fontInc) {
    fontInc.addEventListener('click', () => {
      a11yState.fontScale = Math.min(3, a11yState.fontScale + 1);
      applyA11yState();
    });
  }

  const fontDec = document.getElementById('btnA11yFontDec');
  if (fontDec) {
    fontDec.addEventListener('click', () => {
      a11yState.fontScale = Math.max(0, a11yState.fontScale - 1);
      applyA11yState();
    });
  }

  // Reset All Button
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      a11yState = {
        fontScale: 0,
        highContrast: false,
        readableFont: false,
        highlightLinks: false,
        highlightHeadings: false,
        bigCursor: false,
        reducedMotion: false,
        lineSpacing: false,
        letterSpacing: false,
        monochrome: false
      };
      applyA11yState();
    });
  }

  // Theme Toggle in Header & A11y (Default: Dark mode, toggle to light)
  const themeToggle = document.getElementById('toggleThemeBtn');
  const a11yThemeToggle = document.getElementById('btnA11yTheme');

  function toggleTheme() {
    const currentTheme = root.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('tok_theme', newTheme);
    if (themeToggle) {
      themeToggle.classList.toggle('active', newTheme === 'light');
      themeToggle.setAttribute('aria-label', newTheme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode');
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  if (a11yThemeToggle) {
    a11yThemeToggle.addEventListener('click', toggleTheme);
  }

  // Set default theme to dark if not set
  const savedTheme = localStorage.getItem('tok_theme') || 'dark';
  root.setAttribute('data-theme', savedTheme);
  if (themeToggle) {
    themeToggle.classList.toggle('active', savedTheme === 'light');
  }

  // Initial application of accessibility state
  applyA11yState();
});
