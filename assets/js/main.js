/**
 * TypesetOK (TOK) — Main Website Engine
 * High performance, zero bloat, WCAG 2.2 AA compliant.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Scroll Progress Bar
  const progressBar = document.getElementById('scrollProgressBar');
  if (progressBar) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
          progressBar.style.width = `${scrollPercent}%`;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // 2. Active Section Highlighting in Header Nav
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            link.classList.toggle('active', href === `#${id}`);
          });
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });

    sections.forEach(sec => observer.observe(sec));
  }

  // 3. Mobile Navigation Drawer Toggle
  const mobileToggle = document.getElementById('mobileNavToggle');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileToggle.setAttribute('aria-label', isOpen ? 'Close Menu' : 'Open Menu');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
        mobileDrawer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.focus();
      }
    });
  }

  // 4. Hero Monograph Plate Local Grid Toggle (Non-intrusive)
  const monographGridBtn = document.getElementById('monographGridBtn');
  const monographSheet = document.getElementById('monographSheet');
  if (monographGridBtn && monographSheet) {
    monographGridBtn.addEventListener('click', () => {
      const active = monographSheet.classList.toggle('show-grid');
      monographGridBtn.classList.toggle('active', active);
      monographGridBtn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  // 5. Scroll Reveal Observer
  const reveals = document.querySelectorAll('.reveal-on-scroll');
  if (reveals.length && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    reveals.forEach(el => revealObserver.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('revealed'));
  }

  // 6. Pipeline Progressive Disclosure Steps
  const pipelineCards = document.querySelectorAll('.pipeline-step-card');
  const pipeTitle = document.getElementById('pipeDetailTitle');
  const pipeDesc = document.getElementById('pipeDetailDesc');
  const pipeSpecs = document.getElementById('pipeDetailSpecs');

  const pipelineData = {
    1: {
      title: 'שלב 1: ייבוא וקליטת מסמך גולמי (Document Ingestion)',
      desc: 'קליטה סמנטית של קובצי טקסט נקי, Markdown, DOCX או ODF. המערכת מחלצת את התוכן בלבד ומנתקת אותו מעיצובי מורשת לקויים.',
      specs: 'פורמטים נתמכים: UTF-8 Plain, Markdown AST, ODF/DOCX Importer | אכיפת יוניקוד מלאה'
    },
    2: {
      title: 'שלב 2: יצירת מודל מסמך סמנטי (TDM AST & SI 6100)',
      desc: 'בניית עץ בלתי-מוטבילי ב-Rust. כל פסקה, מקטע ועוגן מקבלים מזהה ייחודי ULID בן 128 סיביות ואינדוקס שברירי ב-$O(1)$. נרמול יוניקוד קפדני לפי תקן ישראלי ת"י 6100 לסדר דטרמיניסטי של אותיות, ניקוד וטעמים.',
      specs: 'Crate: tok-core | ULID 128-bit | FractionalIndex O(1) | SI 6100 Hebrew Unicode Normalizer'
    },
    3: {
      title: 'שלב 3: מנוע עימוד, שבירת שורות ופותר רב-תזרימי (Layout & Knuth-Plass)',
      desc: 'מנוע Knuth-Plass ממזער את הפגמים (Demerits) לאורך הפסקה כולה למניעת שורות רפויות. שילוב יישור עברי תלת-שלבי (רווחי מילים, אותיות התפשטות אהלתר"ם, ומיקרו-טרקינג). פותר אילוצים למקראות גדולות וש"ס מסנכרן בין טקסט מרכזי למפרשים.',
      specs: 'Crate: tok-typeset | Knuth-Plass Global Optimum | 3-Tier Justification | Multi-Flow Solver'
    },
    4: {
      title: 'שלב 4: רינדור וירטואלי וקדם-דפוס נייטיב (Pre-Press & Virtualized Render)',
      desc: 'צינור דואלי: מעטפת Electron מציגה 3 עמודים פעילים בלבד ב-120 FPS בעזרת שכבת Canvas שקופה וסמן וירטואלי (<16ms). במקביל, ליבת Rust מייצרת קובץ PDF/X-1a מוכן לדפוס.',
      specs: 'Crates: tok-pdf, tok-viewer | ISO 15930-1 | 100% K DeviceCMYK | Fogra 39 BleedBox 3mm'
    },
    5: {
      title: 'שלב 5: פלט מושלם לדפוס ודיגיטל (Final Print & Archival Package)',
      desc: 'הפקת קובץ PDF/X עם צלבי רישום וסימני חיתוך וקטוריים, טבלאות /ToUnicode לטקסט מנוקד שניתן להעתקה וחיפוש, ושמירה בארכיב .tok אטומי עמיד בפני נפילות מתח.',
      specs: 'Package: .tok (Atomic ZIP Safe-Save) | ACID WAL (redb) | 100% Deterministic Output'
    }
  };

  if (pipelineCards.length && pipeTitle && pipeDesc && pipeSpecs) {
    pipelineCards.forEach(card => {
      card.addEventListener('click', () => {
        pipelineCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');

        const step = card.dataset.step;
        const data = pipelineData[step];
        if (data) {
          pipeTitle.textContent = data.title;
          pipeDesc.textContent = data.desc;
          pipeSpecs.textContent = data.specs;
        }
      });
    });
  }

  // 7. Modals Management (Architecture & Source Guide)
  const modalBackdrop = document.getElementById('modalBackdrop');
  const sourceModal = document.getElementById('sourceModal');
  const archModal = document.getElementById('archModal');

  function openModal(modal) {
    if (!modalBackdrop || !modal) return;
    modalBackdrop.classList.add('open');
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    const closeBtn = modal.querySelector('.modal-close-btn');
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('open');
    if (sourceModal) {
      sourceModal.classList.remove('open');
      sourceModal.setAttribute('aria-hidden', 'true');
    }
    if (archModal) {
      archModal.classList.remove('open');
      archModal.setAttribute('aria-hidden', 'true');
    }
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-open-modal="source"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(sourceModal);
    });
  });

  document.querySelectorAll('[data-open-modal="architecture"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(archModal);
    });
  });

  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', closeModal);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });

  // 8. Newsletter Form
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterMsg = document.getElementById('newsletterMsg');
  if (newsletterForm && newsletterMsg) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletterEmail');
      if (emailInput && emailInput.value) {
        localStorage.setItem('tok_newsletter_subscribed', emailInput.value);
        newsletterMsg.textContent = 'תודה רבה! נרשמת בהצלחה לעדכוני המחקר והקוד של TypesetOK.';
        newsletterMsg.style.display = 'block';
        emailInput.value = '';
      }
    });
  }
});
