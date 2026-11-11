(() => {
  'use strict';

  const PLANS = [
    {
      id: 'outer-boundary',
      sheetCode: 'SHEET 01',
      title: 'Sheet 01 · Outer Boundary Verification',
      shortMeta: '52.00 Bigha · 42,466 Gaj · 35,507 Sq.m',
      description: 'Confirmed outer survey perimeter with Karodi Road frontage and Chakroad closed wall.',
      stageLabel: 'SHEET 01 · plans/outer-boundary.html (Read-only verified sheet)',
      status: 'Immutable',
      statusKind: 'locked',
      src: './plans/outer-boundary.html'
    },
    {
      id: '2',
      sheetCode: 'SHEET 02',
      title: 'Sheet 02 · Rectilinear East-Park Plan (2D)',
      shortMeta: '179 Plots · 14.58% Park · 24.78% Road · 0 Slant',
      description: '2D rectilinear grid inside locked 52.00 Bigha boundary: PK-01 cuts Chakroad slant (8.74%) + PK-02 Central Park (5.83%), 24.78% minimal roads, 12m gate @ 95–134.4 ft, 134–150 Gaj (min 23.5\' front, 0 SW).',
      stageLabel: 'SHEET 02 · /colony-2/2/ (Rectilinear East-Park Cut · 179 Plots · 2D)',
      status: '2D Live',
      statusKind: 'locked',
      src: './2/'
    },
    {
      id: '3',
      sheetCode: 'SHEET 03',
      title: 'Sheet 03 · Central Boulevard Twin-Oasis Plan (2D)',
      shortMeta: '177 Plots · 14.80% Park · Central 12m Spine · 0 Slant',
      description: '2D layout inside locked 52.00 Bigha boundary: 12m Karodi Gate (96–135.4 ft) steps onto a Central 12m Spine flanked by PK-02A/B Twin-Oasis Gardens (6.45%) + PK-01 East Slant Cutoff (8.35%), 177 plots @ 123–150 Gaj (min 23.3\' front, 0 SW).',
      stageLabel: 'SHEET 03 · /colony-2/3/ (Central 12m Spine + Twin Oasis · 177 Plots · 2D)',
      status: '2D Live',
      statusKind: 'locked',
      src: './3/'
    }
  ];

  const triggerBtn = document.getElementById('plan-dropdown-btn');
  const dropdownPanel = document.getElementById('plan-listbox');
  const currentTitleEl = document.getElementById('selector-current-title');
  const currentBadgeEl = document.getElementById('selector-current-badge');
  const stageSubbarText = document.getElementById('stage-subbar-text');
  const stageLockDot = document.getElementById('stage-lock-dot');
  const openStandaloneLink = document.getElementById('open-standalone-link');
  const iframeEl = document.getElementById('plan-frame');
  const pendingViewEl = document.getElementById('pending-view');
  const pendingSlotCodeEl = document.getElementById('pending-slot-code');
  const pendingTitleEl = document.getElementById('pending-title');
  const pendingCopyEl = document.getElementById('pending-copy');
  const pendingBadgeEl = document.getElementById('pending-badge');
  const returnBoundaryBtn = document.getElementById('return-boundary-btn');
  const ledgerEl = document.getElementById('boundary-ledger');
  const ledgerToggleBtn = document.getElementById('ledger-toggle-btn');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const workspaceEl = document.getElementById('workspace');
  const copyShareBtn = document.getElementById('copy-share-btn');
  const copyShareLabel = document.getElementById('copy-share-label');
  const shareFeedbackEl = document.getElementById('share-feedback');

  let activePlanId = 'outer-boundary';
  let pinnedEdge = null;

  function renderDropdownOptions() {
    dropdownPanel.innerHTML = '';
    PLANS.forEach((plan) => {
      const li = document.createElement('li');
      li.setAttribute('role', 'presentation');

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'dropdown-option' + (plan.id === activePlanId ? ' is-active' : '');
      btn.setAttribute('role', 'option');
      btn.setAttribute('aria-selected', plan.id === activePlanId ? 'true' : 'false');
      btn.dataset.planId = plan.id;

      const textWrap = document.createElement('span');
      const titleSpan = document.createElement('span');
      titleSpan.className = 'dropdown-opt-title';
      titleSpan.textContent = plan.title;

      const descSpan = document.createElement('span');
      descSpan.className = 'dropdown-opt-desc';
      descSpan.textContent = `${plan.shortMeta} — ${plan.description}`;

      textWrap.appendChild(titleSpan);
      textWrap.appendChild(descSpan);

      const badge = document.createElement('span');
      badge.className = `dropdown-opt-badge dropdown-opt-badge--${plan.statusKind}`;
      badge.textContent = plan.status;

      btn.appendChild(textWrap);
      btn.appendChild(badge);

      btn.addEventListener('click', () => {
        selectPlan(plan.id);
        closeDropdown();
        triggerBtn.focus();
      });

      li.appendChild(btn);
      dropdownPanel.appendChild(li);
    });
  }

  function selectPlan(planId, skipHistory) {
    const plan = PLANS.find((p) => p.id === planId) || PLANS[0];
    activePlanId = plan.id;

    currentTitleEl.textContent = plan.title;
    currentBadgeEl.textContent = plan.status;
    currentBadgeEl.className = `status-tag status-tag--${plan.statusKind}`;

    if (plan.src) {
      iframeEl.hidden = false;
      pendingViewEl.hidden = true;
      if (iframeEl.getAttribute('src') !== plan.src) {
        iframeEl.setAttribute('src', plan.src);
      }
      stageLockDot.className = 'lock-dot';
      stageSubbarText.textContent = plan.stageLabel || `${plan.sheetCode} · ${plan.src.replace(/^\.\//, '')} (${plan.status})`;
      openStandaloneLink.setAttribute('href', plan.src);
      openStandaloneLink.hidden = false;
    } else {
      iframeEl.hidden = true;
      pendingViewEl.hidden = false;
      pendingSlotCodeEl.textContent = `${plan.sheetCode} · RESERVED DRAFTING LAYER`;
      pendingTitleEl.textContent = plan.title;
      pendingCopyEl.textContent = `${plan.description} Once added, this permanent link updates inside without changing the URL.`;
      pendingBadgeEl.textContent = plan.status;
      stageLockDot.className = 'lock-dot lock-dot--pending';
      stageSubbarText.textContent = `${plan.title} — Reserved inside verified 52.00 Bigha boundary`;
      openStandaloneLink.hidden = true;
    }

    if (!skipHistory) {
      const url = new URL(window.location.href);
      if (plan.id === 'outer-boundary') {
        url.searchParams.delete('plan');
      } else {
        url.searchParams.set('plan', plan.id);
      }
      window.history.replaceState(null, '', url.toString());
    }

    renderDropdownOptions();
  }

  function openDropdown() {
    dropdownPanel.classList.add('is-open');
    triggerBtn.setAttribute('aria-expanded', 'true');
  }

  function closeDropdown() {
    dropdownPanel.classList.remove('is-open');
    triggerBtn.setAttribute('aria-expanded', 'false');
  }

  triggerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdownPanel.classList.contains('is-open');
    if (isOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  });

  triggerBtn.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openDropdown();
      const firstOpt = dropdownPanel.querySelector('.dropdown-option');
      if (firstOpt) firstOpt.focus();
    } else if (e.key === 'Escape') {
      closeDropdown();
    }
  });

  dropdownPanel.addEventListener('keydown', (e) => {
    const options = Array.from(dropdownPanel.querySelectorAll('.dropdown-option'));
    const idx = options.indexOf(document.activeElement);
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = options[(idx + 1) % options.length];
      if (next) next.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = options[(idx - 1 + options.length) % options.length];
      if (prev) prev.focus();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      closeDropdown();
      triggerBtn.focus();
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.selector-wrap')) {
      closeDropdown();
    }
  });

  if (returnBoundaryBtn) {
    returnBoundaryBtn.addEventListener('click', () => {
      selectPlan('outer-boundary');
    });
  }

  // Collapsible Ledger & Mobile Dialog Management
  const mobileMedia = window.matchMedia('(max-width: 960px)');

  function setLedgerOpen(isOpen, moveFocus) {
    const isMobile = mobileMedia.matches;
    workspaceEl.classList.toggle('is-ledger-collapsed', !isOpen);
    ledgerToggleBtn.classList.toggle('is-active', isOpen);
    ledgerToggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

    if (drawerBackdrop) {
      drawerBackdrop.classList.toggle('is-visible', isOpen && isMobile);
    }

    if (isMobile && isOpen) {
      ledgerEl.setAttribute('role', 'dialog');
      ledgerEl.setAttribute('aria-modal', 'true');
      if (moveFocus && drawerCloseBtn) {
        drawerCloseBtn.focus();
      }
    } else {
      ledgerEl.removeAttribute('role');
      ledgerEl.removeAttribute('aria-modal');
    }
  }

  ledgerToggleBtn.addEventListener('click', () => {
    const isCurrentlyCollapsed = workspaceEl.classList.contains('is-ledger-collapsed');
    setLedgerOpen(isCurrentlyCollapsed, true);
  });

  function closeMobileDrawer() {
    setLedgerOpen(false, false);
    if (mobileMedia.matches) {
      ledgerToggleBtn.focus();
    }
  }

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', closeMobileDrawer);
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', closeMobileDrawer);
  }

  document.addEventListener('keydown', (e) => {
    if (
      e.key === 'Escape' &&
      mobileMedia.matches &&
      !workspaceEl.classList.contains('is-ledger-collapsed')
    ) {
      closeMobileDrawer();
    }
  });

  function syncResponsiveLedger() {
    setLedgerOpen(!mobileMedia.matches, false);
  }

  if (typeof mobileMedia.addEventListener === 'function') {
    mobileMedia.addEventListener('change', syncResponsiveLedger);
  }

  // Copy Permanent Share Link with Visible Live Feedback
  let copyTimer = null;
  function showShareFeedback(message) {
    if (!shareFeedbackEl) return;
    shareFeedbackEl.textContent = message;
    shareFeedbackEl.hidden = false;
    window.clearTimeout(copyTimer);
    copyTimer = window.setTimeout(() => {
      shareFeedbackEl.hidden = true;
      copyShareLabel.textContent = 'Share Link';
      copyShareBtn.classList.remove('is-copied');
    }, 3200);
  }

  copyShareBtn.addEventListener('click', async () => {
    const baseUrl = new URL('./', window.location.href).href;
    try {
      await navigator.clipboard.writeText(baseUrl);
      copyShareLabel.textContent = 'Link Copied';
      copyShareBtn.classList.add('is-copied');
      showShareFeedback(`Permanent link copied: ${baseUrl}`);
    } catch {
      copyShareLabel.textContent = 'Share URL';
      showShareFeedback(`Share URL: ${baseUrl}`);
    }
  });

  // Interactive Edge Highlighting (Hover preview + Click/Tap pin)
  const edgeButtons = document.querySelectorAll('.ledger-row-btn[data-edge]');
  const keyEdges = document.querySelectorAll('.key-edge[data-edge]');
  const activeEdgeReadout = document.getElementById('active-edge-readout');

  const edgeReadouts = {
    top: "Back (NW–NE): 461'-6½\" (140.68 m)",
    right: "Chakroad Closed Wall: 220.00 m (721'-9½\")",
    bottom: "Karodi Rd Entrance: 196.00 m (643'-0½\")",
    left: "West Edge: 696'-10\" (212.40 m)"
  };

  function applyEdgeHighlight(edgeName) {
    edgeButtons.forEach((btn) => {
      const match = btn.dataset.edge === edgeName;
      btn.classList.toggle('is-highlighted', match);
      btn.setAttribute('aria-pressed', pinnedEdge === btn.dataset.edge ? 'true' : 'false');
    });
    keyEdges.forEach((line) => {
      const match = line.dataset.edge === edgeName;
      line.classList.toggle('is-highlighted', match);
      line.style.opacity = edgeName && !match ? '0.32' : '1';
    });
    if (activeEdgeReadout) {
      activeEdgeReadout.textContent = edgeName ? edgeReadouts[edgeName] : 'Select or hover an edge';
    }
  }

  function togglePinEdge(edgeName) {
    pinnedEdge = pinnedEdge === edgeName ? null : edgeName;
    applyEdgeHighlight(pinnedEdge);
  }

  edgeButtons.forEach((btn) => {
    const edgeName = btn.dataset.edge;
    btn.addEventListener('mouseenter', () => {
      if (!pinnedEdge) applyEdgeHighlight(edgeName);
    });
    btn.addEventListener('mouseleave', () => {
      applyEdgeHighlight(pinnedEdge);
    });
    btn.addEventListener('focus', () => {
      if (!pinnedEdge) applyEdgeHighlight(edgeName);
    });
    btn.addEventListener('blur', () => {
      applyEdgeHighlight(pinnedEdge);
    });
    btn.addEventListener('click', () => {
      togglePinEdge(edgeName);
    });
  });

  keyEdges.forEach((line) => {
    const edgeName = line.dataset.edge;
    line.addEventListener('mouseenter', () => {
      if (!pinnedEdge) applyEdgeHighlight(edgeName);
    });
    line.addEventListener('mouseleave', () => {
      applyEdgeHighlight(pinnedEdge);
    });
    line.addEventListener('click', () => {
      togglePinEdge(edgeName);
    });
    line.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        togglePinEdge(edgeName);
      }
    });
  });

  // Initialize from URL query (?plan=...) if present
  const params = new URLSearchParams(window.location.search);
  const initialPlan = params.get('plan') || 'outer-boundary';
  syncResponsiveLedger();
  selectPlan(initialPlan, true);
})();
