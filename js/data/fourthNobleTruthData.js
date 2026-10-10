/**
 * The Lay Dharma Household Mārga — Fourth Noble Truth Study Module
 * Dukkha-nirodhagāminī Paṭipadā Ariyasacca (Ariya Aṭṭhaṅgika Magga)
 * Grounded strictly in the Theravāda Pāli Canon (Tipiṭaka).
 * Bilingual dataset: English (EN) and Portuguese (PT).
 */

export const FOURTH_NOBLE_TRUTH_MODULE_EN = {
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

export const FOURTH_NOBLE_TRUTH_MODULE_PT = {
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
