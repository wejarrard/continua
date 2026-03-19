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
} as const;

export const siteContent = {
  site: {
    name: "Continua",
    eyebrow: "Clinical ritual / radical transparency",
    title: "Continua | Continua Rise for women who want the real dose.",
    description:
      "Continua Rise delivers 5g of creatine monohydrate in a warm ginger honey ritual for Gen X women who want daily strength, clarity, and clinical support they can feel good about keeping.",
    url: "https://risebycontinua.com",
    defaultSocialImage: "/og-risebycontinua.png",
    defaultSocialImageAlt:
      "Continua Rise product image styled for social sharing and search previews.",
    footerNote:
      "Educational information only. Review all product claims for medical, advertising, and regulatory compliance before launch.",
  },
  navigation: [
    { label: "Shop", href: "/shop" },
    { label: "Science", href: "/science" },
    { label: "Doctor's Note", href: "/doctors-note" },
    { label: "Journal", href: "/journal" },
  ] satisfies NavItem[],
  footer: {
    legalLabel: "Medical Disclaimer",
    legalHref: "/medical-disclaimer",
  },
  home: {
    seo: {
      path: "/",
      title: "Creatine For Gen X Women",
      description:
        "Continua Rise is a warm ginger honey creatine ritual for Gen X women who want daily strength, cognitive support, and consistency.",
      keywords: [
        "creatine for women",
        "creatine for gen x women",
        "creatine for women over 40",
        "ginger honey creatine",
        "daily creatine ritual",
      ],
    },
    hero: {
      title: "Continua Rise. 5g Creatine. Warm start.",
      body:
        "A warm ginger honey ritual built around clinically dosed creatine monohydrate for women who want to support strength, clarity, and consistency every day. Continua Rise turns daily creatine into a morning habit that feels grounding, polished, and easy to keep.",
      action: {
        label: "Secure Continua Rise - $65",
        href: "/shop#buy-box",
      },
      media: {
        alt: "A warm amber Continua Rise sachet spilling creatine beside a ginger-honey toned cup.",
        variant: "powder",
      } satisfies MediaAsset,
    },
    transparency: {
      eyebrow: "Radical transparency",
      title: "Built for the way women actually live.",
      body:
        "Creatine monohydrate is one of the most rigorously studied compounds for supporting muscle maintenance, structural resilience, and cognitive performance in women as hormones shift. Continua Rise delivers that exact clinical dose in a warm ginger honey ritual designed to feel elegant, approachable, and worth repeating every morning.",
      pullQuote: "Daily strength. Warm ritual. Clear support.",
    },
    ingredients: {
      eyebrow: "The formula",
      title: "Creatine does the work. Rise makes it easier to keep.",
      note:
        "Clinically dosed. Warmly flavored. Designed for daily consistency.",
      items: [
        {
          amount: "5,000mg",
          name: "Pure Creatine Monohydrate",
          body:
            "Replenishes cellular ATP to support memory retention, bone mineral density, and functional muscle preservation.",
        },
        {
          amount: "Daily ritual",
          name: "Warm Ginger Honey Profile",
          body:
            "A comforting ginger honey profile designed to make clinical-dose creatine something you actually look forward to drinking every morning.",
        },
      ],
    },
  },
  product: {
    seo: {
      path: "/shop",
      title: "Continua Rise",
      description:
        "Shop Continua Rise, a 30-day creatine ritual for women with 5g creatine monohydrate per serving and a warm ginger honey profile.",
      keywords: [
        "creatine for women",
        "best creatine for women",
        "creatine ritual",
        "continua rise",
        "creatine for women over 40",
      ],
    },
    title: "Continua Rise (30-Day Supply)",
    price: "$65.00",
    shortPrice: "$65",
    priceValue: 65,
    description:
      "A 30-day creatine ritual for women who want daily support with warmth, ease, and consistency.",
    buttonLabel: "Checkout - $65",
    details: [
      "30 single-serve sachets",
      "5g creatine monohydrate per serving",
      "Ginger honey flavor profile",
      "Designed for hot water",
    ],
    gallery: [
      {
        title: "Continua Rise 30-day box",
        asset: {
          alt: "Continua Rise 30-day dispenser box.",
          variant: "product-box",
        } satisfies MediaAsset,
      },
      {
        title: "Single sachet beside a warm cup",
        asset: {
          alt: "A single Continua Rise sachet next to a warm mug.",
          variant: "sachet-mug",
        } satisfies MediaAsset,
      },
      {
        title: "Minimal Rise back panel",
        asset: {
          alt: "The back of the Continua Rise box showing the product panel.",
          variant: "label-panel",
        } satisfies MediaAsset,
      },
    ],
    waitlist: {
      title: "Batch 007 is Sold Out.",
      body:
        "Batch 007 has been fully claimed by women building Continua Rise into their daily routine.",
      subtext:
        "Batch 008 is currently in production. Enter your email to receive a private notification 24 hours before the next public drop.",
      inputLabel: "Email address",
      inputPlaceholder: "Enter Email Address",
      actionLabel: "Notify Me For Batch 008",
      successTitle: "You're on the Batch 008 list.",
      successBody:
        "We will only use this address for the private Batch 008 notification.",
    },
    faqs: [
      {
        question: "What is Continua Rise?",
        answer:
          "Continua Rise is a daily creatine ritual for women. Each serving provides 5 grams of creatine monohydrate in a warm ginger honey format designed to be simple to keep every morning.",
      },
      {
        question: "Why does Continua Rise use 5 grams of creatine?",
        answer:
          "Five grams is a familiar daily maintenance dose in creatine research and sports nutrition guidance. It is the dose Continua Rise uses to keep the product straightforward and clinically recognizable.",
      },
      {
        question: "Is Continua Rise meant for women in midlife?",
        answer:
          "Yes. Continua Rise is positioned for Gen X and midlife women who want support for strength, consistency, and cognitive resilience as hormones shift over time.",
      },
      {
        question: "How should I take Continua Rise?",
        answer:
          "Continua Rise is designed for hot water. Stir one sachet into warm water as part of a daily morning routine.",
      },
    ] satisfies FAQItem[],
  },
  science: {
    seo: {
      path: "/science",
      title: "The Science Of Creatine For Women",
      description:
        "Explore the science behind creatine for women, including ATP support, daily dosing, and why a warm ritual can improve consistency.",
      keywords: [
        "creatine science women",
        "creatine cognition women",
        "creatine menopause muscle",
        "5g creatine women",
      ],
    },
    title: "The Science",
    intro: "The validation",
    sections: [
      {
        eyebrow: "The biology of energy",
        title: "Creatine supports the benefits women care about.",
        body:
          "Continua Rise is built around the exact 5g dose of creatine monohydrate because that is where the strongest support for women begins. As hormones shift in our 50s, our cells lose efficiency in producing ATP (Adenosine Triphosphate), the body's energy currency. Daily creatine helps regenerate ATP more effectively, supporting muscle maintenance, cognitive performance, and the kind of physical resilience women want to protect over time.",
        media: {
          alt: "Abstract line art evoking cellular energy production.",
          variant: "science-wave",
        } satisfies MediaAsset,
      },
      {
        eyebrow: "The ritual question",
        title: "Warm water makes the ritual easy to keep.",
        body:
          "Creatine monohydrate is highly heat-stable, which makes warm water an elegant delivery mechanism for daily use. It helps the powder dissolve cleanly and supports the ginger honey flavor profile that defines Continua Rise. The result is a smooth, warm ritual that feels calming in the moment and makes consistency far easier over time.",
        media: {
          alt: "An abstract illustration of warm water dissolving a daily sachet.",
          variant: "sachet-mug",
        } satisfies MediaAsset,
      },
    ],
    faqs: [
      {
        question: "Why is creatine relevant for women over 40?",
        answer:
          "Women in midlife face changes in muscle, bone, and cognition as estrogen shifts. Reviews focused on women's health describe creatine as a promising support strategy across these stages, especially when paired with resistance training and a repeatable daily habit.",
      },
      {
        question: "Does creatine support cognition as well as strength?",
        answer:
          "Current reviews in women's health and aging discuss creatine as relevant to both muscle performance and cognitive function, which is why Continua frames it as more than a gym-only supplement.",
      },
      {
        question: "Does hot water damage creatine?",
        answer:
          "Creatine monohydrate is considered heat-stable in common use, and warm water is often used to improve dissolution and make daily intake easier.",
      },
      {
        question: "Is creatine monohydrate the preferred form?",
        answer:
          "The ISSN position stand identifies creatine monohydrate as the most studied and best-supported form of creatine supplementation, which is why Continua Rise keeps the formula centered there.",
      },
    ] satisfies FAQItem[],
    citations: [
      coreCitations.womenLifespan,
      coreCitations.womenBridge,
      coreCitations.issn,
      coreCitations.misconceptions,
    ] satisfies Citation[],
  },
  doctorNote: {
    seo: {
      path: "/doctors-note",
      title: "Doctor's Note From Dr. Mollie Kane",
      description:
        "Read Dr. Mollie Kane's perspective on why a daily creatine ritual matters for women navigating midlife strength, cognition, and consistency.",
      keywords: [
        "doctor creatine women",
        "dr mollie kane creatine",
        "creatine for women over 40 doctor note",
      ],
    },
    eyebrow: "The doctor's note",
    title: "Why I recommend Continua Rise.",
    signoff: "-- Dr. Mollie Kane, MD. Co-Founder, Continua.",
    portrait: {
      alt: "Portrait placeholder for Dr. Mollie Kane, Continua's physician co-founder.",
      variant: "portrait",
    } satisfies MediaAsset,
    paragraphs: [
      '"As a physician, I read the clinical studies on longevity and physical maintenance daily. The data on creatine\'s ability to support bone density and cognitive function in older women is undeniable.',
      "Women deserve a creatine ritual that respects both the science and the experience of daily use. That means delivering the exact clinical dose in a format that feels supportive, polished, and easy to return to each morning.",
      "Continua Rise is the product I wanted for my patients, and for myself. We kept the exact 5-gram clinical dose and built it into a warm ginger honey experience women can reach for every single morning with confidence and consistency.\"",
    ],
  },
  journal: {
    seo: {
      path: "/journal",
      title: "Creatine Journal For Gen X Women",
      description:
        "Answer-first guides on creatine for Gen X women, including strength, brain fog, daily dosing, and how to build a sustainable ritual.",
      keywords: [
        "creatine for gen x women",
        "creatine for women over 40",
        "creatine for brain fog",
        "how to take creatine daily",
      ],
    },
    eyebrow: "The journal",
    title: "Creatine guidance for Gen X women who want the full picture.",
    intro:
      "This journal is the search and learning hub for Continua Rise. It translates the research on creatine for midlife women into clear, direct answers about strength, cognition, consistency, and daily use.",
    summary:
      "Explore how creatine fits into a Gen X woman's routine, what the research says about midlife strength and cognition, and how to take it consistently.",
    supportingPoints: [
      "Answer-first explainers",
      "Cited research",
      "Midlife-focused guidance",
      "Direct paths back to shop and science",
    ],
    faqs: [
      {
        question: "Why build an SEO hub around Gen X women and creatine?",
        answer:
          "Gen X women are actively looking for support that feels relevant to midlife strength, cognition, and consistency. The journal is built to answer those exact questions in language that is clear enough for search and specific enough for real decision-making.",
      },
      {
        question: "What topics does the journal cover first?",
        answer:
          "The first cluster covers creatine for Gen X women, midlife strength, brain fog and focus, and how to take creatine daily in a way that is easy to maintain.",
      },
      {
        question: "Will the journal only focus on menopause?",
        answer:
          "No. Menopause is part of the conversation, but the journal is intentionally broader than a menopause-only framing so it can serve women throughout the full midlife transition.",
      },
    ] satisfies FAQItem[],
    entries: [
      {
        slug: "creatine-for-gen-x-women",
        eyebrow: "Gen X women",
        title: "Creatine for Gen X women: why midlife is the moment to care.",
        description:
          "An answer-first guide to why creatine matters for Gen X women, including strength, cognition, bone support, and the habits that make supplementation sustainable.",
        summary:
          "Creatine matters in midlife because the benefits women care about most, including strength, resilience, and cognitive support, become more relevant as hormones shift.",
        keywords: [
          "creatine for gen x women",
          "creatine for women over 40",
          "creatine for women over 50",
          "midlife supplements for women",
        ],
        answer:
          "Creatine is especially relevant for Gen X women because midlife is when support for muscle, bone, cognition, and daily energy resilience becomes more valuable. Reviews focused on women's health describe creatine as a promising strategy across the female lifespan, with particular relevance as estrogen changes influence muscle and brain physiology.",
        supportingPoints: [
          "Midlife muscle support",
          "Cognitive relevance",
          "Bone and resilience context",
          "Easy daily ritual",
        ],
        sections: [
          {
            title: "Why Gen X women are asking different questions",
            paragraphs: [
              "The conversation around supplements changes in midlife. Gen X women are often less interested in hype and more interested in preserving what helps them feel strong, sharp, and steady over time.",
              "That is why creatine has become more relevant. It sits at the intersection of muscle performance, cellular energy, and cognitive support, which makes it more useful than a gym-only framing suggests.",
            ],
          },
          {
            title: "What the research highlights",
            paragraphs: [
              "A lifespan review on women's health describes creatine as potentially beneficial across female life stages, including menopause and post-menopause, with discussion of strength, mood, and cognition.",
              "A newer review focused on women's health continues that theme, arguing that creatine deserves more attention as a female-specific support strategy rather than a supplement reserved for younger male athletes.",
            ],
            bullets: [
              "Creatine helps replenish phosphocreatine stores tied to ATP production.",
              "Midlife women face changing demands around muscle and cognition.",
              "The strongest case is usually for daily consistency, not occasional use.",
            ],
          },
          {
            title: "Why format matters",
            paragraphs: [
              "For Gen X women, adherence matters more than novelty. A product only works if it becomes part of real life.",
              "That is where ritual matters. A warm, easy morning format can make a clinically familiar dose feel more compatible with the life women are already living.",
            ],
          },
        ],
        faqs: [
          {
            question: "Is creatine only for athletes?",
            answer:
              "No. The modern discussion around creatine increasingly includes aging, cognition, and women's health, not only sports performance.",
          },
          {
            question: "Why is creatine especially relevant after 40?",
            answer:
              "After 40, more women begin focusing on preserving strength, confidence in movement, and mental sharpness. Those goals align closely with the areas where creatine is most often discussed in midlife reviews.",
          },
        ],
        citations: [
          coreCitations.womenLifespan,
          coreCitations.womenBridge,
        ],
        publishedAt: "2026-03-19",
        modifiedAt: "2026-03-19",
        cta: {
          label: "Shop Continua Rise",
          href: "/shop#buy-box",
        },
      },
      {
        slug: "creatine-for-midlife-strength",
        eyebrow: "Midlife strength",
        title: "Creatine for midlife strength: what women want to preserve.",
        description:
          "A clear guide to why creatine is part of the midlife strength conversation for women, especially when the goal is resilience, not bodybuilding.",
        summary:
          "Creatine belongs in the midlife strength conversation because strength in this stage of life is about preserving capability, resilience, and confidence in movement.",
        keywords: [
          "creatine for midlife strength",
          "creatine for women muscle",
          "creatine menopause strength",
          "women over 40 strength supplements",
        ],
        answer:
          "Creatine can support the kind of strength women want to keep in midlife: the ability to train, recover, move confidently, and protect lean mass over time. Reviews on aging muscle and women's health consistently place creatine in that discussion, especially alongside resistance training.",
        supportingPoints: [
          "Strength preservation",
          "Resistance training support",
          "Muscle and bone context",
          "Recovery-oriented framing",
        ],
        sections: [
          {
            title: "Strength means more in midlife",
            paragraphs: [
              "For midlife women, strength is practical. It affects how confidently you move, how well you train, and how much physical reserve you feel in daily life.",
              "That broader definition is why creatine becomes more compelling with age. It is less about chasing a physique outcome and more about protecting physical capability.",
            ],
          },
          {
            title: "How creatine fits the strength conversation",
            paragraphs: [
              "The ISSN position stand remains one of the clearest summaries of creatine monohydrate's role in training adaptation and high-intensity exercise support.",
              "Reviews focused on aging muscle and bone add a midlife lens, describing creatine as relevant to muscle performance and, in some contexts, bone-related outcomes and fall-risk factors.",
            ],
            bullets: [
              "Creatine is most often discussed as a support to training, not a replacement for it.",
              "Midlife women often care about preserving lean mass and function, not only weight on a scale.",
              "Consistency matters more than complexity.",
            ],
          },
          {
            title: "Why this matters for Continua Rise",
            paragraphs: [
              "Continua Rise frames creatine in the language women actually use: strength, consistency, clarity, and a routine worth keeping.",
              "That makes it easier to connect the science to the lived goal, which is preserving the ability to feel capable and physically steady over time.",
            ],
          },
        ],
        faqs: [
          {
            question: "Should creatine replace strength training?",
            answer:
              "No. The strongest case for creatine in midlife is usually as a support to regular resistance training and movement, not a substitute for them.",
          },
          {
            question: "Does creatine help women who are not trying to bodybuild?",
            answer:
              "Yes. Midlife women often use creatine to support performance, resilience, and lean-mass preservation rather than bodybuilding goals.",
          },
        ],
        citations: [
          coreCitations.issn,
          coreCitations.agingBone,
          coreCitations.womenBridge,
        ],
        publishedAt: "2026-03-19",
        modifiedAt: "2026-03-19",
        cta: {
          label: "Read The Science",
          href: "/science",
        },
      },
      {
        slug: "creatine-for-brain-fog-and-focus",
        eyebrow: "Brain fog and focus",
        title: "Creatine for brain fog and focus: why women keep asking about it.",
        description:
          "Explore why creatine is increasingly part of the brain fog and focus conversation for women in midlife, and what the reviews actually say.",
        summary:
          "Creatine is part of the brain fog conversation because women's health reviews increasingly discuss it as relevant to cognition, mood, and brain energy in addition to muscle.",
        keywords: [
          "creatine for brain fog women",
          "creatine focus women",
          "creatine cognition menopause",
          "women brain fog supplements",
        ],
        answer:
          "Women keep asking about creatine for brain fog and focus because the discussion around creatine has widened beyond muscle. Reviews focused on women's health now describe potential relevance to cognition and mood, which makes it especially interesting in midlife when mental clarity can feel more variable.",
        supportingPoints: [
          "Cognition and ATP",
          "Midlife mental clarity",
          "Brain-energy framing",
          "Daily ritual adherence",
        ],
        sections: [
          {
            title: "Why the cognition conversation is growing",
            paragraphs: [
              "Brain fog is one of the most common reasons women begin searching for new support in midlife. It is also one of the reasons creatine has moved beyond sports nutrition conversations.",
              "When reviews discuss creatine and cognition, they are usually pointing back to energy metabolism in the brain. That makes creatine relevant to a broader wellness conversation than most women were originally taught.",
            ],
          },
          {
            title: "What the reviews say",
            paragraphs: [
              "The 2021 lifespan review on women's health discusses cognition and mood as part of creatine's female-specific relevance, especially as hormonal context changes.",
              "The more recent review bridging menstruation through menopause keeps cognition in the picture as an active research area, reinforcing that creatine is being taken seriously as a women's-health topic rather than a niche gym supplement.",
            ],
            bullets: [
              "Creatine's brain relevance is tied to cellular energy support.",
              "Women in midlife often search for clarity, steadiness, and consistency rather than stimulation alone.",
              "The best framing is support, not miracle claims.",
            ],
          },
          {
            title: "Why ritual still matters",
            paragraphs: [
              "Even when the goal is mental clarity, the way a product fits into life still matters. A calm, warm ritual often has a better chance of staying in place than a cold scoop-and-shake approach.",
              "That is one reason Continua Rise ties a familiar creatine dose to a gentler daily experience.",
            ],
          },
        ],
        faqs: [
          {
            question: "Is creatine a stimulant?",
            answer:
              "No. Creatine is generally discussed in terms of cellular energy support rather than stimulant effects.",
          },
          {
            question: "Can I talk about creatine for brain fog responsibly?",
            answer:
              "Yes, but carefully. The responsible framing is that women's-health reviews discuss creatine as relevant to cognition and brain energy, not that it guarantees a specific outcome for every person.",
          },
        ],
        citations: [
          coreCitations.womenLifespan,
          coreCitations.womenBridge,
        ],
        publishedAt: "2026-03-19",
        modifiedAt: "2026-03-19",
        cta: {
          label: "See Dr. Kane's Note",
          href: "/doctors-note",
        },
      },
      {
        slug: "how-to-take-creatine-daily",
        eyebrow: "Daily use",
        title: "How to take creatine daily: the easiest routine to keep.",
        description:
          "A practical guide to taking creatine daily, including common maintenance dosing, why routine matters, and how warm water can make it easier to stay consistent.",
        summary:
          "The easiest way to take creatine daily is to choose a consistent moment, use a familiar daily dose, and remove as much friction from the ritual as possible.",
        keywords: [
          "how to take creatine daily",
          "5g creatine daily women",
          "best time to take creatine women",
          "creatine hot water",
        ],
        answer:
          "The best daily creatine routine is the one you can repeat. Sports-nutrition guidance commonly references a daily maintenance range around 3 to 5 grams after saturation, and many women do best when that dose is attached to a fixed morning ritual rather than left to memory later in the day.",
        supportingPoints: [
          "Daily maintenance dose",
          "Warm-water ritual",
          "Adherence over perfection",
          "Low-friction routine",
        ],
        sections: [
          {
            title: "The routine matters more than the hack",
            paragraphs: [
              "The most useful creatine strategy is not usually about timing tricks. It is about making the routine frictionless enough to happen every day.",
              "That is why warm ritual products can be powerful. They turn a supplement from an abstract intention into a fixed daily behavior.",
            ],
          },
          {
            title: "What daily dosing guidance usually looks like",
            paragraphs: [
              "The ISSN position stand and related evidence reviews often describe a common maintenance intake of roughly 3 to 5 grams per day after initial saturation, with 5 grams remaining a familiar default in consumer products.",
              "That makes a single-sachet 5 gram format straightforward for women who want clarity and do not want to manage scoops or calculations every morning.",
            ],
            bullets: [
              "Pick one time of day and keep it stable.",
              "Use a format that dissolves cleanly and feels easy to repeat.",
              "Prioritize consistency before optimization.",
            ],
          },
          {
            title: "Why warm water works",
            paragraphs: [
              "Warm water improves the experience of daily use for many women because it helps the powder dissolve cleanly and feels more ritual-friendly than a rushed cold drink.",
              "That is the operating idea behind Continua Rise: make the science easy to keep by making the moment itself more appealing.",
            ],
          },
        ],
        faqs: [
          {
            question: "What is a common daily creatine dose for maintenance?",
            answer:
              "Many evidence reviews and sports-nutrition references discuss roughly 3 to 5 grams per day as a common maintenance range, which is why 5 grams is such a familiar daily format.",
          },
          {
            question: "Do I have to take creatine at a precise time?",
            answer:
              "Not usually. The more important variable for most people is consistency over time rather than a perfect clock-based schedule.",
          },
        ],
        citations: [
          coreCitations.issn,
          coreCitations.misconceptions,
          coreCitations.womenLifespan,
        ],
        publishedAt: "2026-03-19",
        modifiedAt: "2026-03-19",
        cta: {
          label: "Start With Continua Rise",
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
