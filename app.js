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
      title: 'Sheet 03 · Central Spine & Spaced Parks Plan (2D)',
      shortMeta: '179 Plots · 14.55% Park · 24.70% Road · Parks Apart',
      description: '2D layout inside locked 52.00 Bigha boundary: PK-02 NW Corner Park (5.23%) & PK-03 South-Central Garden (3.94%) spaced 539 ft apart + PK-01 East Slant Cutoff (5.38%), 60.74% plotted across 179 plots @ 123–149 Gaj (min 23.5\' front, 0 SW).',
      stageLabel: 'SHEET 03 · /colony-2/3/ (Central 12m Spine · Spaced NW & SE Parks · 179 Plots · 2D)',
      status: '2D Live',
      statusKind: 'locked',
      src: './3/'
    },
    {
      id: '4',
      sheetCode: 'SHEET 04',
      title: 'Sheet 04 · 12m Grand E–W Promenade Plan (2D)',
      shortMeta: '182 Plots · 61.43% Plotted · 13.80% Park · Opposite Parks',
      description: 'Distinct East–West 12m Grand Promenade axis fed by 12m Karodi Gate (78–117.4 ft), paired with PK-03 SW Gate Welcome Park (5.86%) & PK-02 North Botanical Park (2.91%) 492 ft apart + PK-01 East Slant Cutoff (5.03%): highest yield 182 plots @ 139–149 Gaj (min 23.2\' front, 0 SW).',
      stageLabel: 'SHEET 04 · /colony-2/4/ (12m Grand E–W Promenade · NE & SW Opposite Parks · 182 Plots · 2D)',
      status: '2D Live',
      statusKind: 'locked',
      src: './4/'
    },
    {
      id: '5',
      sheetCode: 'SHEET 05',
      title: 'Sheet 05 · East-Central 12m Avenue Plan (2D)',
      shortMeta: '175 Plots · 25.62% Road · 15.00% Park · Connected 12m Ave',
      description: 'Full-length East-Central 12m Grand Avenue (Street 1 to Street 5) fed by 12m Karodi Gate (102–141.4 ft) & South Link: PK-02 West-Mid Sanctuary (5.50%) & PK-03 South-East Courtyard (4.18%) 406 ft apart + PK-01 East Slant Cutoff (5.31%), 175 plots @ 136–150 Gaj (min 23.2\' front, 0 SW).',
      stageLabel: 'SHEET 05 · /colony-2/5/ (East-Central 12m Ave · 25.62% Road · 175 Plots · 2D)',
      status: '2D Live',
      statusKind: 'locked',
      src: './5/'
    },
    {
      id: '6',
      sheetCode: 'SHEET 06',
      title: 'Sheet 06 · Minimal-Wastage Best Plan (2D)',
      shortMeta: '181 Plots · 23.68% Road · 61.85% Plots · 14.47% Park',
      description: 'Lowest-wastage 2D grid inside locked boundary: straight 12m Western Grand Ave from Karodi Gate (96–135.4 ft) to Street 1 elbow, L-notch PK-02 NW (4.06%) & PK-03 SE Courtyard (5.60%) 715 ft apart + tight PK-01 East Cut (4.82%), yielding 181 plots @ 133–149 Gaj (min 23.2\' front, 0 SW).',
      stageLabel: 'SHEET 06 · /colony-2/6/ (23.68% Min Road · 61.85% Plotted · 181 Plots · 2D)',
      status: '2D Live',
      statusKind: 'locked',
      src: './6/'
    },
    {
      id: '7',
      sheetCode: 'SHEET 07',
      title: 'Sheet 07 · ~120 Gaj Buyer-Sized Plan (2D)',
      shortMeta: '207 Plots · Avg 120.5 Gaj · 14.01% Park · Min 24.2\' Front',
      description: 'Compact ~120 Gaj buyer-friendly grid (100% in 117–125 Gaj, avg 120.5 Gaj, min 24.2\' front, 0 SW): 12m Western Grand Ave from Karodi Gate (109.5–148.9 ft) with 9m Streets 1–6, PK-02 NW (5.01%) & PK-03 SE (4.71%) 716 ft apart + PK-01 East Cut (4.29%).',
      stageLabel: 'SHEET 07 · /colony-2/7/ (207 Plots · Avg 120.5 Gaj · 14.01% Park · 2D)',
      status: '2D Live',
      statusKind: 'locked',
      src: './7/'
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
