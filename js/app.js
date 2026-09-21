/**
 * The Lay Dharma Household Mārga — Main Application Script
 * Radial Menu with 9 Annular Sectors (Wheel of Dhamma)
 */

import { TOPICS_DATA } from './data/topicsData.js';

class LayDharmaApp {
  constructor() {
    this.topics = TOPICS_DATA;
    this.currentTopic = null;
    this.currentPreviewTopic = null;

    this.initDOM();
    this.bindEvents();
    this.renderRadialMenu();
  }

  initDOM() {
    this.dom = {
      radialMenuWrapper: document.getElementById('radialMenuWrapper'),
      annularSectorsGroup: document.getElementById('annularSectorsGroup'),
      radialLabelsContainer: document.getElementById('radialLabelsContainer'),
      wheelCenterHub: document.getElementById('wheelCenterHub'),
      hubBadge: document.getElementById('hubBadge'),
      hubTitle: document.getElementById('hubTitle'),
      hubDesc: document.getElementById('hubDesc'),

      // Modal elements
      readerModal: document.getElementById('readerModal'),
      closeModalBtn: document.getElementById('closeModalBtn'),
      modalNumber: document.getElementById('modalNumber'),
      modalCategory: document.getElementById('modalCategory'),
      modalPaliTitle: document.getElementById('modalPaliTitle'),
      modalEngTitle: document.getElementById('modalEngTitle'),
      modalCitation: document.getElementById('modalCitation'),
      modalOverview: document.getElementById('modalOverview'),
      modalPaliTerms: document.getElementById('modalPaliTerms'),
      modalExcerptsList: document.getElementById('modalExcerptsList'),
      modalHouseholdList: document.getElementById('modalHouseholdList'),
      modalInquiryList: document.getElementById('modalInquiryList'),
      topicNotesInput: document.getElementById('topicNotesInput'),
      saveNotesBtn: document.getElementById('saveNotesBtn'),
      notesSavedFeedback: document.getElementById('notesSavedFeedback'),
      tabBtns: document.querySelectorAll('.tab-nav-btn'),
      tabContents: document.querySelectorAll('.tab-content')
    };
  }

