/**
 * The Lay Dharma Household MÄrga â€” Standalone Universal Web Bundle
 * Runs directly on file:// as well as HTTPS / local servers.
 */

(function() {
  'use strict';

  // ==========================================
  // 1. FOURTH NOBLE TRUTH DATA MODULE
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
  // 2. CANONICAL TOPICS DATA
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
  // 3. APPLICATION CONTROLLER
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


})();