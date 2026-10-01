/**
 * TypesetOK — Desktop Workbench Interactive Preview
 * Allows exploring the real architecture and panels of TypesetOK.
 */
document.addEventListener('DOMContentLoaded', () => {
  const treeItems = document.querySelectorAll('.wb-tree-item');
  const propNodeName = document.getElementById('wbPropNodeName');
  const propUlid = document.getElementById('wbPropUlid');
  const propFracIndex = document.getElementById('wbPropFracIndex');
  const propDemerits = document.getElementById('wbPropDemerits');
  const propStatus = document.getElementById('wbPropStatus');

  const menuItems = document.querySelectorAll('.wb-menu-item');
  const renderedPage = document.getElementById('wbRenderedPage');
  const zoomSelect = document.getElementById('wbZoomSelect');

  if (!treeItems.length) return;

  // Tree Node Data Map
  const nodeData = {
    'doc-root': {
      name: 'DocumentRoot',
      ulid: '01HX5K3T9R0000000000000001',
      frac: '1.0',
      demerits: '0 (Optimal)',
      status: 'Clean (Valid)'
    },
    'sec-1': {
      name: 'SectionNode [הלכות דעות]',
      ulid: '01HX5K3T9R9Z9435K7J1M8P2Q4',
      frac: '1.25',
      demerits: '0',
      status: 'Active Section'
    },
    'flow-main': {
      name: 'Flow [TextFlow::Main]',
      ulid: '01HX5K3T9R88A123BCDEFGHJKL',
      frac: '1.2501',
      demerits: '12 (Target: <50)',
      status: 'typeset (120 FPS)'
    },
    'p-1': {
      name: 'Paragraph [דעות הרבה...]',
      ulid: '01HX5K3T9R77B987XYZWVUTSRQ',
      frac: '1.2501005',
      demerits: '4 (Balanced)',
      status: 'אהלתר"ם Expanded'
    },
    'p-2': {
      name: 'Paragraph [ומצווין אנו...]',
      ulid: '01HX5K3T9R66C543MNBVCXZLKJ',
      frac: '1.2501010',
      demerits: '0',
      status: 'typeset'
    }
  };

  // Node Click Selection
  treeItems.forEach(item => {
    item.addEventListener('click', () => {
      treeItems.forEach(i => i.classList.remove('selected'));
      item.classList.add('selected');

      const key = item.dataset.nodeKey;
      const data = nodeData[key];
      if (data && propNodeName) {
        propNodeName.textContent = data.name;
        propUlid.textContent = data.ulid;
        propFracIndex.textContent = data.frac;
        propDemerits.textContent = data.demerits;
        propStatus.textContent = data.status;
      }
    });
  });

  // Top Menubar Item Click
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      menuItems.forEach(m => m.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // Zoom control
  if (zoomSelect && renderedPage) {
    zoomSelect.addEventListener('change', (e) => {
      const zoom = e.target.value;
      if (zoom === 'fit') {
        renderedPage.style.transform = 'scale(0.88)';
      } else if (zoom === '100') {
        renderedPage.style.transform = 'scale(1.0)';
      } else if (zoom === '125') {
        renderedPage.style.transform = 'scale(1.15)';
      }
    });
  }
});