  bindEvents() {
    // Close reader modal
    this.dom.closeModalBtn.addEventListener('click', () => this.closeReaderModal());
    this.dom.readerModal.addEventListener('click', (e) => {
      if (e.target === this.dom.readerModal) {
        this.closeReaderModal();
      }
    });

    // Keyboard navigation (Escape to close modal)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.dom.readerModal.classList.contains('active')) {
        this.closeReaderModal();
      }
    });

    // Tab switching inside reader modal
    this.dom.tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTabId = btn.dataset.tab;
        this.switchTab(targetTabId);
      });
    });

    // Save reflection notes
    this.dom.saveNotesBtn.addEventListener('click', () => this.saveCurrentTopicNotes());
  }

  /**
   * Render the 9 Topics inside 9 Annular Sectors (Donut ring slices)
   */
  renderRadialMenu() {
    const total = this.topics.length; // 9 topics
    const cx = 350;
    const cy = 350;
    const rIn = 152;
    const rOut = 318;
    const rMid = (rIn + rOut) / 2; // 235px (centroid radius)
    const stepDeg = 360 / total; // 40 degrees per sector
    const gapDeg = 2.4; // visual gap between adjacent sectors
    const halfSpanDeg = (stepDeg - gapDeg) / 2; // 18.8 degrees

    let sectorsSvgHtml = '';
    let labelsHtml = '';

    this.topics.forEach((topic, i) => {
      // 12 o'clock is -90 degrees; sectors advance clockwise
      const centerDeg = -90 + (i * stepDeg);
      const startDeg = centerDeg - halfSpanDeg;
      const endDeg = centerDeg + halfSpanDeg;

      const alpha1 = (startDeg * Math.PI) / 180;
      const alpha2 = (endDeg * Math.PI) / 180;
      const alphaMid = (centerDeg * Math.PI) / 180;

      // Outer arc endpoints
      const x1 = (cx + rOut * Math.cos(alpha1)).toFixed(2);
      const y1 = (cy + rOut * Math.sin(alpha1)).toFixed(2);
      const x2 = (cx + rOut * Math.cos(alpha2)).toFixed(2);
      const y2 = (cy + rOut * Math.sin(alpha2)).toFixed(2);

      // Inner arc endpoints
      const x3 = (cx + rIn * Math.cos(alpha2)).toFixed(2);
      const y3 = (cy + rIn * Math.sin(alpha2)).toFixed(2);
      const x4 = (cx + rIn * Math.cos(alpha1)).toFixed(2);
      const y4 = (cy + rIn * Math.sin(alpha1)).toFixed(2);

      // SVG path definition for annular sector
      const pathD = `M ${x1} ${y1} A ${rOut} ${rOut} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${rIn} ${rIn} 0 0 0 ${x4} ${y4} Z`;

      // Centroid coordinates for HTML label
      const lx = Math.round(rMid * Math.cos(alphaMid));
      const ly = Math.round(rMid * Math.sin(alphaMid));

      // Radial displacement vector for hover animation (8px outward)
      const dx = Math.round(Math.cos(alphaMid) * 8);
      const dy = Math.round(Math.sin(alphaMid) * 8);

      sectorsSvgHtml += `
        <path class="annular-sector-path" 
              id="sector-${topic.id}"
              data-id="${topic.id}"
              data-index="${i}"
              d="${pathD}" 
              tabindex="0"
              role="button"
              aria-label="${topic.number}. ${topic.paliTitle} — ${topic.englishTitle}">
        </path>
      `;

      labelsHtml += `
        <div class="sector-label-item" 
             id="label-${topic.id}"
             data-id="${topic.id}"
             data-index="${i}"
             style="--x: ${lx}px; --y: ${ly}px; --dx: ${dx}px; --dy: ${dy}px;"
             tabindex="0"
             role="button"
             aria-label="${topic.number}. ${topic.paliTitle} — ${topic.englishTitle}">
          <span class="sector-num-badge">${topic.number}</span>
          <div class="sector-pali-title">${topic.paliTitle}</div>
          <div class="sector-eng-title">${topic.englishTitle}</div>
        </div>
      `;
    });

    this.dom.annularSectorsGroup.innerHTML = sectorsSvgHtml;
    this.dom.radialLabelsContainer.innerHTML = labelsHtml;

    // Attach synchronized interactions between sector and label
    this.topics.forEach((topic, i) => {
      const sector = document.getElementById(`sector-${topic.id}`);
      const label = document.getElementById(`label-${topic.id}`);

      const onEnter = () => {
        sector.classList.add('active-sector');
        label.classList.add('hovered');
        const alphaMid = (-90 + (i * stepDeg)) * Math.PI / 180;
        const dx = (Math.cos(alphaMid) * 8).toFixed(1);
        const dy = (Math.sin(alphaMid) * 8).toFixed(1);
        sector.style.transform = `translate(${dx}px, ${dy}px)`;
        this.previewTopicInHub(topic);
      };

      const onLeave = () => {
        sector.classList.remove('active-sector');
        label.classList.remove('hovered');
        sector.style.transform = '';
        this.resetHub();
      };

      const onClick = () => {
        this.openReaderModal(topic.id);
      };

      [sector, label].forEach(elem => {
        if (!elem) return;
        elem.addEventListener('mouseenter', onEnter);
        elem.addEventListener('mouseleave', onLeave);
        elem.addEventListener('focus', onEnter);
        elem.addEventListener('blur', onLeave);
        elem.addEventListener('click', onClick);
        elem.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick();
          }
        });
      });
    });

    // Clicking the center hub opens the currently previewed topic
    this.dom.wheelCenterHub.addEventListener('click', () => {
      if (this.currentPreviewTopic) {
        this.openReaderModal(this.currentPreviewTopic.id);
      } else if (this.topics.length > 0) {
        this.openReaderModal(this.topics[0].id);
      }
    });
  }

  previewTopicInHub(topic) {
    this.currentPreviewTopic = topic;
    this.dom.hubBadge.textContent = `TOPIC ${topic.number}`;
    this.dom.hubTitle.textContent = topic.paliTitle;
    this.dom.hubDesc.textContent = `${topic.englishTitle} • Click to read`;
    this.dom.wheelCenterHub.style.borderColor = 'var(--gold-primary)';
    this.dom.wheelCenterHub.style.boxShadow = '0 0 35px rgba(224, 169, 68, 0.45), inset 0 0 20px rgba(0, 0, 0, 0.8)';
  }

  resetHub() {
    this.currentPreviewTopic = null;
    this.dom.hubBadge.textContent = '09 ANNULAR SECTORS';
    this.dom.hubTitle.textContent = 'Ariya Magga';
    this.dom.hubDesc.textContent = 'Hover or click any sector to enter contemplation';
    this.dom.wheelCenterHub.style.borderColor = '';
    this.dom.wheelCenterHub.style.boxShadow = '';
  }

  openReaderModal(topicId) {
    const topic = this.topics.find(t => t.id === topicId);
    if (!topic) return;

    this.currentTopic = topic;

    // Populate Modal Header
    this.dom.modalNumber.textContent = topic.number;
    this.dom.modalCategory.textContent = topic.category;
    this.dom.modalPaliTitle.textContent = topic.paliTitle;
    this.dom.modalEngTitle.textContent = topic.englishTitle;
    this.dom.modalCitation.textContent = `Canonical Sources: ${topic.canonicalRef}`;
    this.dom.modalOverview.textContent = topic.overview;

    // Key Pali Terms
    this.dom.modalPaliTerms.innerHTML = topic.keyPaliTerms.map(k => `
      <div class="pali-term-chip">
        <div class="pali-term-name">${k.term}</div>
        <div class="pali-term-def">${k.meaning}</div>
      </div>
    `).join('');

    // Canonical Excerpts
    this.dom.modalExcerptsList.innerHTML = topic.canonicalExcerpts.map(ex => `
      <div class="sutta-box">
        <div class="sutta-source-name">${ex.source}</div>
        <div class="sutta-pali-passage">${ex.pali}</div>
        <div class="sutta-english-passage">"${ex.translation}"</div>
      </div>
    `).join('');

    // Household Practice
    this.dom.modalHouseholdList.innerHTML = topic.householdApplication.map(app => `
      <div class="practice-card">
        <div class="practice-card-title">
          <span>☸</span> ${app.title}
        </div>
        <div class="practice-card-detail">${app.detail}</div>
      </div>
    `).join('');

    // Contemplative Inquiry
    this.dom.modalInquiryList.innerHTML = topic.contemplativeInquiry.map(q => `
      <li class="inquiry-item">${q}</li>
    `).join('');

    // Load saved reflection notes for this topic
    const savedNotes = localStorage.getItem(`lay_dharma_note_${topic.id}`) || '';
    this.dom.topicNotesInput.value = savedNotes;
    this.dom.notesSavedFeedback.style.display = 'none';

    // Reset to first tab
    this.switchTab('tab-overview');

    // Display modal
    this.dom.readerModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeReaderModal() {
    this.dom.readerModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  switchTab(targetTabId) {
    this.dom.tabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === targetTabId);
    });

    this.dom.tabContents.forEach(content => {
      content.classList.toggle('active', content.id === targetTabId);
    });
  }

  saveCurrentTopicNotes() {
    if (!this.currentTopic) return;

    const notes = this.dom.topicNotesInput.value.trim();
    localStorage.setItem(`lay_dharma_note_${this.currentTopic.id}`, notes);

    this.dom.notesSavedFeedback.style.display = 'inline-block';
    setTimeout(() => {
      this.dom.notesSavedFeedback.style.display = 'none';
    }, 2500);
  }
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new LayDharmaApp();
});
