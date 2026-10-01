/**
 * TypesetOK — Hero Interactive Specimen Animation
 * Demonstrates the transformation from Raw Text -> Semantic AST -> Typeset Master.
 */
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.hero-tab-btn');
  const stages = document.querySelectorAll('.hero-stage');
  const transformBtn = document.getElementById('heroTransformBtn');
  const statusEl = document.getElementById('heroEngineStatus');

  if (!tabs.length || !stages.length) return;

  function setStage(stageId) {
    tabs.forEach(tab => {
      const isMatch = tab.dataset.stage === stageId;
      tab.classList.toggle('active', isMatch);
      tab.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });

    stages.forEach(stage => {
      stage.classList.toggle('active', stage.id === stageId);
    });

    if (statusEl) {
      if (stageId === 'stage-raw') {
        statusEl.textContent = 'מצב: קלט גולמי לא מעובד (Unprocessed ASCII/Unicode)';
      } else if (stageId === 'stage-ast') {
        statusEl.textContent = 'מצב: ניתוח תחבירי TDM AST + ת״י 6100 (ULID 128-bit)';
      } else if (stageId === 'stage-typeset') {
        statusEl.textContent = 'מצב: עימוד אופטימלי Knuth-Plass + אותיות התפשטות (0 Demerits)';
      }
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      setStage(tab.dataset.stage);
    });
  });

  // Automated transformation walk-through
  let isTransforming = false;
  if (transformBtn) {
    transformBtn.addEventListener('click', () => {
      if (isTransforming) return;
      isTransforming = true;
      transformBtn.setAttribute('disabled', 'true');
      transformBtn.textContent = 'מעמד בזמן אמת...';

      setStage('stage-raw');
      
      setTimeout(() => {
        setStage('stage-ast');
      }, 900);

      setTimeout(() => {
        setStage('stage-typeset');
        transformBtn.removeAttribute('disabled');
        transformBtn.textContent = 'הפעל טרנספורמציה שוב ↺';
        isTransforming = false;
      }, 2000);
    });
  }
});
