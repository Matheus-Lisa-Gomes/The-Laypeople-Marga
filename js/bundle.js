/**
 * The Lay Dharma Household MÄrga â€” Standalone Universal Web Bundle
 * Runs directly on file:// as well as HTTPS / local servers.
 */

(function() {
  'use strict';

  // ==========================================
  // 1. DEPENDENT ARISING DATA MODULE
  // ==========================================
/**
 * The Lay Dharma Household Mārga (Upāsaka-Dharma)
 * Topic 02: Dependent Arising in Everyday Life (Paṭiccasamuppāda)
 * Comprehensive Theravāda Learning Module:
 * Canonical Source Material, The 12 Links Explorer, 12 Suttas Library,
 * 5 Daily-Life Scenarios, 7-Step Practical Exercise, Noble Eightfold Path Integration,
 * 3 Study Pathways, Reflection Journal Prompts, and 10 Canonical FAQs.
 * Bilingual: English (EN) and Portuguese (PT-BR).
 */
const DEPENDENT_ARISING_MODULE_EN = {
  // A. Hero Section & Master Principle
  hero: {
    title: "Dependent Arising in Everyday Life",
    paliTitle: "Paṭiccasamuppāda",
    subtitle: "Understanding how suffering arises, how it is sustained, and how it can cease.",
    introText: "Dependent arising is the Buddha's teaching on conditionality: when particular conditions are present, corresponding phenomena arise; when those conditions cease, the dependent phenomena cease. It provides a framework for understanding suffering and the possibility of liberation.",
    canonicalPassage: {
      suttaCode: "SN 12.20",
      paliTitle: "Paccaya Sutta",
      englishTitle: "Conditions",
      excerptPali: "Uppādā vā, bhikkhave, tathāgatānaṁ anuppādā vā tathāgatānaṁ, ṭhitāva sā dhātu dhammaṭṭhitatā dhammaniyāmatā idappaccayatā.",
      excerptTrans: "Whether Realized Ones arise or not, this fundamental reality remains: the stability of the Dhamma, the law of the Dhamma, specific conditionality.",
      sourceUrl: "https://suttacentral.net/sn12.20/en/sujato",
      citation: "Saṁyutta Nikāya 12.20 • Paccaya Sutta"
    },
    primaryActions: [
      { id: "action-study", label: "Begin the Study", target: "#pa-what-is", icon: "📖" },
      { id: "action-links", label: "Explore the Twelve Links", target: "#pa-twelve-links", icon: "🔗" },
      { id: "action-daily", label: "Practice in Daily Life", target: "#tab-household", icon: "🏡" }
    ]
  },

  // B. What is Dependent Arising? (Three Levels & Comparison Panel)
  whatIs: {
    sectionTitle: "What is Dependent Arising?",
    sectionSubtitle: "A graduated three-level exposition of conditionality and liberation",
    level1: {
      number: "1",
      badge: "Level 1 — The Master Principle",
      title: "Specific Conditionality (Idappaccayatā)",
      paliFormula: "Imasmiṁ sati idaṁ hoti, imassuppādā idaṁ uppajjati; imasmiṁ asati idaṁ na hoti, imassa nirodhā idaṁ nirujjhati.",
      translationFormula: "When this exists, that comes to be; with the arising of this, that arises. When this does not exist, that does not come to be; with the cessation of this, that ceases.",
      detail: "Conditionality is not a rigid linear chain of mechanical predetermination, nor is it the decree of a cosmic creator. In early Buddhism, all experiences—thoughts, physical sensations, emotional states, and interpersonal dynamics—arise when supporting conditions converge, and naturally dissolve when those conditions disperse. For lay practitioners, this principle immediately removes guilt and personal condemnation: when irritation or fear arises, instead of identifying with it ('I am an angry person'), you investigate: 'What conditions gave rise to this state?'"
    },
    level2: {
      number: "2",
      badge: "Level 2 — The Arising of Suffering (Samudaya-vāra)",
      title: "The Standard Sequence of Twelve Links",
      intro: "The standard canonical formulation articulates the specific chain through which psychological friction and cyclical suffering (*saṁsāra*) are sustained:",
      linksSequence: [
        { num: "01", pali: "Avijjā", trans: "Ignorance / Unawareness of the Four Truths" },
        { num: "02", pali: "Saṅkhārā", trans: "Volitional Formations / Karmic Fabrications" },
        { num: "03", pali: "Viññāṇa", trans: "Consciousness / Discriminative Awareness" },
        { num: "04", pali: "Nāmarūpa", trans: "Name-and-Form / Mental Factors & Physicality" },
        { num: "05", pali: "Saḷāyatana", trans: "Six Sense Bases (Eye, Ear, Nose, Tongue, Body, Mind)" },
        { num: "06", pali: "Phassa", trans: "Contact (Meeting of Sense Faculty, Object, & Consciousness)" },
        { num: "07", pali: "Vedanā", trans: "Feeling Tone (Pleasant, Unpleasant, Neither-Pleasant-nor-Unpleasant)" },
        { num: "08", pali: "Taṇhā", trans: "Craving / Thirst (For Pleasures, Becoming, or Non-becoming)" },
        { num: "09", pali: "Upādāna", trans: "Clinging / Grasping (Onto Views, Pleasures, Rites, & Self-identity)" },
        { num: "10", pali: "Bhava", trans: "Becoming / Sustained States of Being" },
        { num: "11", pali: "Jāti", trans: "Birth / Arising of Identity & Conception" },
        { num: "12", pali: "Jarāmaraṇa", trans: "Aging & Death, Sorrow, Lamentation, Pain, Distress, & Despair" }
      ],
      canonicalCulmination: "Evametassa kevalassa dukkhakkhandhassa samudayo hoti — 'Such is the origin of this whole mass of suffering.'",
      caveat: "Doctrinal Safeguard: These twelve factors must neither be viewed as twelve isolated philosophical objects nor reduced to a purely momentary psychological sequence without karmic continuity. In classical Theravāda, the links describe the profound conditionality spanning both life-to-life continuity and moment-to-moment experience."
    },
    level3: {
      number: "3",
      badge: "Level 3 — The Cessation of Suffering (Nirodha-vāra)",
      title: "The Reverse Formulation & True Liberation",
      paliFormula: "Avijjāya tv’eva asesavirāganirodhā saṅkhāranirodho; saṅkhāranirodhā viññāṇanirodho... evametassa kevalassa dukkhakkhandhassa nirodho hoti.",
      translationFormula: "With the remainderless fading away and cessation of ignorance, volitional formations cease; with the cessation of formations, consciousness ceases... such is the cessation of this whole mass of suffering.",
      detail: "Cessation is the unbinding of compulsive craving, not physical annihilation. An awakened householder or monastic does not cease to physically exist or lose the ability to perceive the world; rather, because delusion has been extinguished, sensory contact occurs without generating craving, clinging, or suffering. The chain of reactivity is permanently disconnected at the contact-feeling junction."
    },
    comparisonPanel: {
      title: "The Three Dimensions of Conditionality",
      subtitle: "A comparative operational overview of Theravāda practice",
      arisingBox: {
        title: "Arising (Samudaya)",
        desc: "Conditions actively sustain the continuation of suffering: ignorance fuels volitional fabrications, and unexamined pleasant or unpleasant feeling tones condition impulsive craving and clinging."
      },
      cessationBox: {
        title: "Cessation (Nirodha)",
        desc: "The relevant conditions are brought to a complete end: with direct experiential insight into impermanence, craving finds no foothold, grasping ceases, and the fuel of becoming burns out."
      },
      practiceBox: {
        title: "Practice (Magga)",
        desc: "Ethical conduct (sīla), collectedness (samādhi), and discerning wisdom (paññā) systematically transform the mind, replacing ignorance with clear seeing."
      }
    }
  },

  // C. The Twelve Links Explorer (Canonical & Everyday Modes)
  twelveLinksExplorer: {
    sectionTitle: "The Twelve Links Interactive Explorer",
    sectionSubtitle: "Inspect each link through authentic canonical definitions or concrete everyday lay applications",
    canonicalModeLabel: "Canonical Sutta Mode",
    everydayModeLabel: "Everyday-Life Mode",
    modeNotice: "Note: Everyday-life examples are illustrative psychological applications showing how conditionality operates in daily experience, not verbatim accounts of all twelve links in a single sutta.",
    links: [
      {
        num: 1,
        pali: "Avijjā",
        trans: "Ignorance / Delusion",
        preceding: "Root condition (sustained by the asavas/taints and unwise attention)",
        following: "Conditions Volitional Formations (Saṅkhārā)",
        canonicalRef: "SN 12.2 • SN 12.12",
        canonicalDef: "Not knowing suffering, not knowing its origin, not knowing its cessation, and not knowing the path leading to its cessation. Assuming permanence in the impermanent, satisfaction in the stressful, and a permanent self in selfless phenomena.",
        everydayIllustration: "Believing that securing one more purchase, winning an argument, or achieving status will deliver lasting happiness. Operating on automatic pilot without awareness of our underlying reactivity.",
        reflectionQuestion: "Where in my daily life am I operating on the unquestioned assumption that external worldly conditions can give permanent fulfillment?",
        studyNote: "Avijjā is not mere lack of intellectual information, but lack of penetrative experiential clarity regarding the Four Noble Truths."
      },
      {
        num: 2,
        pali: "Saṅkhārā",
        trans: "Volitional Formations",
        preceding: "Conditioned by Ignorance (Avijjā)",
        following: "Conditions Consciousness (Viññāṇa)",
        canonicalRef: "SN 12.2 • MN 44",
        canonicalDef: "Bodily formations (in-and-out breathing), verbal formations (directed thought and evaluation), and mental formations (perception and feeling) driven by volition (cetanā) with karmic consequences.",
        everydayIllustration: "Formulating mental narratives, plotting future conversations, rehearsing justifications, and brewing intentions to retaliate or indulge.",
        reflectionQuestion: "What habitual mental scripts and emotional momentum am I manufacturing right now?",
        studyNote: "Formations are active karmic constructions. Unwholesome formations construct future vulnerability to distress."
      },
      {
        num: 3,
        pali: "Viññāṇa",
        trans: "Consciousness",
        preceding: "Conditioned by Volitional Formations (Saṅkhārā)",
        following: "Conditions Name-and-Form (Nāmarūpa)",
        canonicalRef: "SN 12.2 • SN 12.38 • DN 15",
        canonicalDef: "Cognizance through the six sense doors: eye-consciousness, ear-consciousness, nose-consciousness, tongue-consciousness, body-consciousness, and mind-consciousness.",
        everydayIllustration: "The moment of awareness lighting up when a smartphone screen flashes, registering a sound or an incoming email subject line.",
        reflectionQuestion: "Can I observe the bare awareness of knowing a sight or sound before mental commentary begins?",
        studyNote: "Consciousness is not an independent unchanging soul, but a dependently arisen process of cognizance."
      },
      {
        num: 4,
        pali: "Nāmarūpa",
        trans: "Name-and-Form",
        preceding: "Conditioned by Consciousness (Viññāṇa)",
        following: "Conditions Six Sense Bases (Saḷāyatana)",
        canonicalRef: "SN 12.2 • DN 15 • MN 9",
        canonicalDef: "Name (nāma): feeling, perception, intention, contact, and attention. Form (rūpa): the four great elements (earth, water, fire, wind) and physical matter derived from them.",
        everydayIllustration: "Your physical body sitting in the chair combined with the psychological processes of labeling, intending, and focusing attention on workplace tasks.",
        reflectionQuestion: "How do mental labels (nāma) alter my perception of physical sensations (rūpa)?",
        studyNote: "In DN 15, consciousness and name-and-form are mutually conditioning, like two sheaves of reeds leaning against one another (SN 12.67)."
      },
      {
        num: 5,
        pali: "Saḷāyatana",
        trans: "Six Sense Bases",
        preceding: "Conditioned by Name-and-Form (Nāmarūpa)",
        following: "Conditions Contact (Phassa)",
        canonicalRef: "SN 12.2 • SN 35.28",
        canonicalDef: "The six internal sense faculties: eye-base, ear-base, nose-base, tongue-base, body-base, and intellect-base (manāyatana) through which the world is received.",
        everydayIllustration: "Having functional eyes, ears, touch, and an active thinking mind open to the modern sensory environment of screens, noise, and conversations.",
        reflectionQuestion: "Are my six sense doors well-guarded, or are they constantly flooded by unregulated digital inputs?",
        studyNote: "Sense restraint (indriya-saṁvara) is the householder's first fortress protecting the six bases."
      },
      {
        num: 6,
        pali: "Phassa",
        trans: "Contact",
        preceding: "Conditioned by Six Sense Bases (Saḷāyatana)",
        following: "Conditions Feeling Tone (Vedanā)",
        canonicalRef: "SN 12.2 • MN 148 • MN 18",
        canonicalDef: "The meeting or convergence of sense organ, sense object, and corresponding consciousness. Eye + visible form + eye-consciousness = visual contact.",
        everydayIllustration: "Hearing a harsh voice speak your name across an office corridor. Contact is the actual point of impact between external sound and conscious hearing.",
        reflectionQuestion: "Can I notice the precise split second when sensory contact occurs before my personality reacts?",
        studyNote: "Contact is the friction point where raw sensory data is delivered into conscious experience."
      },
      {
        num: 7,
        pali: "Vedanā",
        trans: "Feeling Tone",
        preceding: "Conditioned by Contact (Phassa)",
        following: "Conditions Craving (Taṇhā)",
        canonicalRef: "SN 12.2 • SN 36.6 • MN 38",
        canonicalDef: "The immediate affective tone of contact: pleasant (sukha), unpleasant (dukkha), or neither-pleasant-nor-unpleasant (adukkhamasukha).",
        everydayIllustration: "The instant bodily tightening and uncomfortable visceral flash when you read a critical review or aggressive text message.",
        reflectionQuestion: "Am I confusing this bare feeling tone (vedanā) with a full emotional story about myself?",
        studyNote: "Crucial Insight: Vedanā is not 'emotion'. It is the immediate raw valence. Emotion emerges when craving and mental proliferation (papañca) latch onto vedanā."
      },
      {
        num: 8,
        pali: "Taṇhā",
        trans: "Craving / Thirst",
        preceding: "Conditioned by Feeling Tone (Vedanā)",
        following: "Conditions Clinging (Upādāna)",
        canonicalRef: "SN 12.2 • SN 56.11 • MN 9",
        canonicalDef: "The compulsive thirst that seeks delight here and there: craving for sensual pleasures (kāma-taṇhā), craving for becoming (bhava-taṇhā), and craving for non-becoming/annihilation (vibhava-taṇhā).",
        everydayIllustration: "A colleague criticizes you. Hearing the words conditions an unpleasant feeling tone. Craving immediately appears: a desperate urge to eliminate the discomfort, prove yourself right, or make the other person suffer.",
        reflectionQuestion: "Notice the golden gap: Can I feel this unpleasant sensation without allowing craving to demand immediate action?",
        studyNote: "This link is the definitive pivot point for lay practice. Feeling arises due to past conditions, but craving requires our present consent."
      },
      {
        num: 9,
        pali: "Upādāna",
        trans: "Clinging / Grasping",
        preceding: "Conditioned by Craving (Taṇhā)",
        following: "Conditions Becoming (Bhava)",
        canonicalRef: "SN 12.2 • MN 11 • MN 141",
        canonicalDef: "Intensified grasping in four domains: clinging to sensual pleasures (kāmupādāna), clinging to views (diṭṭhupādāna), clinging to rules and rituals (sīlabbatupādāna), and clinging to self-identity (attavādupādāna).",
        everydayIllustration: "Digging in your heels during an argument: 'I am right, you are wrong! My reputation is at stake.' Fastening onto a political view or domestic expectation with clenched fists.",
        reflectionQuestion: "What self-image or rigid expectation am I clutching onto with white knuckles?",
        studyNote: "Upādāna also literally means 'fuel' (like wood feeding fire). Craving ignites the spark, and clinging fuels the furnace of stress."
      },
      {
        num: 10,
        pali: "Bhava",
        trans: "Becoming",
        preceding: "Conditioned by Clinging (Upādāna)",
        following: "Conditions Birth (Jāti)",
        canonicalRef: "SN 12.2 • AN 3.76 • SN 12.38",
        canonicalDef: "The taking shape of existence: the sensual realm (kāma-bhava), the subtle form realm (rūpa-bhava), and the formless realm (arūpa-bhava). Volitional energy ripe for fruition.",
        everydayIllustration: "Becoming fully absorbed in the persona of 'the mistreated employee' or 'the anxious parent'. A complete psychological state takes over your reality.",
        reflectionQuestion: "What persona or reactive world have I just stepped into?",
        studyNote: "In AN 3.76, the Buddha compares kamma to field, consciousness to seed, and craving to moisture producing renewed becoming."
      },
      {
        num: 11,
        pali: "Jāti",
        trans: "Birth",
        preceding: "Conditioned by Becoming (Bhava)",
        following: "Conditions Aging and Death (Jarāmaraṇa)",
        canonicalRef: "SN 12.2 • MN 141",
        canonicalDef: "The birth, manifestation of the aggregates, and acquisition of the sense spheres of beings in a given class of existence. Psychologically: the birth of a rigid self-concept.",
        everydayIllustration: "The complete crystallization of the 'victim' or 'champion' identity. You have stepped into the ring and are fully identified with the drama.",
        reflectionQuestion: "Who has just been 'born' in this mental state, and what vulnerability did that birth create?",
        studyNote: "Whenever a self-identity is born in the mind, it immediately inherits vulnerability to offense, aging, and loss."
      },
      {
        num: 12,
        pali: "Jarāmaraṇa",
        trans: "Aging & Death",
        preceding: "Conditioned by Birth (Jāti)",
        following: "Culminates in Sorrow, Lamentation, Pain, Grief, and Despair",
        canonicalRef: "SN 12.2 • MN 141 • SN 12.23",
        canonicalDef: "The aging, decay, and dissolution of living beings; and psychological heartbreak: sorrow (soka), lamentation (parideva), pain (dukkha), grief (domanassa), and despair (upāyāsa).",
        everydayIllustration: "The eventual collapse of your expectations. The argument ends in exhaustion, distance, lingering resentment, and emotional distress.",
        reflectionQuestion: "Can I clearly trace how this current grief or exhaustion arose naturally from initial clinging and craving?",
        studyNote: "Jarāmaraṇa proves the tragic law: whatever is born of craving must decay and perish. True peace is found only when the cycle ceases."
      }
    ]
  },

  // D. Essential Sutta Library (12 Suttas)
  suttaLibrary: {
    sectionTitle: "Essential Sutta Library",
    sectionSubtitle: "12 Curated canonical discourses on conditionality, verification, and lay application",
    searchPlaceholder: "Search by title, number, Pāli term, or keyword...",
    filterCategories: [
      { id: "all", label: "All Suttas (12)" },
      { id: "foundational", label: "Foundational (6)" },
      { id: "daily-life", label: "Lay Life & Causation (3)" },
      { id: "mindfulness", label: "Mindfulness & Vedanā (3)" },
      { id: "liberation", label: "Liberation & Cessation (2)" }
    ],
    suttas: [
      {
        code: "SN 12.2",
        paliTitle: "Vibhaṅga Sutta",
        transTitle: "Analysis of Dependent Arising",
        nikaya: "Saṁyutta Nikāya (Nidānavagga)",
        category: "foundational",
        readingTime: "5 min",
        importance: "The definitive analytical dictionary of the early canon for the twelve links.",
        layRelevance: "Equips the lay practitioner with precise canonical definitions for each link, preventing vague pop-psychology interpretations.",
        keyConcepts: ["12 Links", "Analytical Definitions", "Conditionality", "Avijjā", "Jarāmaraṇa"],
        suttaCentralUrl: "https://suttacentral.net/sn12.2/en/sujato",
        studyNotes: "In this discourse, the Buddha systematically takes each term—from aging-and-death back to ignorance—and defines exactly what it entails. It is the gold standard reference.",
        reflectionQuestion: "When I experience emotional turbulence, can I reference these specific definitions rather than viewing my mind as a mystery?"
      },
      {
        code: "SN 12.15",
        paliTitle: "Kaccāyanagotta Sutta",
        transTitle: "Discourse to Kaccāyana",
        nikaya: "Saṁyutta Nikāya (Nidānavagga)",
        category: "foundational",
        readingTime: "4 min",
        importance: "Articulates Right View as the Middle Way steering between the twin ontological extremes of absolute existence ('all exists') and absolute non-existence ('all does not exist').",
        layRelevance: "Shields lay practitioners from both materialist cynicism (nihilism) and spiritual eternalism, providing psychological balance.",
        keyConcepts: ["Right View", "Middle Way", "All Exists (Atthitā)", "All Does Not Exist (Natthitā)"],
        suttaCentralUrl: "https://suttacentral.net/sn12.15/en/sujato",
        studyNotes: "The Buddha clarifies that seeing the arising of the world through conditionality dispels nihilism, while seeing the cessation of the world dispels eternalism.",
        reflectionQuestion: "Am I caught in either the view that 'everything is meaningless' or the fantasy that my life situation should be permanently stable?"
      },
      {
        code: "MN 9",
        paliTitle: "Sammādiṭṭhi Sutta",
        transTitle: "Right View Discourse",
        nikaya: "Majjhima Nikāya",
        category: "foundational",
        readingTime: "12 min",
        importance: "Ven. Sāriputta unifies Dependent Arising with the Four Nutriments (āhāra) and wholesome/unwholesome roots.",
        layRelevance: "Provides an exhaustive master framework for ethical decisions, emotional hygiene, and liberation in domestic life.",
        keyConcepts: ["Right View", "Four Nutriments", "Kusala & Akusala", "Underlying Tendencies (Anusaya)"],
        suttaCentralUrl: "https://suttacentral.net/mn9/en/sujato",
        studyNotes: "Sāriputta demonstrates that a disciple of the noble ones attains Right View by knowing the unwholesome, its root, the wholesome, its root, and the dependent arising of nutriments and taints.",
        reflectionQuestion: "What mental 'nutriment' am I consuming throughout my workday, and is it wholesome or unwholesome?"
      },
      {
        code: "SN 12.20",
        paliTitle: "Paccaya Sutta",
        transTitle: "Conditions",
        nikaya: "Saṁyutta Nikāya (Nidānavagga)",
        category: "foundational",
        readingTime: "4 min",
        importance: "Explicitly distinguishes between 'dependent arising' (the underlying natural law) and 'dependently arisen phenomena' (the conditioned things).",
        layRelevance: "Reminds householders that conditionality is an immutable law of nature, not an arbitrary opinion or sectarian dogma.",
        keyConcepts: ["Dhamma-ṭṭhitatā", "Dhamma-niyāmatā", "Idappaccayatā", "Dependently Arisen Phenomena"],
        suttaCentralUrl: "https://suttacentral.net/sn12.20/en/sujato",
        studyNotes: "The Buddha asserts that whether Buddhas arise or do not arise, conditionality remains constant. Knowing this brings unshakable confidence in the Dhamma.",
        reflectionQuestion: "Can I relax into the realization that life's challenges unfold according to natural laws rather than personal conspiracies?"
      },
      {
        code: "SN 12.23",
        paliTitle: "Upanisa Sutta",
        transTitle: "Prerequisites / Proximate Causes",
        nikaya: "Saṁyutta Nikāya (Nidānavagga)",
        category: "liberation",
        readingTime: "6 min",
        importance: "Expounds Transcendental Dependent Arising: showing how suffering itself becomes the supporting condition for faith, joy, tranquility, and release.",
        layRelevance: "Shows laypeople how household pain and disappointment can be transformed into the very springboard for spiritual awakening.",
        keyConcepts: ["Transcendental Conditionality", "Dukkha as Proximate Cause for Saddhā", "Joy (Pāmojja)", "Dispassion (Virāga)"],
        suttaCentralUrl: "https://suttacentral.net/sn12.23/en/bodhi",
        studyNotes: "Where ordinary dependent arising spirals into distress, transcendental dependent arising shifts upward: Dukkha -> Faith (Saddhā) -> Joy -> Rapture -> Tranquility -> Happiness -> Concentration -> Vision of things as they are -> Dispassion -> Liberation.",
        reflectionQuestion: "Can I use my current difficulties as an impetus for spiritual refuge and deeper contemplation?"
      },
      {
        code: "DN 15",
        paliTitle: "Mahānidāna Sutta",
        transTitle: "The Great Causes Discourse",
        nikaya: "Dīgha Nikāya",
        category: "foundational",
        readingTime: "20 min",
        importance: "The Buddha's most comprehensive and profound canonical exploration of causation, consciousness, and social conflict.",
        layRelevance: "Explains how craving leads to seeking, acquisition, attachment, possessiveness, and societal quarrels—directly relevant to family and political conflict.",
        keyConcepts: ["Deep Conditionality", "Reciprocal Consciousness & Nāmarūpa", "Origin of Conflict & Hostility", "Social Strife"],
        suttaCentralUrl: "https://suttacentral.net/dn15/en/sujato",
        studyNotes: "When Ānanda remarks that dependent arising appears simple, the Buddha admonishes him: 'Do not say so, Ānanda! This dependent arising is deep and appears deep.' It is through not understanding it that beings are tangled like a matted ball of yarn.",
        reflectionQuestion: "In arguments with relatives or coworkers, can I see how possessiveness and defensiveness arose from the initial link of craving?"
      },
      {
        code: "SN 12.11",
        paliTitle: "Āhāra Sutta",
        transTitle: "Nutriment Discourse",
        nikaya: "Saṁyutta Nikāya (Nidānavagga)",
        category: "daily-life",
        readingTime: "5 min",
        importance: "Examines the four nutriments that sustain living beings: physical food, contact, mental volition, and consciousness.",
        layRelevance: "Vital for investigating what feeds compulsive browsing, consumerism, and toxic mental loops in daily life.",
        keyConcepts: ["Four Nutriments", "Kabaḷīkāro Āhāro", "Phassāhāro", "Manosañcetanāhāro", "Viññāṇāhāro"],
        suttaCentralUrl: "https://suttacentral.net/sn12.11/en/sujato",
        studyNotes: "Each nutriment has craving as its source. By understanding what we feed our senses, we starve unwholesome habits and nourish clarity.",
        reflectionQuestion: "What sensory impressions (phassāhāra) am I continuously feeding my mind during off-hours?"
      },
      {
        code: "SN 12.17",
        paliTitle: "Acela Sutta",
        transTitle: "Discourse to the Naked Ascetic Kassapa",
        nikaya: "Saṁyutta Nikāya (Nidānavagga)",
        category: "daily-life",
        readingTime: "5 min",
        importance: "Examines moral agency and causation: rejecting both self-created suffering (fatalistic guilt) and other-created suffering (victimhood).",
        layRelevance: "Prevents toxic guilt while maintaining ethical responsibility in household and professional environments.",
        keyConcepts: ["Self-made Suffering", "Other-made Suffering", "Ethical Responsibility", "Middle Path of Causation"],
        suttaCentralUrl: "https://suttacentral.net/sn12.17/en/sujato",
        studyNotes: "To say 'one who acts is the one who experiences' leads to eternalism; to say 'one acts and another experiences' leads to annihilationism. The Buddha teaches the Dhamma in the middle by dependent origination.",
        reflectionQuestion: "Am I caught in either paralyzing self-blame or resentful victimhood toward others?"
      },
      {
        code: "SN 12.38",
        paliTitle: "Cetanā Sutta",
        transTitle: "Volition & Intention Discourse",
        nikaya: "Saṁyutta Nikāya (Nidānavagga)",
        category: "daily-life",
        readingTime: "4 min",
        importance: "Reveals how what one intends, what one plans, and whatever one has an underlying obsession with establishes a landing base for consciousness.",
        layRelevance: "Alerts householders to how private mental daydreaming and planning silently shape tomorrow's reality and character.",
        keyConcepts: ["Intention (Cetanā)", "Planning (Pakappeti)", "Underlying Obsession (Anuseti)", "Station of Consciousness"],
        suttaCentralUrl: "https://suttacentral.net/sn12.38/en/sujato",
        studyNotes: "Even if you do not actively intend or plan, underlying dormant tendencies (anusaya) still provide a foothold for consciousness and future stress.",
        reflectionQuestion: "What background preoccupations am I continually rehearsing in the quiet moments of my day?"
      },
      {
        code: "SN 36.6",
        paliTitle: "Salla Sutta",
        transTitle: "The Dart / The Arrow",
        nikaya: "Saṁyutta Nikāya (Vedanāsaṁyutta)",
        category: "mindfulness",
        readingTime: "5 min",
        importance: "The foundational canonical teaching distinguishing the first arrow (physical pain) from the second arrow (mental resistance and anguish).",
        layRelevance: "The single most liberating practical framework for navigating physical illness, fatigue, criticism, and emotional setbacks.",
        keyConcepts: ["First Arrow (Kāyika Vedanā)", "Second Arrow (Cetasika Dukkha)", "Aversion (Paṭigha)", "Sensory Escapism"],
        suttaCentralUrl: "https://suttacentral.net/sn36.6/en/sujato",
        studyNotes: "An uninstructed run-of-the-mill person struck by a painful feeling grieves and resists, being struck by two darts. The instructed noble disciple feels the first dart without shooting themselves with the second.",
        reflectionQuestion: "Can I distinguish the unavoidable physical or verbal situation from my own emotional protest against it?"
      },
      {
        code: "SN 35.28",
        paliTitle: "Ādittapariyāya Sutta",
        transTitle: "The Fire Sermon",
        nikaya: "Saṁyutta Nikāya (Saḷāyatanasaṁyutta)",
        category: "mindfulness",
        readingTime: "6 min",
        importance: "Delivered on Gayāsīsa hill: proclaims that the all is burning—eyes, forms, consciousness, contact, and feeling are ablaze with greed, hatred, and delusion.",
        layRelevance: "Awakens the lay practitioner from sensory complacency in our hyper-stimulating digital world.",
        keyConcepts: ["All is Burning (Sabbaṁ Ādittaṁ)", "Fire of Greed, Hatred, Delusion", "Disenchantment (Nibbidā)", "Sensory Fire"],
        suttaCentralUrl: "https://suttacentral.net/sn35.28/en/sujato",
        studyNotes: "Seeing the sense faculties as burning cools the compulsive thirst to chase after endless sensations and brings dispassionate freedom.",
        reflectionQuestion: "Is my screen usage and entertainment cooling my mind, or pouring more fuel on sensory flames?"
      },
      {
        code: "SN 47.13",
        paliTitle: "Cunda Sutta",
        transTitle: "Discourse with Cunda",
        nikaya: "Saṁyutta Nikāya (Satipaṭṭhānasaṁyutta)",
        category: "mindfulness",
        readingTime: "7 min",
        importance: "Spoken when Venerable Sāriputta passes away: the Buddha consoles Ānanda and directs him to dwell with oneself as an island, with the Dhamma as a refuge, through the four foundations of mindfulness.",
        layRelevance: "Essential guidance for coping with grief, loss of family members, mentorship endings, and major life transitions.",
        keyConcepts: ["Dwell as an Island (Attadīpā)", "Dhamma as Refuge (Dhammadīpā)", "Four Satipaṭṭhānas", "Acceptance of Dissolution"],
        suttaCentralUrl: "https://suttacentral.net/sn47.13/en/sujato",
        studyNotes: "The Buddha asks Ānanda: 'Did Sāriputta take the aggregate of virtue, concentration, wisdom, or release with him?' Seeing the natural impermanence of all conditioned things, mindfulness provides the unshakable refuge.",
        reflectionQuestion: "When facing major loss or family changes, am I resting on external crutches or anchoring in the Dhamma within?"
      }
    ]
  },

  // E. Daily-Life Applications (5 Realistic Lay Scenarios)
  dailyScenarios: {
    sectionTitle: "Dependent Arising in Ordinary Life",
    sectionSubtitle: "Five realistic lay scenarios demonstrating how the links operate and how mindful Dhamma intervenes",
    intro: "The links of dependent arising are not abstract scholastic formulas; they describe your actual daily psychology. Inspect the five scenarios below to see where reactive chains begin and how wisdom interrupts them:",
    scenarios: [
      {
        id: "scenario-1",
        number: "01",
        title: "Criticism at Work",
        situation: "During a team presentation, a manager or colleague publicly criticizes your proposal as flawed, inefficient, and poorly thought out.",
        directlyExperienced: "Acoustic sound waves strike the ear (phassa), recognized as verbal meaning (viññāṇa + saññā). A sharp, immediate visceral contraction and heat in the chest (unpleasant vedanā).",
        conditionsPresent: "Workplace fatigue, vulnerability about job security, an underlying desire for professional approval, and the expectation of mutual respect.",
        cravingPoint: "Taṇhā for non-becoming (vibhava-taṇhā): a fierce thirst to annihilate the uncomfortable feeling, silence the critic, retaliate, or defend ego.",
        clingingPoint: "Upādāna to identity: 'I am a competent professional! How dare they disrespect my work?' Clinging to the view that everyone must agree with my proposal.",
        dhammaResponse: "Apply the Salla Sutta (SN 36.6): Pause immediately. Recognize: 'The first dart (the words and the unpleasant physical feeling) has landed. Do I shoot myself with the second dart of rage, justification, or resentment?' Breathe, allow the unpleasant vedanā to be felt as bare sensation without feeding speech, and respond with calm, objective professional clarity.",
        reflectionQuestion: "Can I let the criticism hang in the air for five full seconds before opening my mouth to respond?",
        suttas: ["SN 36.6 (The Arrow)", "MN 21 (The Simile of the Saw)", "SN 12.2 (Vibhaṅga)"]
      },
      {
        id: "scenario-2",
        number: "02",
        title: "The Compulsive Desire to Buy Something",
        situation: "While browsing an online store late at night, you see a sleek gadget or luxury item on discount that you didn't know existed ten minutes ago.",
        directlyExperienced: "Photons strike the eye-base (phassa), followed by pleasant visual feeling tone (sukha-vedanā) and mental images of how owning the item will enhance your life.",
        conditionsPresent: "Tiredness from a long workday, boredom, stress, easy digital one-click payment, and consumerist marketing designed to induce lack.",
        cravingPoint: "Kāma-taṇhā: thirsty craving for the anticipated pleasant dopamine hit of unboxing, possessing, and showing off the new acquisition.",
        clingingPoint: "Clinging to the identity of being upgraded: 'With this item, I will finally be organized, stylish, and happy.' Rationalizing the purchase as an emergency necessity.",
        dhammaResponse: "Apply the Āhāra Sutta (SN 12.11) & MN 13: Notice that the craving is a burning sensation of hunger, not a true need. Step away from the screen. Wait 48 hours before purchasing. Contemplate the lifecycle of the object: its manufacture, cost, eventual obsolescence, and clutter. Enjoy freedom from being hooked.",
        reflectionQuestion: "What hole in my immediate emotional state am I attempting to patch with this purchase?",
        suttas: ["SN 12.11 (Nutriment)", "MN 13 (The Mass of Suffering)", "AN 4.62 (Anaṇa Sutta)"]
      },
      {
        id: "scenario-3",
        number: "03",
        title: "Conflict with a Partner or Family Member",
        situation: "Your spouse or family member makes an exasperated remark about household chores, finances, or family scheduling, triggering deep frustration.",
        directlyExperienced: "Hearing tone of voice (ear-contact). Instant sting of feeling misunderstood or unappreciated (unpleasant vedanā).",
        conditionsPresent: "Accumulated domestic stress, old historical grievances, sleep deprivation, and the presumption that family should never express frustration.",
        cravingPoint: "Craving for vindication: the urge to prove the other person hypocritical, bring up their past mistakes, or shut down emotionally through stonewalling.",
        clingingPoint: "Clinging to self-righteousness (diṭṭhupādāna): 'I sacrifice so much for this household, and nobody values me.' Clinging to past narratives.",
        dhammaResponse: "Apply DN 15 & Cetanā Sutta (SN 12.38): See that the conflict is not an isolated demon, but a dependently arisen event. The other person's sharp tone arose from their own exhaustion, fear, and conditioning. Drop the mental courtroom trial. Acknowledge their stress with compassion (karuṇā), speak with truthful restraint, and address the logistical task cooperatively.",
        reflectionQuestion: "Am I trying to solve the practical situation, or am I trying to win an ideological victory over my partner?",
        suttas: ["DN 15 (Mahānidāna)", "SN 12.38 (Intention)", "MN 128 (Upakkilesa Sutta)"]
      },
      {
        id: "scenario-4",
        number: "04",
        title: "Anxiety About Money and Future Security",
        situation: "Looking at inflation rates, investment accounts, mortgage statements, or business revenue reports brings on sudden worry about future insolvency.",
        directlyExperienced: "Reading financial numbers (eye-contact), followed by mental evaluation (manosaṅkhāra). Constriction in the throat and shallow breathing (unpleasant vedanā).",
        conditionsPresent: "Real economic uncertainty, societal financial pressures, family obligations, and our natural instinct to build permanent fortifications in an impermanent world.",
        cravingPoint: "Bhava-taṇhā: craving for permanent stability and absolute guaranteed security in an inherently unstable and changing world.",
        clingingPoint: "Clinging to control: obsessively refreshing spreadsheets, catastrophic future projections ('What if we lose everything?'), and ruminative worry.",
        dhammaResponse: "Apply SN 12.20 & AN 4.62 (The Bliss of Wealth): Clearly separate prudent lay financial stewardship from catastrophic mental proliferation. Prudent planning is wholesome right livelihood; panic is unwholesome saṅkhāra. Take the wise practical steps (budgeting, emergency saving), while holding worldly wealth with an open hand, knowing that true wealth is ethical integrity (sīla-dhana).",
        reflectionQuestion: "Can I distinguish between actionable practical planning and compulsive, unproductive worry?",
        suttas: ["SN 12.20 (Conditions)", "AN 4.62 (Anaṇa Sutta)", "AN 8.54 (Dīghajāṇu)"]
      },
      {
        id: "scenario-5",
        number: "05",
        title: "Pleasure, Distraction & Modern Addiction",
        situation: "You open social media or video streaming 'just for two minutes' to unwind, and find yourself still scrolling ninety minutes later, feeling drained and irritable.",
        directlyExperienced: "Rapid visual and auditory contact (phassa), generating continuous micro-bursts of mild pleasant feeling (sukha-vedanā) followed by immediate neutral emptiness.",
        conditionsPresent: "Algorithmic dopamine engineering, resistance to starting a difficult work project, mental restlessness (uddhacca), and easy mobile access.",
        cravingPoint: "Kāma-taṇhā for the next burst of novel stimulation. Craving to avoid silence and self-reflection.",
        clingingPoint: "Clinging to distraction: 'Just one more post; I need to relax.' Identifying with the endless stream of online drama.",
        dhammaResponse: "Apply the Fire Sermon (SN 35.28): Observe directly: 'Is this fire cooling me, or burning me?' Feel the dry agitation in the eyes and mind. Put the device face down in another room. Stand up, feel the soles of the feet on the earth, take five conscious breaths, and return to meaningful presence with family or contemplative stillness.",
        reflectionQuestion: "What authentic inner peace am I sacrificing in exchange for five seconds of algorithmic stimulation?",
        suttas: ["SN 35.28 (The Fire Sermon)", "MN 118 (Ānāpānasati)", "MN 20 (Vitakkasaṇṭhāna)"]
      }
    ]
  },

  // F. Practical Exercise: Observe the Links (Interactive Guided Tool)
  guidedExercise: {
    title: "Interactive Exercise: Observe the Links",
    subtitle: "A 3–5 minute contemplative tool to inspect real-life conditionality in your own experience",
    privacyNotice: "🔒 100% Private: Your responses remain strictly on this local device and are never sent to external servers.",
    disclaimer: "Note: This is a gradual training in mindfulness and discernment (sati-sampajañña). It does not claim to instantly eradicate all craving, but builds the capacity to pause between feeling and reaction.",
    steps: [
      {
        step: 1,
        title: "1. Recall the Manageable Experience",
        prompt: "Bring to mind a recent, mild situation involving attraction, irritation, or frustration (e.g. an annoying email, a sudden craving, or a minor delay):",
        placeholder: "Describe the situation briefly (e.g., received an unexpected bill / colleague spoke sharply)..."
      },
      {
        step: 2,
        title: "2. Identify the Sense Contact (Phassa)",
        prompt: "Which sense door received the initial impact? What was the raw contact before you formed a mental narrative?",
        options: [
          "Eye (Saw something)",
          "Ear (Heard words or sound)",
          "Nose / Tongue (Smell or taste)",
          "Body (Physical pain, touch, or temperature)",
          "Mind (A sudden memory, thought, or daydream)"
        ],
        placeholder: "Name the raw sensory contact..."
      },
      {
        step: 3,
        title: "3. Name the Feeling Tone (Vedanā)",
        prompt: "What immediate affective tone arose at that split second?",
        options: [
          "Pleasant (Sukha — liked it, felt rewarding)",
          "Unpleasant (Dukkha — stung, felt tight or painful)",
          "Neither-pleasant-nor-unpleasant (Upekkhā — neutral, flat)"
        ],
        placeholder: "Describe the physical sensation of that feeling tone..."
      },
      {
        step: 4,
        title: "4. Notice Craving (Taṇhā)",
        prompt: "Did craving arise? In what direction did the mind pull?",
        options: [
          "Wanting to hold onto and prolong the pleasure (Kāma-taṇhā)",
          "Wanting to achieve or secure a self-state / status (Bhava-taṇhā)",
          "Wanting to eliminate, destroy, or escape the discomfort (Vibhava-taṇhā)",
          "Mindfulness was present: No reactive craving arose"
        ],
        placeholder: "Describe the impulse or urge you noticed..."
      },
      {
        step: 5,
        title: "5. Observe Clinging (Upādāna)",
        prompt: "Did the mind grasp onto an identity, expectation, or rigid viewpoint?",
        placeholder: "e.g., 'They should respect me' / 'I must have this right now' / 'This shouldn't happen'..."
      },
      {
        step: 6,
        title: "6. Reflect on Consequences",
        prompt: "What were (or would be) the consequences of blindly following that reactive chain into speech or action?",
        placeholder: "e.g., Damaged relationship, financial waste, hours of regret, renewed mental agitation..."
      },
      {
        step: 7,
        title: "7. The Power of the Golden Gap",
        prompt: "What changes if the feeling tone is clearly recognized at the contact point without automatically fueling reaction?",
        placeholder: "e.g., The feeling arises and dissolves on its own; my speech remains kind and composed..."
      }
    ],
    finishButton: "Generate Contemplative Summary",
    resetButton: "Reset Exercise"
  },

  // G. The Path of Practice (Noble Eightfold Path Integration)
  pathOfPractice: {
    sectionTitle: "The Path of Practice: Dependent Arising & The Eightfold Path",
    sectionSubtitle: "How conditionality is systematically harnessed through the eight factors of the Noble Path",
    intro: "Dependent arising is not merely a model for passive observation; it reveals the levers of liberation. The Noble Eightfold Path (Ariya Aṭṭhaṅgika Magga) systematically dismantles the conditions of ignorance and craving, establishing wholesome conditions for peace.",
    factors: [
      {
        factor: "Right View (Sammā-diṭṭhi)",
        pali: "Sammā-diṭṭhi",
        relation: "Directly perceives conditionality: knowing that suffering arises from craving, and that cultivating the Path leads to freedom (MN 9, SN 12.15)."
      },
      {
        factor: "Right Intention (Sammā-saṅkappa)",
        pali: "Sammā-saṅkappa",
        relation: "Replaces the cravings of greed, ill-will, and cruelty with intentions of renunciation (nekkhamma), goodwill (mettā), and harmlessness (ahiṁsā)."
      },
      {
        factor: "Right Speech (Sammā-vācā)",
        pali: "Sammā-vācā",
        relation: "Interrupts the reactive link between unpleasant feeling tone and verbal malice. Abandons false speech, divisive speech, harsh speech, and idle chatter."
      },
      {
        factor: "Right Action (Sammā-kammanta)",
        pali: "Sammā-kammanta",
        relation: "Ensures volitional formations (saṅkhārā) do not produce harm: refraining from killing, taking what is not given, and sexual misconduct."
      },
      {
        factor: "Right Livelihood (Sammā-ājīva)",
        pali: "Sammā-ājīva",
        relation: "Structures work so it does not nourish greed, deception, or weaponized commerce, building clean conditions for household peace."
      },
      {
        factor: "Right Effort (Sammā-vāyāma)",
        pali: "Sammā-vāyāma",
        relation: "Guards the mind: preventing unarisen unwholesome states, abandoning arisen ones, cultivating unarisen wholesome states, and sustaining wholesome momentum."
      },
      {
        factor: "Right Mindfulness (Sammā-sati)",
        pali: "Sammā-sati",
        relation: "Maintains clear awareness at the six sense doors, catching feeling tones at the contact point before craving can ignite."
      },
      {
        factor: "Right Concentration (Sammā-samādhi)",
        pali: "Sammā-samādhi",
        relation: "Unifies and gladdens the mind, providing the steady calm required to see conditionality clearly without distraction or panic."
      }
    ],
    dailyPractices: [
      {
        timing: "Morning Contemplation (5–10 min)",
        title: "Establishing the Compass of Conditionality",
        practice: "Before checking screens, sit quietly and contemplate SN 12.20: 'Whatever I encounter today will arise dependent on conditions. I will guard the six sense doors and not shoot myself with second arrows.'"
      },
      {
        timing: "Midday Work Mindfulness",
        title: "Catching the Contact-Feeling Gap",
        practice: "Set an hourly bell or reminder. Pause for three conscious breaths whenever an unpleasant email, notification, or conversation arrives. Notice the raw feeling tone before replying."
      },
      {
        timing: "Evening Ethical Review (5 min)",
        title: "Non-Judgmental Daily Debrief",
        practice: "Review the day: Where did craving arise? Where was clinging unhooked? Rejoice in any moment of restraint, and dedicate the wholesome merit to family harmony."
      },
      {
        timing: "Regular Sitting Meditation",
        title: "Samatha & Vipassanā as Co-Workers",
        practice: "Develop breath collectedness (ānāpānasati) to steady the mind, then observe the rising, staying, and passing of physical sensations and mental formations as dependently arisen phenomena."
      }
    ]
  },

  // H. Study Pathways (Three Learning Tracks)
  studyPathways: {
    sectionTitle: "Structured Study Pathways",
    sectionSubtitle: "Configurable tracks designed to guide lay study from introductory clarity to deep textual mastery",
    disclaimer: "These pathways are pedagogical study guides designed for lay study, not rigid dogmatic requirements.",
    tracks: [
      {
        id: "beginner-track",
        name: "Beginner Track — 7 Days",
        duration: "7 Days (15 min/day)",
        description: "A foundational introduction to the master principle, the 12 links, and daily emotional management.",
        days: [
          { day: 1, sutta: "SN 12.20 (Paccaya Sutta)", task: "Read the principle of conditionality. Reflect on natural laws vs personal control." },
          { day: 2, sutta: "SN 12.2 (Vibhaṅga Sutta)", task: "Read the canonical sequence of the twelve links. Memorize the 12 terms." },
          { day: 3, sutta: "SN 36.6 (Salla Sutta)", task: "Read the Arrow Sutta. Practice spotting the first vs second arrow during workday." },
          { day: 4, sutta: "SN 35.28 (Ādittapariyāya)", task: "Read the Fire Sermon. Observe how screens and digital media fuel restlessness." },
          { day: 5, sutta: "SN 12.15 (Kaccāyanagotta)", task: "Read the Right View discourse. Avoid the extremes of nihilism and eternalism." },
          { day: 6, sutta: "5 Lay Scenarios", task: "Review the five workplace and relationship scenarios. Run the interactive exercise." },
          { day: 7, sutta: "Synthesis & Reflection", task: "Write a reflection in the journal on what you discovered about your mind." }
        ]
      },
      {
        id: "intermediate-track",
        name: "Intermediate Track — 14 Days",
        duration: "14 Days (25 min/day)",
        description: "Deeps study into nutriment, intention, moral agency, and transcendental conditionality.",
        days: [
          { day: 1, sutta: "MN 9 (Part 1)", task: "Study wholesome and unwholesome roots with Ven. Sāriputta." },
          { day: 2, sutta: "MN 9 (Part 2)", task: "Study the four nutriments of existence and their relationship to suffering." },
          { day: 3, sutta: "SN 12.11 (Āhāra Sutta)", task: "Audit your sensory consumption (phassāhāra) throughout the day." },
          { day: 4, sutta: "SN 12.17 (Acela Sutta)", task: "Contemplate causation without victimhood or fatalistic guilt." },
          { day: 5, sutta: "SN 12.38 (Cetanā Sutta)", task: "Inspect your silent background planning and latent mental preoccupations." },
          { day: 6, sutta: "Guided Exercise", task: "Complete the 7-step 'Observe the Links' reflection on a real relationship tension." },
          { day: 7, sutta: "Midway Review", task: "Review journal entries and consolidate understanding of the contact-feeling link." },
          { day: 8, sutta: "SN 12.23 (Upanisa Sutta)", task: "Study Transcendental Dependent Arising: suffering as springboard for faith." },
          { day: 9, sutta: "SN 12.23 (Meditation)", task: "Sit in breath meditation contemplating the progression from joy to release." },
          { day: 10, sutta: "SN 47.13 (Cunda Sutta)", task: "Mindfulness as an island refuge when facing grief and family changes." },
          { day: 11, sutta: "MN 141 (Saccavibhaṅga)", task: "Connect the 12 links to the Five Aggregates (pañcupādānakkhandhā)." },
          { day: 12, sutta: "Eightfold Path Integration", task: "Examine how each of the eight path factors operates in your career." },
          { day: 13, sutta: "Sense Restraint Day", task: "Practice mindful guarding of the six sense doors during mobile phone use." },
          { day: 14, sutta: "Reflection & Dedication", task: "Summarize your 14-day study and set intentions for ongoing daily practice." }
        ]
      },
      {
        id: "advanced-track",
        name: "Advanced Track — 30 Days",
        duration: "30 Days (40 min/day)",
        description: "Rigorous canonical deep dive into DN 15, cross-sutta doctrinal comparison, and commentarial perspectives.",
        days: [
          { day: 1, sutta: "DN 15 (Section 1)", task: "The Buddha's warning to Ānanda: the deep, tangled nature of dependent arising." },
          { day: 2, sutta: "DN 15 (Section 2)", task: "The reciprocal relationship between consciousness and name-and-form." },
          { day: 3, sutta: "DN 15 (Section 3)", task: "The sociological chain: from craving to seeking, acquisition, and strife." },
          { day: 4, sutta: "DN 15 (Synthesis)", task: "Write a comprehensive study note on the social psychology of causation." },
          { day: 5, sutta: "SN 12.65 (Nagara Sutta)", task: "The Ancient City discourse: the Buddha rediscovering the forgotten path." },
          { day: 6, sutta: "SN 12.67 (Naḷakalāpī)", task: "Ven. Sāriputta's simile of the two sheaves of reeds supporting each other." },
          { day: 7, sutta: "Doctrinal Evaluation", task: "Compare the 3-lives model (Buddhaghosa) vs the moment-to-moment model." }
        ]
      }
    ]
  },

  // I. Reflection Journal
  reflectionJournal: {
    sectionTitle: "Contemplative Reflection Journal",
    sectionSubtitle: "Log real observations of conditionality in your life. Stored strictly in local browser storage.",
    formHeading: "New Reflection Entry",
    prompts: [
      { id: "q1", label: "1. What happened? (Situation or event)", placeholder: "Briefly record the event or circumstance..." },
      { id: "q2", label: "2. What feeling tone was present? (Pleasant / Unpleasant / Neutral)", placeholder: "Describe the affective feeling tone..." },
      { id: "q3", label: "3. What did I crave or resist?", placeholder: "Notice where the mind pulled or pushed..." },
      { id: "q4", label: "4. What view, expectation, or identity did I cling to?", placeholder: "Identify the self-story or demand..." },
      { id: "q5", label: "5. What did I learn about conditionality from this?", placeholder: "Insight gained from seeing causes and effects..." },
      { id: "q6", label: "6. Which sutta illuminated this experience?", placeholder: "e.g., SN 36.6, SN 12.11, SN 12.20..." }
    ],
    saveButtonText: "Save Journal Entry",
    entriesHeading: "Your Saved Reflections",
    noEntriesNotice: "No entries recorded yet. Complete the prompt above to begin your personal contemplation archive.",
    exportButtonText: "Export Entries (JSON)",
    clearAllButtonText: "Clear Archive"
  },

  // J. Frequently Asked Questions (10 Canonical FAQs)
  faqs: {
    sectionTitle: "Frequently Asked Questions",
    sectionSubtitle: "Rigorous canonical answers grounded in early Buddhist discourses",
    items: [
      {
        q: "What is dependent arising in simple terms?",
        a: "Dependent arising (paṭiccasamuppāda) is the universal principle that phenomena do not exist independently, causelessly, or by divine decree. When specific causes and conditions gather, corresponding results arise; when those conditions dissolve, the results cease. In Buddhism, it specifically diagnoses how psychological suffering arises from craving and ignorance, and how it permanently ceases through wisdom."
      },
      {
        q: "Why are there twelve links? Are they fixed?",
        a: "The standard list of twelve links is the most complete and frequently repeated teaching model in the discourses, but it is not a rigid dogma. In other suttas, the Buddha articulates shorter variations: DN 15 omits the six sense bases and begins with consciousness and name-and-form; SN 12.65 emphasizes the reciprocal loop between consciousness and name-and-form; and the Fire Sermon (SN 35.28) focuses directly on sense bases, contact, and feeling. The core principle remains conditionality (idappaccayatā)."
      },
      {
        q: "Does dependent arising mean that everything in my life is predetermined?",
        a: "No. The Buddha explicitly refuted fatalism and strict predetermination (niyativāda / pubbekatahetu). Conditionality means that current experience is shaped by past karma, but your present intention (cetanā) right now is a new, creative condition. If everything were predetermined, spiritual practice and ethical choices would be meaningless. You cannot change the feeling that has already arisen, but you can choose not to react with craving."
      },
      {
        q: "Is dependent arising the same as karma?",
        a: "Karma is an essential component within dependent arising, specifically represented by link #2 (Saṅkhārā / volitional formations) and link #10 (Bhava / becoming). However, dependent arising is the broader cosmic and psychological framework of conditionality within which karma operates."
      },
      {
        q: "How does dependent arising relate to the teaching of Non-Self (Anattā)?",
        a: "Dependent arising is the direct structural proof of non-self. If there were an immutable, autonomous 'soul' or 'controller', things would not depend on conditions—you could simply command your mind never to feel stress, age, or sickness. Because all experiences arise dependent on causes and cease when causes cease, no permanent independent owner can be found among the five aggregates."
      },
      {
        q: "Does the teaching apply to everyday lay experience, or only to monks?",
        a: "It applies directly to every human mind. The Buddha taught causation to householders like Anāthapiṇḍika, Citta the householder, and queen Mallikā. Every time you get annoyed at a text message, compulsively buy something, or pause before retaliating in an argument, you are directly experiencing and working with the links of dependent arising."
      },
      {
        q: "How does dependent arising relate to the Four Noble Truths?",
        a: "They are two sides of the same diagnostic coin. The forward sequence of dependent arising (arising of links 1 through 12) is an expanded anatomical breakdown of the Second Noble Truth (Samudaya / Origin of Dukkha). The reverse sequence (cessation of links 1 through 12) is the detailed breakdown of the Third Noble Truth (Nirodha / Cessation of Dukkha)."
      },
      {
        q: "How does the cessation of craving relate to ultimate liberation (Nibbāna)?",
        a: "Craving (taṇhā) is the proximate cause that fuels clinging and renewed becoming. In the discourses, Nibbāna is described as 'taṇhākkhayo' (the destruction of craving) and 'virāgo' (dispassion). When the fire of craving is starved of fuel, the unconditioned peace of Nibbāna is directly realized."
      },
      {
        q: "Must I become a monastic to practice and benefit from this teaching?",
        a: "No. While monastic life provides seclusion for intensive contemplation, hundreds of lay men and women in the canonical suttas attained the first three stages of awakening (Stream-entry, Once-returning, and Non-returning) while running businesses, raising children, and governing households by understanding dependent arising and practicing Right View."
      },
      {
        q: "How do different Theravāda interpretations understand the twelve links?",
        a: "In the classical commentarial tradition represented by Ācariya Buddhaghosa in the Visuddhimagga, the twelve links are primarily mapped across three lifetimes (past life: ignorance and formations; present life: consciousness through becoming; future life: birth and aging-death). In modern Theravāda, teachers like Ajahn Buddhadāsa and Bhikkhu Bodhi emphasize that while the three-lives model explains saṁsāric rebirth, the links also describe the moment-to-moment psychological birth of the ego in daily experience. Both models are rooted in the same canonical principle of conditionality."
      }
    ]
  }
};
const DEPENDENT_ARISING_MODULE_PT = {
  // A. Hero Section & Master Principle
  hero: {
    title: "Origem Dependente na Vida Cotidiana",
    paliTitle: "Paṭiccasamuppāda",
    subtitle: "Compreender como o sofrimento surge, como é sustentado e como pode cessar.",
    introText: "A origem dependente é o ensinamento do Buda sobre a condicionalidade: quando condições particulares estão presentes, os fenômenos correspondentes surgem; quando essas condições cessam, os fenômenos dependentes cessam. Ela fornece a estrutura para compreender o sofrimento e a possibilidade de libertação.",
    canonicalPassage: {
      suttaCode: "SN 12.20",
      paliTitle: "Paccaya Sutta",
      englishTitle: "Condições",
      excerptPali: "Uppādā vā, bhikkhave, tathāgatānaṁ anuppādā vā tathāgatānaṁ, ṭhitāva sā dhātu dhammaṭṭhitatā dhammaniyāmatā idappaccayatā.",
      excerptTrans: "Quer os Realizados surjam ou não, permanece esta realidade fundamental: a estabilidade do Dhamma, a lei do Dhamma, a condicionalidade específica.",
      sourceUrl: "https://suttacentral.net/sn12.20/en/sujato",
      citation: "Saṁyutta Nikāya 12.20 • Paccaya Sutta"
    },
    primaryActions: [
      { id: "action-study", label: "Iniciar o Estudo", target: "#pa-what-is", icon: "📖" },
      { id: "action-links", label: "Explorar os 12 Elos", target: "#pa-twelve-links", icon: "🔗" },
      { id: "action-daily", label: "Prática no Cotidiano", target: "#tab-household", icon: "🏡" }
    ]
  },

  // B. What is Dependent Arising? (Three Levels & Comparison Panel)
  whatIs: {
    sectionTitle: "O que é a Origem Dependente?",
    sectionSubtitle: "Uma exposição gradual em três níveis sobre condicionalidade e libertação",
    level1: {
      number: "1",
      badge: "Nível 1 — O Princípio Mestre",
      title: "Condicionalidade Específica (Idappaccayatā)",
      paliFormula: "Imasmiṁ sati idaṁ hoti, imassuppādā idaṁ uppajjati; imasmiṁ asati idaṁ na hoti, imassa nirodhā idaṁ nirujjhati.",
      translationFormula: "Quando isto existe, aquilo vem a ser; com o surgimento disto, aquilo surge. Quando isto não existe, aquilo não vem a ser; com a cessação disto, aquilo cessa.",
      detail: "A condicionalidade não é uma corrente linear rígida de predestinação fatalista, nem o decreto de uma entidade criadora. No Budismo primitivo, todas as experiências surgem quando condições favoráveis convergem e se dissolvem quando tais condições se dispersam. Para praticantes leigos, isso remove a culpa paralisante: em vez de dizer 'sou uma pessoa raivosa', investiga-se: 'quais condições geraram este estado?'"
    },
    level2: {
      number: "2",
      badge: "Nível 2 — O Surgimento do Sofrimento (Samudaya-vāra)",
      title: "A Sequência Padrão dos Doze Elos",
      intro: "A formulação canônica padrão articula os doze elos pelos quais o sofrimento e o ciclo de renascimentos são sustentados:",
      linksSequence: [
        { num: "01", pali: "Avijjā", trans: "Ignorância / Desconhecimento das Quatro Nobres Verdades" },
        { num: "02", pali: "Saṅkhārā", trans: "Formações Volitivas / Fabricações Kármicas" },
        { num: "03", pali: "Viññāṇa", trans: "Consciência / Conhecimento Discriminativo" },
        { num: "04", pali: "Nāmarūpa", trans: "Nome-e-Forma / Fatores Mentais e Matéria" },
        { num: "05", pali: "Saḷāyatana", trans: "Seis Bases dos Sentidos (Olhos, Ouvidos, Nariz, Língua, Corpo, Mente)" },
        { num: "06", pali: "Phassa", trans: "Contato Sensorial" },
        { num: "07", pali: "Vedanā", trans: "Sensação (Agradável, Desagradável, Neutra)" },
        { num: "08", pali: "Taṇhā", trans: "Desejo / Sede Compulsiva" },
        { num: "09", pali: "Upādāna", trans: "Apego / Agarre (Prazeres, Visões, Ritos, Identidade)" },
        { num: "10", pali: "Bhava", trans: "Devir / Estados de Existência" },
        { num: "11", pali: "Jāti", trans: "Nascimento / Emergência de Identidade" },
        { num: "12", pali: "Jarāmaraṇa", trans: "Envelhecimento e Morte, Pesar, Lamentação e Desespero" }
      ],
      canonicalCulmination: "Evametassa kevalassa dukkhakkhandhassa samudayo hoti — 'Assim é a origem de toda esta massa de sofrimento.'",
      caveat: "Salvaguarda Doutrinária: Estes doze elos não devem ser vistos como objetos estanques nem reduzidos meramente a um processo psicológico instantâneo sem continuidade kármica entre vidas. No Theravāda clássico, eles explicam tanto a continuidade trans-temporal quanto a reatividade no momento presente."
    },
    level3: {
      number: "3",
      badge: "Nível 3 — A Cessação do Sofrimento (Nirodha-vāra)",
      title: "A Formulação Inversa e a Verdadeira Libertação",
      paliFormula: "Avijjāya tv’eva asesavirāganirodhā saṅkhāranirodho... evametassa kevalassa dukkhakkhandhassa nirodho hoti.",
      translationFormula: "Com o desvanecimento e cessação completa da ignorância, as formações cessam... assim é a cessação de toda esta massa de sofrimento.",
      detail: "A cessação é a extinção do desejo compulsivo, não a aniquilação física. Uma pessoa liberta continua a perceber o mundo e sentir sensações físicas, mas como a ilusão foi extinta, o contato ocorre sem gerar apego ou sofrimento."
    },
    comparisonPanel: {
      title: "As Três Dimensões da Condicionalidade",
      subtitle: "Visão geral operacional da prática Theravāda",
      arisingBox: {
        title: "Surgimento (Samudaya)",
        desc: "As condições sustentam ativamente o sofrimento: a ignorância alimenta formações volitivas, e a sensação sem vigilância condiciona o desejo compulsivo."
      },
      cessationBox: {
        title: "Cessação (Nirodha)",
        desc: "As condições são cessadas: através da visão clara, o desejo perde o apoio, o apego é extinto e o combustível do devir se esgota."
      },
      practiceBox: {
        title: "Prática (Magga)",
        desc: "A conduta ética (sīla), o recolhimento mental (samādhi) e a sabedoria (paññā) transformam a mente gradualmente, cultivando o Caminho Óctuplo."
      }
    }
  },

  // C. Twelve Links Explorer (PT)
  twelveLinksExplorer: {
    sectionTitle: "Explorador Interativo dos Doze Elos",
    sectionSubtitle: "Inspecione cada elo através de definições canônicas autênticas ou aplicações cotidianas",
    canonicalModeLabel: "Modo Canônico (Suttas)",
    everydayModeLabel: "Modo Vida Cotidiana",
    modeNotice: "Nota: Os exemplos cotidianos são aplicações ilustrativas demonstrando como a condicionalidade opera no dia a dia, e não transcrições literais de um único discurso.",
    links: [
      {
        num: 1,
        pali: "Avijjā",
        trans: "Ignorância / Não-saber",
        preceding: "Condição raiz sustentada pelas impurezas e atenção desatenta",
        following: "Condiciona Formações Volitivas (Saṅkhārā)",
        canonicalRef: "SN 12.2 • SN 12.12",
        canonicalDef: "Não compreender as Quatro Nobres Verdades. Tomar o impermanente como permanente, o insatisfatório como satisfatório, e o não-eu como um eu substancial.",
        everydayIllustration: "Acreditar piamente que mais uma compra, aprovação social ou vitória em um debate trará paz definitiva.",
        reflectionQuestion: "Onde no meu dia estou assumindo sem questionar que circunstâncias mundanas podem trazer felicidade estável?",
        studyNote: "Avijjā não é falta de erudição intelectual, mas ausência de penetração vivencial nas Quatro Nobres Verdades."
      },
      {
        num: 2,
        pali: "Saṅkhārā",
        trans: "Formações Volitivas",
        preceding: "Condicionado por Ignorância (Avijjā)",
        following: "Condiciona Consciência (Viññāṇa)",
        canonicalRef: "SN 12.2 • MN 44",
        canonicalDef: "Formações corporais (respiração), verbais (pensamento aplicado e sustentado) e mentais (percepção e sensação) impulsionadas pela volição (cetanā).",
        everydayIllustration: "Construir roteiros mentais, ensaiar justificativas interiores e planejar reações defensivas.",
        reflectionQuestion: "Quais scripts mentais e intenções reativas estou fabricando agora?",
        studyNote: "Formações são construções kármicas que preparam o terreno para experiências futuras."
      },
      {
        num: 3,
        pali: "Viññāṇa",
        trans: "Consciência",
        preceding: "Condicionado por Formações (Saṅkhārā)",
        following: "Condiciona Nome-e-Forma (Nāmarūpa)",
        canonicalRef: "SN 12.2 • SN 12.38 • DN 15",
        canonicalDef: "Cognição discriminativa através dos seis sentidos: olhos, ouvidos, nariz, língua, corpo e mente.",
        everydayIllustration: "A percepção imediata que se acende quando a tela do celular pisca com uma notificação.",
        reflectionQuestion: "Consigo observar a consciência pura de saber um som antes de iniciar o comentário mental?",
        studyNote: "A consciência não é uma alma imutável, mas um fluxo condicionado que surge dependente de portas dos sentidos."
      },
      {
        num: 4,
        pali: "Nāmarūpa",
        trans: "Nome-e-Forma",
        preceding: "Condicionado por Consciência (Viññāṇa)",
        following: "Condiciona Seis Bases dos Sentidos (Saḷāyatana)",
        canonicalRef: "SN 12.2 • DN 15 • MN 9",
        canonicalDef: "Nome (nāma): sensação, percepção, volição, contato e atenção. Forma (rūpa): os quatro grandes elementos físicos.",
        everydayIllustration: "O corpo sentado na cadeira conjugado aos atos mentais de rotular, prestar atenção e planejar o trabalho.",
        reflectionQuestion: "Como meus rótulos mentais alteram a vivência das sensações físicas?",
        studyNote: "Em DN 15, consciência e nome-e-forma apoiam-se mutuamente como feixes de junco (SN 12.67)."
      },
      {
        num: 5,
        pali: "Saḷāyatana",
        trans: "Seis Bases dos Sentidos",
        preceding: "Condicionado por Nome-e-Forma (Nāmarūpa)",
        following: "Condiciona Contato (Phassa)",
        canonicalRef: "SN 12.2 • SN 35.28",
        canonicalDef: "Os órgãos e faculdades internas através das quais o mundo é experimentado: visão, audição, olfato, paladar, tato e intelecto.",
        everydayIllustration: "Ter olhos, ouvidos e intelecto expostos diariamente ao bombardeio visual e sonoro de telas e conversas.",
        reflectionQuestion: "Minhas seis portas dos sentidos estão guardadas ou estão inundadas por estímulos desordenados?",
        studyNote: "A guarda dos sentidos (indriya-saṁvara) é o escudo protetor do praticante leigo."
      },
      {
        num: 6,
        pali: "Phassa",
        trans: "Contato",
        preceding: "Condicionado por Seis Bases (Saḷāyatana)",
        following: "Condiciona Sensação (Vedanā)",
        canonicalRef: "SN 12.2 • MN 148",
        canonicalDef: "O encontro entre órgão dos sentidos, objeto sensorial e a respectiva consciência sensorial.",
        everydayIllustration: "Ouvir uma crítica ácida de um colega. O contato é o ponto exato de impacto entre o som e a audição.",
        reflectionQuestion: "Consigo notar a fração de segundo do contato sensorial antes da reação emocional?",
        studyNote: "O contato é o gatilho direto onde a informação do mundo adentra a esfera da consciência."
      },
      {
        num: 7,
        pali: "Vedanā",
        trans: "Sensação",
        preceding: "Condicionado por Contato (Phassa)",
        following: "Condiciona Desejo (Taṇhā)",
        canonicalRef: "SN 12.2 • SN 36.6",
        canonicalDef: "O tom afetivo imediato: agradável (sukha), desagradável (dukkha) ou neutro (adukkhamasukha).",
        everydayIllustration: "O aperto visceral e desagradável no peito ao ler uma mensagem ríspida.",
        reflectionQuestion: "Estou confundindo a sensação pura desagradável com uma narrativa melodramática sobre mim mesmo?",
        studyNote: "Vedanā não é uma emoção complexa, mas o tom afetivo cru. A emoção só surge se o desejo se associar a ela."
      },
      {
        num: 8,
        pali: "Taṇhā",
        trans: "Desejo Compulsivo / Sede",
        preceding: "Condicionado por Sensação (Vedanā)",
        following: "Condiciona Apego (Upādāna)",
        canonicalRef: "SN 12.2 • SN 56.11",
        canonicalDef: "A sede compulsiva: desejo por prazeres sensuais (kāma-taṇhā), por existir/tornar-se (bhava-taṇhā) e por não-existir/aniquilar o desconforto (vibhava-taṇhā).",
        everydayIllustration: "Um colega critica você. O tom desagradável surge. Imediatamente brota o desejo febril de retrucar, silenciá-lo ou provar superioridade.",
        reflectionQuestion: "Consigo sentir o desconforto físico sem permitir que o desejo dite uma resposta automática?",
        studyNote: "Este é o ponto de virada da prática leiga: a sensação é fruto de causas passadas, mas o desejo requer nosso consentimento presente."
      },
      {
        num: 9,
        pali: "Upādāna",
        trans: "Apego / Agarre",
        preceding: "Condicionado por Desejo (Taṇhā)",
        following: "Condiciona Devir (Bhava)",
        canonicalRef: "SN 12.2 • MN 11",
        canonicalDef: "Agarre consolidado a prazeres sensuais, opiniões/visões, rituais e ideias sobre um 'eu'.",
        everydayIllustration: "Bater o pé em uma discussão: 'Eu estou certo! Meu ponto de vista é inegociável!' Agarrar-se a expectativas rígidas.",
        reflectionQuestion: "A qual imagem pessoal ou expectativa inflexível estou me agarrando com unhas e dentes?",
        studyNote: "Upādāna também significa 'combustível'. O desejo é a faísca e o apego alimenta o fogo do estresse."
      },
      {
        num: 10,
        pali: "Bhava",
        trans: "Devir / Existência",
        preceding: "Condicionado por Apego (Upādāna)",
        following: "Condiciona Nascimento (Jāti)",
        canonicalRef: "SN 12.2 • AN 3.76",
        canonicalDef: "A cristalização de um estado de ser pronto para frutificar nos reinos de existência ou mentalmente em papéis psicológicos.",
        everydayIllustration: "Tornar-se completamente absorto no papel da 'vítima incompreendida' ou do 'injustiçado'.",
        reflectionQuestion: "Em qual papel dramático acabei de me engajar?",
        studyNote: "Em AN 3.76, o kamma é o campo, a consciência é a semente e o desejo é a umidade gerando novo devir."
      },
      {
        num: 11,
        pali: "Jāti",
        trans: "Nascimento",
        preceding: "Condicionado por Devir (Bhava)",
        following: "Condiciona Envelhecimento e Morte (Jarāmaraṇa)",
        canonicalRef: "SN 12.2 • MN 141",
        canonicalDef: "O surgimento e consolidação de uma entidade nos planos de existência; psicologicamente, o nascimento pleno de um ego rígido.",
        everydayIllustration: "A personificação completa da identidade ofendida na discussão.",
        reflectionQuestion: "Quem acabou de 'nascer' neste estado mental e que vulnerabilidades esse nascimento gerou?",
        studyNote: "Tudo o que nasce na mente herda imediatamente a fragilidade à decadência e ao ataque."
      },
      {
        num: 12,
        pali: "Jarāmaraṇa",
        trans: "Envelhecimento & Morte",
        preceding: "Condicionado por Nascimento (Jāti)",
        following: "Culmina em Sofrimento, Pesar, Lamentação e Desespero",
        canonicalRef: "SN 12.2 • SN 12.23",
        canonicalDef: "O declínio, a dissolução inevitável e o colapso do que nasceu, gerando dor, lamento e desolação.",
        everydayIllustration: "O desgaste da briga, o cansaço emocional, a distância interpessoal e o remorso amargo após o conflito.",
        reflectionQuestion: "Consigo traçar claramente como esta exaustão presente nasceu do apego inicial?",
        studyNote: "Jarāmaraṇa revela a verdade incontornável: o que nasce do desejo culmina necessariamente em desgaste e perda."
      }
    ]
  },

  // D. Sutta Library (PT)
  suttaLibrary: {
    sectionTitle: "Biblioteca de Suttas Fundamentais",
    sectionSubtitle: "12 Discursos canônicos sobre causalidade, verificação empírica e aplicação na vida leiga",
    searchPlaceholder: "Pesquisar por título, código, termo Pāli ou palavra-chave...",
    filterCategories: [
      { id: "all", label: "Todos os Suttas (12)" },
      { id: "foundational", label: "Fundamentais (6)" },
      { id: "daily-life", label: "Vida Leiga e Causalidade (3)" },
      { id: "mindfulness", label: "Atenção Plena & Vedanā (3)" },
      { id: "liberation", label: "Libertação & Cessação (2)" }
    ],
    suttas: [
      {
        code: "SN 12.2",
        paliTitle: "Vibhaṅga Sutta",
        transTitle: "Análise da Origem Dependente",
        nikaya: "Saṁyutta Nikāya (Nidānavagga)",
        category: "foundational",
        readingTime: "5 min",
        importance: "O dicionário analítico definitivo do cânone primitivo para os doze elos.",
        layRelevance: "Oferece definições canônicas rigorosas, evitando interpretações vagas de autoajuda.",
        keyConcepts: ["12 Elos", "Definições Analíticas", "Condicionalidade", "Avijjā", "Jarāmaraṇa"],
        suttaCentralUrl: "https://suttacentral.net/sn12.2/en/sujato",
        studyNotes: "O Buda define explicitamente cada elo, do envelhecimento-e-morte até a ignorância.",
        reflectionQuestion: "Em momentos de turbulência emocional, consigo recorrer a estas definições precisas?"
      },
      {
        code: "SN 12.15",
        paliTitle: "Kaccāyanagotta Sutta",
        transTitle: "Discurso a Kaccāyana",
        nikaya: "Saṁyutta Nikāya (Nidānavagga)",
        category: "foundational",
        readingTime: "4 min",
        importance: "Articula a Visão Correta como o Caminho do Meio entre o existencialismo ingênuo e o niilismo.",
        layRelevance: "Protege o praticante do cinismo niilista e do apego eterno, oferecendo equilíbrio mental.",
        keyConcepts: ["Visão Correta", "Caminho do Meio", "Tudo Existe", "Nada Existe"],
        suttaCentralUrl: "https://suttacentral.net/sn12.15/en/sujato",
        studyNotes: "Ver o surgimento do mundo através da condicionalidade afasta o niilismo; ver a cessação afasta o eternalismo.",
        reflectionQuestion: "Estou oscilando entre o cinismo ('nada tem sentido') e a fantasia de estabilidade permanente?"
      },
      {
        code: "MN 9",
        paliTitle: "Sammādiṭṭhi Sutta",
        transTitle: "Discurso sobre a Visão Correta",
        nikaya: "Majjhima Nikāya",
        category: "foundational",
        readingTime: "12 min",
        importance: "O Ven. Sāriputta unifica a Origem Dependente com os Quatro Alimentos e as raízes benéficas e prejudiciais.",
        layRelevance: "Estrutura mestra para discernimento ético, clareza mental e desapego na rotina doméstica.",
        keyConcepts: ["Visão Correta", "Quatro Alimentos", "Kusala & Akusala", "Tendências Subjacentes"],
        suttaCentralUrl: "https://suttacentral.net/mn9/en/sujato",
        studyNotes: "A Visão Correta é estabelecida compreendendo o prejudicial, suas raízes, o benéfico e a nutrição da mente.",
        reflectionQuestion: "Qual tipo de alimento mental estou consumindo durante meu expediente profissional?"
      },
      {
        code: "SN 12.20",
        paliTitle: "Paccaya Sutta",
        transTitle: "Condições",
        nikaya: "Saṁyutta Nikāya (Nidānavagga)",
        category: "foundational",
        readingTime: "4 min",
        importance: "Distingue entre a lei natural da condicionalidade e os fenômenos originados dependentemente.",
        layRelevance: "Lembra o praticante de que a condicionalidade é uma lei natural cósmica, não uma opinião dogmática.",
        keyConcepts: ["Dhamma-ṭṭhitatā", "Dhamma-niyāmatā", "Idappaccayatā", "Fenômenos Dependentes"],
        suttaCentralUrl: "https://suttacentral.net/sn12.20/en/sujato",
        studyNotes: "Quer os Budas surjam ou não, a condicionalidade permanece constante.",
        reflectionQuestion: "Consigo relaxar percebendo que os desafios da vida respondem a leis causais e não a conspirações contra mim?"
      },
      {
        code: "SN 12.23",
        paliTitle: "Upanisa Sutta",
        transTitle: "Pré-requisitos / Origem Transcendental",
        nikaya: "Saṁyutta Nikāya (Nidānavagga)",
        category: "liberation",
        readingTime: "6 min",
        importance: "Expõe a Origem Dependente Transcendental: como o próprio sofrimento se torna condição para fé, alegria e libertação.",
        layRelevance: "Mostra como a dor doméstica e as decepções podem ser o próprio trampolim para o despertar espiritual.",
        keyConcepts: ["Condicionalidade Transcendental", "Sofrimento como Causa da Fé", "Alegria (Pāmojja)", "Desapego (Virāga)"],
        suttaCentralUrl: "https://suttacentral.net/sn12.23/en/bodhi",
        studyNotes: "Dukkha -> Fé (Saddhā) -> Alegria -> Êxtase -> Tranquilidade -> Felicidade -> Concentração -> Visão das Coisas como São -> Desapego -> Libertação.",
        reflectionQuestion: "Consigo usar minhas dificuldades atuais como impulso para refúgio espiritual e contemplação?"
      },
      {
        code: "DN 15",
        paliTitle: "Mahānidāna Sutta",
        transTitle: "O Grande Discurso sobre a Causalidade",
        nikaya: "Dīgha Nikāya",
        category: "foundational",
        readingTime: "20 min",
        importance: "A mais detalhada e profunda exploração canônica de causalidade, consciência e conflitos interpessoais.",
        layRelevance: "Mostra como o desejo leva à busca, posse, apego, avareza e discórdias sociais e familiares.",
        keyConcepts: ["Causalidade Profunda", "Consciência e Nome-e-Forma", "Origem dos Conflitos", "Discórdia Social"],
        suttaCentralUrl: "https://suttacentral.net/dn15/en/sujato",
        studyNotes: "O Buda adverte Ānanda sobre a profundidade da origem dependente: é por não compreendê-la que a humanidade é como um novelo emaranhado.",
        reflectionQuestion: "Em discussões familiares, consigo enxergar como a defensividade nasceu do desejo inicial?"
      },
      {
        code: "SN 12.11",
        paliTitle: "Āhāra Sutta",
        transTitle: "Discurso sobre os Alimentos",
        nikaya: "Saṁyutta Nikāya (Nidānavagga)",
        category: "daily-life",
        readingTime: "5 min",
        importance: "Examina os quatro alimentos que sustentam a existência: comida física, contato, volição e consciência.",
        layRelevance: "Essencial para investigar o que alimenta o consumismo e o apego na vida cotidiana.",
        keyConcepts: ["Quatro Alimentos", "Comida Física", "Contato (Phassāhāra)", "Volição Mental", "Consciência"],
        suttaCentralUrl: "https://suttacentral.net/sn12.11/en/sujato",
        studyNotes: "Compreendendo o que oferecemos aos sentidos, esvaziamos os hábitos prejudiciais.",
        reflectionQuestion: "Que tipo de impressões sensoriais estou continuamente alimentando em minha mente nas horas de folga?"
      },
      {
        code: "SN 12.17",
        paliTitle: "Acela Sutta",
        transTitle: "Discurso ao Asceta Nu Kassapa",
        nikaya: "Saṁyutta Nikāya (Nidānavagga)",
        category: "daily-life",
        readingTime: "5 min",
        importance: "Examina responsabilidade ética e causalidade, rejeitando a culpa fatalista e o vitimismo passivo.",
        layRelevance: "Evita o sentimento tóxico de culpa ao mesmo tempo em que preserva a responsabilidade no trabalho e no lar.",
        keyConcepts: ["Sofrimento Auto-criado", "Sofrimento Criado por Outros", "Responsabilidade Ética", "Caminho do Meio"],
        suttaCentralUrl: "https://suttacentral.net/sn12.17/en/sujato",
        studyNotes: "Nem todo sofrimento é causado puramente por um eu imutável, nem exclusivamente por agentes externos; tudo surge condicionalmente.",
        reflectionQuestion: "Estou preso em autopunição exagerada ou em vitimismo ressentido em relação aos outros?"
      },
      {
        code: "SN 12.38",
        paliTitle: "Cetanā Sutta",
        transTitle: "Discurso sobre a Volição",
        nikaya: "Saṁyutta Nikāya (Nidānavagga)",
        category: "daily-life",
        readingTime: "4 min",
        importance: "Revela como intenções deliberadas, planejamentos e obsessões latentes dão base para a consciência florescer.",
        layRelevance: "Alerta para como devaneios silenciosos e planejamentos secretos moldam o caráter e o destino.",
        keyConcepts: ["Intenção (Cetanā)", "Planejamento (Pakappeti)", "Obsessão Latente (Anuseti)", "Estação da Consciência"],
        suttaCentralUrl: "https://suttacentral.net/sn12.38/en/sujato",
        studyNotes: "Mesmo que você não planeje ativamente, tendências dormentes alimentam o sofrimento futuro.",
        reflectionQuestion: "Que preocupações de fundo estou constantemente ensaiando nos momentos de silêncio?"
      },
      {
        code: "SN 36.6",
        paliTitle: "Salla Sutta",
        transTitle: "A Flecha",
        nikaya: "Saṁyutta Nikāya (Vedanāsaṁyutta)",
        category: "mindfulness",
        readingTime: "5 min",
        importance: "Distingue com clareza a primeira flecha (dor física/circunstancial) da segunda flecha (resistência mental e aflição).",
        layRelevance: "A mais libertadora lição prática para navegar doenças, cansaço, críticas e contratempos.",
        keyConcepts: ["Primeira Flecha (Dor Corporal)", "Segunda Flecha (Angústia Mental)", "Aversão (Paṭigha)", "Fuga Sensorial"],
        suttaCentralUrl: "https://suttacentral.net/sn36.6/en/sujato",
        studyNotes: "A pessoa comum atinge-se com duas flechas; o discípulo nobre sente a primeira sem disparar a segunda contra si mesmo.",
        reflectionQuestion: "Consigo separar a dor física ou verbal inevitável do meu protesto emocional contra ela?"
      },
      {
        code: "SN 35.28",
        paliTitle: "Ādittapariyāya Sutta",
        transTitle: "O Sermão do Fogo",
        nikaya: "Saṁyutta Nikāya (Saḷāyatanasaṁyutta)",
        category: "mindfulness",
        readingTime: "6 min",
        importance: "Proclama que tudo está em chamas: os sentidos ardem com o fogo da ganância, da aversão e da ilusão.",
        layRelevance: "Desperta da complacência sensorial no mundo hiperestimulado moderno.",
        keyConcepts: ["Tudo Está em Chamas", "Fogo da Ganância, Raiva e Ilusão", "Desencanto (Nibbidā)", "Chama Sensorial"],
        suttaCentralUrl: "https://suttacentral.net/sn35.28/en/sujato",
        studyNotes: "Reconhecer que os sentidos ardem esfria o desejo de correr atrás de prazeres efêmeros.",
        reflectionQuestion: "O uso das minhas telas está esfriando minha mente ou jogando mais lenha na fogueira sensorial?"
      },
      {
        code: "SN 47.13",
        paliTitle: "Cunda Sutta",
        transTitle: "Discurso com Cunda",
        nikaya: "Saṁyutta Nikāya (Satipaṭṭhānasaṁyutta)",
        category: "mindfulness",
        readingTime: "7 min",
        importance: "Diante da morte do Ven. Sāriputta, o Buda orienta Ānanda a ser uma ilha para si mesmo, tendo o Dhamma como refúgio.",
        layRelevance: "Guia indispensável para lidar com perdas, luto e dissolução de vínculos familiares.",
        keyConcepts: ["Ilha para Si Mesmo (Attadīpā)", "Dhamma como Refúgio", "Quatro Fundamentos da Atenção Plena", "Aceitação da Impermanência"],
        suttaCentralUrl: "https://suttacentral.net/sn47.13/en/sujato",
        studyNotes: "Perante grandes perdas familiares, a atenção plena enraizada no Dhamma oferece o refúgio inabalável.",
        reflectionQuestion: "Diante de mudanças e perdas, estou apoiado em muletas externas ou ancorado no Dhamma?"
      }
    ]
  },

  // E. Daily Scenarios (PT)
  dailyScenarios: {
    sectionTitle: "Origem Dependente na Vida Cotidiana",
    sectionSubtitle: "Cinco cenários reais demonstrando como os elos operam e como a sabedoria do Dhamma intervém",
    intro: "Os elos da origem dependente não são fórmulas abstratas; eles descrevem sua psicologia diária concreta. Inspecione os cenários abaixo:",
    scenarios: [
      {
        id: "scenario-1",
        number: "01",
        title: "Crítica no Ambiente Profissional",
        situation: "Em uma reunião de trabalho, um gestor ou colega critica publicamente sua proposta, dizendo que foi mal planejada e ineficiente.",
        directlyExperienced: "Ouvir o som da voz crítica (contato auditivo). Sensação visceral de aperto e calor desagradável no peito (vedanā desagradável).",
        conditionsPresent: "Cansaço acumulado, insegurança sobre o emprego e necessidade de aprovação profissional.",
        cravingPoint: "Desejo de aniquilar o desconforto (vibhava-taṇhā): ímpeto de retrucar com agressividade, desqualificar o outro ou se justificar defensivamente.",
        clingingPoint: "Apego à identidade de competência: 'Como ousam me desrespeitar?'. Apego à expectativa de que todos concordem com minhas ideias.",
        dhammaResponse: "Aplique o Salla Sutta (SN 36.6): Pause imediatamente. 'A primeira flecha atingiu meu ouvido. Vou disparar a segunda flecha de raiva?' Respire, sinta o tom afetivo cru sem emitir palavras reativas e responda com calma técnica e profissional.",
        reflectionQuestion: "Consigo sustentar cinco segundos de silêncio antes de responder a uma crítica?",
        suttas: ["SN 36.6 (A Flecha)", "MN 21 (O Símile da Serra)", "SN 12.2 (Vibhaṅga)"]
      },
      {
        id: "scenario-2",
        number: "02",
        title: "Desejo Compulsivo de Comprar",
        situation: "Navegando tarde da noite pela internet, você vê um produto tecnológico ou peça de luxo com desconto atraente.",
        directlyExperienced: "Fótons atingem os olhos (contato visual). Disparo de sensação agradável e imagens de status (vedanā agradável).",
        conditionsPresent: "Tédio, fadiga após o expediente e facilidade de pagamento com um clique.",
        cravingPoint: "Kāma-taṇhā: sede de antecipar o prazer de abrir a caixa e desfrutar da novidade.",
        clingingPoint: "Apego à identidade: 'Com isso serei mais produtivo e elegante'. Racionalização da compra como necessária.",
        dhammaResponse: "Aplique o Āhāra Sutta (SN 12.11): Reconheça que o desejo é uma queimação de fome sensorial, não uma necessidade real. Espere 48 horas antes de comprar. Contemple a obsolescência do objeto e sinta o alívio de não ser manipulado.",
        reflectionQuestion: "Que vazio emocional imediato estou tentando preencher com esta compra?",
        suttas: ["SN 12.11 (Alimento)", "MN 13 (A Massa do Sofrimento)", "AN 4.62 (Anaṇa Sutta)"]
      },
      {
        id: "scenario-3",
        number: "03",
        title: "Conflito Familiar ou Amoroso",
        situation: "Seu cônjuge ou familiar expressa irritação sobre despesas da casa ou divisão de tarefas domésticas.",
        directlyExperienced: "Ouvir o tom ríspido (contato auditivo). Sensação de rejeição ou injustiça (vedanā desagradável).",
        conditionsPresent: "Estresse doméstico acumulado, noites mal dormidas e histórico de mágoas passadas.",
        cravingPoint: "Desejo de vingança moral: listar os erros do outro ou fechar-se em silêncio punitivo.",
        clingingPoint: "Apego à autojustificação (diṭṭhupādāna): 'Eu faço tudo nesta casa e ninguém reconhece'.",
        dhammaResponse: "Aplique DN 15: O tom ríspido do outro nasceu do cansaço e medo dele próprio. Não leve para o lado pessoal. Escute com compaixão (karuṇā) e coopere na solução prática.",
        reflectionQuestion: "Estou tentando resolver o problema prático ou tentando vencer uma disputa de ego contra quem amo?",
        suttas: ["DN 15 (Mahānidāna)", "SN 12.38 (Volição)", "MN 128 (Upakkilesa)"]
      },
      {
        id: "scenario-4",
        number: "04",
        title: "Ansiedade com Finanças e Segurança Futura",
        situation: "Analisar contas a pagar, inflação ou metas de faturamento gera apreensão aguda sobre o futuro.",
        directlyExperienced: "Ler números na tela (contato visual). Tensão no estômago e respiração curta (vedanā desagradável).",
        conditionsPresent: "Incerteza econômica real, responsabilidade com dependentes e o hábito de buscar solidez permanente em um mundo instável.",
        cravingPoint: "Bhava-taṇhā: sede de controle absoluto e garantia de invulnerabilidade futura.",
        clingingPoint: "Apego ao controle: ruminação incessante ('E se eu falir?') e checagem compulsiva de extratos.",
        dhammaResponse: "Aplique SN 12.20 e AN 4.62: Separe o planejamento prudente (ação correta no presente) da ruminação catastrófica (saṅkhāra desgovernado). Tome as medidas financeiras sóbrias e reconheça que a única verdadeira segurança é a conduta íntegra.",
        reflectionQuestion: "Consigo distinguir entre planejamento financeiro sábio e ruminação ansiosa estéril?",
        suttas: ["SN 12.20 (Condições)", "AN 4.62 (Anaṇa Sutta)", "AN 8.54 (Dīghajāṇu)"]
      },
      {
        id: "scenario-5",
        number: "05",
        title: "Prazer, Distração e Redes Sociais",
        situation: "Você abre o aplicativo de vídeos 'só por dois minutos' e se vê rolando a tela por mais de uma hora.",
        directlyExperienced: "Estímulos visuais rápidos (contato). Microdoses de sensação agradável seguidas de vazio imediato.",
        conditionsPresent: "Algoritmos otimizados para vício, cansaço do trabalho e resistência a encarar tarefas desafiadoras.",
        cravingPoint: "Kāma-taṇhā pelo próximo estímulo e aversão ao silêncio interior.",
        clingingPoint: "Apego à distração: 'Só mais um vídeo, eu mereço descansar'.",
        dhammaResponse: "Aplique o Sermão do Fogo (SN 35.28): Observe: 'Este estímulo está me acalmando ou me incendiando?' Sinta a fadiga nos olhos. Coloque o aparelho em outro cômodo e sinta o contato dos pés com o chão.",
        reflectionQuestion: "Que paz interior profunda estou sacrificando em troca de doses rápidas de dopamina digital?",
        suttas: ["SN 35.28 (O Sermão do Fogo)", "MN 118 (Ānāpānasati)", "MN 20 (A Quietude dos Pensamentos)"]
      }
    ]
  },

  // F. Practical Exercise (PT)
  guidedExercise: {
    title: "Exercício Prático: Observar os Elos",
    subtitle: "Ferramenta contemplativa de 3 a 5 minutos para inspecionar a causalidade na sua experiência direta",
    privacyNotice: "🔒 100% Privado: Suas respostas permanecem estritamente gravadas neste navegador local.",
    disclaimer: "Nota: Este é um treinamento gradual em atenção plena e discernimento (sati-sampajañña). Ele desenvolve a capacidade de pausar entre a sensação e a reação.",
    steps: [
      {
        step: 1,
        title: "1. Recordar a Experiência Recente",
        prompt: "Traga à mente uma situação recente de atração, incômodo ou contratempo (ex: um e-mail irritante, desejo súbito de comprar ou pequeno atraso):",
        placeholder: "Descreva brevemente a situação..."
      },
      {
        step: 2,
        title: "2. Identificar o Contato Sensorial (Phassa)",
        prompt: "Qual porta sensorial recebeu o impacto inicial antes de você criar a narrativa mental?",
        options: [
          "Olhos (Vi algo)",
          "Ouvidos (Ouvi palavras ou som)",
          "Nariz / Língua (Cheiro ou gosto)",
          "Corpo (Sensação física de dor, calor ou toque)",
          "Mente (Lembrança, ideia ou pensamento súbito)"
        ],
        placeholder: "Nomeie o contato sensorial bruto..."
      },
      {
        step: 3,
        title: "3. Nomear a Sensação (Vedanā)",
        prompt: "Qual tom afetivo emergiu naquela fração de segundo?",
        options: [
          "Agradável (Sukha — gostei, pareceu recompensador)",
          "Desagradável (Dukkha — incomodou, pareceu apertado)",
          "Neutra (Upekkhā — nem agradável nem desagradável)"
        ],
        placeholder: "Descreva a sensação física no corpo..."
      },
      {
        step: 4,
        title: "4. Notar o Desejo Compulsivo (Taṇhā)",
        prompt: "O desejo surgiu? Para onde a mente foi puxada?",
        options: [
          "Querer segurar e prolongar o prazer (Kāma-taṇhā)",
          "Querer afirmar um status ou papel (Bhava-taṇhā)",
          "Querer eliminar ou fugir do desconforto (Vibhava-taṇhā)",
          "Havia atenção plena: Nenhum desejo compulsivo surgiu"
        ],
        placeholder: "Descreva o impulso notado..."
      },
      {
        step: 5,
        title: "5. Observar o Apego (Upādāna)",
        prompt: "A mente agarrou-se a uma identidade, expectativa ou ponto de vista rígido?",
        placeholder: "ex: 'Eles deveriam me valorizar' / 'Preciso disso agora'..."
      },
      {
        step: 6,
        title: "6. Refletir sobre as Consequências",
        prompt: "Quais foram (ou seriam) as consequências de seguir cegamente essa reação em palavras ou atos?",
        placeholder: "ex: Conflito conjugal, gasto impulsivo, remorso, agitação mental prolongada..."
      },
      {
        step: 7,
        title: "7. O Poder do Intervalo Dourado",
        prompt: "O que muda quando a sensação é reconhecida com clareza no ponto de contato sem alimentar a reação automática?",
        placeholder: "ex: A sensação surge e se dissipa sozinha; minhas palavras permanecem equilibradas..."
      }
    ],
    finishButton: "Gerar Síntese Contemplativa",
    resetButton: "Reiniciar Exercício"
  },

  // G. Path of Practice (PT)
  pathOfPractice: {
    sectionTitle: "O Caminho da Prática: Origem Dependente e o Caminho Óctuplo",
    sectionSubtitle: "Como a condicionalidade é direcionada através dos oito fatores do Nobre Caminho",
    intro: "A origem dependente não é um modelo para observação passiva; ela revela as alavancas da libertação. O Nobre Caminho Óctuplo desmonta as condições da ignorância e cultiva condições salutares para a paz.",
    factors: [
      {
        factor: "Visão Correta (Sammā-diṭṭhi)",
        pali: "Sammā-diṭṭhi",
        relation: "Enxerga a condicionalidade: o sofrimento surge do desejo e cessa ao cultivar o Caminho (MN 9, SN 12.15)."
      },
      {
        factor: "Intenção Reta (Sammā-saṅkappa)",
        pali: "Sammā-saṅkappa",
        relation: "Substitui o desejo sensual e a raiva por renúncia, benevolência e não-violência."
      },
      {
        factor: "Linguagem Correta (Sammā-vācā)",
        pali: "Sammā-vācā",
        relation: "Interrompe o elo entre sensação desagradável e fala ríspida, caluniosa ou fútil."
      },
      {
        factor: "Ação Correta (Sammā-kammanta)",
        pali: "Sammā-kammanta",
        relation: "Garante que as formações volitivas não causem dano: não matar, não roubar, conduta sexual respeitosa."
      },
      {
        factor: "Meio de Vida Correto (Sammā-ājīva)",
        pali: "Sammā-ājīva",
        relation: "Estrutura o trabalho sem engano ou exploração, construindo condições limpas para a paz no lar."
      },
      {
        factor: "Esforço Correto (Sammā-vāyāma)",
        pali: "Sammā-vāyāma",
        relation: "Guarda a mente: previne e abandona estados prejudiciais, e desperta e sustenta estados benéficos."
      },
      {
        factor: "Atenção Plena Correta (Sammā-sati)",
        pali: "Sammā-sati",
        relation: "Mantém vigilância nas seis portas dos sentidos, captando a sensação no contato antes do apego brotar."
      },
      {
        factor: "Concentração Correta (Sammā-samādhi)",
        pali: "Sammā-samādhi",
        relation: "Unifica e pacifica a mente, provendo a calma necessária para ver a condicionalidade claramente."
      }
    ],
    dailyPractices: [
      {
        timing: "Contemplação Matinal (5–10 min)",
        title: "Bússola da Condicionalidade",
        practice: "Antes de olhar mensagens, recorde SN 12.20: 'Tudo o que eu vivenciar hoje surgirá dependente de condições. Vou proteger meus sentidos e não disparar segundas flechas.'"
      },
      {
        timing: "Atenção no Trabalho",
        title: "O Ponto de Contato",
        practice: "Pause por três respirações conscientes sempre que chegar um e-mail ríspido ou contratempo. Sinta o tom da sensação antes de responder."
      },
      {
        timing: "Revisão Ética Noturna (5 min)",
        title: "Avaliação Serena do Dia",
        practice: "Revise: Onde o desejo surgiu? Onde o desapego foi vitorioso? Alegre-se com qualquer momento de sobriedade."
      },
      {
        timing: "Meditação Sentada Regular",
        title: "Samatha e Vipassanā Conectados",
        practice: "Colete a mente na respiração para acalmar, e então observe o surgimento e cessação de sensações como processos dependentes."
      }
    ]
  },

  // H. Study Pathways (PT)
  studyPathways: {
    sectionTitle: "Roteiros de Estudo Estruturados",
    sectionSubtitle: "Trilhas graduais desenhadas para conduzir do entendimento inicial à maestria canônica",
    disclaimer: "Estas trilhas são roteiros pedagógicos práticos para estudantes leigos, não imposições rígidas.",
    tracks: [
      {
        id: "beginner-track",
        name: "Trilha Iniciante — 7 Dias",
        duration: "7 Dias (15 min/dia)",
        description: "Introdução ao princípio mestre, memorização dos 12 elos e gestão das reações emocionais cotidianas.",
        days: [
          { day: 1, sutta: "SN 12.20 (Paccaya Sutta)", task: "Leia a lei da condicionalidade. Reflita sobre leis naturais vs controle pessoal." },
          { day: 2, sutta: "SN 12.2 (Vibhaṅga Sutta)", task: "Leia a sequência dos doze elos. Memorize os termos principais." },
          { day: 3, sutta: "SN 36.6 (Salla Sutta)", task: "Leia o sutta da Flecha. Pratique notar a primeira vs a segunda flecha no trabalho." },
          { day: 4, sutta: "SN 35.28 (Ādittapariyāya)", task: "Leia o Sermão do Fogo. Observe como as telas inflamam a mente." },
          { day: 5, sutta: "SN 12.15 (Kaccāyanagotta)", task: "Leia o sutta da Visão Correta. Evite os extremos do niilismo e do apego." },
          { day: 6, sutta: "5 Cenários Cotidianos", task: "Revise os cenários práticos e faça o exercício guiado interativo." },
          { day: 7, sutta: "Síntese e Diário", task: "Escreva uma reflexão no diário sobre as descobertas da sua mente." }
        ]
      },
      {
        id: "intermediate-track",
        name: "Trilha Intermediária — 14 Dias",
        duration: "14 Dias (25 min/dia)",
        description: "Aprofundamento em alimentos mentais, volição, agência ética e causalidade transcendental.",
        days: [
          { day: 1, sutta: "MN 9 (Parte 1)", task: "Estude as raízes benéficas e prejudiciais com o Ven. Sāriputta." },
          { day: 2, sutta: "MN 9 (Parte 2)", task: "Estude os quatro alimentos e sua ligação com o sofrimento." },
          { day: 3, sutta: "SN 12.11 (Āhāra Sutta)", task: "Faça uma auditoria no seu consumo de impressões sensoriais ao longo do dia." },
          { day: 4, sutta: "SN 12.17 (Acela Sutta)", task: "Contemple causalidade ética sem culpa paralisante nem vitimismo." },
          { day: 5, sutta: "SN 12.38 (Cetanā Sutta)", task: "Inspecione seus planejamentos silenciosos e obsessões latentes." },
          { day: 6, sutta: "Exercício Guiado", task: "Complete os 7 passos do exercício diante de uma tensão real no relacionamento." },
          { day: 7, sutta: "Revisão Intermediária", task: "Revise suas notas do diário e consolide a observação do elo contato-sensação." },
          { day: 8, sutta: "SN 12.23 (Upanisa Sutta)", task: "Estude a Origem Transcendental: o sofrimento como mola para a fé." },
          { day: 9, sutta: "SN 12.23 (Meditação)", task: "Medite na respiração contemplando a progressão da alegria ao desapego." },
          { day: 10, sutta: "SN 47.13 (Cunda Sutta)", task: "A atenção plena como refúgio perante o luto e perdas familiares." },
          { day: 11, sutta: "MN 141 (Saccavibhaṅga)", task: "Conecte os 12 elos aos Cinco Agregados do Apego." },
          { day: 12, sutta: "Integração ao Caminho Óctuplo", task: "Examine como cada um dos oito fatores opera em sua carreira." },
          { day: 13, sutta: "Dia de Guarda dos Sentidos", task: "Pratique vigilância atenta das seis portas dos sentidos ao usar o celular." },
          { day: 14, sutta: "Reflexão Final e Dedicação", task: "Sintetize os 14 dias de prática e firme resoluções para o dia a dia." }
        ]
      },
      {
        id: "advanced-track",
        name: "Trilha Avançada — 30 Dias",
        duration: "30 Dias (40 min/dia)",
        description: "Estudo canônico aprofundado de DN 15, comparação textual e perspectivas comentariais.",
        days: [
          { day: 1, sutta: "DN 15 (Seção 1)", task: "A advertência a Ānanda: a natureza profunda e intrincada da origem dependente." },
          { day: 2, sutta: "DN 15 (Seção 2)", task: "A relação recíproca entre consciência e nome-e-forma." },
          { day: 3, sutta: "DN 15 (Seção 3)", task: "A cadeia social: do desejo à busca, posse e conflitos entre seres." },
          { day: 4, sutta: "DN 15 (Síntese)", task: "Escreva uma reflexão sobre a psicologia social da causalidade." },
          { day: 5, sutta: "SN 12.65 (Nagara Sutta)", task: "O discurso da Cidade Antiga: o Buda redescobrindo o caminho ancestral." },
          { day: 6, sutta: "SN 12.67 (Naḷakalāpī)", task: "O símile dos dois feixes de juncos que se apoiam mutuamente." },
          { day: 7, sutta: "Avaliação Doutrinária", task: "Compare o modelo de 3 vidas (Buddhaghosa) com o modelo momento a momento." }
        ]
      }
    ]
  },

  // I. Reflection Journal (PT)
  reflectionJournal: {
    sectionTitle: "Diário Contemplativo de Reflexão",
    sectionSubtitle: "Registre observações reais da condicionalidade em sua vida. Salvo estritamente no seu navegador.",
    formHeading: "Novo Registro de Reflexão",
    prompts: [
      { id: "q1", label: "1. O que aconteceu? (Situação ou evento)", placeholder: "Descreva brevemente o evento..." },
      { id: "q2", label: "2. Qual tom de sensação estava presente? (Agradável / Desagradável / Neutro)", placeholder: "Descreva a sensação sentida..." },
      { id: "q3", label: "3. O que eu desejei ou resisti?", placeholder: "Para onde a mente puxou ou empurrou..." },
      { id: "q4", label: "4. A que ponto de vista ou expectativa me apeguei?", placeholder: "Identifique a historinha do ego..." },
      { id: "q5", label: "5. O que aprendi sobre a condicionalidade com isso?", placeholder: "O discernimento de ver causas e efeitos..." },
      { id: "q6", label: "6. Qual sutta iluminou essa experiência?", placeholder: "ex: SN 36.6, SN 12.11, SN 12.20..." }
    ],
    saveButtonText: "Salvar Registro no Diário",
    entriesHeading: "Suas Reflexões Salvas",
    noEntriesNotice: "Nenhum registro gravado ainda. Preencha o formulário acima para iniciar seu arquivo pessoal.",
    exportButtonText: "Exportar Registros (JSON)",
    clearAllButtonText: "Limpar Histórico"
  },

  // J. FAQs (PT)
  faqs: {
    sectionTitle: "Perguntas Frequentes",
    sectionSubtitle: "Respostas canônicas rigorosas fundamentadas nos discursos do Budismo primitivo",
    items: [
      {
        q: "O que é a origem dependente em termos simples?",
        a: "A origem dependente (paṭiccasamuppāda) é o princípio de que as coisas não surgem por acaso nem por decreto divino. Quando causas e condições convergem, os resultados surgem; quando as condições cessam, os resultados desaparecem. No Budismo, explica especificamente como o sofrimento surge do desejo e da ignorância, e como cessa com a sabedoria."
      },
      {
        q: "Por que existem doze elos? Essa lista é imutável?",
        a: "A lista de doze elos é a formulação padrão e mais completa nos suttas, mas não é um dogma rígido. Em DN 15, o Buda omite os seis sentidos e inicia na consciência e nome-e-forma; em SN 12.65 enfatiza a relação recíproca entre consciência e nome-e-forma; no Sermão do Fogo enfoca os sentidos, contato e sensação. A essência comum é a condicionalidade (idappaccayatā)."
      },
      {
        q: "A origem dependente significa que tudo na minha vida é pré-determinado?",
        a: "Não. O Buda refutou explicitamente o determinismo estrito (niyativāda). As condições passadas moldam o presente, mas sua intenção atual (cetanā) neste instante é uma nova condição ativa. Não se pode impedir a sensação que já brotou, mas pode-se escolher não reagir com desejo compulsivo."
      },
      {
        q: "A origem dependente é a mesma coisa que o karma?",
        a: "O karma é um componente essencial dentro da origem dependente, correspondendo aos elos #2 (Saṅkhārā) e #10 (Bhava). Porém, a origem dependente é a lei ampla da condicionalidade universal na qual o karma se insere."
      },
      {
        q: "Como a origem dependente se relaciona com o Não-Eu (Anattā)?",
        a: "Ela é a prova prática de anattā. Se existisse um 'eu' autônomo soberano, as coisas não dependeriam de causas: você poderia simplesmente ordenar à mente que nunca sentisse dor ou envelhecesse. Como tudo depende de condições passageiras, nenhum eu permanente pode ser encontrado nos cinco agregados."
      },
      {
        q: "Esse ensinamento aplica-se à vida leiga ou é exclusivo de monges?",
        a: "Aplica-se diretamente à mente de qualquer ser humano. O Buda ensinou causalidade a chefes de família como Anāthapiṇḍika e Citta. Sempre que você se irrita no trânsito, compra compulsivamente ou pausa antes de brigar, está vivenciando e trabalhando com os elos da origem dependente."
      },
      {
        q: "Como a origem dependente se relaciona com as Quatro Nobres Verdades?",
        a: "São duas faces da mesma moeda clínica. A sequência direta (elos 1 ao 12) é a anatomia expandida da Segunda Nobre Verdade (Origem do Sofrimento). A sequência inversa (cessação dos elos 1 ao 12) é o detalhamento da Terceira Nobre Verdade (Cessação do Sofrimento)."
      },
      {
        q: "Como a cessação do desejo se relaciona com o Nibbāna?",
        a: "O desejo (taṇhā) é o combustível do devir e do sofrimento. Nos suttas, Nibbāna é frequentemente descrito como 'taṇhākkhayo' (a destruição do desejo). Cessado o combustível, a paz incondicionada se revela."
      },
      {
        q: "Preciso me tornar monge para praticar esse ensinamento?",
        a: "Não. Centenas de homens e mulheres leigos nos textos canônicos alcançaram os primeiros estágios da iluminação enquanto administravam lares e negócios, compreendendo a origem dependente e praticando a Visão Correta."
      },
      {
        q: "Como diferentes tradições do Theravāda entendem os doze elos?",
        a: "A tradição comentarial clássica do Visuddhimmaga divide os doze elos em três vidas sucessivas (vida passada, presente e futura). Mestres modernos como Ajahn Buddhadāsa e Bhikkhu Bodhi ressaltam que, além do renascimento cósmico, os elos descrevem o nascimento momentâneo do ego nas reações diárias. Ambos os modelos baseiam-se no mesmo princípio canônico de condicionalidade."
      }
    ]
  }
};


  // ==========================================
  // 2. FOURTH NOBLE TRUTH DATA MODULE
  // ==========================================
/**
 * The Lay Dharma Household Mārga — Fourth Noble Truth Study Module
 * Dukkha-nirodhagāminī Paṭipadā Ariyasacca (Ariya Aṭṭhaṅgika Magga)
 * Grounded strictly in the Theravāda Pāli Canon (Tipiṭaka).
 * Bilingual dataset: English (EN) and Portuguese (PT).
 */
const FOURTH_NOBLE_TRUTH_MODULE_EN = {
  id: "fourth-noble-truth-module",
  provenance: {
    authority: "Pāli Canon (Tipiṭaka) as primary doctrinal authority",
    commentarialStatus: "Commentarial references (Aṭṭhakathā) and pedagogical lay applications explicitly labeled",
    reviewStatus: "Verified against SuttaCentral canonical editions and translations by Bhikkhu Bodhi & Bhikkhu Sujato"
  },
  header: {
    badge: "THE FOURTH NOBLE TRUTH",
    paliFormula: "Dukkha-nirodhagāminī Paṭipadā Ariyasacca",
    translation: "The Noble Truth of the Way Leading to the Cessation of Suffering",
    shortTitle: "The Noble Eightfold Path (Ariya Aṭṭhaṅgika Magga)",
    leadText: "The Fourth Noble Truth is not a collection of abstract philosophical postulates or casual self-help techniques. It is the Buddha's middle way (majjhimā paṭipadā) of active mental, verbal, and physical cultivation (bhāvanā)—an organic, interconnected therapeutic discipline leading directly to the pacification of craving and the unconditioned realization of Nibbāna."
  },

  // --------------------------------------------------------------------------
  // SECTION 1: WHAT IS THE FOURTH NOBLE TRUTH?
  // --------------------------------------------------------------------------
  section1: {
    id: "sec-what-is-fourth-truth",
    number: "01",
    title: "What Is the Fourth Noble Truth?",
    paliTitle: "Dukkha-nirodhagāminī Paṭipadā Ariyasacca",
    provenanceTag: "CANONICAL",
    sourceSuttas: [
      { code: "SN 56.11", title: "Dhammacakkappavattana Sutta", url: "https://suttacentral.net/sn56.11/en/bodhi" },
      { code: "MN 141", title: "Saccavibhaṅga Sutta", url: "https://suttacentral.net/mn141/en/sujato" }
    ],
    canonicalPassage: {
      pali: "Idaṁ kho pana, bhikkhave, dukkhanirodhagāminī paṭipadā ariyasaccaṁ: ayameva ariyo aṭṭhaṅgiko maggo, seyyathidaṁ: sammādiṭṭhi, sammāsaṅkappo, sammāvācā, sammākammanto, sammā-ājīvo, sammāvāyāmo, sammāsati, sammāsamādhi.",
      translation: "Now this, monastics, is the noble truth of the way leading to the cessation of suffering: it is this noble eightfold path; that is, right view, right intention, right speech, right action, right livelihood, right effort, right mindfulness, right concentration.",
      translator: "Bhikkhu Bodhi (SN 56.11)"
    },
    doctrinalAnalysis: "The expression 'Dukkha-nirodhagāminī paṭipadā' consists of dukkha (unsatisfactoriness/stress), nirodha (cessation/cessation of craving), gāminī (leading toward), and paṭipadā (the way or course of practice). In both the foundational proclamation of the Dhamma (SN 56.11) and the systematic anatomical analysis of the truths by Ven. Sāriputta (MN 141), the Buddha unambiguously identifies this truth with the Ariya Aṭṭhaṅgika Magga (The Noble Eightfold Path).",
    catukiccaFramework: {
      heading: "The Four Tasks of the Four Noble Truths (Catukicca)",
      explanation: "Theravāda doctrine emphasizes that the Four Noble Truths are not theoretical dogmas to be passively accepted. Each truth carries a specific operational duty (kicca) that must be fulfilled through practice:",
      tasks: [
        {
          truth: "1. Dukkha (Suffering / Clinging-Aggregates)",
          dutyPali: "Pariññeyya",
          dutyEnglish: "To be fully understood & diagnosed",
          description: "Not to be avoided or merely endured, but deeply penetrated in lived experience."
        },
        {
          truth: "2. Samudaya (Origin of Suffering: Craving / Taṇhā)",
          dutyPali: "Pahātabba",
          dutyEnglish: "To be abandoned & relinquished",
          description: "Not suppressed through brute force, but relinquished by discerning its conditionality."
        },
        {
          truth: "3. Nirodha (Cessation: Nibbāna)",
          dutyPali: "Sacchikātabba",
          dutyEnglish: "To be directly realized & witnessed",
          description: "Not imagined conceptually, but experienced directly as the extinction of greed, hatred, and delusion."
        },
        {
          truth: "4. Magga (The Eightfold Path)",
          dutyPali: "Bhāvetabba",
          dutyEnglish: "To be cultivated & developed",
          description: "The core operative duty of the Fourth Truth: it is an active discipline of development (bhāvanā) spanning ethical conduct, mental stability, and liberating discernment."
        }
      ],
      coreNote: "Crucially, the Fourth Noble Truth is the only truth whose duty is bhāvetabba (cultivation). It cannot be fulfilled by intellectual agreement alone. To study the path is to cultivate it across domestic, professional, and meditative domains."
    }
  },

  // --------------------------------------------------------------------------
  // SECTION 2: THE NOBLE EIGHTFOLD PATH (ALL 8 FACTORS)
  // --------------------------------------------------------------------------
  section2: {
    id: "sec-eightfold-path-factors",
    number: "02",
    title: "The Noble Eightfold Path",
    paliTitle: "Ariya Aṭṭhaṅgika Magga",
    provenanceTag: "CANONICAL DEFINITIONS (SN 45.8 & MN 141)",
    intro: "The definitive canonical definitions for each of the eight factors are established in SN 45.8 (Maggavibhaṅga Sutta) and MN 141 (Saccavibhaṅga Sutta). Below, each factor is examined through its authentic Pāli phrasing, doctrinal function, and realistic lay application.",
    factors: [
      {
        factorNumber: 1,
        paliName: "Sammā-diṭṭhi",
        englishName: "Right View / Right Perspective",
        trainingGroup: "Paññā (Wisdom)",
        canonicalDefinition: {
          sutta: "SN 45.8 — Maggavibhaṅga Sutta",
          translator: "Bhikkhu Bodhi",
          paliQuote: "Katamañca, bhikkhave, sammādiṭṭhi? Yaṁ kho, bhikkhave, dukkhe ñāṇaṁ, dukkhasamudaye ñāṇaṁ, dukkhanirodhe ñāṇaṁ, dukkhanirodhagāminiyā paṭipadāya ñāṇaṁ: ayaṁ vuccati, bhikkhave, sammādiṭṭhi.",
          transQuote: "And what, monastics, is right view? Knowledge of suffering, knowledge of the origin of suffering, knowledge of the cessation of suffering, knowledge of the way leading to the cessation of suffering: this is called right view."
        },
        doctrinalExplanation: "Right view is the forerunner (pubbaṅgama) of the entire path. As explained in MN 117, it operates on two levels: (1) mundane right view with taints (sāsavā), which affirms the reality of kamma, intentional actions, rebirth, and moral efficacy; and (2) noble, supramundane right view (anāsavā lokuttarā), which directly penetrates the Four Noble Truths, dependent origination (paṭiccasamuppāda), and the three characteristics of impermanence, unsatisfactoriness, and not-self.",
        functionInPath: "Right view serves as the compass. It discerns wrong view as wrong view and right view as right view; it provides the cognitive clarity that informs right intention and directs right effort and mindfulness.",
        layApplication: {
          tag: "PRACTICAL APPLICATION",
          description: "When domestic crises, professional upheavals, or financial losses occur, the practitioner frames them not as personal injustice, but through the diagnostic lens of conditionality: 'This is dukkha arising from conditions; clinging to this impermanent outcome produces friction; where is the craving here, and what is the skillful response?'"
        },
        primaryReferences: [
          { code: "SN 45.8", name: "Analysis of the Path", url: "https://suttacentral.net/sn45.8/en/bodhi" },
          { code: "MN 117", name: "The Great Forty", url: "https://suttacentral.net/mn117/en/sujato" },
          { code: "MN 9", name: "Right View Sutta", url: "https://suttacentral.net/mn9/en/sujato" }
        ],
        furtherStudy: "Study MN 9 to understand how Right View is systematically applied to the unwholesome roots (akusala-mūla) and the four nutriments of existence."
      },
      {
        factorNumber: 2,
        paliName: "Sammā-saṅkappa",
        englishName: "Right Intention / Right Resolve",
        trainingGroup: "Paññā (Wisdom)",
        canonicalDefinition: {
          sutta: "SN 45.8 — Maggavibhaṅga Sutta",
          translator: "Bhikkhu Bodhi",
          paliQuote: "Katamo ca, bhikkhave, sammāsaṅkappo? Yo kho, bhikkhave, nekkhammasaṅkappo, abyāpādasaṅkappo, avihiṁsāsaṅkappo: ayaṁ vuccati, bhikkhave, sammāsaṅkappo.",
          transQuote: "And what, monastics, is right intention? The intention of renunciation, the intention of non-ill will, the intention of harmlessness: this is called right intention."
        },
        doctrinalExplanation: "Right intention channels right view into emotional and volitional motivation. It directly opposes the three unwholesome roots: greed is counteracted by renunciation (nekkhamma), hatred is counteracted by non-ill will/goodwill (abyāpāda / mettā), and cruelty is counteracted by harmlessness/compassion (avihiṃsā / karuṇā). Intention shapes character through recurrent mental habituation (MN 19).",
        functionInPath: "Transforms intellectual discernment into moral commitment, establishing the psychological purity required for the ethical factors (speech, action, livelihood).",
        layApplication: {
          tag: "PRACTICAL APPLICATION",
          description: "Consciously releasing consumerist grasping through generous giving (dāna); deliberately transforming moments of domestic annoyance into patient kindness (mettā); refusing to use professional leverage to crush business competitors or subordinate staff."
        },
        primaryReferences: [
          { code: "SN 45.8", name: "Analysis of the Path", url: "https://suttacentral.net/sn45.8/en/bodhi" },
          { code: "MN 19", name: "Two Sorts of Thinking", url: "https://suttacentral.net/mn19/en/sujato" }
        ],
        furtherStudy: "Review MN 19 for the Bodhisatta's method of dividing thoughts into wholesome and unwholesome classes."
      },
      {
        factorNumber: 3,
        paliName: "Sammā-vācā",
        englishName: "Right Speech",
        trainingGroup: "Sīla (Virtue)",
        canonicalDefinition: {
          sutta: "SN 45.8 — Maggavibhaṅga Sutta",
          translator: "Bhikkhu Bodhi",
          paliQuote: "Katamā ca, bhikkhave, sammāvācā? Yā kho, bhikkhave, musāvādā veramaṇī, pisuṇāya vācāya veramaṇī, pharusāya vācāya veramaṇī, samphappalāpā veramaṇī: ayaṁ vuccati, bhikkhave, sammāvācā.",
          transQuote: "And what, monastics, is right speech? Abstinence from false speech, abstinence from divisive speech, abstinence from harsh speech, abstinence from idle chatter: this is called right speech."
        },
        doctrinalExplanation: "Right speech purifies the verbal faculty. In MN 58 (Abhayarājakumāra Sutta), the Buddha articulates four strict criteria for speech: it must be true (bhūta), beneficial (atthasaṁhita), spoken at the proper time (kālena), and motivated by loving-kindness (mettacittena). Untruth damages trust; divisive speech tears communities apart; harsh speech inflicts psychic wounds; idle chatter scatters mental energy.",
        functionInPath: "Serves as the frontline guardian of ethical integrity, preventing verbal remorse (vippaṭisāra) and fostering an unagitated mind capable of concentration.",
        layApplication: {
          tag: "PRACTICAL APPLICATION",
          description: "In contracts, negotiations, and emails, rejecting exaggeration or deceit; refusing to partake in workplace gossip or slanderous watercooler talk; remaining gentle and composed during family disagreements; moderating impulsive digital messaging."
        },
        primaryReferences: [
          { code: "SN 45.8", name: "Analysis of the Path", url: "https://suttacentral.net/sn45.8/en/bodhi" },
          { code: "MN 58", name: "To Prince Abhaya", url: "https://suttacentral.net/mn58/en/sujato" },
          { code: "AN 10.176", name: "Cunda Kammaraputta Sutta", url: "https://suttacentral.net/an10.176/en/sujato" }
        ],
        furtherStudy: "Investigate AN 10.176 for the comprehensive canonical breakdown of verbal karma."
      },
      {
        factorNumber: 4,
        paliName: "Sammā-kammanta",
        englishName: "Right Action",
        trainingGroup: "Sīla (Virtue)",
        canonicalDefinition: {
          sutta: "SN 45.8 — Maggavibhaṅga Sutta",
          translator: "Bhikkhu Bodhi",
          paliQuote: "Katamo ca, bhikkhave, sammākammanto? Yā kho, bhikkhave, pāṇātipātā veramaṇī, adinnādānā veramaṇī, kāmesumicchācārā veramaṇī: ayaṁ vuccati, bhikkhave, sammākammanto.",
          transQuote: "And what, monastics, is right action? Abstinence from the destruction of life, abstinence from taking what is not given, abstinence from sexual misconduct: this is called right action."
        },
        doctrinalExplanation: "Right action restrains unwholesome bodily actions. It embodies the universal principle of empathy proclaimed in Dhammapada 129: 'All tremble at violence; all fear death. Putting oneself in the place of another, one should neither kill nor cause to kill.' It corresponds directly to the first three of the five householder precepts (pañcasīla).",
        functionInPath: "Establishes non-harm (ahiṃsā) in the physical realm, creating the moral safety and blameless conscience (anavajjasukha) essential for deep meditative stillness.",
        layApplication: {
          tag: "PRACTICAL APPLICATION",
          description: "Respecting all sentient life by avoiding cruelty, hunting, or pest poisonings where humane alternatives exist; absolute scrupulousness with organizational funds, office supplies, and tax obligations; honoring marital fidelity and emotional integrity."
        },
        primaryReferences: [
          { code: "SN 45.8", name: "Analysis of the Path", url: "https://suttacentral.net/sn45.8/en/bodhi" },
          { code: "MN 141", name: "Analysis of the Truths", url: "https://suttacentral.net/mn141/en/sujato" },
          { code: "Dhp 129", name: "Danda Vagga", url: "https://suttacentral.net/dhp129-145/en/sujato" }
        ],
        furtherStudy: "Read AN 8.39 on the five gifts of safety (abhaya-dāna) conferred by observing the moral precepts."
      },
      {
        factorNumber: 5,
        paliName: "Sammā-ājīva",
        englishName: "Right Livelihood",
        trainingGroup: "Sīla (Virtue)",
        canonicalDefinition: {
          sutta: "SN 45.8 — Maggavibhaṅga Sutta",
          translator: "Bhikkhu Bodhi",
          paliQuote: "Katamo ca, bhikkhave, sammā-ājīvo? Idha, bhikkhave, ariyasāvako micchā-ājīvaṁ pahāya sammā-ājīvena jīvikaṁ kappeti: ayaṁ vuccati, bhikkhave, sammā-ājīvo.",
          transQuote: "And what, monastics, is right livelihood? Here, monastics, a noble disciple, having abandoned wrong livelihood, earns his living by right livelihood: this is called right livelihood."
        },
        doctrinalExplanation: "While monastics practice right livelihood by avoiding fraudulent spiritual claims and improper entreaties for requisites (MN 117), for householders the Buddha explicitly defines wrong livelihood in AN 5.177 (Vaṇijjā Sutta) as five prohibited trades: (1) trade in weapons (sattha-vaṇijjā), (2) trade in living beings/slaves (satta-vaṇijjā), (3) trade in meat/butchery (maṁsa-vaṇijjā), (4) trade in intoxicants (majja-vaṇijjā), and (5) trade in poisons (visa-vaṇijjā). Right livelihood requires earning wealth through energy, initiative, and ethical rectitude without trickery, usury, or exploitation (AN 8.54).",
        functionInPath: "Ensures that one's economic survival does not rest upon the torment, poisoning, or destruction of other beings, preventing moral compromise from corrupting meditation.",
        layApplication: {
          tag: "PRACTICAL APPLICATION",
          description: "Evaluating one's career or business model to ensure it does not profit from predatory lending, deceptive marketing, environmental degradation, alcohol/drug distribution, or worker exploitation; seeking professions that deliver genuine societal benefit."
        },
        primaryReferences: [
          { code: "SN 45.8", name: "Analysis of the Path", url: "https://suttacentral.net/sn45.8/en/bodhi" },
          { code: "AN 5.177", name: "Trades Sutta", url: "https://suttacentral.net/an5.177/en/sujato" },
          { code: "AN 8.54", name: "Vyagghapajja Sutta", url: "https://suttacentral.net/an8.54/en/sujato" }
        ],
        furtherStudy: "Consult AN 5.177 and AN 4.62 for canonical standards governing lay wealth and blameless earning."
      },
      {
        factorNumber: 6,
        paliName: "Sammā-vāyāma",
        englishName: "Right Effort / Right Exertion",
        trainingGroup: "Samādhi (Concentration)",
        canonicalDefinition: {
          sutta: "SN 45.8 — Maggavibhaṅga Sutta",
          translator: "Bhikkhu Bodhi",
          paliQuote: "Katamo ca, bhikkhave, sammāvāyāmo? Idha, bhikkhave, bhikkhu anuppannānaṁ pāpakānaṁ akusalānaṁ dhammānaṁ anuppādāya chandaṁ janeti vāyamati vīriyaṁ ārabhati cittaṁ paggaṇhāti padahati; uppannānaṁ pāpakānaṁ akusalānaṁ dhammānaṁ pahānāya... anuppannānaṁ kusalānaṁ dhammānaṁ uppādāya... uppannānaṁ kusalānaṁ dhammānaṁ ṭhitiyā asammosāya bhiyyobhāvāya vepullāya bhāvanāya pāripūriyā chandaṁ janeti vāyamati vīriyaṁ ārabhati cittaṁ paggaṇhāti padahati: ayaṁ vuccati, bhikkhave, sammāvāyāmo.",
          transQuote: "And what, monastics, is right effort? Here, a monk generates desire, endeavors, rouses energy, exerts his mind, and strives: (1) for the non-arising of unarisen evil unwholesome states; (2) for the abandoning of arisen evil unwholesome states; (3) for the arising of unarisen wholesome states; (4) for the maintenance, non-decay, increase, expansion, and fulfillment by development of arisen wholesome states: this is called right effort."
        },
        doctrinalExplanation: "Right effort consists of the Four Right Strivings (cattāro sammappadhānā): prevention, abandonment, cultivation, and maintenance. Canonical effort is not frantic agitation or ascetic strain, but balanced, sustainable vigor (vīriyindriya). In AN 6.55 (Soṇa Sutta), the Buddha compares effort to tuning the strings of a lute: neither too tight (which leads to restlessness) nor too loose (which leads to sluggishness).",
        functionInPath: "Provides the sustained energetic momentum that dismantles mental defilements and energizes mindfulness and concentration.",
        layApplication: {
          tag: "PRACTICAL APPLICATION",
          description: "Vigilantly guarding the senses against media that inflame lust or rage (prevention); dropping self-pity or grudge-holding immediately upon noticing them (abandonment); deliberately cultivating loving-kindness or gratitude during daily commutes (cultivation); protecting regular morning meditation and evening reflection (maintenance)."
        },
        primaryReferences: [
          { code: "SN 45.8", name: "Analysis of the Path", url: "https://suttacentral.net/sn45.8/en/bodhi" },
          { code: "AN 4.13", name: "Striving Sutta", url: "https://suttacentral.net/an4.13/en/sujato" },
          { code: "AN 6.55", name: "Discourse to Soṇa", url: "https://suttacentral.net/an6.55/en/sujato" }
        ],
        furtherStudy: "Read AN 4.14 on the four strivings: restraint (saṁvara), abandoning (pahāna), development (bhāvanā), and preservation (anurakkhaṇā)."
      },
      {
        factorNumber: 7,
        paliName: "Sammā-sati",
        englishName: "Right Mindfulness",
        trainingGroup: "Samādhi (Concentration)",
        canonicalDefinition: {
          sutta: "SN 45.8 — Maggavibhaṅga Sutta",
          translator: "Bhikkhu Bodhi",
          paliQuote: "Katamā ca, bhikkhave, sammāsati? Idha, bhikkhave, bhikkhu kāye kāyānupassī viharati ātāpī sampajāno satimā, vineyya loke abhijjhādomanassaṁ; vedanāsu vedanānupassī viharati... citte cittānupassī viharati... dhammesu dhammānupassī viharati ātāpī sampajāno satimā, vineyya loke abhijjhādomanassaṁ: ayaṁ vuccati, bhikkhave, sammāsati.",
          transQuote: "And what, monastics, is right mindfulness? Here, a monk dwells contemplating the body in the body, ardent, clearly comprehending, mindful, having removed covetousness and grief regarding the world; he dwells contemplating feelings in feelings... mind in mind... mind-objects in mind-objects, ardent, clearly comprehending, mindful, having removed covetousness and grief regarding the world: this is called right mindfulness."
        },
        doctrinalExplanation: "Right mindfulness is defined canonically strictly as the Four Establishments of Mindfulness (cattāro satipaṭṭhānā): body (kāya), feelings (vedanā), mind (citta), and phenomena/dhammas (dhammā). It is qualified by three active qualities: ardent (ātāpī), clearly comprehending (sampajāno), and mindful (satimā). Far from being passive or indifferent non-judgmental observation, canonical sati maintains alert vigilance, recollecting Dhamma principles and actively casting off covetousness and grief.",
        functionInPath: "Acts as the mental gatekeeper. It holds the meditation object in awareness, uncovers latent defilements, supports right concentration, and provides the clear data necessary for wisdom.",
        layApplication: {
          tag: "PRACTICAL APPLICATION",
          description: "Remaining anchored in breath and posture while sitting at a desk or walking (kāyānupassanā); catching the initial spark of irritation (unpleasant vedanā) before it turns into verbal anger; recognizing states of distraction or anxiety without identifying with them (cittānupassanā); framing domestic problems in terms of the five hindrances and five aggregates (dhammānupassanā)."
        },
        primaryReferences: [
          { code: "SN 45.8", name: "Analysis of the Path", url: "https://suttacentral.net/sn45.8/en/bodhi" },
          { code: "DN 22", name: "Mahāsatipaṭṭhāna Sutta", url: "https://suttacentral.net/dn22/en/sujato" },
          { code: "MN 10", name: "Satipaṭṭhāna Sutta", url: "https://suttacentral.net/mn10/en/sujato" }
        ],
        furtherStudy: "Read DN 22 for the exhaustive exposition of the four satipaṭṭhānas, especially the section on the Four Noble Truths."
      },
      {
        factorNumber: 8,
        paliName: "Sammā-samādhi",
        englishName: "Right Concentration / Right Stillness",
        trainingGroup: "Samādhi (Concentration)",
        canonicalDefinition: {
          sutta: "SN 45.8 — Maggavibhaṅga Sutta",
          translator: "Bhikkhu Bodhi",
          paliQuote: "Katamo ca, bhikkhave, sammāsamādhi? Idha, bhikkhave, bhikkhu vivicceva kāmehi vivicca akusalehi dhammehi savitakkaṁ savicāraṁ vivekajaṁ pītisukhaṁ paṭhamaṁ jhānaṁ upasampajja viharati; vitakkavicārānaṁ vūpasamā... dutiyaṁ jhānaṁ... pītiyā ca virāgā... tatiyaṁ jhānaṁ... sukhassa ca pahānā dukkhassa ca pahānā... catutthaṁ jhānaṁ upasampajja viharati: ayaṁ vuccati, bhikkhave, sammāsamādhi.",
          transQuote: "And what, monastics, is right concentration? Here, secluded from sensual pleasures, secluded from unwholesome states, a monk enters and dwells in the first jhāna... with the stilling of applied and sustained thought, enters the second jhāna... with the fading away of rapture, enters the third jhāna... with the abandoning of pleasure and pain, enters the fourth jhāna, which has neither-pain-nor-pleasure and purity of mindfulness due to equanimity: this is called right concentration."
        },
        doctrinalExplanation: "Right concentration is defined canonically as the four meditative absorptions (cattāri jhānāni). In MN 44, concentration is defined as one-pointedness of mind (cittassa ekaggatā), with the four satipaṭṭhānas as its foundation (nimitta) and the four right efforts as its equipment (parikkhāra). It must never be trivialized as mere physical relaxation, secular stress relief, or hypnotic trance; it is a radiant, unshakeable state of unified awareness that suppresses the five hindrances and renders the mind malleable (kammaniya) for insight.",
        functionInPath: "Unifies, stabilizes, and purifies the mind, creating the serene laboratory in which liberating insight into the three characteristics and four truths can arise.",
        layApplication: {
          tag: "PRACTICAL APPLICATION",
          description: "Establishing a daily sitting practice focused on breath awareness (ānāpānasati); systematically settling bodily tension and abandoning mental agitation; tasting the wholesome, unworldly joy (sukha) born of sensory seclusion, freeing oneself from compulsive dependence on worldly entertainment."
        },
        primaryReferences: [
          { code: "SN 45.8", name: "Analysis of the Path", url: "https://suttacentral.net/sn45.8/en/bodhi" },
          { code: "MN 141", name: "Analysis of the Truths", url: "https://suttacentral.net/mn141/en/sujato" },
          { code: "MN 44", name: "Cūḷavedalla Sutta", url: "https://suttacentral.net/mn44/en/sujato" }
        ],
        furtherStudy: "Consult MN 44 and AN 9.36 to see how liberating insight is developed upon emerging from jhāna."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // SECTION 3: THE THREEFOLD TRAINING (TISIKKHĀ)
  // --------------------------------------------------------------------------
  section3: {
    id: "sec-threefold-training",
    number: "03",
    title: "The Threefold Training",
    paliTitle: "Tisikkhā: Sīla, Samādhi, Paññā",
    provenanceTag: "CANONICAL (MN 44 — Cūḷavedalla Sutta)",
    speaker: "Bhikkhunī Dhammadinnā (endorsed by the Buddha)",
    canonicalPassage: {
      pali: "Na kho, āvuso visākha, ariyen’aṭṭhaṅgikena maggena tayo khandhā saṅgahitā; tīhi ca kho, āvuso visākha, khandhehi ariyo aṭṭhaṅgiko maggo saṅgahito. Yā c’āvuso visākha, sammāvācā yo ca sammākammanto yo ca sammā-ājīvo, ime dhammā sīlakkhandhe saṅgahitā. Yo ca sammāvāyāmo yā ca sammāsati yo ca sammāsamādhi, ime dhammā samādhikkhandhe saṅgahitā. Yā ca sammādiṭṭhi yo ca sammāsaṅkappo, ime dhammā paññākkhandhe saṅgahitā.",
      translation: "The three aggregates are not included in the noble eightfold path, friend Visākha, but the noble eightfold path is included in the three aggregates. Right speech, right action, and right livelihood—these states are included in the virtue aggregate. Right effort, right mindfulness, and right concentration—these states are included in the concentration aggregate. Right view and right intention—these states are included in the wisdom aggregate.",
      translator: "Bhikkhu Bodhi (MN 44)"
    },
    doctrinalAnalysis: "In the Cūḷavedalla Sutta, the enlightened bhikkhunī Dhammadinnā explains the classification of the eight path factors into the threefold training (tisikkhā) or three aggregates (tayo khandhā). When Visākha later recounted this to the Buddha, the Blessed One praised her wisdom, stating he would have answered in the exact same way.",
    trainings: [
      {
        name: "1. Virtue Aggregate (Sīla-kkhandha)",
        factors: ["Right Speech (Sammā-vācā)", "Right Action (Sammā-kammanta)", "Right Livelihood (Sammā-ājīva)"],
        purpose: "Purifies external actions and speech, establishes moral blamelessness, and prevents remorse (avippaṭisāra)."
      },
      {
        name: "2. Concentration Aggregate (Samādhi-kkhandha)",
        factors: ["Right Effort (Sammā-vāyāma)", "Right Mindfulness (Sammā-sati)", "Right Concentration (Sammā-samādhi)"],
        purpose: "Cleanses the internal mind, subdues the five hindrances (nīvaraṇā), and cultivates one-pointed, luminous stability."
      },
      {
        name: "3. Wisdom Aggregate (Paññā-kkhandha)",
        factors: ["Right View (Sammā-diṭṭhi)", "Right Intention (Sammā-saṅkappa)"],
        purpose: "Penetrates the true nature of phenomena, eradicates ignorance (avijjā), and realizes cessation (Nibbāna)."
      }
    ],
    relationshipExplanation: "The threefold training is a structural classification, not a rigid sequential conveyor belt where one must completely finish virtue before beginning mindfulness, or master concentration before understanding right view. Right view guides ethical conduct; ethical conduct protects concentration; concentration empowers deep wisdom; and deeper wisdom perfects right view."
  },

  // --------------------------------------------------------------------------
  // SECTION 4: HOW THE PATH FACTORS WORK TOGETHER
  // --------------------------------------------------------------------------
  section4: {
    id: "sec-path-interconnection",
    number: "04",
    title: "How the Path Factors Work Together",
    paliTitle: "Mahācattārīsaka Sutta (The Great Forty)",
    provenanceTag: "CANONICAL (MN 117)",
    sourceSutta: { code: "MN 117", title: "Mahācattārīsaka Sutta", url: "https://suttacentral.net/mn117/en/sujato" },
    keyPrinciples: [
      {
        title: "Right View as the Forerunner (Pubbaṅgama)",
        detail: "MN 117 states: 'Therein, monastics, right view comes first. And how does right view come first? One understands wrong view as wrong view, and right view as right view.' Right view identifies wholesome from unwholesome across every factor."
      },
      {
        title: "The Inseparable Triad: View, Effort, and Mindfulness",
        detail: "For every single factor (intention, speech, action, livelihood), three qualities constantly revolve and support it: (1) Right View discerns what is right and wrong; (2) Right Effort exerts the energy to abandon the wrong and cultivate the right; (3) Right Mindfulness remains attentively aware of this cultivation without lapse."
      },
      {
        title: "Mundane vs. Supramundane Right View",
        detail: "The sutta distinguishes: (1) Right view that is affected by taints, siding with merit, ripening in the acquisitions (sāsavā puññabhāgiyā upadhivepakkā)—affirming karma and moral efficacy; and (2) Noble right view that is taint-free, supramundane, a factor of the path (anāsavā lokuttarā maggaṅgā)—wisdom in one whose mind is noble, contemplating the path factors."
      },
      {
        title: "Noble Right Concentration with Its Prerequisites",
        detail: "The Buddha defines noble right concentration as 'one-pointedness of mind equipped with these seven factors' (ariya sammāsamādhi saupaniso saparikkhāro). Right concentration does not stand alone; the other seven factors are its essential accessories and supporting conditions."
      },
      {
        title: "The Tenfold Path of the Arahant (Dasaṅga)",
        detail: "The path does not stop at eight factors; in the fully liberated disciple, the eight factors culminate in ten: Right View gives rise to Right Intention... culminating in Right Concentration; from Right Concentration arises Right Knowledge (Sammā-ñāṇa), and from Right Knowledge arises Right Deliverance (Sammā-vimutti)."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // SECTION 5: THE GRADUAL TRAINING (ANUPUBBASIKKHĀ)
  // --------------------------------------------------------------------------
  section5: {
    id: "sec-gradual-training",
    number: "05",
    title: "The Gradual Training",
    paliTitle: "Anupubbasikkhā, Anupubbakiriyā, Anupubbapaṭipadā",
    provenanceTag: "CANONICAL (MN 107 & MN 39)",
    sourceSuttas: [
      { code: "MN 107", title: "Gaṇakamoggallāna Sutta", url: "https://suttacentral.net/mn107/en/sujato" },
      { code: "MN 39", title: "Mahā-Assapura Sutta", url: "https://suttacentral.net/mn39/en/sujato" }
    ],
    intro: "In MN 107, the accountant Gaṇaka Moggallāna asks the Buddha if there is a gradual training in his teaching, just as in arithmetic, archery, or banking. The Buddha confirms that the Dhamma is a gradual progression (anupubbasikkhā), not an abrupt, magical leap.",
    progressionStages: [
      {
        stageNumber: 1,
        paliTerm: "Sīlasaṁvara",
        title: "Moral Conduct & Ethical Restraint",
        description: "The practitioner dwells virtuous, restrained by the moral codes, seeing danger in the slightest fault."
      },
      {
        stageNumber: 2,
        paliTerm: "Indriyasaṁvara",
        title: "Guarding the Sense Doors",
        description: "Upon seeing a form or hearing a sound, one does not grasp at its signs or features, guarding against covetousness and grief."
      },
      {
        stageNumber: 3,
        paliTerm: "Bhojane mattaññutā",
        title: "Moderation in Eating",
        description: "Reflecting wisely on physical nourishment: not for intoxication or vanity, but solely for bodily health and supporting the spiritual life."
      },
      {
        stageNumber: 4,
        paliTerm: "Jāgariyānuyoga",
        title: "Dedication to Wakefulness",
        description: "Cleansing the mind of obstructive thoughts through walking and sitting meditation during day and night."
      },
      {
        stageNumber: 5,
        paliTerm: "Satisampajañña",
        title: "Mindfulness and Clear Comprehension",
        description: "Acting with complete situational clarity when stepping, bending, dressing, speaking, or remaining silent."
      },
      {
        stageNumber: 6,
        paliTerm: "Vivitta senāsana",
        title: "Resorting to Seclusion",
        description: "Seeking quiet places free from excessive social distraction to practice deep seated meditation."
      },
      {
        stageNumber: 7,
        paliTerm: "Nīvaraṇappahāna",
        title: "Abandoning the Five Hindrances",
        description: "Purifying the heart of sensual desire (kāmacchanda), ill will (byāpāda), sloth and torpor (thīna-middha), restlessness and remorse (uddhacca-kukkucca), and doubt (vicikicchā)."
      },
      {
        stageNumber: 8,
        paliTerm: "Jhānāni & Ñāṇadassana",
        title: "The Four Jhānas & Direct Liberating Insight",
        description: "Entering the serene absorptions and directing the unified, radiant mind toward the eradication of all taints (āsavakkhaya)."
      }
    ],
    distinctionNote: "Doctrinal Distinction: The gradual training is a pedagogical progression of contemplative culture. While deeply aligned with the Noble Eightfold Path, its individual stages should not be confused with or substituted for the formal eight-factor definition of the Fourth Noble Truth."
  },

  // --------------------------------------------------------------------------
  // SECTION 6: MINDFULNESS AND MEDITATION
  // --------------------------------------------------------------------------
  section6: {
    id: "sec-mindfulness-meditation",
    number: "06",
    title: "Mindfulness and Meditation in Canonical Context",
    paliTitle: "Satipaṭṭhāna, Ānāpānasati & Bojjhaṅgā",
    provenanceTag: "CANONICAL (DN 22 & MN 118)",
    sourceSuttas: [
      { code: "DN 22", title: "Mahāsatipaṭṭhāna Sutta", url: "https://suttacentral.net/dn22/en/sujato" },
      { code: "MN 118", title: "Ānāpānasati Sutta", url: "https://suttacentral.net/mn118/en/sujato" }
    ],
    satipatthanaFramework: {
      title: "The Four Establishments of Mindfulness (DN 22)",
      foundations: [
        { name: "1. Kāyānupassanā", focus: "Contemplation of the body (breath, postures, clear comprehension, physical elements, anatomical parts)." },
        { name: "2. Vedanānupassanā", focus: "Contemplation of feelings (pleasant, painful, neutral; worldly vs. spiritual feeling tones)." },
        { name: "3. Cittānupassanā", focus: "Contemplation of mind states (mind with lust, without lust, with hatred, scattered, concentrated, liberated)." },
        { name: "4. Dhammānupassanā", focus: "Contemplation of phenomena (the 5 hindrances, the 5 clinging-aggregates, the 6 sense bases, the 7 factors of awakening, and the 4 noble truths)." }
      ]
    },
    anapanasatiCascade: {
      title: "The Fourfold Fulfilling Cascade (MN 118)",
      text: "MN 118 demonstrates that mindfulness of breathing is not a detached, secular relaxation drill. When practiced systematically across its 16 steps, it fulfills a profound spiritual chain of causation:",
      steps: [
        "1. Mindfulness of Breathing (Ānāpānasati), when developed, fulfills the Four Establishments of Mindfulness.",
        "2. The Four Establishments of Mindfulness, when developed, fulfill the Seven Factors of Awakening (Satta Bojjhaṅgā: mindfulness, investigation of dhammas, energy, rapture, tranquility, concentration, equanimity).",
        "3. The Seven Factors of Awakening, when developed, fulfill True Knowledge and Liberation (Vijjā-vimutti)."
      ]
    },
    secularWarning: "Doctrinal Guardrail: The Buddha never taught mindfulness as a commercial productivity hack or value-neutral stress reducer. Canonical sati is ethically imbued, grounded in right view, and oriented toward the complete cessation of craving."
  },

  // --------------------------------------------------------------------------
  // SECTION 7: RIGHT INTENTION IN PRACTICE
  // --------------------------------------------------------------------------
  section7: {
    id: "sec-right-intention",
    number: "07",
    title: "Right Intention in Practice: Cultivating the Mind's Inclination",
    paliTitle: "Dvedhāvitakka Sutta: The Two Classes of Thought",
    provenanceTag: "CANONICAL (MN 19)",
    sourceSutta: { code: "MN 19", title: "Dvedhāvitakka Sutta", url: "https://suttacentral.net/mn19/en/sujato" },
    bodhisattaMethod: {
      quote: "Whatever a monk ponders and reflects upon frequently, to that the mind inclines.",
      paliQuote: "Yadeva bahulaṁ anuvitakketi anuvicāreti, tathā tathā nati hoti cetaso.",
      division: [
        {
          class: "Unwholesome Thoughts (Akusala Vitakka)",
          items: ["Sensual desire (Kāma-vitakka)", "Ill will (Byāpāda-vitakka)", "Harmfulness / Cruelty (Vihiṁsā-vitakka)"],
          consequence: "Leads to affliction for oneself, affliction for others, obstructs wisdom, and turns away from Nibbāna."
        },
        {
          class: "Wholesome Thoughts (Kusala Vitakka)",
          items: ["Renunciation (Nekkhamma-vitakka)", "Non-ill will / Benevolence (Abyāpāda-vitakka)", "Harmlessness / Compassion (Avihiṁsā-vitakka)"],
          consequence: "Leads to peace for oneself and others, fosters wisdom, and leads straight toward Nibbāna."
        }
      ]
    },
    layApplication: {
      tag: "PRACTICAL APPLICATION",
      intro: "A householder puts MN 19 into practice by observing their internal thought narrative throughout the day:",
      points: [
        "Noticing habitual daydreaming about sensual luxury or consumer acquisition, recognizing its agitation, and intentionally inclining the heart toward contentment (santuṭṭhi).",
        "Noticing the initial irritation that arises when a child disobeys or a colleague drops a deadline, recognizing anger as a burning ember, and immediately replacing it with patience and goodwill.",
        "Refusing to entertain retaliatory fantasies or vindictive plans, cultivating an unshakeable commitment to harmlessness in every domestic and commercial relationship."
      ]
    }
  },

  // --------------------------------------------------------------------------
  // SECTION 8: THE PATH IN LAY LIFE
  // --------------------------------------------------------------------------
  section8: {
    id: "sec-lay-life",
    number: "08",
    title: "The Noble Path in Lay Life",
    paliTitle: "Gihī-Sāmīcipaṭipadā (The Householder's Noble Training)",
    provenanceTag: "CANONICAL (AN 8.54, AN 4.62, DN 31, AN 5.177, MN 73)",
    intro: "Theravāda orthodoxy does not teach that lay practitioners are excluded from the liberating fruit of the Noble Eightfold Path. The Buddha delivered detailed, uncompromising discourses specifically guiding householders on how to weave the path into wealth, family, and spiritual attainment.",
    suttas: [
      {
        code: "AN 8.54",
        title: "Vyagghapajja Sutta (Dīghajānu)",
        url: "https://suttacentral.net/an8.54/en/sujato",
        theme: "Welfare in This Life & Welfare in Lives to Come",
        content: "The Buddha provides Dīghajānu with four practical qualities for worldly success: (1) Energetic initiative in work (uṭṭhāna-sampadā); (2) Vigilant protection of legitimate earnings (ārakkha-sampadā); (3) Noble spiritual friends (kalyāṇamittatā); and (4) Balanced, prudent living (samajīvitā). He then provides four qualities for spiritual liberation: (1) Accomplishment in faith (saddhā-sampadā); (2) Accomplishment in virtue (sīla-sampadā); (3) Accomplishment in generosity (cāga-sampadā); and (4) Accomplishment in wisdom (paññā-sampadā)."
      },
      {
        code: "AN 4.62",
        title: "Anaṇa Sutta (Debtlessness)",
        url: "https://suttacentral.net/an4.62/en/sujato",
        theme: "The Four Blameless Joys of a Householder",
        content: "The Buddha details four legitimate happinesses accessible to laypeople: (1) Atthi-sukha (the joy of legitimate ownership earned through honest labor); (2) Bhoga-sukha (the joy of enjoying wealth and sharing it generously); (3) Anaṇa-sukha (the deep psychological joy of being free from all debt); and (4) Anavajja-sukha (the supreme joy of blameless, unblemished bodily, verbal, and mental conduct)."
      },
      {
        code: "DN 31",
        title: "Sigālovāda Sutta",
        url: "https://suttacentral.net/dn31/en/sujato",
        theme: "The Code of Reciprocal Social Ethics",
        content: "Known as the householder's Vinaya. The Buddha replaces superstitious ritual worship of the cardinal directions with the sacred fulfillment of reciprocal duties across six social relationships: parents and children, teachers and students, husband and wife, friends and companions, employers and workers, monastics and laypeople."
      },
      {
        code: "AN 5.177",
        title: "Vaṇijjā Sutta",
        url: "https://suttacentral.net/an5.177/en/sujato",
        theme: "Five Prohibited Commercial Trades",
        content: "A lay follower must strictly avoid livelihood rooted in: trade in weapons (sattha), living beings/slaves (satta), meat/butchery (maṁsa), intoxicants (majja), and poisons (visa)."
      },
      {
        code: "MN 73",
        title: "Mahāvacchagotta Sutta",
        url: "https://suttacentral.net/mn73/en/sujato",
        theme: "Lay Disciple Liberating Attainment",
        content: "When the wanderer Vacchagotta asks if any white-clothed lay disciples (gihi odātavasanā) living in homes have achieved high spiritual realization, the Buddha emphatically confirms: not one hundred, not two, three, four, or five hundred, but far more householders—both men and women—have attained the stages of Stream-Entry (sotāpatti), Once-Returning (sakadāgāmī), and Non-Returning (anāgāmī)."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // SECTION 9: FROM PATH DEVELOPMENT TO CESSATION
  // --------------------------------------------------------------------------
  section9: {
    id: "sec-path-to-cessation",
    number: "09",
    title: "From Path Development to Cessation (Nirodha)",
    paliTitle: "Cetanākaraṇīya Sutta & The Realization of Nibbāna",
    provenanceTag: "CANONICAL (AN 11.2 & SN 38.1)",
    sourceSuttas: [
      { code: "AN 11.2", title: "Cetanākaraṇīya Sutta", url: "https://suttacentral.net/an11.2/en/sujato" },
      { code: "SN 38.1", title: "Nibbāna Sutta", url: "https://suttacentral.net/sn38.1/en/bodhi" }
    ],
    naturalCausation: {
      title: "The Natural Unfolding of Liberation (AN 11.2)",
      text: "In AN 11.2, the Buddha explains that spiritual progress does not require anxious, self-referential willing ('may I be liberated'). When the supporting conditions are cultivated, awakening unfolds naturally through the law of Dhamma (dhammatā):",
      chain: [
        "For one of virtuous conduct (sīlavanto), freedom from remorse (avippaṭisāra) arises naturally.",
        "From freedom from remorse, gladness (pāmojja) arises naturally.",
        "From gladness, rapture (pīti) arises naturally.",
        "From rapture, bodily tranquility (passaddhi) arises naturally.",
        "From tranquility, happiness (sukha) arises naturally.",
        "From happiness, mental stillness/concentration (samādhi) arises naturally.",
        "From concentration, knowing and seeing things as they really are (yathābhūtañāṇadassana) arises naturally.",
        "From knowing and seeing reality, disenchantment (nibbidā) arises naturally.",
        "From disenchantment, dispassion (virāga) arises naturally.",
        "From dispassion, the knowledge and vision of liberation (vimuttiñāṇadassana) arises naturally."
      ]
    },
    nibbanaDefinition: {
      title: "Canonical Definition of Nibbāna (SN 38.1)",
      pali: "Yo kho, āvuso, rāgakkhayo dosakkhayo mohakkhayo—idaṁ vuccati nibbānaṁ.",
      translation: "The destruction of lust, the destruction of hatred, the destruction of delusion: this, friend, is called Nibbāna.",
      explanation: "Nibbāna is the unconditioned element (asaṅkhatā dhātu). It must never be reduced to mundane psychological relaxation, temporary emotional tranquility, or a fleeting flow state. It is the definitive, irreversible cessation of greed, hatred, and delusion—the ultimate cessation of all dukkha."
    }
  },

  // --------------------------------------------------------------------------
  // SECTION 10: COMMON MISUNDERSTANDINGS CORRECTED
  // --------------------------------------------------------------------------
  section10: {
    id: "sec-misunderstandings",
    number: "10",
    title: "Common Misunderstandings Corrected",
    paliTitle: "Vipallāsa-Vūpasama (Correcting Conceptual Distortions)",
    provenanceTag: "CANONICAL REBUTTALS",
    intro: "Modern popular spirituality frequently distorts the Buddha's Fourth Noble Truth into secular self-help, isolated meditation techniques, or vague philosophical maxims. The canonical texts directly refute these 10 widespread misconceptions:",
    items: [
      {
        misunderstanding: "1. The eight factors are eight isolated, linear steps to be completed one after the other.",
        rebuttal: "MN 117 establishes that the path factors operate as an integrated matrix. Right View, Right Effort, and Right Mindfulness encircle and accompany every single factor simultaneously.",
        citation: "MN 117 (Mahācattārīsaka Sutta)"
      },
      {
        misunderstanding: "2. The path is merely a conventional moral code or social etiquette system.",
        rebuttal: "MN 44 and MN 117 prove that ethical virtue (sīla) is the indispensable foundation, but the path culminates in profound mental unification (samādhi) and liberating wisdom (paññā) that uproots existential craving.",
        citation: "MN 44 & MN 117"
      },
      {
        misunderstanding: "3. The path is exclusively a silent seated meditation technique, making ordinary life irrelevant.",
        rebuttal: "SN 45.8 explicitly integrates speech (vācā), physical action (kammanta), and commercial livelihood (ājīva) as full structural factors of equal canonical weight to meditation.",
        citation: "SN 45.8 (Maggavibhaṅga Sutta)"
      },
      {
        misunderstanding: "4. Right mindfulness (sammā-sati) means only non-judgmental, present-moment awareness.",
        rebuttal: "DN 22 and SN 45.8 define sati as active recollection of Dhamma, characterized as ardent (ātāpī) and clearly comprehending (sampajāno), actively identifying unwholesome states and relinquishing covetousness and grief.",
        citation: "DN 22 & SN 45.8"
      },
      {
        misunderstanding: "5. Right concentration (sammā-samādhi) means merely feeling physically relaxed or spacing out.",
        rebuttal: "SN 45.8 and MN 141 define sammā-samādhi exclusively as the four jhānas—states of profound mental unification, luminous clarity, and sensory seclusion characterized by refined rapture, happiness, and equanimity.",
        citation: "SN 45.8 & MN 141"
      },
      {
        misunderstanding: "6. The threefold training (tisikkhā) replaces or supersedes the Noble Eightfold Path.",
        rebuttal: "In MN 44, Bhikkhunī Dhammadinnā explains that the three trainings are a pedagogical classification of the eight path factors, not a replacement or separate curriculum.",
        citation: "MN 44 (Cūḷavedalla Sutta)"
      },
      {
        misunderstanding: "7. Every detail of the gradual training formula is an independent factor of the Fourth Truth.",
        rebuttal: "MN 107 and MN 39 present the gradual training as a pedagogical culture of contemplative life (anupubbasikkhā); the Fourth Noble Truth is specifically defined by the eight factors.",
        citation: "MN 107 & MN 39"
      },
      {
        misunderstanding: "8. Lay practice has no connection to liberation, serving only to generate merit for future lives.",
        rebuttal: "MN 73 and AN 6.119 explicitly confirm that hundreds of white-robed lay disciples realized stream-entry, once-returning, and non-returning while maintaining households.",
        citation: "MN 73 & AN 6.119"
      },
      {
        misunderstanding: "9. Modern psychological stages or meditation-stage maps are automatically canonical doctrine.",
        rebuttal: "Theravāda doctrinal hierarchy establishes the Pāli Sutta Piṭaka as primary authority. Commentarial maps (Visuddhimagga) and modern systems are secondary pedagogical aids and must not override the suttas.",
        citation: "Theravāda Canonical Hierarchy"
      },
      {
        misunderstanding: "10. The Fourth Noble Truth is fulfilled by intellectual assent or scholarly study alone.",
        rebuttal: "SN 56.11 specifies the operative duty (kicca) of the Fourth Truth as bhāvetabba—it must be cultivated, developed, and realized in direct bodily, verbal, and mental conduct.",
        citation: "SN 56.11 (Dhammacakkappavattana Sutta)"
      }
    ]
  }
};
const FOURTH_NOBLE_TRUTH_MODULE_PT = {
  id: "fourth-noble-truth-module",
  provenance: {
    authority: "Cânon Pāli (Tipiṭaka) como autoridade doutrinária primária",
    commentarialStatus: "Comentários tradicionais (Aṭṭhakathā) e aplicações pedagógicas para leigos identificados explicitamente",
    reviewStatus: "Verificado contra edições canônicas do SuttaCentral e traduções de Bhikkhu Bodhi & Bhikkhu Sujato"
  },
  header: {
    badge: "A QUARTA NOBRE VERDADE",
    paliFormula: "Dukkha-nirodhagāminī Paṭipadā Ariyasacca",
    translation: "A Nobre Verdade do Caminho que Conduz à Cessação do Sofrimento",
    shortTitle: "O Nobre Caminho Óctuplo (Ariya Aṭṭhaṅgika Magga)",
    leadText: "A Quarta Nobre Verdade não é um conjunto de proposições filosóficas abstratas ou técnicas casuais de autoajuda. É o Caminho do Meio (majjhimā paṭipadā) proclamado pelo Buda: uma disciplina de cultivo prático (bhāvanā) mental, verbal e corporal—uma terapêutica orgânica e interconectada que conduz diretamente ao desvanecimento do apego febril e à realização incondicionada de Nibbāna."
  },

  // --------------------------------------------------------------------------
  // SEÇÃO 1: O QUE É A QUARTA NOBRE VERDADE?
  // --------------------------------------------------------------------------
  section1: {
    id: "sec-what-is-fourth-truth",
    number: "01",
    title: "O que é a Quarta Nobre Verdade?",
    paliTitle: "Dukkha-nirodhagāminī Paṭipadā Ariyasacca",
    provenanceTag: "CANÔNICO",
    sourceSuttas: [
      { code: "SN 56.11", title: "Dhammacakkappavattana Sutta", url: "https://suttacentral.net/sn56.11/pt" },
      { code: "MN 141", title: "Saccavibhaṅga Sutta", url: "https://suttacentral.net/mn141/pt" }
    ],
    canonicalPassage: {
      pali: "Idaṁ kho pana, bhikkhave, dukkhanirodhagāminī paṭipadā ariyasaccaṁ: ayameva ariyo aṭṭhaṅgiko maggo, seyyathidaṁ: sammādiṭṭhi, sammāsaṅkappo, sammāvācā, sammākammanto, sammā-ājīvo, sammāvāyāmo, sammāsati, sammāsamādhi.",
      translation: "Isto, ó monges, é a nobre verdade do caminho que conduz à cessação do sofrimento: é este nobre caminho óctuplo, a saber: visão correta, intenção correta, linguagem correta, ação correta, modo de vida correto, esforço correto, atenção plena correta, concentração correta.",
      translator: "Bhikkhu Bodhi (SN 56.11)"
    },
    doctrinalAnalysis: "A expressão 'Dukkha-nirodhagāminī paṭipadā' é formada por dukkha (insatisfatoriedade/estresse), nirodha (cessação/extinção do anseio febril), gāminī (que conduz a) e paṭipadā (o caminho ou prática). Tanto na proclamação primordial do Dhamma (SN 56.11) quanto na anatomia sistemática das verdades pelo Ven. Sāriputta (MN 141), o Buda identifica esta verdade categoricamente com o Ariya Aṭṭhaṅgika Magga (O Nobre Caminho Óctuplo).",
    catukiccaFramework: {
      heading: "Os Quatro Deveres Operacionais das Quatro Nobres Verdades (Catukicca)",
      explanation: "A doutrina Theravāda enfatiza que as Quatro Nobres Verdades não são dogmas para aceitação intelectual passiva. Cada verdade impõe um dever prático indispensável (kicca):",
      tasks: [
        {
          truth: "1. Dukkha (O Sofrimento / Os Agregados de Apego)",
          dutyPali: "Pariññeyya",
          dutyEnglish: "Deve ser plenamente compreendido e diagnosticado",
          description: "Não deve ser evitado nem apenas tolerado, mas profundamente investigado na experiência viva."
        },
        {
          truth: "2. Samudaya (A Origem: O Anseio Febril / Taṇhā)",
          dutyPali: "Pahātabba",
          dutyEnglish: "Deve ser abandonado e renunciado",
          description: "Não por supressão forçada, mas pelo desapego ao discernir sua natureza condicionada."
        },
        {
          truth: "3. Nirodha (A Cessação: Nibbāna)",
          dutyPali: "Sacchikātabba",
          dutyEnglish: "Deve ser diretamente testemunhado e realizado",
          description: "Não concebido abstratamente, mas vivenciado diretamente como a extinção da cobiça, do ódio e da ilusão."
        },
        {
          truth: "4. Magga (O Nobre Caminho Óctuplo)",
          dutyPali: "Bhāvetabba",
          dutyEnglish: "Deve ser ativamente desenvolvido e cultivado",
          description: "O imperativo operacional da Quarta Verdade: é uma disciplina ativa de desenvolvimento (bhāvanā) que abrange conduta ética, estabilidade mental e sabedoria libertadora."
        }
      ],
      coreNote: "Crucialmente, a Quarta Nobre Verdade é a única cujo dever é bhāvetabba (cultivo). Ela não pode ser realizada por mera concordância filosófica. Estudar o caminho é cultivá-lo nos âmbitos familiar, profissional e meditativo."
    }
  },

  // --------------------------------------------------------------------------
  // SEÇÃO 2: O NOBRE CAMINHO ÓCTUPLO (OS 8 FATORES)
  // --------------------------------------------------------------------------
  section2: {
    id: "sec-eightfold-path-factors",
    number: "02",
    title: "O Nobre Caminho Óctuplo",
    paliTitle: "Ariya Aṭṭhaṅgika Magga",
    provenanceTag: "DEFINIÇÕES CANÔNICAS (SN 45.8 & MN 141)",
    intro: "As definições canônicas de cada um dos oito fatores foram fixadas no SN 45.8 (Maggavibhaṅga Sutta) e no MN 141 (Saccavibhaṅga Sutta). A seguir, cada fator é detalhado com seus termos em Pāli, função doutrinária e aplicação prática na vida leiga.",
    factors: [
      {
        factorNumber: 1,
        paliName: "Sammā-diṭṭhi",
        englishName: "Visão Correta / Compreensão Reta",
        trainingGroup: "Paññā (Sabedoria)",
        canonicalDefinition: {
          sutta: "SN 45.8 — Maggavibhaṅga Sutta",
          translator: "Bhikkhu Bodhi",
          paliQuote: "Katamañca, bhikkhave, sammādiṭṭhi? Yaṁ kho, bhikkhave, dukkhe ñāṇaṁ, dukkhasamudaye ñāṇaṁ, dukkhanirodhe ñāṇaṁ, dukkhanirodhagāminiyā paṭipadāya ñāṇaṁ: ayaṁ vuccati, bhikkhave, sammādiṭṭhi.",
          transQuote: "E o que, monges, é visão correta? O conhecimento do sofrimento, o conhecimento da origem do sofrimento, o conhecimento da cessação do sofrimento, o conhecimento do caminho que conduz à cessação do sofrimento: isto é chamado de visão correta."
        },
        doctrinalExplanation: "A visão correta é a precursora (pubbaṅgama) de todo o caminho. Conforme exposto no MN 117, opera em dois níveis: (1) visão correta mundana acompanhada de impurezas (sāsavā), que afirma a realidade do kamma, a eficácia moral dos atos e o renascimento; e (2) visão correta nobre e supramundana (anāsavā lokuttarā), que penetra diretamente as Quatro Nobres Verdades, a origem dependente e as três características de impermanência, insatisfatoriedade e não-eu.",
        functionInPath: "Funciona como a bússola espiritual. Discerne visão errônea como errônea e visão correta como correta; fornece a clareza que orienta a intenção correta e guia o esforço e a atenção plena.",
        layApplication: {
          tag: "APLICAÇÃO PRÁTICA",
          description: "Diante de reveses financeiros ou conflitos familiares, o praticante não se coloca como vítima pessoal, mas analisa pelo diagnóstico da condicionalidade: 'Isto é dukkha surgindo de causas; agarrar-se a resultados impermanentes gera atrito; onde está o anseio e qual é a conduta lúcida a adotar?'"
        },
        primaryReferences: [
          { code: "SN 45.8", name: "Análise do Caminho", url: "https://suttacentral.net/sn45.8/pt" },
          { code: "MN 117", name: "Os Grandes Quarenta", url: "https://suttacentral.net/mn117/pt" },
          { code: "MN 9", name: "Sutta da Visão Correta", url: "https://suttacentral.net/mn9/pt" }
        ],
        furtherStudy: "Estude o MN 9 para compreender como a Visão Correta se aplica sistematicamente às raízes prejudiciais e aos quatro nutrientes."
      },
      {
        factorNumber: 2,
        paliName: "Sammā-saṅkappa",
        englishName: "Intenção Correta / Resolução Reta",
        trainingGroup: "Paññā (Sabedoria)",
        canonicalDefinition: {
          sutta: "SN 45.8 — Maggavibhaṅga Sutta",
          translator: "Bhikkhu Bodhi",
          paliQuote: "Katamo ca, bhikkhave, sammāsaṅkappo? Yo kho, bhikkhave, nekkhammasaṅkappo, abyāpādasaṅkappo, avihiṁsāsaṅkappo: ayaṁ vuccati, bhikkhave, sammāsaṅkappo.",
          transQuote: "E o que, monges, é intenção correta? A intenção de renúncia, a intenção de não-má vontade, a intenção de não-violência: isto é chamado de intenção correta."
        },
        doctrinalExplanation: "A intenção correta canaliza a visão correta em impulso afetivo e volitivo. Opõe-se frontalmente às três raízes prejudiciais: a cobiça é desfeita pela renúncia (nekkhamma), o ódio pela benevolência (abyāpāda / mettā) e a crueldade pela compaixão protetora (avihiṃsā / karuṇā). Conforme o MN 19, a mente se molda àquilo sobre o qual frequentemente reflete.",
        functionInPath: "Transforma a compreensão cognitiva em compromisso ético vivo, estabelecendo a pureza volitiva exigida para a fala, a ação e o sustento retos.",
        layApplication: {
          tag: "APLICAÇÃO PRÁTICA",
          description: "Substituir o impulso consumista pelo prazer generoso de doar (dāna); transformar a irritação doméstica em paciência (khanti); recusar-se expressamente a usar o poder profissional para prejudicar rivais ou subordinados."
        },
        primaryReferences: [
          { code: "SN 45.8", name: "Análise do Caminho", url: "https://suttacentral.net/sn45.8/pt" },
          { code: "MN 19", name: "Dois Tipos de Pensamento", url: "https://suttacentral.net/mn19/pt" }
        ],
        furtherStudy: "Consulte o MN 19 para o método do Bodhisatta de classificar pensamentos em salutares e prejudiciais."
      },
      {
        factorNumber: 3,
        paliName: "Sammā-vācā",
        englishName: "Linguagem Correta / Fala Reta",
        trainingGroup: "Sīla (Virtude)",
        canonicalDefinition: {
          sutta: "SN 45.8 — Maggavibhaṅga Sutta",
          translator: "Bhikkhu Bodhi",
          paliQuote: "Katamā ca, bhikkhave, sammāvācā? Yā kho, bhikkhave, musāvādā veramaṇī, pisuṇāya vācāya veramaṇī, pharusāya vācāya veramaṇī, samphappalāpā veramaṇī: ayaṁ vuccati, bhikkhave, sammāvācā.",
          transQuote: "E o que, monges, é linguagem correta? Abstinência da fala falsa, abstinência da fala maliciosa/divisiva, abstinência da fala áspera, abstinência da conversa frívola: isto é chamado de linguagem correta."
        },
        doctrinalExplanation: "A fala correta purifica a expressão verbal. No MN 58, o Buda estabelece os quatro critérios da palavra reta: deve ser verdadeira (bhūta), benéfica (atthasaṁhita), oportuna (kālena) e proferida com bondade no coração (mettacittena). A mentira destrói a confiança; a calúnia fratura a harmonia; a aspereza fere; a frivolidade dispersa a mente.",
        functionInPath: "Guardiã da conduta moral diária, previne o remorso da consciência (vippaṭisāra) e acalma as correntes mentais para a concentração.",
        layApplication: {
          tag: "APLICAÇÃO PRÁTICA",
          description: "Em acordos comerciais e no lar, rejeitar o exagero e a mentira; não participar de fofocas no trabalho; manter a serenidade mesmo em discussões firmes; conter o envio compulsivo de mensagens digitais inúteis."
        },
        primaryReferences: [
          { code: "SN 45.8", name: "Análise do Caminho", url: "https://suttacentral.net/sn45.8/pt" },
          { code: "MN 58", name: "Ao Príncipe Abhaya", url: "https://suttacentral.net/mn58/pt" },
          { code: "AN 10.176", name: "Cunda Kammaraputta Sutta", url: "https://suttacentral.net/an10.176/pt" }
        ],
        furtherStudy: "Examine AN 10.176 para o detalhamento dos dez caminhos de ação verbal e mental."
      },
      {
        factorNumber: 4,
        paliName: "Sammā-kammanta",
        englishName: "Ação Correta / Conduta Reta",
        trainingGroup: "Sīla (Virtude)",
        canonicalDefinition: {
          sutta: "SN 45.8 — Maggavibhaṅga Sutta",
          translator: "Bhikkhu Bodhi",
          paliQuote: "Katamo ca, bhikkhave, sammākammanto? Yā kho, bhikkhave, pāṇātipātā veramaṇī, adinnādānā veramaṇī, kāmesumicchācārā veramaṇī: ayaṁ vuccati, bhikkhave, sammākammanto.",
          transQuote: "E o que, monges, é ação correta? Abstinência de tirar a vida, abstinência de tomar o que não é dado, abstinência de má conduta sexual: isto é chamado de ação correta."
        },
        doctrinalExplanation: "A ação correta restringe as volições corporais prejudiciais. Expressa a empatia universal do Dhammapada 129: 'Todos temem a violência; todos temem a morte. Colocando-se no lugar do outro, não mate nem cause a morte.' Corresponde aos três primeiros preceitos do praticante leigo (pañcasīla).",
        functionInPath: "Garante a inocuidade física (ahiṃsā), oferecendo proteção a todos os seres e gerando a alegria irrepreensível (anavajjasukha) que acalma o espírito.",
        layApplication: {
          tag: "APLICAÇÃO PRÁTICA",
          description: "Respeitar toda vida senciente sem crueldade; zelar com rigor ético por bens compartilhados, materiais do escritório e impostos; manter a fidelidade e o respeito sagrado nos relacionamentos afetivos."
        },
        primaryReferences: [
          { code: "SN 45.8", name: "Análise do Caminho", url: "https://suttacentral.net/sn45.8/pt" },
          { code: "MN 141", name: "Análise das Verdades", url: "https://suttacentral.net/mn141/pt" },
          { code: "Dhp 129", name: "Danda Vagga", url: "https://suttacentral.net/dhp129-145/pt" }
        ],
        furtherStudy: "Leia o AN 8.39 sobre os cinco dons de destemor (abhaya-dāna) conferidos pela pureza moral."
      },
      {
        factorNumber: 5,
        paliName: "Sammā-ājīva",
        englishName: "Modo de Vida Correto / Sustento Reto",
        trainingGroup: "Sīla (Virtude)",
        canonicalDefinition: {
          sutta: "SN 45.8 — Maggavibhaṅga Sutta",
          translator: "Bhikkhu Bodhi",
          paliQuote: "Katamo ca, bhikkhave, sammā-ājīvo? Idha, bhikkhave, ariyasāvako micchā-ājīvaṁ pahāya sammā-ājīvena jīvikaṁ kappeti: ayaṁ vuccati, bhikkhave, sammā-ājīvo.",
          transQuote: "E o que, monges, é modo de vida correto? Aqui, monges, um nobre discípulo, tendo abandonado o modo de vida incorreto, obtém seu sustento pelo modo de vida correto: isto é chamado de modo de vida correto."
        },
        doctrinalExplanation: "Para os leigos, o Buda define categoricamente no AN 5.177 cinco negócios ilícitos: comércio de armas (sattha), de seres vivos/escravos (satta), de carne/abate (maṁsa), de substâncias intoxicantes (majja) e de venenos (visa). O sustento correto requer honestidade, diligência e ausência de extorsão ou fraude (AN 8.54).",
        functionInPath: "Assegura que a sobrevivência econômica não dependa do sofrimento alheio, impedindo que o peso do meio de subsistência corrompa a meditação.",
        layApplication: {
          tag: "APLICAÇÃO PRÁTICA",
          description: "Certificar-se de que sua atividade profissional não explora a vulnerabilidade alheia, não propaga vícios nem degrada o ecossistema; conduzir negócios com transparência e justiça salarial."
        },
        primaryReferences: [
          { code: "SN 45.8", name: "Análise do Caminho", url: "https://suttacentral.net/sn45.8/pt" },
          { code: "AN 5.177", name: "Sutta dos Negócios", url: "https://suttacentral.net/an5.177/pt" },
          { code: "AN 8.54", name: "Vyagghapajja Sutta", url: "https://suttacentral.net/an8.54/pt" }
        ],
        furtherStudy: "Consulte AN 5.177 e AN 4.62 para os critérios canônicos de riqueza e felicidade de um chefe de família."
      },
      {
        factorNumber: 6,
        paliName: "Sammā-vāyāma",
        englishName: "Esforço Correto / Empenho Reto",
        trainingGroup: "Samādhi (Concentração)",
        canonicalDefinition: {
          sutta: "SN 45.8 — Maggavibhaṅga Sutta",
          translator: "Bhikkhu Bodhi",
          paliQuote: "Katamo ca, bhikkhave, sammāvāyāmo? Idha, bhikkhave, bhikkhu anuppannānaṁ pāpakānaṁ akusalānaṁ dhammānaṁ anuppādāya chandaṁ janeti vāyamati vīriyaṁ ārabhati cittaṁ paggaṇhāti padahati; uppannānaṁ pāpakānaṁ... anuppannānaṁ kusalānaṁ... uppannānaṁ kusalānaṁ dhammānaṁ ṭhitiyā... chandaṁ janeti vāyamati vīriyaṁ ārabhati cittaṁ paggaṇhāti padahati: ayaṁ vuccati, bhikkhave, sammāvāyāmo.",
          transQuote: "E o que, monges, é esforço correto? Aqui, um monge gera desejo, empenha-se, suscita energia, aplica sua mente e esforça-se: (1) para o não-surgimento de estados prejudiciais não surgidos; (2) para o abandono de estados prejudiciais já surgidos; (3) para o surgimento de estados salutares não surgidos; (4) para a manutenção, aumento e pleno desenvolvimento de estados salutares já surgidos: isto é chamado de esforço correto."
        },
        doctrinalExplanation: "Compreende os Quatro Grandes Esforços (cattāro sammappadhānā): prevenção, abandono, cultivo e conservação. Não se trata de tensão ou força bruta, mas de energia equilibrada (vīriyindriya), como as cordas afinadas de um alaúde no AN 6.55 (nem frouxas demais, gerando torpor; nem tensas demais, gerando inquietação).",
        functionInPath: "Fornece o combustível e o dinamismo psicológico contínuo que alimenta a atenção plena e viabiliza a concentração profunda.",
        layApplication: {
          tag: "APLICAÇÃO PRÁTICA",
          description: "Evitar estímulos midiáticos que provoquem raiva ou luxúria (prevenção); abandonar imediatamente a inveja quando ela for notada (abandono); cultivar a gratidão nos trajetos diários (cultivo); manter com firmeza a meditação matinal e o estudo do Dhamma (conservação)."
        },
        primaryReferences: [
          { code: "SN 45.8", name: "Análise do Caminho", url: "https://suttacentral.net/sn45.8/pt" },
          { code: "AN 4.13", name: "Sutta do Esforço", url: "https://suttacentral.net/an4.13/pt" },
          { code: "AN 6.55", name: "Discurso a Soṇa", url: "https://suttacentral.net/an6.55/pt" }
        ],
        furtherStudy: "Leia AN 4.14 sobre as quatro facetas: contenção (saṁvara), renúncia (pahāna), cultivo (bhāvanā) e proteção (anurakkhaṇā)."
      },
      {
        factorNumber: 7,
        paliName: "Sammā-sati",
        englishName: "Atenção Plena Correta / Memória Reta",
        trainingGroup: "Samādhi (Concentração)",
        canonicalDefinition: {
          sutta: "SN 45.8 — Maggavibhaṅga Sutta",
          translator: "Bhikkhu Bodhi",
          paliQuote: "Katamā ca, bhikkhave, sammāsati? Idha, bhikkhave, bhikkhu kāye kāyānupassī viharati ātāpī sampajāno satimā, vineyya loke abhijjhādomanassaṁ; vedanāsu... citte... dhammesu dhammānupassī viharati ātāpī sampajāno satimā, vineyya loke abhijjhādomanassaṁ: ayaṁ vuccati, bhikkhave, sammāsati.",
          transQuote: "E o que, monges, é atenção plena correta? Aqui, um monge permanece contemplando o corpo no corpo, ardente, com plena consciência e atenção plena, tendo removido a cobiça e o desprazer em relação ao mundo; contempla as sensações nas sensações... a mente na mente... os fenômenos nos fenômenos, ardente, com plena consciência e atenção plena, tendo removido a cobiça e o desprazer em relação ao mundo: isto é chamado de atenção plena correta."
        },
        doctrinalExplanation: "Definida canonicamente de forma rigorosa como os Quatro Fundamentos da Atenção Plena (cattāro satipaṭṭhānā): corpo (kāya), sensações (vedanā), mente (citta) e fenômenos/dhammas (dhammā). Caracteriza-se por três atributos: ardente (ātāpī), plenamente consciente (sampajāno) e atenta (satimā). Longe de ser mera passividade sem discernimento, sati discerne os fatores mentais e liberta a mente da cobiça e da dor.",
        functionInPath: "Age como a sentinela atenta da mente. Ancorada no objeto, expõe impurezas, sustenta a concentração e fornece a matéria-prima direta para a sabedoria penetrante.",
        layApplication: {
          tag: "APLICAÇÃO PRÁTICA",
          description: "Manter a consciência da postura e da respiração no computador ou ao caminhar (corpo); notar o tom desprazeroso antes que ele se converta em irritação (sensações); reconhecer a dispersão sem se identificar com ela (mente); enquadrar os obstáculos diários pelos cinco impedimentos (fenômenos)."
        },
        primaryReferences: [
          { code: "SN 45.8", name: "Análise do Caminho", url: "https://suttacentral.net/sn45.8/pt" },
          { code: "DN 22", name: "Mahāsatipaṭṭhāna Sutta", url: "https://suttacentral.net/dn22/pt" },
          { code: "MN 10", name: "Satipaṭṭhāna Sutta", url: "https://suttacentral.net/mn10/pt" }
        ],
        furtherStudy: "Estude o DN 22, em especial a seção sobre a contemplação das Quatro Nobres Verdades."
      },
      {
        factorNumber: 8,
        paliName: "Sammā-samādhi",
        englishName: "Concentração Correta / Serenidade Reta",
        trainingGroup: "Samādhi (Concentração)",
        canonicalDefinition: {
          sutta: "SN 45.8 — Maggavibhaṅga Sutta",
          translator: "Bhikkhu Bodhi",
          paliQuote: "Katamo ca, bhikkhave, sammāsamādhi? Idha, bhikkhave, bhikkhu vivicceva kāmehi vivicca akusalehi dhammehi savitakkaṁ savicāraṁ vivekajaṁ pītisukhaṁ paṭhamaṁ jhānaṁ upasampajja viharati; vitakkavicārānaṁ vūpasamā... dutiyaṁ jhānaṁ... pītiyā ca virāgā... tatiyaṁ jhānaṁ... catutthaṁ jhānaṁ upasampajja viharati: ayaṁ vuccati, bhikkhave, sammāsamādhi.",
          transQuote: "E o que, monges, é concentração correta? Aqui, afastado dos prazeres sensoriais, afastado dos estados prejudiciais, um monge entra e permanece no primeiro jhāna... com o aquietamento do pensamento aplicado e sustentado, no segundo jhāna... com o desvanecimento do êxtase, no terceiro jhāna... com o abandono do prazer e da dor, no quarto jhāna: isto é chamado de concentração correta."
        },
        doctrinalExplanation: "Definida no cânon expressamente como os quatro jhānas meditativos. No MN 44, a concentração é definida como a unificação da mente (cittassa ekaggatā), tendo os quatro satipaṭṭhānas como base e os quatro esforços como equipamento. Não deve ser rebaixada a mero relaxamento físico ou transe hipnótico; é um estado límpido e maleável que suspende os cinco impedimentos.",
        functionInPath: "Unifica e estabiliza a mente, gerando a quietude profunda e luminosa na qual o discernimento penetrante das três características pode operar plenamente.",
        layApplication: {
          tag: "APLICAÇÃO PRÁTICA",
          description: "Praticar diariamente a meditação sentada com a respiração; acalmar as tensões e silenciar as inquietações do dia; saborear a alegria nobre da quietude interna, libertando-se da dependência de distrações sensoriais compulsivas."
        },
        primaryReferences: [
          { code: "SN 45.8", name: "Análise do Caminho", url: "https://suttacentral.net/sn45.8/pt" },
          { code: "MN 141", name: "Análise das Verdades", url: "https://suttacentral.net/mn141/pt" },
          { code: "MN 44", name: "Cūḷavedalla Sutta", url: "https://suttacentral.net/mn44/pt" }
        ],
        furtherStudy: "Consulte MN 44 e AN 9.36 para ver como a sabedoria libertadora se desenvolve a partir da serenidade do jhāna."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // SEÇÃO 3: O TREINAMENTO TRÍPLICE (TISIKKHĀ)
  // --------------------------------------------------------------------------
  section3: {
    id: "sec-threefold-training",
    number: "03",
    title: "O Treinamento Tríplice",
    paliTitle: "Tisikkhā: Sīla, Samādhi, Paññā",
    provenanceTag: "CANÔNICO (MN 44 — Cūḷavedalla Sutta)",
    speaker: "Bhikkhunī Dhammadinnā (endossada pelo Buda)",
    canonicalPassage: {
      pali: "Na kho, āvuso visākha, ariyen’aṭṭhaṅgikena maggena tayo khandhā saṅgahitā; tīhi ca kho, āvuso visākha, khandhehi ariyo aṭṭhaṅgiko maggo saṅgahito. Yā c’āvuso visākha, sammāvācā yo ca sammākammanto yo ca sammā-ājīvo, ime dhammā sīlakkhandhe saṅgahitā. Yo ca sammāvāyāmo yā ca sammāsati yo ca sammāsamādhi, ime dhammā samādhikkhandhe saṅgahitā. Yā ca sammādiṭṭhi yo ca sammāsaṅkappo, ime dhammā paññākkhandhe saṅgahitā.",
      translation: "Os três agregados não estão incluídos no nobre caminho óctuplo, amigo Visākha; pelo contrário, o nobre caminho óctuplo é que está incluído nos três agregados. A linguagem correta, a ação correta e o modo de vida correto estão incluídos no agregado da virtude. O esforço correto, a atenção plena correta e a concentração correta estão incluídos no agregado da concentração. A visão correta e a intenção correta estão incluídas no agregado da sabedoria.",
      translator: "Bhikkhu Bodhi (MN 44)"
    },
    doctrinalAnalysis: "No Cūḷavedalla Sutta, a sábia monja Dhammadinnā explica a inclusão dos oito fatores nos três agregados do treinamento (tisikkhā). Quando Visākha relatou a resposta ao Buda, este a confirmou integralmente, afirmando que responderia exatamente da mesma maneira.",
    trainings: [
      {
        name: "1. Agregado da Virtude (Sīla-kkhandha)",
        factors: ["Linguagem Correta (Sammā-vācā)", "Ação Correta (Sammā-kammanta)", "Modo de Vida Correto (Sammā-ājīva)"],
        purpose: "Purifica a conduta externa, confere integridade moral e extingue o remorso da consciência (avippaṭisāra)."
      },
      {
        name: "2. Agregado da Concentração (Samādhi-kkhandha)",
        factors: ["Esforço Correto (Sammā-vāyāma)", "Atenção Plena Correta (Sammā-sati)", "Concentração Correta (Sammā-samādhi)"],
        purpose: "Acalma o mundo interno, suspende os cinco impedimentos (nīvaraṇā) e estabelece estabilidade mental radiante."
      },
      {
        name: "3. Agregado da Sabedoria (Paññā-kkhandha)",
        factors: ["Visão Correta (Sammā-diṭṭhi)", "Intenção Correta (Sammā-saṅkappa)"],
        purpose: "Penetra a realidade das coisas como elas são, erradica a ignorância (avijjā) e realiza a libertação (Nibbāna)."
      }
    ],
    relationshipExplanation: "O treinamento tríplice é uma estrutura didática orgânica, e não uma esteira linear rígida onde se precisaria 'terminar' a virtude antes de praticar a atenção plena. A visão correta guia a conduta; a virtude sustenta a concentração; a concentração aguça a sabedoria; e a sabedoria aperfeiçoa a visão correta."
  },

  // --------------------------------------------------------------------------
  // SEÇÃO 4: COMO OS FATORES DO CAMINHO OPERAM EM HARMONIA
  // --------------------------------------------------------------------------
  section4: {
    id: "sec-path-interconnection",
    number: "04",
    title: "Como os Fatores do Caminho Operam em Harmonia",
    paliTitle: "Mahācattārīsaka Sutta (Os Grandes Quarenta)",
    provenanceTag: "CANÔNICO (MN 117)",
    sourceSutta: { code: "MN 117", title: "Mahācattārīsaka Sutta", url: "https://suttacentral.net/mn117/pt" },
    keyPrinciples: [
      {
        title: "A Visão Correta como Precursora (Pubbaṅgama)",
        detail: "O MN 117 afirma: 'Nisso, monges, a visão correta vem primeiro. E como vem primeiro? Discernindo visão errônea como errônea, e visão correta como correta.' Ela orienta todos os demais fatores."
      },
      {
        title: "A Tríade Inseparável: Visão, Esforço e Atenção Plena",
        detail: "Para cada fator (intenção, fala, ação, sustento), três qualidades sempre giram juntas: (1) A Visão Correta discerne o correto; (2) O Esforço Correto atua para abandonar o erro e cultivar o bem; (3) A Atenção Plena mantém a presença desperta sem desvios."
      },
      {
        title: "Visão Correta Mundana vs. Supramundana",
        detail: "O discurso distingue: (1) Visão correta com impurezas, que se alia ao mérito e amadurece nos frutos da existência (kamma moral); e (2) Visão correta nobre, pura, supramundana, um fator do caminho (anāsavā lokuttarā maggaṅgā)—a sabedoria de quem tem a mente nobre investigando os fatores."
      },
      {
        title: "A Nobre Concentração Correta com Seus Pré-requisitos",
        detail: "O Buda define a concentração correta nobre como a 'unificação da mente guarnecida por esses sete fatores' (ariya sammāsamādhi saupaniso saparikkhāro). Ela é o ápice alimentado e protegido pelos sete fatores que a precedem."
      },
      {
        title: "O Caminho Décuplo do Arahant (Dasaṅga)",
        detail: "O caminho não se encerra em oito fatores; no discípulo plenamente desperto, os oito culminam em dez: da Concentração Correta surge o Conhecimento Correto (Sammā-ñāṇa), e dele brota a Libertação Correta (Sammā-vimutti)."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // SEÇÃO 5: O TREINAMENTO GRADUAL (ANUPUBBASIKKHĀ)
  // --------------------------------------------------------------------------
  section5: {
    id: "sec-gradual-training",
    number: "05",
    title: "O Treinamento Gradual",
    paliTitle: "Anupubbasikkhā, Anupubbakiriyā, Anupubbapaṭipadā",
    provenanceTag: "CANÔNICO (MN 107 & MN 39)",
    sourceSuttas: [
      { code: "MN 107", title: "Gaṇakamoggallāna Sutta", url: "https://suttacentral.net/mn107/pt" },
      { code: "MN 39", title: "Mahā-Assapura Sutta", url: "https://suttacentral.net/mn39/pt" }
    ],
    intro: "No MN 107, o contador Gaṇaka Moggallāna indaga ao Buda se existe um treinamento gradual em sua doutrina, como na contabilidade ou na arquearia. O Mestre confirma: a libertação é uma disciplina gradual (anupubbasikkhā), e não um salto mágico abrupto.",
    progressionStages: [
      {
        stageNumber: 1,
        paliTerm: "Sīlasaṁvara",
        title: "Conduta Moral & Contenção Ética",
        description: "O praticante vive disciplinado pelos preceitos, enxergando perigo na menor das falhas morais."
      },
      {
        stageNumber: 2,
        paliTerm: "Indriyasaṁvara",
        title: "Guarda das Portas dos Sentidos",
        description: "Ao ver uma forma ou ouvir um som, não se apega a detalhes que despertem cobiça ou repulsa."
      },
      {
        stageNumber: 3,
        paliTerm: "Bhojane mattaññutā",
        title: "Moderação na Alimentação",
        description: "Reflete sabiamente sobre o alimento: não para a vaidade ou gula, mas apenas para a saúde e sustentação da prática espiritual."
      },
      {
        stageNumber: 4,
        paliTerm: "Jāgariyānuyoga",
        title: "Dedicação à Vigilância",
        description: "Purifica a mente de pensamentos obstrutivos durante o dia e a noite através da prática meditativa sentada e caminhando."
      },
      {
        stageNumber: 5,
        paliTerm: "Satisampajañña",
        title: "Atenção Plena e Clara Consciência",
        description: "Age com completa lucidez ao dar passos, flexionar os membros, vestir-se, falar ou permanecer em silêncio."
      },
      {
        stageNumber: 6,
        paliTerm: "Vivitta senāsana",
        title: "Busca pelo Isolamento",
        description: "Procura lugares tranquilos e silenciosos para aprofundar a meditação sem interferências mundanas."
      },
      {
        stageNumber: 7,
        paliTerm: "Nīvaraṇappahāna",
        title: "Abandono dos Cinco Impedimentos",
        description: "Depura a mente do desejo sensual (kāmacchanda), má vontade (byāpāda), torpor (thīna-middha), agitação (uddhacca-kukkucca) e dúvida cética (vicikicchā)."
      },
      {
        stageNumber: 8,
        paliTerm: "Jhānāni & Ñāṇadassana",
        title: "Os Quatro Jhānas & Conhecimento Libertador",
        description: "Acessa a estabilidade sublime dos jhānas e direciona a mente pura para a destruição de todas as impurezas mentais (āsavakkhaya)."
      }
    ],
    distinctionNote: "Distinção Doutrinária: O treinamento gradual é uma pedagogia monástica de cultivo contemplativo. Embora intimamente ligado ao Caminho Óctuplo, suas etapas não devem ser confundidas nem substituídas pela definição formal de oito fatores da Quarta Verdade."
  },

  // --------------------------------------------------------------------------
  // SEÇÃO 6: ATENÇÃO PLENA E MEDITAÇÃO NO CONTEXTO CANÔNICO
  // --------------------------------------------------------------------------
  section6: {
    id: "sec-mindfulness-meditation",
    number: "06",
    title: "Atenção Plena e Meditação no Contexto Canônico",
    paliTitle: "Satipaṭṭhāna, Ānāpānasati & Bojjhaṅgā",
    provenanceTag: "CANÔNICO (DN 22 & MN 118)",
    sourceSuttas: [
      { code: "DN 22", title: "Mahāsatipaṭṭhāna Sutta", url: "https://suttacentral.net/dn22/pt" },
      { code: "MN 118", title: "Ānāpānasati Sutta", url: "https://suttacentral.net/mn118/pt" }
    ],
    satipatthanaFramework: {
      title: "Os Quatro Fundamentos da Atenção Plena (DN 22)",
      foundations: [
        { name: "1. Kāyānupassanā", focus: "Contemplação do corpo (respiração, posturas, clara consciência, elementos materiais, anatomia)." },
        { name: "2. Vedanānupassanā", focus: "Contemplação das sensações (agradáveis, dolorosas, neutras; mundanas vs. espirituais)." },
        { name: "3. Cittānupassanā", focus: "Contemplação dos estados mentais (mente com apego, sem apego, com aversão, concentrada, liberta)." },
        { name: "4. Dhammānupassanā", focus: "Contemplação dos fenômenos (5 impedimentos, 5 agregados de apego, 6 bases dos sentidos, 7 fatores da iluminação e 4 nobres verdades)." }
      ]
    },
    anapanasatiCascade: {
      title: "A Cascata Transformativa da Respiração (MN 118)",
      text: "O MN 118 demonstra que a atenção plena na respiração não é um exercício isolado de relaxamento secular. Quando praticada nos seus 16 passos, cumpre uma cadeia causal sublime:",
      steps: [
        "1. A Atenção Plena na Respiração (Ānāpānasati), quando desenvolvida, aperfeiçoa os Quatro Fundamentos da Atenção Plena.",
        "2. Os Quatro Fundamentos da Atenção Plena aperfeiçoam os Sete Fatores da Iluminação (Satta Bojjhaṅgā: atenção plena, investigação dos fenômenos, energia, êxtase, tranquilidade, concentração, equanimidade).",
        "3. Os Sete Fatores da Iluminação aperfeiçoam o Verdadeiro Conhecimento e a Libertação (Vijjā-vimutti)."
      ]
    },
    secularWarning: "Alerta Doutrinário: O Buda nunca ensinou mindfulness como mero ansiolítico comercial ou técnica de produtividade desvinculada de ética. A atenção plena canônica é moralmente orientada, enraizada na Visão Correta e voltada para a libertação final de Dukkha."
  },

  // --------------------------------------------------------------------------
  // SEÇÃO 7: INTENÇÃO CORRETA NA PRÁTICA
  // --------------------------------------------------------------------------
  section7: {
    id: "sec-right-intention",
    number: "07",
    title: "Intenção Correta na Prática: Inclinando a Mente",
    paliTitle: "Dvedhāvitakka Sutta: As Duas Classes de Pensamento",
    provenanceTag: "CANÔNICO (MN 19)",
    sourceSutta: { code: "MN 19", title: "Dvedhāvitakka Sutta", url: "https://suttacentral.net/mn19/pt" },
    bodhisattaMethod: {
      quote: "Aquilo sobre o que alguém frequentemente pensa e reflete, para isso a mente se inclina.",
      paliQuote: "Yadeva bahulaṁ anuvitakketi anuvicāreti, tathā tathā nati hoti cetaso.",
      division: [
        {
          class: "Pensamentos Prejudiciais (Akusala Vitakka)",
          items: ["Desejo sensual (Kāma-vitakka)", "Má vontade (Byāpāda-vitakka)", "Crueldade / Dano (Vihiṁsā-vitakka)"],
          consequence: "Conduzem à aflição de si e dos outros, obstruem a sabedoria e afastam de Nibbāna."
        },
        {
          class: "Pensamentos Salutares (Kusala Vitakka)",
          items: ["Renúncia (Nekkhamma-vitakka)", "Benevolência (Abyāpāda-vitakka)", "Compaixão inofensiva (Avihiṁsā-vitakka)"],
          consequence: "Geram paz íntima e harmonia coletiva, aprofundam a sabedoria e conduzem a Nibbāna."
        }
      ]
    },
    layApplication: {
      tag: "APLICAÇÃO PRÁTICA",
      intro: "O praticante leigo aplica o MN 19 vigiando seus diálogos internos ao longo do dia:",
      points: [
        "Notar devaneios com luxos ou compras desnecessárias, perceber sua inquietação e direcionar a mente para o contentamento sereno (santuṭṭhi).",
        "Perceber a centelha de irritação com desobediências ou prazos perdidos, enxergar a queimação da raiva e substituí-la imediatamente pela paciência compassiva.",
        "Renunciar a fantasias de vingança ou retaliação, firmando um compromisso inegociável de não prejudicar ninguém em negócios ou família."
      ]
    }
  },

  // --------------------------------------------------------------------------
  // SEÇÃO 8: O CAMINHO NA VIDA DO PRATICANTE LEIGO
  // --------------------------------------------------------------------------
  section8: {
    id: "sec-lay-life",
    number: "08",
    title: "O Nobre Caminho na Vida do Praticante Leigo",
    paliTitle: "Gihī-Sāmīcipaṭipadā (O Treinamento Nobre no Lar)",
    provenanceTag: "CANÔNICO (AN 8.54, AN 4.62, DN 31, AN 5.177, MN 73)",
    intro: "A ortodoxia Theravāda não ensina que os leigos estão excluídos da libertação. O Buda proferiu suttas magistrais instruindo chefes de família sobre riqueza, afeto e emancipação espiritual.",
    suttas: [
      {
        code: "AN 8.54",
        title: "Vyagghapajja Sutta (Dīghajānu)",
        url: "https://suttacentral.net/an8.54/pt",
        theme: "Felicidade Nesta Vida & Bem-Estar no Porvir",
        content: "O Buda transmite a Dīghajānu quatro princípios de prosperidade honesta: (1) Iniciativa enérgica no trabalho (uṭṭhāna-sampadā); (2) Vigilância protetora dos ganhos (ārakkha-sampadā); (3) Amizades nobres e espirituais (kalyāṇamittatā); e (4) Viver dentro das posses com equilíbrio financeiro (samajīvitā). Para o bem-estar espiritual, estabelece: (1) Fé pura (saddhā); (2) Virtude moral (sīla); (3) Generosidade desprendida (cāga); e (4) Sabedoria límpida (paññā)."
      },
      {
        code: "AN 4.62",
        title: "Anaṇa Sutta (A Ausência de Dívidas)",
        url: "https://suttacentral.net/an4.62/pt",
        theme: "Os Quatro Tipos de Felicidade Legítima do Leigo",
        content: "O Buda elenca as quatro fontes de felicidade pura para quem vive no mundo: (1) Atthi-sukha (a alegria de possuir riqueza obtida pelo esforço honrado); (2) Bhoga-sukha (a alegria de desfrutar e compartilhar os bens com familiares e necessitados); (3) Anaṇa-sukha (a profunda paz de não ter dívidas com ninguém); e (4) Anavajja-sukha (a suprema alegria da conduta moral irrepreensível de corpo, fala e mente)."
      },
      {
        code: "DN 31",
        title: "Sigālovāda Sutta",
        url: "https://suttacentral.net/dn31/pt",
        theme: "O Código de Ética Social e Reciprocidade",
        content: "Conhecido como o Vinaya do homem comum. Substitui a adoração cega das direções do espaço pelo cumprimento compassivo dos deveres recíprocos em seis laços vitais: pais e filhos, mestres e alunos, esposos e esposas, amigos e companheiros, empregadores e trabalhadores, monges e leigos."
      },
      {
        code: "AN 5.177",
        title: "Vaṇijjā Sutta",
        url: "https://suttacentral.net/an5.177/pt",
        theme: "Cinco Atividades Comerciais Proibidas",
        content: "O discípulo leigo jamais deve lucrar com: comércio de armas letais (sattha), tráfico de pessoas ou escravidão (satta), abate e comércio de carne (maṁsa), comércio de bebidas alcoólicas/drogas (majja) e comércio de venenos (visa)."
      },
      {
        code: "MN 73",
        title: "Mahāvacchagotta Sutta",
        url: "https://suttacentral.net/mn73/pt",
        theme: "A Realização Espiritual dos Praticantes Leigos",
        content: "Quando questionado se leigos de vestes brancas (gihi odātavasanā) poderiam alcançar elevados estados espirituais, o Buda assevera: não apenas centenas, mas uma multidão incontável de leigos—homens e mulheres—alcançou o estado de Entrado-na-Correnteza (sotāpatti), Retornará-Uma-Vez (sakadāgāmī) e Não-Retornador (anāgāmī)."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // SEÇÃO 9: DO DESENVOLVIMENTO DO CAMINHO À CESSAÇÃO (NIRODHA)
  // --------------------------------------------------------------------------
  section9: {
    id: "sec-path-to-cessation",
    number: "09",
    title: "Do Desenvolvimento do Caminho à Cessação (Nirodha)",
    paliTitle: "Cetanākaraṇīya Sutta & A Realização de Nibbāna",
    provenanceTag: "CANÔNICO (AN 11.2 & SN 38.1)",
    sourceSuttas: [
      { code: "AN 11.2", title: "Cetanākaraṇīya Sutta", url: "https://suttacentral.net/an11.2/pt" },
      { code: "SN 38.1", title: "Nibbāna Sutta", url: "https://suttacentral.net/sn38.1/pt" }
    ],
    naturalCausation: {
      title: "A Lei Natural da Libertação (AN 11.2)",
      text: "No AN 11.2, o Buda explica que a libertação não exige ansiedade ou esforço voluntário tenso ('que eu me liberte'). Cultivadas as condições fundamentais, o despertar brota espontaneamente pela lei cósmica da natureza (dhammatā):",
      chain: [
        "Para quem possui virtude sincera (sīlavanto), a ausência de remorso (avippaṭisāra) surge naturalmente.",
        "Da ausência de remorso, surge a alegria radiante (pāmojja).",
        "Da alegria, surge o êxtase sublime (pīti).",
        "Do êxtase, o corpo se acalma e surge a tranquilidade (passaddhi).",
        "Da tranquilidade, surge a felicidade profunda (sukha).",
        "Da felicidade, a mente se unifica em concentração (samādhi).",
        "Da mente concentrada, surge o conhecimento e visão das coisas como elas realmente são (yathābhūtañāṇadassana).",
        "Dessa visão límpida, surge o desencantamento com as ilusões do mundo (nibbidā).",
        "Do desencantamento, surge a despaixão libertadora (virāga).",
        "Da despaixão, surge o conhecimento e visão da libertação definitiva (vimuttiñāṇadassana)."
      ]
    },
    nibbanaDefinition: {
      title: "Definição Canônica de Nibbāna (SN 38.1)",
      pali: "Yo kho, āvuso, rāgakkhayo dosakkhayo mohakkhayo—idaṁ vuccati nibbānaṁ.",
      translation: "A destruição da cobiça, a destruição do ódio, a destruição da ilusão: isto, amigo, é chamado Nibbāna.",
      explanation: "Nibbāna é o elemento incondicionado (asaṅkhatā dhātu). Jamais deve ser confundido com mero alívio psicológico passageiro ou relaxamento de estresse mundano. É o fim absoluto de todo renascimento e todo sofrimento."
    }
  },

  // --------------------------------------------------------------------------
  // SEÇÃO 10: EQUÍVOCOS COMUNS ESCLARECIDOS PELO CÂNON
  // --------------------------------------------------------------------------
  section10: {
    id: "sec-misunderstandings",
    number: "10",
    title: "Equívocos Comuns Esclarecidos pelo Cânon",
    paliTitle: "Vipallāsa-Vūpasama (Correção de Distorções Doutrinárias)",
    provenanceTag: "REFUTAÇÕES CANÔNICAS",
    intro: "A espiritualidade contemporânea frequentemente deturpa a Quarta Nobre Verdade em manuais de autoajuda ou técnicas soltas de respiração. Os textos canônicos refutam expressamente estes 10 grandes equívocos:",
    items: [
      {
        misunderstanding: "1. Os oito fatores são oito degraus lineares e isolados que devem ser cumpridos um após o outro.",
        rebuttal: "O MN 117 comprova que os fatores funcionam como uma matriz integrada. A Visão Correta, o Esforço Correto e a Atenção Plena circundam e nutrem todos os outros fatores simultaneamente.",
        citation: "MN 117 (Mahācattārīsaka Sutta)"
      },
      {
        misunderstanding: "2. O caminho é apenas um código de regras morais ou etiqueta social comum.",
        rebuttal: "O MN 44 e o MN 117 demonstram que a virtude ética (sīla) é a base de purificação, mas o caminho culmina na concentração profunda (samādhi) e na sabedoria libertadora (paññā) que erradica o apego.",
        citation: "MN 44 & MN 117"
      },
      {
        misunderstanding: "3. O caminho é exclusivamente meditação sentada, tornando o resto do dia irrelevante.",
        rebuttal: "O SN 45.8 integra formalmente a fala (vācā), as ações físicas (kammanta) e o sustento (ājīva) como fatores estruturais com o mesmo peso canônico da concentração.",
        citation: "SN 45.8 (Maggavibhaṅga Sutta)"
      },
      {
        misunderstanding: "4. A atenção plena (sammā-sati) significa apenas atenção neutra e sem julgamento ao momento presente.",
        rebuttal: "O DN 22 e o SN 45.8 definem sati como memória do Dhamma, ardente (ātāpī) e lúcida (sampajāno), discernindo o salutar do prejudicial e abandonando a cobiça e o desespero.",
        citation: "DN 22 & SN 45.8"
      },
      {
        misunderstanding: "5. Concentração correta (sammā-samādhi) é apenas sentir o corpo relaxado ou esvaziar a cabeça.",
        rebuttal: "O SN 45.8 define formalmente samādhi como os quatro jhānas—estados luminosos de recolhimento sensorial e profunda alegria, livres dos prazeres sensoriais.",
        citation: "SN 45.8 & MN 141"
      },
      {
        misunderstanding: "6. O treinamento tríplice (tisikkhā) substitui ou anula o Nobre Caminho Óctuplo.",
        rebuttal: "No MN 44, a monja Dhammadinnā ensina que os três treinamentos são uma classificação analítica dos oito fatores, e não um método alternativo.",
        citation: "MN 44 (Cūḷavedalla Sutta)"
      },
      {
        misunderstanding: "7. Cada detalhe do treinamento gradual é um fator isolado da Quarta Verdade.",
        rebuttal: "O MN 107 e o MN 39 expõem a pedagogia ascética do treino paulatino (anupubbasikkhā); a Quarta Nobre Verdade é definida especificamente pelos oito fatores.",
        citation: "MN 107 & MN 39"
      },
      {
        misunderstanding: "8. A prática dos leigos não tem relação com a libertação, servindo só para acumular méritos futuros.",
        rebuttal: "O MN 73 e o AN 6.119 atestam formalmente que centenas de leigos alcançaram estágios nobres de iluminação sem precisar abandonar seus lares.",
        citation: "MN 73 & AN 6.119"
      },
      {
        misunderstanding: "9. Mapas meditativos modernos e teorias psicológicas são doutrina canônica indiscutível.",
        rebuttal: "A autoridade primordial reside no Tipiṭaka. Manuais posteriores e sistemas modernos são recursos pedagógicos secundários e devem ser assim identificados.",
        citation: "Hierarquia Canônica Theravāda"
      },
      {
        misunderstanding: "10. A Quarta Verdade é cumprida pela simples concordância teórica ou estudo intelectual.",
        rebuttal: "O SN 56.11 determina que o dever (kicca) da Quarta Verdade é bhāvetabba—ela deve ser cultivada e desenvolvida na conduta de corpo, fala e mente.",
        citation: "SN 56.11 (Dhammacakkappavattana Sutta)"
      }
    ]
  }
};


  // ==========================================
  // 3. BUDDHIST COSMOLOGY DATA MODULE
  // ==========================================
/**
 * The Lay Dharma Household Mārga (Upāsaka-Dharma)
 * Topic 09: Buddhist Cosmology (Lokadhātu & The 31 Planes of Existence)
 * Comprehensive Theravāda Learning Module:
 * Grounded in the Pāli Canon & Classical Theravāda Systematization.
 * Features:
 * - A Universe of Conditioned Existence (Kāmaloka, Rūpaloka, Arūpaloka)
 * - The 31 Planes Interactive Explorer (11 Sensual, 16 Fine-Material, 4 Immaterial)
 * - 15 Essential Suttas Library with SuttaCentral Deep Links
 * - Daily-Life Applications: 5 Realistic Lay Scenarios
 * - Educational Section on Kamma, Rebirth, and Ethical Responsibility
 * - Interactive Ethical Decision Exercise (6 Ordinary Dilemmas)
 * - "Nibbāna Is Not Another Realm" (The Goal Beyond Conditioned Existence)
 * - Three Configurable Study Pathways (7-Day, 14-Day, 30-Day)
 * - Contemplative Reflection Journal Prompts
 * - 14 Canonical FAQs
 * Bilingual: English (EN) and Portuguese (PT-BR).
 */
const BUDDHIST_COSMOLOGY_MODULE_EN = {
  // A. Hero Section
  hero: {
    title: "Buddhist Cosmology",
    paliTitle: "Lokadhātu & Bhavacakra",
    subtitle: "Understanding the realms of existence, the workings of kamma, and the path beyond saṁsāra.",
    introText: "In the Theravāda tradition, Buddhist cosmology describes a vast range of forms of existence within saṁsāra. These include states of deprivation, ordinary human existence, heavenly realms, and highly refined Brahmā worlds. Beings are reborn according to conditions that include kamma, yet every conditioned realm remains impermanent. The ultimate goal of the Buddha's teaching is not a better position within the cosmos, but liberation from the cycle of rebirth and suffering.",
    systematizationNote: "Doctrinal Clarification: The familiar Theravāda classification of 31 planes of existence is a traditional systematization of cosmological teachings found across various discourses of the Pāli Canon and later classical treatises (such as the Abhidhammattha-saṅgaha and commentaries). It should not be assumed that all 31 planes are listed sequentially in a single early sutta.",
    primaryActions: [
      { id: "action-planes", label: "Explore the 31 Planes of Existence", target: "#cosmo-31-planes", icon: "🌌" },
      { id: "action-suttas", label: "Study the Suttas", target: "#tab-canonical", icon: "📜" },
      { id: "action-kamma", label: "Understand Kamma & Rebirth", target: "#cosmo-kamma", icon: "⚖️" }
    ],
    canonicalPassage: {
      suttaCode: "SN 56.48",
      paliTitle: "Chiggala Sutta",
      englishTitle: "The Hole in the Yoke (The Blind Turtle)",
      excerptPali: "Seyyathāpi, bhikkhave, puriso ekacchiggalaṁ yugaṁ mahāsamudde pakkhipeyya. Tatra assa kāṇo kacchapo... Evametadappaṁ, bhikkhave, yadidaṁ manussattapaṭilābho.",
      excerptTrans: "Suppose a man threw into the great ocean a yoke with a single hole. A blind sea turtle came up once every hundred years... More difficult and rare than that turtle putting its neck through that single yoke is obtaining human birth and encountering the Dhamma.",
      sourceUrl: "https://suttacentral.net/sn56.48/en/sujato",
      citation: "Saṁyutta Nikāya 56.48 • Chiggala Sutta"
    }
  },

  // B. Main Section: Understanding the Buddhist Cosmos
  understandingCosmos: {
    sectionTitle: "A Universe of Conditioned Existence",
    sectionSubtitle: "The three overarching tiers of existence in early Buddhist doctrine",
    leadText: "Buddhist cosmology describes different realms in which beings are reborn according to their intentional choices (kamma), differing profoundly in lifespan, somatic subtlety, pleasure, suffering, and meditative attainment. All realms without exception are impermanent (anicca), unsatisfactory (dukkha), and non-self (anattā).",
    tiers: [
      {
        id: "kamaloka",
        name: "Kāmaloka — The Sensual Realm",
        planesCount: "11 Planes",
        description: "Encompasses all modes of existence characterized by the dominance of the five physical sense bases and the drive of sensual desire (kāma-taṇhā). It includes the lower states of suffering, the human world, and the six sensual heavens.",
        subdivisions: [
          { name: "Four States of Deprivation (Apāya-bhūmi)", detail: "Hell beings (niraya), animals (tiracchāna), hungry ghosts (peta), and asuras (demi-gods associated with perpetual conflict). Born from unwholesome kamma rooted in greed, hatred, and delusion." },
          { name: "The Human Realm (Manussa-loka)", detail: "A balanced realm blending pleasure and pain, uniquely suited for ethical choice, spiritual reflection, and realizing awakening." },
          { name: "Six Sensual Deva Realms (Devaloka)", detail: "From the Four Great Kings to beings wielding power over others' creations. Characterized by radiant bodies and long lifespans fueled by wholesome merit (puñña)." }
        ],
        practicalReflection: "How do greed, aversion, confusion, generosity, kindness, and restraint shape the quality of our present experience and our actions? (Note: Ethical and psychological reflection complements rather than replaces the traditional teaching about rebirth.)"
      },
      {
        id: "rupaloka",
        name: "Rūpaloka — The Fine-Material Realm",
        planesCount: "16 Planes",
        description: "Exalted Brahmā realms attained through mastery of the four material meditative absorptions (rūpa-jhāna). Physical senses are refined, gross sensual desire is suspended, and beings abide in radiant meditative bliss.",
        subdivisions: [
          { name: "1st Jhāna Brahmās (3 planes)", detail: "Retinue, ministers, and Great Brahmās (Mahābrahmā) who dwell in tranquil majesty." },
          { name: "2nd Jhāna Brahmās (3 planes)", detail: "Abodes of radiance and streaming light (Ābhassara), untouched by gross fire cycles." },
          { name: "3rd Jhāna Brahmās (3 planes)", detail: "Abodes of refulgent, steady glory (Subhakiṇha) sustained by spiritual happiness." },
          { name: "4th Jhāna Brahmās & Pure Abodes (7 planes)", detail: "Includes Great Reward (Vehapphala), Unconscious beings (Asaññasatta), and the Five Pure Abodes (Suddhāvāsa) inhabited exclusively by Non-returners (Anāgāmīs)." }
        ],
        doctrinalNote: "Doctrinal Safeguard: Traditional Theravāda teaches that attaining jhāna provides the conditional momentum for Brahmā rebirth, but rebirth is governed by kamma and conditions. Furthermore, even lifespans lasting cosmic eons (kappas) end in death; Brahmā existence is not final liberation."
      },
      {
        id: "arupaloka",
        name: "Arūpaloka — The Immaterial Realm",
        planesCount: "4 Planes",
        description: "The apex of conditioned existence, entirely devoid of physical form or matter. Rebirth here is conditioned by mastery of the four immaterial meditative attainments (arūpa-samāpatti).",
        subdivisions: [
          { name: "1. Infinite Space (Ākāsānañcāyatana)", detail: "Consciousness transcending all perceptions of physical form to dwell on boundless space." },
          { name: "2. Infinite Consciousness (Viññāṇañcāyatana)", detail: "Turning awareness back onto the infinite consciousness that perceives space." },
          { name: "3. Nothingness (Ākiñcaññāyatana)", detail: "Transcending consciousness itself to dwell on the subtle perception that 'there is nothing'." },
          { name: "4. Neither-Perception-Nor-Non-Perception (Nevasaññānāsaññāyatana)", detail: "The most rarefied, delicate mental state in saṁsāra, where perception is so subtle it can neither be said to exist nor not exist." }
        ],
        reflectionQuestion: "Why would a state of extraordinary peace or subtlety still be insufficient if ignorance and the underlying causes of renewed existence remain?"
      }
    ]
  },

  // C. Interactive Exploration of the 31 Planes
  planesExplorer: {
    sectionTitle: "Interactive Exploration of the 31 Planes",
    sectionSubtitle: "The traditional Theravāda classification of realms across the Three Worlds",
    categoryFilterLabels: {
      all: "All 31 Planes",
      kama: "Sensual Realm (1–11)",
      rupa: "Fine-Material (12–27)",
      arupa: "Immaterial (28–31)"
    },
    planesNotice: "Note: The 31 planes are not permanent locations, stages of moral superiority, or mandatory linear steps through which every soul must travel. They represent states of conditioned becoming (bhava) populated by beings driven by kamma.",
    planes: [
      // 1-4: The Four States of Deprivation (Apāya-bhūmi)
      {
        id: "plane-1",
        number: 1,
        tier: "kama",
        subTier: "Four States of Deprivation (Apāya)",
        paliName: "Niraya",
        englishName: "Hell / Realms of Extreme Anguish",
        lifespan: "Varies from thousands of years to an antarakappa; determined by kamma",
        kammaCause: "Heavy unwholesome actions: intentional killing, cruel cruelty, persistent hatred, extreme greed, malicious views",
        canonicalSources: "MN 129 (Bālapaṇḍita), MN 130 (Devadūta), SN 56.47",
        commentarialSources: "Visuddhimagga, Abhidhammattha-saṅgaha (Eight Great Hells: Sañjīva, Kālasutta, etc.)",
        characteristics: "States of unrelenting sensory and mental anguish where beings exhaust severe negative kamma. Not eternal damnation; when the causal karma is spent, the being is reborn elsewhere.",
        reflection: "How does fiery resentment or explosive rage in daily life reflect the visceral quality of niraya?"
      },
      {
        id: "plane-2",
        number: 2,
        tier: "kama",
        subTier: "Four States of Deprivation (Apāya)",
        paliName: "Tiracchāna-yoni",
        englishName: "Animal Realm",
        lifespan: "Varies from minutes (insects) to centuries",
        kammaCause: "Actions heavily dominated by animalistic delusion (moha), blind instinct, fear, and unrestrained lust",
        canonicalSources: "MN 129, MN 135, SN 56.47",
        commentarialSources: "Dhammapada-aṭṭhakathā",
        characteristics: "Prey-predator dynamics, fear of slaughter, instinct-driven existence without capacity for philosophical reflection or ethical choice.",
        reflection: "When we surrender ethical discernment to react purely from survival fear or instinct, how close do we step to animal consciousness?"
      },
      {
        id: "plane-3",
        number: 3,
        tier: "kama",
        subTier: "Four States of Deprivation (Apāya)",
        paliName: "Peta-visaya",
        englishName: "Realm of Hungry Ghosts",
        lifespan: "Indefinite; often thousands of years until merit is shared or kamma dissolves",
        kammaCause: "Obsessive miserliness, extreme avarice, hoarding, possessiveness, and clinging to wealth or family",
        canonicalSources: "Khuddaka Nikāya (Petavatthu), SN 19 (Lakkhaṇa-saṁyutta)",
        commentarialSources: "Paramatthadīpanī (Petavatthu Commentary)",
        characteristics: "Beings plagued by insatiable hunger, burning thirst, and unfulfilled longing, often possessing enormous bellies and needle-thin throats.",
        reflection: "Notice the hunger of compulsive consumerism: wanting more and more without ever feeling satisfied."
      },
      {
        id: "plane-4",
        number: 4,
        tier: "kama",
        subTier: "Four States of Deprivation (Apāya)",
        paliName: "Asura-kāya",
        englishName: "Asura Realm (Demons / Titans)",
        lifespan: "Varies; long lifespans characterized by conflict",
        kammaCause: "Actions driven by intense competitiveness, envy, combativeness, jealousy of others' virtue, arrogance",
        canonicalSources: "DN 20 (Mahāsamaya), SN 35.207, AN 7.72",
        commentarialSources: "Visuddhimagga (Classification as apāya varies in some texts)",
        characteristics: "Beings caught in perpetual conflict, envy of the devas, paranoia, and defensive warfare.",
        reflection: "Where does the compulsion to compare, compete, and conquer rob my daily life of peaceful contentment?"
      },

      // 5: The Human Realm
      {
        id: "plane-5",
        number: 5,
        tier: "kama",
        subTier: "Sensual Blissful Realms (Kāma-sugati)",
        paliName: "Manussa-loka",
        englishName: "Human Realm",
        lifespan: "Historically ~100 years; fluctuating across world cycles",
        kammaCause: "Wholesome kamma rooted in the Five Precepts (pañca-sīla), human compassion, and moral restraint",
        canonicalSources: "SN 56.48 (Blind Turtle), AN 8.54 (Dīghajāṇu), AN 5.57",
        commentarialSources: "Abhidhammattha-saṅgaha",
        characteristics: "The supreme crucible for practice. The balanced mixture of happiness and sorrow awakens spiritual urgency (saṁvega) and permits the realization of Nibbāna.",
        reflection: "Am I using this precious, rare human embodiment for spiritual growth, or merely squandering it on sensory distraction?"
      },

      // 6-11: The Six Sensual Deva Realms (Devaloka)
      {
        id: "plane-6",
        number: 6,
        tier: "kama",
        subTier: "Sensual Deva Heavens",
        paliName: "Cātummahārājika",
        englishName: "Realm of the Four Great Kings",
        lifespan: "500 deva years (= 9 million human years)",
        kammaCause: "Basic generosity, ethical restraint, and devotion to protecting community and virtue",
        canonicalSources: "DN 20, DN 32 (Āṭānāṭiya), AN 3.70",
        commentarialSources: "Visuddhimagga",
        characteristics: "The lowest celestial realm, encompassing guardians of the four cardinal directions (Dhataraṭṭha, Virūḷhaka, Virūpakkha, Vessavaṇa).",
        reflection: "Protective benevolence and guarding wholesome conduct in our home creates a safe refuge."
      },
      {
        id: "plane-7",
        number: 7,
        tier: "kama",
        subTier: "Sensual Deva Heavens",
        paliName: "Tāvatiṁsa",
        englishName: "Realm of the Thirty-Three (Sakka's Realm)",
        lifespan: "1,000 deva years (= 36 million human years)",
        kammaCause: "Civic generosity, public service (building roads, planting trees, digging wells), devotion to parents",
        canonicalSources: "SN 11 (Sakka-saṁyutta), DN 21 (Sakkapañha Sutta)",
        commentarialSources: "Dhammapada Commentary (Story of Magha / Sakka)",
        characteristics: "Governed by Sakka, Lord of Devas, who is a faithful disciple of the Buddha. Celestial gardens and council halls.",
        reflection: "Notice how unselfish community service and kindness elevate the quality of human consciousness."
      },
      {
        id: "plane-8",
        number: 8,
        tier: "kama",
        subTier: "Sensual Deva Heavens",
        paliName: "Yāma",
        englishName: "Yāma Devas (Realm of Free Joy)",
        lifespan: "2,000 deva years (= 144 million human years)",
        kammaCause: "Pure ethical restraint, serene generosity, non-harming, and early spiritual cultivation",
        canonicalSources: "AN 3.70, AN 8.36",
        commentarialSources: "Abhidhammattha-saṅgaha",
        characteristics: "Living in perpetual luminous delight, floating in the celestial atmosphere without strife.",
        reflection: "When the mind is free from remorse through clean moral virtue, it experiences an inner sky of peaceful delight."
      },
      {
        id: "plane-9",
        number: 9,
        tier: "kama",
        subTier: "Sensual Deva Heavens",
        paliName: "Tusita",
        englishName: "Contented Devas",
        lifespan: "4,000 deva years (= 576 million human years)",
        kammaCause: "Exemplary virtue, deep study of the Dhamma, dedication of merit toward enlightenment",
        canonicalSources: "MN 123 (Acchariya-abbhuta Sutta), AN 3.70",
        commentarialSources: "Jātaka Nidānakathā (Abode of Bodhisattas before final birth)",
        characteristics: "The realm where Bodhisattas reside before their final human birth. Filled with joy, contentment, and Dhamma discussion.",
        reflection: "True contentment (santuṭṭhi) does not depend on accumulating things, but on peaceful sufficiency."
      },
      {
        id: "plane-10",
        number: 10,
        tier: "kama",
        subTier: "Sensual Deva Heavens",
        paliName: "Nimmānaratī",
        englishName: "Devas Delighting in Creation",
        lifespan: "8,000 deva years (= 2.3 billion human years)",
        kammaCause: "Abundant generosity, creative wholesome endeavors, delight in artistic virtue",
        canonicalSources: "AN 3.70, AN 8.36",
        commentarialSources: "Abhidhammattha-saṅgaha",
        characteristics: "Devas who create their own sensory delights through the sheer power of mind and enjoy them.",
        reflection: "The creative mind is powerful; when directed toward wholesome art and kindness, it beautifies life."
      },
      {
        id: "plane-11",
        number: 11,
        tier: "kama",
        subTier: "Sensual Deva Heavens",
        paliName: "Paranimmitavasavattī",
        englishName: "Devas Wielding Power Over Others' Creation",
        lifespan: "16,000 deva years (= 9.2 billion human years)",
        kammaCause: "Superlative worldly generosity combined with leadership; subtle attachment to dominion",
        canonicalSources: "MN 49, AN 3.70, SN 4.25",
        commentarialSources: "Visuddhimagga (Māra also occupies a sector of this realm)",
        characteristics: "The highest of the sensual heavens. They do not need to create pleasures; others manifest pleasures for their enjoyment.",
        reflection: "Even supreme cosmic leadership and pleasure are bound to the wheel of craving and eventual decay."
      },

      // 12-14: First-Jhāna Planes (Rūpaloka)
      {
        id: "plane-12",
        number: 12,
        tier: "rupa",
        subTier: "First Jhāna Planes",
        paliName: "Brahmapārisajja",
        englishName: "Brahmā's Retinue",
        lifespan: "1/3 of an asankheyya-kappa",
        kammaCause: "Attaining the First Jhāna in a modest, introductory degree",
        canonicalSources: "AN 4.123, AN 4.125",
        commentarialSources: "Abhidhammattha-saṅgaha",
        characteristics: "Beings dwelling in peaceful companionship in the radiant court of Brahmā, free from sensual agitation.",
        reflection: "When initial meditative focus quiets sensual restlessness, a clean, unburdened clarity opens up."
      },
      {
        id: "plane-13",
        number: 13,
        tier: "rupa",
        subTier: "First Jhāna Planes",
        paliName: "Brahmapurohita",
        englishName: "Brahmā's Ministers / Counsellors",
        lifespan: "1/2 of an asankheyya-kappa",
        kammaCause: "Attaining the First Jhāna with medium stability and clarity",
        canonicalSources: "AN 4.123, AN 4.125",
        commentarialSources: "Abhidhammattha-saṅgaha",
        characteristics: "Ministers of the Great Brahmā with greater radiance and mental collectedness.",
        reflection: "Mental steadiness transforms into quiet wisdom that supports others."
      },
      {
        id: "plane-14",
        number: 14,
        tier: "rupa",
        subTier: "First Jhāna Planes",
        paliName: "Mahābrahmā",
        englishName: "Great Brahmās",
        lifespan: "1 full asankheyya-kappa",
        kammaCause: "Superior mastery of the First Jhāna combined with boundless goodwill (mettā)",
        canonicalSources: "DN 1 (Brahmajāla), DN 11 (Kevaddha), MN 49",
        commentarialSources: "Visuddhimagga",
        characteristics: "Radiant, dignified beings often mistakenly assuming they are the eternal Creator of the universe due to being born first in the world cycle (DN 1).",
        reflection: "Notice the subtlest spiritual trap: mistaking extraordinary mental peace and power for sovereign divinity."
      },

      // 15-17: Second-Jhāna Planes (Rūpaloka)
      {
        id: "plane-15",
        number: 15,
        tier: "rupa",
        subTier: "Second Jhāna Planes",
        paliName: "Parittābha",
        englishName: "Brahmās of Limited Radiance",
        lifespan: "2 kappa eons",
        kammaCause: "Developing the Second Jhāna (with inner tranquility and rapture, free from applied thought) to a modest degree",
        canonicalSources: "AN 4.123, MN 120",
        commentarialSources: "Abhidhammattha-saṅgaha",
        characteristics: "Light-emitting beings whose bodily radiance is clear but constrained compared to higher planes.",
        reflection: "When verbal chatter stops in meditation, the natural light of mind begins to shine."
      },
      {
        id: "plane-16",
        number: 16,
        tier: "rupa",
        subTier: "Second Jhāna Planes",
        paliName: "Appamāṇābha",
        englishName: "Brahmās of Measureless Radiance",
        lifespan: "4 kappa eons",
        kammaCause: "Developing the Second Jhāna with boundless radiant clarity",
        canonicalSources: "AN 4.123, MN 120",
        commentarialSources: "Abhidhammattha-saṅgaha",
        characteristics: "Beings of unmeasured luminosity spreading light throughout their quadrant of the universe.",
        reflection: "Measureless kindness generates measureless mental illumination."
      },
      {
        id: "plane-17",
        number: 17,
        tier: "rupa",
        subTier: "Second Jhāna Planes",
        paliName: "Ābhassara",
        englishName: "Brahmās of Streaming Radiance",
        lifespan: "8 kappa eons",
        kammaCause: "Excellence in the Second Jhāna; deep cultivation of spiritual joy (pīti)",
        canonicalSources: "DN 27 (Aggañña), AN 4.123, AN 10.29",
        commentarialSources: "Visuddhimagga (Beings when the world contracts)",
        characteristics: "When the lower universe is destroyed by fire, beings take rebirth in Ābhassara, feeding on meditative joy like pure light.",
        reflection: "Joy born of stillness is purer and more resilient than any pleasure born of sensory stimulation."
      },

      // 18-20: Third-Jhāna Planes (Rūpaloka)
      {
        id: "plane-18",
        number: 18,
        tier: "rupa",
        subTier: "Third Jhāna Planes",
        paliName: "Parittasubha",
        englishName: "Brahmās of Limited Glory / Aura",
        lifespan: "16 kappa eons",
        kammaCause: "Attaining the Third Jhāna (equanimous, mindful, experiencing bodily happiness without rapture) to a modest degree",
        canonicalSources: "AN 4.123, MN 120",
        commentarialSources: "Abhidhammattha-saṅgaha",
        characteristics: "Beings of steady, quiet luminescence, free from the excitement of rapture.",
        reflection: "Moving beyond emotional highs into calm, steady spiritual well-being."
      },
      {
        id: "plane-19",
        number: 19,
        tier: "rupa",
        subTier: "Third Jhāna Planes",
        paliName: "Appamāṇasubha",
        englishName: "Brahmās of Measureless Glory",
        lifespan: "32 kappa eons",
        kammaCause: "Developing the Third Jhāna with deep unshakeable happiness and equanimity",
        canonicalSources: "AN 4.123, MN 120",
        commentarialSources: "Abhidhammattha-saṅgaha",
        characteristics: "Immensely peaceful beings of measureless golden glory unaffected by cosmic water destruction.",
        reflection: "Quiet, undemanding happiness that does not need to announce itself to anyone."
      },
      {
        id: "plane-20",
        number: 20,
        tier: "rupa",
        subTier: "Third Jhāna Planes",
        paliName: "Subhakiṇha",
        englishName: "Brahmās of Refulgent / Steady Glory",
        lifespan: "64 kappa eons",
        kammaCause: "Supreme mastery of the Third Jhāna",
        canonicalSources: "AN 4.123, AN 10.29",
        commentarialSources: "Visuddhimagga",
        characteristics: "The pinnacle of fine-material pleasant feeling; their radiance is completely steady, like light in a lamp shielded from wind.",
        reflection: "Even 64 eons of uninterrupted meditative bliss will eventually end when the causal kamma dissolves."
      },

      // 21-27: Fourth-Jhāna Planes (Rūpaloka)
      {
        id: "plane-21",
        number: 21,
        tier: "rupa",
        subTier: "Fourth Jhāna Planes",
        paliName: "Vehapphala",
        englishName: "Brahmās of Great Reward",
        lifespan: "500 mahā-kappas",
        kammaCause: "Attaining the Fourth Jhāna with pure equanimity and mindfulness (upekkhā-satipārisuddhi)",
        canonicalSources: "AN 4.123, MN 120",
        commentarialSources: "Abhidhammattha-saṅgaha",
        characteristics: "The principal abode for ordinary beings who master the Fourth Jhāna. Not destroyed by cosmic wind cycles.",
        reflection: "Equanimity is the strongest fortress of the heart, neither swayed by praise nor crushed by blame."
      },
      {
        id: "plane-22",
        number: 22,
        tier: "rupa",
        subTier: "Fourth Jhāna Planes",
        paliName: "Asaññasatta",
        englishName: "Unconscious Beings",
        lifespan: "500 mahā-kappas",
        kammaCause: "Developing Fourth Jhāna while clinging to the view that consciousness itself is the sole cause of suffering; willing cessation of perception",
        canonicalSources: "DN 1 (Brahmajāla), DN 33",
        commentarialSources: "Visuddhimagga",
        characteristics: "Beings existing as mere bodily form without conscious mental processes. When the karma exhausts, a thought arises and they pass away.",
        reflection: "A critical warning: mere suppression of thought or blankness is not wisdom; awakening requires clear knowing (paññā)."
      },
      {
        id: "plane-23",
        number: 23,
        tier: "rupa",
        subTier: "The Pure Abodes (Suddhāvāsa)",
        paliName: "Avihā",
        englishName: "The Durable / Immobile",
        lifespan: "1,000 mahā-kappas",
        kammaCause: "Attaining Non-Returner (Anāgāmī) status with dominant faculty of faith (saddhā)",
        canonicalSources: "SN 56.11, DN 14, MN 120",
        commentarialSources: "Visuddhimagga",
        characteristics: "The lowest of the five Pure Abodes. Non-returners realize Arahantship here and attain final Nibbāna without ever returning to the sensual world.",
        reflection: "Faith established upon direct discernment never backslides into sensual addiction."
      },
      {
        id: "plane-24",
        number: 24,
        tier: "rupa",
        subTier: "The Pure Abodes (Suddhāvāsa)",
        paliName: "Atappā",
        englishName: "The Untroubled / Serene",
        lifespan: "2,000 mahā-kappas",
        kammaCause: "Non-Returner with dominant spiritual faculty of energy / diligence (viriya)",
        canonicalSources: "DN 14, MN 120",
        commentarialSources: "Visuddhimagga",
        characteristics: "Beings who cause no torment to themselves or others, abiding in tranquil contemplation until final unbinding.",
        reflection: "True spiritual energy is calm and persistent, not anxious or aggressive."
      },
      {
        id: "plane-25",
        number: 25,
        tier: "rupa",
        subTier: "The Pure Abodes (Suddhāvāsa)",
        paliName: "Sudassā",
        englishName: "The Clearly Visible / Beautiful",
        lifespan: "4,000 mahā-kappas",
        kammaCause: "Non-Returner with dominant spiritual faculty of mindfulness (sati)",
        canonicalSources: "DN 14, MN 120",
        commentarialSources: "Visuddhimagga",
        characteristics: "Beings possessing pristine mental clarity, where phenomena are clearly perceived as impermanent, unsatisfactory, and not-self.",
        reflection: "Clear mindfulness makes reality transparent and free of delusion."
      },
      {
        id: "plane-26",
        number: 26,
        tier: "rupa",
        subTier: "The Pure Abodes (Suddhāvāsa)",
        paliName: "Sudassī",
        englishName: "The Clear-Sighted",
        lifespan: "8,000 mahā-kappas",
        kammaCause: "Non-Returner with dominant spiritual faculty of concentration (samādhi)",
        canonicalSources: "DN 14, MN 120",
        commentarialSources: "Visuddhimagga",
        characteristics: "Beings of profound vision whose samādhi effortlessly penetrates the conditional nature of all formations.",
        reflection: "Concentration is a clear mirror reflecting nature as it is."
      },
      {
        id: "plane-27",
        number: 27,
        tier: "rupa",
        subTier: "The Pure Abodes (Suddhāvāsa)",
        paliName: "Akaniṭṭhā",
        englishName: "The Highest / Peerless",
        lifespan: "16,000 mahā-kappas",
        kammaCause: "Non-Returner with dominant spiritual faculty of wisdom (paññā)",
        canonicalSources: "DN 14, MN 120, SN 56.11",
        commentarialSources: "Visuddhimagga",
        characteristics: "The supreme realm of the fine-material sphere. Non-returners complete the destruction of all five higher fetters here and attain Parinibbāna.",
        reflection: "Wisdom is the ultimate crown of Buddhist practice, opening the gate to unconditional release."
      },

      // 28-31: The Four Immaterial Planes (Arūpaloka)
      {
        id: "plane-28",
        number: 28,
        tier: "arupa",
        subTier: "Immaterial Realms (Arūpa-bhūmi)",
        paliName: "Ākāsānañcāyatana",
        englishName: "Sphere of Infinite Space",
        lifespan: "20,000 mahā-kappas",
        kammaCause: "Mastery of the First Immaterial Attainment, having fully abandoned all perception of physical form and diversity",
        canonicalSources: "MN 26 (Ariyapariyesanā), DN 15, MN 120",
        commentarialSources: "Visuddhimagga",
        characteristics: "Completely formless existence; pure mental consciousness absorbed in boundless space.",
        reflection: "Space has no boundaries; when mind drops physical constriction, vastness appears—yet even vastness is conditioned."
      },
      {
        id: "plane-29",
        number: 29,
        tier: "arupa",
        subTier: "Immaterial Realms (Arūpa-bhūmi)",
        paliName: "Viññāṇañcāyatana",
        englishName: "Sphere of Infinite Consciousness",
        lifespan: "40,000 mahā-kappas",
        kammaCause: "Mastery of the Second Immaterial Attainment, turning awareness to consciousness itself as boundless",
        canonicalSources: "DN 15, MN 120",
        commentarialSources: "Visuddhimagga",
        characteristics: "Mind contemplating mind with no spatial object or material anchor.",
        reflection: "Consciousness can observe itself, yet consciousness remains a dependently arisen process."
      },
      {
        id: "plane-30",
        number: 30,
        tier: "arupa",
        subTier: "Immaterial Realms (Arūpa-bhūmi)",
        paliName: "Ākiñcaññāyatana",
        englishName: "Sphere of Nothingness",
        lifespan: "60,000 mahā-kappas",
        kammaCause: "Mastery of the Third Immaterial Attainment (attained by the Buddha's first teacher, Āḷāra Kālāma)",
        canonicalSources: "MN 26, DN 15, MN 120",
        commentarialSources: "Visuddhimagga",
        characteristics: "Dwelling on the subtle perception: 'There is nothing whatsoever'.",
        reflection: "Even profound emptiness is not Nibbāna if subtle identification with that emptiness remains."
      },
      {
        id: "plane-31",
        number: 31,
        tier: "arupa",
        subTier: "Immaterial Realms (Arūpa-bhūmi)",
        paliName: "Nevasaññānāsaññāyatana",
        englishName: "Sphere of Neither-Perception-Nor-Non-Perception",
        lifespan: "84,000 mahā-kappas",
        kammaCause: "Mastery of the Fourth Immaterial Attainment (attained by Uddaka Rāmaputta)",
        canonicalSources: "MN 26, DN 15, MN 120",
        commentarialSources: "Visuddhimagga",
        characteristics: "The absolute ceiling of saṁsāra. Mental formations are so subtle they cannot be called active perception, nor are they completely absent. Yet when 84,000 great eons elapse, the being falls back into lower realms.",
        reflection: "The Buddha left Uddaka Rāmaputta because this subtle peak did not lead to disenchantment, cessation, or Nibbāna."
      }
    ]
  },

  // D. Essential Sutta Library (15 Discourses)
  suttaLibrary: {
    sectionTitle: "Essential Sutta Library",
    sectionSubtitle: "15 canonical discourses on cosmology, kamma, divine realms, and the precious human opportunity",
    searchPlaceholder: "Search suttas by code, title, topic, or Pāli keyword...",
    filterCategories: [
      { id: "all", label: "All Discourses (15)" },
      { id: "cosmology", label: "Cosmology & Range (3)" },
      { id: "kamma", label: "Kamma & Rebirth (4)" },
      { id: "devas", label: "Devas & Limits of Heaven (4)" },
      { id: "human", label: "Human Life & Practice (4)" }
    ],
    suttas: [
      // Category A: Cosmology & Range
      {
        code: "DN 27",
        paliTitle: "Aggañña Sutta",
        transTitle: "Discourse on Knowledge of Beginnings",
        nikaya: "Dīgha Nikāya",
        category: "cosmology",
        level: "intermediate",
        readingTime: "18 min",
        importance: "Canonical narrative detailing the periodic contraction and expansion of the world, how luminous beings from Ābhassara descend, and how social classes and institutions arise from greed and social convention.",
        layRelevance: "Demystifies hereditary class pride and caste claims: status is a constructed social convention, not a divine mandate. Shows how moral degeneration parallels material loss.",
        keyConcepts: ["World Contraction (Saṁvaṭṭa)", "World Expansion (Vivaṭṭa)", "Ābhassara Beings", "Origin of Social Conventions"],
        suttaCentralUrl: "https://suttacentral.net/dn27/en/sujato",
        studyNotes: "The Buddha delivers this to two former brahmins, Vāseṭṭha and Bhāradvāja, dismantling the claim that brahmins are born from Brahmā's mouth. The text is both a cosmological discourse and a brilliant sociopolitical satire.",
        reflectionQuestion: "In what ways do our modern corporate and social hierarchies mirror the constructed illusions described in this discourse?"
      },
      {
        code: "DN 1",
        paliTitle: "Brahmajāla Sutta",
        transTitle: "The All-Embracing Net of Views",
        nikaya: "Dīgha Nikāya",
        category: "cosmology",
        level: "advanced",
        readingTime: "30 min",
        importance: "The foundational discourse classifying all 62 speculative metaphysical views regarding the eternity, non-eternity, finite nature, or infinity of the world and soul.",
        layRelevance: "Teaches acute discernment about metaphysical dogmas and explains how cosmological memories of past lives lead philosophers to misunderstand Mahābrahmā as an eternal creator.",
        keyConcepts: ["62 Views", "Cosmic Speculation", "Contact as Condition for Views", "Mahābrahmā Illusion"],
        suttaCentralUrl: "https://suttacentral.net/dn1/en/sujato",
        studyNotes: "The Buddha traces every speculative view to sensory contact (phassa), feeling (vedanā), and craving (taṇhā). Rather than debate cosmology endlessly, he exposes the psychological hooks that create metaphysical dogma.",
        reflectionQuestion: "Am I clinging to speculative opinions about cosmic origins, or observing the conditions that give rise to my thoughts right now?"
      },
      {
        code: "AN 3.80",
        paliTitle: "Cūḷanikā Sutta",
        transTitle: "The Minor Discourse on the Thousandfold Cosmos",
        nikaya: "Aṅguttara Nikāya (Tikanipāta)",
        category: "cosmology",
        level: "intermediate",
        readingTime: "6 min",
        importance: "The Buddha outlines the staggering multidimensional scale of the universe: a thousandfold minor world system (sahassī cūḷanikā lokadhātu), a millionfold middling system, and a billionfold great galaxy system.",
        layRelevance: "Expands the practitioner's perspective beyond petty provincialism, inspiring cosmic humility without implying that physical exploration replaces inner liberation.",
        keyConcepts: ["Thousandfold Galaxy", "Cosmic Scale", "Voice of the Buddha Across Realms", "Billionfold Cosmos"],
        suttaCentralUrl: "https://suttacentral.net/an3.80/en/sujato",
        studyNotes: "Ānanda marvels at the vast scale of the cosmos. The Buddha clarifies that although his voice can resonate across ten thousand worlds, physical immensity does not equal liberation.",
        reflectionQuestion: "How does realizing the infinitesimal nature of our planet dissolve daily egotistical drama?"
      },

      // Category B: Kamma and Rebirth
      {
        code: "MN 135",
        paliTitle: "Cūḷakammavibhaṅga Sutta",
        transTitle: "The Shorter Exposition of Action",
        nikaya: "Majjhima Nikāya",
        category: "kamma",
        level: "beginner",
        readingTime: "10 min",
        importance: "The young student Subha asks why beings are seen to be short-lived or long-lived, sickly or healthy, ugly or beautiful, influential or uninfluential, poor or rich, low-born or high-born. The Buddha explains the kamma behind each tendency.",
        layRelevance: "Instills ethical sobriety and personal accountability for actions, speech, and mental habits. Must never be weaponized to blame victims of assault, poverty, or disease.",
        keyConcepts: ["Kammassakā Sattā", "Intention & Consequence", "Roots of Wealth & Health", "Non-Harm"],
        suttaCentralUrl: "https://suttacentral.net/mn135/en/sujato",
        studyNotes: "The Buddha proclaims: 'Beings are owners of their actions, heirs of their actions, born of their actions, bound to their actions, supported by their actions. It is action that distinguishes beings as inferior and superior.'",
        reflectionQuestion: "Can I take full responsibility for my present actions without falling into the trap of self-righteous judgment toward others?"
      },
      {
        code: "MN 136",
        paliTitle: "Mahākammavibhaṅga Sutta",
        transTitle: "The Great Exposition of Action",
        nikaya: "Majjhima Nikāya",
        category: "kamma",
        level: "advanced",
        readingTime: "16 min",
        importance: "A vital corrective against naive, simplistic formulas of kamma. The Buddha demonstrates that a person who did bad deeds may still be reborn in heaven, while a good person may be reborn in hell, due to other karmic conditions or death-bed consciousness.",
        layRelevance: "Prevents cynicism when good people suffer or unethical people prosper in worldly life. Kamma is a complex multidimensional stream, not an immediate vending machine.",
        keyConcepts: ["Complexity of Kamma", "Four Types of Persons", "Past & Near-Death Kamma", "Refutation of Simplistic Generalizations"],
        suttaCentralUrl: "https://suttacentral.net/mn136/en/sujato",
        studyNotes: "The Buddha critiques ascetics who overgeneralize from a single meditative vision: 'Because I saw someone who killed go to heaven, all killing leads to heaven.' The Buddha shows the intricate matrix of conditions governing karmic ripening.",
        reflectionQuestion: "Do I expect immediate worldly rewards for every good deed, or do I trust the deeper, long-term law of ethical causation?"
      },
      {
        code: "AN 6.63",
        paliTitle: "Nibbedhika Sutta",
        transTitle: "Penetrative Discourse",
        nikaya: "Aṅguttara Nikāya (Chakkanipāta)",
        category: "kamma",
        level: "beginner",
        readingTime: "7 min",
        importance: "Contains the Buddha's definitive canonical definition of kamma: 'Intention, monastics, is what I call kamma. Having intended, one performs an action through body, speech, or mind.'",
        layRelevance: "Crucial for lay ethics: unintentional accidents (like accidentally stepping on an insect in the dark) do not constitute unwholesome kamma. Intention (cetanā) is the heart of practice.",
        keyConcepts: ["Cetanāhaṁ Kammaṁ Vadāmi", "Intention", "Cessation of Kamma Through Eightfold Path"],
        suttaCentralUrl: "https://suttacentral.net/an6.63/en/sujato",
        studyNotes: "Kamma is defined by its source (contact), its variety (pleasant, painful, neutral results), its result (experiential maturation), its cessation (the ending of craving), and the way to its cessation (the Noble Eightfold Path).",
        reflectionQuestion: "What unspoken intention was driving my most recent words or choices?"
      },
      {
        code: "SN 15.3",
        paliTitle: "Tiṇakaṭṭha Sutta",
        transTitle: "Sticks and Grass",
        nikaya: "Saṁyutta Nikāya (Anamataggasaṁyutta)",
        category: "kamma",
        level: "beginner",
        readingTime: "4 min",
        importance: "The Buddha uses evocative similes—gathering all sticks in India to count mother-generations, and showing that the tears shed in saṁsāra exceed the waters of the four great oceans.",
        layRelevance: "Awakens profound spiritual urgency (saṁvega) and boundless compassion: every being we meet has been our mother, father, brother, sister, or child in this beginningless wandering.",
        keyConcepts: ["Anamatagga (Beginningless Saṁsāra)", "Ocean of Tears", "Mother's Milk", "Spiritual Urgency (Saṁvega)"],
        suttaCentralUrl: "https://suttacentral.net/sn15.3/en/sujato",
        studyNotes: "The purpose of reflecting on the incomprehensible scale of rebirth is not curiosity or despair, but disenchantment (nibbidā): 'Long enough have you experienced stress, monastics; enough to become disenchanted with all conditioned things.'",
        reflectionQuestion: "If the stranger irritating me has likely been my loving mother in past eons, how can I treat them with patience today?"
      },

      // Category C: Devas, Brahmās, & Limits of Heavenly Existence
      {
        code: "DN 11",
        paliTitle: "Kevaddha Sutta",
        transTitle: "To Kevaddha",
        nikaya: "Dīgha Nikāya",
        category: "devas",
        level: "intermediate",
        readingTime: "15 min",
        importance: "Narrative of a monk who visits every celestial realm asking where the four great elements cease without remainder. Even the Great Brahmā admits in private that he does not know, redirecting the monk back to the Buddha.",
        layRelevance: "Demystifies the omniscient pretensions of gods and cosmic powers. No cosmic creator or celestial entity possesses the ultimate wisdom of liberation.",
        keyConcepts: ["Where Elements Cease", "Mahābrahmā's Limitation", "The Miracle of Education", "Cessation in Consciousness"],
        suttaCentralUrl: "https://suttacentral.net/dn11/en/sujato",
        studyNotes: "When the monk corners Mahābrahmā, Brahmā takes him by the arm and whispers: 'The other gods think I know everything, but I do not know. Go back to the Blessed One.' The Buddha answers: elements cease where consciousness is unmanifest, boundless, and luminous all around.",
        reflectionQuestion: "Do I place my spiritual trust in external cosmic patrons, or in the direct purification of my own mind?"
      },
      {
        code: "DN 13",
        paliTitle: "Tevijja Sutta",
        transTitle: "The Threefold Knowledge",
        nikaya: "Dīgha Nikāya",
        category: "devas",
        level: "intermediate",
        readingTime: "14 min",
        importance: "Two young brahmins argue over the true path to union with Brahmā. The Buddha critiques their blind trust in rituals and reveals that the true path to fellowship with Brahmā is cultivating the Four Sublime Abodes (Brahmavihāras).",
        layRelevance: "Connects spiritual aspiration directly to boundless loving-kindness (mettā), compassion (karuṇā), appreciative joy (muditā), and equanimity (upekkhā).",
        keyConcepts: ["Union with Brahmā", "Critique of Vedic Dogma", "Four Brahmavihāras", "Pervading the Cosmos with Goodwill"],
        suttaCentralUrl: "https://suttacentral.net/dn13/en/sujato",
        studyNotes: "The Buddha asks: 'Does Brahmā have wives and property? Is he angry or pure?' The brahmins reply: 'He is pure, without malice.' The Buddha responds: 'Then how can angry, greedy men unite with an unmalicious Brahmā? Cultivate the brahmavihāras to be like Brahmā.'",
        reflectionQuestion: "Can I radiate unconditional goodwill toward all directions of my city before beginning my day?"
      },
      {
        code: "MN 49",
        paliTitle: "Brahmanimantanika Sutta",
        transTitle: "The Invitation of a Brahmā",
        nikaya: "Majjhima Nikāya",
        category: "devas",
        level: "advanced",
        readingTime: "16 min",
        importance: "Baka Brahmā falls into the dangerous delusion that his exalted realm is eternal, permanent, and the ultimate refuge. The Buddha travels directly to the Brahmā realm to dismantle this delusion.",
        layRelevance: "Shows that even beings who live for cosmic cycles can fall into spiritual blindness. Refined meditative bliss must not be mistaken for unconditioned liberation.",
        keyConcepts: ["Baka Brahmā's Delusion", "Limits of Fine-Material Existence", "The Unconditioned Beyond Brahmā", "Māra's Intervention"],
        suttaCentralUrl: "https://suttacentral.net/mn49/en/sujato",
        studyNotes: "The Buddha warns Baka: 'You do not know the realms above your own; but I know them, and I know your origin and your passing away.' The Buddha demonstrates that Nibbāna transcends all realms of form and formlessness.",
        reflectionQuestion: "Have I mistaken a temporary peaceful emotional plateau for permanent spiritual realization?"
      },
      {
        code: "AN 4.77",
        paliTitle: "Acinteyya Sutta",
        transTitle: "The Unthinkable / Incomprehensible",
        nikaya: "Aṅguttara Nikāya (Catukkanipāta)",
        category: "devas",
        level: "beginner",
        readingTime: "3 min",
        importance: "The Buddha enumerates four unthinkables (acinteyyā) that lead to madness and vexation if one attempts to calculate them: the range of a Buddha, the range of jhāna, the precise ripening of kamma, and speculation about the world.",
        layRelevance: "Promotes intellectual humility and psychological sanity. Encourages practitioners to focus on practical ethical training rather than obsessing over cosmic physics.",
        keyConcepts: ["Four Unthinkables", "Limits of Conceptual Thought", "Kammavipāka Inscrutability", "Loka-cintā"],
        suttaCentralUrl: "https://suttacentral.net/an4.77/en/sujato",
        studyNotes: "Trying to deduce exactly which specific past action caused every detail of present life is impossible for an unawakened mind. Focus on present intention instead.",
        reflectionQuestion: "Am I wasting mental energy trying to solve metaphysical riddles that do not lead to the ending of suffering?"
      },

      // Category D: Human Life & Opportunity for Practice
      {
        code: "SN 56.48",
        paliTitle: "Chiggala Sutta",
        transTitle: "The Hole in the Yoke (Blind Turtle)",
        nikaya: "Saṁyutta Nikāya (Saccasaṁyutta)",
        category: "human",
        level: "beginner",
        readingTime: "3 min",
        importance: "The definitive discourse declaring the astronomical rarity of obtaining a human birth equipped to encounter the True Dhamma.",
        layRelevance: "Shakes the lay practitioner awake from complacency. Human birth is not guaranteed, easy, or routine; it is an extraordinary stroke of spiritual fortune.",
        keyConcepts: ["Blind Sea Turtle", "Yoke with One Hole", "Rarity of Human Life", "Rare Encounter with Dhamma"],
        suttaCentralUrl: "https://suttacentral.net/sn56.48/en/sujato",
        studyNotes: "The turtle surfaces once every hundred years in a stormy ocean. The Buddha asks if its neck would easily enter the floating yoke. Ānanda replies: 'Only by a miracle, Bhante.' The Buddha says human rebirth is even rarer.",
        reflectionQuestion: "Knowing how rare this human life is, what will I prioritize with my remaining years?"
      },
      {
        code: "AN 8.54",
        paliTitle: "Dīghajāṇu Sutta",
        transTitle: "Conditions for Lay Welfare",
        nikaya: "Aṅguttara Nikāya (Aṭṭhakanipāta)",
        category: "human",
        level: "beginner",
        readingTime: "8 min",
        importance: "The layman Dīghajāṇu asks for teachings suitable for householders who enjoy family life, perfumes, and wealth. The Buddha gives four conditions for welfare in this life and four for future welfare.",
        layRelevance: "Directly bridges Buddhist cosmology and lay domestic reality: diligence (uṭṭhāna-sampadā), protection (ārakkha-sampadā), good friends (kalyāṇamittatā), and balanced living (samajīvitā).",
        keyConcepts: ["Lay Welfare Here & Now", "Future Welfare (Faith, Virtue, Giving, Wisdom)", "Financial Stewardship", "Noble Friendship"],
        suttaCentralUrl: "https://suttacentral.net/an8.54/en/sujato",
        studyNotes: "The Buddha does not ask laypeople to renounce their households; he shows them how to cultivate ethical stewardship that secures prosperity here and a fortunate rebirth hereafter.",
        reflectionQuestion: "Is my household financial management balanced, and am I surrounded by friends who inspire ethical integrity?"
      },
      {
        code: "AN 5.57",
        paliTitle: "Upajjhaṭṭhana Sutta",
        transTitle: "Subjects for Frequent Recollection",
        nikaya: "Aṅguttara Nikāya (Pañcakanipāta)",
        category: "human",
        level: "beginner",
        readingTime: "5 min",
        importance: "The Five Daily Remembrances that every person—lay or monastic—should contemplate frequently: aging, illness, death, separation, and ownership of kamma.",
        layRelevance: "The ultimate daily contemplations grounding cosmological teachings into immediate moral lucidity, cutting through pride in youth, health, and life.",
        keyConcepts: ["Five Remembrances", "I am Subject to Aging", "Illness & Death", "Owner of My Kamma"],
        suttaCentralUrl: "https://suttacentral.net/an5.57/en/sujato",
        studyNotes: "Contemplating that 'I am the owner of my kamma, heir to my kamma' overcomes negligence (pamāda) and inspires unshakeable commitment to wholesome living.",
        reflectionQuestion: "Recite the Five Remembrances: How does facing aging and death transform my priorities today?"
      },
      {
        code: "DN 16",
        paliTitle: "Mahāparinibbāna Sutta",
        transTitle: "The Great Discourse on the Final Nibbāna",
        nikaya: "Dīgha Nikāya",
        category: "human",
        level: "advanced",
        readingTime: "35 min",
        importance: "The epic canonical account of the Buddha's final months, the earthquake shaking cosmological realms, his passing, and his immortal final exhortation.",
        layRelevance: "The final words of the Buddha: 'All conditioned things are subject to decay; strive diligently with vigilance (appamādena sampādetha).' Puts all cosmological inquiry in perspective.",
        keyConcepts: ["Vaya-dhammā Saṅkhārā", "Appamādena Sampādetha", "Cosmic Shaking at Parinibbāna", "Dhamma as Eternal Teacher"],
        suttaCentralUrl: "https://suttacentral.net/dn16/en/sujato",
        studyNotes: "Even the Supreme Buddha's physical body—the finest form in the universe—undergoes natural dissolution. The Dhamma alone remains the eternal island of refuge.",
        reflectionQuestion: "How will I embody the Buddha's final command: 'Strive diligently with heedfulness'?"
      }
    ]
  },

  // E. Lay Life and Cosmology: 5 Realistic Lay Scenarios
  layScenarios: {
    sectionTitle: "What Buddhist Cosmology Means for Daily Life",
    sectionSubtitle: "Translating cosmic perspectives into domestic ethical conduct, emotional resilience, and compassion",
    scenarios: [
      {
        id: "cosmo-sc-1",
        number: "01",
        title: "Anger, Vindictiveness, and Harmful Speech",
        narrative: "During a bitter family dispute or high-stakes corporate negotiation, someone blindsides you with deceitful accusations. An intense urge surges to ruin their reputation, retaliate maliciously, and destroy their credibility.",
        dhammaPrinciple: "In Buddhist cosmology, repeated hatred and intent to harm condition a state of mind analogous to niraya (hell) and plant karmic seeds for future suffering. AN 6.63 reminds us that intention is kamma. Retaliation does not defeat hatred; it merely binds both parties to a mutual downward spiral.",
        practicalExercise: "Apply the Brahmavihāras (DN 13): Pause for 10 conscious breaths. Acknowledge: 'Anger has arisen in my chest. If I act from this malice, I shoot myself with a poisoned dart.' Guard right speech (sammā-vācā). Speak the truth calmly without slander or abusive words.",
        reflectionQuestion: "If every hateful word builds my future psychological dwelling place, what realm am I constructing right now?",
        suttas: ["AN 6.63 (Nibbedhika)", "DN 13 (Tevijja)", "MN 21 (The Saw)"]
      },
      {
        id: "cosmo-sc-2",
        number: "02",
        title: "Generosity, Giving, and Household Wealth",
        narrative: "You receive an annual bonus or significant profit in your business. Friends encourage you to spend it on status symbols, while a local monastic community or humanitarian shelter requests support.",
        dhammaPrinciple: "Traditional cosmology connects sincere generosity (dāna) with pleasant future outcomes, human security, and heavenly rebirth. However, AN 8.54 stresses that householder generosity must be balanced: one must not impoverish one's family or business while seeking merit.",
        practicalExercise: "Practice fourfold financial stewardship from the Sigālovāda Sutta (DN 31): 1 part for daily household sustenance, 2 parts reinvested in honest livelihood, and 1 part saved for emergencies, while joyfully dedicating a clean portion of surplus to authentic generosity without pride or expectation of return.",
        reflectionQuestion: "Can I give freely with a glad heart, without turning the gift into a tool for social vanity?",
        suttas: ["AN 8.54 (Dīghajāṇu)", "AN 4.62 (Anaṇa Sutta)", "DN 31 (Sigālovāda)"]
      },
      {
        id: "cosmo-sc-3",
        number: "03",
        title: "Status, Wealth, and Heavenly Aspiration",
        narrative: "You find yourself admiring affluent influencers or wealthy socialites, wishing you could be reborn into a family of immense privilege, ease, luxury, and effortless pleasure.",
        dhammaPrinciple: "Aspirations for heavenly rebirth or worldly wealth may motivate moral actions, but DN 11 and MN 49 warn that even the highest heavens are impermanent. When the merit that created that luxury runs out, beings fall back into hardship. The highest purpose of the Dhamma is not comfortable reincarnation, but Nibbāna.",
        practicalExercise: "Contemplate the impermanence of luxury: Look at antique palaces, bankrupt empires, and aged celebrities. Notice how quickly pleasure evaporates. Re-orient your primary aspiration from 'favorable worldly rebirth' to 'freedom from craving and delusion'.",
        reflectionQuestion: "Am I treating the Dhamma as a ticket to luxury, or as the path to eradicate the root of suffering?",
        suttas: ["DN 11 (Kevaddha)", "MN 49 (Brahmanimantanika)", "SN 15.3 (Sticks & Grass)"]
      },
      {
        id: "cosmo-sc-4",
        number: "04",
        title: "Illness, Disability, Poverty, and Adversity",
        narrative: "A friend, family member, or neighbor is diagnosed with a chronic degenerative disease or faces severe financial ruin. Someone casually suggests: 'It must be their bad past kamma.'",
        dhammaPrinciple: "CRITICAL DOCTRINAL SAFEGUARD: The Buddha explicitly rejected the fatalistic doctrine that every single experience of pain is directly due to past kamma (pubbekatahetu). Pain arises from bile, phlegm, seasonal changes, accidents, and external causes (SN 36.21). Suttas strictly forbid using kamma to blame victims of illness, disability, or injustice.",
        practicalExercise: "Never judge another person's adversity through superficial karmic speculation. Respond immediately with active compassion (karuṇā), medical support, practical aid, and ethical solidarity, recognizing that in saṁsāra, all beings have experienced every misfortune.",
        reflectionQuestion: "How can I eradicate any trace of self-righteous spiritual blaming and replace it with unconditional, practical care?",
        suttas: ["SN 36.21 (Sīvaka Sutta)", "MN 136 (Mahākammavibhaṅga)", "AN 4.77 (Acinteyya)"]
      },
      {
        id: "cosmo-sc-5",
        number: "05",
        title: "Facing Death, Grief, and Cosmic Uncertainty",
        narrative: "You receive an alarming health diagnosis, or a beloved family member passes away. Existential dread strikes: 'Where am I going after death? What will happen to my consciousness?'",
        dhammaPrinciple: "Reflecting on death and rebirth (maraṇassati) is taught to generate heedfulness, not neurotic panic. AN 5.57 teaches the Five Remembrances so that we invest our energy into what actually protects us: wholesome intention, ethical conduct, and inner wisdom.",
        practicalExercise: "Recite the fifth remembrance daily: 'I am the owner of my kamma, heir to my kamma. Whatever action I perform, good or bad, of that I shall be the heir.' Take refuge in the Triple Gem, practice forgiveness, resolve old conflicts, and establish the mind in calm mindfulness.",
        reflectionQuestion: "When my time comes to release this physical body, will my mind be anchored in peaceful non-clinging?",
        suttas: ["AN 5.57 (Upajjhaṭṭhana)", "SN 56.48 (Blind Turtle)", "DN 16 (Mahāparinibbāna)"]
      }
    ]
  },

  // F. Kamma, Rebirth, and Responsibility & Interactive Exercise
  kammaSection: {
    sectionTitle: "Kamma, Rebirth, and Responsibility",
    sectionSubtitle: "The ethical engine driving the cosmic wheel: intention, ripening, and freedom",
    leadText: "Kamma is not fatalism, destiny, or cosmic punishment. In Theravāda Buddhism, kamma is the law of ethical cause and effect driven by intention (cetanā).",
    corePrinciples: [
      {
        title: "Kamma as Intentional Action",
        detail: "Actions performed intentionally through body, speech, or mind produce karmic momentum. Unintentional acts (such as involuntarily bumping into an object) do not create karmic seeds (AN 6.63)."
      },
      {
        title: "Distinction Between Action (Kamma) & Result (Vipāka)",
        detail: "Kamma is the active cause planted now; vipāka is the passive experiential fruition ripening later. You have sovereign power over your present choices, even when dealing with difficult conditions."
      },
      {
        title: "Ripening Is Neither Simple nor Immediate",
        detail: "Kamma ripens across three timeframes: in this present life (diṭṭhadhammavedanīya), in the next life (upapajjavedanīya), or in future lives (aparāpariyavedanīya) when supporting conditions align (MN 136)."
      },
      {
        title: "No Static Soul Transmigrates",
        detail: "Rebirth is not an eternal soul (attā) migrating into a new vessel like someone changing clothes. It is an unbroken causal stream of consciousness (viññāṇa-sota), like one candle flame lighting another."
      }
    ],
    decisionExercise: {
      title: "Interactive Ethical Decision Exercise",
      subtitle: "Observe the karmic momentum of ordinary choices in daily lay life",
      dilemmas: [
        {
          id: "dilemma-1",
          situation: "Speaking truthfully when a convenient lie would avoid embarrassment at work.",
          options: [
            { text: "Tell the convenient lie to protect immediate image", momentum: "Reinforces habitual delusion and fear; plants seeds of mistrust and anxiety." },
            { text: "Speak the truth with humility and propose a constructive solution", momentum: "Cultivates Right Speech (sammā-vācā); establishes unshakeable self-respect and karmic trustworthiness." }
          ]
        },
        {
          id: "dilemma-2",
          situation: "Responding to a furious verbal insult from an acquaintance.",
          options: [
            { text: "Retaliate with sharp, wounding sarcasm", momentum: "Feeds the fire of aversion; binds consciousness to reciprocal hostility (niraya-seed)." },
            { text: "Pause, breathe, and refuse to return hostility", momentum: "Breaks the karmic link; cultivates the sublime abode of patience and equanimity (khanti-pāramī)." }
          ]
        },
        {
          id: "dilemma-3",
          situation: "A charity asks for help, but donating would cut into your emergency savings.",
          options: [
            { text: "Donate recklessly beyond your means to look generous", momentum: "Creates financial instability and anxiety; neglects householder duty (AN 8.54)." },
            { text: "Give an appropriate, heartfelt donation while responsibly protecting household security", momentum: "Pure, balanced generosity (dāna) aligned with wise lay stewardship." }
          ]
        },
        {
          id: "dilemma-4",
          situation: "An opportunity to take credit for a coworker's unacknowledged hard work.",
          options: [
            { text: "Quietly accept the credit and bonus", momentum: "Karmic violation of taking what is not given; strengthens deceit and future vulnerability." },
            { text: "Publicly acknowledge and praise the coworker's contribution", momentum: "Cultivates appreciative joy (muditā) and ethical integrity; establishes noble friendship." }
          ]
        },
        {
          id: "dilemma-5",
          situation: "Facing physical exhaustion and sickness on a busy day.",
          options: [
            { text: "Rage against the body and catastrophize the illness", momentum: "Shoots oneself with the second arrow (SN 36.6); multiplies distress." },
            { text: "Care for the body with medicine and rest while contemplating impermanence", momentum: "Wisdom contemplating the nature of form (rūpa); fulfills the first duty of understanding Dukkha." }
          ]
        },
        {
          id: "dilemma-6",
          situation: "Noticing an impulse to indulge in compulsive online shopping late at night.",
          options: [
            { text: "Immediately buy the item to escape boredom", momentum: "Nourishes the hungry ghost habit loop of endless thirst (taṇhā)." },
            { text: "Recognize the craving, step away from the device, and take five conscious breaths", momentum: "Strengthens sense restraint (indriya-saṁvara) and inner contentment." }
          ]
        }
      ]
    }
  },

  // G. The Goal Beyond the 31 Planes: Nibbāna Is Not Another Realm
  beyondPlanes: {
    sectionTitle: "Nibbāna Is Not Another Realm",
    sectionSubtitle: "The unconditioned reality transcending all cosmological dimensions",
    leadText: "One of the most profound teachings in Theravāda Buddhism is that the goal of practice is NOT to secure a seat in the highest heaven. Nibbāna is not plane #32.",
    points: [
      {
        title: "All Conditioned Existence Is Impermanent",
        detail: "Even the longest celestial lifespans (such as 84,000 eons in the immaterial spheres) eventually dissolve. When the underlying merit is spent, beings pass away and are reborn according to remaining karmic conditions (MN 49)."
      },
      {
        title: "Pleasure Does Not Equal Freedom",
        detail: "Sensual and meditative pleasures temporarily mask the underlying presence of ignorance (avijjā) and latent defilements (anusaya). Awakening requires penetrating the Four Noble Truths, not accumulating celestial bliss."
      },
      {
        title: "The Unconditioned (Asaṅkhata)",
        detail: "Nibbāna is the unconditioned: unborn, unoriginated, uncreated, and unformed (Udāna 8.3). It is the complete extinguishing of greed, hatred, and delusion—the total cessation of suffering."
      }
    ],
    reflectionQuestion: "If even the most refined conditioned existence in the cosmos is subject to impermanence and decay, what does it mean to seek true freedom rather than merely a comfortable temporary rebirth?"
  },

  // H. Guided Study Pathways (3 Tracks)
  studyPathways: {
    sectionTitle: "Guided Study Pathways",
    sectionSubtitle: "Structured learning curricula for beginners, intermediate students, and advanced practitioners",
    disclaimer: "These pathways are pedagogical suggestions to guide personal study, not rigid dogmas.",
    tracks: [
      {
        id: "beginner-track",
        name: "Beginner Track — 7 Days",
        duration: "7 Days (15 min/day)",
        description: "Foundational introduction to the human opportunity, kamma as intention, and daily ethical conduct.",
        days: [
          { day: 1, sutta: "Cosmology Overview", task: "Read the overview of the 3 tiers (Kāma, Rūpa, Arūpa) and the Hero section." },
          { day: 2, sutta: "SN 56.48 (Chiggala Sutta)", task: "Study the Blind Turtle simile. Contemplate the rarity of human life." },
          { day: 3, sutta: "AN 6.63 (Nibbedhika Sutta)", task: "Learn the definition of kamma as intention (cetanā)." },
          { day: 4, sutta: "MN 135 (Cūḷakammavibhaṅga)", task: "Investigate how actions distinguish beings in health, wealth, and character." },
          { day: 5, sutta: "DN 11 (Kevaddha Sutta)", task: "Discover the limitations of Mahābrahmā and why gods are not omniscient." },
          { day: 6, sutta: "AN 8.54 (Dīghajāṇu Sutta)", task: "Apply Buddhist ethics to household financial stewardship and friendship." },
          { day: 7, sutta: "AN 5.57 (Upajjhaṭṭhana)", task: "Recite the Five Remembrances and write your reflection in the journal." }
        ]
      },
      {
        id: "intermediate-track",
        name: "Intermediate Track — 14 Days",
        duration: "14 Days (25 min/day)",
        description: "Deeper study of kamma complexity, sensual and fine-material planes, and the Brahmavihāras.",
        days: [
          { day: 1, sutta: "The 31 Planes: Sensual Tier", task: "Explore planes 1 to 11 in the interactive explorer." },
          { day: 2, sutta: "MN 136 (Mahākammavibhaṅga)", task: "Study why good people may face difficult ripening and vice versa." },
          { day: 3, sutta: "SN 15.3 (Tiṇakaṭṭha Sutta)", task: "Contemplate the beginningless ocean of tears and spiritual urgency." },
          { day: 4, sutta: "DN 13 (Tevijja Sutta)", task: "Understand the 4 Brahmavihāras as the authentic path to Brahmā." },
          { day: 5, sutta: "The 31 Planes: Rūpa Tier", task: "Explore the 16 fine-material realms and their relation to jhāna." },
          { day: 6, sutta: "MN 49 (Brahmanimantanika)", task: "Examine Baka Brahmā's illusion of permanence and the Buddha's refutation." },
          { day: 7, sutta: "Midway Review & Exercise", task: "Complete the 6 dilemmas in the Ethical Decision Exercise." },
          { day: 8, sutta: "The 31 Planes: Arūpa Tier", task: "Explore the 4 immaterial realms (space, consciousness, nothingness, neither)." },
          { day: 9, sutta: "AN 4.77 (Acinteyya Sutta)", task: "Study the four unthinkables and cultivate intellectual humility." },
          { day: 10, sutta: "AN 3.80 (Cūḷanikā Sutta)", task: "Contemplate the billionfold cosmic scale and human perspective." },
          { day: 11, sutta: "Pure Abodes & Non-Return", task: "Study planes 23–27 and the spiritual faculties required for Non-return." },
          { day: 12, sutta: "Scenarios 1 & 2", task: "Review Anger & Speech and Wealth Stewardship in daily life." },
          { day: 13, sutta: "Scenarios 3, 4 & 5", task: "Review Status Aspirations, Adversity Safeguards, and Death." },
          { day: 14, sutta: "Nibbāna Beyond the Planes", task: "Synthesize study: why Nibbāna is not realm #32." }
        ]
      },
      {
        id: "advanced-track",
        name: "Advanced Track — 30 Days",
        duration: "30 Days (40 min/day)",
        description: "Exhaustive exploration of DN 1, DN 27, DN 16, Abhidhamma systematization, and liberation.",
        days: [
          { day: 1, sutta: "DN 27 (Aggañña Sutta - Part 1)", task: "World contraction, expansion, and the descent of luminous beings." },
          { day: 2, sutta: "DN 27 (Aggañña Sutta - Part 2)", task: "Emergence of food, physical differentiation, and social class critique." },
          { day: 3, sutta: "DN 1 (Brahmajāla Sutta - Part 1)", task: "The initial moralities and the first sets of eternalist cosmic views." },
          { day: 4, sutta: "DN 1 (Brahmajāla Sutta - Part 2)", task: "Partial eternalism, finite/infinite universe views, and agnosticism." },
          { day: 5, sutta: "DN 1 (Brahmajāla Sutta - Part 3)", task: "The entrapment of views in contact and how noble disciples transcend them." },
          { day: 6, sutta: "Abhidhammattha-saṅgaha (Chapter 5)", task: "Study the classical Theravāda mapping of realms and planes." },
          { day: 7, sutta: "DN 16 (Mahāparinibbāna Sutta)", task: "The cosmic quaking at the Buddha's passing and his final instruction." }
        ]
      }
    ]
  },

  // I. Contemplative Reflection Journal
  reflectionJournal: {
    sectionTitle: "Cosmological Reflection Journal",
    sectionSubtitle: "Private contemplation log stored strictly in your local browser storage",
    prompts: [
      { id: "cq1", label: "1. What did this discourse or realm teach me about the range of conditioned existence?", placeholder: "Reflect on lifespans, realms, or states of being..." },
      { id: "cq2", label: "2. How does this teaching connect my present intentions (cetanā) to future results?", placeholder: "Examine intention in daily choices..." },
      { id: "cq3", label: "3. What does this reveal about the inherent impermanence of even exalted states?", placeholder: "Notice how all conditioned things pass away..." },
      { id: "cq4", label: "4. Am I pursuing ethical welfare, heavenly approval, or ultimate liberation (Nibbāna)?", placeholder: "Clarify your spiritual compass..." },
      { id: "cq5", label: "5. How can I practice compassion without judging or blaming others for their adversity?", placeholder: "Cultivate non-judgmental kindness..." },
      { id: "cq6", label: "6. Which canonical sutta illuminated this experience today?", placeholder: "e.g., SN 56.48, MN 135, AN 6.63, DN 11..." }
    ],
    saveButtonText: "Save Cosmological Reflection",
    entriesHeading: "Your Saved Reflections",
    noEntriesNotice: "No reflections logged yet. Complete the prompt above to begin your personal practice archive.",
    exportButtonText: "Export Reflections (JSON)",
    clearAllButtonText: "Clear Archive"
  },

  // J. Frequently Asked Questions (14 Canonical FAQs)
  faqs: {
    sectionTitle: "Frequently Asked Questions",
    sectionSubtitle: "Authentic Theravāda doctrinal answers grounded in canonical discourses",
    items: [
      {
        q: "What is Buddhist cosmology in the Theravāda tradition?",
        a: "In Theravāda Buddhism, cosmology is not mythological fiction; it is a descriptive map of conditioned existence (saṁsāra). It charts the realms populated by sentient beings according to their kamma, divided into the Sensual (Kāma), Fine-Material (Rūpa), and Immaterial (Arūpa) realms. Its purpose is soteriological: to inspire spiritual urgency (saṁvega), demonstrate the universal law of kamma, and highlight the necessity of liberation."
      },
      {
        q: "What are the 31 planes of existence?",
        a: "The 31 planes are a traditional Theravāda classification summarizing the cosmos: 11 sensual realms (4 lower states of deprivation, the human world, and 6 deva heavens), 16 fine-material Brahmā worlds (corresponding to the 4 jhānas and including the 5 Pure Abodes), and 4 immaterial realms (corresponding to formless meditative attainments)."
      },
      {
        q: "Does every early sutta describe all 31 planes in sequence?",
        a: "No. The 31-plane scheme is a later traditional systematization (consolidated in the Abhidhamma and commentarial treatises like the Visuddhimagga and Abhidhammattha-saṅgaha). The individual realms (such as Tāvatiṁsa, Mahābrahmā, Ābhassara, and the Pure Abodes) are described throughout the discourses, but they are not listed as a single 31-plane schema in any single early discourse."
      },
      {
        q: "What determines where a being is reborn?",
        a: "Rebirth is determined by intention (cetanā), habitual actions, and near-death consciousness. Unwholesome kamma rooted in greed, hatred, and delusion leads downward; wholesome kamma rooted in generosity, virtue, and loving-kindness leads to human or celestial realms; mastery of jhāna conditions Brahmā rebirth; and eradicating all defilements brings the end of rebirth."
      },
      {
        q: "Are devas and Brahmās immortal in Buddhism?",
        a: "No. All beings in the cosmos—including the most exalted Great Brahmā living for entire world cycles—are impermanent (anicca) and mortal. When the karmic energy that propelled their celestial rebirth is exhausted, they die and take rebirth elsewhere according to their past kamma."
      },
      {
        q: "What is the difference between devas and Brahmās?",
        a: "Devas inhabit the Sensual Realm (Kāmaloka); they possess refined sensory bodies, experience refined sensual pleasure, and are subject to sensual desires. Brahmās inhabit the Fine-Material (Rūpa) and Immaterial (Arūpa) realms; their minds have surpassed sensual desire through meditative absorption (jhāna), dwelling in luminous peace and boundless qualities like loving-kindness and equanimity."
      },
      {
        q: "What are the Pure Abodes (Suddhāvāsa)?",
        a: "The Pure Abodes are the top five fine-material realms (planes 23–27: Avihā, Atappā, Sudassā, Sudassī, Akaniṭṭhā). They are inhabited exclusively by Non-returners (Anāgāmīs)—noble disciples who have severed the five lower fetters. They attain Arahantship and final Parinibbāna in these realms without ever returning to the sensual world."
      },
      {
        q: "Are the cosmological realms literal physical places, psychological states, or both?",
        a: "In traditional Theravāda, the realms are understood literally as objective planes of rebirth experienced by beings across saṁsāra. However, the Buddha also taught that psychological states reflect these realms: explosive rage mirrors hell, obsessive hunger mirrors hungry ghosts, and meditative stillness mirrors Brahmā worlds. Both dimensions are valid, but psychological interpretation must not erase the authentic doctrine of rebirth."
      },
      {
        q: "Is rebirth the transmigration of an unchanging soul (attā)?",
        a: "No. Buddhism explicitly rejects the idea of a permanent, unchanging soul migrating from body to body (anattā). Rebirth is a dynamic, causal process: just as a flame is passed from one candle to another without an entity moving between them, so consciousness continues dependently conditioned by kamma."
      },
      {
        q: "Is attaining a heavenly rebirth the ultimate goal of Buddhism?",
        a: "No. The Buddha explicitly declared that seeking rebirth in heaven is an inferior aspiration because heavens are impermanent and still subject to suffering. The ultimate and singular goal of the Buddha's dispensation is Nibbāna: complete liberation from the cycle of birth, aging, and death."
      },
      {
        q: "Can we know another person's past kamma or predict their next rebirth?",
        a: "No. In the Acinteyya Sutta (AN 4.77), the Buddha warns that the precise ripening of kamma (kammavipāka) is incomprehensible to unawakened minds. Suttas strictly prohibit judging or blaming others for their misfortunes based on karmic assumptions."
      },
      {
        q: "How does cosmology connect to Dependent Arising (Paṭiccasamuppāda)?",
        a: "They are deeply interconnected: Dependent Arising explains the exact causal mechanism (Ignorance → Formations → Consciousness → Name-and-Form → Becoming → Birth) that drives the wheel of saṁsāra through the 31 planes."
      },
      {
        q: "Why is the human realm considered uniquely precious for spiritual practice?",
        a: "In the lower realms, intense pain and fear paralyze the mind, making meditation and ethical practice almost impossible. In heavenly realms, prolonged pleasure induces complacency. The human realm offers the ideal balance of joy and suffering, awakening spiritual urgency (saṁvega) and allowing one to hear the Dhamma and cultivate wisdom."
      },
      {
        q: "How does Nibbāna differ from the highest cosmological realms?",
        a: "The highest realms (such as the Sphere of Neither-Perception-Nor-Non-Perception) are conditioned (saṅkhata), dependently arisen, and impermanent. Nibbāna is unconditioned (asaṅkhata), unborn, unoriginated, and permanent—the total extinguishing of craving and the final cessation of stress."
      }
    ]
  }
};
const BUDDHIST_COSMOLOGY_MODULE_PT = {
  // A. Hero Section
  hero: {
    title: "Cosmologia Budista",
    paliTitle: "Lokadhātu & Bhavacakra",
    subtitle: "Compreender os planos de existência, o funcionamento do kamma e o caminho além do saṁsāra.",
    introText: "Na tradição Theravāda, a cosmologia budista descreve uma vasta gama de formas de existência no saṁsāra: estados de privação, a existência humana comum, planos celestiais e mundos refinados de Brahmā. Os seres renascem de acordo com condições que incluem o kamma, mas todos os planos condicionados permanecem impermanentes. O objetivo supremo do ensinamento do Buda não é conquistar uma posição superior no cosmos, mas a libertação definitiva do ciclo de renascimentos e sofrimento.",
    systematizationNote: "Esclarecimento Doutrinário: A tradicional classificação Theravāda dos 31 planos de existência é uma sistematização dos ensinamentos cosmológicos dispersos pelo Cânone Pāli e tratados clássicos posteriores (como o Abhidhammattha-saṅgaha e comentários). Não se deve presumir que todos os 31 planos apareçam listados em um único discurso primitivo.",
    primaryActions: [
      { id: "action-planes", label: "Explorar os 31 Planos de Existência", target: "#cosmo-31-planes", icon: "🌌" },
      { id: "action-suttas", label: "Estudar os Suttas Canônicos", target: "#tab-canonical", icon: "📜" },
      { id: "action-kamma", label: "Compreender Kamma & Renascimento", target: "#cosmo-kamma", icon: "⚖️" }
    ],
    canonicalPassage: {
      suttaCode: "SN 56.48",
      paliTitle: "Chiggala Sutta",
      englishTitle: "O Símile da Tartaruga Cega",
      excerptPali: "Seyyathāpi, bhikkhave, puriso ekacchiggalaṁ yugaṁ mahāsamudde pakkhipeyya. Tatra assa kāṇo kacchapo... Evametadappaṁ, bhikkhave, yadidaṁ manussattapaṭilābho.",
      excerptTrans: "Imaginem um jugo de madeira com um único orifício lançado ao oceano e uma tartaruga cega que emerge uma vez a cada cem anos... Mais difícil e raro do que essa tartaruga encaixar o pescoço nesse orifício é obter o renascimento humano e encontrar o Dhamma.",
      sourceUrl: "https://suttacentral.net/sn56.48/en/sujato",
      citation: "Saṁyutta Nikāya 56.48 • Chiggala Sutta"
    }
  },

  // B. Main Section: Understanding the Buddhist Cosmos
  understandingCosmos: {
    sectionTitle: "Um Universo de Existência Condicionada",
    sectionSubtitle: "Os três grandes níveis de existência na doutrina budista primitiva",
    leadText: "A cosmologia budista descreve diferentes reinos onde os seres renascem de acordo com suas intenções e ações (kamma), diferindo amplamente em longevidade, sutileza corpórea, prazer, dor e refinamento meditativo. Todos os planos, sem exceção, são impermanentes (anicca), insatisfatórios (dukkha) e desprovidos de um eu permanente (anattā).",
    tiers: [
      {
        id: "kamaloka",
        name: "Kāmaloka — O Reino Sensual",
        planesCount: "11 Planos",
        description: "Abrange todas as formas de existência marcadas pela predominância dos cinco sentidos físicos e pelo anseio do desejo sensorial (kāma-taṇhā). Inclui os reinos inferiores de sofrimento, o plano humano e os seis céus sensuais.",
        subdivisions: [
          { name: "Quatro Estados de Privação (Apāya-bhūmi)", detail: "Seres do inferno (niraya), animais (tiracchāna), fantasmas famintos (peta) e asuras (titãs em conflito perpétuo). Fruto de ações prejudiciais enraizadas em ganância, aversão e ilusão." },
          { name: "O Plano Humano (Manussa-loka)", detail: "Um reino de equilíbrio entre prazer e dor, singularmente favorável ao cultivo ético e à realização do despertar espiritual." },
          { name: "Seis Céus dos Devas Sensuais (Devaloka)", detail: "Desde os Quatro Grandes Reis até seres que reinam sobre as criações de outros. Marcados por luz radiante e longevidade sustentada por méritos kármicos." }
        ],
        practicalReflection: "De que maneira ganância, aversão, ilusão, generosidade e contenção moldam nossa experiência psicológica no presente? (A reflexão psicológica complementa, mas não substitui, a doutrina tradicional do renascimento)."
      },
      {
        id: "rupaloka",
        name: "Rūpaloka — O Reino da Matéria Sutil",
        planesCount: "16 Planos",
        description: "Planos exaltados de Brahmā alcançados pelo domínio das quatro absorções meditativas da matéria sutil (rūpa-jhāna). O desejo sensorial grosseiro é suspenso e os seres habitam em radiante serenidade mental.",
        subdivisions: [
          { name: "Brahmās do 1º Jhāna (3 planos)", detail: "Séquito, ministros e Grandes Brahmās (Mahābrahmā) imersos em serena majestade." },
          { name: "Brahmās do 2º Jhāna (3 planos)", detail: "Planos de esplendor e radiância fluida (Ābhassara), intocados por ciclos cósmicos de fogo." },
          { name: "Brahmās do 3º Jhāna (3 planos)", detail: "Planos de glória límpida e estável (Subhakiṇha) sustentados por felicidade serena." },
          { name: "Brahmās do 4º Jhāna e Moradas Puras (7 planos)", detail: "Inclui a Grande Recompensa (Vehapphala), Seres Inconscientes (Asaññasatta) e as Cinco Moradas Puras (Suddhāvāsa) reservadas a Não-retornantes (Anāgāmīs)." }
        ],
        doctrinalNote: "Salvaguarda Doutrinária: O Theravāda ensina que o jhāna oferece a condição para o renascimento em Brahmā, mas o renascimento é governado pelo kamma global. Mesmo vidas que duram éons cósmicos terminam na morte; a existência em Brahmā não é libertação definitiva."
      },
      {
        id: "arupaloka",
        name: "Arūpaloka — O Reino Imaterial",
        planesCount: "4 Planos",
        description: "O topo da existência condicionada, desprovido de qualquer forma física ou matéria. O renascimento nesses planos resulta do domínio dos quatro estados meditativos imateriais (arūpa-samāpatti).",
        subdivisions: [
          { name: "1. Espaço Infinito (Ākāsānañcāyatana)", detail: "Consciência que transcende a percepção da matéria para contemplar o espaço ilimitado." },
          { name: "2. Consciência Infinita (Viññāṇañcāyatana)", detail: "Voltar a atenção para a própria consciência ilimitada que apreende o espaço." },
          { name: "3. Nada Absoluto (Ākiñcaññāyatana)", detail: "Transcender a consciência para repousar na percepção de que 'não há absolutamente nada'." },
          { name: "4. Nem Percepção Nem Não-Percepção (Nevasaññānāsaññāyatana)", detail: "O estado mental mais sutil do saṁsāra, onde a percepção é tão tênue que quase cessa por completo." }
        ],
        reflectionQuestion: "Por que mesmo um estado de paz e refinamento tão extraordinário ainda é insuficiente se a ignorância e as causas do renascimento continuarem presentes?"
      }
    ]
  },

  // C. Interactive Exploration of the 31 Planes (PT)
  planesExplorer: {
    sectionTitle: "Explorador Interativo dos 31 Planos",
    sectionSubtitle: "A classificação Theravāda tradicional através dos Três Mundos",
    categoryFilterLabels: {
      all: "Todos os 31 Planos",
      kama: "Reino Sensual (1–11)",
      rupa: "Matéria Sutil (12–27)",
      arupa: "Imaterial (28–31)"
    },
    planesNotice: "Nota: Os 31 planos não são lugares permanentes, etapas de mérito moral compulsório ou degraus obrigatórios pelos quais toda alma deve passar em ordem. Representam modos condicionados de devir (bhava).",
    planes: [
      {
        id: "plane-1",
        number: 1,
        tier: "kama",
        subTier: "Quatro Estados de Privação (Apāya)",
        paliName: "Niraya",
        englishName: "Reinos de Sofrimento Extremo / Infernos",
        lifespan: "Variável, de milhares de anos a éons; determinado pelo kamma",
        kammaCause: "Ações prejudiciais graves: crueldade, ódio deliberado, cobiça obsessiva e visões nocivas",
        canonicalSources: "MN 129, MN 130 (Devadūta), SN 56.47",
        commentarialSources: "Visuddhimagga, Abhidhammattha-saṅgaha",
        characteristics: "Estados de extrema aflição onde seres esgotam kamma negativo pesado. Não é danação eterna; quando a causa se extingue, o ser renasce em outro plano.",
        reflection: "Como a raiva cega e o ódio visceral no cotidiano espelham a atmosfera de niraya?"
      },
      {
        id: "plane-2",
        number: 2,
        tier: "kama",
        subTier: "Quatro Estados de Privação (Apāya)",
        paliName: "Tiracchāna-yoni",
        englishName: "Reino Animal",
        lifespan: "Variável, de minutos (insetos) a séculos",
        kammaCause: "Ações dominadas por ilusão (moha), instinto cego, medo e compulsão biológica",
        canonicalSources: "MN 129, MN 135, SN 56.47",
        commentarialSources: "Dhammapada-aṭṭhakathā",
        characteristics: "Dinâmica predador-presa, medo constante de abate, ausência de capacidade para discernimento ético e filosófico.",
        reflection: "Quando abrimos mão da ética e reagimos puramente por instinto de sobrevivência, como nos aproximamos da mente animal?"
      },
      {
        id: "plane-3",
        number: 3,
        tier: "kama",
        subTier: "Quatro Estados de Privação (Apāya)",
        paliName: "Peta-visaya",
        englishName: "Reino dos Fantasmas Famintos",
        lifespan: "Indefinido; frequentemente milhares de anos até o kamma ser atenuado",
        kammaCause: "Avareza compulsiva, apego obsessivo a bens materiais, mesquinhez extrema",
        canonicalSources: "Khuddaka Nikāya (Petavatthu), SN 19",
        commentarialSources: "Paramatthadīpanī (Comentário ao Petavatthu)",
        characteristics: "Seres atormentados por fome e sede insaciáveis, com ventres imensos e gargantas tão estreitas quanto o orifício de uma agulha.",
        reflection: "Observe a fome do consumismo moderno: comprar sem cessar sem jamais sentir saciedade interior."
      },
      {
        id: "plane-4",
        number: 4,
        tier: "kama",
        subTier: "Quatro Estados de Privação (Apāya)",
        paliName: "Asura-kāya",
        englishName: "Reino dos Asuras (Titãs em Conflito)",
        lifespan: "Longevidade marcada por beligerância e inveja",
        kammaCause: "Competitividade agressiva, arrogância, inveja do mérito alheio, sede de poder",
        canonicalSources: "DN 20 (Mahāsamaya), SN 35.207, AN 7.72",
        commentarialSources: "Visuddhimagga",
        characteristics: "Seres belicosos em combate perpétuo contra os devas, dominados por ressentimento e desconfiança.",
        reflection: "Onde o impulso de competir e derrotar os outros me afasta da serenidade interior?"
      },
      {
        id: "plane-5",
        number: 5,
        tier: "kama",
        subTier: "Planos Felizes Sensuais (Kāma-sugati)",
        paliName: "Manussa-loka",
        englishName: "Reino Humano",
        lifespan: "Em média 100 anos na época do Buda; variável ao longo de ciclos",
        kammaCause: "Kamma benéfico baseado nos Cinco Preceitos Éticos (pañca-sīla) e generosidade",
        canonicalSources: "SN 56.48 (Tartaruga Cega), AN 8.54, AN 5.57",
        commentarialSources: "Abhidhammattha-saṅgaha",
        characteristics: "O solo supremo para a prática. O equilíbrio entre sofrimento e alegria estimula a urgência espiritual (saṁvega) e permite a realização do Nibbāna.",
        reflection: "Estou utilizando este raro renascimento humano para crescer no Dhamma ou desperdiçando-o em trivialidades?"
      },
      {
        id: "plane-6",
        number: 6,
        tier: "kama",
        subTier: "Céus dos Devas Sensuais",
        paliName: "Cātummahārājika",
        englishName: "Reino dos Quatro Grandes Reis",
        lifespan: "500 anos divinos (= 9 milhões de anos humanos)",
        kammaCause: "Generosidade sincera, proteção comunitária e respeito pelos preceitos",
        canonicalSources: "DN 20, DN 32, AN 3.70",
        commentarialSources: "Visuddhimagga",
        characteristics: "O plano celestial mais próximo da Terra, governado pelos quatro guardiões das direções cardeais.",
        reflection: "A postura de proteger e acolher os outros estabelece um refúgio luminoso na mente."
      },
      {
        id: "plane-7",
        number: 7,
        tier: "kama",
        subTier: "Céus dos Devas Sensuais",
        paliName: "Tāvatiṁsa",
        englishName: "Reino dos Trinta e Três (Reino de Sakka)",
        lifespan: "1.000 anos divinos (= 36 milhões de anos humanos)",
        kammaCause: "Serviço comunitário abnegado, cuidar de estradas e fontes de água, respeito aos pais",
        canonicalSources: "SN 11 (Sakka-saṁyutta), DN 21 (Sakkapañha)",
        commentarialSources: "Comentário ao Dhammapada",
        characteristics: "Presidido por Sakka, o rei dos deuses que busca instruções com o Buda. Jardins celestiais luminosos.",
        reflection: "O serviço desinteressado à comunidade eleva e pacifica o estado da consciência humana."
      },
      {
        id: "plane-8",
        number: 8,
        tier: "kama",
        subTier: "Céus dos Devas Sensuais",
        paliName: "Yāma",
        englishName: "Reino dos Devas Yāma (Alegria Plena)",
        lifespan: "2.000 anos divinos (= 144 milhões de anos humanos)",
        kammaCause: "Conduta moral pura, desapego das brigas mundanas e serenidade interior",
        canonicalSources: "AN 3.70, AN 8.36",
        commentarialSources: "Abhidhammattha-saṅgaha",
        characteristics: "Habitantes de um céu etéreo livre de conflitos, desfrutando de paz contínua.",
        reflection: "Quando a mente está limpa de remorso pela integridade ética, experimenta-se um céu interior."
      },
      {
        id: "plane-9",
        number: 9,
        tier: "kama",
        subTier: "Céus dos Devas Sensuais",
        paliName: "Tusita",
        englishName: "Céu dos Devas Satisfeitos / Contentamento",
        lifespan: "4.000 anos divinos (= 576 milhões de anos humanos)",
        kammaCause: "Vida de profunda virtude, estudo dedicado do Dhamma e altruísmo",
        canonicalSources: "MN 123, AN 3.70",
        commentarialSources: "Jātaka Nidānakathā",
        characteristics: "A morada onde os Bodhisattas aguardam sua encarnação final para se tornarem Budas. Ambiente de estudo do Dhamma.",
        reflection: "O verdadeiro contentamento (santuṭṭhi) não surge de possuir tudo, mas de viver em paz consigo mesmo."
      },
      {
        id: "plane-10",
        number: 10,
        tier: "kama",
        subTier: "Céus dos Devas Sensuais",
        paliName: "Nimmānaratī",
        englishName: "Devas que se Deleitam na Criação Própria",
        lifespan: "8.000 anos divinos (= 2,3 bilhões de anos humanos)",
        kammaCause: "Generosidade magnânima e alegria em manifestar o belo e o benéfico",
        canonicalSources: "AN 3.70, AN 8.36",
        commentarialSources: "Abhidhammattha-saṅgaha",
        characteristics: "Seres que moldam suas próprias manifestações de alegria mental e sensorial.",
        reflection: "A mente criativa é poderosa; quando alinhada ao bem, transforma positivamente o mundo ao redor."
      },
      {
        id: "plane-11",
        number: 11,
        tier: "kama",
        subTier: "Céus dos Devas Sensuais",
        paliName: "Paranimmitavasavattī",
        englishName: "Devas com Poder sobre as Criações Alheias",
        lifespan: "16.000 anos divinos (= 9,2 bilhões de anos humanos)",
        kammaCause: "Liderança ética suprema combinada com sutil apego ao comando",
        canonicalSources: "MN 49, AN 3.70, SN 4.25",
        commentarialSources: "Visuddhimagga",
        characteristics: "O pico do reino sensorial. Não precisam criar nada; outros produzem satisfações para eles.",
        reflection: "Mesmo a liderança cósmica mais exaltada está presa à roda do desejo e ao fim inevitável."
      },
      // 12-27: Rūpaloka
      {
        id: "plane-12",
        number: 12,
        tier: "rupa",
        subTier: "Planos do 1º Jhāna",
        paliName: "Brahmapārisajja",
        englishName: "Séquito de Brahmā",
        lifespan: "1/3 de asankheyya-kappa",
        kammaCause: "Atingir o 1º Jhāna em nível inicial",
        canonicalSources: "AN 4.123, AN 4.125",
        commentarialSources: "Abhidhammattha-saṅgaha",
        characteristics: "Habitantes serenos no círculo radiante de Brahmā, livres da agitação dos sentidos físicos.",
        reflection: "Quando o foco meditativo inicial aquieta o burburinho do desejo, uma clareza límpida se abre."
      },
      {
        id: "plane-13",
        number: 13,
        tier: "rupa",
        subTier: "Planos do 1º Jhāna",
        paliName: "Brahmapurohita",
        englishName: "Ministros de Brahmā",
        lifespan: "1/2 de asankheyya-kappa",
        kammaCause: "Atingir o 1º Jhāna com estabilidade intermediária",
        canonicalSources: "AN 4.123, AN 4.125",
        commentarialSources: "Abhidhammattha-saṅgaha",
        characteristics: "Conselheiros luminosos de Brahmā com serenidade e brilho aprofundados.",
        reflection: "A firmeza interior converte-se em sabedoria serena para orientar a vida."
      },
      {
        id: "plane-14",
        number: 14,
        tier: "rupa",
        subTier: "Planos do 1º Jhāna",
        paliName: "Mahābrahmā",
        englishName: "Os Grandes Brahmās",
        lifespan: "1 asankheyya-kappa completo",
        kammaCause: "Domínio superior do 1º Jhāna combinado com benevolência ilimitada (mettā)",
        canonicalSources: "DN 1 (Brahmajāla), DN 11 (Kevaddha), MN 49",
        commentarialSources: "Visuddhimagga",
        characteristics: "Seres majestosos que, por nascerem primeiro na renovação do mundo, equivocadamente imaginam ser o criador eterno (DN 1).",
        reflection: "A sutil armadilha espiritual: confundir um estado sublime de calma e poder com soberania eterna."
      },
      {
        id: "plane-15",
        number: 15,
        tier: "rupa",
        subTier: "Planos do 2º Jhāna",
        paliName: "Parittābha",
        englishName: "Brahmās de Radiância Limitada",
        lifespan: "2 kappas",
        kammaCause: "Desenvolvimento do 2º Jhāna (sem pensamento aplicado, com alegria meditativa)",
        canonicalSources: "AN 4.123, MN 120",
        commentarialSources: "Abhidhammattha-saṅgaha",
        characteristics: "Seres cuja aura emite luz contínua, superior à agitação do pensamento discursivo.",
        reflection: "Quando o tagarelar mental cessa na meditação, a luz natural da mente desponta."
      },
      {
        id: "plane-16",
        number: 16,
        tier: "rupa",
        subTier: "Planos do 2º Jhāna",
        paliName: "Appamāṇābha",
        englishName: "Brahmās de Radiância Ilimitada",
        lifespan: "4 kappas",
        kammaCause: "2º Jhāna cultivado com expansão vasta de luminosidade e alegria espiritual",
        canonicalSources: "AN 4.123, MN 120",
        commentarialSources: "Abhidhammattha-saṅgaha",
        characteristics: "Luminosidade imensurável que ilumina vastos quadrantes cósmicos.",
        reflection: "A bondade sem limites gera um clarão mental imensurável."
      },
      {
        id: "plane-17",
        number: 17,
        tier: "rupa",
        subTier: "Planos do 2º Jhāna",
        paliName: "Ābhassara",
        englishName: "Brahmās de Radiância Fluida",
        lifespan: "8 kappas",
        kammaCause: "Maestria no 2º Jhāna com êxtase espiritual límpido (pīti)",
        canonicalSources: "DN 27 (Aggañña), AN 4.123, AN 10.29",
        commentarialSources: "Visuddhimagga",
        characteristics: "Quando o cosmos inferior se contrai por fogo, os seres renascem em Ābhassara, nutrindo-se de alegria meditativa.",
        reflection: "A alegria que nasce da quietude interior é mais pura e estável do que qualquer euforia sensorial."
      },
      {
        id: "plane-18",
        number: 18,
        tier: "rupa",
        subTier: "Planos do 3º Jhāna",
        paliName: "Parittasubha",
        englishName: "Brahmās de Glória Serena Limitada",
        lifespan: "16 kappas",
        kammaCause: "3º Jhāna (felicidade sutil, equanimidade, sem a excitação do êxtase)",
        canonicalSources: "AN 4.123, MN 120",
        commentarialSources: "Abhidhammattha-saṅgaha",
        characteristics: "Seres com luminescência dourada constante e serena.",
        reflection: "Avançar além dos picos de empolgação emocional para alcançar a felicidade calma e estável."
      },
      {
        id: "plane-19",
        number: 19,
        tier: "rupa",
        subTier: "Planos do 3º Jhāna",
        paliName: "Appamāṇasubha",
        englishName: "Brahmās de Glória Ilimitada",
        lifespan: "32 kappas",
        kammaCause: "3º Jhāna desenvolvido com equanimidade profunda e imensurável",
        canonicalSources: "AN 4.123, MN 120",
        commentarialSources: "Abhidhammattha-saṅgaha",
        characteristics: "Paz imutável intocada pela destruição cíclica da água cósmica.",
        reflection: "Felicidade quieta e despojada que não precisa provar nada a ninguém."
      },
      {
        id: "plane-20",
        number: 20,
        tier: "rupa",
        subTier: "Planos do 3º Jhāna",
        paliName: "Subhakiṇha",
        englishName: "Brahmās de Glória Refulgente Constante",
        lifespan: "64 kappas",
        kammaCause: "Maestria máxima no 3º Jhāna",
        canonicalSources: "AN 4.123, AN 10.29",
        commentarialSources: "Visuddhimagga",
        characteristics: "O cume do bem-estar na matéria sutil; sua luz é estável como a chama de uma lamparina protegida do vento.",
        reflection: "Mesmo 64 éons cósmicos de serenidade ininterrupta terminarão quando o kamma causal se esgotar."
      },
      {
        id: "plane-21",
        number: 21,
        tier: "rupa",
        subTier: "Planos do 4º Jhāna",
        paliName: "Vehapphala",
        englishName: "Brahmās da Grande Recompensa",
        lifespan: "500 mahā-kappas",
        kammaCause: "4º Jhāna cultivado com pura equanimidade e atenção lúcida (upekkhā-satipārisuddhi)",
        canonicalSources: "AN 4.123, MN 120",
        commentarialSources: "Abhidhammattha-saṅgaha",
        characteristics: "O principal destino dos seres comuns que dominam o 4º Jhāna. Intocado por vendavais cósmicos.",
        reflection: "A equanimidade é o escudo inabalável do coração, que não se abala com louvores nem com críticas."
      },
      {
        id: "plane-22",
        number: 22,
        tier: "rupa",
        subTier: "Planos do 4º Jhāna",
        paliName: "Asaññasatta",
        englishName: "Seres Inconscientes",
        lifespan: "500 mahā-kappas",
        kammaCause: "4º Jhāna cultivado com a crença de que a consciência é a única raiz do sofrimento; desejo de suprimir o pensamento",
        canonicalSources: "DN 1, DN 33",
        commentarialSources: "Visuddhimagga",
        characteristics: "Seres que subsistem como pura matéria corporal sem processos conscientes. Ao fim do kamma, um pensamento ressurge e eles renascem.",
        reflection: "Alerta doutrinário: a mera supressão do pensamento ou o vazio mental não é libertação; o despertar exige sabedoria (paññā)."
      },
      {
        id: "plane-23",
        number: 23,
        tier: "rupa",
        subTier: "As Moradas Puras (Suddhāvāsa)",
        paliName: "Avihā",
        englishName: "Os Duráveis / Imutáveis",
        lifespan: "1.000 mahā-kappas",
        kammaCause: "Conquista do estágio de Não-retornante (Anāgāmī) com a faculdade da fé (saddhā) predominante",
        canonicalSources: "SN 56.11, DN 14, MN 120",
        commentarialSources: "Visuddhimagga",
        characteristics: "O primeiro dos cinco planos puros exclusivos para Não-retornantes, que alcançam o Arahantado ali sem retornar ao mundo sensual.",
        reflection: "A fé enraizada no discernimento direto nunca retrocede para a escravidão dos sentidos."
      },
      {
        id: "plane-24",
        number: 24,
        tier: "rupa",
        subTier: "As Moradas Puras (Suddhāvāsa)",
        paliName: "Atappā",
        englishName: "Os Serenos / Sem Aflição",
        lifespan: "2.000 mahā-kappas",
        kammaCause: "Não-retornante com predominância da energia perseverante (viriya)",
        canonicalSources: "DN 14, MN 120",
        commentarialSources: "Visuddhimagga",
        characteristics: "Seres que não causam aflição a si mesmos nem aos outros, meditando até o desatamento final.",
        reflection: "A autêntica energia espiritual é serena e contínua, sem ansiedade ou pressa."
      },
      {
        id: "plane-25",
        number: 25,
        tier: "rupa",
        subTier: "As Moradas Puras (Suddhāvāsa)",
        paliName: "Sudassā",
        englishName: "Os Claramente Visíveis / Belos",
        lifespan: "4.000 mahā-kappas",
        kammaCause: "Não-retornante com predominância da atenção plena (sati)",
        canonicalSources: "DN 14, MN 120",
        commentarialSources: "Visuddhimagga",
        characteristics: "Percepção translúcida onde todas as formações são vistas como impermanentes e vazias de um eu.",
        reflection: "A atenção pura torna a realidade transparente e liberta de ilusões."
      },
      {
        id: "plane-26",
        number: 26,
        tier: "rupa",
        subTier: "As Moradas Puras (Suddhāvāsa)",
        paliName: "Sudassī",
        englishName: "Os de Visão Clara",
        lifespan: "8.000 mahā-kappas",
        kammaCause: "Não-retornante com predominância da concentração profunda (samādhi)",
        canonicalSources: "DN 14, MN 120",
        commentarialSources: "Visuddhimagga",
        characteristics: "A concentração contínua penetra sem esforço a teia causal de todas as formações mentais.",
        reflection: "A concentração límpida é um espelho que reflete as coisas com exatidão."
      },
      {
        id: "plane-27",
        number: 27,
        tier: "rupa",
        subTier: "As Moradas Puras (Suddhāvāsa)",
        paliName: "Akaniṭṭhā",
        englishName: "O Mais Alto / Incomparável",
        lifespan: "16.000 mahā-kappas",
        kammaCause: "Não-retornante com predominância da sabedoria direta (paññā)",
        canonicalSources: "DN 14, MN 120, SN 56.11",
        commentarialSources: "Visuddhimagga",
        characteristics: "O zênite do reino da matéria sutil. Os Não-retornantes dissolvem os últimos cinco grilhões e realizam o Parinibbāna.",
        reflection: "A sabedoria liberta de todos os apegos é o portal definitivo para a paz incondicionada."
      },
      // 28-31: Arūpaloka
      {
        id: "plane-28",
        number: 28,
        tier: "arupa",
        subTier: "Planos Imateriais (Arūpa-bhūmi)",
        paliName: "Ākāsānañcāyatana",
        englishName: "Esfera do Espaço Infinito",
        lifespan: "20.000 mahā-kappas",
        kammaCause: "Domínio do 1º Jhāna Imaterial, superando qualquer percepção de forma ou diversidade física",
        canonicalSources: "MN 26, DN 15, MN 120",
        commentarialSources: "Visuddhimagga",
        characteristics: "Existência sem corpo físico; consciência pura imersa no espaço ilimitado.",
        reflection: "O espaço não possui limites; quando a mente abandona as barreiras corporais, a vastidão se revela — mas até o espaço é condicionado."
      },
      {
        id: "plane-29",
        number: 29,
        tier: "arupa",
        subTier: "Planos Imateriais (Arūpa-bhūmi)",
        paliName: "Viññāṇañcāyatana",
        englishName: "Esfera da Consciência Infinita",
        lifespan: "40.000 mahā-kappas",
        kammaCause: "Domínio do 2º Jhāna Imaterial, focando na própria consciência sem limites que percebe o espaço",
        canonicalSources: "DN 15, MN 120",
        commentarialSources: "Visuddhimagga",
        characteristics: "A consciência contemplando a si mesma sem ancoragem em matéria.",
        reflection: "A consciência pode se auto-observar, mas ainda é um processo condicionado."
      },
      {
        id: "plane-30",
        number: 30,
        tier: "arupa",
        subTier: "Planos Imateriais (Arūpa-bhūmi)",
        paliName: "Ākiñcaññāyatana",
        englishName: "Esfera do Nada Absoluto",
        lifespan: "60.000 mahā-kappas",
        kammaCause: "Domínio do 3º Jhāna Imaterial (atingido pelo primeiro mestre do Buda, Āḷāra Kālāma)",
        canonicalSources: "MN 26, DN 15, MN 120",
        commentarialSources: "Visuddhimagga",
        characteristics: "Repouso na percepção sutil de que 'não há absolutamente coisa alguma'.",
        reflection: "Mesmo a vacuidade refinada não é o Nibbāna se ainda houver sutil identificação do eu com o nada."
      },
      {
        id: "plane-31",
        number: 31,
        tier: "arupa",
        subTier: "Planos Imateriais (Arūpa-bhūmi)",
        paliName: "Nevasaññānāsaññāyatana",
        englishName: "Esfera da Nem Percepção Nem Não-Percepção",
        lifespan: "84.000 mahā-kappas",
        kammaCause: "Domínio do 4º Jhāna Imaterial (atingido por Uddaka Rāmaputta)",
        canonicalSources: "MN 26, DN 15, MN 120",
        commentarialSources: "Visuddhimagga",
        characteristics: "O cume absoluto do saṁsāra. As formações mentais são tão sutis que mal se distinguem. Contudo, após 84.000 éons, o ser renasce em planos inferiores.",
        reflection: "O Buda partiu de Uddaka Rāmaputta porque esse topo supremo não conduzia à cessação final do sofrimento."
      }
    ]
  },

  // D. Essential Sutta Library (PT)
  suttaLibrary: {
    sectionTitle: "Biblioteca de Suttas Fundamentais",
    sectionSubtitle: "15 discursos canônicos sobre cosmologia, kamma, reinos divinos e a rara oportunidade humana",
    searchPlaceholder: "Pesquisar por código, título, tema ou termo Pāli...",
    filterCategories: [
      { id: "all", label: "Todos os Suttas (15)" },
      { id: "cosmology", label: "Cosmologia & Escala (3)" },
      { id: "kamma", label: "Kamma & Renascimento (4)" },
      { id: "devas", label: "Devas & Limites Celestes (4)" },
      { id: "human", label: "Vida Humana & Prática (4)" }
    ],
    suttas: [
      {
        code: "DN 27",
        paliTitle: "Aggañña Sutta",
        transTitle: "Discurso sobre o Conhecimento das Origens",
        nikaya: "Dīgha Nikāya",
        category: "cosmology",
        level: "intermediate",
        readingTime: "18 min",
        importance: "Narrativa canônica detalhando a contração e expansão do mundo, como seres luminosos de Ābhassara descem e como castas e instituições sociais surgem de convenções e desejos.",
        layRelevance: "Desmistifica o preconceito social e orgulho de casta: a hierarquia social é uma convenção construída e não decreto divino.",
        keyConcepts: ["Contração Cósmica", "Expansão Cósmica", "Seres de Ābhassara", "Convenções Sociais"],
        suttaCentralUrl: "https://suttacentral.net/dn27/en/sujato",
        studyNotes: "O Buda demonstra que a nobreza real provém da conduta moral e da sabedoria, não do nascimento.",
        reflectionQuestion: "Como as convenções sociais e corporativas modernas reproduzem ilusões de superioridade herdada?"
      },
      {
        code: "DN 1",
        paliTitle: "Brahmajāla Sutta",
        transTitle: "A Rede Universal de Visões",
        nikaya: "Dīgha Nikāya",
        category: "cosmology",
        level: "advanced",
        readingTime: "30 min",
        importance: "Classificação das 62 visões especulativas sobre a eternidade do universo, o destino da alma e o escopo da metafísica.",
        layRelevance: "Ensina discernimento contra dogmas cósmicos e revela como memórias parciais de vidas passadas levaram filósofos a crer num criador eterno.",
        keyConcepts: ["62 Visões", "Especulação Metafísica", "Contato como Condição", "Ilusão de Mahābrahmā"],
        suttaCentralUrl: "https://suttacentral.net/dn1/en/sujato",
        studyNotes: "O Buda aponta que todas as teorias metafísicas são enraizadas em contato sensorial (phassa) e desejo de autoafirmação.",
        reflectionQuestion: "Estou apegado a teorias intelectuais sobre o cosmos ou observando como os pensamentos surgem agora?"
      },
      {
        code: "AN 3.80",
        paliTitle: "Cūḷanikā Sutta",
        transTitle: "O Menor Discurso sobre o Cosmos de Mil Mundos",
        nikaya: "Aṅguttara Nikāya",
        category: "cosmology",
        level: "intermediate",
        readingTime: "6 min",
        importance: "O Buda expõe a escala multidimensional do cosmos: galáxias menores de mil mundos até sistemas bilionários.",
        layRelevance: "Inspira humildade cósmica sem sugerir que viajar pelo universo físico substitua a purificação da mente.",
        keyConcepts: ["Galáxias de Mil Mundos", "Escala Cósmica", "Voz do Buda pelos Reinos", "Cosmos Bilionário"],
        suttaCentralUrl: "https://suttacentral.net/an3.80/en/sujato",
        studyNotes: "A vastidão espacial é imensa, mas o alcance da mente desperta transcende todas as dimensões físicas.",
        reflectionQuestion: "Como a percepção da pequenez da Terra no cosmos ajuda a dissolver o estresse egóico diário?"
      },
      {
        code: "MN 135",
        paliTitle: "Cūḷakammavibhaṅga Sutta",
        transTitle: "A Pequena Análise da Ação",
        nikaya: "Majjhima Nikāya",
        category: "kamma",
        level: "beginner",
        readingTime: "10 min",
        importance: "O jovem Subha pergunta por que os seres diferem em saúde, longevidade, beleza, prestígio e riqueza. O Buda explica as raízes de kamma.",
        layRelevance: "Estimula sobriedade moral e responsabilidade. Não deve ser usado para culpar vítimas de doenças ou injustiças.",
        keyConcepts: ["Herdeiros de Nossas Ações", "Intenção e Fruto", "Raízes da Saúde e Riqueza", "Não-Violência"],
        suttaCentralUrl: "https://suttacentral.net/mn135/en/sujato",
        studyNotes: "Os seres são donos e herdeiros de suas ações; a conduta ética determina o destino.",
        reflectionQuestion: "Consigo assumir plena responsabilidade por minhas escolhas sem cair em julgamento orgulhoso dos outros?"
      },
      {
        code: "MN 136",
        paliTitle: "Mahākammavibhaṅga Sutta",
        transTitle: "A Grande Análise da Ação",
        nikaya: "Majjhima Nikāya",
        category: "kamma",
        level: "advanced",
        readingTime: "16 min",
        importance: "Corrige visões ingênuas sobre o kamma, mostrando que pessoas com atos ruins podem renascer em céus e pessoas boas podem renascer em sofrimento devido a outras causas ou à mente no leito de morte.",
        layRelevance: "Evita o cinismo quando pessoas desonestas parecem prosperar no curto prazo; a lei causal opera em teias profundas e extensas.",
        keyConcepts: ["Complexidade do Kamma", "Quatro Tipos de Pessoas", "Kamma Passado e na Morte", "Superação de Regras Simplistas"],
        suttaCentralUrl: "https://suttacentral.net/mn136/en/sujato",
        studyNotes: "O kamma é uma corrente complexa de condições, não uma máquina automática de recompensa imediata.",
        reflectionQuestion: "Espero recompensas imediatas para cada boa atitude ou confio na maturação profunda da integridade ética?"
      },
      {
        code: "AN 6.63",
        paliTitle: "Nibbedhika Sutta",
        transTitle: "Discurso da Penetração",
        nikaya: "Aṅguttara Nikāya",
        category: "kamma",
        level: "beginner",
        readingTime: "7 min",
        importance: "A definição canônica definitiva de kamma: 'Intenção (cetanā), ó monges, é o que chamo de kamma. Tendo a intenção, age-se pelo corpo, fala ou mente.'",
        layRelevance: "Fundamental para a ética prática: acidentes sem intenção não criam kamma negativo. A intenção é a alma de cada ato.",
        keyConcepts: ["Cetanā é Kamma", "Intenção Consciente", "Cessação do Kamma pelo Nobre Caminho"],
        suttaCentralUrl: "https://suttacentral.net/an6.63/en/sujato",
        studyNotes: "O kamma cessa quando a cobiça, a raiva e a ilusão são extintas através do Nobre Caminho Óctuplo.",
        reflectionQuestion: "Qual intenção secreta estava por trás das minhas palavras ou escolhas mais recentes?"
      },
      {
        code: "SN 15.3",
        paliTitle: "Tiṇakaṭṭha Sutta",
        transTitle: "Gravetos e Capim",
        nikaya: "Saṁyutta Nikāya",
        category: "kamma",
        level: "beginner",
        readingTime: "4 min",
        importance: "Similes evocativos: todas as lágrimas derramadas no saṁsāra superam as águas dos oceanos.",
        layRelevance: "Desperta urgência espiritual e profunda compaixão por todos os seres, que já foram nossos pais e irmãos em éons passados.",
        keyConcepts: ["Saṁsāra Sem Começo", "Oceano de Lágrimas", "Leite Materno", "Urgência Espiritual (Saṁvega)"],
        suttaCentralUrl: "https://suttacentral.net/sn15.3/en/sujato",
        studyNotes: "A reflexão sobre a vastidão do sofrimento inspira desapego e soltura de querelas superficiais.",
        reflectionQuestion: "Se o estranho que me irritou já foi minha mãe em vidas passadas, como posso tratá-lo com gentileza?"
      },
      {
        code: "DN 11",
        paliTitle: "Kevaddha Sutta",
        transTitle: "A Kevaddha",
        nikaya: "Dīgha Nikāya",
        category: "devas",
        level: "intermediate",
        readingTime: "15 min",
        importance: "Um monge percorre os céus perguntando onde os quatro elementos cessam. O Grande Brahmā admite em segredo que não sabe e o encaminha ao Buda.",
        layRelevance: "Desmistifica deuses cósmicos: nenhum ser celestial possui a sabedoria libertadora que extingue o sofrimento.",
        keyConcepts: ["Cessação dos Elementos", "Limitação de Mahābrahmā", "O Milagre do Ensinamento"],
        suttaCentralUrl: "https://suttacentral.net/dn11/en/sujato",
        studyNotes: "O Buda esclarece que os elementos cessam onde a consciência não tem apoio na cobiça nem na forma.",
        reflectionQuestion: "Estou buscando salvação em forças externas ou na purificação da minha própria mente?"
      },
      {
        code: "DN 13",
        paliTitle: "Tevijja Sutta",
        transTitle: "O Conhecimento Tríplice",
        nikaya: "Dīgha Nikāya",
        category: "devas",
        level: "intermediate",
        readingTime: "14 min",
        importance: "Jovens debatem o caminho para a união com Brahmā. O Buda revela que o verdadeiro caminho é cultivar as Quatro Moradas Sublimes (Brahmavihāras).",
        layRelevance: "Conecta a elevação espiritual ao amor-bondade, compaixão, alegria apreciativa e equanimidade no cotidiano.",
        keyConcepts: ["União com Brahmā", "Crítica a Rituais Cegos", "Quatro Brahmavihāras"],
        suttaCentralUrl: "https://suttacentral.net/dn13/en/sujato",
        studyNotes: "Brahmā não tem ira nem apego; para se aproximar de Brahmā, viva com amor e equanimidade universais.",
        reflectionQuestion: "Consigo irradiar amor-bondade irrestrito para todas as direções da minha cidade antes de sair de casa?"
      },
      {
        code: "MN 49",
        paliTitle: "Brahmanimantanika Sutta",
        transTitle: "O Convite de Brahmā",
        nikaya: "Majjhima Nikāya",
        category: "devas",
        level: "advanced",
        readingTime: "16 min",
        importance: "Baka Brahmā crê que seu reino é eterno e supremo. O Buda vai até seu plano para dissolver essa perigosa ilusão de permanência.",
        layRelevance: "Alerta para não confundir serenidade meditativa refinada com a libertação definitiva do Nibbāna.",
        keyConcepts: ["Ilusão de Baka Brahmā", "Limites da Matéria Sutil", "O Incondicionado Além de Brahmā"],
        suttaCentralUrl: "https://suttacentral.net/mn49/en/sujato",
        studyNotes: "O Buda revela que conhece os reinos acima de Brahmā e a cessação última de toda existência condicionada.",
        reflectionQuestion: "Confundi uma fase emocional calma e agradável com iluminação espiritual definitiva?"
      },
      {
        code: "AN 4.77",
        paliTitle: "Acinteyya Sutta",
        transTitle: "Os Impensáveis",
        nikaya: "Aṅguttara Nikāya",
        category: "devas",
        level: "beginner",
        readingTime: "3 min",
        importance: "Quatro temas incompreensíveis para mentes não iluminadas: o alcance de um Buda, do jhāna, do kamma e a especulação cósmica.",
        layRelevance: "Promove sanidade mental e sobriedade: focar no treino ético do presente em vez de obsessões metafísicas estéreis.",
        keyConcepts: ["Quatro Impensáveis", "Limites do Pensamento Lógico", "Inescrutabilidade do Kamma"],
        suttaCentralUrl: "https://suttacentral.net/an4.77/en/sujato",
        studyNotes: "Tentar calcular mentalmente todos os karmas de vidas passadas leva ao esgotamento mental desnecessário.",
        reflectionQuestion: "Estou desperdiçando energia tentando decifrar charadas metafísicas que não cessam o sofrimento?"
      },
      {
        code: "SN 56.48",
        paliTitle: "Chiggala Sutta",
        transTitle: "O Orifício no Jugo (Tartaruga Cega)",
        nikaya: "Saṁyutta Nikāya",
        category: "human",
        level: "beginner",
        readingTime: "3 min",
        importance: "A raridade cósmica astronômica do nascimento humano acompanhado do encontro com o verdadeiro Dhamma.",
        layRelevance: "Desperta da complacência: a vida humana é uma bênção rara que não deve ser jogada fora em futilidades.",
        keyConcepts: ["Tartaruga Cega", "Raridade da Vida Humana", "Oportunidade do Dhamma"],
        suttaCentralUrl: "https://suttacentral.net/sn56.48/en/sujato",
        studyNotes: "Encaixar o pescoço no jugo é quase impossível; renascer como humano com lucidez é ainda mais extraordinário.",
        reflectionQuestion: "Sabendo quão rara é esta existência humana, o que priorizarei nos anos que me restam?"
      },
      {
        code: "AN 8.54",
        paliTitle: "Dīghajāṇu Sutta",
        transTitle: "Condições de Bem-Estar para os Leigos",
        nikaya: "Aṅguttara Nikāya",
        category: "human",
        level: "beginner",
        readingTime: "8 min",
        importance: "O Buda ensina a Dīghajāṇu quatro fatores para o sucesso nesta vida (diligência, proteção, amizade nobre, equilíbrio) e quatro para vidas futuras.",
        layRelevance: "Conecta cosmologia e rotina financeira doméstica: administrar com sobriedade os recursos materiais e espirituais.",
        keyConcepts: ["Bem-Estar no Lar", "Gestão Financeira Consciente", "Amizade Virtuosa", "Fé e Sabedoria"],
        suttaCentralUrl: "https://suttacentral.net/an8.54/en/sujato",
        studyNotes: "O Buda não exige que os leigos abandonem suas famílias, mas que governem o lar com ética e discernimento.",
        reflectionQuestion: "Minha gestão financeira doméstica é equilibrada e convivo com amizades que apoiam meu crescimento moral?"
      },
      {
        code: "AN 5.57",
        paliTitle: "Upajjhaṭṭhana Sutta",
        transTitle: "Temas para Frequente Recordação",
        nikaya: "Aṅguttara Nikāya",
        category: "human",
        level: "beginner",
        readingTime: "5 min",
        importance: "As Cinco Recordações Diárias que todos devem contemplar: envelhecimento, enfermidade, morte, separação e herança do kamma.",
        layRelevance: "Prática diária essencial que corta a soberba da juventude e a distração mental mundana.",
        keyConcepts: ["Cinco Recordações", "Sujeito ao Envelhecimento", "Herdeiro das Ações"],
        suttaCentralUrl: "https://suttacentral.net/an5.57/en/sujato",
        studyNotes: "Lembrar diariamente que somos donos das nossas ações dissipa a negligência e firma a prática ética.",
        reflectionQuestion: "Recite as Cinco Recordações: de que forma encarar o fim inevitável transforma minhas prioridades hoje?"
      },
      {
        code: "DN 16",
        paliTitle: "Mahāparinibbāna Sutta",
        transTitle: "O Grande Discurso da Extinção Final",
        nikaya: "Dīgha Nikāya",
        category: "human",
        level: "advanced",
        readingTime: "35 min",
        importance: "Relato dos últimos momentos do Buda, o abalo dos planos cósmicos e sua exortação final sobre a vigilância diligente.",
        layRelevance: "A ordem final: 'Todas as formações condicionadas são perecíveis; empenhem-se com diligência (appamādena sampādetha)'.",
        keyConcepts: ["Impermanência das Formações", "Empenho Diligente", "O Dhamma como Guia Supremo"],
        suttaCentralUrl: "https://suttacentral.net/dn16/en/sujato",
        studyNotes: "Até mesmo o corpo do Buda se dissolveu no tempo; o Dhamma praticado é o único refúgio seguro.",
        reflectionQuestion: "Como colocarei em prática a recomendação final do Buda: 'Empenhem-se com vigilância'?"
      }
    ]
  },

  // E. Lay Scenarios (PT)
  layScenarios: {
    sectionTitle: "O que a Cosmologia Budista Significa para o Dia a Dia",
    sectionSubtitle: "Traduzindo a perspectiva cósmica em responsabilidade ética, resiliência emocional e compaixão no lar",
    scenarios: [
      {
        id: "cosmo-sc-1",
        number: "01",
        title: "Raiva, Rancor e Linguagem Nociva",
        narrative: "Em uma disputa familiar ou conflito profissional tenso, alguém ataca sua integridade com mentiras. Surge o ímpeto violento de destruir a reputação da pessoa com vingança.",
        dhammaPrinciple: "A raiva repetida e a intenção de ferir moldam uma mente idêntica aos reinos de sofrimento (niraya). A intenção é kamma (AN 6.63). Retrucar com agressividade não vence o ódio, apenas acorrenta ambos a um ciclo descendente.",
        practicalExercise: "Aplique os Brahmavihāras (DN 13): Pause por 10 respirações conscientes. Reconheça: 'A raiva surgiu. Se eu falar sob seu efeito, dispararei uma flecha envenenada.' Guarde a fala correta e responda com clareza objetiva sem calúnia.",
        reflectionQuestion: "Se cada palavra agressiva constrói minha futura habitação mental, que reino estou construindo agora?",
        suttas: ["AN 6.63", "DN 13", "MN 21"]
      },
      {
        id: "cosmo-sc-2",
        number: "02",
        title: "Generosidade, Bens Materiais e Sustento",
        narrative: "Você recebe um bônus no trabalho ou lucro nos negócios. Colegas sugerem gastar com ostentação, enquanto uma instituição de caridade solicita apoio.",
        dhammaPrinciple: "A generosidade desinteressada (dāna) planta condições para o bem-estar e renascimento feliz. Contudo, AN 8.54 ensina que a generosidade do leigo deve ser equilibrada, sem desamparar a família nem comprometer a subsistência do lar.",
        practicalExercise: "Pratique a divisão quádrupla do Sigālovāda Sutta (DN 31): 1 parte para o sustento diário, 2 partes reinvestidas no trabalho honesto e 1 parte guardada para emergências, doando com alegria a sobra sem vaidade.",
        reflectionQuestion: "Consigo doar com coração sereno, sem transformar o donativo em palco para o meu próprio ego?",
        suttas: ["AN 8.54", "AN 4.62", "DN 31"]
      },
      {
        id: "cosmo-sc-3",
        number: "03",
        title: "Prestígio, Riqueza e Desejos Celestes",
        narrative: "Você se pega contemplando pessoas influentes e bilionárias, desejando ter renascido em berço de ouro com facilidades infindáveis e luxo.",
        dhammaPrinciple: "Desejar um renascimento rico ou celestial pode motivar virtudes, mas DN 11 e MN 49 alertam que até os céus são impermanentes. Ao término do mérito, os seres decaem. O propósito do Dhamma é a cessação do sofrimento, não o luxo passageiro.",
        practicalExercise: "Contemple a impermanência do luxo: impérios caem e a juventude se esvai. Mude sua aspiração de 'um renascimento confortável' para 'a libertação do apego e da ilusão'.",
        reflectionQuestion: "Estou encarando o Dhamma como passaporte para o luxo ou como o caminho para erradicar a cobiça?",
        suttas: ["DN 11", "MN 49", "SN 15.3"]
      },
      {
        id: "cosmo-sc-4",
        number: "04",
        title: "Enfermidade, Deficiência, Pobreza e Adversidade",
        narrative: "Um amigo ou vizinho enfrenta uma grave doença degenerativa ou ruína financeira. Alguém sugere: 'Deve ser o fruto do kamma ruim dele.'",
        dhammaPrinciple: "SALVAGUARDA DOUTRINÁRIA ESSENCIAL: O Buda refutou enfaticamente a teoria de que todo sofrimento vem de vidas passadas (SN 36.21). Dores surgem de infecções, causas biológicas, clima e acidentes. É terminantemente proibido culpar vítimas de infortúnios por suposto kamma pretérito.",
        practicalExercise: "Nunca julgue a adversidade do outro. Responda imediatamente com compaixão ativa (karuṇā), suporte prático, remédios e solidariedade fraterna.",
        reflectionQuestion: "Como posso erradicar qualquer vestígio de julgamento arrogante e substituí-lo por compaixão prática incondicional?",
        suttas: ["SN 36.21", "MN 136", "AN 4.77"]
      },
      {
        id: "cosmo-sc-5",
        number: "05",
        title: "Diante da Morte, do Luto e do Mistério",
        narrative: "Receber um diagnóstico preocupante ou perder um ente querido desperta angústia: 'Para onde vou após a morte? O que restará?'",
        dhammaPrinciple: "A reflexão sobre a morte (maraṇassati) é ensinada para gerar sobriedade, não terror neurótico. AN 5.57 nos convida a investir naquilo que realmente nos protege: intenções nobres, conduta íntegra e sabedoria interior.",
        practicalExercise: "Recite a quinta recordação: 'Sou dono das minhas ações, herdeiro das minhas ações.' Busque refúgio na mente serena, perdoe mágoas antigas e firme a consciência no desapego lúcido.",
        reflectionQuestion: "Quando chegar a hora de soltar este corpo físico, minha mente estará ancorada na paz da não-reatividade?",
        suttas: ["AN 5.57", "SN 56.48", "DN 16"]
      }
    ]
  },

  // F. Kamma & Decision Exercise (PT)
  kammaSection: {
    sectionTitle: "Kamma, Renascimento e Responsabilidade Ética",
    sectionSubtitle: "O motor causal da existência: intenção, maturação e libertação",
    leadText: "O kamma não é destino cego nem punição cósmica. No Budismo Theravāda, o kamma é a lei natural de causa e efeito moral movida pela intenção (cetanā).",
    corePrinciples: [
      {
        title: "Kamma como Intenção Deliberada",
        detail: "Ações corporais, verbais ou mentais feitas com intenção geram frutos. Atos involuntários sem intenção consciente não geram sementes kármicas (AN 6.63)."
      },
      {
        title: "Diferença entre Ação (Kamma) e Fruto (Vipāka)",
        detail: "Kamma é o plantio ativo do agora; vipāka é a colheita experiencial passiva. Você sempre tem liberdade soberana de escolha sobre o presente."
      },
      {
        title: "A Maturação Kármica Não é Simplista",
        detail: "O kamma pode maturar nesta vida, na próxima ou em vidas futuras quando as condições convergirem (MN 136)."
      },
      {
        title: "Nenhuma Alma Substancial Transmigra",
        detail: "O renascimento não é uma alma que troca de corpo; é um fluxo contínuo de consciência causal (viññāṇa-sota), como a chama de uma vela que acende outra."
      }
    ],
    decisionExercise: {
      title: "Exercício Interativo de Decisão Ética",
      subtitle: "Observe o momentum kármico de escolhas reais na vida cotidiana",
      dilemmas: [
        {
          id: "dilemma-1",
          situation: "Falar a verdade quando uma mentira conveniente evitaria constrangimento no trabalho.",
          options: [
            { text: "Mentir para proteger a imagem imediata", momentum: "Fortalece a mentira habitual e o medo; planta desconfiança e insegurança futura." },
            { text: "Dizer a verdade com humildade e oferecer solução prática", momentum: "Cultiva a Fala Correta (sammā-vācā); estabelece firmeza moral e confiabilidade." }
          ]
        },
        {
          id: "dilemma-2",
          situation: "Responder a uma ofensa verbal ríspida em família.",
          options: [
            { text: "Retrucar com sarcasmo ferino", momentum: "Alimenta o fogo da aversão; vincula a mente à hostilidade recíproca." },
            { text: "Pausar, respirar e não devolver o ataque", momentum: "Quebra o elo kármico; cultiva a paciência sublime (khanti-pāramī)." }
          ]
        },
        {
          id: "dilemma-3",
          situation: "Um pedido de doação que comprometeria suas reservas financeiras de emergência.",
          options: [
            { text: "Doar impulsivamente além das forças para parecer generoso", momentum: "Gera instabilidade financeira e ansiedade doméstica (AN 8.54)." },
            { text: "Doar um valor sincero e equilibrado, protegendo a subsistência do lar", momentum: "Generosidade consciente e equilibrada (dāna) alinhada à boa governança leiga." }
          ]
        },
        {
          id: "dilemma-4",
          situation: "Oportunidade de assumir os créditos pelo trabalho árduo de um colega.",
          options: [
            { text: "Ficar calado e receber os elogios indevidos", momentum: "Violação ética de tomar o que não foi dado; planta vulnerabilidade futura." },
            { text: "Reconhecer publicamente a contribuição e dedicação do colega", momentum: "Cultiva alegria apreciativa (muditā) e integridade nobre no ambiente profissional." }
          ]
        },
        {
          id: "dilemma-5",
          situation: "Cansaço físico e indisposição em um dia de muitas demandas.",
          options: [
            { text: "Reclamar com raiva do corpo e entrar em desespero", momentum: "Dispara a segunda flecha emocional contra si mesmo (SN 36.6)." },
            { text: "Cuidar do corpo com repouso consciente contemplando a impermanência", momentum: "Sabedoria investigando a natureza da matéria (rūpa)." }
          ]
        },
        {
          id: "dilemma-6",
          situation: "Impulso de compras compulsivas tarde da noite na internet.",
          options: [
            { text: "Comprar imediatamente para anestesiar o tédio", momentum: "Alimenta a fome insaciável do hábito fantasma (taṇhā)." },
            { text: "Notar o impulso, desligar a tela e respirar conscientemente", momentum: "Fortalece a contenção dos sentidos e a paz do contentamento interior." }
          ]
        }
      ]
    }
  },

  // G. Beyond the Planes (PT)
  beyondPlanes: {
    sectionTitle: "Nibbāna Não É Outro Reino",
    sectionSubtitle: "A realidade incondicionada que transcende todas as dimensões cosmológicas",
    leadText: "O objetivo supremo do Budismo Theravāda NÃO é conquistar uma vaga no céu mais alto. O Nibbāna não é o plano número 32.",
    points: [
      {
        title: "Toda Existência Condicionada é Perecível",
        detail: "Mesmo as vidas imateriais mais longas (de 84.000 éons) chegam ao fim. Esgotado o mérito, os seres decaem e renascem de acordo com outras causas (MN 49)."
      },
      {
        title: "Prazer Meditativo Não É Libertação",
        detail: "As delícias sensuais e a calma das absorções mascaram temporariamente as raízes da ignorância (avijjā). O despertar exige penetrar as Quatro Nobres Verdades."
      },
      {
        title: "O Incondicionado (Asaṅkhata)",
        detail: "O Nibbāna é o incondicionado: o desvanecimento completo da cobiça, da raiva e da ilusão — o fim absoluto de todo sofrimento."
      }
    ],
    reflectionQuestion: "Se até o plano mais exaltado do cosmos está sujeito ao fim, o que significa buscar a verdadeira liberdade em vez de apenas um renascimento confortável?"
  },

  // H. Pathways (PT)
  studyPathways: {
    sectionTitle: "Roteiros de Estudo Estruturados",
    sectionSubtitle: "Currículos graduais para estudantes iniciantes, intermediários e avançados",
    disclaimer: "Estas trilhas são sugestões pedagógicas para orientar o estudo individual.",
    tracks: [
      {
        id: "beginner-track",
        name: "Trilha Iniciante — 7 Dias",
        duration: "7 Dias (15 min/dia)",
        description: "Introdução à oportunidade humana, intenção kármica e ética na vida leiga.",
        days: [
          { day: 1, sutta: "Visão Geral Cosmológica", task: "Leia sobre os três mundos (Kāma, Rūpa, Arūpa) na seção inicial." },
          { day: 2, sutta: "SN 56.48 (Chiggala Sutta)", task: "Estude o símile da tartaruga cega e a preciosidade do nascimento humano." },
          { day: 3, sutta: "AN 6.63 (Nibbedhika Sutta)", task: "Aprenda a definição de kamma como intenção (cetanā)." },
          { day: 4, sutta: "MN 135 (Cūḷakammavibhaṅga)", task: "Examine como as ações moldam tendências em saúde, riqueza e caráter." },
          { day: 5, sutta: "DN 11 (Kevaddha Sutta)", task: "Descubra as limitações de Mahābrahmā e por que os deuses não sabem tudo." },
          { day: 6, sutta: "AN 8.54 (Dīghajāṇu Sutta)", task: "Aplique a ética budista à gestão financeira do lar e às boas amizades." },
          { day: 7, sutta: "AN 5.57 (Upajjhaṭṭhana)", task: "Recite as Cinco Recordações Diárias e registre sua reflexão no diário." }
        ]
      },
      {
        id: "intermediate-track",
        name: "Trilha Intermediária — 14 Dias",
        duration: "14 Dias (25 min/dia)",
        description: "Estudo da complexidade do kamma, dos planos de jhāna e dos Brahmavihāras.",
        days: [
          { day: 1, sutta: "Planos Sensuais (1 a 11)", task: "Explore os reinos sensuais no explorador interativo." },
          { day: 2, sutta: "MN 136 (Mahākammavibhaṅga)", task: "Entenda por que pessoas boas podem ter frutos difíceis e vice-versa." },
          { day: 3, sutta: "SN 15.3 (Tiṇakaṭṭha Sutta)", task: "Contemple a vastidão do oceano de lágrimas e a urgência espiritual." },
          { day: 4, sutta: "DN 13 (Tevijja Sutta)", task: "Compreenda os 4 Brahmavihāras como o autêntico caminho até Brahmā." },
          { day: 5, sutta: "Planos de Matéria Sutil (12 a 27)", task: "Examine os 16 reinos de Rūpaloka e sua conexão com o jhāna." },
          { day: 6, sutta: "MN 49 (Brahmanimantanika)", task: "Examine a ilusão de Baka Brahmā e a refutação do Buda." },
          { day: 7, sutta: "Exercício Ético Interativo", task: "Complete os 6 dilemas éticos no exercício de decisão." },
          { day: 8, sutta: "Planos Imateriais (28 a 31)", task: "Conheça os 4 reinos de Arūpaloka e seus limites." },
          { day: 9, sutta: "AN 4.77 (Acinteyya Sutta)", task: "Estude os quatro temas impensáveis e pratique humildade intelectual." },
          { day: 10, sutta: "AN 3.80 (Cūḷanikā Sutta)", task: "Contemple a escala cósmica de bilhões de mundos e a perspectiva humana." },
          { day: 11, sutta: "As Moradas Puras", task: "Estude os planos 23 a 27 e as faculdades espirituais para o Não-retorno." },
          { day: 12, sutta: "Cenários 1 e 2", task: "Revise Raiva e Linguagem Nociva e Gestão de Riqueza no lar." },
          { day: 13, sutta: "Cenários 3, 4 e 5", task: "Revise Desejo de Prestígio, Não-julgamento da Doença e a Morte." },
          { day: 14, sutta: "Nibbāna Além dos Planos", task: "Sintetize seu estudo: por que o Nibbāna não é o reino número 32." }
        ]
      },
      {
        id: "advanced-track",
        name: "Trilha Avançada — 30 Days",
        duration: "30 Dias (40 min/dia)",
        description: "Estudo canônico aprofundado de DN 1, DN 27, DN 16 e sistematização do Abhidhamma.",
        days: [
          { day: 1, sutta: "DN 27 (Aggañña Sutta - Parte 1)", task: "Contração e expansão cósmica e a descida de seres de Ābhassara." },
          { day: 2, sutta: "DN 27 (Aggañña Sutta - Parte 2)", task: "Origem dos alimentos materiais e desconstrução das castas sociais." },
          { day: 3, sutta: "DN 1 (Brahmajāla Sutta - Parte 1)", task: "A conduta inicial e o primeiro grupo de teorias cósmicas eternistas." },
          { day: 4, sutta: "DN 1 (Brahmajāla Sutta - Parte 2)", task: "Eternismo parcial e teorias sobre a finitude ou infinitude do mundo." },
          { day: 5, sutta: "DN 1 (Brahmajāla Sutta - Parte 3)", task: "O aprisionamento das visões no contato e a superação pelo sábio." },
          { day: 6, sutta: "Abhidhammattha-saṅgaha (Cap. 5)", task: "Estude o mapa Theravāda clássico dos planos e faculdades." },
          { day: 7, sutta: "DN 16 (Mahāparinibbāna Sutta)", task: "O abalo cósmico na passagem final do Buda e sua instrução eterna." }
        ]
      }
    ]
  },

  // I. Reflection Journal (PT)
  reflectionJournal: {
    sectionTitle: "Diário de Reflexão Cosmológica",
    sectionSubtitle: "Arquivo pessoal de estudos gravado estritamente no navegador local",
    prompts: [
      { id: "cq1", label: "1. O que este sutta ou plano me ensinou sobre a existência condicionada?", placeholder: "Reflita sobre longevidades e estados de ser..." },
      { id: "cq2", label: "2. Como este ensinamento conecta minhas intenções atuais (cetanā) a resultados futuros?", placeholder: "Examine a intenção nas decisões cotidianas..." },
      { id: "cq3", label: "3. O que isso revela sobre a impermanência mesmo de estados espirituais elevados?", placeholder: "Observe como tudo o que surge se extingue..." },
      { id: "cq4", label: "4. Estou buscando vantagens materiais, renascimento no céu ou o Nibbāna definitivo?", placeholder: "Esclareça sua bússola espiritual..." },
      { id: "cq5", label: "5. Como posso praticar compaixão sem culpar os outros pelas adversidades que enfrentam?", placeholder: "Cultive gentileza ativa sem julgamentos..." },
      { id: "cq6", label: "6. Qual sutta canônico iluminou esta experiência hoje?", placeholder: "ex: SN 56.48, MN 135, AN 6.63, DN 11..." }
    ],
    saveButtonText: "Salvar Reflexão Cosmológica",
    entriesHeading: "Suas Reflexões Salvas",
    noEntriesNotice: "Nenhuma reflexão registrada ainda. Preencha o formulário acima para iniciar seu arquivo pessoal.",
    exportButtonText: "Exportar Reflexões (JSON)",
    clearAllButtonText: "Limpar Arquivo"
  },

  // J. FAQs (PT)
  faqs: {
    sectionTitle: "Perguntas Frequentes",
    sectionSubtitle: "Respostas doutrinárias autênticas ancoradas nos discursos canônicos do Theravāda",
    items: [
      {
        q: "O que é a cosmologia budista na tradição Theravāda?",
        a: "No Budismo Theravāda, a cosmologia não é mitologia folclórica; é um mapa da existência condicionada (saṁsāra). Descreve os reinos onde os seres renascem segundo o kamma, distribuídos nos planos Sensual (Kāma), de Matéria Sutil (Rūpa) e Imaterial (Arūpa). Sua finalidade é soteriológica: despertar urgência espiritual (saṁvega), demonstrar a lei do kamma e apontar para a libertação."
      },
      {
        q: "O que são os 31 planos de existência?",
        a: "Os 31 planos são uma classificação Theravāda tradicional: 11 planos sensuais (4 estados de sofrimento, o plano humano e 6 céus de devas), 16 planos de matéria sutil de Brahmā (ligados aos 4 jhānas e incluindo as 5 Moradas Puras) e 4 planos imateriais (ligados às absorções sem forma)."
      },
      {
        q: "Todos os suttas primitivos trazem os 31 planos em sequência?",
        a: "Não. A estrutura dos 31 planos é uma consolidação tradicional posterior (estruturada no Abhidhamma e em tratados como o Visuddhimagga). Os reinos individuais aparecem dispersos pelos suttas, mas não em uma lista única e fechada de 31 planos num só discurso."
      },
      {
        q: "O que determina onde um ser renasce?",
        a: "O renascimento é determinado pela intenção (cetanā), hábitos kármicos e a consciência no momento da morte. Atos nocivos levam aos planos inferiores; virtude e generosidade conduzem aos reinos humano e celestial; absorções meditativas conduzem a Brahmā; e a extinção de todas as impurezas encerra o ciclo."
      },
      {
        q: "Os devas e Brahmās são imortais no Budismo?",
        a: "Não. Todos os seres no cosmos — mesmo o Grande Brahmā que vive por éons — são impermanentes (anicca) e mortais. Esgotada a energia kármica, eles morrem e renascem em outros reinos conforme seu kamma acumulado."
      },
      {
        q: "Qual é a diferença entre devas e Brahmās?",
        a: "Os devas habitam o Reino Sensual (Kāmaloka); têm corpos refinados mas ainda experimentam desejos sensoriais. Os Brahmās habitam os reinos da Matéria Sutil (Rūpa) e Imaterial (Arūpa); superaram o desejo sensorial por meio do jhāna e habitam em serenidade e amor-bondade."
      },
      {
        q: "O que são as Moradas Puras (Suddhāvāsa)?",
        a: "São os cinco planos mais altos da matéria sutil (planos 23 a 27: Avihā, Atappā, Sudassā, Sudassī, Akaniṭṭhā), habitados exclusivamente por Não-retornantes (Anāgāmīs). Eles alcançam o Arahantado e o Parinibbāna ali, sem jamais retornar ao mundo sensual."
      },
      {
        q: "Os reinos são lugares físicos literais ou estados psicológicos?",
        a: "No Theravāda tradicional, são realidades literais experimentadas após a morte. Contudo, o Buda ensinou que estados psicológicos espelham esses reinos: a fúria reflete o inferno, a cobiça insaciável reflete fantasmas famintos e a serenidade reflete Brahmā. Ambas as dimensões são verdadeiras, mas a leitura psicológica não deve apagar a realidade do renascimento."
      },
      {
        q: "O renascimento é a transmigração de uma alma imutável (attā)?",
        a: "Não. O Budismo rejeita a ideia de uma alma eterna que muda de corpo como quem troca de roupa (anattā). O renascimento é um fluxo contínuo de causas e efeitos de consciência (viññāṇa-sota), como uma vela que acende outra sem que uma substância passe de uma para a outra."
      },
      {
        q: "Renascer no céu é o objetivo do Budismo?",
        a: "Não. O Buda afirmou expressamente que almejar o céu é uma aspiração inferior, pois os céus são passageiros e continuam no saṁsāra. O objetivo supremo da prática é o Nibbāna: a cessação completa do ciclo de renascimentos e sofrimento."
      },
      {
        q: "Podemos saber o kamma passado de outra pessoa ou prever seu renascimento?",
        a: "Não. No Acinteyya Sutta (AN 4.77), o Buda ensina que o cálculo exato do kamma é incompreensível para mentes não iluminadas. Os suttas proíbem expressamente culpar pessoas por suas enfermidades ou infortúnios com base em suposto kamma."
      },
      {
        q: "Como a cosmologia se conecta à Origem Dependente (Paṭiccasamuppāda)?",
        a: "Elas são inseparáveis: a Origem Dependente explica a engrenagem causal (Ignorância → Formações → Consciência → Nome-e-Forma → Devir → Nascimento) que gira a roda do saṁsāra através dos 31 planos."
      },
      {
        q: "Por que a vida humana é considerada especialmente valiosa para a prática?",
        a: "Nos planos inferiores, o terror e a dor paralisam a mente; nos céus, o prazer contínuo induz à complacência. O plano humano equilibra dor e alegria, despertando a urgência espiritual (saṁvega) e permitindo ouvir o Dhamma e despertar."
      },
      {
        q: "Em que o Nibbāna difere dos planos cosmológicos mais elevados?",
        a: "Os planos mais altos são condicionados (saṅkhata) e impermanentes. O Nibbāna é incondicionado (asaṅkhata), não-nascido e imutável — a extinção total da cobiça, da raiva e da ilusão."
      }
    ]
  }
};


  // ==========================================
  // 4. CANONICAL TOPICS DATA
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
    householdIntroMagga: "The Fourth Noble Truth (Dukkha-nirodhagāminī Paṭipadā Ariyasacca): A comprehensive canonical study and operational guide for cultivating the Noble Eightfold Path in lay life.",
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
    studyProgressionHeading: "Canonical Study Progression",
    studyProgressionSubtitle: "A sequenced doctrinal roadmap moving from initial proclamation to deep conditionality",
    levelLabel: "Level",
    guidingInquiryLabel: "Guiding Doctrinal Question:",
    doctrinalFrameworkHeading: "The Fourfold Operational Practice (Catukicca)",
    doctrinalFrameworkSubtitle: "The authentic Theravāda imperative vs. crude popularized slogans",
    popularSloganLabel: "Crude Popular Slogan:",
    canonicalRealityLabel: "Authentic Canonical Reality:",
    dutyRequiredLabel: "Operational Duty:",
    establishesLabel: "Core Doctrinal Foundations Established:",
    dutyMatrixTruth: "Noble Truth",
    dutyMatrixPali: "Pāli Duty (Kicca)",
    dutyMatrixAction: "Action Required / Practice",
    dutyMatrixPrinciple: "Key Doctrinal Principle:",
    readOnSuttaCentral: "Read on SuttaCentral",
    quickJumpLabel: "Jump to Discourse:",
    hubStudyingPrompt: "• Currently studying",
    backToWheel: "Wheel of Dhamma",
    prevPillar: "Previous Pillar",
    nextPillar: "Next Pillar",
    returnToWheel: "Return to Wheel of Dhamma",
    quickPillarNavLabel: "Jump to Pillar:"
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
    householdIntroMagga: "A Quarta Nobre Verdade (Dukkha-nirodhagāminī Paṭipadā Ariyasacca): Estudo canônico exaustivo e guia operacional para cultivar o Nobre Caminho Óctuplo na vida cotidiana.",
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
    studyProgressionHeading: "Progressão do Estudo Canônico",
    studyProgressionSubtitle: "Um roteiro doutrinário sequenciado da proclamação inicial à condicionalidade profunda",
    levelLabel: "Nível",
    guidingInquiryLabel: "Pergunta Doutrinária Orientadora:",
    doctrinalFrameworkHeading: "A Prática Operacional Quádrupla (Catukicca)",
    doctrinalFrameworkSubtitle: "O imperativo autêntico do Theravāda vs. slogans populares simplistas",
    popularSloganLabel: "Slogan Popular Simplista:",
    canonicalRealityLabel: "Realidade Canônica Autêntica:",
    dutyRequiredLabel: "Dever Operacional:",
    establishesLabel: "Fundamentos Doutrinários Estabelecidos:",
    dutyMatrixTruth: "Nobre Verdade",
    dutyMatrixPali: "Dever em Pāli (Kicca)",
    dutyMatrixAction: "Ação Requerida / Prática",
    dutyMatrixPrinciple: "Princípio Doutrinário Central:",
    readOnSuttaCentral: "Ler no SuttaCentral",
    quickJumpLabel: "Navegar para o Discurso:",
    hubStudyingPrompt: "• Em estudo atual",
    backToWheel: "Roda do Dhamma",
    prevPillar: "Pilar Anterior",
    nextPillar: "Próximo Pilar",
    returnToWheel: "Retornar à Roda do Dhamma",
    quickPillarNavLabel: "Navegar para o Pilar:"
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
      doctrinalMatrix: {
        intro: "Theravāda study distinguishes sharply between popular modern simplifications and the authentic operational architecture proclaimed by the Buddha. The truths are not static philosophical beliefs, but four specific actions of direct cultivation:",
        truths: [
          {
            number: "1",
            paliName: "Dukkha",
            transName: "The Noble Truth of Suffering",
            dutyPali: "Pariññeyya",
            dutyQuestion: "What is to be fully understood?",
            crudeSlogan: "“Life is suffering” / “Everything is pain”",
            canonicalReality: "Not merely “pain” or unfortunate circumstances. The canonical formulation explicitly defines Dukkha as the five aggregates subject to clinging (pañcupādānakkhandhā): form, feeling, perception, volitional formations, and consciousness.",
            highlight: "To be comprehended directly through mindful investigation."
          },
          {
            number: "2",
            paliName: "Dukkha-samudaya",
            transName: "The Origin of Suffering",
            dutyPali: "Pahātabba",
            dutyQuestion: "What is to be abandoned?",
            crudeSlogan: "“Desire causes suffering” (vague psychological desire)",
            canonicalReality: "Taṇhā (feverish thirst), specifically the threefold craving defined in SN 56.11: sensual craving (kāma-taṇhā), craving for becoming/existence (bhava-taṇhā), and craving for non-becoming/annihilation (vibhava-taṇhā).",
            highlight: "To be abandoned by discerning its arising and relinquishing attachment."
          },
          {
            number: "3",
            paliName: "Dukkha-nirodha",
            transName: "The Cessation of Suffering",
            dutyPali: "Sacchikātabba",
            dutyQuestion: "What is to be realized?",
            crudeSlogan: "“Stop desiring / Enter a relaxed peaceful mindset”",
            canonicalReality: "The remainderless fading, relinquishment, and cessation of that very craving (yo tassāyeva taṇhāya asesavirāganirodho). Nibbāna must never be reduced to merely “a peaceful state” or psychological relaxation.",
            highlight: "To be directly experienced and realized here and now."
          },
          {
            number: "4",
            paliName: "Dukkha-nirodhagāminī paṭipadā",
            transName: "The Path Leading to Cessation",
            dutyPali: "Bhāvetabba",
            dutyQuestion: "What is to be developed?",
            crudeSlogan: "“Follow the Eightfold Path as philosophical dogma or ethical rules”",
            canonicalReality: "The Noble Eightfold Path (Ariya Aṭṭhaṅgika Magga). Critically, the Buddha emphasizes that the path is something that is actively developed (bhāvetabba / cultivated through practice), not merely believed in or intellectually entertained.",
            highlight: "To be actively cultivated across every domain of daily life."
          }
        ]
      },
      canonicalCorpus: [
        {
          levelNumber: 1,
          levelTitle: "Level 1 — The Buddha's First Exposition",
          guidingQuestion: "What are the Four Noble Truths?",
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
          levelNumber: 2,
          levelTitle: "Level 2 — Detailed Analysis",
          guidingQuestion: "What does each truth contain?",
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
          levelNumber: 3,
          levelTitle: "Level 3 — Right View",
          guidingQuestion: "Why are the Four Noble Truths fundamental to right view?",
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
          levelNumber: 4,
          levelTitle: "Level 4 — Understanding Dukkha",
          guidingQuestion: "Why are the five aggregates subject to clinging dukkha?",
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
          levelNumber: 4,
          levelTitle: "Level 4 — Understanding Dukkha",
          guidingQuestion: "Why can't these aggregates be regarded as self?",
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
          levelNumber: 4,
          levelTitle: "Level 4 — Understanding Dukkha",
          guidingQuestion: "What is the primary canonical definition of suffering?",
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
        },
        {
          levelNumber: 5,
          levelTitle: "Level 5 — Understanding Conditionality",
          guidingQuestion: "How does suffering relate to the conditions leading toward liberation?",
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
      fourthNobleTruthModule: FOURTH_NOBLE_TRUTH_MODULE_EN,
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
      doctrinalMatrix: {
        intro: "O estudo no Theravāda distingue com rigor as simplificações modernas populares da arquitetura operacional autêntica proclamada pelo Buda. As Quatro Verdades não são dogmas filosóficos estáticos, mas quatro ações deliberadas de cultivo prático direto:",
        truths: [
          {
            number: "1",
            paliName: "Dukkha",
            transName: "A Nobre Verdade do Sofrimento",
            dutyPali: "Pariññeyya",
            dutyQuestion: "O que deve ser plenamente compreendido?",
            crudeSlogan: "“A vida é sofrimento” / “Tudo é dor”",
            canonicalReality: "Não meramente “dor” física ou acontecimentos desagradáveis. O Buda define Dukkha formalmente como os cinco agregados sujeitos ao apego (pañcupādānakkhandhā): forma, sensação, percepção, formações mentais e consciência.",
            highlight: "Deve ser plenamente investigado e compreendido pela atenção lúcida."
          },
          {
            number: "2",
            paliName: "Dukkha-samudaya",
            transName: "A Origem do Sofrimento",
            dutyPali: "Pahātabba",
            dutyQuestion: "O que deve ser abandonado?",
            crudeSlogan: "“O desejo causa sofrimento” (desejo psicológico genérico)",
            canonicalReality: "Taṇhā (sede ardente/anseio febril), especificamente a tríade canônica expressa no SN 56.11: anseio sensorial (kāma-taṇhā), anseio pelo vir-a-ser/existência (bhava-taṇhā) e anseio pelo não-vir-a-ser/aniquilamento (vibhava-taṇhā).",
            highlight: "Deve ser abandonado pelo desapego desvelado na raiz de seu surgimento."
          },
          {
            number: "3",
            paliName: "Dukkha-nirodha",
            transName: "A Cessação do Sofrimento",
            dutyPali: "Sacchikātabba",
            dutyQuestion: "O que deve ser realizado?",
            crudeSlogan: "“Pare de desejar / Entre num estado mental relaxado e calmo”",
            canonicalReality: "O desvanecimento total, abandono e cessação sem vestígios desse mesmo anseio (asesavirāganirodho). Nibbāna jamais deve ser rebaixado a meramente “um estado relaxado e tranquilo” ou calma emocional temporária.",
            highlight: "Deve ser diretamente testemunhado e realizado por experiência viva."
          },
          {
            number: "4",
            paliName: "Dukkha-nirodhagāminī paṭipadā",
            transName: "O Caminho que Conduz à Cessação",
            dutyPali: "Bhāvetabba",
            dutyQuestion: "O que deve ser desenvolvido?",
            crudeSlogan: "“Siga o Caminho Óctuplo como mandamentos ou filosofia intelectual”",
            canonicalReality: "O Nobre Caminho Óctuplo (Ariya Aṭṭhaṅgika Magga). O Buda enfatiza com veemência que o caminho é algo que se cultiva e desenvolve ativamente (bhāvetabba / prática transformadora viva), e não algo em que apenas se acredita ou se compreende teoricamente.",
            highlight: "Deve ser ativamente cultivado em todos os momentos da existência diária."
          }
        ]
      },
      canonicalCorpus: [
        {
          levelNumber: 1,
          levelTitle: "Nível 1 — A Primeira Exposição do Buda",
          guidingQuestion: "O que são as Quatro Nobres Verdades?",
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
          levelNumber: 2,
          levelTitle: "Nível 2 — Análise Detalhada",
          guidingQuestion: "O que cada verdade contém?",
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
          levelNumber: 3,
          levelTitle: "Nível 3 — Visão Correta",
          guidingQuestion: "Por que as Quatro Nobres Verdades são fundamentais para a visão correta?",
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
          levelNumber: 4,
          levelTitle: "Nível 4 — Compreendendo Dukkha",
          guidingQuestion: "Por que os cinco agregados sujeitos ao apego são dukkha?",
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
          levelNumber: 4,
          levelTitle: "Nível 4 — Compreendendo Dukkha",
          guidingQuestion: "Por que esses agregados não podem ser considerados como o eu?",
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
          levelNumber: 4,
          levelTitle: "Nível 4 — Compreendendo Dukkha",
          guidingQuestion: "Qual é a definição canônica primária de sofrimento?",
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
        },
        {
          levelNumber: 5,
          levelTitle: "Nível 5 — Compreendendo a Condicionalidade",
          guidingQuestion: "Como o sofrimento se relaciona com as condições que conduzem à libertação?",
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
      fourthNobleTruthModule: FOURTH_NOBLE_TRUTH_MODULE_PT,
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
    canonicalRef: "SN 12.2 • SN 12.15 • MN 9 • SN 12.20 • SN 12.23 • DN 15 • SN 12.11 • SN 12.17 • SN 12.38 • SN 36.6 • SN 35.28 • SN 47.13",
    en: {
      title: "Dependent Arising in Everyday Life",
      tagline: "The Cosmic & Psychological Law of Interconnected Causality",
      category: "Deep Insight",
      keyPaliTerms: [
        { term: "Idappaccayatā", meaning: "Specific conditionality: 'When this exists, that comes to be; with the arising of this, that arises.'" },
        { term: "Phassa", meaning: "Sensory contact (eye-object-consciousness, ear-sound-consciousness, etc.)" },
        { term: "Vedanā", meaning: "Feeling tone (pleasant, painful, neither-painful-nor-pleasant)" },
        { term: "Taṇhā", meaning: "Craving, feverish thirst (sensual pleasures, becoming, and non-becoming)" },
        { term: "Upādāna", meaning: "Clinging, fuel, grasping onto views, pleasure, rites, and self-identity" },
        { term: "Saṅkhāra", meaning: "Volitional formations, mental fabrications, conditioned karmic patterns" }
      ],
      overview: "Dependent arising is the Buddha's teaching on conditionality: when particular conditions are present, corresponding phenomena arise; when those conditions cease, the dependent phenomena cease. It provides a framework for understanding suffering and the possibility of liberation.",
      dependentArisingModule: DEPENDENT_ARISING_MODULE_EN,
      canonicalExcerpts: [
        {
          source: "SN 12.20 — Paccaya Sutta",
          pali: "Uppādā vā, bhikkhave, tathāgatānaṁ anuppādā vā tathāgatānaṁ, ṭhitāva sā dhātu dhammaṭṭhitatā dhammaniyāmatā idappaccayatā.",
          translation: "Whether Realized Ones arise or not, this fundamental reality remains: the stability of the Dhamma, the law of the Dhamma, specific conditionality."
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
      title: "Origem Dependente na Vida Cotidiana",
      tagline: "A Lei Cósmica e Psicológica da Causalidade Interconectada",
      category: "Discernimento Profundo",
      keyPaliTerms: [
        { term: "Idappaccayatā", meaning: "Condicionalidade específica: 'Quando isto existe, aquilo vem a ser; com o surgir disto, aquilo surge.'" },
        { term: "Phassa", meaning: "Contato sensorial (órgão dos sentidos, objeto correspondente e consciência)" },
        { term: "Vedanā", meaning: "Tom afetivo da sensação (agradável, doloroso ou nem doloroso nem agradável)" },
        { term: "Taṇhā", meaning: "Sede compulsiva, anseio febril (pelos sentidos, vir-a-ser e não-vir-a-ser)" },
        { term: "Upādāna", meaning: "Apego, combustível mental, apego a prazeres sensoriais, opiniões e identidade pessoal" },
        { term: "Saṅkhāra", meaning: "Formações volitivas, fabricações mentais, padrões cármicos condicionados" }
      ],
      overview: "A origem dependente é o ensinamento do Buda sobre a condicionalidade: quando condições particulares estão presentes, os fenômenos correspondentes surgem; quando essas condições cessam, os fenômenos dependentes cessam. Ela fornece a estrutura para compreender o sofrimento e a possibilidade de libertação.",
      dependentArisingModule: DEPENDENT_ARISING_MODULE_PT,
      canonicalExcerpts: [
        {
          source: "SN 12.20 — Paccaya Sutta",
          pali: "Uppādā vā, bhikkhave, tathāgatānaṁ anuppādā vā tathāgatānaṁ, ṭhitāva sā dhātu dhammaṭṭhitatā dhammaniyāmatā idappaccayatā.",
          translation: "Quer os Realizados surjam ou não, permanece esta realidade fundamental: a estabilidade do Dhamma, a lei do Dhamma, a condicionalidade específica."
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
    canonicalRef: "DN 27 • DN 1 • AN 3.80 • MN 135 • MN 136 • AN 6.63 • SN 15.3 • DN 11 • DN 13 • MN 49 • AN 4.77 • SN 56.48 • AN 8.54 • AN 5.57 • DN 16",
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
      buddhistCosmologyModule: BUDDHIST_COSMOLOGY_MODULE_EN,
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
      buddhistCosmologyModule: BUDDHIST_COSMOLOGY_MODULE_PT,
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
  // 5. APPLICATION CONTROLLER
  // ==========================================
/**
 * The Lay Dharma Household Mārga — Main Application Controller
 * Radial Menu with 9 Annular Sectors (Wheel of Dhamma)
 * In-Page Canonical Study Portal Architecture (Full-Page Display)
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


})();