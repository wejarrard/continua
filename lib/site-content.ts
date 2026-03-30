export type NavItem = {
  label: string;
  href: string;
};

export type ActionLinkConfig = {
  label: string;
  href?: string;
  helperText?: string;
};

export type MediaTone = "slate" | "sage" | "brass";

export type MediaPlaceholderConfig = {
  label: string;
  title: string;
  description: string;
  tone: MediaTone;
};

export type SectionIntro = {
  eyebrow: string;
  title: string;
  body: string;
};

export type BenefitCardConfig = {
  icon: string;
  title: string;
  body: string;
};

export type QuoteConfig = {
  quote: string;
  attribution: string;
  note?: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type SupportPageSection = {
  title: string;
  body: string;
};

export type SupportPageConfig = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: SupportPageSection[];
  action?: ActionLinkConfig;
  note?: string;
};

export type MediaAsset = {
  alt: string;
  src?: string;
  variant:
  | "powder"
  | "product-box"
  | "sachet-mug"
  | "label-panel"
  | "science-wave"
  | "portrait";
};

export type Citation = {
  title: string;
  href: string;
  source: string;
  note: string;
};

export type JournalSection = {
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

export type JournalEntry = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  summary: string;
  keywords: readonly string[];
  answer: string;
  supportingPoints: readonly string[];
  sections: readonly JournalSection[];
  faqs: readonly FAQItem[];
  citations: readonly Citation[];
  publishedAt: string;
  modifiedAt: string;
  cta: ActionLinkConfig;
};

const coreCitations = {
  womenLifespan: {
    title: "Creatine Supplementation in Women's Health: A Lifespan Perspective",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7998865/",
    source: "Nutrients / PMC",
    note:
      "Review covering female-specific creatine physiology, menopause, cognition, and musculoskeletal outcomes across the lifespan.",
  },
  womenBridge: {
    title:
      "Creatine in women's health: bridging the gap from menstruation through pregnancy to menopause",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12086928/",
    source: "Frontiers in Nutrition / PMC",
    note:
      "Recent review summarizing creatine's relevance across female life stages, with emphasis on midlife health and future research priorities.",
  },
  agingBone: {
    title:
      "Effectiveness of Creatine Supplementation on Aging Muscle and Bone: Focus on Falls Prevention and Inflammation",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6518405/",
    source: "Journal of Clinical Medicine / PMC",
    note:
      "Review of creatine's role in aging muscle, bone outcomes, and fall-related risk factors, including postmenopausal populations.",
  },
  issn: {
    title:
      "International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation in exercise, sport, and medicine",
    href: "https://jissn.biomedcentral.com/articles/10.1186/s12970-017-0173-z",
    source: "JISSN",
    note:
      "Widely cited position stand summarizing creatine monohydrate safety, efficacy, and common dosing protocols.",
  },
  misconceptions: {
    title:
      "Common questions and misconceptions about creatine supplementation: what does the scientific evidence really show?",
    href: "https://jissn.biomedcentral.com/articles/10.1186/s12970-021-00412-w",
    source: "JISSN",
    note:
      "Evidence review addressing renal safety, water retention concerns, and common myths around creatine supplementation.",
  },
  magnesiumFactSheet: {
    title: "Magnesium - Consumer Fact Sheet",
    href: "https://ods.od.nih.gov/factsheets/magnesium-consumer",
    source: "NIH Office of Dietary Supplements",
    note:
      "Consumer-facing summary of magnesium's roles in muscle and nerve function, common intake guidance, supplement forms, and safety basics.",
  },
  magnesiumSleepReview: {
    title:
      "Oral magnesium supplementation for insomnia in older adults: a Systematic Review & Meta-Analysis",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8053283/",
    source: "BMC Complementary Medicine and Therapies / PMC",
    note:
      "Systematic review finding possible benefit signals for insomnia symptoms, while emphasizing low-quality and mixed evidence.",
  },
  magnesiumBisglycinateTrial: {
    title:
      "Magnesium Bisglycinate Supplementation in Healthy Adults Reporting Poor Sleep: A Randomized, Placebo-Controlled Trial",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/",
    source: "Sleep and Vigilance / PMC",
    note:
      "Recent placebo-controlled trial reporting modest improvement in insomnia severity scores with magnesium bisglycinate in adults with poor sleep.",
  },
} as const;

