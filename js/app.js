/**
 * The Lay Dharma Household Mārga — Main Application Controller
 * Radial Menu with 9 Annular Sectors (Wheel of Dhamma)
 * In-Page Canonical Study Portal Architecture (Full-Page Display)
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
    this.activeTabId = 'tab-overview';

    this.initDOM();
    this.bindEvents();
    this.renderRadialMenu();
    this.applyLanguageUI();

    // Check URL hash for initial topic or default to Topic 01 (Cattāri Ariyasaccāni)
    const hash = window.location.hash.replace('#', '');
    const initialTopic = this.topics.find(t => t.id === hash) || this.topics[0];
    this.selectTopic(initialTopic.id, false);
  }

  initDOM() {
    this.dom = {
      // Language controls
      langBtnEn: document.getElementById('langBtnEn'),
      langBtnPt: document.getElementById('langBtnPt'),
      siteTitle: document.getElementById('siteTitle'),
      siteSubtitle: document.getElementById('siteSubtitle'),

      // Radial stage elements
      wheelStage: document.getElementById('wheelStage'),
      radialMenuWrapper: document.getElementById('radialMenuWrapper'),
      annularSectorsGroup: document.getElementById('annularSectorsGroup'),
      radialLabelsContainer: document.getElementById('radialLabelsContainer'),
      wheelCenterHub: document.getElementById('wheelCenterHub'),
      hubBadge: document.getElementById('hubBadge'),
      hubTitle: document.getElementById('hubTitle'),
      hubDesc: document.getElementById('hubDesc'),

      // In-Page Study Portal elements
      studyPortal: document.getElementById('studyPortal'),
      readerDialog: document.getElementById('readerDialog'),
      modalNumber: document.getElementById('modalNumber'),
      modalCategory: document.getElementById('modalCategory'),
      modalPaliTitle: document.getElementById('modalPaliTitle'),
      modalEngTitle: document.getElementById('modalEngTitle'),
      modalCitation: document.getElementById('modalCitation'),
      modalOverview: document.getElementById('modalOverview'),
      modalDoctrinalFramework: document.getElementById('modalDoctrinalFramework'),
      modalPaliTerms: document.getElementById('modalPaliTerms'),
      modalExcerptsList: document.getElementById('modalExcerptsList'),
      modalHouseholdList: document.getElementById('modalHouseholdList'),
      tabBtns: document.querySelectorAll('.tab-nav-btn'),
      tabContents: document.querySelectorAll('.tab-content'),

      // Translatable UI nodes
      tabBtnOverview: document.getElementById('tabBtnOverview'),
      tabBtnCanonical: document.getElementById('tabBtnCanonical'),
      tabBtnHousehold: document.getElementById('tabBtnHousehold'),
      headingKeyPali: document.getElementById('headingKeyPali'),
      householdIntroText: document.getElementById('householdIntroText'),

      // Bottom Navigation Footer
      footerPrevBtn: document.getElementById('footerPrevBtn'),
      footerPrevText: document.getElementById('footerPrevText'),
      footerWheelBtn: document.getElementById('footerWheelBtn'),
      footerWheelText: document.getElementById('footerWheelText'),
      footerNextBtn: document.getElementById('footerNextBtn'),
      footerNextText: document.getElementById('footerNextText')
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

    // Step navigation buttons (Prev / Next Pillar at bottom footer)
    if (this.dom.footerPrevBtn) {
      this.dom.footerPrevBtn.addEventListener('click', () => this.stepTopic(-1));
    }
    if (this.dom.footerNextBtn) {
      this.dom.footerNextBtn.addEventListener('click', () => this.stepTopic(1));
    }

    // Smooth scroll to Wheel of Dhamma
    const scrollToWheel = (e) => {
      e.preventDefault();
      if (this.dom.wheelStage) {
        this.dom.wheelStage.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    if (this.dom.footerWheelBtn) {
      this.dom.footerWheelBtn.addEventListener('click', scrollToWheel);
    }

    // Tab switching inside reader
    this.dom.tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTabId = btn.dataset.tab;
        this.switchTab(targetTabId);
      });
    });

    // Keyboard shortcuts: Alt + ArrowLeft / Alt + ArrowRight for sequential pillar study
    document.addEventListener('keydown', (e) => {
      if (document.activeElement && ['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
      if (e.key === 'ArrowLeft' && e.altKey) {
        this.stepTopic(-1);
      } else if (e.key === 'ArrowRight' && e.altKey) {
        this.stepTopic(1);
      }
    });

    // Hash change listener for browser navigation
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && this.currentTopic && this.currentTopic.id !== hash) {
        const topic = this.topics.find(t => t.id === hash);
        if (topic) this.selectTopic(topic.id, false);
      }
    });
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

    // In-Page Navigation Labels
    if (this.dom.footerWheelText) this.dom.footerWheelText.textContent = t.returnToWheel;

    // Tab buttons in reader
    if (this.dom.tabBtnOverview) this.dom.tabBtnOverview.textContent = t.tabOverview;
    if (this.dom.tabBtnCanonical) this.dom.tabBtnCanonical.textContent = t.tabCanonical;
    if (this.dom.tabBtnHousehold) this.dom.tabBtnHousehold.textContent = t.tabHousehold;

    // Section headings & intro texts in reader
    if (this.dom.headingKeyPali) this.dom.headingKeyPali.innerHTML = `<span>☸</span> ${t.keyPaliTermsHeading}`;
    if (this.dom.householdIntroText) this.dom.householdIntroText.textContent = t.householdIntro;

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
      this.previewTopicInHub(this.currentPreviewTopic, false);
    } else if (this.currentTopic) {
      this.previewTopicInHub(this.currentTopic, true);
    } else {
      this.resetHub();
    }

    // If a topic is selected, refresh its content in the new language
    if (this.currentTopic) {
      this.populateReader(this.currentTopic);
      this.updateStepLabels();
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

      // Centroid coordinates for HTML label (measured from 50%, 50% center of the wheel)
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
      if (!sector || !label) return;

      const onEnter = () => {
        sector.classList.add('active-sector');
        label.classList.add('hovered');
        const alphaMid = (-90 + (i * stepDeg)) * Math.PI / 180;
        const dx = Math.round(Math.cos(alphaMid) * 8);
        const dy = Math.round(Math.sin(alphaMid) * 8);
        sector.style.transform = `translate(${dx}px, ${dy}px)`;
        this.previewTopicInHub(topic, false);
      };

      const onLeave = () => {
        sector.classList.remove('active-sector');
        label.classList.remove('hovered');
        sector.style.transform = '';
        this.resetHub();
      };

      const onClick = () => {
        this.selectTopic(topic.id, true);
      };

      [sector, label].forEach(elem => {
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

    // Center Hub interaction
    this.dom.wheelCenterHub.addEventListener('click', () => {
      if (this.currentPreviewTopic) {
        this.selectTopic(this.currentPreviewTopic.id, true);
      } else if (this.currentTopic) {
        if (this.dom.studyPortal) {
          this.dom.studyPortal.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else if (this.topics.length > 0) {
        this.selectTopic(this.topics[0].id, true);
      }
    });

    this.dom.wheelCenterHub.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.dom.wheelCenterHub.click();
      }
    });
  }

  /**
   * Step between the 9 pillars sequentially
   * @param {number} direction - -1 for previous, 1 for next
   */
  stepTopic(direction) {
    if (!this.currentTopic) return;
    const currentIndex = this.topics.findIndex(t => t.id === this.currentTopic.id);
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = this.topics.length - 1;
    if (newIndex >= this.topics.length) newIndex = 0;
    this.selectTopic(this.topics[newIndex].id, false);
  }

  /**
   * Update Next/Previous pillar button labels and accessibility titles
   */
  updateStepLabels() {
    if (!this.currentTopic) return;
    const curIdx = this.topics.findIndex(t => t.id === this.currentTopic.id);
    const prevIdx = (curIdx - 1 + this.topics.length) % this.topics.length;
    const nextIdx = (curIdx + 1) % this.topics.length;
    const prevTopic = this.topics[prevIdx];
    const nextTopic = this.topics[nextIdx];

    const t = this.i18n[this.currentLang] || this.i18n.en;
    if (this.dom.footerPrevText) {
      this.dom.footerPrevText.textContent = `${t.prevPillar}: ${prevTopic.number} ${prevTopic.paliTitle}`;
    }
    if (this.dom.footerNextText) {
      this.dom.footerNextText.textContent = `${t.nextPillar}: ${nextTopic.number} ${nextTopic.paliTitle}`;
    }
  }

  previewTopicInHub(topic, isSelected = false) {
    this.currentPreviewTopic = isSelected ? null : topic;
    const t = this.i18n[this.currentLang] || this.i18n.en;
    const langContent = topic[this.currentLang] || topic.en;

    this.dom.hubBadge.textContent = `${t.hubTopicPrefix} ${topic.number}`;
    this.dom.hubTitle.textContent = topic.paliTitle;
    this.dom.hubDesc.textContent = `${langContent.title} ${isSelected ? (t.hubStudyingPrompt || '• Currently studying') : t.hubClickPrompt}`;
    this.dom.wheelCenterHub.style.borderColor = 'var(--gold-primary)';
    this.dom.wheelCenterHub.style.boxShadow = '0 0 35px rgba(224, 169, 68, 0.45), inset 0 0 20px rgba(0, 0, 0, 0.8)';
  }

  resetHub() {
    this.currentPreviewTopic = null;
    if (this.currentTopic) {
      this.previewTopicInHub(this.currentTopic, true);
      return;
    }
    const t = this.i18n[this.currentLang] || this.i18n.en;
    this.dom.hubBadge.textContent = t.hubBadge;
    this.dom.hubTitle.textContent = t.hubDefaultTitle;
    this.dom.hubDesc.textContent = t.hubDefaultDesc;
    this.dom.wheelCenterHub.style.borderColor = '';
    this.dom.wheelCenterHub.style.boxShadow = '';
  }

  /**
   * Select a topic to display in the in-page study portal
   * @param {string} topicId
   * @param {boolean} scrollIntoView - Smoothly scroll to the reader card
   */
  selectTopic(topicId, scrollIntoView = false) {
    const topic = this.topics.find(t => t.id === topicId);
    if (!topic) return;

    this.currentTopic = topic;
    this.populateReader(topic);

    // Update active sector and label on Dharmachakra wheel
    this.topics.forEach(t => {
      const s = document.getElementById(`sector-${t.id}`);
      const l = document.getElementById(`label-${t.id}`);
      const isCurrent = t.id === topic.id;
      if (s) s.classList.toggle('selected-sector', isCurrent);
      if (l) l.classList.toggle('selected', isCurrent);
    });

    // Update center hub state
    this.previewTopicInHub(topic, true);

    // Update step button tooltips and labels
    this.updateStepLabels();

    // Update browser URL hash without causing a jump
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, '', `#${topic.id}`);
    }

    // Smooth scroll down to study reader if requested (e.g. when clicking wheel)
    if (scrollIntoView && this.dom.studyPortal) {
      this.dom.studyPortal.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  populateReader(topic) {
    const t = this.i18n[this.currentLang] || this.i18n.en;
    const langContent = topic[this.currentLang] || topic.en;

    // Populate Reader Header
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

    // Doctrinal Operational Matrix (Catukicca Framework)
    if (this.dom.modalDoctrinalFramework) {
      if (langContent.doctrinalMatrix) {
        const dm = langContent.doctrinalMatrix;
        this.dom.modalDoctrinalFramework.innerHTML = `
          <div class="doctrinal-matrix-container">
            <div class="doctrinal-matrix-header">
              <div class="doctrinal-matrix-title"><span>☸</span> ${t.doctrinalFrameworkHeading}</div>
              <div class="doctrinal-matrix-subtitle">${t.doctrinalFrameworkSubtitle}</div>
            </div>
            <p class="doctrinal-matrix-intro">${dm.intro}</p>
            <div class="doctrinal-truths-grid">
              ${dm.truths.map(truth => `
                <div class="doctrinal-truth-card">
                  <div class="doctrinal-truth-top">
                    <div>
                      <div class="doctrinal-truth-name-pali">${truth.number} — ${truth.paliName}</div>
                      <div class="doctrinal-truth-name-trans">${truth.transName}</div>
                    </div>
                    <span class="doctrinal-duty-badge">${truth.dutyPali}</span>
                  </div>
                  <div class="doctrinal-question-row">
                    <span>☸</span> ${truth.dutyQuestion}
                  </div>
                  <div class="doctrinal-comparison-row">
                    <div class="doctrinal-crude-box">
                      <div class="doctrinal-crude-label">⚠ ${t.popularSloganLabel}</div>
                      <div>${truth.crudeSlogan}</div>
                    </div>
                    <div class="doctrinal-reality-box">
                      <div class="doctrinal-reality-label">✓ ${t.canonicalRealityLabel}</div>
                      <div>${truth.canonicalReality}</div>
                    </div>
                  </div>
                  <div class="doctrinal-highlight-chip">
                    ${truth.highlight}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
        this.dom.modalDoctrinalFramework.style.display = 'block';
      } else {
        this.dom.modalDoctrinalFramework.innerHTML = '';
        this.dom.modalDoctrinalFramework.style.display = 'none';
      }
    }

    // Canonical Corpus / Excerpts
    if (langContent.canonicalCorpus && langContent.canonicalCorpus.length > 0) {
      // Dynamically group distinct levels for roadmap banner
      const levelsMap = new Map();
      langContent.canonicalCorpus.forEach((sutta, idx) => {
        const lvl = sutta.levelNumber ? String(sutta.levelNumber) : null;
        if (lvl) {
          if (!levelsMap.has(lvl)) {
            levelsMap.set(lvl, { level: lvl, codes: [sutta.suttaCode], target: `#corpus-sutta-${idx}` });
          } else {
            levelsMap.get(lvl).codes.push(sutta.suttaCode);
          }
        }
      });

      const roadmapItems = Array.from(levelsMap.values()).map(item => ({
        level: item.level,
        code: item.codes.join(' • '),
        target: item.target
      }));

      const jumpNavHtml = roadmapItems.length > 0 ? `
        <div class="progression-roadmap-banner">
          <div class="progression-header-title"><span>☸</span> ${t.studyProgressionHeading}</div>
          <div class="progression-header-subtitle">${t.studyProgressionSubtitle}</div>
          <div class="progression-flow-bar">
            ${roadmapItems.map((item, rIdx) => `
              <a href="${item.target}" class="progression-level-pill">
                <span class="pill-level-tag">L${item.level}</span>
                <span class="jump-pill-code">${item.code}</span>
              </a>
              ${rIdx < roadmapItems.length - 1 ? '<span class="progression-arrow-sep">→</span>' : ''}
            `).join('')}
          </div>
        </div>
      ` : '';

      let lastLevel = null;
      const corpusCardsHtml = langContent.canonicalCorpus.map((sutta, idx) => {
        // Level Transition Header & Guiding Inquiry
        let levelHeaderHtml = '';
        if (sutta.levelNumber && sutta.levelNumber !== lastLevel) {
          levelHeaderHtml = `
            ${idx > 0 ? '<div class="progression-down-arrow">↓</div>' : ''}
            <div class="progression-level-divider">
              <div class="progression-level-divider-title">${sutta.levelTitle}</div>
              <div class="progression-level-question-tag">${sutta.guidingQuestion}</div>
            </div>
          `;
          lastLevel = sutta.levelNumber;
        } else if (sutta.levelNumber && sutta.levelNumber === lastLevel && sutta.guidingQuestion) {
          levelHeaderHtml = `
            <div class="progression-down-arrow">↓</div>
            <div style="display: flex; justify-content: flex-end; margin-bottom: 12px;">
              <span class="progression-level-question-tag">${sutta.guidingQuestion}</span>
            </div>
          `;
        }

        // Establishes List
        let establishesHtml = '';
        if (sutta.establishes && sutta.establishes.length > 0) {
          establishesHtml = `
            <div class="corpus-section-block">
              <div class="corpus-block-heading">${t.establishesLabel}</div>
              <ul class="corpus-establishes-list">
                ${sutta.establishes.map(item => `<li>${item}</li>`).join('')}
              </ul>
            </div>
          `;
        }

        // Fourfold Duty Structure (Catukicca) Table
        let dutyHtml = '';
        if (sutta.coreDuty) {
          dutyHtml = `
            <div class="corpus-duty-card">
              <div class="corpus-duty-header">
                <span class="corpus-duty-icon">☸</span>
                <span class="corpus-duty-title">${sutta.coreDuty.title}</span>
              </div>
              <p class="corpus-duty-intro">${sutta.coreDuty.intro}</p>
              <div class="duty-table-wrapper">
                <table class="duty-matrix-table">
                  <thead>
                    <tr>
                      <th>${t.dutyMatrixTruth}</th>
                      <th>${t.dutyMatrixPali}</th>
                      <th>${t.dutyMatrixAction}</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${sutta.coreDuty.matrix.map(row => `
                      <tr>
                        <td class="duty-truth-cell">${row.truth}</td>
                        <td class="duty-pali-cell">${row.paliDuty}</td>
                        <td class="duty-action-cell">${row.meaning}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
              ${sutta.coreDuty.note ? `<div class="duty-principle-note"><strong>${t.dutyMatrixPrinciple}</strong> ${sutta.coreDuty.note}</div>` : ''}
            </div>
          `;
        }

        // Deep Anatomy Card
        let anatomyHtml = '';
        if (sutta.deepAnatomy) {
          anatomyHtml = `
            <div class="corpus-anatomy-card">
              <div class="corpus-anatomy-header">
                <span class="corpus-anatomy-icon">☸</span>
                <span class="corpus-anatomy-title">${sutta.deepAnatomy.title}</span>
              </div>
              <p class="corpus-anatomy-detail">${sutta.deepAnatomy.detail}</p>
            </div>
          `;
        }

        // Canonical Passage
        let excerptHtml = '';
        if (sutta.excerptPali || sutta.excerptTrans) {
          excerptHtml = `
            <div class="sutta-box">
              <div class="sutta-source-name">${sutta.suttaCode} — Canonical Text</div>
              ${sutta.excerptPali ? `<div class="sutta-pali-passage">${sutta.excerptPali}</div>` : ''}
              ${sutta.excerptTrans ? `<div class="sutta-english-passage">"${sutta.excerptTrans}"</div>` : ''}
            </div>
          `;
        }

        // SuttaCentral Action Row
        let scLinkHtml = '';
        if (sutta.suttaCentralUrl) {
          scLinkHtml = `
            <div class="corpus-link-row">
              <a href="${sutta.suttaCentralUrl}" target="_blank" rel="noopener noreferrer" class="suttacentral-btn">
                <span>${t.readOnSuttaCentral} (${sutta.suttaCode})</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          `;
        }

        return `
          ${levelHeaderHtml}
          <article class="corpus-sutta-card" id="corpus-sutta-${idx}">
            <header class="corpus-card-header">
              <div class="corpus-badges-row">
                <span class="corpus-num-badge">${idx + 1}</span>
                ${sutta.levelNumber ? `<span class="pill-level-tag">Level ${sutta.levelNumber}</span>` : ''}
                <span class="corpus-code-badge">${sutta.suttaCode}</span>
                <span class="corpus-role-badge">${sutta.role}</span>
              </div>
              <h3 class="corpus-pali-title">${sutta.paliTitle}</h3>
              <div class="corpus-trans-title">“${sutta.transTitle}”</div>
            </header>

            <div class="corpus-card-content">
              <p class="corpus-summary-lead">${sutta.summary}</p>
              ${establishesHtml}
              ${dutyHtml}
              ${anatomyHtml}
              ${excerptHtml}
              ${scLinkHtml}
            </div>
          </article>
        `;
      }).join('');

      this.dom.modalExcerptsList.innerHTML = jumpNavHtml + corpusCardsHtml;
    } else if (langContent.canonicalExcerpts) {
      this.dom.modalExcerptsList.innerHTML = langContent.canonicalExcerpts.map(ex => `
        <div class="sutta-box">
          <div class="sutta-source-name">${ex.source}</div>
          <div class="sutta-pali-passage">${ex.pali}</div>
          <div class="sutta-english-passage">"${ex.translation}"</div>
        </div>
      `).join('');
    }

    // Household Practice
    if (langContent.fourthNobleTruthModule) {
      if (this.dom.householdIntroText) {
        this.dom.householdIntroText.textContent = t.householdIntroMagga || langContent.fourthNobleTruthModule.header.leadText;
      }
      this.dom.modalHouseholdList.innerHTML = this.renderFourthNobleTruthModule(langContent.fourthNobleTruthModule, this.currentLang);
    } else {
      if (this.dom.householdIntroText) {
        this.dom.householdIntroText.textContent = t.householdIntro;
      }
      this.dom.modalHouseholdList.innerHTML = langContent.householdApplication.map(app => `
        <div class="practice-card">
          <div class="practice-card-title">
            <span>☸</span> ${app.title}
          </div>
          <div class="practice-card-detail">${app.detail}</div>
        </div>
      `).join('');
    }
  }

  renderFourthNobleTruthModule(m, lang) {
    if (!m) return '';

    // Quick Jump Navigation
    const navPills = [
      { id: "magga-sec-1", num: "01", label: lang === 'pt' ? "Quarta Verdade" : "4th Truth" },
      { id: "magga-sec-2", num: "02", label: lang === 'pt' ? "Os 8 Fatores" : "8 Path Factors" },
      { id: "magga-sec-3", num: "03", label: lang === 'pt' ? "Treino Tríplice" : "Threefold Training" },
      { id: "magga-sec-4", num: "04", label: lang === 'pt' ? "Sinergia (MN 117)" : "Synergy (MN 117)" },
      { id: "magga-sec-5", num: "05", label: lang === 'pt' ? "Treino Gradual" : "Gradual Training" },
      { id: "magga-sec-6", num: "06", label: lang === 'pt' ? "Atenção Plena" : "Mindfulness" },
      { id: "magga-sec-7", num: "07", label: lang === 'pt' ? "Intenção Reta" : "Right Intention" },
      { id: "magga-sec-8", num: "08", label: lang === 'pt' ? "Vida Leiga" : "Lay Life" },
      { id: "magga-sec-9", num: "09", label: lang === 'pt' ? "Cessação" : "Cessation" },
      { id: "magga-sec-10", num: "10", label: lang === 'pt' ? "10 Equívocos" : "10 Misconceptions" }
    ];

    const navHtml = `
      <div class="magga-nav-bar" role="navigation" aria-label="Fourth Noble Truth Sections">
        <div class="magga-nav-label"><span>☸</span> ${lang === 'pt' ? 'Navegação do Módulo:' : 'Module Sections:'}</div>
        <div class="magga-nav-pills">
          ${navPills.map(p => `
            <a href="#${p.id}" class="magga-nav-pill">
              <span class="magga-nav-num">${p.num}</span>
              <span>${p.label}</span>
            </a>
          `).join('')}
        </div>
      </div>
    `;

    // Section 1: What is the Fourth Noble Truth?
    const s1 = m.section1;
    const s1Html = `
      <section class="magga-sec-card" id="magga-sec-1">
        <header class="magga-sec-header">
          <div class="magga-badges-row">
            <span class="magga-num-badge">${s1.number}</span>
            <span class="magga-provenance-badge">${s1.provenanceTag}</span>
          </div>
          <h3 class="magga-sec-title">${s1.title}</h3>
          <div class="magga-sec-pali">${s1.paliTitle}</div>
        </header>

        <div class="magga-sutta-chips-row">
          ${s1.sourceSuttas.map(s => `
            <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="magga-sutta-chip">
              <span>📖 ${s.code} — ${s.title}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          `).join('')}
        </div>

        <div class="magga-quote-box">
          <div class="magga-quote-pali">${s1.canonicalPassage.pali}</div>
          <div class="magga-quote-trans">“${s1.canonicalPassage.translation}”</div>
          <div class="magga-quote-meta">— ${s1.canonicalPassage.translator}</div>
        </div>

        <p class="magga-prose">${s1.doctrinalAnalysis}</p>

        <div class="magga-catukicca-card">
          <div class="magga-subheading"><span>☸</span> ${s1.catukiccaFramework.heading}</div>
          <p class="magga-subtext">${s1.catukiccaFramework.explanation}</p>
          <div class="magga-tasks-grid">
            ${s1.catukiccaFramework.tasks.map(t => `
              <div class="magga-task-item">
                <div class="magga-task-truth">${t.truth}</div>
                <div class="magga-task-duty-badge">${t.dutyPali}</div>
                <div class="magga-task-action">${t.dutyEnglish}</div>
                <div class="magga-task-desc">${t.description}</div>
              </div>
            `).join('')}
          </div>
          <div class="magga-core-note">${s1.catukiccaFramework.coreNote}</div>
        </div>
      </section>
    `;

    // Section 2: The 8 Path Factors
    const s2 = m.section2;
    const s2Html = `
      <section class="magga-sec-card" id="magga-sec-2">
        <header class="magga-sec-header">
          <div class="magga-badges-row">
            <span class="magga-num-badge">${s2.number}</span>
            <span class="magga-provenance-badge">${s2.provenanceTag}</span>
          </div>
          <h3 class="magga-sec-title">${s2.title}</h3>
          <div class="magga-sec-pali">${s2.paliTitle}</div>
        </header>
        <p class="magga-prose">${s2.intro}</p>

        <div class="magga-factors-deck">
          ${s2.factors.map(f => {
            const trainingClass = f.trainingGroup.toLowerCase().includes('paññā') || f.trainingGroup.toLowerCase().includes('sabedoria')
              ? 'training-panna'
              : (f.trainingGroup.toLowerCase().includes('sīla') || f.trainingGroup.toLowerCase().includes('virtude') ? 'training-sila' : 'training-samadhi');

            return `
              <article class="magga-factor-card" id="factor-${f.factorNumber}">
                <div class="magga-factor-header">
                  <div class="magga-factor-title-wrap">
                    <span class="magga-factor-num">0${f.factorNumber}</span>
                    <div>
                      <h4 class="magga-factor-pali">${f.paliName}</h4>
                      <div class="magga-factor-eng">${f.englishName}</div>
                    </div>
                  </div>
                  <span class="magga-training-pill ${trainingClass}">${f.trainingGroup}</span>
                </div>

                <div class="magga-canonical-def-box">
                  <div class="magga-def-source">${f.canonicalDefinition.sutta} • ${f.canonicalDefinition.translator}</div>
                  <div class="magga-quote-pali">${f.canonicalDefinition.paliQuote}</div>
                  <div class="magga-quote-trans">“${f.canonicalDefinition.transQuote}”</div>
                </div>

                <div class="magga-factor-body">
                  <div class="magga-block-label">${lang === 'pt' ? 'Explicação Doutrinária:' : 'Doctrinal Explanation:'}</div>
                  <p class="magga-prose-sm">${f.doctrinalExplanation}</p>

                  <div class="magga-block-label">${lang === 'pt' ? 'Função no Caminho:' : 'Function in the Path:'}</div>
                  <p class="magga-prose-sm">${f.functionInPath}</p>

                  <div class="magga-lay-app-box">
                    <div class="magga-lay-app-badge"><span>✓</span> ${f.layApplication.tag}</div>
                    <p class="magga-prose-sm">${f.layApplication.description}</p>
                  </div>

                  <div class="magga-factor-footer">
                    <div class="magga-factor-links">
                      <span class="magga-links-label">${lang === 'pt' ? 'Suttas Primários:' : 'Primary Suttas:'}</span>
                      ${f.primaryReferences.map(ref => `
                        <a href="${ref.url}" target="_blank" rel="noopener noreferrer" class="magga-ref-link">
                          ${ref.code} (${ref.name})
                        </a>
                      `).join(' • ')}
                    </div>
                    ${f.furtherStudy ? `<div class="magga-further-study"><em>${lang === 'pt' ? 'Aprofundamento:' : 'Further Study:'}</em> ${f.furtherStudy}</div>` : ''}
                  </div>
                </div>
              </article>
            `;
          }).join('')}
        </div>
      </section>
    `;

    // Section 3: The Threefold Training (Tisikkhā)
    const s3 = m.section3;
    const s3Html = `
      <section class="magga-sec-card" id="magga-sec-3">
        <header class="magga-sec-header">
          <div class="magga-badges-row">
            <span class="magga-num-badge">${s3.number}</span>
            <span class="magga-provenance-badge">${s3.provenanceTag}</span>
          </div>
          <h3 class="magga-sec-title">${s3.title}</h3>
          <div class="magga-sec-pali">${s3.paliTitle}</div>
        </header>

        <div class="magga-speaker-attribution">
          <span>☸</span> ${lang === 'pt' ? 'Exposição Proferida por:' : 'Discourse Speaker:'} <strong>${s3.speaker}</strong>
        </div>

        <div class="magga-quote-box">
          <div class="magga-quote-pali">${s3.canonicalPassage.pali}</div>
          <div class="magga-quote-trans">“${s3.canonicalPassage.translation}”</div>
          <div class="magga-quote-meta">— ${s3.canonicalPassage.translator}</div>
        </div>

        <p class="magga-prose">${s3.doctrinalAnalysis}</p>

        <div class="magga-tisikkha-grid">
          ${s3.trainings.map(tr => `
            <div class="magga-tisikkha-col">
              <h4 class="magga-tisikkha-name">${tr.name}</h4>
              <ul class="magga-tisikkha-factors">
                ${tr.factors.map(fact => `<li><span class="magga-bullet">☸</span> ${fact}</li>`).join('')}
              </ul>
              <p class="magga-tisikkha-purpose">${tr.purpose}</p>
            </div>
          `).join('')}
        </div>

        <div class="magga-core-note">${s3.relationshipExplanation}</div>
      </section>
    `;

    // Section 4: How Path Factors Work Together (MN 117)
    const s4 = m.section4;
    const s4Html = `
      <section class="magga-sec-card" id="magga-sec-4">
        <header class="magga-sec-header">
          <div class="magga-badges-row">
            <span class="magga-num-badge">${s4.number}</span>
            <span class="magga-provenance-badge">${s4.provenanceTag}</span>
          </div>
          <h3 class="magga-sec-title">${s4.title}</h3>
          <div class="magga-sec-pali">${s4.paliTitle}</div>
        </header>

        <div class="magga-sutta-chips-row">
          <a href="${s4.sourceSutta.url}" target="_blank" rel="noopener noreferrer" class="magga-sutta-chip">
            <span>📖 ${s4.sourceSutta.code} — ${s4.sourceSutta.title}</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </div>

        <div class="magga-principles-grid">
          ${s4.keyPrinciples.map(pr => `
            <div class="magga-principle-card">
              <h4 class="magga-principle-title"><span>☸</span> ${pr.title}</h4>
              <p class="magga-principle-detail">${pr.detail}</p>
            </div>
          `).join('')}
        </div>
      </section>
    `;

    // Section 5: The Gradual Training (MN 107 & MN 39)
    const s5 = m.section5;
    const s5Html = `
      <section class="magga-sec-card" id="magga-sec-5">
        <header class="magga-sec-header">
          <div class="magga-badges-row">
            <span class="magga-num-badge">${s5.number}</span>
            <span class="magga-provenance-badge">${s5.provenanceTag}</span>
          </div>
          <h3 class="magga-sec-title">${s5.title}</h3>
          <div class="magga-sec-pali">${s5.paliTitle}</div>
        </header>

        <div class="magga-sutta-chips-row">
          ${s5.sourceSuttas.map(s => `
            <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="magga-sutta-chip">
              <span>📖 ${s.code} — ${s.title}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          `).join('')}
        </div>

        <p class="magga-prose">${s5.intro}</p>

        <div class="magga-pipeline-grid">
          ${s5.progressionStages.map(st => `
            <div class="magga-pipeline-step">
              <div class="magga-step-num-badge">${st.stageNumber}</div>
              <div class="magga-step-content">
                <div class="magga-step-pali">${st.paliTerm}</div>
                <h4 class="magga-step-title">${st.title}</h4>
                <p class="magga-step-desc">${st.description}</p>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="magga-core-note">${s5.distinctionNote}</div>
      </section>
    `;

    // Section 6: Mindfulness and Meditation (DN 22 & MN 118)
    const s6 = m.section6;
    const s6Html = `
      <section class="magga-sec-card" id="magga-sec-6">
        <header class="magga-sec-header">
          <div class="magga-badges-row">
            <span class="magga-num-badge">${s6.number}</span>
            <span class="magga-provenance-badge">${s6.provenanceTag}</span>
          </div>
          <h3 class="magga-sec-title">${s6.title}</h3>
          <div class="magga-sec-pali">${s6.paliTitle}</div>
        </header>

        <div class="magga-sutta-chips-row">
          ${s6.sourceSuttas.map(s => `
            <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="magga-sutta-chip">
              <span>📖 ${s.code} — ${s.title}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          `).join('')}
        </div>

        <div class="magga-satipatthana-box">
          <h4 class="magga-subheading"><span>☸</span> ${s6.satipatthanaFramework.title}</h4>
          <div class="magga-foundations-grid">
            ${s6.satipatthanaFramework.foundations.map(fd => `
              <div class="magga-foundation-card">
                <div class="magga-foundation-name">${fd.name}</div>
                <div class="magga-foundation-focus">${fd.focus}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="magga-cascade-box">
          <h4 class="magga-subheading"><span>☸</span> ${s6.anapanasatiCascade.title}</h4>
          <p class="magga-subtext">${s6.anapanasatiCascade.text}</p>
          <div class="magga-cascade-steps">
            ${s6.anapanasatiCascade.steps.map(step => `
              <div class="magga-cascade-item">
                <span class="magga-cascade-arrow">➔</span>
                <span>${step}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="magga-warning-box">
          <div class="magga-warning-label">⚠ ${lang === 'pt' ? 'Salvaguarda Canônica' : 'Canonical Guardrail'}</div>
          <div>${s6.secularWarning}</div>
        </div>
      </section>
    `;

    // Section 7: Right Intention in Practice (MN 19)
    const s7 = m.section7;
    const s7Html = `
      <section class="magga-sec-card" id="magga-sec-7">
        <header class="magga-sec-header">
          <div class="magga-badges-row">
            <span class="magga-num-badge">${s7.number}</span>
            <span class="magga-provenance-badge">${s7.provenanceTag}</span>
          </div>
          <h3 class="magga-sec-title">${s7.title}</h3>
          <div class="magga-sec-pali">${s7.paliTitle}</div>
        </header>

        <div class="magga-sutta-chips-row">
          <a href="${s7.sourceSutta.url}" target="_blank" rel="noopener noreferrer" class="magga-sutta-chip">
            <span>📖 ${s7.sourceSutta.code} — ${s7.sourceSutta.title}</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </div>

        <div class="magga-quote-box">
          <div class="magga-quote-pali">${s7.bodhisattaMethod.paliQuote}</div>
          <div class="magga-quote-trans">“${s7.bodhisattaMethod.quote}”</div>
        </div>

        <div class="magga-thoughts-comparison-grid">
          ${s7.bodhisattaMethod.division.map(d => {
            const isUnwholesome = d.class.includes('Unwholesome') || d.class.includes('Prejudiciais');
            return `
              <div class="magga-thought-class-card ${isUnwholesome ? 'thought-unwholesome' : 'thought-wholesome'}">
                <h4 class="magga-thought-class-title">${isUnwholesome ? '⚠ ' : '✓ '}${d.class}</h4>
                <ul class="magga-thought-items">
                  ${d.items.map(it => `<li>${it}</li>`).join('')}
                </ul>
                <div class="magga-thought-consequence"><strong>${lang === 'pt' ? 'Consequência:' : 'Result:'}</strong> ${d.consequence}</div>
              </div>
            `;
          }).join('')}
        </div>

        <div class="magga-lay-app-box">
          <div class="magga-lay-app-badge"><span>✓</span> ${s7.layApplication.tag}</div>
          <p class="magga-subtext">${s7.layApplication.intro}</p>
          <ul class="magga-lay-points-list">
            ${s7.layApplication.points.map(pt => `<li><span class="magga-bullet">☸</span> ${pt}</li>`).join('')}
          </ul>
        </div>
      </section>
    `;

    // Section 8: The Path in Lay Life
    const s8 = m.section8;
    const s8Html = `
      <section class="magga-sec-card" id="magga-sec-8">
        <header class="magga-sec-header">
          <div class="magga-badges-row">
            <span class="magga-num-badge">${s8.number}</span>
            <span class="magga-provenance-badge">${s8.provenanceTag}</span>
          </div>
          <h3 class="magga-sec-title">${s8.title}</h3>
          <div class="magga-sec-pali">${s8.paliTitle}</div>
        </header>

        <p class="magga-prose">${s8.intro}</p>

        <div class="magga-lay-suttas-deck">
          ${s8.suttas.map(st => `
            <article class="magga-lay-sutta-card">
              <div class="magga-lay-sutta-header">
                <div>
                  <h4 class="magga-lay-sutta-title">${st.code} — ${st.title}</h4>
                  <div class="magga-lay-sutta-theme">${st.theme}</div>
                </div>
                <a href="${st.url}" target="_blank" rel="noopener noreferrer" class="magga-sutta-chip-sm">
                  <span>${lang === 'pt' ? 'Ler Texto' : 'Read Sutta'}</span>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              </div>
              <p class="magga-lay-sutta-content">${st.content}</p>
            </article>
          `).join('')}
        </div>
      </section>
    `;

    // Section 9: From Path Development to Cessation
    const s9 = m.section9;
    const s9Html = `
      <section class="magga-sec-card" id="magga-sec-9">
        <header class="magga-sec-header">
          <div class="magga-badges-row">
            <span class="magga-num-badge">${s9.number}</span>
            <span class="magga-provenance-badge">${s9.provenanceTag}</span>
          </div>
          <h3 class="magga-sec-title">${s9.title}</h3>
          <div class="magga-sec-pali">${s9.paliTitle}</div>
        </header>

        <div class="magga-sutta-chips-row">
          ${s9.sourceSuttas.map(s => `
            <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="magga-sutta-chip">
              <span>📖 ${s.code} — ${s.title}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          `).join('')}
        </div>

        <div class="magga-natural-causation-box">
          <h4 class="magga-subheading"><span>☸</span> ${s9.naturalCausation.title}</h4>
          <p class="magga-subtext">${s9.naturalCausation.text}</p>
          <div class="magga-causation-chain">
            ${s9.naturalCausation.chain.map((c, cIdx) => `
              <div class="magga-causation-node">
                <span class="magga-node-num">${cIdx + 1}</span>
                <span class="magga-node-text">${c}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="magga-nibbana-box">
          <h4 class="magga-subheading"><span>☸</span> ${s9.nibbanaDefinition.title}</h4>
          <div class="magga-quote-pali">${s9.nibbanaDefinition.pali}</div>
          <div class="magga-quote-trans">“${s9.nibbanaDefinition.translation}”</div>
          <p class="magga-prose">${s9.nibbanaDefinition.explanation}</p>
        </div>
      </section>
    `;

    // Section 10: Common Misunderstandings Corrected
    const s10 = m.section10;
    const s10Html = `
      <section class="magga-sec-card" id="magga-sec-10">
        <header class="magga-sec-header">
          <div class="magga-badges-row">
            <span class="magga-num-badge">${s10.number}</span>
            <span class="magga-provenance-badge">${s10.provenanceTag}</span>
          </div>
          <h3 class="magga-sec-title">${s10.title}</h3>
          <div class="magga-sec-pali">${s10.paliTitle}</div>
        </header>

        <p class="magga-prose">${s10.intro}</p>

        <div class="magga-misunderstandings-grid">
          ${s10.items.map(it => `
            <div class="magga-misunderstanding-card">
              <div class="magga-misconception-row">
                <span class="magga-misconception-icon">⚠</span>
                <div>
                  <div class="magga-misconception-label">${lang === 'pt' ? 'Equívoco Popular / Reducionismo Secular:' : 'Popular Misconception / Secular Reduction:'}</div>
                  <div class="magga-misconception-text">${it.misunderstanding}</div>
                </div>
              </div>
              <div class="magga-rebuttal-row">
                <span class="magga-rebuttal-icon">✓</span>
                <div>
                  <div class="magga-rebuttal-label">${lang === 'pt' ? 'Realidade Canônica Autêntica:' : 'Authentic Canonical Reality:'}</div>
                  <div class="magga-rebuttal-text">${it.rebuttal}</div>
                  <div class="magga-rebuttal-citation">📖 ${lang === 'pt' ? 'Fonte Canônica:' : 'Canonical Authority:'} ${it.citation}</div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;

    return `
      <div class="magga-module-wrap">
        <div class="magga-module-header">
          <span class="magga-header-badge">${m.header.badge}</span>
          <h3 class="magga-header-title">${m.header.translation}</h3>
          <div class="magga-header-pali">${m.header.paliFormula}</div>
          <p class="magga-header-lead">${m.header.leadText}</p>
        </div>

        ${navHtml}

        ${s1Html}
        ${s2Html}
        ${s3Html}
        ${s4Html}
        ${s5Html}
        ${s6Html}
        ${s7Html}
        ${s8Html}
        ${s9Html}
        ${s10Html}
      </div>
    `;
  }


  switchTab(targetTabId) {
    this.activeTabId = targetTabId;
    this.dom.tabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === targetTabId);
    });

    this.dom.tabContents.forEach(content => {
      content.classList.toggle('active', content.id === targetTabId);
    });
  }
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new LayDharmaApp();
});
