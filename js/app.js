/**
 * The Lay Dharma Household Mārga — Main Application Script
 * Radial Menu with 9 Annular Sectors (Wheel of Dhamma)
 * Bilingual Engine: English (EN) & Portuguese (PT)
 */

import { TOPICS_DATA, I18N_STRINGS } from './data/topicsData.js';

class LayDharmaApp {
  constructor() {
    this.topics = TOPICS_DATA;
    this.i18n = I18N_STRINGS;
    this.currentLang = localStorage.getItem('lay_dharma_lang') || 'en';
    if (!this.i18n[this.currentLang]) {
      this.currentLang = 'en';
    }

    this.currentTopic = null;
    this.currentPreviewTopic = null;

    this.initDOM();
    this.bindEvents();
    this.renderRadialMenu();
    this.applyLanguageUI();
  }

  initDOM() {
    this.dom = {
      // Language controls
      langBtnEn: document.getElementById('langBtnEn'),
      langBtnPt: document.getElementById('langBtnPt'),
      siteTitle: document.getElementById('siteTitle'),
      siteSubtitle: document.getElementById('siteSubtitle'),

      // Radial stage elements
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
      tabContents: document.querySelectorAll('.tab-content'),

      // Translatable UI nodes
      tabBtnOverview: document.getElementById('tabBtnOverview'),
      tabBtnCanonical: document.getElementById('tabBtnCanonical'),
      tabBtnHousehold: document.getElementById('tabBtnHousehold'),
      tabBtnInquiry: document.getElementById('tabBtnInquiry'),
      tabBtnNotes: document.getElementById('tabBtnNotes'),
      headingKeyPali: document.getElementById('headingKeyPali'),
      householdIntroText: document.getElementById('householdIntroText'),
      headingInquiry: document.getElementById('headingInquiry'),
      inquiryIntroText: document.getElementById('inquiryIntroText'),
      headingNotes: document.getElementById('headingNotes'),
      notesIntroText: document.getElementById('notesIntroText')
    };
  }

