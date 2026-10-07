/**
 * The Lay Dharma Household MÄrga â€” Standalone Universal Web Bundle
 * Runs directly on file:// as well as HTTPS / local servers.
 */

(function() {
  'use strict';

  // ==========================================
  // 1. CANONICAL TOPICS DATA
  // ==========================================
/**
 * The Lay Dharma Household Mārga (Upāsaka-Dharma)
 * Canonical topics, sutta citations, Pali terminology, and practical householder applications.
 * Bilingual dataset: English (EN) and Portuguese (PT).
 */
const I18N_STRINGS = {
  en: {
    siteTitle: "The Lay Dharma Household Mārga",
    siteSubtitle: "Focused Teachings for Laypeople",
    hubBadge: "09 CANONICAL PILLARS",
    hubDefaultTitle: "Ariya Magga",
    hubDefaultDesc: "Hover or click any sector to enter study",
    hubTopicPrefix: "TOPIC",
    hubClickPrompt: "• Click to study",
    tabOverview: "Overview & Essence",
    tabCanonical: "Canonical Corpus",
    tabHousehold: "Householder Practice",
    tabInquiry: "Contemplative Inquiry",
    tabNotes: "Study Notes",
    keyPaliTermsHeading: "Key Pāli Terminology",
    canonicalSourcesPrefix: "Canonical Sources:",
    householdIntro: "Specific strategies, psychological guardrails, and behavioral advice for integrating this teaching into family dynamics, career, and household governance:",
    inquiryHeading: "Yoniso Manasikāra (Wise Reflection Prompts)",
    inquiryIntro: "Use these reflective questions during your morning sitting, evening review, or whenever life triggers emotional reactivity:",
    notesHeading: "Personal Practice Journal & Notes",
    notesIntro: "Your personal reflections and commitments for this topic are saved locally on this device.",
    notesPlaceholder: "Record your personal reflections, insights, or intentions for practicing this teaching in your household...",
    saveNotesBtn: "Save Reflection",
    notesSavedFeedback: "✓ Saved locally",
    closeReaderAria: "Close reader",
    langEnTitle: "English",
    langPtTitle: "Português",
    corpusHeading: "The Core Four Noble Truths Corpus",
    corpusSubtitle: "Seven Canonical Pillars: Proclamation, Anatomy, Right View, Simile, Not-Self, Conditionality & The Aggregates",
    establishesLabel: "Core Doctrinal Foundations Established:",
    dutyMatrixTruth: "Noble Truth",
    dutyMatrixPali: "Pāli Duty (Kicca)",
    dutyMatrixAction: "Action Required / Practice",
    dutyMatrixPrinciple: "Key Doctrinal Principle:",
    readOnSuttaCentral: "Read on SuttaCentral",
    quickJumpLabel: "Jump to Discourse:"
  },
  pt: {
    siteTitle: "O Mārga do Praticante Leigo",
    siteSubtitle: "Ensinamentos Diretos para a Vida Doméstica",
    hubBadge: "09 PILARES CANÔNICOS",
    hubDefaultTitle: "Ariya Magga",
    hubDefaultDesc: "Passe o cursor ou clique em um setor para estudar",
    hubTopicPrefix: "TÓPICO",
    hubClickPrompt: "• Clique para estudar",
    tabOverview: "Visão Geral & Essência",
    tabCanonical: "Corpus Canônico",
    tabHousehold: "Prática na Vida Leiga",
    tabInquiry: "Investigação Contemplativa",
    tabNotes: "Notas de Estudo",
    keyPaliTermsHeading: "Terminologia Pāli Essencial",
    canonicalSourcesPrefix: "Fontes Canônicas:",
    householdIntro: "Estratégias específicas, salvaguardas psicológicas e conduta prática para integrar este ensinamento à família, carreira e governança doméstica:",
    inquiryHeading: "Yoniso Manasikāra (Reflexão Sábia)",
    inquiryIntro: "Utilize estas perguntas reflexivas durante sua revisão diária ou quando surgir reatividade emocional no cotidiano:",
    notesHeading: "Diário de Prática & Anotações Pessoais",
    notesIntro: "Suas reflexões pessoais e resoluções para este tema são armazenadas localmente neste dispositivo.",
    notesPlaceholder: "Registre suas reflexões pessoais, percepções ou intenções para praticar este ensinamento em sua rotina doméstica...",
    saveNotesBtn: "Salvar Reflexão",
    notesSavedFeedback: "✓ Salvo localmente",
    closeReaderAria: "Fechar leitor",
    langEnTitle: "Inglês",
    langPtTitle: "Português",
    corpusHeading: "O Corpus Canônico das Quatro Nobres Verdades",
    corpusSubtitle: "Sete Pilares Canônicos: Proclamação, Anatomia, Visão Correta, Símile, Não-Eu, Condicionalidade & Os Agregados",
    establishesLabel: "Fundamentos Doutrinários Estabelecidos:",
    dutyMatrixTruth: "Nobre Verdade",
    dutyMatrixPali: "Dever em Pāli (Kicca)",
    dutyMatrixAction: "Ação Requerida / Prática",
    dutyMatrixPrinciple: "Princípio Doutrinário Central:",
    readOnSuttaCentral: "Ler no SuttaCentral",
    quickJumpLabel: "Navegar para o Discurso:"
  }
};
const TOPICS_DATA = [
  {
    id: "cattari-ariyasaccani",
    number: "01",
    paliTitle: "Cattāri Ariyasaccāni",
    canonicalRef: "SN 56.11 • MN 141 • MN 9 • MN 28 • SN 22.59 • SN 12.23 • SN 56.13",
    en: {
      title: "The Four Noble Truths",
      tagline: "The Diagnostic Framework for Freedom from Psychological Stress & Worldly Entanglement",
      category: "Foundational Wisdom",
      keyPaliTerms: [
        { term: "Dukkha", meaning: "Unsatisfactoriness, stress, friction, inherent instability of conditioned things" },
        { term: "Samudaya", meaning: "Origin or arising, specifically rooted in craving (Taṇhā)" },
        { term: "Nirodha", meaning: "Cessation, unbinding, the extinguishing of compulsive craving (Nibbāna)" },
        { term: "Magga", meaning: "The Path leading to cessation, the Noble Eightfold Path (Ariya Aṭṭhaṅgika Magga)" },
        { term: "Taṇhā", meaning: "Thirst, feverish craving (sensual pleasures, becoming, and non-becoming)" },
        { term: "Pañcupādānakkhandhā", meaning: "The five aggregates subject to clinging (form, feeling, perception, formations, consciousness)" }
      ],
      overview: "The Four Noble Truths form the master blueprint of the Buddha's entire dispensation. Far from being a pessimistic creed, they are a supreme clinical diagnosis of the human condition: diagnosing the dis-ease (Dukkha), uncovering its psychological pathogen (Craving), proclaiming the certainty of recovery (Cessation), and prescribing the holistic lifestyle therapy (The Eightfold Path).",
      canonicalCorpus: [
        {
          suttaCode: "SN 56.11",
          paliTitle: "Dhammacakkappavattana Sutta",
          transTitle: "Setting the Dhamma Wheel in Motion",
          role: "The Indispensable Primary Text & Proclamation",
          summary: "This is the indispensable primary text. If this platform has one 'Four Noble Truths' source that every practitioner should encounter, it is this one. It marks the first discourse of the Buddha at the Deer Park in Isipatana.",
          establishes: [
            "The two extremes (sensual indulgence & self-mortification)",
            "The Middle Way (Majjhimā Paṭipadā)",
            "The Noble Eightfold Path (Ariya Aṭṭhaṅgika Magga)",
            "The proclamation of the Four Noble Truths",
            "The definition of Dukkha and its origin in craving (Taṇhā)",
            "The cessation of Dukkha (Nirodha) and the path (Magga)",
            "The Three Phases / Twelve Aspects (Tiparivaṭṭa Dvādasākāra)",
            "The completion of the Buddha's unexcelled supreme awakening",
            "Koṇḍañña's arising of the pristine Dhamma Eye (Dhammacakkhu)"
          ],
          coreDuty: {
            title: "The Fourfold Structure of Practice & Knowledge (Catukicca)",
            intro: "Most importantly, the sutta does not merely proclaim that 'there are four truths'. It establishes an operational fourfold imperative of direct practice:",
            matrix: [
              { truth: "1. Dukkha (Stress / Unsatisfactoriness)", paliDuty: "Pariññeyya", meaning: "Must be fully understood & comprehended" },
              { truth: "2. Samudaya (Origin of Stress: Craving)", paliDuty: "Pahātabba", meaning: "Must be abandoned & relinquished" },
              { truth: "3. Nirodha (Cessation of Stress: Nibbāna)", paliDuty: "Sacchikātabba", meaning: "Must be directly realized & witnessed" },
              { truth: "4. Magga (The Noble Eightfold Path)", paliDuty: "Bhāvetabba", meaning: "Must be cultivated & developed in everyday life" }
            ],
            note: "This operational distinction—comprehend, abandon, realize, cultivate—should remain the central compass of your study and practice."
          },
          suttaCentralUrl: "https://suttacentral.net/sn56.11/en/bodhi",
          excerptPali: "Idam kho pana, bhikkhave, dukkham ariyasaccam: jātipi dukkhā, jarāpi dukkhā, maraṇampi dukkham... saṅkhittena pañcupādānakkhandhā dukkhā.",
          excerptTrans: "Now this, monastics, is the Noble Truth of Dukkha: Birth is stressful, aging is stressful, illness and death are stressful; sorrow, lamentation, pain, distress, and despair are stressful; association with the disliked is stressful; separation from the loved is stressful; not getting what one desires is stressful. In brief, the five clinging-aggregates are stressful."
        },
        {
          suttaCode: "MN 141",
          paliTitle: "Saccavibhaṅga Sutta",
          transTitle: "The Analysis of the Truths",
          role: "The Systematic Doctrinal Anatomy",
          summary: "SN 56.11 gives the proclamation; MN 141 gives the analysis. Delivered by the Venerable Sāriputta under the Buddha's endorsement, this discourse systematically expands the Four Noble Truths, providing the definitive anatomical breakdown of the first and fourth truths.",
          establishes: [
            "Moving from familiar life symptoms into the deeper core of clinging",
            "The complete canonical inventory of Dukkha: birth, aging, illness, death, sorrow, lamentation, pain, grief, despair",
            "Interpersonal distress: association with the disliked & separation from the liked",
            "Psychological frustration: not getting what one desires",
            "The ultimate diagnosis: the five aggregates subject to clinging (pañcupādānakkhandhā dukkhā)",
            "Systematic individual definitions for each of the eight path factors of the Noble Eightfold Path"
          ],
          deepAnatomy: {
            title: "Moving to Pañcupādānakkhandhā (The Clinging-Aggregates)",
            detail: "MN 141 allows your study to move beyond the familiar surface list ('birth, aging, sickness, death...') into the deep canonical formulation: Pañcupādānakkhandhā dukkhā. Suffering is not simply painful events; it is the compulsive clinging to the five aggregates (form, feeling, perception, volitional formations, and consciousness)."
          },
          suttaCentralUrl: "https://suttacentral.net/mn141/en/sujato",
          excerptPali: "Katamañca, āvuso, dukkham ariyasaccaṁ? Jātipi dukkhā, jarāpi dukkhā, maraṇampi dukkhaṁ... saṅkhittena pañcupādānakkhandhā dukkhā.",
          excerptTrans: "And what, friends, is the Noble Truth of Dukkha? Birth is suffering, aging is suffering, death is suffering; sorrow, lamentation, pain, grief, and despair are suffering; association with the unloved is suffering; separation from the loved is suffering; not getting what one wants is suffering. In brief, the five aggregates subject to clinging are suffering."
        },
        {
          suttaCode: "MN 9",
          paliTitle: "Sammādiṭṭhi Sutta",
          transTitle: "Right View",
          role: "The Four Noble Truths as Right View",
          summary: "This is one of the most vital texts to understand the Four Noble Truths not as an isolated chapter of philosophy, but as the master diagnostic engine of Right View (Sammādiṭṭhi).",
          establishes: [
            "Right View articulated through wholesome and unwholesome roots (kusala & akusala)",
            "Right View articulated through the four nutriments of existence (physical food, contact, volition, consciousness)",
            "The Four Truths as the universal diagnostic formula applied across all phenomena",
            "Direct integration of the Four Truths with Dependent Origination (Paṭiccasamuppāda)",
            "Eradication of the underlying obsessions / latent tendencies (anusaya)",
            "Knowing Dukkha, its origin, its cessation, and the path as the essential hallmark of a noble disciple"
          ],
          deepAnatomy: {
            title: "The Four Noble Truths as an Active Diagnostic Lens",
            detail: "The Venerable Sāriputta demonstrates that the Four Noble Truths are part and parcel of Sammādiṭṭhi. Rather than asking merely 'What are the Four Truths?', this sutta trains the practitioner to see every life situation through the lens of: What is the stress? What is its origin? What is its cessation? What is the practical path to peace?"
          },
          suttaCentralUrl: "https://suttacentral.net/mn9/en/sujato",
          excerptPali: "Yato kho, āvuso, ariyasāvako dukkhañca pajānāti, dukkhasamudayañca pajānāti, dukkhanirodhañca pajānāti, dukkhanirodhagāminiñca paṭipadaṁ pajānāti; ettāvatāpi kho, āvuso, ariyasāvako sammādiṭṭhi hoti...",
          excerptTrans: "When a noble disciple understands suffering, its origin, its cessation, and the way leading to its cessation, in that way he is one of right view, whose view is straight, who has unwavering confidence in the Dhamma, and has arrived at this true Dhamma."
        },
        {
          suttaCode: "MN 28",
          paliTitle: "Mahāhatthipadopama Sutta",
          transTitle: "The Greater Discourse on the Simile of the Elephant's Footprint",
          role: "The Master Container of All Dhammas & The Clinging-Aggregates",
          summary: "Particularly crucial for understanding the First Noble Truth. Sāriputta connects the Four Truths directly with the five clinging-aggregates, preventing the app's explanation of Dukkha from becoming psychologically superficial ('just bad experiences').",
          establishes: [
            "The Simile of the Elephant's Footprint: just as all animal footprints fit within an elephant's footprint, all wholesome teachings are embraced by the Four Noble Truths",
            "In-depth canonical examination of Material Form (Rūpa) through the internal and external physical elements (earth, water, fire, wind)",
            "The contemplation of impermanence across cosmic geological scales and within the human body",
            "Direct progression from sensory contact to feeling, perception, volitional formations, and consciousness",
            "The realization that 'the five aggregates subject to clinging are Dukkha' (pañcupādānakkhandhā dukkhā)",
            "Protection against superficial psychological reductionism: suffering is existential clinging, not mere temporary discomfort"
          ],
          deepAnatomy: {
            title: "The Elephant's Footprint & Beyond Superficiality",
            detail: "Beginners easily misunderstand Dukkha as simply meaning 'unpleasant occurrences'. That is not sufficient. The deeper formulation is: pañcupādānakkhandhā dukkhā. MN 28 gives an unshakeable canonical route into form, feeling, perception, formations, and consciousness, showing that peace is found when clinging to these processes is dismantled."
          },
          suttaCentralUrl: "https://suttacentral.net/mn28/en/sujato",
          excerptPali: "Seyyathāpi, āvuso, yāni kānici jaṅgalānaṁ pāṇānaṁ padajātāni, sabbāni tāni hatthipade samodhānaṁ gacchanti... evameva kho, āvuso, ye keci kusalā dhammā, sabbe te catūsu ariyasaccesu saṅgahaṁ gacchanti.",
          excerptTrans: "Just as the footprint of any living being that walks can be placed within the footprint of an elephant, and the elephant’s footprint is declared supreme among them because of its great size; so too, all wholesome qualities can be included in the Four Noble Truths."
        },
        {
          suttaCode: "SN 22.59",
          paliTitle: "Anattalakkhaṇa Sutta",
          transTitle: "The Characteristic of Not-Self",
          role: "Deep-Dive on the 1st Truth: Systematic Investigation of the Aggregates",
          summary: "This isn't technically a Four Noble Truths exposition, but is an indispensable inclusion in the Four Truths learning path. Why? Because SN 56.11 proclaims that the five aggregates subject to clinging are Dukkha (pañcupādānakkhandhā dukkhā), and SN 22.59 is the master text systematically investigating those very aggregates.",
          establishes: [
            "The five aggregates: rūpa (form), vedanā (feeling), saññā (perception), saṅkhārā (volitional formations), viññāṇa (consciousness)",
            "Systematic examination of control: if form were self, it would not lead to affliction, and one could command 'let my form be thus'",
            "Refutation of ownership and identity: 'This is not mine, this I am not, this is not my self' (N'etaṁ mama, n'eso'hamasmi, na meso attā)",
            "The definitive Theravāda progression: five aggregates → impermanence (anicca) → unsatisfactoriness (dukkha) → not-self (anattā) → disenchantment (nibbidā) → dispassion (virāga) → liberation (vimutti)",
            "Treated as an essential deep-dive attached to the first noble truth, rather than pretending it is itself a Four Noble Truths sutta"
          ],
          deepAnatomy: {
            title: "The Progression: From Clinging-Aggregates to Liberation",
            detail: "SN 22.59 provides the exact mechanism for fulfilling the duty of the first truth (pariññeyya — full comprehension). When each aggregate is directly witnessed as impermanent (anicca), whatever is impermanent is unsatisfactory (dukkha), and whatever is unsatisfactory cannot rightly be regarded as 'This is mine, this I am, this is my self' (anattā). Seeing this with correct discernment, the noble disciple experiences disenchantment (nibbindati), through disenchantment becomes dispassionate (virajjati), and through dispassion is liberated (vimuccati)."
          },
          suttaCentralUrl: "https://suttacentral.net/sn22.59/en/bodhi",
          excerptPali: "Rūpaṁ, bhikkhave, anattā... N'etaṁ mama, n'eso'hamasmi, na meso attā'ti: evametaṁ yathābhūtaṁ sammappaññāya daṭṭhabbaṁ... Evaṁ passaṁ, bhikkhave, sutavā ariyasāvako rūpasmimpi nibbindati, vedanāyapi nibbindati, saññāyapi nibbindati, saṅkhāresupi nibbindati, viññāṇasmimpi nibbindati. Nibbindaṁ virajjati; virāgā vimuccati.",
          excerptTrans: "Form, monastics, is not-self... 'This is not mine, this I am not, this is not my self': thus this should be seen as it really is with correct wisdom... Seeing thus, monastics, the instructed noble disciple experiences disenchantment towards form, feeling, perception, volitional formations, and consciousness. Through disenchantment, dispassion arises; through dispassion, he is liberated."
        },
        {
          suttaCode: "SN 12.23",
          paliTitle: "Upanisa Sutta",
          transTitle: "Supporting Conditions",
          role: "Conditionality of Dukkha & Transcendental Dependent Arising",
          summary: "One of the foundational texts for illuminating the exact relationship between Dukkha, its causes, and the path. Particularly valuable because it demonstrates that suffering and liberation unfold within a conditional architecture, preventing the common oversimplification that 'craving causes suffering'. The Buddha's teaching is far more structurally sophisticated than a simple psychological slogan.",
          establishes: [
            "The Four Truths situated within the overarching canonical teaching on conditionality (Idappaccayatā)",
            "Tracing suffering backward through the mundane chain: suffering (dukkha) ← birth (jāti) ← existence (bhava) ← clinging (upādāna) ← craving (taṇhā)... ← ignorance (avijjā)",
            "The forward transcendental sequence (lokuttara paṭiccasamuppāda): suffering → faith (saddhā) → joy (pāmojja) → rapture (pīti) → tranquility (passaddhi) → happiness (sukha) → stillness (samādhi) → knowledge & vision of reality (yathābhūtañāṇadassana) → disenchantment (nibbidā) → dispassion (virāga) → liberation (vimutti) → knowledge of destruction of the taints (āsavakkhaye ñāṇa)",
            "The transformative role of Dukkha: suffering is not merely a problem, but the direct supporting condition (upanisā) that awakens genuine spiritual faith",
            "Preventing superficiality: craving causes suffering, yes, but within a multi-link conditional web"
          ],
          deepAnatomy: {
            title: "Beyond Slogans: Conditional Architecture of Suffering & Awakening",
            detail: "Common discourses often compress the truths into a single cause-effect soundbite: 'craving causes suffering'. SN 12.23 restores the Buddha's full structural genius. Suffering is conditional, arising from birth, existence, clinging, and craving back to ignorance. Most remarkably, Dukkha acts as the pivot: when met with wise discernment rather than blind despair, suffering becomes the supporting condition (upanisā) for faith (saddhā), initiating an unbroken upward spiral all the way to complete liberation."
          },
          suttaCentralUrl: "https://suttacentral.net/sn12.23/en/bodhi",
          excerptPali: "Iti kho, bhikkhave, avijjūpanisā saṅkhārā... jātūpanisaṁ dukkhaṁ, dukkhūpanisā saddhā, saddhūpanisaṁ pāmojjaṁ, pāmojjūpanisā pīti, pītūpanisā passaddhi, passaddhūpanisaṁ sukhaṁ, sukhūpaniso samādhi, samādhūpanisaṁ yathābhūtañāṇadassanaṁ, yathābhūtañāṇadassanūpanisā nibbidā, nibbidūpaniso virāgo, virāgūpanisā vimutti, vimuttūpanisaṁ khaye ñāṇaṁ.",
          excerptTrans: "Thus, monastics, with ignorance as supporting condition are formations... with birth as supporting condition is suffering; with suffering as supporting condition is faith; with faith as supporting condition joy; with joy rapture; with rapture tranquility; with tranquility happiness; with happiness concentration; with concentration knowledge and vision of things as they really are; with knowledge and vision disenchantment; with disenchantment dispassion; with dispassion liberation; with liberation knowledge of the destruction of the taints."
        },
        {
          suttaCode: "SN 56.13",
          paliTitle: "Khandha Sutta",
          transTitle: "The Aggregates",
          role: "Definitive Canonical Identification: Dukkha as the Clinging-Aggregates",
          summary: "Short, incisive, and doctrinally essential. It explicitly defines the Noble Truth of Suffering as identical to the five aggregates subject to clinging (pañcupādānakkhandhā). It then provides unambiguous canonical definitions of origin, cessation, and path, concluding with an urgent exhortation to cultivate contemplative practice on each truth.",
          establishes: [
            "Explicit canonical equation: The Noble Truth of Suffering = The Five Aggregates Subject to Clinging (pañcupādānakkhandhā)",
            "Exhaustive list of the five clinging-aggregates: form (rūpupādānakkhandho), feeling (vedanupādānakkhandho), perception (saññupādānakkhandho), formations (saṅkhārupādānakkhandho), consciousness (viññāṇupādānakkhandho)",
            "Definition of Origin: Craving leading to renewed existence (taṇhā ponobbhavikā)",
            "Definition of Cessation: Complete fading away and cessation of that very craving (yo tassāyeva taṇhāya asesavirāganirodho)",
            "Definition of Path: The Noble Eightfold Path from Right View to Right Stillness",
            "Urgent spiritual imperative: 'An exertion should be made to understand: This is suffering... this is origin... this is cessation... this is the path' (yogo karaṇīyo)"
          ],
          deepAnatomy: {
            title: "Primary Text Card: The Clinging-Aggregates as Dukkha",
            detail: "The Khandha Sutta strips away all room for vague abstraction. When the Buddha is asked to define the First Truth, he does not speak of bad days or unpleasant sensations; he points directly to the five aggregates gripped by clinging: form, feeling, perception, choices, and consciousness. To understand Dukkha is to understand how the mind grasps at these five processes as a self."
          },
          suttaCentralUrl: "https://suttacentral.net/sn56.13/en/bodhi",
          excerptPali: "Katamañca, bhikkhave, dukkhaṁ ariyasaccaṁ? Pañcupādānakkhandhātissa vacanīyaṁ, seyyathidaṁ: rūpupādānakkhandho, vedanupādānakkhandho, saññupādānakkhandho, saṅkhārupādānakkhandho, viññāṇupādānakkhandho... Tasmātiha, bhikkhave, 'idaṁ dukkhan'ti yogo karaṇīyo... 'ayaṁ dukkhanirodhagāminī paṭipadā'ti yogo karaṇīyo.",
          excerptTrans: "And what, monastics, is the Noble Truth of Suffering? It should be said: the five aggregates subject to clinging, that is to say: the form clinging-aggregate, feeling clinging-aggregate, perception clinging-aggregate, formations clinging-aggregate, consciousness clinging-aggregate... Therefore, monastics, an exertion should be made to understand: 'This is suffering'... 'This is the way leading to the cessation of suffering'."
        }
      ],
      canonicalExcerpts: [
        {
          source: "SN 56.11 — Proclamation of the Four Truths",
          pali: "Idam kho pana, bhikkhave, dukkham ariyasaccam: jātipi dukkhā, jarāpi dukkhā, maraṇampi dukkham... saṅkhittena pañcupādānakkhandhā dukkhā.",
          translation: "Now this, monastics, is the Noble Truth of Dukkha: Birth is stressful, aging is stressful, illness and death are stressful; sorrow, lamentation, pain, distress, and despair are stressful; association with the disliked is stressful; separation from the loved is stressful; not getting what one desires is stressful. In brief, the five clinging-aggregates are stressful."
        }
      ],
      householdApplication: [
        {
          title: "De-escalating Domestic & Workplace Friction",
          detail: "Recognize that Dukkha in family life or career arises not primarily from outside events, but from demanding that impermanent situations remain permanently pleasant and controllable. When stress peaks, pause and ask: 'What am I clinging to right now?'"
        },
        {
          title: "Financial & Sensory Balance (Kāma-Taṇhā)",
          detail: "Differentiate between legitimate sustenance needs and the infinite treadmill of consumerist craving. Cultivate contentment (santuṭṭhi) with what is acquired through ethical endeavor."
        },
        {
          title: "Walking the Eightfold Path as a Householder",
          detail: "The 8 factors divide into Sīla (Ethical Integrity: Right Speech, Action, Livelihood), Samādhi (Mental Cultivation: Right Effort, Mindfulness, Stillness), and Paññā (Discernment: Right View, Intention). A householder practices this across workplace negotiations, dinner table conversations, and evening study."
        }
      ],
      contemplativeInquiry: [
        "In the last 24 hours, where did I feel irritation or grief? What unspoken demand or craving was underlying it?",
        "Can I observe a moment of sensory pleasure without immediately clutching it, letting it arise and cease peacefully?"
      ]
    },
    pt: {
      title: "As Quatro Nobres Verdades",
      tagline: "A Estrutura Diagnóstica para a Libertação do Estresse Psicológico e do Enredamento Mundano",
      category: "Sabedoria Fundamental",
      keyPaliTerms: [
        { term: "Dukkha", meaning: "Insatisfatoriedade, estresse, atrito, instabilidade inerente a todos os fenômenos condicionados" },
        { term: "Samudaya", meaning: "Origem ou surgimento, especificamente enraizado no anseio compulsivo (Taṇhā)" },
        { term: "Nirodha", meaning: "Cessação, desatamento, a extinção definitiva da sede insaciável (Nibbāna)" },
        { term: "Magga", meaning: "O Nobre Caminho Óctuplo que conduz à cessação do estresse (Ariya Aṭṭhaṅgika Magga)" },
        { term: "Taṇhā", meaning: "Sede ardente, anseio febril (pelos sentidos, pelo vir-a-ser e pelo aniquilamento)" },
        { term: "Pañcupādānakkhandhā", meaning: "Os cinco agregados sujeitos ao apego (forma, sensação, percepção, formações mentais, consciência)" }
      ],
      overview: "As Quatro Nobres Verdades constituem o plano-mestre de toda a dispensação do Buda. Longe de representarem um pessimismo passivo, são um diagnóstico clínico supremo da existência humana: identificam a condição dolorosa (Dukkha), desvelam seu patógeno psicológico (o apego febril), proclamam a certeza da libertação (Cessação) e prescrevem a terapêutica de vida integral (O Nobre Caminho Óctuplo).",
      canonicalCorpus: [
        {
          suttaCode: "SN 56.11",
          paliTitle: "Dhammacakkappavattana Sutta",
          transTitle: "Colocando a Roda do Dhamma em Movimento",
          role: "O Texto Primário Indispensável & Proclamação",
          summary: "Este é o texto primário indispensável. Se este portal possui uma fonte única sobre as 'Quatro Nobres Verdades' que todo praticante deve encontrar, é este discurso primordial proferido no Parque das Gazelas em Isipatana.",
          establishes: [
            "Os dois extremos (indulgência sensual e automortificação)",
            "O Caminho do Meio (Majjhimā Paṭipadā)",
            "O Nobre Caminho Óctuplo (Ariya Aṭṭhaṅgika Magga)",
            "A proclamação das Quatro Nobres Verdades",
            "A definição de Dukkha e sua origem no anseio (Taṇhā)",
            "A cessação definitiva de Dukkha (Nirodha) e o caminho (Magga)",
            "As Três Fases e Doze Aspectos (Tiparivaṭṭa Dvādasākāra)",
            "A consumação do despertar supremo do Buda",
            "O surgimento do Olho do Dhamma (Dhammacakkhu) no venerável Koṇḍañña"
          ],
          coreDuty: {
            title: "A Estrutura Quádrupla de Prática e Ação (Catukicca)",
            intro: "Crucialmente, o sutta não se limita a anunciar que 'existem quatro verdades'. Ele estabelece uma estrutura operacional de quatro deveres deliberados de prática:",
            matrix: [
              { truth: "1. Dukkha (Sofrimento / Estresse)", paliDuty: "Pariññeyya", meaning: "Deve ser plenamente compreendido e investigado" },
              { truth: "2. Samudaya (Origem: Anseio / Taṇhā)", paliDuty: "Pahātabba", meaning: "Deve ser abandonado e renunciado" },
              { truth: "3. Nirodha (Cessação: Nibbāna)", paliDuty: "Sacchikātabba", meaning: "Deve ser diretamente realizado e testemunhado" },
              { truth: "4. Magga (O Nobre Caminho Óctuplo)", paliDuty: "Bhāvetabba", meaning: "Deve ser cultivado e desenvolvido no cotidiano" }
            ],
            note: "Essa distinção fundamental — compreender, abandonar, realizar e cultivar — deve permanecer como o eixo central do seu estudo e prática."
          },
          suttaCentralUrl: "https://suttacentral.net/sn56.11/en/bodhi",
          excerptPali: "Idam kho pana, bhikkhave, dukkham ariyasaccam: jātipi dukkhā, jarāpi dukkhā, maraṇampi dukkham... saṅkhittena pañcupādānakkhandhā dukkhā.",
          excerptTrans: "Isto, ó monges, é a Nobre Verdade de Dukkha: o nascimento é estresse, o envelhecimento é estresse, a doença e a morte são estresse; tristeza, lamentação, dor, angústia e desespero são estresse; associar-se com o desagradável é estresse; separar-se do que é amado é estresse; não obter o que se deseja é estresse. Em suma, os cinco agregados de apego são estresse."
        },
        {
          suttaCode: "MN 141",
          paliTitle: "Saccavibhaṅga Sutta",
          transTitle: "A Análise das Verdades",
          role: "A Anatomia Doutrinária Sistemática",
          summary: "SN 56.11 proclama as Verdades; MN 141 fornece a análise anatômica. Exposto pelo venerável Sāriputta com o aval do Buda, expande minuciosamente cada componente da primeira e da quarta verdade.",
          establishes: [
            "Transição dos sintomas superficiais para a raiz profunda do apego",
            "O inventário canônico de Dukkha: nascimento, envelhecimento, enfermidade, morte, pesar, lamento, dor, angústia e desespero",
            "O sofrimento relacional: associação com o desprazeroso e separação do que se ama",
            "A frustração psicológica: não obter o que se deseja",
            "O diagnóstico definitivo: os cinco agregados de apego (pañcupādānakkhandhā dukkhā)",
            "Definições canônicas individuais para cada um dos oito fatores do Nobre Caminho Óctuplo"
          ],
          deepAnatomy: {
            title: "Aprofundando em Pañcupādānakkhandhā (Os Agregados de Apego)",
            detail: "MN 141 permite que seu estudo ultrapasse a lista conhecida ('nascimento, velhice, doença, morte...') para alcançar a formulação canônica profunda: Pañcupādānakkhandhā dukkhā. O estresse não é apenas passar por momentos desagradáveis; é o apego compulsivo aos cinco agregados (forma, sensação, percepção, formações mentais e consciência)."
          },
          suttaCentralUrl: "https://suttacentral.net/mn141/en/sujato",
          excerptPali: "Katamañca, āvuso, dukkham ariyasaccaṁ? Jātipi dukkhā, jarāpi dukkhā, maraṇampi dukkhaṁ... saṅkhittena pañcupādānakkhandhā dukkhā.",
          excerptTrans: "E o que, amigos, é a Nobre Verdade de Dukkha? O nascimento é sofrimento, o envelhecimento é sofrimento, a morte é sofrimento; tristeza, lamentação, dor, angústia e desespero são sofrimento; associar-se ao que não se ama é sofrimento; separar-se do que se ama é sofrimento; não obter o que se deseja é sofrimento. Em resumo, os cinco agregados de apego são sofrimento."
        },
        {
          suttaCode: "MN 9",
          paliTitle: "Sammādiṭṭhi Sutta",
          transTitle: "Visão Correta",
          role: "As Quatro Nobres Verdades como Visão Correta",
          summary: "Um dos textos mais importantes para compreender as Quatro Nobres Verdades não como filosofia abstrata e isolada, mas como o motor mestre da Visão Correta (Sammādiṭṭhi).",
          establishes: [
            "Visão Correta explicada através das raízes hábeis e inábeis (kusala & akusala)",
            "Visão Correta através dos quatro nutrimentos da existência (comida material, contato, volição mental, consciência)",
            "As Quatro Verdades como a fórmula diagnóstica universal aplicada a todos os fenômenos",
            "Integração direta entre as Quatro Verdades e a Origem Dependente (Paṭiccasamuppāda)",
            "Erradicação das tendências latentes obsessivas (anusaya)",
            "Discernir Dukkha, sua origem, cessação e o caminho como a marca fundamental do nobre discípulo"
          ],
          deepAnatomy: {
            title: "As Quatro Verdades Como Lente Diagnóstica Viva",
            detail: "O venerável Sāriputta demonstra que as Quatro Verdades fazem parte indissociável de Sammādiṭṭhi. Em vez de perguntar abstratamente 'O que são as Quatro Verdades?', este sutta treina o praticante a examinar qualquer situação através das lentes: Qual é o atrito? Qual é sua origem? Qual é sua cessação? Qual é o caminho prático para a pacificação?"
          },
          suttaCentralUrl: "https://suttacentral.net/mn9/en/sujato",
          excerptPali: "Yato kho, āvuso, ariyasāvako dukkhañca pajānāti, dukkhasamudayañca pajānāti, dukkhanirodhañca pajānāti, dukkhanirodhagāminiñca paṭipadaṁ pajānāti; ettāvatāpi kho, āvuso, ariyasāvako sammādiṭṭhi hoti...",
          excerptTrans: "Quando um nobre discípulo compreende o sofrimento, sua origem, sua cessação e o caminho que conduz à sua cessação, até esse ponto ele é alguém de visão correta, cuja visão é reta, que possui confiança inabalável no ensinamento e chegou ao verdadeiro Dhamma."
        },
        {
          suttaCode: "MN 28",
          paliTitle: "Mahāhatthipadopama Sutta",
          transTitle: "O Grande Discurso sobre a Símile da Pegada do Elefante",
          role: "O Recipiente Mestre de Todos os Ensinamentos & Os Agregados de Apego",
          summary: "Particularmente essencial para aprofundar a Primeira Nobre Verdade. O venerável Sāriputta vincula as Quatro Verdades aos cinco agregados de apego, impedindo que a explicação de Dukkha degenere em superficialidade psicológica ('apenas ter dias ruins').",
          establishes: [
            "A Símile da Pegada do Elefante: assim como todas as pegadas de animais cabem na pegada do elefante, todas as qualidades nobres estão contidas nas Quatro Nobres Verdades",
            "Exame canônico aprofundado da Forma Material (Rūpa) através dos elementos físicos internos e externos (terra, água, fogo, ar)",
            "A contemplação da impermanência cósmica em estruturas físicas gigantescas e no corpo humano",
            "Progressão direta do contato sensorial para sensação, percepção, formações mentais e consciência",
            "A constatação de que 'os cinco agregados de apego são Dukkha' (pañcupādānakkhandhā dukkhā)",
            "Proteção contra a redução psicológica rasa: o sofrimento é o apego existencial ao que é efêmero"
          ],
          deepAnatomy: {
            title: "A Pegada do Elefante & Além da Superficialidade",
            detail: "Iniciantes frequentemente supõem que Dukkha significa apenas 'experiências desagradáveis'. Isso não é suficiente. A formulação mais profunda é: pañcupādānakkhandhā dukkhā. MN 28 fornece uma rota canônica sólida para investigar forma, sensação, percepção, formações e consciência, comprovando que a paz se estabelece quando o apego a esses processos é desfeito."
          },
          suttaCentralUrl: "https://suttacentral.net/mn28/en/sujato",
          excerptPali: "Seyyathāpi, āvuso, yāni kānici jaṅgalānaṁ pāṇānaṁ padajātāni, sabbāni tāni hatthipade samodhānaṁ gacchanti... evameva kho, āvuso, ye keci kusalā dhammā, sabbe te catūsu ariyasaccesu saṅgahaṁ gacchanti.",
          excerptTrans: "Assim como a pegada de qualquer ser vivo que caminha sobre a terra cabe dentro da pegada de um elefante; da mesma forma, todos os ensinamentos e qualidades nobres estão compreendidos nas Quatro Nobres Verdades."
        },
        {
          suttaCode: "SN 22.59",
          paliTitle: "Anattalakkhaṇa Sutta",
          transTitle: "A Característica de Não-Eu",
          role: "Investigação Profunda da 1ª Verdade: Exame Sistemático dos Agregados",
          summary: "Embora não seja tecnicamente uma exposição formal das Quatro Verdades, este texto é indispensável para a rota de aprendizado. Por quê? Porque o SN 56.11 define categoricamente que a essência de Dukkha são 'os cinco agregados sujeitos ao apego' (pañcupādānakkhandhā dukkhā), e o SN 22.59 é o texto canônico primordial que examina minuciosamente esses mesmos agregados.",
          establishes: [
            "Os cinco agregados: rūpa (forma), vedanā (sensação), saññā (percepção), saṅkhārā (formações volitivas) e viññāṇa (consciência)",
            "O teste irrefutável do controle: se o corpo ou a mente fossem um eu soberano, não conduziriam à aflição e seria possível ordenar 'que meu corpo seja assim'",
            "A negação categórica de posse e identidade: 'Isto não é meu, isto eu não sou, isto não é meu eu' (N'etaṁ mama, n'eso'hamasmi, na meso attā)",
            "A progressão clássica theravāda: cinco agregados → impermanência (anicca) → insatisfatoriedade (dukkha) → não-eu (anattā) → desencantamento (nibbidā) → despaixão (virāga) → libertação (vimutti)",
            "Tratado como um aprofundamento vital vinculado à primeira nobre verdade, em vez de tratá-lo artificialmente como um sutta das Quatro Verdades"
          ],
          deepAnatomy: {
            title: "A Progressão: Dos Agregados de Apego à Libertação",
            detail: "O SN 22.59 fornece a engrenagem exata para cumprir o dever prático da primeira verdade (pariññeyya — compreensão plena). Ao constatar que cada agregado é impermanente (anicca), o que é impermanente é insatisfatório (dukkha), e o que é insatisfatório não pode legitimamente ser considerado como 'Isto é meu, este sou eu, isto é meu eu' (anattā). Percebendo isso com sabedoria reta, o nobre discípulo se desencanta (nibbindati), pelo desencanto atinge a despaixão (virajjati), e pela despaixão encontra a libertação definitiva (vimuccati)."
          },
          suttaCentralUrl: "https://suttacentral.net/sn22.59/en/bodhi",
          excerptPali: "Rūpaṁ, bhikkhave, anattā... N'etaṁ mama, n'eso'hamasmi, na meso attā'ti: evametaṁ yathābhūtaṁ sammappaññāya daṭṭhabbaṁ... Evaṁ passaṁ, bhikkhave, sutavā ariyasāvako rūpasmimpi nibbindati, vedanāyapi nibbindati, saññāyapi nibbindati, saṅkhāresupi nibbindati, viññāṇasmimpi nibbindati. Nibbindaṁ virajjati; virāgā vimuccati.",
          excerptTrans: "A forma material, monges, é não-eu... 'Isto não é meu, isto eu não sou, isto não é o meu eu': assim deve ser visto como realmente é com correta sabedoria... Vendo assim, monges, o nobre discípulo instruído experimenta o desencantamento em relação à forma, à sensação, à percepção, às formações mentais e à consciência. Pelo desencantamento surge a despaixão; pela despaixão ele é libertado."
        },
        {
          suttaCode: "SN 12.23",
          paliTitle: "Upanisa Sutta",
          transTitle: "Condições de Sustentação",
          role: "Condicionalidade de Dukkha & O Surgimento Dependente Transcendental",
          summary: "Um dos textos basilares para esclarecer a relação viva entre Dukkha, suas causas e o caminho de libertação. É indispensável porque situa o sofrimento e a emancipação dentro de uma estrutura condicional rigorosa, prevenindo o reducionismo comum do slogan 'o desejo causa o sofrimento'. O ensinamento do Buda é muito mais estruturalmente refinado do que uma simples fórmula psicológica direta.",
          establishes: [
            "As Quatro Verdades integradas na grande arquitetura da condicionalidade (Idappaccayatā)",
            "O rastreamento regressivo de Dukkha: sofrimento (dukkha) ← nascimento (jāti) ← existência (bhava) ← apego (upādāna) ← anseio (taṇhā)... ← ignorância (avijjā)",
            "A espiral transcendental progressiva (lokuttara paṭiccasamuppāda): sofrimento → fé (saddhā) → alegria (pāmojja) → êxtase (pīti) → tranquilidade (passaddhi) → felicidade (sukha) → concentração/estabilidade (samādhi) → conhecimento e visão das coisas como elas são (yathābhūtañāṇadassana) → desencantamento (nibbidā) → despaixão (virāga) → libertação (vimutti) → conhecimento da extinção das impurezas (āsavakkhaye ñāṇa)",
            "O papel transformador de Dukkha: o sofrimento não é apenas uma ferida, mas a condição prévia de apoio (upanisā) que desperta a fé sincera",
            "Superação de slogans superficiais: o anseio causa sofrimento dentro de uma malha causal condicionada"
          ],
          deepAnatomy: {
            title: "Além de Slogans: A Arquitetura Condicional da Libertação",
            detail: "Muitas exposições reduzem o ensinamento a um lema superficial: 'o desejo causa sofrimento'. O SN 12.23 revela a genialidade estrutural do Buda. O sofrimento emerge condicionalmente através do nascimento, apego e anseio a partir da ignorância. Extraordinariamente, o próprio sofrimento torna-se o trampolim: quando enfrentado com sabedoria em vez de desespero cego, Dukkha torna-se a condição de sustentação (upanisā) para a fé (saddhā), impulsionando uma espiral ascendente ininterrupta até a emancipação total."
          },
          suttaCentralUrl: "https://suttacentral.net/sn12.23/en/bodhi",
          excerptPali: "Iti kho, bhikkhave, avijjūpanisā saṅkhārā... jātūpanisaṁ dukkhaṁ, dukkhūpanisā saddhā, saddhūpanisaṁ pāmojjaṁ, pāmojjūpanisā pīti, pītūpanisā passaddhi, passaddhūpanisaṁ sukhaṁ, sukhūpaniso samādhi, samādhūpanisaṁ yathābhūtañāṇadassanaṁ, yathābhūtañāṇadassanūpanisā nibbidā, nibbidūpaniso virāgo, virāgūpanisā vimutti, vimuttūpanisaṁ khaye ñāṇaṁ.",
          excerptTrans: "Assim, ó monges, com a ignorância como condição prévia surgem as formações... com o nascimento como condição prévia surge o sofrimento; com o sofrimento como condição prévia surge a fé; com a fé surge a alegria; com a alegria o êxtase; com o êxtase a tranquilidade; com a tranquilidade a felicidade; com a felicidade a concentração estável; com a concentração o conhecimento e visão das coisas como elas realmente são; com isso o desencantamento; com o desencantamento a despaixão; com a despaixão a libertação; com a libertação o conhecimento da destruição das impurezas."
        },
        {
          suttaCode: "SN 56.13",
          paliTitle: "Khandha Sutta",
          transTitle: "Os Agregados",
          role: "Identificação Canônica Primária: Dukkha como os Agregados de Apego",
          summary: "Conciso, direto e doutrinariamente essencial. Define categoricamente: a Nobre Verdade do Sofrimento equivale aos cinco agregados sujeitos ao apego (pañcupādānakkhandhā). Fornece as definições canônicas incontestáveis de origem, cessação e caminho, concluindo com uma solene exortação ao esforço contemplativo sobre cada verdade.",
          establishes: [
            "Equação canônica inequívoca: A Nobre Verdade de Dukkha = Os Cinco Agregados Sujeitos ao Apego (pañcupādānakkhandhā)",
            "Enumeração formal dos cinco agregados de apego: forma (rūpupādānakkhandho), sensação (vedanupādānakkhandho), percepção (saññupādānakkhandho), formações mentais (saṅkhārupādānakkhandho) e consciência (viññāṇupādānakkhandho)",
            "Definição de Origem: O anseio que conduz ao renascimento renovado (taṇhā ponobbhavikā)",
            "Definição de Cessação: O desvanecimento completo, abandono e renúncia desse mesmo anseio (asesavirāganirodho)",
            "Definição do Caminho: O Nobre Caminho Óctuplo da Visão Correta à Concentração Correta",
            "O imperativo de esforço espiritual urgente: 'Portanto, monges, um esforço resoluto deve ser empreendido: Isto é sofrimento... Isto é a origem... Isto é a cessação... Isto é o caminho' (yogo karaṇīyo)"
          ],
          deepAnatomy: {
            title: "Texto Primário: Os Agregados de Apego como a Essência de Dukkha",
            detail: "O Khandha Sutta extingue qualquer ambiguidade filosófica. Ao definir a Primeira Nobre Verdade, o Buda não descreve aborrecimentos corriqueiros; ele aponta diretamente para os cinco agregados aprisionados pelo apego: o corpo, as sensações, as percepções, as formações e a consciência. Compreender Dukkha é discernir precisamente como a mente se agarra a esses cinco fenômenos como sendo 'eu' ou 'meu'."
          },
          suttaCentralUrl: "https://suttacentral.net/sn56.13/en/bodhi",
          excerptPali: "Katamañca, bhikkhave, dukkhaṁ ariyasaccaṁ? Pañcupādānakkhandhātissa vacanīyaṁ, seyyathidaṁ: rūpupādānakkhandho, vedanupādānakkhandho, saññupādānakkhandho, saṅkhārupādānakkhandho, viññāṇupādānakkhandho... Tasmātiha, bhikkhave, 'idaṁ dukkhan'ti yogo karaṇīyo... 'ayaṁ dukkhanirodhagāminī paṭipadā'ti yogo karaṇīyo.",
          excerptTrans: "E o que, monges, é a Nobre Verdade de Dukkha? Deve-se responder: os cinco agregados sujeitos ao apego, a saber: o agregado de apego da forma, da sensação, da percepção, das formações mentais e da consciência... Portanto, ó monges, um esforço diligente deve ser feito para compreender: 'Isto é sofrimento'... 'Este é o caminho que conduz à cessação do sofrimento'."
        }
      ],
      canonicalExcerpts: [
        {
          source: "SN 56.11 — Proclamação das Quatro Verdades",
          pali: "Idam kho pana, bhikkhave, dukkham ariyasaccam: jātipi dukkhā, jarāpi dukkhā, maraṇampi dukkham... saṅkhittena pañcupādānakkhandhā dukkhā.",
          translation: "Isto, ó monges, é a Nobre Verdade de Dukkha: o nascimento é estresse, o envelhecimento é estresse, a doença e a morte são estresse; tristeza, lamentação, dor, angústia e desespero são estresse; associar-se com o desagradável é estresse; separar-se do que é amado é estresse; não obter o que se deseja é estresse. Em suma, os cinco agregados de apego são estresse."
        }
      ],
      householdApplication: [
        {
          title: "Desarmando Atritos Domésticos e Profissionais",
          detail: "Reconheça que o sofrimento nas relações familiares e no trabalho não provém primariamente dos fatos externos, mas de exigir que situações impermanentes permaneçam eternamente agradáveis e controláveis. Quando a tensão subir, pergunte-se: 'A que exatamente estou me apegando agora?'"
        },
        {
          title: "Equilíbrio Financeiro e Sensorial (Kāma-Taṇhā)",
          detail: "Diferencie as necessidades legítimas de sustento da esteira infinita do consumismo impulsivo. Cultive o contentamento sereno (santuṭṭhi) com os bens adquiridos pelo trabalho honesto."
        },
        {
          title: "Praticando o Nobre Caminho Óctuplo no Lar",
          detail: "Os 8 fatores dividem-se em Sīla (Conduta Ética: Fala, Ação e Modo de Vida Corretos), Samādhi (Cultivo Mental: Esforço, Atenção Plena e Concentração) e Paññā (Sabedoria: Visão e Intenção Corretas). O leigo pratica esses pilares em negociações profissionais, diálogos à mesa e no estudo noturno."
        }
      ],
      contemplativeInquiry: [
        "Nas últimas 24 horas, onde senti irritação ou desapontamento? Que expectativa ou anseio não expresso estava por trás disso?",
        "Consigo vivenciar uma sensação agradável sem me agarrar impulsivamente a ela, permitindo que surja e cesse em paz?"
      ]
    }
  },
  {
    id: "paticcasamuppada",
    number: "02",
    paliTitle: "Paṭiccasamuppāda",
    canonicalRef: "Mahānidāna Sutta (DN 15), Paṭiccasamuppāda-vibhaṅga Sutta (SN 12.2)",
    en: {
      title: "Dependent Arising",
      tagline: "The Cosmic & Psychological Law of Interconnected Causality",
      category: "Deep Insight",
      keyPaliTerms: [
        { term: "Idappaccayatā", meaning: "Specific conditionality: 'When this exists, that comes to be; with the arising of this, that arises.'" },
        { term: "Phassa", meaning: "Sensory contact (eye-object-consciousness, ear-sound-consciousness, etc.)" },
        { term: "Vedanā", meaning: "Feeling tone (pleasant, painful, neither-painful-nor-pleasant)" },
        { term: "Upādāna", meaning: "Clinging, fuel, grasping onto views, pleasure, rites, and self-identity" },
        { term: "Saṅkhāra", meaning: "Volitional formations, mental fabrications, conditioned karmic patterns" }
      ],
      overview: "Dependent Arising is the heart of the Buddha's profound realization beneath the Bodhi tree. It demonstrates that nothing exists in isolation or by sovereign accident; everything arises dependent on conditions and ceases when those conditions dissolve. For the lay practitioner, understanding the chain between Contact (Phassa), Feeling (Vedanā), and Craving (Taṇhā) provides the master key to breaking reactive habits.",
      canonicalExcerpts: [
        {
          source: "SN 12.65 — The Ancient Path",
          pali: "Imasmiṁ sati idaṁ hoti, imassuppādā idaṁ uppajjati; imasmiṁ asati idaṁ na hoti, imassa nirodhā idaṁ nirujjhati.",
          translation: "When this exists, that comes to be; with the arising of this, that arises. When this does not exist, that does not come to be; with the cessation of this, that ceases."
        },
        {
          source: "DN 15 — Mahānidāna Sutta",
          pali: "Gambhīro cāyaṁ, ānanda, paṭiccasamuppādo gambhīrāvabhāso ca.",
          translation: "Deep indeed, Ānanda, is this Dependent Arising, and deep does it appear. It is through not understanding, through not penetrating this doctrine, that this generation has become like a tangled ball of string."
        }
      ],
      householdApplication: [
        {
          title: "The Golden Gap: Between Feeling (Vedanā) & Reaction (Taṇhā)",
          detail: "When an unpleasant email arrives or a sharp remark is spoken at home, unpleasant feeling (dukkha-vedanā) arises automatically. Ordinary instinct reacts with immediate anger. Dependent Arising reveals that feeling does NOT have to become craving/aversion if mindfulness catches it at the contact point."
        },
        {
          title: "Dismantling Blame Culture",
          detail: "Seeing that family members and colleagues act according to their own conditioning, fears, and ignorance dissolves personal resentment. One shifts from anger to curiosity: 'What conditions caused this behavior, and how can skillful conditions be introduced?'"
        },
        {
          title: "Habit Transformation in Daily Routines",
          detail: "Every addiction (phone scrolling, comfort eating, compulsive shopping) follows the links: Trigger → Contact → Feeling → Craving → Grasping. Interrupt the chain at the trigger level."
        }
      ],
      contemplativeInquiry: [
        "Can I identify the exact bodily sensation (vedanā) that precedes my impulsive urges to speak or check my devices?",
        "When someone offends me, what web of unseen causes and conditions might be driving their words?"
      ]
    },
    pt: {
      title: "Origem Dependente",
      tagline: "A Lei Cósmica e Psicológica da Causalidade Interconectada",
      category: "Discernimento Profundo",
      keyPaliTerms: [
        { term: "Idappaccayatā", meaning: "Condicionalidade específica: 'Quando isto existe, aquilo vem a ser; com o surgir disto, aquilo surge.'" },
        { term: "Phassa", meaning: "Contato sensorial (órgão dos sentidos, objeto correspondente e consciência)" },
        { term: "Vedanā", meaning: "Tom afetivo da sensação (agradável, doloroso ou nem doloroso nem agradável)" },
        { term: "Upādāna", meaning: "Apego, combustível mental, apego a prazeres sensoriais, opiniões e identidade pessoal" },
        { term: "Saṅkhāra", meaning: "Formações volitivas, fabricações mentais, padrões cármicos condicionados" }
      ],
      overview: "A Origem Dependente é o coração da iluminação do Buda sob a árvore Bodhi. Demonstra que nada subsiste isoladamente ou por mero acaso; tudo surge dependente de condições e cessa quando tais condições se extinguem. Para o praticante leigo, compreender o elo entre Contato (Phassa), Sensação (Vedanā) e Desejo (Taṇhā) é a chave-mestra para desarmar impulsos reativos.",
      canonicalExcerpts: [
        {
          source: "SN 12.65 — O Caminho Antigo",
          pali: "Imasmiṁ sati idaṁ hoti, imassuppādā idaṁ uppajjati; imasmiṁ asati idaṁ na hoti, imassa nirodhā idaṁ nirujjhati.",
          translation: "Quando isto existe, aquilo vem a ser; com o surgimento disto, aquilo surge. Quando isto inexiste, aquilo não vem a ser; com a cessação disto, aquilo cessa."
        },
        {
          source: "DN 15 — Mahānidāna Sutta",
          pali: "Gambhīro cāyaṁ, ānanda, paṭiccasamuppādo gambhīrāvabhāso ca.",
          translation: "Profunda em verdade, Ānanda, é esta Origem Dependente, e profunda ela parece ser. É por não compreender, por não penetrar este ensinamento, que esta geração tornou-se como um emaranhado novelo de fios."
        }
      ],
      householdApplication: [
        {
          title: "O Espaço de Ouro: Entre Sensação (Vedanā) e Reação (Taṇhā)",
          detail: "Quando chega uma mensagem desagradável ou alguém faz uma crítica em família, o desconforto sensorial (dukkha-vedanā) surge no corpo. O hábito reage com irritação imediata. A Origem Dependente ensina que a sensação NÃO precisa virar aversão se houver presença consciente no momento do contato."
        },
        {
          title: "Desmantelando a Cultura da Culpa",
          detail: "Compreender que colegas e familiares agem impelidos por seus próprios medos e condicionamentos passados dissolve o ressentimento. O foco migra da raiva para o discernimento: 'Que causas geraram essa atitude e como posso introduzir condições mais nobres?'"
        },
        {
          title: "Transformação de Hábitos Cotidianos",
          detail: "Comportamentos compulsivos (rolar redes sociais, compras por impulso) seguem os elos: Gatilho → Contato → Sensação Agradável → Anseio → Apego. Desconecte o ciclo reconhecendo o gatilho inicial."
        }
      ],
      contemplativeInquiry: [
        "Consigo perceber a sensação física exata (vedanā) que antecede meus impulsos imediatos de falar ou checar o celular?",
        "Quando alguém me ofende, qual rede oculta de causas e pressões pode estar governando a atitude dessa pessoa?"
      ]
    }
  },
  {
    id: "bhavana",
    number: "03",
    paliTitle: "Bhāvanā",
    canonicalRef: "Ānāpānasati Sutta (MN 118), Yuganaddha Sutta (AN 4.170)",
    en: {
      title: "Meditation & Mental Cultivation",
      tagline: "Training the Mind in Steadiness (Samatha) and Penetrative Clarity (Vipassanā)",
      category: "Contemplative Practice",
      keyPaliTerms: [
        { term: "Samatha", meaning: "Serenity, tranquility, calming the dispersed fluctuations of mind" },
        { term: "Vipassanā", meaning: "Clear-seeing, penetrative insight into impermanence, suffering, and non-self" },
        { term: "Ānāpāna", meaning: "In-and-out breath awareness, the anchor for both stillness and insight" },
        { term: "Nīvaraṇa", meaning: "The Five Hindrances: sensual desire, ill-will, sloth/torpor, restlessness, doubt" },
        { term: "Jhāna", meaning: "Meditative absorptions, states of profound unshakeable stillness and unified attention" }
      ],
      overview: "Bhāvanā literally means 'development' or 'bringing into being'. Rather than being an escape from the world, mental cultivation is essential psychological hygiene and strength training for the householder. Combining Samatha (tranquil focus) and Vipassanā (insight into reality), the mind becomes an unshakeable sanctuary amidst the turbulence of modern vocational and domestic duties.",
      canonicalExcerpts: [
        {
          source: "MN 118 — Ānāpānasati Sutta",
          pali: "So satova assasati, satova passasati. Dīghaṁ vā assasanto 'dīghaṁ assasāmī'ti pajānāti...",
          translation: "Mindfully he breathes in, mindfully he breathes out. Breathing in long, he discerns: 'I am breathing in long'; or breathing out long, he discerns: 'I am breathing out long'... Breathing in sensitive to the whole body, he trains himself: 'I will breathe in sensitive to the whole body.'"
        },
        {
          source: "Dhammapada v. 282",
          pali: "Yogā ve jāyatī bhūri, ayogā bhūrisaṅkhayo; Etaṁ dvedhāpathaṁ ñatvā, bhavāya vibhavāya ca.",
          translation: "From meditation wisdom is born; without meditation wisdom decays. Knowing this two-fold path of gain and loss, conduct yourself so that wisdom may grow."
        }
      ],
      householdApplication: [
        {
          title: "Establishing the Householder's Daily Hermitage",
          detail: "Dedicate 20–30 minutes at dawn before the household awakes. Use the physical breath at the nostrils as an unshakeable home base. When thoughts of bills, work deadlines, and projects arise, acknowledge them gently without clinging and return to the breath."
        },
        {
          title: "Overcoming the Five Household Hindrances",
          detail: "Sensory greed (craving screen stimulation), ill-will (lingering family grudges), lethargy (mental fog), restlessness (overstimulated nervous system), and doubt. Meet each hindrance with clear recognition: 'A hindrance is present; it is conditioned and impermanent.'"
        },
        {
          title: "Micro-Stillness Moments During Transit & Work",
          detail: "Use red lights, elevators, kettle boiling, or computer boot-ups as natural reminder points. Take three conscious, grounded breaths to reset the nervous system before responding to demanding situations."
        }
      ],
      contemplativeInquiry: [
        "Is my daily study and practice steady like the patient drop of water, or sporadic and volatile?",
        "Can I observe the quiet stillness underlying worldly sounds right now?"
      ]
    },
    pt: {
      title: "Cultivo Mental & Meditação",
      tagline: "Treinamento da Mente em Estabilidade (Samatha) e Clareza Penetrante (Vipassanā)",
      category: "Prática Contemplativa",
      keyPaliTerms: [
        { term: "Samatha", meaning: "Serenidade, tranquilidade, pacificação das flutuações e dispersões mentais" },
        { term: "Vipassanā", meaning: "Visão clara, discernimento penetrante da impermanência, insatisfatoriedade e não-eu" },
        { term: "Ānāpāna", meaning: "Atenção plena à respiração, a âncora suprema de calma e lucidez" },
        { term: "Nīvaraṇa", meaning: "Os Cinco Obstáculos: desejo sensual, má-vontade, torpor/preguiça, agitação e dúvida cética" },
        { term: "Jhāna", meaning: "Absorções meditativas, estados de profunda estabilidade e atenção unificada" }
      ],
      overview: "Bhāvanā significa literalmente 'desenvolvimento' ou 'fazer florescer'. Longe de ser uma fuga da realidade, o cultivo mental é a higiene e a musculação psicológica do praticante leigo. Unindo Samatha (foco sereno) e Vipassanā (investigação lúcida da impermanência), a mente converte-se em um refúgio inabalável frente às turbulências do trabalho e da família.",
      canonicalExcerpts: [
        {
          source: "MN 118 — Ānāpānasati Sutta",
          pali: "So satova assasati, satova passasati. Dīghaṁ vā assasanto 'dīghaṁ assasāmī'ti pajānāti...",
          translation: "Atento ele inspira, atento ele expira. Inspirando longo, ele discerne: 'Inspiro longo'; ou expirando longo: 'Expiro longo'... Inspirando consciente de todo o corpo, ele se treina: 'Inspirarei consciente de todo o corpo'."
        },
        {
          source: "Dhammapada v. 282",
          pali: "Yogā ve jāyatī bhūri, ayogā bhūrisaṅkhayo; Etaṁ dvedhāpathaṁ ñatvā, bhavāya vibhavāya ca.",
          translation: "Da meditação nasce a sabedoria; sem meditação, a sabedoria definha. Conhecendo esta dupla senda do ganho e da perda, conduza-se de modo que a sabedoria floresça."
        }
      ],
      householdApplication: [
        {
          title: "Estabelecendo o 'Eremitério Matinal' no Lar",
          detail: "Reserve de 20 a 30 minutos na alvorada antes que a casa desperte. Use a sensação da respiração nas narinas como base inabalável. Quando surgirem preocupações financeiras e tarefas de trabalho, reconheça-as sem reagir e retorne serenamente ao fluxo do ar."
        },
        {
          title: "Superando os Cinco Obstáculos no Cotidiano",
          detail: "Ganância sensorial (busca por dopamina em telas), má-vontade (rancores com parentes), torpor (névoa mental), agitação e dúvida. Acolha cada obstáculo sem autocrítica: 'Um obstáculo está presente; ele é condicionado e impermanente.'"
        },
        {
          title: "Micro-Pausas Lúcidas no Trabalho e Trânsito",
          detail: "Use semáforos, elevadores ou o tempo de inicialização do computador como sinais naturais de presença. Respire três vezes com plena consciência corporal antes de responder a cobranças difíceis."
        }
      ],
      contemplativeInquiry: [
        "Minha prática de reflexão é constante como a gota contínua de água, ou inconstante e esporádica?",
        "Consigo perceber o silêncio de base por trás dos ruídos do mundo neste exato instante?"
      ]
    }
  },
  {
    id: "satipatthana",
    number: "04",
    paliTitle: "Satipaṭṭhāna",
    canonicalRef: "Mahāsatipaṭṭhāna Sutta (DN 22), Satipaṭṭhāna Sutta (MN 10)",
    en: {
      title: "Foundations of Mindfulness",
      tagline: "The Direct Path to Purification, Overcoming Sorrow, and Awakening",
      category: "Contemplative Practice",
      keyPaliTerms: [
        { term: "Kāyānupassanā", meaning: "Mindful contemplation of the body (breath, postures, sensations)" },
        { term: "Vedanānupassanā", meaning: "Mindful contemplation of feeling tones (pleasant, painful, neutral)" },
        { term: "Cittānupassanā", meaning: "Mindful contemplation of states of mind (lustful, angry, distracted, steady)" },
        { term: "Dhammānupassanā", meaning: "Contemplation of mental phenomena (5 hindrances, 5 aggregates, 7 factors of awakening)" },
        { term: "Sampajañña", meaning: "Clear situational comprehension, knowing the purpose and suitability of actions" }
      ],
      overview: "The Buddha declared Satipaṭṭhāna to be the 'ekāyano maggo' — the direct, non-deviating highway for overcoming sorrow and lamentation. It establishes somatic and psychological awareness across four panoramic foundations: Body, Feelings, Mind, and Mental Phenomena. For the layperson, Satipaṭṭhāna bridges study and action, transforming everyday chores and meetings into spiritual arenas.",
      canonicalExcerpts: [
        {
          source: "MN 10 — The Satipaṭṭhāna Charter",
          pali: "Ekāyano ayaṁ, bhikkhave, maggo sattānaṁ visuddhiyā, sokaparidevānaṁ samatikkamāya... yadidaṁ cattāro satipaṭṭhānā.",
          translation: "This is the direct path for the purification of beings, for the surmounting of sorrow and lamentation, for the disappearance of pain and grief, for the attainment of the true way: namely, the four foundations of mindfulness."
        },
        {
          source: "DN 22 — Postures of Daily Life",
          pali: "Gacchanto vā 'gacchāmī'ti pajānāti, ṭhito vā 'ṭhitomhī'ti pajānāti, nisinno vā 'nisinnomhī'ti pajānāti...",
          translation: "When walking, the practitioner discerns: 'I am walking'; when standing, 'I am standing'; when sitting, 'I am sitting'; when lying down, 'I am lying down'... In eating, drinking, chewing, and savoring, he acts with clear comprehension."
        }
      ],
      householdApplication: [
        {
          title: "Body-Anchor (Kāyānupassanā) During Household Tasks",
          detail: "When washing dishes, carrying groceries, or typing on a keyboard, maintain peripheral awareness of physical sensations, foot contact with the floor, and muscle tension in the shoulders and jaw."
        },
        {
          title: "Watching Feeling Tones (Vedanānupassanā) in Conversations",
          detail: "Notice the instant a conversation turns challenging or flattering. Discern the raw feeling tone (pleasant/unpleasant) before the ego crafts a defensive or prideful reaction."
        },
        {
          title: "Recognizing Emotional Weather (Cittānupassanā)",
          detail: "When entering the home after a grueling workday, take stock: 'Is the mind contracted, weary, or agitated?' Knowing the state of mind prevents projecting workplace frustration onto family."
        }
      ],
      contemplativeInquiry: [
        "Where is my body right now? Can I feel the weight of my posture and the gentle rhythm of breathing?",
        "Can I let an emotional mood exist without fighting it or identifying as it?"
      ]
    },
    pt: {
      title: "Fundamentos da Atenção Plena",
      tagline: "O Caminho Direto para a Purificação, Superação da Tristeza e Despertar",
      category: "Prática Contemplativa",
      keyPaliTerms: [
        { term: "Kāyānupassanā", meaning: "Contemplação do corpo (respiração, posturas, sensações somáticas)" },
        { term: "Vedanānupassanā", meaning: "Contemplação das sensações afetivas (agradáveis, dolorosas ou neutras)" },
        { term: "Cittānupassanā", meaning: "Contemplação dos estados da mente (apegada, irritada, dispersa, focada)" },
        { term: "Dhammānupassanā", meaning: "Contemplação dos fenômenos e ensinamentos (obstáculos, agregados, fatores do despertar)" },
        { term: "Sampajañña", meaning: "Clara compreensão situacional da utilidade e nobreza dos atos" }
      ],
      overview: "O Buda declarou Satipaṭṭhāna como 'ekāyano maggo' — a via direta e infalível para superar a aflição e o desespero. Estabelece a lucidez sobre quatro fundamentos panorâmicos: Corpo, Sensações, Mente e Objetos Mentais. Para a pessoa leiga, Satipaṭṭhāna unifica teoria e vida cotidiana, transformando tarefas rotineiras e reuniões profissionais em solo fértil de clareza.",
      canonicalExcerpts: [
        {
          source: "MN 10 — A Declaração de Satipaṭṭhāna",
          pali: "Ekāyano ayaṁ, bhikkhave, maggo sattānaṁ visuddhiyā, sokaparidevānaṁ samatikkamāya... yadidaṁ cattāro satipaṭṭhānā.",
          translation: "Este é o caminho direto para a purificação dos seres, para a superação da tristeza e do pranto, para o fim da dor e do desespero, para a realização do verdadeiro método: a saber, os quatro fundamentos da atenção plena."
        },
        {
          source: "DN 22 — As Posturas do Cotidiano",
          pali: "Gacchanto vā 'gacchāmī'ti pajānāti, ṭhito vā 'ṭhitomhī'ti pajānāti, nisinno vā 'nisinnomhī'ti pajānāti...",
          translation: "Ao caminhar, o praticante compreende: 'Estou caminhando'; ao parar em pé: 'Estou em pé'; ao sentar: 'Estou sentado'; ao deitar: 'Estou deitado'... Ao comer, beber e saborear, age com clara compreensão."
        }
      ],
      householdApplication: [
        {
          title: "Âncora no Corpo (Kāyānupassanā) nas Tarefas Domésticas",
          detail: "Ao lavar louça, carregar compras ou digitar, mantenha uma consciência periférica das sensações físicas: os pés em contato com o chão e a ausência de tensões desnecessárias nos ombros e mandíbula."
        },
        {
          title: "Observando o Tom Afetivo (Vedanānupassanā) nos Diálogos",
          detail: "Perceba o instante exato em que uma conversa torna-se desconfortável ou sedutora. Reconheça a sensação crua (agradável ou desagradável) antes que o ego elabore uma narrativa reativa."
        },
        {
          title: "Reconhecendo o Clima Mental (Cittānupassanā)",
          detail: "Ao regressar para casa após um dia extenuante, avalie: 'A mente está contraída, exausta ou irritadiça?' Conhecer o estado mental evita projetar tensões profissionais sobre a família."
        }
      ],
      contemplativeInquiry: [
        "Onde está meu corpo neste momento? Consigo sentir o peso da minha postura e o ritmo calmo do ar?",
        "Consigo testemunhar um estado emocional sem tentar suprimi-lo e sem me fundir a ele?"
      ]
    }
  },
  {
    id: "brahmavihara",
    number: "05",
    paliTitle: "Brahmavihārā",
    canonicalRef: "Karaṇīya Mettā Sutta (Snp 1.8), Tevijja Sutta (DN 13)",
    en: {
      title: "The Four Sublime Abodes",
      tagline: "The Infinite Radiation of Goodwill, Compassion, Joy, and Equanimity",
      category: "Heart & Relationship Ethics",
      keyPaliTerms: [
        { term: "Mettā", meaning: "Universal loving-kindness, benevolence, unconditional goodwill toward all beings" },
        { term: "Karuṇā", meaning: "Compassion, the heart's resonant empathy that wishes to relieve suffering" },
        { term: "Muditā", meaning: "Sympathetic/appreciative joy, ungrudging delight in others' good fortune" },
        { term: "Upekkhā", meaning: "Equanimity, balanced emotional poise grounded in the understanding of kamma" },
        { term: "Appamaññā", meaning: "Immeasurables, boundless states devoid of barriers, partiality, or bias" }
      ],
      overview: "The Brahmavihāras are the emotional pinnacle of Buddhist spiritual life. They represent the boundless mind of the highest beings made active in human society. For householders immersed in interpersonal relationships, marriage, parenting, business rivalries, and community disputes, these four qualities protect the heart from bitterness, jealousy, exhaustion, and cynicism.",
      canonicalExcerpts: [
        {
          source: "Karaṇīya Mettā Sutta (Snp 1.8)",
          pali: "Mātā yathā niyaṁ puttaṁ āyusā ekaputtamanurakkhe, evampi sabbabhūtesu mānasaṁ bhāvaye aparimāṇaṁ.",
          translation: "Even as a mother protects with her life her child, her only child, so with a boundless heart should one cherish all living beings, radiating kindness over the entire world."
        },
        {
          source: "DN 13 — Radiating Equanimity",
          pali: "Upekkhāsahagatena cetasā ekaṁ disaṁ pharitvā viharati, tathā dutiyaṁ, tathā tatiyaṁ, tathā catutthaṁ...",
          translation: "He abides radiating in all directions with a mind imbued with equanimity, abundant, exalted, measureless, free from hostility and affliction."
        }
      ],
      householdApplication: [
        {
          title: "Mettā in Marriage & Parenting",
          detail: "Loving-kindness is wishing well without demanding immediate reciprocity. Practice silent goodwill intentions when friction starts: 'May you be at peace, may you be free from stress, may our home be harmonious.'"
        },
        {
          title: "Muditā as the Antidote to Social Envy",
          detail: "When peers or colleagues receive promotions, praise, or financial windfalls, uncultivated minds default to envy. Muditā deliberately rejoices: 'How wonderful that they enjoy happiness! May their good fortune continue!'"
        },
        {
          title: "Upekkhā Facing the Eight Worldly Winds (Aṭṭha Lokadhammā)",
          detail: "Gain and loss, pleasure and pain, praise and blame, fame and disrepute. Equanimity allows the householder to stand grounded amidst life's storms, knowing all beings inherit their own intentional actions."
        }
      ],
      contemplativeInquiry: [
        "Is there someone in my daily life toward whom I hold cold resentment? Can I recognize the suffering underlying their difficult behavior?",
        "Can I celebrate someone else's achievement today without secretly measuring myself against them?"
      ]
    },
    pt: {
      title: "As Quatro Moradas Sublimes",
      tagline: "A Radiação Ilimitada da Bondade, Compaixão, Alegria Apreciativa e Equanimidade",
      category: "Ética das Relações & do Coração",
      keyPaliTerms: [
        { term: "Mettā", meaning: "Bondade amorosa universal, benevolência e boa-vontade incondicional para com todos os seres" },
        { term: "Karuṇā", meaning: "Compaixão, a empatia profunda do coração que deseja aliviar o sofrimento alheio" },
        { term: "Muditā", meaning: "Alegria apreciativa, regozijo sincero com a felicidade, conquistas e virtudes dos outros" },
        { term: "Upekkhā", meaning: "Equanimidade, equilíbrio emocional sereno fundamentado no entendimento da lei do kamma" },
        { term: "Appamaññā", meaning: "Imensuráveis, estados da mente sem limites territoriais, preconceitos ou aversões" }
      ],
      overview: "Os Brahmavihāras constituem a plenitude ética e afetiva do caminho budista. Representam o nobre estado mental de seres sublimes atuando no mundo dos homens. Para o leigo envolvido em vínculos matrimoniais, paternidade, desafios comerciais e disputas sociais, essas quatro virtudes blindam o coração contra o ressentimento, a inveja, a indiferença e o cinismo.",
      canonicalExcerpts: [
        {
          source: "Karaṇīya Mettā Sutta (Snp 1.8)",
          pali: "Mātā yathā niyaṁ puttaṁ āyusā ekaputtamanurakkhe, evampi sabbabhūtesu mānasaṁ bhāvaye aparimāṇaṁ.",
          translation: "Assim como uma mãe protege com a própria vida o seu filho, seu único filho, da mesma forma cultive-se um coração ilimitado para com todos os seres vivos, irradiando bondade por todo o universo."
        },
        {
          source: "DN 13 — Irradiando a Equanimidade",
          pali: "Upekkhāsahagatena cetasā ekaṁ disaṁ pharitvā viharati, tathā dutiyaṁ, tathā tatiyaṁ, tathā catutthaṁ...",
          translation: "Ele permanece irradiando em todas as direções com uma mente repleta de equanimidade, vasta, sublime, incomensurável, livre de hostilidade e aflição."
        }
      ],
      householdApplication: [
        {
          title: "Mettā na Convivência Familiar",
          detail: "Bondade amorosa é desejar o bem autêntico sem exigir contrapartidas imediatas. Ao surgir divergência em casa, silencie por um instante e formule a intenção: 'Que você esteja em paz, livre de angústia; que nosso lar seja harmonioso.'"
        },
        {
          title: "Muditā Contra a Inveja Social e Profissional",
          detail: "Quando amigos ou colegas conquistam promoções, prestígio ou estabilidade material, o condicionamento mundano costuma gerar inveja oculta. Muditā regozija-se deliberadamente: 'Que alegria ver sua prosperidade! Que seus méritos se sustentem!'"
        },
        {
          title: "Upekkhā Diante dos Oito Ventos do Mundo (Aṭṭha Lokadhammā)",
          detail: "Ganho e perda, prazer e dor, elogio e censura, fama e desonra. A equanimidade permite ao chefe de família manter-se firme como uma rocha em tempestades, sabendo que cada ser colhe os frutos de seus próprios atos."
        }
      ],
      contemplativeInquiry: [
        "Existe alguém em meu círculo para quem guardo frieza ou ressentimento? Consigo enxergar o sofrimento oculto sob a conduta dessa pessoa?",
        "Consigo comemorar com entusiasmo a conquista de outra pessoa hoje, sem comparações egóicas?"
      ]
    }
  },
  {
    id: "gihinivaya",
    number: "06",
    paliTitle: "Gihivinaya",
    canonicalRef: "Sigālovāda Sutta (DN 31), Vyagghapajja Sutta (AN 8.54), Anana Sutta (AN 4.62)",
    en: {
      title: "Guidance for Laypeople",
      tagline: "The Noble Household Ethic: Wealth Management, Reciprocal Relationships & Right Livelihood",
      category: "Social & Domestic Ethics",
      keyPaliTerms: [
        { term: "Gihivinaya", meaning: "The Code of Ethical Discipline for the Householder" },
        { term: "Pañcasīla", meaning: "The Five Ethical Precepts (non-harming, honesty, sexual fidelity, truthful speech, sobriety)" },
        { term: "Sammā-ājīva", meaning: "Right Livelihood, vocational enterprise free from deception, harm, and exploitation" },
        { term: "Anaṇa-sukha", meaning: "The supreme practical bliss of economic freedom from debt" },
        { term: "Saddhā / Cāga", meaning: "Confidence in awakening and generous, open-handed sharing" }
      ],
      overview: "The Buddha provided extraordinarily detailed, pragmatic economic and relational guidance for lay householders. Often termed the 'Vinaya of the Layperson', discourses like the Sigālovāda Sutta map society into six directions of mutual duty, while suttas on wealth outline prudent financial budgeting, honest enterprise, and the profound mental peace of ethical solvency.",
      canonicalExcerpts: [
        {
          source: "DN 31 — Sigālovāda Sutta (The Six Directions)",
          pali: "Pañcahi kho, gahapatiputta, ṭhānehi mātāpitaro pacchimā disā paccupaṭṭhātabbā: bhato ne bharissāmi, kiccaṁ nesaṁ karissāmi...",
          translation: "In five ways, young householder, should children minister to their parents as the Eastern direction: 'Having been supported by them, I will support them; I will perform their duties for them; I will maintain the family lineage; I will manage the inheritance; and I will make offerings in their memory.'"
        },
        {
          source: "AN 8.54 — Four Conditions for Worldly Well-being",
          pali: "Uṭṭhānasampadā, ārakkhasampadā, kalyāṇamittatā, samajīvitā.",
          translation: "Four conditions lead to a householder's well-being and happiness in this present life: Energy and skill in one's profession (Uṭṭhāna), protection and stewardship of wealth (Ārakkhasampadā), cultivating wholesome friendship (Kalyāṇamittatā), and balanced, debt-free living (Samajīvitā)."
        }
      ],
      householdApplication: [
        {
          title: "The Classical Buddhist Budgeting Framework",
          detail: "The Buddha advised dividing income into four portions: One portion for immediate sustenance and family enjoyment; two portions reinvested into one's trade, profession, or business enterprise; and one portion reserved in emergency savings for misfortune."
        },
        {
          title: "The Four Blisses of a Householder (Anana Sutta)",
          detail: "1. The bliss of rightful acquisition (Atthi-sukha); 2. The bliss of sharing wealth with family and worthy causes (Bhoga-sukha); 3. The bliss of being free from debt (Anaṇa-sukha); 4. The supreme bliss of blameless ethical conduct (Anavajja-sukha)."
        },
        {
          title: "Nourishing Wholesome Friendship (Kalyāṇamittatā)",
          detail: "Distance oneself from companions who encourage intoxication, reckless spending, and deception. Associate with friends who exemplify ethical integrity, generosity, and wisdom."
        }
      ],
      contemplativeInquiry: [
        "Is my income generated through honest, harmless means that allow my conscience to remain completely at peace?",
        "Am I balancing my expenditures fairly so that debt does not poison my family's peace of mind?"
      ]
    },
    pt: {
      title: "Instruções para o Praticante Leigo",
      tagline: "A Nobre Ética Doméstica: Gestão de Recursos, Relações Recíprocas e Modo de Vida Correto",
      category: "Ética Social & Doméstica",
      keyPaliTerms: [
        { term: "Gihivinaya", meaning: "O Código de Disciplina e Conduta Ética para o Chefe de Família" },
        { term: "Pañcasīla", meaning: "Os Cinco Preceitos Éticos (não matar, não roubar, integridade sexual, fala verídica, sobriedade)" },
        { term: "Sammā-ājīva", meaning: "Modo de Vida Correto, atividade profissional livre de fraude, exploração e dano" },
        { term: "Anaṇa-sukha", meaning: "A felicidade sublime de estar livre de dívidas e pendências financeiras" },
        { term: "Saddhā / Cāga", meaning: "Confiança firme no ensinamento e generosidade de mãos abertas" }
      ],
      overview: "O Buda ofereceu ensinamentos econômicos e relacionais incrivelmente minuciosos para leigos. Conhecido como o 'Vinaya do Leigo', o Sigālovāda Sutta organiza os laços sociais em seis direções sagradas de dever recíproco, enquanto outros discursos estruturam a gestão financeira prudente, o investimento profissional honesto e a serenidade da solvência ética.",
      canonicalExcerpts: [
        {
          source: "DN 31 — Sigālovāda Sutta (As Seis Direções)",
          pali: "Pañcahi kho, gahapatiputta, ṭhānehi mātāpitaro pacchimā disā paccupaṭṭhātabbā: bhato ne bharissāmi, kiccaṁ nesaṁ karissāmi...",
          translation: "De cinco maneiras, jovem chefe de família, os filhos devem honrar seus pais como a direção Leste: 'Tendo sido sustentado por eles, eu os sustentarei; cumprirei suas tarefas; preservarei a honra familiar; zelarei pelo patrimônio e honrarei sua memória com ofertas nobres'."
        },
        {
          source: "AN 8.54 — Condições para o Bem-Estar no Mundo",
          pali: "Uṭṭhānasampadā, ārakkhasampadā, kalyāṇamittatā, samajīvitā.",
          translation: "Quatro condições conduzem ao bem-estar e à felicidade do leigo nesta presente vida: empenho e competência na profissão (Uṭṭhāna), preservação prudente dos bens (Ārakkhasampadā), cultivo de amizades nobres (Kalyāṇamittatā) e vida equilibrada, sem excessos ou endividamento (Samajīvitā)."
        }
      ],
      householdApplication: [
        {
          title: "O Planejamento Orçamentário Budista Clássico",
          detail: "O Buda aconselhou dividir a renda familiar em quatro partes: Uma quarta parte para sustento imediato e bem-estar do lar; duas partes reinvestidas no ofício, comércio ou aprimoramento profissional; e uma quarta parte guardada como reserva de segurança contra imprevistos."
        },
        {
          title: "As Quatro Felicidades do Leigo (Anana Sutta)",
          detail: "1. A felicidade da posse legítima (Atthi-sukha); 2. A felicidade de desfrutar e partilhar a riqueza com generosidade (Bhoga-sukha); 3. A felicidade da ausência de dívidas (Anaṇa-sukha); 4. A felicidade suprema da conduta irrepreensível (Anavajja-sukha)."
        },
        {
          title: "Cultivando Amizades Espirituais Nobres (Kalyāṇamittatā)",
          detail: "Afaste-se de companhias que estimulam o descontrole financeiro, o vício e o engano. Cerque-se de pessoas que inspiram honestidade, generosidade desapegada e sabedoria prática."
        }
      ],
      contemplativeInquiry: [
        "Minha subsistência é gerada por meios justos e transparentes que deixam minha consciência em perfeita paz?",
        "Estou administrando os recursos da família de modo equilibrado para que o peso de dívidas não perturbe o lar?"
      ]
    }
  },
  {
    id: "dhammapada",
    number: "07",
    paliTitle: "Dhammapada",
    canonicalRef: "Khuddaka Nikāya — Dhammapada (423 Verses)",
    en: {
      title: "The Path of the Dhamma",
      tagline: "Immortal Aphorisms of Wisdom, Vigilance, and Mastery Over the Mind",
      category: "Canonical Wisdom Verses",
      keyPaliTerms: [
        { term: "Appamāda", meaning: "Heedfulness, vigilance, non-complacency, diligence in mind-training" },
        { term: "Citta", meaning: "The heart-mind, consciousness, the source of all intentions and outcomes" },
        { term: "Kamma", meaning: "Intentional action of body, speech, and mind, bearing fruit like seeds" },
        { term: "Paṇḍita", meaning: "The wise person, whose conduct and discernment are refined" },
        { term: "Bāla", meaning: "The foolish or uncultivated person who follows blind impulse" }
      ],
      overview: "The Dhammapada is the most widely treasured anthology of the Buddha's sayings. Comprising 423 poetic verses organized into 26 chapters (vaggas), it delivers crystal-clear moral maxims, psychological insights, and vivid nature parables. For the householder, each verse functions as a portable beacon of clarity for daily ethical dilemmas.",
      canonicalExcerpts: [
        {
          source: "Dhammapada vv. 1–2 (Yamakavagga — Twin Verses)",
          pali: "Manopubbaṅgamā dhammā manosseṭṭhā manomayā; Manasā ce paduṭṭhena bhāsati vā karoti vā, Tato naṁ dukkhamanveti cakkaṁva vahato padaṁ.",
          translation: "Mind precedes all mental states; mind is their chief, they are mind-made. If one speaks or acts with an impure mind, suffering follows them even as the wheel follows the hoof of the draft ox. If one speaks or acts with a pure mind, happiness follows like a shadow that never departs."
        },
        {
          source: "Dhammapada v. 21 (Appamādavagga — Vigilance)",
          pali: "Appamādo amatapadaṁ, pamādo maccuno padaṁ; Appamattā na mīyanti, ye pamattā yathā matā.",
          translation: "Heedfulness is the path to the Deathless; heedlessness is the path to death. The heedful do not die; the heedless are as if already dead."
        }
      ],
      householdApplication: [
        {
          title: "Mind as the Driver of Every Consequence",
          detail: "Memorize verses 1 and 2. Every interaction in the home begins with a mental intention. Check and purify the intention first before speech leaves the mouth."
        },
        {
          title: "Guarding Speech in Heated Moments",
          detail: "Verse 133: 'Do not speak harshly to anyone; those spoken to might answer back. Painful is quarrelsome talk.' Before retaliating in arguments, pause and heed the counsel on harmless speech."
        },
        {
          title: "The Cumulative Drop of Water",
          detail: "Verse 122: 'Do not underestimate wholesome deeds, thinking: They will amount to nothing. Even a water pot is filled drop by drop.' Every small act of patience, kindness, and mindfulness accumulates spiritual capital."
        }
      ],
      contemplativeInquiry: [
        "Am I living with heedfulness (appamāda) today, or drifting on unconscious autopilot?",
        "Can I recall a verse of the Dhammapada to anchor my mind when irritation arises?"
      ]
    },
    pt: {
      title: "O Caminho do Dhamma",
      tagline: "Aforismos Imortais de Sabedoria, Vigilância e Autodomínio da Mente",
      category: "Versos Canônicos de Sabedoria",
      keyPaliTerms: [
        { term: "Appamāda", meaning: "Vigilância espiritual, diligência, atenção lúcida e não-complacência" },
        { term: "Citta", meaning: "O coração-mente, a consciência que origina todas as intenções e destinos" },
        { term: "Kamma", meaning: "Ação intencional de corpo, fala e mente, gerando frutos correspondentes" },
        { term: "Paṇḍita", meaning: "A pessoa sábia, de discernimento apurado e conduta íntegra" },
        { term: "Bāla", meaning: "A pessoa imprudente ou espiritualmente tola, governada por impulsos cegos" }
      ],
      overview: "O Dhammapada é a antologia mais reverenciada das palavras do Buda. Reunindo 423 versos poéticos em 26 capítulos, entrega máximas éticas límpidas, observações psicológicas penetrantes e parábolas vivas da natureza. Para quem vive no mundo, cada verso funciona como uma bússola de lucidez para encruzilhadas éticas do dia a dia.",
      canonicalExcerpts: [
        {
          source: "Dhammapada vv. 1–2 (Yamakavagga — Versos Gêmeos)",
          pali: "Manopubbaṅgamā dhammā manosseṭṭhā manomayā; Manasā ce paduṭṭhena bhāsati vā karoti vā, Tato naṁ dukkhamanveti cakkaṁva vahato padaṁ.",
          translation: "A mente precede todas as coisas; a mente é seu líder, elas são criadas pela mente. Se alguém fala ou age com mente impura, o sofrimento o segue como a roda segue a pata do boi que puxa o carro. Se alguém fala ou age com mente pura, a felicidade o acompanha como uma sombra que jamais se afasta."
        },
        {
          source: "Dhammapada v. 21 (Appamādavagga — Vigilância)",
          pali: "Appamādo amatapadaṁ, pamādo maccuno padaṁ; Appamattā na mīyanti, ye pamattā yathā matā.",
          translation: "A vigilância é o caminho para o Imortal; a negligência é o caminho para a morte. Os vigilantes não morrem; os negligentes já estão como se mortos fossem."
        }
      ],
      householdApplication: [
        {
          title: "A Mente Como Origem de Todo Resultado",
          detail: "Tenha em mente os versos 1 e 2. Toda conversa e atitude no lar começa na intenção mental. Examine a intenção antes que as palavras saiam da boca."
        },
        {
          title: "Cuidando da Fala em Momentos de Tensão",
          detail: "Verso 133: 'Não fale com aspereza com ninguém; aqueles a quem você ofender poderão responder da mesma forma. Dolorosa é a contenda.' Antes de retrucar em discussões, lembre-se do valor da palavra pacífica."
        },
        {
          title: "O Pote Enche Gota a Gota",
          detail: "Verso 122: 'Não subestime as ações virtuosas pensando: Nada disso fará diferença. Até mesmo o pote de água se enche gota a gota.' Cada gesto paciente e ético consolida um tesouro interior duradouro."
        }
      ],
      contemplativeInquiry: [
        "Estou vivendo com vigilância lúcida (appamāda) hoje, ou operando em piloto automático?",
        "Consigo recordar um verso do Dhamma para acalmar a mente quando a irritação despontar?"
      ]
    }
  },
  {
    id: "jatakani",
    number: "08",
    paliTitle: "Jātakāni",
    canonicalRef: "Khuddaka Nikāya — Jātaka Aṭṭhakathā (547 Stories)",
    en: {
      title: "The Birth Stories",
      tagline: "The Bodhisatta's Cultivation of the Ten Perfections in Ordinary Worldly Roles",
      category: "Inspirational Narrative & Parables",
      keyPaliTerms: [
        { term: "Pāramī", meaning: "Perfections or transcendental virtues cultivated toward supreme awakening" },
        { term: "Bodhisatta", meaning: "A being resolutely dedicated to the realization of Buddhahood" },
        { term: "Dāna-pāramī", meaning: "The perfection of generosity, open-handed giving, and relinquishment" },
        { term: "Khanti-pāramī", meaning: "The perfection of heroic patience, forbearance, and non-retaliation" },
        { term: "Sacca-pāramī", meaning: "The perfection of truthfulness, reliability, and unwavering integrity" }
      ],
      overview: "The Jātaka tales narrate the previous lives of the Buddha as he perfected the Ten Pāramīs across immense spans of time. Significantly, the vast majority of these lives were lived not in ascetic isolation, but as laypersons: merchants, artisans, physicians, parents, and community leaders. They offer a master repository of moral grit, heroic sacrifice, and practical wisdom for civic and family life.",
      canonicalExcerpts: [
        {
          source: "Khantivādī Jātaka (No. 313) — Heroic Forbearance",
          pali: "Akkodhena jine kodhaṁ, asādhuṁ sādhunā jine; Jine kadariyaṁ dānena, saccenālīkavādinaṁ.",
          translation: "Conquer anger with non-anger; conquer wickedness with goodness; conquer the stingy with generosity; conquer the liar with truth."
        },
        {
          source: "Vessantara Jātaka (No. 547) — The Spirit of Giving",
          pali: "Dānaṁ daddallamānaṁva, cāgena anapekkhavā...",
          translation: "Giving shining brightly, giving without backward longing, without expectation of worldly reward, for the complete freedom of the heart."
        }
      ],
      householdApplication: [
        {
          title: "Virtues in the Modern Workplace",
          detail: "Approach your daily profession not as a secular chore, but as training in the Pāramīs: practicing Viriya (energy) in work ethic, Sīla (virtue) in dealings, and Sacca (truth) in agreements."
        },
        {
          title: "Heroic Forbearance (Khanti) in Difficult Dynamics",
          detail: "When subjected to unfair criticism or organizational malice, refuse to generate hatred. Let patient forbearance and dignity be your armor."
        },
        {
          title: "Moral Storytelling for Family Culture",
          detail: "Use the ethical dilemmas in the Jātaka stories to teach children and younger generations timeless values of gratitude, environmental respect, and courage."
        }
      ],
      contemplativeInquiry: [
        "Which of the Ten Perfections (Generosity, Virtue, Renunciation, Wisdom, Energy, Patience, Truth, Resolve, Goodwill, Equanimity) is most tested in my life today?",
        "Can I regard today's frustrating domestic chores as my personal Bodhisatta training?"
      ]
    },
    pt: {
      title: "Contos Jātaka & Perfeições",
      tagline: "O Cultivo das Dez Perfeições pelo Bodhisatta em Papéis Cotidianos e Sociais",
      category: "Narrativas Inspiradoras & Parábolas",
      keyPaliTerms: [
        { term: "Pāramī", meaning: "Perfeições ou virtudes transcendentais cultivadas rumo ao despertar supremo" },
        { term: "Bodhisatta", meaning: "Um ser resolutamente dedicado à realização do estado de Buda" },
        { term: "Dāna-pāramī", meaning: "A perfeição da generosidade, do desprendimento e da partilha voluntária" },
        { term: "Khanti-pāramī", meaning: "A perfeição da paciência heróica, da tolerância nobre e do não revide" },
        { term: "Sacca-pāramī", meaning: "A perfeição da verdade, da retidão inegociável e da palavra confiável" }
      ],
      overview: "Os contos Jātaka narram as vidas pregressas do Buda aperfeiçoando as Dez Pāramīs através de eras. A imensa maioria dessas vidas transcorreu não em reclusão monástica, mas como leigos no mundo: comerciantes, artesãos, médicos, pais e governantes. Oferecem um tesouro pedagógico inigualável de coragem moral e sabedoria prática para a vida familiar e comunitária.",
      canonicalExcerpts: [
        {
          source: "Khantivādī Jātaka (No. 313) — A Paciência Heróica",
          pali: "Akkodhena jine kodhaṁ, asādhuṁ sādhunā jine; Jine kadariyaṁ dānena, saccenālīkavādinaṁ.",
          translation: "Vença a raiva com a não-raiva; vença a maldade com a bondade; vença a mesquinhez com a generosidade; vença a mentira com a verdade."
        },
        {
          source: "Vessantara Jātaka (No. 547) — O Ápice da Renúncia",
          pali: "Dānaṁ daddallamānaṁva, cāgena anapekkhavā...",
          translation: "Doando com resplendor radiante, doando sem olhar para trás, sem expectativas de ganho mundano, pela libertação definitiva do coração."
        }
      ],
      householdApplication: [
        {
          title: "As Perfeições no Ambiente Profissional",
          detail: "Enxergue sua profissão não como um fardo mundano, mas como campo de treino das Pāramīs: exercitando Viriya (energia) no trabalho, Sīla (integridade) em contas e contratos, e Sacca (fidelidade à palavra)."
        },
        {
          title: "Paciência Nobre (Khanti) em Relações Desafiadoras",
          detail: "Quando confrontado com incompreensão ou atitudes injustas, recuse-se a cultivar ódio. Faça da tolerância digna sua verdadeira armadura espiritual."
        },
        {
          title: "Narrativas Morais na Cultura Familiar",
          detail: "Aproveite os dilemas dos contos Jātaka para transmitir aos filhos valores atemporais de gratidão, consideração pelos animais, respeito à natureza e coragem ética."
        }
      ],
      contemplativeInquiry: [
        "Qual das Dez Perfeições (Generosidade, Virtude, Renúncia, Sabedoria, Energia, Paciência, Verdade, Resolução, Bondade, Equanimidade) está sendo mais desafiada em minha rotina hoje?",
        "Consigo encarar os atritos e tarefas desgastantes do dia a dia como meu laboratório pessoal de treino ético?"
      ]
    }
  },
  {
    id: "lokadhatu",
    number: "09",
    paliTitle: "Lokadhātu",
    canonicalRef: "Kevatta Sutta (DN 11), Cūḷataṇhāsaṅkhaya Sutta (MN 37), Mahāgopālaka Sutta (MN 33)",
    en: {
      title: "Buddhist Cosmology",
      tagline: "The 31 Planes of Existence, the Wheel of Saṁsāra, and the Rare Human Opportunity",
      category: "Cosmic Context & Perspective",
      keyPaliTerms: [
        { term: "Tiloka", meaning: "The Three Realms: Sensual (Kāmadhātu), Form (Rūpadhātu), Formless (Arūpadhātu)" },
        { term: "Saṁsāra", meaning: "The beginningless round of rebirth, driven by craving and volitional action (kamma)" },
        { term: "Manussa-lābha", meaning: "The rare, precious opportunity of human rebirth equipped to encounter the Dhamma" },
        { term: "Kamma-vipāka", meaning: "The infallible maturation and fruit of intentional actions across existence" },
        { term: "Sakkāyadiṭṭhi", meaning: "The root illusion of an unchanging, isolated self within conditioned existence" }
      ],
      overview: "Buddhist cosmology is not mythological folklore; it is an existential psychological map. Across 31 distinct realms spanning heavens, human planes, ghost realms, animal worlds, and hells, the Buddha revealed that every state of existence reflects the quality of mind and moral choices. For householders, this macro-perspective imbues human life with deep urgency and dignity.",
      canonicalExcerpts: [
        {
          source: "SN 56.48 — The Blind Turtle Simile (Chiggalayuga Sutta)",
          pali: "Seyyathāpi, bhikkhave, puriso ekacchiggalaṁ yugaṁ mahāsamudde pakkhipeyya...",
          translation: "Suppose a man threw into the ocean a yoke with a single hole, and a blind sea turtle surfaced only once every hundred years. More difficult and rare than that turtle putting its neck through that single yoke is obtaining human birth with the opportunity to encounter the True Dhamma."
        },
        {
          source: "AN 5.57 — Upajjhatthana Sutta (The Five Daily Remembrances)",
          pali: "Kammassakomhi kammaddāyādo kammayoni kammabandhu kammapaṭisaraṇo...",
          translation: "I am the owner of my kamma, heir to my kamma, born of my kamma, bound to my kamma, supported by my kamma. Whatever kamma I do, whether good or evil, of that I shall be the heir."
        }
      ],
      householdApplication: [
        {
          title: "Relativizing Worldly Status & Possessions",
          detail: "Even celestial realms in the Brahma worlds conclude when conditioned merit is exhausted. Understanding the impermanence of all worldly rank frees the householder from superficial status anxiety."
        },
        {
          title: "The Sacred Opportunity of Human Birth (Manussa-lābha)",
          detail: "Human life combines enough suffering to prompt wise disillusionment (saṁvega) and enough mental clarity to study and practice wisdom. Do not squander this rare embodiment on trivial distractions."
        },
        {
          title: "The Five Daily Remembrances (Upajjhatthana)",
          detail: "Reflect regularly: I am subject to aging; I am subject to illness; I am subject to death; all that is dear will change and part from me; my only enduring heritage is my intentional actions (kamma)."
        }
      ],
      contemplativeInquiry: [
        "If I deeply recognize the extreme rarity of human life, how would I re-prioritize how I use my evenings and free time?",
        "Can I evaluate today's decisions through the lens of karmic seeds that outlive this temporary physical body?"
      ]
    },
    pt: {
      title: "Cosmologia Budista & Ciclos de Existência",
      tagline: "Os 31 Planos de Existência, a Roda do Saṁsāra e a Rara Oportunidade Humana",
      category: "Contexto Cósmico & Perspectiva Existencial",
      keyPaliTerms: [
        { term: "Tiloka", meaning: "Os Três Reinos: Reino dos Sentidos (Kāmadhātu), da Forma (Rūpadhātu) e Sem-Forma (Arūpadhātu)" },
        { term: "Saṁsāra", meaning: "O ciclo sem início de nascimentos e mortes, movido pelo anseio e ações volitivas (kamma)" },
        { term: "Manussa-lābha", meaning: "A rara e preciosa oportunidade do renascimento humano com acesso ao Dhamma" },
        { term: "Kamma-vipāka", meaning: "A maturação infalível dos atos intencionais através das existências" },
        { term: "Sakkāyadiṭṭhi", meaning: "A ilusão fundamental de uma identidade estática e permanente no cosmos" }
      ],
      overview: "A cosmologia budista não é folclore mitológico; é uma cartografia da psicologia existencial. Através de 31 planos distintos que abrangem céus, esferas humanas, reinos animais, reinos de espíritos aflitos e infernos, o Buda ensinou que todo estado reflete a qualidade da consciência e dos atos morais. Essa perspectiva macro confere à vida humana uma gravidade e uma dignidade singulares.",
      canonicalExcerpts: [
        {
          source: "SN 56.48 — A Símile da Tartaruga Cega (Chiggalayuga Sutta)",
          pali: "Seyyathāpi, bhikkhave, puriso ekacchiggalaṁ yugaṁ mahāsamudde pakkhipeyya...",
          translation: "Suponha que alguém lance ao mar uma canga de madeira com um único orifício, e uma tartaruga marinha cega suba à tona apenas uma vez a cada cem anos. Mais difícil e raro do que essa tartaruga encaixar o pescoço naquele orifício é obter o renascimento humano e ter a oportunidade de ouvir o Verdadeiro Dhamma."
        },
        {
          source: "AN 5.57 — Upajjhatthana Sutta (As Cinco Lembranças Diárias)",
          pali: "Kammassakomhi kammaddāyādo kammayoni kammabandhu kammapaṭisaraṇo...",
          translation: "Sou o dono de minhas ações, herdeiro de minhas ações, nascido de minhas ações, vinculado a minhas ações, tenho minhas ações como refúgio. Qualquer ação que eu fizer, boa ou má, serei seu herdeiro."
        }
      ],
      householdApplication: [
        {
          title: "Relativizando Prestígio e Bens Materiais",
          detail: "Até mesmo existências sublimes nos planos celestiais de Brahma chegam ao fim quando o mérito se esgota. Compreender a impermanência de todo status mundano liberta o chefe de família da ansiedade por posições efêmeras."
        },
        {
          title: "A Oportunidade Inestimável do Nascimento Humano (Manussa-lābha)",
          detail: "O plano humano reúne sofrimento suficiente para gerar desilusão lúcida (saṁvega) e clareza mental suficiente para discernir o Dhamma. Não desperdice esta condição preciosa com futilidades vazias."
        },
        {
          title: "As Cinco Lembranças Diárias (Upajjhatthana)",
          detail: "Rememore com frequência: Estou sujeito ao envelhecimento; estou sujeito à enfermidade; estou sujeito à morte; tudo o que me é querido mudará e se separará de mim; meu único patrimônio real são as minhas próprias ações (kamma)."
        }
      ],
      contemplativeInquiry: [
        "Se eu realmente absorver a extrema raridade da vida humana, como redistribuirei meu tempo livre e minhas noites?",
        "Consigo ponderar minhas decisões de hoje sob a ótica de sementes cármicas que perduram além deste corpo temporário?"
      ]
    }
  }
];


  // ==========================================
  // 2. APPLICATION CONTROLLER
  // ==========================================
/**
 * The Lay Dharma Household Mārga — Main Application Script
 * Radial Menu with 9 Annular Sectors (Wheel of Dhamma)
 * Bilingual Engine: English (EN) & Portuguese (PT)
 */
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
      tabBtns: document.querySelectorAll('.tab-nav-btn'),
      tabContents: document.querySelectorAll('.tab-content'),

      // Translatable UI nodes
      tabBtnOverview: document.getElementById('tabBtnOverview'),
      tabBtnCanonical: document.getElementById('tabBtnCanonical'),
      tabBtnHousehold: document.getElementById('tabBtnHousehold'),
      headingKeyPali: document.getElementById('headingKeyPali'),
      householdIntroText: document.getElementById('householdIntroText')
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

    // Section headings & intro texts in modal
    if (this.dom.headingKeyPali) this.dom.headingKeyPali.innerHTML = `<span>☸</span> ${t.keyPaliTermsHeading}`;
    if (this.dom.householdIntroText) this.dom.householdIntroText.textContent = t.householdIntro;
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

    // Canonical Corpus / Excerpts
    if (langContent.canonicalCorpus && langContent.canonicalCorpus.length > 0) {
      const jumpNavHtml = `
        <div class="corpus-intro-banner">
          <div class="corpus-banner-title"><span>☸</span> ${t.corpusHeading}</div>
          <div class="corpus-banner-subtitle">${t.corpusSubtitle}</div>
          <div class="corpus-jump-nav">
            <span class="corpus-jump-label">${t.quickJumpLabel}</span>
            <div class="corpus-jump-pills">
              ${langContent.canonicalCorpus.map((s, idx) => `
                <a href="#corpus-sutta-${idx}" class="corpus-jump-pill">
                  <span class="jump-pill-code">${s.suttaCode}</span>
                  <span class="jump-pill-title">${s.paliTitle}</span>
                </a>
              `).join('')}
            </div>
          </div>
        </div>
      `;

      const corpusCardsHtml = langContent.canonicalCorpus.map((sutta, idx) => {
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
          <article class="corpus-sutta-card" id="corpus-sutta-${idx}">
            <header class="corpus-card-header">
              <div class="corpus-badges-row">
                <span class="corpus-num-badge">${idx + 1}</span>
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
    this.dom.modalHouseholdList.innerHTML = langContent.householdApplication.map(app => `
      <div class="practice-card">
        <div class="practice-card-title">
          <span>☸</span> ${app.title}
        </div>
        <div class="practice-card-detail">${app.detail}</div>
      </div>
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
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new LayDharmaApp();
});


})();