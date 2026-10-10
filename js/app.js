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

    // If Dependent Arising Module is available, render its full learning portal
    if (langContent.dependentArisingModule) {
      const pam = langContent.dependentArisingModule;
      if (this.dom.modalOverview) this.dom.modalOverview.textContent = '';
      if (this.dom.modalDoctrinalFramework) {
        this.dom.modalDoctrinalFramework.innerHTML = this.renderDependentArisingOverview(pam, this.currentLang);
        this.dom.modalDoctrinalFramework.style.display = 'block';
      }
      if (this.dom.modalExcerptsList) {
        this.dom.modalExcerptsList.innerHTML = this.renderDependentArisingCanonical(pam, this.currentLang);
      }
      if (this.dom.householdIntroText) {
        this.dom.householdIntroText.textContent = pam.dailyScenarios.intro;
      }
      if (this.dom.modalHouseholdList) {
        this.dom.modalHouseholdList.innerHTML = this.renderDependentArisingHousehold(pam, this.currentLang);
      }
      this.bindDependentArisingInteractions(pam, this.currentLang);
      return;
    }

    // If Buddhist Cosmology Module is available, render its full learning portal
    if (langContent.buddhistCosmologyModule) {
      const cm = langContent.buddhistCosmologyModule;
      if (this.dom.modalOverview) this.dom.modalOverview.textContent = '';
      if (this.dom.modalDoctrinalFramework) {
        this.dom.modalDoctrinalFramework.innerHTML = this.renderCosmologyOverview(cm, this.currentLang);
        this.dom.modalDoctrinalFramework.style.display = 'block';
      }
      if (this.dom.modalExcerptsList) {
        this.dom.modalExcerptsList.innerHTML = this.renderCosmologyCanonical(cm, this.currentLang);
      }
      if (this.dom.householdIntroText) {
        this.dom.householdIntroText.textContent = cm.layScenarios.intro;
      }
      if (this.dom.modalHouseholdList) {
        this.dom.modalHouseholdList.innerHTML = this.renderCosmologyHousehold(cm, this.currentLang);
      }
      this.bindCosmologyInteractions(cm, this.currentLang);
      return;
    }

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


  renderDependentArisingOverview(m, lang) {
    if (!m) return '';

    // Hero Section
    const hero = m.hero;
    const heroHtml = `
      <div class="pa-hero-wrap" id="pa-hero">
        <div class="pa-hero-badge"><span>☸</span> ${hero.paliTitle}</div>
        <h2 class="pa-hero-title">${hero.title}</h2>
        <div class="pa-hero-pali">${hero.paliTitle}</div>
        <div class="pa-hero-subtitle">${hero.subtitle}</div>
        <p class="pa-hero-intro">${hero.introText}</p>

        <div class="pa-canonical-box">
          <div class="pa-canonical-header">
            <span class="pa-canonical-badge">${hero.canonicalPassage.citation}</span>
            <a href="${hero.canonicalPassage.sourceUrl}" target="_blank" rel="noopener noreferrer" class="pa-canonical-link">
              <span>${lang === 'pt' ? 'Ler no SuttaCentral' : 'Read on SuttaCentral'}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </div>
          <div class="pa-canonical-pali">"${hero.canonicalPassage.excerptPali}"</div>
          <div class="pa-canonical-trans">"${hero.canonicalPassage.excerptTrans}"</div>
        </div>

        <div class="pa-hero-actions">
          ${hero.primaryActions.map(act => `
            <a href="${act.target}" class="pa-action-btn" data-target="${act.target}">
              <span>${act.icon}</span> <span>${act.label}</span>
            </a>
          `).join('')}
        </div>
      </div>
    `;

    // Section B: What is Dependent Arising?
    const w = m.whatIs;
    const l1 = w.level1;
    const l2 = w.level2;
    const l3 = w.level3;
    const comp = w.comparisonPanel;

    const whatIsHtml = `
      <section class="pa-section-block" id="pa-what-is">
        <div class="pa-section-title-wrap">
          <h3 class="pa-section-title"><span>☸</span> ${w.sectionTitle}</h3>
          <div class="pa-section-subtitle">${w.sectionSubtitle}</div>
        </div>

        <div class="pa-levels-grid">
          <!-- Level 1 -->
          <article class="pa-level-card">
            <span class="pa-level-badge">${l1.badge}</span>
            <h4 class="pa-level-title">${l1.title}</h4>
            <div class="pa-formula-box">
              <div class="pa-formula-pali">"${l1.paliFormula}"</div>
              <div class="pa-formula-trans">"${l1.translationFormula}"</div>
            </div>
            <p class="pa-level-detail">${l1.detail}</p>
          </article>

          <!-- Level 2 -->
          <article class="pa-level-card">
            <span class="pa-level-badge">${l2.badge}</span>
            <h4 class="pa-level-title">${l2.title}</h4>
            <p class="pa-level-detail" style="margin-bottom: 12px;">${l2.intro}</p>
            <div class="pa-sequence-pills">
              ${l2.linksSequence.map(link => `
                <div class="pa-seq-pill">
                  <span class="pa-seq-num">${link.num}</span>
                  <span class="pa-seq-pali">${link.pali}</span>
                  <span class="pa-seq-trans">${link.trans}</span>
                </div>
              `).join('')}
            </div>
            <div class="pa-formula-box" style="margin-top: 14px;">
              <div class="pa-formula-trans" style="font-style: italic; color: var(--gold-light);">
                "${l2.canonicalCulmination}"
              </div>
            </div>
            <div class="pa-caveat-box">${l2.caveat}</div>
          </article>

          <!-- Level 3 -->
          <article class="pa-level-card">
            <span class="pa-level-badge">${l3.badge}</span>
            <h4 class="pa-level-title">${l3.title}</h4>
            <div class="pa-formula-box">
              <div class="pa-formula-pali">"${l3.paliFormula}"</div>
              <div class="pa-formula-trans">"${l3.translationFormula}"</div>
            </div>
            <p class="pa-level-detail">${l3.detail}</p>
          </article>
        </div>

        <!-- Comparison Panel -->
        <div class="pa-comparison-panel">
          <div class="pa-comp-header">
            <h4 class="pa-comp-title"><span>☸</span> ${comp.title}</h4>
            <div style="font-size: 0.88rem; color: var(--text-muted); margin-top: 4px;">${comp.subtitle}</div>
          </div>
          <div class="pa-comp-grid">
            <div class="pa-comp-card pa-comp-arising">
              <div class="pa-comp-badge">▼ ${comp.arisingBox.title}</div>
              <p class="pa-comp-desc">${comp.arisingBox.desc}</p>
            </div>
            <div class="pa-comp-card pa-comp-cessation">
              <div class="pa-comp-badge">▲ ${comp.cessationBox.title}</div>
              <p class="pa-comp-desc">${comp.cessationBox.desc}</p>
            </div>
            <div class="pa-comp-card pa-comp-practice">
              <div class="pa-comp-badge">☸ ${comp.practiceBox.title}</div>
              <p class="pa-comp-desc">${comp.practiceBox.desc}</p>
            </div>
          </div>
        </div>
      </section>
    `;

    // Section C: The Twelve Links Explorer
    const tle = m.twelveLinksExplorer;
    const linksExplorerHtml = `
      <section class="pa-section-block" id="pa-twelve-links">
        <div class="pa-section-title-wrap">
          <h3 class="pa-section-title"><span>☸</span> ${tle.sectionTitle}</h3>
          <div class="pa-section-subtitle">${tle.sectionSubtitle}</div>
        </div>

        <div class="pa-explorer-toolbar">
          <div class="pa-mode-control" role="group" aria-label="Explorer Mode">
            <button class="pa-mode-btn active" id="paModeCanonical" data-mode="canonical">
              📜 ${tle.canonicalModeLabel}
            </button>
            <button class="pa-mode-btn" id="paModeEveryday" data-mode="everyday">
              🏡 ${tle.everydayModeLabel}
            </button>
          </div>
          <div class="pa-mode-notice">${tle.modeNotice}</div>
        </div>

        <div class="pa-links-list" id="paLinksList">
          ${tle.links.map(link => `
            <article class="pa-link-item" id="pa-link-${link.num}">
              <header class="pa-link-top">
                <div class="pa-link-title-group">
                  <span class="pa-link-num-tag">${String(link.num).padStart(2, '0')}</span>
                  <h4 class="pa-link-pali-name">${link.pali}</h4>
                  <span class="pa-link-trans-name">— ${link.trans}</span>
                </div>
                <span class="pa-link-ref-badge">${link.canonicalRef}</span>
              </header>

              <div class="pa-link-relations-bar">
                <span class="pa-rel-tag"><strong>← Preceding:</strong> ${link.preceding}</span>
                <span class="pa-rel-tag"><strong>→ Following:</strong> ${link.following}</span>
              </div>

              <div class="pa-link-body-text pa-canonical-mode-content">
                ${link.canonicalDef}
              </div>

              <div class="pa-link-body-text pa-everyday-mode-content" style="display: none; color: #f5f0e6; background: rgba(224, 169, 68, 0.05); padding: 12px; border-radius: 6px; border-left: 3px solid var(--gold-primary);">
                <strong>${lang === 'pt' ? 'Aplicação Prática no Cotidiano:' : 'Everyday Lay Illustration:'}</strong> ${link.everydayIllustration}
              </div>

              <div class="pa-link-reflection-card">
                <span>☸</span>
                <div><strong>Yoniso Manasikāra:</strong> ${link.reflectionQuestion}</div>
              </div>

              <div>
                <button class="pa-toggle-note-btn" data-target="pa-note-${link.num}">
                  <span>▼</span> <span>${lang === 'pt' ? 'Nota Doutrinária Detalhada' : 'Full Doctrinal Study Note'}</span>
                </button>
                <div class="pa-study-note-drawer" id="pa-note-${link.num}">
                  ${link.studyNote}
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </section>
    `;

    // Section J: FAQs
    const faqs = m.faqs;
    const faqsHtml = `
      <section class="pa-section-block" id="pa-faqs">
        <div class="pa-section-title-wrap">
          <h3 class="pa-section-title"><span>☸</span> ${faqs.sectionTitle}</h3>
          <div class="pa-section-subtitle">${faqs.sectionSubtitle}</div>
        </div>

        <div class="pa-faq-list">
          ${faqs.items.map((item, idx) => `
            <div class="pa-faq-item" id="pa-faq-${idx}">
              <button class="pa-faq-q-btn" data-faq-index="${idx}">
                <span>${idx + 1}. ${item.q}</span>
                <span class="pa-faq-icon">▾</span>
              </button>
              <div class="pa-faq-a-body">
                ${item.a}
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;

    return heroHtml + whatIsHtml + linksExplorerHtml + faqsHtml;
  }

  renderDependentArisingCanonical(m, lang) {
    if (!m) return '';
    const lib = m.suttaLibrary;

    const toolbarHtml = `
      <div class="pa-library-controls">
        <div class="pa-section-title-wrap">
          <h3 class="pa-section-title"><span>☸</span> ${lib.sectionTitle}</h3>
          <div class="pa-section-subtitle">${lib.sectionSubtitle}</div>
        </div>

        <div class="pa-search-wrap">
          <svg class="pa-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input type="search" class="pa-search-input" id="paSuttaSearch" placeholder="${lib.searchPlaceholder}" aria-label="Search Suttas">
        </div>

        <div class="pa-filter-pills" id="paFilterPills">
          ${lib.filterCategories.map(cat => `
            <button class="pa-filter-pill ${cat.id === 'all' ? 'active' : ''}" data-cat="${cat.id}">
              ${cat.label}
            </button>
          `).join('')}
        </div>
      </div>
    `;

    // Sutta Cards
    const suttasHtml = `
      <div class="pa-suttas-grid" id="paSuttasGrid">
        ${lib.suttas.map((s, idx) => `
          <article class="pa-sutta-card" id="pa-sutta-${idx}" data-code="${s.code}" data-cat="${s.category}" data-search="${(s.code + ' ' + s.paliTitle + ' ' + s.transTitle + ' ' + s.keyConcepts.join(' ')).toLowerCase()}">
            <header class="pa-sutta-top">
              <div class="pa-sutta-badges">
                <span class="pa-sutta-code-tag">${s.code}</span>
                <span class="pa-sutta-cat-tag">${s.category}</span>
                <span class="pa-sutta-time-tag">⏱ ${s.readingTime}</span>
              </div>
              <label class="pa-read-toggle-wrap" data-code="${s.code}">
                <input type="checkbox" class="pa-sutta-read-check" data-code="${s.code}">
                <span class="pa-read-label">${lang === 'pt' ? 'Marcar como Lido' : 'Mark as Read'}</span>
              </label>
            </header>

            <div class="pa-sutta-titles">
              <h3 class="pa-sutta-pali-title">${s.paliTitle}</h3>
              <div class="pa-sutta-trans-title">“${s.transTitle}”</div>
              <div class="pa-sutta-nikaya">${s.nikaya}</div>
            </div>

            <p class="pa-sutta-importance">${s.importance}</p>

            <div class="pa-lay-relevance-card">
              <strong>${lang === 'pt' ? 'Relevância para a Vida Leiga:' : 'Lay Relevance:'}</strong> ${s.layRelevance}
            </div>

            <div class="pa-concepts-row">
              ${s.keyConcepts.map(c => `<span class="pa-concept-chip">#${c}</span>`).join('')}
            </div>

            <div class="pa-link-reflection-card" style="margin-bottom: 14px;">
              <span>☸</span>
              <div><strong>${lang === 'pt' ? 'Reflexão:' : 'Reflection:'}</strong> ${s.reflectionQuestion}</div>
            </div>

            <div style="margin-bottom: 14px;">
              <button class="pa-toggle-note-btn" data-target="pa-sutta-note-${idx}">
                <span>▼</span> <span>${lang === 'pt' ? 'Notas de Estudo' : 'Study Notes'}</span>
              </button>
              <div class="pa-study-note-drawer" id="pa-sutta-note-${idx}">
                ${s.studyNotes}
              </div>
            </div>

            <footer class="pa-sutta-action-row">
              <a href="${s.suttaCentralUrl}" target="_blank" rel="noopener noreferrer" class="suttacentral-btn">
                <span>${lang === 'pt' ? 'Ler no SuttaCentral' : 'Read on SuttaCentral'} (${s.code})</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </footer>
          </article>
        `).join('')}
      </div>
    `;

    return toolbarHtml + suttasHtml;
  }

  renderDependentArisingHousehold(m, lang) {
    if (!m) return '';

    // Section E: Daily Scenarios
    const ds = m.dailyScenarios;
    const scenariosHtml = `
      <section class="pa-section-block" id="pa-scenarios">
        <div class="pa-section-title-wrap">
          <h3 class="pa-section-title"><span>☸</span> ${ds.sectionTitle}</h3>
          <div class="pa-section-subtitle">${ds.sectionSubtitle}</div>
        </div>

        <div class="pa-scenarios-list">
          ${ds.scenarios.map(sc => `
            <article class="pa-scenario-card" id="${sc.id}">
              <header class="pa-scenario-header">
                <span class="pa-sc-num">${sc.number}</span>
                <h4 class="pa-sc-title">${sc.title}</h4>
              </header>

              <div class="pa-sc-grid">
                <div class="pa-sc-item">
                  <div class="pa-sc-label">${lang === 'pt' ? 'Situação' : 'Situation'}</div>
                  <div class="pa-sc-text">${sc.situation}</div>
                </div>

                <div class="pa-sc-item">
                  <div class="pa-sc-label">${lang === 'pt' ? 'Experiência Direta (Phassa & Vedanā)' : 'Directly Experienced (Phassa & Vedanā)'}</div>
                  <div class="pa-sc-text">${sc.directlyExperienced}</div>
                </div>

                <div class="pa-sc-item">
                  <div class="pa-sc-label">${lang === 'pt' ? 'Condições Presentes' : 'Conditions Present'}</div>
                  <div class="pa-sc-text">${sc.conditionsPresent}</div>
                </div>

                <div class="pa-sc-item">
                  <div class="pa-sc-label">${lang === 'pt' ? 'Ponto de Desejo & Apego (Taṇhā & Upādāna)' : 'Where Craving & Clinging Develop (Taṇhā & Upādāna)'}</div>
                  <div class="pa-sc-text"><strong>${lang === 'pt' ? 'Desejo:' : 'Craving:'}</strong> ${sc.cravingPoint}</div>
                  <div class="pa-sc-text" style="margin-top: 4px;"><strong>${lang === 'pt' ? 'Apego:' : 'Clinging:'}</strong> ${sc.clingingPoint}</div>
                </div>

                <div class="pa-sc-item dhamma-response">
                  <div class="pa-sc-label">✓ ${lang === 'pt' ? 'Resposta Prática do Dhamma' : 'Practical Dhamma Response'}</div>
                  <div class="pa-sc-text">${sc.dhammaResponse}</div>
                </div>

                <div class="pa-sc-item">
                  <div class="pa-sc-label">☸ ${lang === 'pt' ? 'Pergunta Reflexiva' : 'Contemplative Question'}</div>
                  <div class="pa-sc-text" style="color: var(--gold-light); font-style: italic;">"${sc.reflectionQuestion}"</div>
                  <div class="pa-sc-suttas">
                    ${sc.suttas.map(st => `<span class="pa-concept-chip">📖 ${st}</span>`).join('')}
                  </div>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </section>
    `;

    // Section F: Practical Exercise (Observe the Links)
    const ge = m.guidedExercise;
    const exerciseHtml = `
      <section class="pa-section-block" id="pa-exercise">
        <div class="pa-exercise-wrap">
          <div class="pa-section-title-wrap">
            <h3 class="pa-section-title"><span>☸</span> ${ge.title}</h3>
            <div class="pa-section-subtitle">${ge.subtitle}</div>
          </div>
          <div style="display: flex; gap: 12px; margin-bottom: 20px; flex-wrap: wrap;">
            <span class="pa-canonical-badge">${ge.privacyNotice}</span>
          </div>
          <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 20px; line-height: 1.5;">${ge.disclaimer}</p>

          <div class="pa-exercise-progress-bar" id="paExerciseProgressBar">
            ${ge.steps.map((_, i) => `<div class="pa-progress-step ${i === 0 ? 'active' : ''}" data-step="${i + 1}"></div>`).join('')}
          </div>

          <div class="pa-step-card" id="paStepCard">
            <!-- Dynamic step injected by JS -->
          </div>

          <div class="pa-step-nav-row">
            <button class="pa-nav-btn" id="paStepPrevBtn" disabled>${lang === 'pt' ? '← Passo Anterior' : '← Previous Step'}</button>
            <span id="paStepIndicator" style="font-size: 0.85rem; color: var(--text-muted);">Step 1 of 7</span>
            <button class="pa-nav-btn" id="paStepNextBtn">${lang === 'pt' ? 'Próximo Passo →' : 'Next Step →'}</button>
          </div>

          <div id="paExerciseSummaryWrap" style="display: none;"></div>
        </div>
      </section>
    `;

    // Section G: The Path of Practice
    const pop = m.pathOfPractice;
    const pathHtml = `
      <section class="pa-section-block" id="pa-path">
        <div class="pa-section-title-wrap">
          <h3 class="pa-section-title"><span>☸</span> ${pop.sectionTitle}</h3>
          <div class="pa-section-subtitle">${pop.sectionSubtitle}</div>
        </div>
        <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 22px;">${pop.intro}</p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin-bottom: 30px;">
          ${pop.factors.map(fac => `
            <div class="pa-level-card" style="padding: 16px;">
              <span class="pa-level-badge">${fac.factor}</span>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; margin-top: 6px;">${fac.relation}</p>
            </div>
          `).join('')}
        </div>

        <h4 class="pa-comp-title" style="margin-bottom: 14px;"><span>☸</span> ${lang === 'pt' ? 'Rotina Cotidiana do Praticante Leigo' : 'Daily Lay Routine'}</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 14px; margin-bottom: 36px;">
          ${pop.dailyPractices.map(dp => `
            <div class="pa-comp-card pa-comp-practice">
              <div class="pa-comp-badge">⏱ ${dp.timing}</div>
              <strong style="color: var(--text-primary); font-size: 0.92rem; display: block; margin-bottom: 6px;">${dp.title}</strong>
              <p class="pa-comp-desc">${dp.practice}</p>
            </div>
          `).join('')}
        </div>
      </section>
    `;

    // Section H: Study Pathways
    const sp = m.studyPathways;
    const pathwaysHtml = `
      <section class="pa-section-block" id="pa-pathways">
        <div class="pa-section-title-wrap">
          <h3 class="pa-section-title"><span>☸</span> ${sp.sectionTitle}</h3>
          <div class="pa-section-subtitle">${sp.sectionSubtitle}</div>
        </div>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 16px;">${sp.disclaimer}</p>

        <div class="pa-track-tabs" id="paTrackTabs">
          ${sp.tracks.map((track, i) => `
            <button class="pa-track-tab ${i === 0 ? 'active' : ''}" data-track-id="${track.id}">
              ${track.name}
            </button>
          `).join('')}
        </div>

        <div id="paActiveTrackContent">
          <!-- Dynamic track days injected by JS -->
        </div>
      </section>
    `;

    // Section I: Reflection Journal
    const rj = m.reflectionJournal;
    const journalHtml = `
      <section class="pa-section-block" id="pa-journal">
        <div class="pa-journal-wrap">
          <div class="pa-section-title-wrap">
            <h3 class="pa-section-title"><span>☸</span> ${rj.sectionTitle}</h3>
            <div class="pa-section-subtitle">${rj.sectionSubtitle}</div>
          </div>

          <form id="paJournalForm" class="pa-journal-form">
            ${rj.prompts.map(p => `
              <div>
                <label class="pa-journal-prompt-label" for="pa-journal-${p.id}">${p.label}</label>
                <textarea class="pa-step-textarea" id="pa-journal-${p.id}" style="min-height: 60px;" placeholder="${p.placeholder}"></textarea>
              </div>
            `).join('')}
            <div style="display: flex; gap: 12px; margin-top: 10px;">
              <button type="submit" class="pa-finish-btn">${rj.saveButtonText}</button>
            </div>
          </form>

          <div style="border-top: 1px solid var(--border-subtle); padding-top: 24px; margin-top: 24px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 10px;">
              <h4 class="pa-comp-title"><span>☸</span> ${rj.entriesHeading}</h4>
              <div style="display: flex; gap: 8px;">
                <button class="pa-action-btn" id="paExportJournalBtn" style="padding: 6px 12px; font-size: 0.78rem;">${rj.exportButtonText}</button>
                <button class="pa-action-btn" id="paClearJournalBtn" style="padding: 6px 12px; font-size: 0.78rem; border-color: rgba(201, 84, 56, 0.4); color: #e5b3a3;">${rj.clearAllButtonText}</button>
              </div>
            </div>
            <div class="pa-journal-entries-list" id="paJournalEntriesList"></div>
          </div>
        </div>
      </section>
    `;

    return scenariosHtml + exerciseHtml + pathHtml + pathwaysHtml + journalHtml;
  }

  bindDependentArisingInteractions(m, lang) {
    // 1. Jump Action Buttons inside Hero
    const actionBtns = document.querySelectorAll('.pa-action-btn[data-target]');
    actionBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = btn.dataset.target;
        if (target === '#tab-household') {
          e.preventDefault();
          this.switchTab('tab-household');
          const scEl = document.getElementById('pa-scenarios');
          if (scEl) scEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (target && target.startsWith('#')) {
          e.preventDefault();
          const el = document.querySelector(target);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // 2. Mode Switcher (Canonical vs Everyday)
    const btnCanon = document.getElementById('paModeCanonical');
    const btnEveryday = document.getElementById('paModeEveryday');
    const canonContents = document.querySelectorAll('.pa-canonical-mode-content');
    const everydayContents = document.querySelectorAll('.pa-everyday-mode-content');

    const setExplorerMode = (mode) => {
      if (btnCanon) btnCanon.classList.toggle('active', mode === 'canonical');
      if (btnEveryday) btnEveryday.classList.toggle('active', mode === 'everyday');
      canonContents.forEach(el => el.style.display = (mode === 'canonical' ? 'block' : 'none'));
      everydayContents.forEach(el => el.style.display = (mode === 'everyday' ? 'block' : 'none'));
    };

    if (btnCanon) btnCanon.addEventListener('click', () => setExplorerMode('canonical'));
    if (btnEveryday) btnEveryday.addEventListener('click', () => setExplorerMode('everyday'));

    // 3. Collapsible Drawers (Study Notes)
    document.querySelectorAll('.pa-toggle-note-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.dataset.target;
        const drawer = document.getElementById(targetId);
        if (drawer) {
          drawer.classList.toggle('open');
          const isOpen = drawer.classList.contains('open');
          const arrow = btn.querySelector('span:first-child');
          if (arrow) arrow.textContent = isOpen ? '▲' : '▼';
        }
      });
    });

    // 4. FAQ Accordion
    document.querySelectorAll('.pa-faq-q-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.pa-faq-item');
        if (item) {
          const wasOpen = item.classList.contains('open');
          document.querySelectorAll('.pa-faq-item').forEach(i => i.classList.remove('open'));
          if (!wasOpen) item.classList.add('open');
        }
      });
    });

    // 5. Sutta Library Search & Category Filter
    const searchInput = document.getElementById('paSuttaSearch');
    const filterPills = document.querySelectorAll('.pa-filter-pill');
    const suttaCards = document.querySelectorAll('.pa-sutta-card');

    let currentCat = 'all';
    let currentSearch = '';

    const filterSuttas = () => {
      suttaCards.forEach(card => {
        const cardCat = card.dataset.cat || '';
        const searchBlob = card.dataset.search || '';
        const matchesCat = (currentCat === 'all' || cardCat === currentCat);
        const matchesSearch = (!currentSearch || searchBlob.includes(currentSearch));
        card.style.display = (matchesCat && matchesSearch) ? 'block' : 'none';
      });
    };

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.trim().toLowerCase();
        filterSuttas();
      });
    }

    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentCat = pill.dataset.cat || 'all';
        filterSuttas();
      });
    });

    // 6. Sutta "Mark as Read" Checkboxes (Local Storage)
    const readStorageKey = 'lay_dharma_pa_read';
    let readSuttas = [];
    try {
      readSuttas = JSON.parse(localStorage.getItem(readStorageKey) || '[]');
    } catch (e) {
      readSuttas = [];
    }

    document.querySelectorAll('.pa-sutta-read-check').forEach(chk => {
      const code = chk.dataset.code;
      if (readSuttas.includes(code)) {
        chk.checked = true;
        const wrap = chk.closest('.pa-read-toggle-wrap');
        if (wrap) wrap.classList.add('completed');
      }
      chk.addEventListener('change', () => {
        if (chk.checked) {
          if (!readSuttas.includes(code)) readSuttas.push(code);
        } else {
          readSuttas = readSuttas.filter(c => c !== code);
        }
        localStorage.setItem(readStorageKey, JSON.stringify(readSuttas));
        const wrap = chk.closest('.pa-read-toggle-wrap');
        if (wrap) wrap.classList.toggle('completed', chk.checked);
      });
    });

    // 7. Guided Exercise (Observe the Links - 7 Steps)
    const ge = m.guidedExercise;
    if (ge && ge.steps) {
      let currentStepIdx = 0;
      const userAnswers = {};

      const stepCard = document.getElementById('paStepCard');
      const prevBtn = document.getElementById('paStepPrevBtn');
      const nextBtn = document.getElementById('paStepNextBtn');
      const indicator = document.getElementById('paStepIndicator');
      const progressSteps = document.querySelectorAll('.pa-progress-step');
      const summaryWrap = document.getElementById('paExerciseSummaryWrap');

      const renderStep = (idx) => {
        if (!stepCard) return;
        const s = ge.steps[idx];
        const stepNum = idx + 1;
        const currentAns = userAnswers[stepNum] || {};

        let optionsHtml = '';
        if (s.options && s.options.length > 0) {
          optionsHtml = `
            <div class="pa-step-options">
              ${s.options.map((opt, oIdx) => `
                <button type="button" class="pa-option-btn ${currentAns.selectedOpt === opt ? 'selected' : ''}" data-opt-idx="${oIdx}">
                  ${opt}
                </button>
              `).join('')}
            </div>
          `;
        }

        stepCard.innerHTML = `
          <h4 class="pa-step-title">${s.title}</h4>
          <p class="pa-step-prompt">${s.prompt}</p>
          ${optionsHtml}
          <textarea class="pa-step-textarea" id="paStepTextInput" placeholder="${s.placeholder}">${currentAns.text || ''}</textarea>
        `;

        if (prevBtn) prevBtn.disabled = (idx === 0);
        if (nextBtn) {
          nextBtn.textContent = (idx === ge.steps.length - 1) ? ge.finishButton : (lang === 'pt' ? 'Próximo Passo →' : 'Next Step →');
        }
        if (indicator) indicator.textContent = `${lang === 'pt' ? 'Passo' : 'Step'} ${stepNum} ${lang === 'pt' ? 'de' : 'of'} ${ge.steps.length}`;

        progressSteps.forEach((ps, pIdx) => {
          ps.classList.toggle('active', pIdx === idx);
          ps.classList.toggle('done', pIdx < idx);
        });

        stepCard.querySelectorAll('.pa-option-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            stepCard.querySelectorAll('.pa-option-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            if (!userAnswers[stepNum]) userAnswers[stepNum] = {};
            userAnswers[stepNum].selectedOpt = btn.textContent.trim();
          });
        });

        const ta = document.getElementById('paStepTextInput');
        if (ta) {
          ta.addEventListener('input', (e) => {
            if (!userAnswers[stepNum]) userAnswers[stepNum] = {};
            userAnswers[stepNum].text = e.target.value;
          });
        }
      };

      const showSummary = () => {
        if (!summaryWrap) return;
        const summaryRows = ge.steps.map((st, i) => {
          const ans = userAnswers[i + 1] || {};
          const ansText = [ans.selectedOpt, ans.text].filter(Boolean).join(' — ') || (lang === 'pt' ? '(Nenhuma nota informada)' : '(No note entered)');
          return `
            <div class="pa-summary-item">
              <strong>${st.title}:</strong>
              <div>${ansText}</div>
            </div>
          `;
        }).join('');

        summaryWrap.innerHTML = `
          <div class="pa-summary-card">
            <h4 class="pa-summary-title">☸ ${lang === 'pt' ? 'Síntese Contemplativa da Investigação' : 'Contemplative Investigation Summary'}</h4>
            ${summaryRows}
            <div style="display: flex; gap: 10px; margin-top: 18px; flex-wrap: wrap;">
              <button class="pa-finish-btn" id="paSaveToJournalFromSummary">
                ${lang === 'pt' ? 'Salvar no Diário de Reflexão' : 'Save into Reflection Journal'}
              </button>
              <button class="pa-nav-btn" id="paResetExerciseBtn">
                ${ge.resetButton}
              </button>
            </div>
          </div>
        `;
        summaryWrap.style.display = 'block';
        summaryWrap.scrollIntoView({ behavior: 'smooth', block: 'start' });

        const saveBtn = document.getElementById('paSaveToJournalFromSummary');
        if (saveBtn) {
          saveBtn.addEventListener('click', () => {
            const jWhat = document.getElementById('pa-journal-q1');
            const jVedana = document.getElementById('pa-journal-q2');
            const jTanha = document.getElementById('pa-journal-q3');
            const jUpadana = document.getElementById('pa-journal-q4');
            const jLesson = document.getElementById('pa-journal-q5');
            const jSutta = document.getElementById('pa-journal-q6');

            if (jWhat && userAnswers[1]) jWhat.value = userAnswers[1].text || '';
            if (jVedana && userAnswers[3]) jVedana.value = [userAnswers[3].selectedOpt, userAnswers[3].text].filter(Boolean).join(' ');
            if (jTanha && userAnswers[4]) jTanha.value = [userAnswers[4].selectedOpt, userAnswers[4].text].filter(Boolean).join(' ');
            if (jUpadana && userAnswers[5]) jUpadana.value = userAnswers[5].text || '';
            if (jLesson && userAnswers[7]) jLesson.value = userAnswers[7].text || '';
            if (jSutta) jSutta.value = 'SN 36.6 • SN 12.20';

            const jForm = document.getElementById('paJournalForm');
            if (jForm) jForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });
        }

        const rstBtn = document.getElementById('paResetExerciseBtn');
        if (rstBtn) {
          rstBtn.addEventListener('click', () => {
            currentStepIdx = 0;
            summaryWrap.style.display = 'none';
            renderStep(0);
          });
        }
      };

      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          if (currentStepIdx > 0) {
            currentStepIdx--;
            renderStep(currentStepIdx);
          }
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          if (currentStepIdx < ge.steps.length - 1) {
            currentStepIdx++;
            renderStep(currentStepIdx);
          } else {
            showSummary();
          }
        });
      }

      renderStep(0);
    }

    // 8. Study Pathways (Tracks and Checkboxes)
    const sp = m.studyPathways;
    if (sp && sp.tracks) {
      const pathwayStorageKey = 'lay_dharma_pa_pathway';
      let pathwayState = {};
      try {
        pathwayState = JSON.parse(localStorage.getItem(pathwayStorageKey) || '{}');
      } catch (e) {
        pathwayState = {};
      }

      const activeContentWrap = document.getElementById('paActiveTrackContent');
      const trackTabs = document.querySelectorAll('.pa-track-tab');

      const renderTrack = (trackId) => {
        const track = sp.tracks.find(t => t.id === trackId) || sp.tracks[0];
        if (!activeContentWrap || !track) return;

        const checkedDays = pathwayState[track.id] || [];
        const percent = Math.round((checkedDays.length / track.days.length) * 100);

        activeContentWrap.innerHTML = `
          <div style="margin-bottom: 14px;">
            <div style="display: flex; justify-content: space-between; font-size: 0.85rem; color: var(--gold-light); margin-bottom: 6px;">
              <span><strong>${track.duration}:</strong> ${track.description}</span>
              <span><strong>${percent}%</strong> ${lang === 'pt' ? 'Concluído' : 'Completed'}</span>
            </div>
            <div class="pa-track-progress-bar">
              <div class="pa-track-fill" style="width: ${percent}%;"></div>
            </div>
          </div>

          <div class="pa-days-list">
            ${track.days.map(d => {
              const isChecked = checkedDays.includes(d.day);
              return `
                <label class="pa-day-row">
                  <input type="checkbox" class="pa-day-check" data-track="${track.id}" data-day="${d.day}" ${isChecked ? 'checked' : ''}>
                  <span class="pa-day-num">${lang === 'pt' ? 'Dia' : 'Day'} ${String(d.day).padStart(2, '0')}</span>
                  <span class="pa-day-sutta">${d.sutta}</span>
                  <span class="pa-day-task">${d.task}</span>
                </label>
              `;
            }).join('')}
          </div>
        `;

        activeContentWrap.querySelectorAll('.pa-day-check').forEach(chk => {
          chk.addEventListener('change', () => {
            const trkId = chk.dataset.track;
            const dayNum = parseInt(chk.dataset.day, 10);
            if (!pathwayState[trkId]) pathwayState[trkId] = [];

            if (chk.checked) {
              if (!pathwayState[trkId].includes(dayNum)) pathwayState[trkId].push(dayNum);
            } else {
              pathwayState[trkId] = pathwayState[trkId].filter(d => d !== dayNum);
            }
            localStorage.setItem(pathwayStorageKey, JSON.stringify(pathwayState));
            renderTrack(trkId);
          });
        });
      };

      trackTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          trackTabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          renderTrack(tab.dataset.trackId);
        });
      });

      renderTrack(sp.tracks[0].id);
    }

    // 9. Reflection Journal Form and Persistence
    const journalStorageKey = 'lay_dharma_pa_journal';
    let journalEntries = [];
    try {
      journalEntries = JSON.parse(localStorage.getItem(journalStorageKey) || '[]');
    } catch (e) {
      journalEntries = [];
    }

    const journalList = document.getElementById('paJournalEntriesList');
    const journalForm = document.getElementById('paJournalForm');
    const exportBtn = document.getElementById('paExportJournalBtn');
    const clearBtn = document.getElementById('paClearJournalBtn');

    const renderJournalList = () => {
      if (!journalList) return;
      if (journalEntries.length === 0) {
        journalList.innerHTML = `<p style="font-size: 0.88rem; color: var(--text-muted); font-style: italic;">${m.reflectionJournal.noEntriesNotice}</p>`;
        return;
      }

      journalList.innerHTML = journalEntries.map((entry, idx) => `
        <article class="pa-journal-entry-card" id="pa-entry-${idx}">
          <header class="pa-entry-header">
            <span>📅 ${new Date(entry.timestamp).toLocaleString()}</span>
            <button class="pa-entry-delete-btn" data-entry-idx="${idx}">🗑 ${lang === 'pt' ? 'Excluir' : 'Delete'}</button>
          </header>
          <div style="font-size: 0.9rem; line-height: 1.6; color: var(--text-secondary);">
            <div style="margin-bottom: 4px;"><strong>1. Event:</strong> ${entry.q1 || '-'}</div>
            <div style="margin-bottom: 4px;"><strong>2. Feeling (Vedanā):</strong> ${entry.q2 || '-'}</div>
            <div style="margin-bottom: 4px;"><strong>3. Craving/Aversion (Taṇhā):</strong> ${entry.q3 || '-'}</div>
            <div style="margin-bottom: 4px;"><strong>4. Clinging (Upādāna):</strong> ${entry.q4 || '-'}</div>
            <div style="margin-bottom: 4px;"><strong>5. Conditionality Lesson:</strong> ${entry.q5 || '-'}</div>
            <div><strong>6. Sutta Reference:</strong> ${entry.q6 || '-'}</div>
          </div>
        </article>
      `).join('');

      journalList.querySelectorAll('.pa-entry-delete-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.dataset.entryIdx, 10);
          journalEntries.splice(idx, 1);
          localStorage.setItem(journalStorageKey, JSON.stringify(journalEntries));
          renderJournalList();
        });
      });
    };

    if (journalForm) {
      journalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const entry = {
          timestamp: new Date().toISOString(),
          q1: document.getElementById('pa-journal-q1')?.value.trim() || '',
          q2: document.getElementById('pa-journal-q2')?.value.trim() || '',
          q3: document.getElementById('pa-journal-q3')?.value.trim() || '',
          q4: document.getElementById('pa-journal-q4')?.value.trim() || '',
          q5: document.getElementById('pa-journal-q5')?.value.trim() || '',
          q6: document.getElementById('pa-journal-q6')?.value.trim() || ''
        };

        if (!entry.q1 && !entry.q2 && !entry.q3) {
          alert(lang === 'pt' ? 'Por favor, preencha pelo menos um campo para salvar a reflexão.' : 'Please enter at least one field to save your reflection.');
          return;
        }

        journalEntries.unshift(entry);
        localStorage.setItem(journalStorageKey, JSON.stringify(journalEntries));
        journalForm.reset();
        renderJournalList();
      });
    }

    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(journalEntries, null, 2));
        const dlAnchor = document.createElement('a');
        dlAnchor.setAttribute('href', dataStr);
        dlAnchor.setAttribute('download', 'dependent_arising_journal.json');
        dlAnchor.click();
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (confirm(lang === 'pt' ? 'Tem certeza de que deseja limpar todo o histórico de reflexões?' : 'Are you sure you want to clear all saved reflections?')) {
          journalEntries = [];
          localStorage.removeItem(journalStorageKey);
          renderJournalList();
        }
      });
    }

    renderJournalList();
  }

  // =========================================================================
  // BUDDHIST COSMOLOGY (LOKADHĀTU & THE 31 PLANES) METHODS
  // =========================================================================

  renderCosmologyOverview(m, lang) {
    if (!m) return '';

    // Hero Section
    const hero = m.hero;
    const heroHtml = `
      <div class="cosmo-hero-wrap" id="cosmo-hero">
        <div class="cosmo-hero-badge"><span>☸</span> ${hero.paliTitle}</div>
        <h2 class="cosmo-hero-title">${hero.title}</h2>
        <div class="cosmo-hero-pali">${hero.paliTitle}</div>
        <div class="cosmo-hero-subtitle">${hero.subtitle}</div>
        <p class="cosmo-hero-intro">${hero.introText}</p>

        <div class="cosmo-canonical-box">
          <div class="cosmo-canonical-header">
            <span class="cosmo-canonical-badge">${hero.canonicalPassage.citation}</span>
            <a href="${hero.canonicalPassage.sourceUrl}" target="_blank" rel="noopener noreferrer" class="cosmo-canonical-link">
              <span>${lang === 'pt' ? 'Ler no SuttaCentral' : 'Read on SuttaCentral'}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </div>
          <div class="cosmo-canonical-pali">"${hero.canonicalPassage.excerptPali}"</div>
          <div class="cosmo-canonical-trans">"${hero.canonicalPassage.excerptTrans}"</div>
        </div>

        <div class="cosmo-system-notice">
          <div class="cosmo-notice-badge">⚖️ ${lang === 'pt' ? 'Nota Doutrinária Fundamental' : 'Doctrinal Clarification'}</div>
          <p>${hero.systematizationNote}</p>
        </div>

        <div class="cosmo-hero-actions">
          ${hero.primaryActions.map(act => `
            <a href="${act.target}" class="cosmo-action-btn" data-target="${act.target}">
              <span>${act.icon}</span> <span>${act.label}</span>
            </a>
          `).join('')}
        </div>
      </div>
    `;

    // Understanding the Buddhist Cosmos (Kāmaloka, Rūpaloka, Arūpaloka)
    const uc = m.understandingCosmos;
    const universeHtml = `
      <section class="cosmo-section-block" id="cosmo-universe">
        <div class="cosmo-section-title-wrap">
          <h3 class="cosmo-section-title"><span>☸</span> ${uc.sectionTitle}</h3>
          <div class="cosmo-section-subtitle">${uc.sectionSubtitle}</div>
        </div>
        <p class="cosmo-lead-text">${uc.leadText}</p>

        <div class="cosmo-tiers-grid">
          ${uc.tiers.map(tier => `
            <article class="cosmo-tier-card" id="tier-${tier.id}">
              <div class="cosmo-tier-header">
                <span class="cosmo-tier-badge">${tier.planesCount}</span>
                <h4 class="cosmo-tier-title">${tier.name}</h4>
              </div>
              <p class="cosmo-tier-desc">${tier.description}</p>
              
              <div class="cosmo-subdivisions-list">
                ${tier.subdivisions.map(sub => `
                  <div class="cosmo-subdiv-item">
                    <strong class="cosmo-subdiv-name">${sub.name}</strong>
                    <p class="cosmo-subdiv-detail">${sub.detail}</p>
                  </div>
                `).join('')}
              </div>

              ${tier.practicalReflection ? `
                <div class="cosmo-tier-reflection">
                  <span>☸</span>
                  <div><strong>${lang === 'pt' ? 'Reflexão Prática:' : 'Practical Reflection:'}</strong> ${tier.practicalReflection}</div>
                </div>
              ` : ''}

              ${tier.doctrinalNote ? `
                <div class="cosmo-tier-caveat">
                  <span>⚠</span>
                  <div>${tier.doctrinalNote}</div>
                </div>
              ` : ''}

              ${tier.reflectionQuestion ? `
                <div class="cosmo-tier-reflection">
                  <span>☸</span>
                  <div><strong>${lang === 'pt' ? 'Pergunta Reflexiva:' : 'Contemplative Question:'}</strong> ${tier.reflectionQuestion}</div>
                </div>
              ` : ''}
            </article>
          `).join('')}
        </div>
      </section>
    `;

    // Interactive Exploration of the 31 Planes
    const pe = m.planesExplorer;
    const planesHtml = `
      <section class="cosmo-section-block" id="cosmo-31-planes">
        <div class="cosmo-section-title-wrap">
          <h3 class="cosmo-section-title"><span>☸</span> ${pe.sectionTitle}</h3>
          <div class="cosmo-section-subtitle">${pe.sectionSubtitle}</div>
        </div>

        <div class="cosmo-planes-notice">
          <span>ℹ️</span> <div>${pe.planesNotice}</div>
        </div>

        <div class="cosmo-planes-toolbar">
          <div class="cosmo-tier-filters" id="cosmoTierFilters" role="group" aria-label="Planes Filter">
            <button class="cosmo-filter-btn active" data-tier="all">🌌 ${pe.categoryFilterLabels.all}</button>
            <button class="cosmo-filter-btn" data-tier="kama">🔥 ${pe.categoryFilterLabels.kama}</button>
            <button class="cosmo-filter-btn" data-tier="rupa">✨ ${pe.categoryFilterLabels.rupa}</button>
            <button class="cosmo-filter-btn" data-tier="arupa">💠 ${pe.categoryFilterLabels.arupa}</button>
          </div>
        </div>

        <div class="cosmo-planes-grid" id="cosmoPlanesGrid">
          ${pe.planes.map(p => `
            <article class="cosmo-plane-card" id="${p.id}" data-tier="${p.tier}">
              <header class="cosmo-plane-header">
                <div class="cosmo-plane-num-wrap">
                  <span class="cosmo-plane-num">#${String(p.number).padStart(2, '0')}</span>
                  <span class="cosmo-plane-subtier">${p.subTier}</span>
                </div>
                <span class="cosmo-plane-lifespan">⏱ ${p.lifespan}</span>
              </header>

              <div class="cosmo-plane-titles">
                <h4 class="cosmo-plane-pali">${p.paliName}</h4>
                <div class="cosmo-plane-trans">— ${p.englishName}</div>
              </div>

              <div class="cosmo-plane-meta-row">
                <div class="cosmo-meta-box">
                  <span class="cosmo-meta-label">⚖️ ${lang === 'pt' ? 'Causa Cármica / Condição:' : 'Kammic Cause / Conditions:'}</span>
                  <div class="cosmo-meta-val">${p.kammaCause}</div>
                </div>
              </div>

              <p class="cosmo-plane-chars">${p.characteristics}</p>

              <div class="cosmo-plane-action-row">
                <button class="cosmo-toggle-drawer-btn" data-target="drawer-${p.id}">
                  <span>▼</span> <span>${lang === 'pt' ? 'Fontes Canônicas & Estudo' : 'Canonical Sources & Study'}</span>
                </button>
              </div>

              <div class="cosmo-plane-drawer" id="drawer-${p.id}">
                <div class="cosmo-drawer-content">
                  <div class="cosmo-source-line">
                    <strong>📜 ${lang === 'pt' ? 'Fontes Canônicas (Suttas):' : 'Canonical Sources (Suttas):'}</strong> ${p.canonicalSources}
                  </div>
                  <div class="cosmo-source-line commentarial">
                    <strong>📚 ${lang === 'pt' ? 'Fontes Comentariais (Tradição Posterior):' : 'Commentarial Sources (Later Systematization):'}</strong> ${p.commentarialSources}
                  </div>
                  <div class="cosmo-drawer-reflection">
                    <span>☸</span>
                    <div><strong>${lang === 'pt' ? 'Reflexão Yoniso Manasikāra:' : 'Contemplative Reflection:'}</strong> ${p.reflection}</div>
                  </div>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </section>
    `;

    // Section: Nibbāna Is Not Another Realm
    const bp = m.beyondPlanes;
    const beyondHtml = `
      <section class="cosmo-section-block" id="cosmo-nibbana">
        <div class="cosmo-nibbana-card">
          <div class="cosmo-nibbana-header">
            <span class="cosmo-nibbana-badge">☸ ${lang === 'pt' ? 'A Meta Além do Saṁsāra' : 'The Goal Beyond Saṁsāra'}</span>
            <h3 class="cosmo-nibbana-title">${bp.sectionTitle}</h3>
            <div class="cosmo-nibbana-subtitle">${bp.sectionSubtitle}</div>
          </div>
          <p class="cosmo-nibbana-lead">${bp.leadText}</p>

          <div class="cosmo-nibbana-points-grid">
            ${bp.points.map(pt => `
              <div class="cosmo-nibbana-point-card">
                <h4 class="cosmo-nibbana-point-title">✨ ${pt.title}</h4>
                <p class="cosmo-nibbana-point-desc">${pt.detail}</p>
              </div>
            `).join('')}
          </div>

          <div class="cosmo-nibbana-reflection-box">
            <div class="cosmo-reflection-icon">☸</div>
            <div>
              <div class="cosmo-reflection-title">${lang === 'pt' ? 'Reflexão Doutrinária Central' : 'Central Doctrinal Inquiry'}</div>
              <div class="cosmo-reflection-text">"${bp.reflectionQuestion}"</div>
            </div>
          </div>
        </div>
      </section>
    `;

    // FAQs Section
    const faqs = m.faqs;
    const faqsHtml = `
      <section class="cosmo-section-block" id="cosmo-faqs">
        <div class="cosmo-section-title-wrap">
          <h3 class="cosmo-section-title"><span>☸</span> ${faqs.sectionTitle}</h3>
          <div class="cosmo-section-subtitle">${faqs.sectionSubtitle}</div>
        </div>

        <div class="cosmo-faq-list">
          ${faqs.items.map((item, idx) => `
            <div class="cosmo-faq-item" id="cosmo-faq-${idx}">
              <button class="cosmo-faq-q-btn" data-faq-index="${idx}">
                <span>${idx + 1}. ${item.q}</span>
                <span class="cosmo-faq-icon">▾</span>
              </button>
              <div class="cosmo-faq-a-body">
                ${item.a}
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;

    return heroHtml + universeHtml + planesHtml + beyondHtml + faqsHtml;
  }

  renderCosmologyCanonical(m, lang) {
    if (!m) return '';
    const lib = m.suttaLibrary;

    const toolbarHtml = `
      <div class="cosmo-library-controls">
        <div class="cosmo-section-title-wrap">
          <h3 class="cosmo-section-title"><span>☸</span> ${lib.sectionTitle}</h3>
          <div class="cosmo-section-subtitle">${lib.sectionSubtitle}</div>
        </div>

        <div class="cosmo-search-wrap">
          <svg class="cosmo-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input type="search" class="cosmo-search-input" id="cosmoSuttaSearch" placeholder="${lib.searchPlaceholder}" aria-label="Search Suttas">
        </div>

        <div class="cosmo-filter-pills" id="cosmoFilterPills">
          ${lib.filterCategories.map(cat => `
            <button class="cosmo-filter-pill ${cat.id === 'all' ? 'active' : ''}" data-cat="${cat.id}">
              ${cat.label}
            </button>
          `).join('')}
        </div>
      </div>
    `;

    const suttasHtml = `
      <div class="cosmo-suttas-grid" id="cosmoSuttasGrid">
        ${lib.suttas.map((s, idx) => {
          const lvl = s.level || 'intermediate';
          return `
          <article class="cosmo-sutta-card" id="cosmo-sutta-${idx}" data-code="${s.code}" data-cat="${s.category}" data-level="${lvl}" data-search="${(s.code + ' ' + s.paliTitle + ' ' + s.transTitle + ' ' + s.keyConcepts.join(' ')).toLowerCase()}">
            <header class="cosmo-sutta-top">
              <div class="cosmo-sutta-badges">
                <span class="cosmo-sutta-code-tag">${s.code}</span>
                <span class="cosmo-sutta-cat-tag">${s.category}</span>
                <span class="cosmo-sutta-level-tag ${lvl}">${lvl.toUpperCase()}</span>
                <span class="cosmo-sutta-time-tag">⏱ ${s.readingTime}</span>
              </div>
              <label class="cosmo-read-toggle-wrap" data-code="${s.code}">
                <input type="checkbox" class="cosmo-sutta-read-check" data-code="${s.code}">
                <span class="cosmo-read-label">${lang === 'pt' ? 'Marcar como Lido' : 'Mark as Read'}</span>
              </label>
            </header>

            <div class="cosmo-sutta-titles">
              <h3 class="cosmo-sutta-pali-title">${s.paliTitle}</h3>
              <div class="cosmo-sutta-trans-title">“${s.transTitle}”</div>
              <div class="cosmo-sutta-nikaya">${s.nikaya}</div>
            </div>

            <p class="cosmo-sutta-importance">${s.importance}</p>

            <div class="cosmo-lay-relevance-card">
              <strong>${lang === 'pt' ? 'Relevância para a Vida Leiga:' : 'Lay Relevance:'}</strong> ${s.layRelevance}
            </div>

            <div class="cosmo-concepts-row">
              ${s.keyConcepts.map(c => `<span class="cosmo-concept-chip">#${c}</span>`).join('')}
            </div>

            <div class="cosmo-link-reflection-card">
              <span>☸</span>
              <div><strong>${lang === 'pt' ? 'Reflexão Yoniso Manasikāra:' : 'Reflection:'}</strong> ${s.reflectionQuestion}</div>
            </div>

            <div style="margin-bottom: 14px;">
              <button class="cosmo-toggle-note-btn" data-target="cosmo-sutta-note-${idx}">
                <span>▼</span> <span>${lang === 'pt' ? 'Notas de Estudo Canônico' : 'Canonical Study Notes'}</span>
              </button>
              <div class="cosmo-study-note-drawer" id="cosmo-sutta-note-${idx}">
                ${s.studyNotes}
              </div>
            </div>

            <footer class="cosmo-sutta-action-row">
              <a href="${s.suttaCentralUrl}" target="_blank" rel="noopener noreferrer" class="suttacentral-btn">
                <span>${lang === 'pt' ? 'Ler no SuttaCentral' : 'Read on SuttaCentral'} (${s.code})</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </footer>
          </article>
        `;
        }).join('')}
      </div>
    `;

    return toolbarHtml + suttasHtml;
  }

  renderCosmologyHousehold(m, lang) {
    if (!m) return '';

    // Section 1: 5 Daily Scenarios
    const ls = m.layScenarios;
    const scenariosHtml = `
      <section class="cosmo-section-block" id="cosmo-scenarios">
        <div class="cosmo-section-title-wrap">
          <h3 class="cosmo-section-title"><span>☸</span> ${ls.sectionTitle}</h3>
          <div class="cosmo-section-subtitle">${ls.sectionSubtitle}</div>
        </div>

        <div class="cosmo-scenarios-list">
          ${ls.scenarios.map(sc => `
            <article class="cosmo-scenario-card" id="${sc.id}">
              <header class="cosmo-sc-header">
                <span class="cosmo-sc-num">${sc.number}</span>
                <h4 class="cosmo-sc-title">${sc.title}</h4>
              </header>

              <div class="cosmo-sc-grid">
                <div class="cosmo-sc-item">
                  <div class="cosmo-sc-label">${lang === 'pt' ? 'Situação Cotidiana' : 'Everyday Situation'}</div>
                  <div class="cosmo-sc-text">${sc.narrative}</div>
                </div>

                <div class="cosmo-sc-item">
                  <div class="cosmo-sc-label">☸ ${lang === 'pt' ? 'Princípio do Dhamma' : 'Dhamma Principle'}</div>
                  <div class="cosmo-sc-text">${sc.dhammaPrinciple}</div>
                </div>

                <div class="cosmo-sc-item dhamma-response">
                  <div class="cosmo-sc-label">✓ ${lang === 'pt' ? 'Prática Recomendada' : 'Recommended Practice'}</div>
                  <div class="cosmo-sc-text">${sc.practicalExercise}</div>
                </div>

                <div class="cosmo-sc-item">
                  <div class="cosmo-sc-label">❓ ${lang === 'pt' ? 'Pergunta Reflexiva' : 'Reflection Question'}</div>
                  <div class="cosmo-sc-text" style="font-style: italic; color: var(--gold-light);">"${sc.reflectionQuestion}"</div>
                  <div class="cosmo-sc-suttas">
                    ${sc.suttas.map(st => `<span class="cosmo-concept-chip">📖 ${st}</span>`).join('')}
                  </div>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </section>
    `;

    // Section 2: Kamma, Rebirth & Ethical Responsibility + Decision Exercise
    const ks = m.kammaSection;
    const de = ks.decisionExercise;
    const kammaHtml = `
      <section class="cosmo-section-block" id="cosmo-kamma">
        <div class="cosmo-section-title-wrap">
          <h3 class="cosmo-section-title"><span>☸</span> ${ks.sectionTitle}</h3>
          <div class="cosmo-section-subtitle">${ks.sectionSubtitle}</div>
        </div>
        <p class="cosmo-lead-text">${ks.leadText}</p>

        <div class="cosmo-principles-grid">
          ${ks.corePrinciples.map(pr => `
            <div class="cosmo-principle-card">
              <span class="cosmo-principle-badge">⚖️ ${lang === 'pt' ? 'Princípio Canônico' : 'Canonical Principle'}</span>
              <h4 class="cosmo-principle-title">${pr.title}</h4>
              <p class="cosmo-principle-desc">${pr.detail}</p>
            </div>
          `).join('')}
        </div>

        <!-- Interactive Ethical Decision Exercise -->
        <div class="cosmo-decision-wrap" id="cosmo-decision-exercise">
          <div class="cosmo-decision-header">
            <h4 class="cosmo-decision-title"><span>☸</span> ${de.title}</h4>
            <div class="cosmo-decision-subtitle">${de.subtitle}</div>
          </div>
          <p class="cosmo-decision-intro">${lang === 'pt' ? 'Selecione uma resposta para analisar o momentum kármico de cada escolha sem especulações fatalistas:' : 'Select a response to analyze the intentional momentum and karmic mechanics without fatalistic speculation:'}</p>

          <div class="cosmo-dilemmas-list">
            ${de.dilemmas.map((d, dIdx) => `
              <div class="cosmo-dilemma-card" id="${d.id}" data-dilemma-index="${dIdx}">
                <div class="cosmo-dilemma-top">
                  <span class="cosmo-dilemma-num">${lang === 'pt' ? 'Dilema' : 'Dilemma'} ${dIdx + 1}</span>
                  <h5 class="cosmo-dilemma-heading">${d.situation}</h5>
                </div>

                <div class="cosmo-dilemma-options">
                  ${d.options.map((opt, optIdx) => `
                    <button class="cosmo-opt-btn" data-dilemma-id="${d.id}" data-opt-idx="${optIdx}">
                      <span class="cosmo-opt-key">${String.fromCharCode(65 + optIdx)}</span>
                      <span class="cosmo-opt-text">${opt.text}</span>
                    </button>
                  `).join('')}
                </div>

                <div class="cosmo-dilemma-feedback" id="feedback-${d.id}" style="display: none;"></div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;

    // Section 3: Guided Study Pathways
    const sp = m.studyPathways;
    const pathwaysHtml = `
      <section class="cosmo-section-block" id="cosmo-pathways">
        <div class="cosmo-section-title-wrap">
          <h3 class="cosmo-section-title"><span>☸</span> ${sp.sectionTitle}</h3>
          <div class="cosmo-section-subtitle">${sp.sectionSubtitle}</div>
        </div>
        <p class="cosmo-lead-text" style="margin-bottom: 8px;">${sp.disclaimer}</p>

        <div class="cosmo-track-tabs" id="cosmoTrackTabs">
          ${sp.tracks.map((track, i) => `
            <button class="cosmo-track-tab ${i === 0 ? 'active' : ''}" data-track-id="${track.id}">
              ${track.name}
            </button>
          `).join('')}
        </div>

        <div id="cosmoActiveTrackContent"></div>
      </section>
    `;

    // Section 4: Contemplative Reflection Journal
    const rj = m.reflectionJournal;
    const journalHtml = `
      <section class="cosmo-section-block" id="cosmo-journal">
        <div class="cosmo-journal-wrap">
          <div class="cosmo-section-title-wrap">
            <h3 class="cosmo-section-title"><span>☸</span> ${rj.sectionTitle}</h3>
            <div class="cosmo-section-subtitle">${rj.sectionSubtitle}</div>
          </div>

          <form id="cosmoJournalForm" class="cosmo-journal-form">
            ${rj.prompts.map(p => `
              <div class="cosmo-prompt-row">
                <label class="cosmo-journal-prompt-label" for="cosmo-journal-${p.id}">${p.label}</label>
                <textarea class="cosmo-step-textarea" id="cosmo-journal-${p.id}" placeholder="${p.placeholder}"></textarea>
              </div>
            `).join('')}
            <div style="display: flex; gap: 12px; margin-top: 14px;">
              <button type="submit" class="cosmo-finish-btn">${rj.saveButtonText}</button>
            </div>
          </form>

          <div style="border-top: 1px solid var(--border-subtle); padding-top: 24px; margin-top: 30px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 10px;">
              <h4 class="cosmo-comp-title"><span>☸</span> ${rj.entriesHeading}</h4>
              <div style="display: flex; gap: 8px;">
                <button class="cosmo-action-btn" id="cosmoExportJournalBtn" style="padding: 6px 12px; font-size: 0.78rem;">${rj.exportButtonText}</button>
                <button class="cosmo-action-btn" id="cosmoClearJournalBtn" style="padding: 6px 12px; font-size: 0.78rem; border-color: rgba(201, 84, 56, 0.4); color: #e5b3a3;">${rj.clearAllButtonText}</button>
              </div>
            </div>
            <div class="cosmo-journal-entries-list" id="cosmoJournalEntriesList"></div>
          </div>
        </div>
      </section>
    `;

    return scenariosHtml + kammaHtml + pathwaysHtml + journalHtml;
  }

  bindCosmologyInteractions(m, lang) {
    // 1. Jump Action Buttons inside Hero
    const actionBtns = document.querySelectorAll('.cosmo-action-btn[data-target]');
    actionBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = btn.dataset.target;
        if (target === '#tab-canonical') {
          e.preventDefault();
          this.switchTab('tab-canonical');
          const libEl = document.getElementById('cosmoSuttasGrid');
          if (libEl) libEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (target === '#tab-household') {
          e.preventDefault();
          this.switchTab('tab-household');
          const scEl = document.getElementById('cosmo-scenarios');
          if (scEl) scEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (target && target.startsWith('#')) {
          e.preventDefault();
          const el = document.querySelector(target);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // 2. 31 Planes Tier Filters (All, Kama, Rupa, Arupa)
    const tierFilters = document.querySelectorAll('.cosmo-tier-filters .cosmo-filter-btn');
    const planeCards = document.querySelectorAll('.cosmo-plane-card');

    tierFilters.forEach(btn => {
      btn.addEventListener('click', () => {
        tierFilters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const selectedTier = btn.dataset.tier;
        planeCards.forEach(card => {
          if (selectedTier === 'all' || card.dataset.tier === selectedTier) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // 3. Collapsible Drawers (Plane detail drawers & Sutta notes)
    document.querySelectorAll('.cosmo-toggle-drawer-btn, .cosmo-toggle-note-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.dataset.target;
        const drawer = document.getElementById(targetId);
        if (drawer) {
          drawer.classList.toggle('open');
          const isOpen = drawer.classList.contains('open');
          const arrow = btn.querySelector('span:first-child');
          if (arrow) arrow.textContent = isOpen ? '▲' : '▼';
        }
      });
    });

    // 4. FAQ Accordion
    document.querySelectorAll('.cosmo-faq-q-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.cosmo-faq-item');
        if (item) {
          const wasOpen = item.classList.contains('open');
          document.querySelectorAll('.cosmo-faq-item').forEach(i => i.classList.remove('open'));
          if (!wasOpen) item.classList.add('open');
        }
      });
    });

    // 5. Sutta Library Search & Category Filter
    const searchInput = document.getElementById('cosmoSuttaSearch');
    const filterPills = document.querySelectorAll('#cosmoFilterPills .cosmo-filter-pill');
    const suttaCards = document.querySelectorAll('.cosmo-sutta-card');

    let currentCat = 'all';
    let currentSearch = '';

    const filterSuttas = () => {
      suttaCards.forEach(card => {
        const cardCat = card.dataset.cat || '';
        const searchBlob = card.dataset.search || '';
        const matchesCat = (currentCat === 'all' || cardCat === currentCat);
        const matchesSearch = (!currentSearch || searchBlob.includes(currentSearch));
        card.style.display = (matchesCat && matchesSearch) ? 'block' : 'none';
      });
    };

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.trim().toLowerCase();
        filterSuttas();
      });
    }

    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentCat = pill.dataset.cat || 'all';
        filterSuttas();
      });
    });

    // 6. Sutta "Mark as Read" Checkboxes (Local Storage)
    const readStorageKey = 'lay_dharma_cosmo_read';
    let readSuttas = [];
    try {
      readSuttas = JSON.parse(localStorage.getItem(readStorageKey) || '[]');
    } catch (e) {
      readSuttas = [];
    }

    document.querySelectorAll('.cosmo-sutta-read-check').forEach(chk => {
      const code = chk.dataset.code;
      if (readSuttas.includes(code)) {
        chk.checked = true;
        const wrap = chk.closest('.cosmo-read-toggle-wrap');
        if (wrap) wrap.classList.add('completed');
      }
      chk.addEventListener('change', () => {
        if (chk.checked) {
          if (!readSuttas.includes(code)) readSuttas.push(code);
        } else {
          readSuttas = readSuttas.filter(c => c !== code);
        }
        localStorage.setItem(readStorageKey, JSON.stringify(readSuttas));
        const wrap = chk.closest('.cosmo-read-toggle-wrap');
        if (wrap) wrap.classList.toggle('completed', chk.checked);
      });
    });

    // 7. Interactive Decision Exercise
    const dilemmas = m.kammaSection?.decisionExercise?.dilemmas || [];
    document.querySelectorAll('.cosmo-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const dilemmaId = btn.dataset.dilemmaId;
        const optIdx = parseInt(btn.dataset.optIdx, 10);
        const parentCard = btn.closest('.cosmo-dilemma-card');
        if (!parentCard) return;

        parentCard.querySelectorAll('.cosmo-opt-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');

        const dilemmaData = dilemmas.find(d => d.id === dilemmaId);
        if (!dilemmaData) return;
        const optData = dilemmaData.options[optIdx];
        if (!optData) return;

        const fbEl = document.getElementById(`feedback-${dilemmaId}`);
        if (fbEl) {
          fbEl.innerHTML = `
            <div class="cosmo-fb-header">
              <span class="cosmo-fb-badge">⚖️ ${lang === 'pt' ? 'Momentum Kármico & Psicológico' : 'Kammic Momentum & Mechanics'}</span>
            </div>
            <div class="cosmo-fb-row">${optData.momentum}</div>
          `;
          fbEl.style.display = 'block';
        }
      });
    });

    // 8. Study Pathways Track Tabs & Checkbox Persistence
    const sp = m.studyPathways;
    if (sp && sp.tracks) {
      const trackTabs = document.querySelectorAll('.cosmo-track-tab');
      const trackContent = document.getElementById('cosmoActiveTrackContent');
      const pathwayStorageKey = 'lay_dharma_cosmo_pathway';
      let pathwayState = {};
      try {
        pathwayState = JSON.parse(localStorage.getItem(pathwayStorageKey) || '{}');
      } catch (e) {
        pathwayState = {};
      }

      const renderTrack = (trackId) => {
        if (!trackContent) return;
        const trk = sp.tracks.find(t => t.id === trackId) || sp.tracks[0];
        trackContent.innerHTML = `
          <div class="cosmo-track-overview">
            <h4 class="cosmo-track-title">${trk.name} — ${trk.duration}</h4>
            <p class="cosmo-track-desc">${trk.description}</p>
          </div>
          <div class="cosmo-days-grid">
            ${trk.days.map(d => {
              const itemKey = `${trackId}-day-${d.day}`;
              const isDone = !!pathwayState[itemKey];
              return `
                <div class="cosmo-day-card ${isDone ? 'completed' : ''}" id="${itemKey}">
                  <header class="cosmo-day-header">
                    <span class="cosmo-day-badge">${lang === 'pt' ? 'Dia' : 'Day'} ${d.day}</span>
                    <label class="cosmo-day-check-wrap">
                      <input type="checkbox" class="cosmo-day-check" data-item-key="${itemKey}" ${isDone ? 'checked' : ''}>
                      <span>${lang === 'pt' ? 'Concluído' : 'Done'}</span>
                    </label>
                  </header>
                  <h5 class="cosmo-day-focus">${d.sutta}</h5>
                  <div class="cosmo-day-reading"><strong>☸ ${lang === 'pt' ? 'Estudo & Prática:' : 'Study & Practice:'}</strong> ${d.task}</div>
                </div>
              `;
            }).join('')}
          </div>
        `;

        trackContent.querySelectorAll('.cosmo-day-check').forEach(chk => {
          chk.addEventListener('change', () => {
            const k = chk.dataset.itemKey;
            pathwayState[k] = chk.checked;
            localStorage.setItem(pathwayStorageKey, JSON.stringify(pathwayState));
            const dayCard = document.getElementById(k);
            if (dayCard) dayCard.classList.toggle('completed', chk.checked);
          });
        });
      };

      trackTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          trackTabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          renderTrack(tab.dataset.trackId);
        });
      });

      renderTrack(sp.tracks[0].id);
    }

    // 9. Reflection Journal Form and Persistence
    const journalStorageKey = 'lay_dharma_cosmo_journal';
    let journalEntries = [];
    try {
      journalEntries = JSON.parse(localStorage.getItem(journalStorageKey) || '[]');
    } catch (e) {
      journalEntries = [];
    }

    const journalList = document.getElementById('cosmoJournalEntriesList');
    const journalForm = document.getElementById('cosmoJournalForm');
    const exportBtn = document.getElementById('cosmoExportJournalBtn');
    const clearBtn = document.getElementById('cosmoClearJournalBtn');

    const renderJournalList = () => {
      if (!journalList) return;
      if (journalEntries.length === 0) {
        journalList.innerHTML = `<p style="font-size: 0.88rem; color: var(--text-muted); font-style: italic;">${m.reflectionJournal.noEntriesNotice}</p>`;
        return;
      }

      journalList.innerHTML = journalEntries.map((entry, idx) => `
        <article class="cosmo-journal-entry-card" id="cosmo-entry-${idx}">
          <header class="cosmo-entry-header">
            <span>📅 ${new Date(entry.timestamp).toLocaleString()}</span>
            <button class="cosmo-entry-delete-btn" data-entry-idx="${idx}">🗑 ${lang === 'pt' ? 'Excluir' : 'Delete'}</button>
          </header>
          <div style="font-size: 0.9rem; line-height: 1.6; color: var(--text-secondary);">
            <div style="margin-bottom: 4px;"><strong>1. Range of Existence:</strong> ${entry.q1 || '-'}</div>
            <div style="margin-bottom: 4px;"><strong>2. Kamma & Intention:</strong> ${entry.q2 || '-'}</div>
            <div style="margin-bottom: 4px;"><strong>3. Impermanence:</strong> ${entry.q3 || '-'}</div>
            <div style="margin-bottom: 4px;"><strong>4. Aspiration vs Liberation:</strong> ${entry.q4 || '-'}</div>
            <div style="margin-bottom: 4px;"><strong>5. Non-judgmental Compassion:</strong> ${entry.q5 || '-'}</div>
            <div><strong>6. Canonical Sutta:</strong> ${entry.q6 || '-'}</div>
          </div>
        </article>
      `).join('');

      journalList.querySelectorAll('.cosmo-entry-delete-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.dataset.entryIdx, 10);
          journalEntries.splice(idx, 1);
          localStorage.setItem(journalStorageKey, JSON.stringify(journalEntries));
          renderJournalList();
        });
      });
    };

    if (journalForm) {
      journalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const entry = {
          timestamp: new Date().toISOString(),
          q1: document.getElementById('cosmo-journal-cq1')?.value.trim() || '',
          q2: document.getElementById('cosmo-journal-cq2')?.value.trim() || '',
          q3: document.getElementById('cosmo-journal-cq3')?.value.trim() || '',
          q4: document.getElementById('cosmo-journal-cq4')?.value.trim() || '',
          q5: document.getElementById('cosmo-journal-cq5')?.value.trim() || '',
          q6: document.getElementById('cosmo-journal-cq6')?.value.trim() || ''
        };

        if (!entry.q1 && !entry.q2 && !entry.q3 && !entry.q4 && !entry.q5 && !entry.q6) {
          alert(lang === 'pt' ? 'Por favor, preencha pelo menos um campo para salvar a reflexão.' : 'Please enter at least one field to save your reflection.');
          return;
        }

        journalEntries.unshift(entry);
        localStorage.setItem(journalStorageKey, JSON.stringify(journalEntries));
        journalForm.reset();
        renderJournalList();
      });
    }

    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(journalEntries, null, 2));
        const dlAnchor = document.createElement('a');
        dlAnchor.setAttribute('href', dataStr);
        dlAnchor.setAttribute('download', 'buddhist_cosmology_journal.json');
        dlAnchor.click();
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (confirm(lang === 'pt' ? 'Tem certeza de que deseja limpar todo o histórico de reflexões?' : 'Are you sure you want to clear all saved reflections?')) {
          journalEntries = [];
          localStorage.removeItem(journalStorageKey);
          renderJournalList();
        }
      });
    }

    renderJournalList();
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
