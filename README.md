# The Lay Dharma Household Mārga
*(Upāsaka-Dharma & The Householder's Study Portal)*

> **A focused canonical study portal and doctrinal reference built for Buddhist laypeople—providing direct access to foundational teachings, precise Pāli terminology, authentic sutta translations, and practical guidance for living the Dhamma in the everyday world.**

---

## ☸ Purpose & Scope

The objective of **The Lay Dharma Household Mārga** is singular: to give lay practitioners (*upāsakas* and *upāsikās*) direct, unadulterated, and focused access to the most vital Buddhist teachings for personal study and daily contemplation.

### What This Platform Is:
- **A Doctrinal Study Reference**: A curated, systematic breakdown of essential Buddhist frameworks directly rooted in the canonical discourses (*suttas*).
- **A Translation & Terminology Guide**: Precise explanations of essential Pāli vocabulary, root terms, and nuanced translations to prevent modern misinterpretation.
- **A Householder's Practical Roadmap**: Actionable analysis of how classical ethical frameworks, livelihood guidelines, and wisdom disciplines apply directly to domestic life, family commitments, and professional responsibilities.
- **A Personal Study Repository**: An offline-first digital study desk with integrated personal note-taking for serious reflection (*yoniso manasikāra*).

### What This Platform Is NOT:
- **Not a meditation timer or wellness app**: There are no breathing counters, ambient sounds, streaks, or gamified mindfulness gimmicks.
- **Not generic secular self-help**: The material stays faithful to canonical Early Buddhist texts (*Tipiṭaka / Nikāyas*), presenting the teachings in their authentic spiritual depth.

---

## 🏛️ The 9 Canonical Study Pillars

The application organizes core teachings through a radial study interface representing the **Dharmachakra** (Wheel of Dhamma), divided into nine fundamental areas of inquiry:

1. **Cattāri Ariyasaccāni** *(The Four Noble Truths)*  
   The diagnostic master framework: the reality of stress (*dukkha*), its arising (*samudaya*), its cessation (*nirodha*), and the path of practice (*magga*).
2. **Paṭiccasamuppāda** *(Dependent Arising)*  
   The twelve-linked chain of conditionality—understanding how psychological reactivity, attachment, and suffering arise and cease.
3. **Samatha & Vipassanā** *(Mental Cultivation & Tranquility)*  
   The theoretical foundations of unifying the mind (*samatha*) and experiential analytical insight (*vipassanā*) as mutually supporting wings of practice.
4. **Cattāro Satipaṭṭhānā** *(The Four Foundations of Mindfulness)*  
   Mindfulness of the body (*kāya*), feelings (*vedanā*), mind-states (*citta*), and phenomena (*dhammā*) as delineated in MN 10 and DN 22.
5. **Brahmavihārā** *(The Four Sublime Abodes)*  
   The boundless social virtues: loving-kindness (*mettā*), compassion (*karuṇā*), appreciative joy (*muditā*), and equanimity (*upekkhā*).
6. **Sigālovāda Sutta** *(Guidance for Laypeople)*  
   The "Vinaya of the Householder" (DN 31) detailing ethics in reciprocal relationships, financial stewardship, vocational integrity, and safeguarding the household.
7. **Dhammapada** *(The Path of the Dhamma)*  
   Core aphorisms and verses on vigilant mind-training, ethical restraint, and discerning wisdom.
8. **Jātaka & Pāramīs** *(Virtues in Action & Perfections)*  
   Exemplary narratives demonstrating the cultivation of ethical perfections (generosity, patience, resolve, truthfulness) amidst worldly obstacles.
9. **Loka & Bhavacakra** *(Cosmology & Conditioned Existence)*  
   Understanding realms of consciousness, karma (*kamma*), intentional action, and the psychological cycles of becoming.

---

## 📖 Deep Study Portal Features

Each of the nine pillars provides a dedicated five-section study portal:

- **1. Overview & Essence**: Clear, condensed thematic exposition explaining the core principle and its relevance.
- **2. Pāli Terminology Glossary**: Detailed definitions of critical Pāli terms, disambiguating subtle conceptual nuances (e.g., distinguishing *taṇhā* from *chanda*, *vedanā* from emotion).
- **3. Canonical Texts & Translations**: Parallel excerpts showing the original Pāli verses alongside precise English translations with canonical sutta references (e.g., SN 56.11, DN 31, MN 10).
- **4. Householder Practice (*Gahapati-Dharma*)**: Concrete, no-nonsense applications addressing conflict resolution, ethical speech at work, financial distribution, and domestic balance.
- **5. Wise Reflection & Study Notes**: Structured contemplative inquiry prompts (*yoniso manasikāra*) and persistent local personal study notes saved directly in your browser.
- **6. Native Dual-Language Support (EN / PT)**: Full instant bilingual toggle between English and Portuguese (*Português*), translating all UI elements, radial wheel titles, Pāli glossaries, sutta translations, and practical guidance in real-time.

---

## 💻 Technical Architecture & Running Locally

The application is built with a lightweight, zero-dependency architecture designed for longevity, performance, and offline accessibility.

- **Frontend**: Pure HTML5, Vanilla CSS3 (custom meditative color palette and typography), and native JavaScript (ES6+).
- **Zero External Runtime Dependencies**: Can run offline directly from local storage.
- **Build Pipeline**: Optional bundling script (`build_bundle.ps1`) merges modular data files into a single standalone bundle (`bundle.js`) to guarantee compatibility across `file://` protocol and standard HTTP servers.

### Quick Start:

1. **Direct file access**: Open `index.html` directly in any modern browser.
2. **Local HTTP Server**:
   - Double-click `Start_The_Lay_Dharma.bat`, or
   - Run in PowerShell:
     ```powershell
     powershell -ExecutionPolicy Bypass -File server.ps1
     ```
   - Access the platform at: `http://localhost:8081`