  bindEvents() {
    // Language switcher buttons
    if (this.dom.langBtnEn) {
      this.dom.langBtnEn.addEventListener('click', () => this.setLanguage('en'));
    }
    if (this.dom.langBtnPt) {
      this.dom.langBtnPt.addEventListener('click', () => this.setLanguage('pt'));
    }

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
   * Switch language and update all texts in real time
   * @param {'en'|'pt'} lang
   */
  setLanguage(lang) {
    if (this.currentLang === lang && document.documentElement.lang === lang) return;
    this.currentLang = lang;
    localStorage.setItem('lay_dharma_lang', lang);
    this.applyLanguageUI();
  }

  /**
   * Update all UI labels, sector cards, and reader modal according to current language
   */
  applyLanguageUI() {
    const t = this.i18n[this.currentLang] || this.i18n.en;
    document.documentElement.lang = this.currentLang;

    // Toggle button active classes
    if (this.dom.langBtnEn) {
      this.dom.langBtnEn.classList.toggle('active', this.currentLang === 'en');
    }
    if (this.dom.langBtnPt) {
      this.dom.langBtnPt.classList.toggle('active', this.currentLang === 'pt');
    }

    // Header & Subtitles
    if (this.dom.siteTitle) this.dom.siteTitle.textContent = t.siteTitle;
    if (this.dom.siteSubtitle) this.dom.siteSubtitle.textContent = t.siteSubtitle;

    // Tab buttons in modal
    if (this.dom.tabBtnOverview) this.dom.tabBtnOverview.textContent = t.tabOverview;
    if (this.dom.tabBtnCanonical) this.dom.tabBtnCanonical.textContent = t.tabCanonical;
    if (this.dom.tabBtnHousehold) this.dom.tabBtnHousehold.textContent = t.tabHousehold;
    if (this.dom.tabBtnInquiry) this.dom.tabBtnInquiry.textContent = t.tabInquiry;
    if (this.dom.tabBtnNotes) this.dom.tabBtnNotes.textContent = t.tabNotes;

    // Section headings & intro texts in modal
    if (this.dom.headingKeyPali) this.dom.headingKeyPali.innerHTML = `<span>☸</span> ${t.keyPaliTermsHeading}`;
    if (this.dom.householdIntroText) this.dom.householdIntroText.textContent = t.householdIntro;
    if (this.dom.headingInquiry) this.dom.headingInquiry.innerHTML = `<span>☸</span> ${t.inquiryHeading}`;
    if (this.dom.inquiryIntroText) this.dom.inquiryIntroText.textContent = t.inquiryIntro;
    if (this.dom.headingNotes) this.dom.headingNotes.innerHTML = `<span>☸</span> ${t.notesHeading}`;
    if (this.dom.notesIntroText) this.dom.notesIntroText.textContent = t.notesIntro;
    if (this.dom.topicNotesInput) this.dom.topicNotesInput.placeholder = t.notesPlaceholder;
    if (this.dom.saveNotesBtn) this.dom.saveNotesBtn.textContent = t.saveNotesBtn;
    if (this.dom.notesSavedFeedback) this.dom.notesSavedFeedback.textContent = t.notesSavedFeedback;
    if (this.dom.closeModalBtn) this.dom.closeModalBtn.setAttribute('aria-label', t.closeReaderAria);

    // Update sector labels on radial wheel
    this.topics.forEach((topic) => {
      const label = document.getElementById(`label-${topic.id}`);
      const sector = document.getElementById(`sector-${topic.id}`);
      const langContent = topic[this.currentLang] || topic.en;

      if (label) {
        const transElem = label.querySelector('.sector-eng-title');
        if (transElem) {
          transElem.textContent = langContent.title;
        }
        label.setAttribute('aria-label', `${topic.number}. ${topic.paliTitle} — ${langContent.title}`);
      }
      if (sector) {
        sector.setAttribute('aria-label', `${topic.number}. ${topic.paliTitle} — ${langContent.title}`);
      }
    });

    // Update center hub
    if (this.currentPreviewTopic) {
      this.previewTopicInHub(this.currentPreviewTopic);
    } else {
      this.resetHub();
    }

    // If modal is actively open, refresh its content in the new language
    if (this.currentTopic && this.dom.readerModal.classList.contains('active')) {
      this.populateReaderModal(this.currentTopic);
    }
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

      const langContent = topic[this.currentLang] || topic.en;

      sectorsSvgHtml += `
        <path class="annular-sector-path" 
              id="sector-${topic.id}"
              data-id="${topic.id}"
              data-index="${i}"
              d="${pathD}" 
              tabindex="0"
              role="button"
              aria-label="${topic.number}. ${topic.paliTitle} — ${langContent.title}">
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
             aria-label="${topic.number}. ${topic.paliTitle} — ${langContent.title}">
          <span class="sector-num-badge">${topic.number}</span>
          <div class="sector-pali-title">${topic.paliTitle}</div>
          <div class="sector-eng-title">${langContent.title}</div>
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

    this.dom.wheelCenterHub.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.dom.wheelCenterHub.click();
      }
    });
  }

  previewTopicInHub(topic) {
    this.currentPreviewTopic = topic;
    const t = this.i18n[this.currentLang] || this.i18n.en;
    const langContent = topic[this.currentLang] || topic.en;

    this.dom.hubBadge.textContent = `${t.hubTopicPrefix} ${topic.number}`;
    this.dom.hubTitle.textContent = topic.paliTitle;
    this.dom.hubDesc.textContent = `${langContent.title} ${t.hubClickPrompt}`;
    this.dom.wheelCenterHub.style.borderColor = 'var(--gold-primary)';
    this.dom.wheelCenterHub.style.boxShadow = '0 0 35px rgba(224, 169, 68, 0.45), inset 0 0 20px rgba(0, 0, 0, 0.8)';
  }

  resetHub() {
    this.currentPreviewTopic = null;
    const t = this.i18n[this.currentLang] || this.i18n.en;
    this.dom.hubBadge.textContent = t.hubBadge;
    this.dom.hubTitle.textContent = t.hubDefaultTitle;
    this.dom.hubDesc.textContent = t.hubDefaultDesc;
    this.dom.wheelCenterHub.style.borderColor = '';
    this.dom.wheelCenterHub.style.boxShadow = '';
  }

  openReaderModal(topicId) {
    const topic = this.topics.find(t => t.id === topicId);
    if (!topic) return;

    this.currentTopic = topic;
    this.populateReaderModal(topic);

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

  populateReaderModal(topic) {
    const t = this.i18n[this.currentLang] || this.i18n.en;
    const langContent = topic[this.currentLang] || topic.en;

    // Populate Modal Header
    this.dom.modalNumber.textContent = topic.number;
    this.dom.modalCategory.textContent = langContent.category;
    this.dom.modalPaliTitle.textContent = topic.paliTitle;
    this.dom.modalEngTitle.textContent = langContent.title;
    this.dom.modalCitation.textContent = `${t.canonicalSourcesPrefix} ${topic.canonicalRef}`;
    this.dom.modalOverview.textContent = langContent.overview;

    // Key Pali Terms
    this.dom.modalPaliTerms.innerHTML = langContent.keyPaliTerms.map(k => `
      <div class="pali-term-chip">
        <div class="pali-term-name">${k.term}</div>
        <div class="pali-term-def">${k.meaning}</div>
      </div>
    `).join('');

    // Canonical Excerpts
    this.dom.modalExcerptsList.innerHTML = langContent.canonicalExcerpts.map(ex => `
      <div class="sutta-box">
        <div class="sutta-source-name">${ex.source}</div>
        <div class="sutta-pali-passage">${ex.pali}</div>
        <div class="sutta-english-passage">"${ex.translation}"</div>
      </div>
    `).join('');

    // Household Practice
    this.dom.modalHouseholdList.innerHTML = langContent.householdApplication.map(app => `
      <div class="practice-card">
        <div class="practice-card-title">
          <span>☸</span> ${app.title}
        </div>
        <div class="practice-card-detail">${app.detail}</div>
      </div>
    `).join('');

    // Contemplative Inquiry
    this.dom.modalInquiryList.innerHTML = langContent.contemplativeInquiry.map(q => `
      <li class="inquiry-item">${q}</li>
    `).join('');
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
