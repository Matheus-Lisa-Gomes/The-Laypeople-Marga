/**
 * The Lay Dharma Household Mārga (Upāsaka-Dharma)
 * Topic 02: Dependent Arising in Everyday Life (Paṭiccasamuppāda)
 * Comprehensive Theravāda Learning Module:
 * Canonical Source Material, The 12 Links Explorer, 12 Suttas Library,
 * 5 Daily-Life Scenarios, 7-Step Practical Exercise, Noble Eightfold Path Integration,
 * 3 Study Pathways, Reflection Journal Prompts, and 10 Canonical FAQs.
 * Bilingual: English (EN) and Portuguese (PT-BR).
 */

export const DEPENDENT_ARISING_MODULE_EN = {
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

export const DEPENDENT_ARISING_MODULE_PT = {
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
