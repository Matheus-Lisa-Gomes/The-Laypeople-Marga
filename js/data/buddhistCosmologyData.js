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

export const BUDDHIST_COSMOLOGY_MODULE_EN = {
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

export const BUDDHIST_COSMOLOGY_MODULE_PT = {
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