export const siteContent = {
  site: {
    name: "Restore by Continua",
    eyebrow: "Night ritual / clinical transparency",
    title:
      "Restore by Continua | Evening creatine + magnesium ritual for Gen X women.",
    description:
      "Restore by Continua pairs 5g of creatine monohydrate with magnesium glycinate in a lavender hibiscus night ritual for Gen X women who want strength, recovery, and consistency they can actually keep.",
    footerNote: "",
    url: "https://risebycontinua.com",
    defaultSocialImage: "/og-risebycontinua.png",
    defaultSocialImageAlt:
      "Restore by Continua product image styled for social sharing and search previews.",
  },
  navigation: [
    { label: "Shop", href: "/shop" },
    { label: "Science", href: "/science" },
    { label: "Journal", href: "/journal" },
  ] satisfies NavItem[],
  footer: {
    legalLabel: "Medical Disclaimer",
    legalHref: "/medical-disclaimer",
  },
  home: {
    seo: {
      path: "/",
      title: "Night Creatine + Magnesium For Gen X Women",
      description:
        "Restore by Continua is a lavender hibiscus night ritual with 5g creatine monohydrate and magnesium glycinate for Gen X women who want strength, recovery, and evening consistency.",
      keywords: [
        "creatine for women at night",
        "magnesium glycinate for women",
        "night ritual supplement women",
        "lavender hibiscus magnesium",
        "restore by continua",
      ],
    },
    hero: {
      title: "Restore by Continua. 5g creatine. 320mg magnesium glycinate. Softer nights.",
      body:
        "A lavender hibiscus night ritual built around a clinically familiar 5g creatine dose and 320mg magnesium glycinate for women who want to support strength, recovery, and consistency without adding another harsh PM routine. Restore turns evening supplementation into something calm, polished, and easy to keep.",
      action: {
        label: "Secure Restore - $70",
        href: "/shop#buy-box",
      },
      media: {
        alt: "Restore by Continua sachet imagery styled for a lavender hibiscus evening ritual.",
        variant: "powder",
      } satisfies MediaAsset,
    },
    transparency: {
      eyebrow: "Radical transparency",
      title: "Built for the women who want a gentler landing.",
      body:
        "Creatine monohydrate remains one of the most rigorously studied supplementation options for supporting muscle maintenance, performance, and cognitive energy in women as hormones shift. Restore keeps that 5g anchor intact, then pairs it with 320mg magnesium glycinate and a softer evening format designed around repeatability rather than intensity.",
      pullQuote: "Real dose. Softer ritual. Evening consistency.",
    },
    ingredients: {
      eyebrow: "The formula",
      title: "Two anchors. One better night ritual.",
      note:
        "Clinically recognizable creatine. Evening-minded magnesium. Lavender hibiscus finish.",
      items: [
        {
          amount: "5 grams",
          name: "Pure Creatine Monohydrate",
          body:
            "A familiar daily dose used to support cellular energy, training adaptation, and the kind of strength and mental steadiness many women want to protect through midlife.",
        },
        {
          amount: "320mg",
          name: "Magnesium Glycinate",
          body:
            "A nightly magnesium dose chosen to align with the needs of women 31 and older, using a form often selected for evening routines because magnesium is involved in muscle and nerve function and is still being studied for sleep-related support.",
        },
        {
          amount: "Night flavor",
          name: "Lavender Hibiscus Profile",
          body:
            "A floral, tart profile that helps the ritual feel more like a wind-down cue than another obligation at the end of the day.",
        },
      ],
    },
  },
  product: {
    seo: {
      path: "/shop",
      title: "Restore by Continua",
      description:
        "Shop Restore by Continua, a 30-day evening ritual for women with 5g creatine monohydrate, 320mg magnesium glycinate, and a lavender hibiscus profile.",
      keywords: [
        "creatine for women at night",
        "magnesium glycinate women",
        "restore by continua",
        "night ritual supplement",
        "supplements for women over 40",
      ],
    },
    title: "Restore by Continua (30-Day Supply)",
    price: "$70.00",
    subscriptionPrice: "$56.00",
    subscriptionSavingsLabel: "Save 20% with monthly delivery",
    shortPrice: "$70",
    priceValue: 70,
    description:
      "A 30-day evening ritual for women who want a clinically familiar creatine dose paired with 320mg magnesium glycinate, warmth, and consistency.",
    buttonLabel: "Checkout - $70",
    subscriptionButtonLabel: "Subscribe monthly - save 20%",
    details: [
      "30 single-serve sachets",
      "5g creatine monohydrate per serving",
      "320mg magnesium glycinate per serving",
      "Lavender hibiscus flavor profile",
      "Designed for warm water at night",
    ],
    gallery: [
      {
        title: "Restore by Continua 30-day box",
        asset: {
          alt: "Restore by Continua 30-day dispenser box.",
          variant: "product-box",
        } satisfies MediaAsset,
      },
      {
        title: "Single Restore sachet beside a warm cup",
        asset: {
          alt: "A single Restore by Continua sachet next to a warm mug.",
          variant: "sachet-mug",
        } satisfies MediaAsset,
      },
      {
        title: "Restore back panel",
        asset: {
          alt: "The back of the Restore by Continua box showing the product panel.",
          variant: "label-panel",
        } satisfies MediaAsset,
      },
    ],
    waitlist: {
      title: "The Restore launch batch is sold out.",
      body:
        "The current Restore release has been fully claimed by women building it into their nighttime routine.",
      subtext:
        "Enter your email to receive a private notification 24 hours before the next Restore drop opens.",
      inputLabel: "Email address",
      inputPlaceholder: "Enter Email Address",
      actionLabel: "Notify Me For The Next Drop",
      successTitle: "You're on the Restore list.",
      successBody:
        "We will only use this address for the private Restore notification.",
    },
    faqs: [
      {
        question: "What is Restore by Continua?",
        answer:
          "Restore by Continua is an evening ritual for women. Each serving provides 5 grams of creatine monohydrate paired with 320mg magnesium glycinate in a lavender hibiscus format designed to feel calm and easy to repeat at night.",
      },
      {
        question: "Why pair creatine with magnesium glycinate?",
        answer:
          "Creatine keeps the formula anchored to a clinically familiar daily dose, while 320mg magnesium glycinate supports the nighttime ritual positioning for this midlife-women audience. Magnesium is involved in muscle and nerve function and is being studied for sleep-related support, but Restore is positioned as a supportive evening ritual rather than a treatment product.",
      },
      {
        question: "Is Restore meant for women in midlife?",
        answer:
          "Yes. Restore is positioned for Gen X and midlife women who want support for strength, recovery, and a better evening rhythm as hormones and energy patterns shift over time.",
      },
      {
        question: "How should I take Restore?",
        answer:
          "Restore is designed for warm water. Stir one sachet into warm water as part of a consistent evening routine; the goal is repeatability, not a perfect minute on the clock.",
      },
    ] satisfies FAQItem[],
  },
  science: {
    seo: {
      path: "/science",
      title: "The Science Behind Restore",
      description:
        "Explore the science behind Restore by Continua, including creatine monohydrate, 320mg magnesium glycinate, evening routine consistency, and why format matters.",
      keywords: [
        "creatine science women",
        "magnesium glycinate science",
        "creatine at night women",
        "night routine supplement science",
      ],
    },
    title: "The Science",
    intro: "The validation",
    sections: [
      {
        eyebrow: "The creatine anchor",
        title: "Creatine still does the heavy lifting.",
        body:
          "Restore keeps the formula centered on 5 grams of creatine monohydrate because that remains the most familiar, well-studied form in sports nutrition and women's health discussions. For midlife women thinking about muscle maintenance, training resilience, and cognitive energy, consistency with creatine matters far more than whether it is taken in the morning or at night.",
        media: {
          alt: "Abstract line art evoking cellular energy production.",
          variant: "science-wave",
        } satisfies MediaAsset,
      },
      {
        eyebrow: "The magnesium context",
        title: "Magnesium glycinate supports the evening frame.",
        body:
          "Magnesium is an essential mineral involved in muscle and nerve function, and sleep researchers continue to study whether supplementation can support better sleep outcomes in some adults. The evidence is still mixed, but Restore uses 320mg magnesium glycinate because it fits a calmer PM positioning and can be easier for many people to build into an evening habit.",
        media: {
          alt: "Abstract illustration suggesting a calmer nighttime supplement ritual.",
          variant: "sachet-mug",
        } satisfies MediaAsset,
      },
      {
        eyebrow: "The adherence advantage",
        title: "The ritual itself helps women stay consistent.",
        body:
          "A product only works if it becomes part of real life. Restore uses warm water and a lavender hibiscus profile because the format matters: a softer evening moment can be easier to keep than another capsule stack or rushed shaker bottle. The science matters, but so does whether women actually come back to it every night.",
        media: {
          alt: "An abstract illustration of a warm evening cup and sachet ritual.",
          variant: "sachet-mug",
        } satisfies MediaAsset,
      },
    ],
    faqs: [
      {
        question: "Why is creatine still relevant for women over 40?",
        answer:
          "Women in midlife face changes in muscle, bone, and cognition as estrogen shifts. Reviews focused on women's health describe creatine as a promising support strategy across these stages, especially when paired with resistance training and a repeatable daily habit.",
      },
      {
        question: "Is there a perfect time to take creatine?",
        answer:
          "Not usually. The stronger theme in creatine guidance is consistent daily intake, not a rigid clock-time rule, which is why Restore is built around the evening habit women are most likely to keep.",
      },
      {
        question: "Does magnesium glycinate guarantee better sleep?",
        answer:
          "No. Magnesium is being studied for sleep-related outcomes and some trials show modest benefit, but the evidence is mixed and Restore should be framed as a supportive nighttime ritual rather than a treatment for insomnia.",
      },
      {
        question: "Is creatine monohydrate still the preferred form?",
        answer:
          "Yes. The ISSN position stand identifies creatine monohydrate as the most studied and best-supported form of creatine supplementation, which is why Restore keeps the formula centered there.",
      },
    ] satisfies FAQItem[],
    citations: [
      coreCitations.womenLifespan,
      coreCitations.womenBridge,
      coreCitations.issn,
      coreCitations.misconceptions,
      coreCitations.magnesiumFactSheet,
      coreCitations.magnesiumSleepReview,
      coreCitations.magnesiumBisglycinateTrial,
    ] satisfies Citation[],
  },
  doctorNote: {
    seo: {
      path: "/doctors-note",
      title: "Doctor's Note From Dr. Mollie Kane",
      description:
        "Read Dr. Mollie Kane's perspective on why Restore by Continua pairs creatine and 320mg magnesium glycinate inside a calmer nighttime ritual for women in midlife.",
      keywords: [
        "dr mollie kane restore by continua",
        "doctor note magnesium glycinate women",
        "creatine for women over 40 doctor note",
      ],
    },
    eyebrow: "The doctor's note",
    title: "Why I endorse Restore by Continua.",
    signoff: "-- Dr. Mollie Kane, MD. Co-Founder, Continua.",
    portrait: {
      alt: "Portrait placeholder for Dr. Mollie Kane, Continua's physician co-founder.",
      variant: "portrait",
    } satisfies MediaAsset,
    paragraphs: [
      '"As a physician, I care less about trend cycles and more about what women can realistically keep. Creatine remains one of the most familiar, well-studied daily supports for muscle performance, physical resilience, and cognitive energy, especially in midlife when consistency matters more than novelty.',
      "Restore by Continua was built to make that consistency easier at the end of the day. We kept the clear 5-gram creatine anchor, paired it with 320mg magnesium glycinate, and shaped the ritual around a calmer lavender hibiscus experience women can return to night after night.",
      "I endorse Restore because it respects both the evidence and the lived reality of my patients. The formulation is grounded, the ritual is approachable, and the product meets women where they are instead of asking them to force one more aggressive wellness routine into an already full life.\"",
    ],
  },
  journal: {
    seo: {
      path: "/journal",
      title: "Restore Journal For Gen X Women",
      description:
        "Answer-first guides on Restore by Continua for Gen X women, including creatine at night, 320mg magnesium glycinate context, and how to build an evening ritual that lasts.",
      keywords: [
        "restore by continua journal",
        "creatine at night women",
        "magnesium glycinate at night",
        "night ritual women over 40",
      ],
    },
    eyebrow: "The journal",
    title: "Night ritual guidance for Gen X women who want the full picture.",
    intro:
      "This journal is the search and learning hub for Restore by Continua. It translates the research around creatine, 320mg magnesium glycinate, and nighttime routine design into clear answers for midlife women who want support without hype.",
    summary:
      "Explore how Restore fits into a Gen X woman's evening routine, what the research says about creatine and magnesium, and how to build a night ritual you can actually keep.",
    supportingPoints: [
      "Answer-first explainers",
      "Cited research",
      "Midlife-focused guidance",
      "Direct paths back to Restore and science",
    ],
    faqs: [
      {
        question: "Why build the journal around Restore and Gen X women?",
        answer:
          "Gen X women are actively looking for support that feels relevant to midlife strength, recovery, and routine consistency. The journal is built to answer those questions directly in language that is clear enough for search and specific enough for real decision-making.",
      },
      {
        question: "What topics does the journal cover first?",
        answer:
          "The first cluster covers Restore's nighttime positioning, creatine timing, magnesium glycinate context, and how to build an evening ritual that is easy to maintain.",
      },
      {
        question: "Will the journal only focus on sleep?",
        answer:
          "No. Sleep and evening rhythm are part of the conversation, but the journal is intentionally broader than an insomnia-only framing so it can also serve women thinking about strength, recovery, mental steadiness, and long-term adherence.",
      },
    ] satisfies FAQItem[],
    entries: [
      {
        slug: "restore-for-gen-x-women",
        eyebrow: "Gen X women",
        title: "Restore for Gen X women: why a softer night ritual can work better.",
        description:
          "An answer-first guide to why Restore may resonate with Gen X women, including evening consistency, strength support, and why format matters as much as formula.",
        summary:
          "Restore can make sense in midlife because women often need less hype, more consistency, and a night ritual that feels supportive enough to repeat.",
        keywords: [
          "restore by continua",
          "night ritual for women over 40",
          "supplements for gen x women",
          "evening ritual women",
        ],
        answer:
          "Restore is especially relevant for Gen X women because midlife is when women start optimizing for resilience and routines they can actually keep. The formula keeps creatine at the center, adds magnesium glycinate to fit a nighttime rhythm, and uses a softer ritual format that feels more realistic than another morning stack.",
        supportingPoints: [
          "Midlife routine design",
          "Creatine consistency",
          "Evening ritual fit",
          "Supportive, not harsh",
        ],
        sections: [
          {
            title: "Why Gen X women are asking different questions",
            paragraphs: [
              "The supplement conversation changes in midlife. Gen X women are often less interested in hype and more interested in preserving what helps them feel strong, steady, and recovered over time.",
              "That is why nighttime ritual design starts to matter. A product can be clinically familiar on paper and still fail in real life if the format feels noisy, inconvenient, or too intense to repeat.",
            ],
          },
          {
            title: "What the research still points back to",
            paragraphs: [
              "Women's-health reviews still point back to creatine when the conversation is muscle, cognition, and midlife resilience. That part of the formula remains the anchor in Restore.",
              "Magnesium adds the evening frame, but the most important scientific throughline is still consistency. Restore is designed around the idea that adherence wins over complexity.",
            ],
            bullets: [
              "Creatine remains the best-supported part of the formula.",
              "Format influences whether women keep a routine.",
              "Nighttime positioning only works if it feels good enough to repeat.",
            ],
          },
          {
            title: "Why Restore is built this way",
            paragraphs: [
              "Restore uses warm water, sachets, and a lavender hibiscus profile because format can lower friction at the exact point in the day where women are deciding whether they have the energy to do one more thing.",
              "That softer evening design is the product decision. It translates a familiar creatine dose into a calmer ritual women may actually want to keep.",
            ],
          },
        ],
        faqs: [
          {
            question: "Is Restore only about sleep?",
            answer:
              "No. Restore is positioned around nighttime use, but the broader goals are strength, recovery, consistency, and a steadier evening rhythm.",
          },
          {
            question: "Why might a nighttime ritual work better after 40?",
            answer:
              "After 40, many women do better with routines that feel less effortful and more restorative. If a supplement fits that emotional and practical reality, adherence usually improves.",
          },
        ],
        citations: [
          coreCitations.womenLifespan,
          coreCitations.womenBridge,
          coreCitations.magnesiumFactSheet,
        ],
        publishedAt: "2026-03-20",
        modifiedAt: "2026-03-20",
        cta: {
          label: "Shop Restore by Continua",
          href: "/shop#buy-box",
        },
      },
      {
        slug: "can-you-take-creatine-at-night",
        eyebrow: "Evening timing",
        title: "Can women take creatine at night? Yes, if that is the ritual they will keep.",
        description:
          "A clear guide to why nighttime creatine can make sense for women, especially when consistency matters more than a perfect supplement clock.",
        summary:
          "Creatine does not need a rigid morning-only routine; for many women the best timing is the one that becomes automatic.",
        keywords: [
          "creatine at night women",
          "best time to take creatine women",
          "night creatine routine",
          "creatine timing women over 40",
        ],
        answer:
          "Yes. Creatine timing is usually less important than consistent daily intake, which means women can take it at night if that is the moment that fits their real life. Restore is built around that principle: consistency first, timing perfection second.",
        supportingPoints: [
          "Timing flexibility",
          "Daily adherence",
          "Night routine fit",
          "Consistency over hacks",
        ],
        sections: [
          {
            title: "Why timing gets overcomplicated",
            paragraphs: [
              "Women are often told to optimize supplements down to the minute, but creatine does not usually need that kind of precision. The stronger recommendation is to take it consistently enough for it to become part of your baseline routine.",
              "That opens up the evening window. If nighttime is the only moment that feels protected, that is often the better choice than an idealized morning routine that never sticks.",
            ],
          },
          {
            title: "What the evidence actually supports",
            paragraphs: [
              "The clearest evidence around creatine still focuses on the compound itself rather than an exact time of day. That is why consumer routines should be built around adherence, not timing anxiety.",
              "For midlife women, that adherence framing is especially useful because the real problem is often not choosing a time. It is choosing a time that can survive the rest of life.",
            ],
            bullets: [
              "Creatine monohydrate is still the best-supported form.",
              "Daily use matters more than rigid timing.",
              "A stable nighttime cue can outperform a missed morning intention.",
            ],
          },
          {
            title: "Why Restore is framed around night",
            paragraphs: [
              "Restore turns creatine into part of a calmer PM ritual rather than another daytime task. That design choice is practical, not mystical.",
              "If the evening is where consistency lives, then taking creatine at night can be the smarter routine for real women with real schedules.",
            ],
          },
        ],
        faqs: [
          {
            question: "Do I lose benefits if I take creatine at night?",
            answer:
              "Not usually. The more important factor is sustained daily intake over time rather than a perfect clock-time strategy.",
          },
          {
            question: "Should nighttime creatine replace training or recovery basics?",
            answer:
              "No. Creatine supports the larger routine; it does not replace sleep habits, resistance training, nutrition, or movement.",
          },
        ],
        citations: [
          coreCitations.issn,
          coreCitations.misconceptions,
          coreCitations.womenLifespan,
        ],
        publishedAt: "2026-03-20",
        modifiedAt: "2026-03-20",
        cta: {
          label: "Read The Science",
          href: "/science",
        },
      },
      {
        slug: "why-magnesium-glycinate-at-night",
        eyebrow: "Magnesium glycinate",
        title: "Why magnesium glycinate shows up in night routines for women.",
        description:
          "Explore why magnesium glycinate is commonly used in night routines for women, what the evidence says, and where the claims should stay modest.",
        summary:
          "Magnesium glycinate appears in nighttime routines because magnesium is relevant to muscle and nerve function and is being studied for sleep, but the honest framing is supportive rather than definitive.",
        keywords: [
          "magnesium glycinate at night",
          "magnesium glycinate women",
          "magnesium sleep evidence",
          "restore by continua magnesium",
        ],
        answer:
          "Magnesium glycinate shows up in night routines because magnesium is essential to muscle and nerve function, and some sleep research suggests supplementation may help some adults. The right framing is still cautious: the evidence is mixed, the benefits are not guaranteed, and magnesium glycinate fits best as part of a supportive evening ritual rather than a cure-all.",
        supportingPoints: [
          "Magnesium basics",
          "Sleep evidence is mixed",
          "Glycinate is a PM-friendly fit",
          "Supportive framing only",
        ],
        sections: [
          {
            title: "Why magnesium is even in the conversation",
            paragraphs: [
              "Magnesium is not a niche ingredient. It is a required mineral involved in muscle and nerve function, protein synthesis, and other core processes women care about as they build a more stable routine.",
              "That alone does not make every magnesium product useful, but it explains why magnesium keeps showing up in the evening supplement conversation.",
            ],
          },
          {
            title: "What the sleep literature actually says",
            paragraphs: [
              "Systematic reviews on magnesium and sleep point to possible benefits in some groups, but they also stress that the evidence quality is limited and inconsistent.",
              "A recent bisglycinate trial reported modest improvements in insomnia severity scores, which is encouraging, but still not a reason to market the ingredient as a guaranteed sleep fix.",
            ],
            bullets: [
              "Possible benefit does not equal guaranteed outcome.",
              "The evidence is stronger for support language than for hard claims.",
              "Magnesium glycinate belongs in an honest nighttime routine story, not an overpromised one.",
            ],
          },
          {
            title: "Why glycinate fits Restore",
            paragraphs: [
              "Restore uses magnesium glycinate because it aligns with the softer PM positioning of the product. The form helps the formula feel coherent with an evening ritual rather than bolted onto a daytime performance story.",
              "That coherence matters. Women are more likely to keep a ritual that makes emotional sense in the moment they are being asked to use it.",
            ],
          },
        ],
        faqs: [
          {
            question: "Does magnesium glycinate guarantee sleep improvement?",
            answer:
              "No. The current evidence supports cautious, supportive language rather than absolute promises.",
          },
          {
            question: "Why not make stronger sleep claims if magnesium is popular at night?",
            answer:
              "Because popularity is not the same thing as conclusive evidence. The responsible position is that magnesium is being studied for sleep-related support and may help some adults, not that it works the same way for everyone.",
          },
        ],
        citations: [
          coreCitations.magnesiumFactSheet,
          coreCitations.magnesiumSleepReview,
          coreCitations.magnesiumBisglycinateTrial,
        ],
        publishedAt: "2026-03-20",
        modifiedAt: "2026-03-20",
        cta: {
          label: "See Dr. Kane's Note",
          href: "/doctors-note",
        },
      },
      {
        slug: "how-to-build-a-night-ritual-youll-keep",
        eyebrow: "Night ritual",
        title: "How to build a night ritual you will actually keep.",
        description:
          "A practical guide to building a sustainable evening ritual, including timing, flavor, friction reduction, and why Restore is designed the way it is.",
        summary:
          "The best night ritual is the one you can repeat without negotiation, which means choosing a stable cue, lowering friction, and keeping the experience calm enough to want again tomorrow.",
        keywords: [
          "night routine women over 40",
          "how to build a night ritual",
          "evening supplement routine women",
          "restore by continua ritual",
        ],
        answer:
          "The best night ritual is the one that feels automatic. That usually means picking a stable evening cue, using a format that dissolves cleanly, and making the moment pleasant enough that consistency stops feeling like work.",
        supportingPoints: [
          "Stable evening cue",
          "Warm-water ritual",
          "Adherence over perfection",
          "Low-friction design",
        ],
        sections: [
          {
            title: "Start with a cue you already trust",
            paragraphs: [
              "The strongest routines attach themselves to a moment that already exists: after dinner, after cleaning the kitchen, after a shower, or before reading in bed.",
              "That cue matters more than motivation. If the moment already belongs to your evening, the ritual has a better chance of lasting.",
            ],
          },
          {
            title: "Reduce friction until the ritual becomes obvious",
            paragraphs: [
              "Single-serve sachets, warm water, and a flavor profile that feels softer than a gym drink all reduce the odds that a routine gets skipped out of irritation or fatigue.",
              "Restore is designed around exactly that principle. The science can be sound and still fail if the moment feels annoying.",
            ],
            bullets: [
              "Choose one nightly cue and keep it stable.",
              "Use a format that feels easy to repeat in low-energy moments.",
              "Prioritize consistency before optimization.",
            ],
          },
          {
            title: "Why Restore is a warm nighttime ritual",
            paragraphs: [
              "Warm water can make a product feel more ritual-friendly than a rushed cold drink or another handful of capsules. For some women, that sensory shift is the whole difference between intention and follow-through.",
              "That is the operating idea behind Restore: make the science easier to keep by making the evening moment itself more appealing.",
            ],
          },
        ],
        faqs: [
          {
            question: "What matters most in a night ritual?",
            answer:
              "Consistency. The ritual should be easy enough to survive tired nights and busy schedules.",
          },
          {
            question: "Does the ritual need to be complicated to work?",
            answer:
              "No. The best routines are usually simple, pleasant, and stable enough to repeat without much thought.",
          },
        ],
        citations: [
          coreCitations.issn,
          coreCitations.magnesiumFactSheet,
          coreCitations.womenBridge,
        ],
        publishedAt: "2026-03-20",
        modifiedAt: "2026-03-20",
        cta: {
          label: "Start With Restore",
          href: "/shop#buy-box",
        },
      },
    ] satisfies JournalEntry[],
  },
  medicalDisclaimer: {
    title: "Medical Disclaimer",
    intro:
      "The information on this website is for educational purposes only and is not medical advice.",
    sections: [
      {
        title: "Not a diagnosis or treatment plan",
        body:
          "Nothing on this site should be used to diagnose, treat, cure, or prevent any disease. Always consult a qualified clinician before beginning a new supplement routine, especially if you are pregnant, nursing, managing a medical condition, or taking prescription medication.",
      },
      {
        title: "Claims require review before launch",
        body:
          "The product positioning, structure-function language, scientific summaries, and journal content presented here should be reviewed by legal and regulatory counsel before public release.",
      },
      {
        title: "Individual responses vary",
        body:
          "Supplement outcomes vary from person to person. No representation is made that every customer will experience the same result.",
      },
    ],
  },
} as const;

export function getJournalEntry(slug: string) {
  return siteContent.journal.entries.find((entry) => entry.slug === slug);
}
