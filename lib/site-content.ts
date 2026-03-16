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

export const siteContent = {
  site: {
    name: "Continua",
    eyebrow: "Clinical luxury / radical transparency",
    title: "Continua | Matcha + Creatine for women who want the real dose.",
    description:
      "Continua pairs 5g of creatine monohydrate with 2g of ceremonial matcha in a daily sachet engineered for structural support, functional muscle, and cognitive clarity.",
    footerNote:
      "Educational information only. Review all product claims for medical, advertising, and regulatory compliance before launch.",
  },
  navigation: [
    { label: "Shop", href: "/shop" },
    { label: "Science", href: "/science" },
    { label: "Doctor's Note", href: "/doctors-note" },
  ] satisfies NavItem[],
  footer: {
    legalLabel: "Medical Disclaimer",
    legalHref: "/medical-disclaimer",
  },
  home: {
    hero: {
      title: "5g Creatine. 2g Matcha. Nothing else.",
      body:
        "The daily sachet engineered to preserve female bone density, maintain functional muscle, and clear cognitive fog. No proprietary blends. No marketing fluff. Just the clinical dose you need, in the morning ritual you already love.",
      action: {
        label: "Secure Batch 001 - $65",
        href: "/shop#buy-box",
      },
      media: {
        alt: "A sage sachet spilling white creatine and green matcha onto marble.",
        variant: "powder",
      } satisfies MediaAsset,
    },
    transparency: {
      eyebrow: "Radical transparency",
      title: "We took the science out of the gym.",
      body:
        "You probably associate creatine with 20-year-old male bodybuilders. We did, too. But the clinical literature tells a different story. Creatine monohydrate is one of the most rigorously tested molecules on earth for combating menopausal brain fog and age-related muscle loss. We stripped away the neon plastic tubs, the artificial sweeteners, and the aggressive fitness branding. We just put the exact clinical dose into a premium organic matcha. Just add hot water.",
      pullQuote: "Clinical dose. Organic matcha. Hot water. Nothing hidden.",
    },
    ingredients: {
      eyebrow: "The ingredients",
      title: "Two inputs. Zero theater.",
      note:
        'Zero artificial sweeteners. Zero fillers. Zero "proprietary" secrets.',
      items: [
        {
          amount: "5,000mg",
          name: "Pure Creatine Monohydrate",
          body:
            "Replenishes cellular ATP to support memory retention, bone mineral density, and functional muscle preservation.",
        },
        {
          amount: "2,000mg",
          name: "Organic Ceremonial Matcha",
          body:
            "Sourced from Uji, Japan. Delivers a gentle, jitter-free lift of L-theanine and antioxidants for calm, sustained focus.",
        },
      ],
    },
  },
  product: {
    title: "Continua: Matcha + Creatine (30-Day Supply)",
    price: "$65.00",
    shortPrice: "$65",
    description:
      "Formulated for daily use to support cellular energy and structural integrity. 30 single-serve sachets.",
    buttonLabel: "Add to Cart - $65",
    details: [
      "30 single-serve sachets",
      "5g creatine monohydrate per serving",
      "2g ceremonial matcha per serving",
      "Designed for hot water",
    ],
    gallery: [
      {
        title: "30-day dispenser box",
        asset: {
          alt: "Continua 30-day dispenser box.",
          variant: "product-box",
        } satisfies MediaAsset,
      },
      {
        title: "Single sachet beside a steaming mug",
        asset: {
          alt: "A single Continua sachet next to a steaming mug.",
          variant: "sachet-mug",
        } satisfies MediaAsset,
      },
      {
        title: "Minimal two-ingredient back label",
        asset: {
          alt: "The back of the Continua box showing the two-ingredient label.",
          variant: "label-panel",
        } satisfies MediaAsset,
      },
    ],
    waitlist: {
      title: "Batch 001 is Sold Out.",
      body:
        "The demand for clinical-grade, transparent formulations for women has completely overwhelmed our initial production run. Batch 001 allocation is exhausted.",
      subtext:
        "Batch 002 is currently in production. Enter your email to receive a private notification 24 hours before the next public drop. We do not spam.",
      inputLabel: "Email address",
      inputPlaceholder: "Enter Email Address",
      actionLabel: "Notify Me For Batch 002",
      successTitle: "You're on the Batch 002 list.",
      successBody:
        "We will only use this address for the private Batch 002 notification.",
    },
  },
  science: {
    title: "The Science",
    intro: "The validation",
    sections: [
      {
        eyebrow: "The biology of energy",
        title: "Caffeine borrows energy. ATP creates it.",
        body:
          "While our ceremonial matcha provides a gentle lift, the true engine of Continua is the creatine monohydrate. As hormones shift in our 50s, our cells lose their efficiency in producing ATP (Adenosine Triphosphate) - the literal energy currency of the human body. By providing your cells with a daily 5g dose of pure creatine, you are giving your body the direct biological building blocks it needs to regenerate ATP. It is not a stimulant. It is actual, cellular fuel.",
        media: {
          alt: "Abstract line art evoking cellular energy production.",
          variant: "science-wave",
        } satisfies MediaAsset,
      },
      {
        eyebrow: "The heat question",
        title: "Yes, it belongs in hot water.",
        body:
          "A common myth is that heat destroys supplements. Creatine monohydrate is highly heat-stable. In fact, hot water is the optimal delivery mechanism. It maximizes the solubility of the crystal, ensuring the powder dissolves completely clear. No chalky texture, no clumping at the bottom of the mug. Just a perfectly smooth, highly bioavailable morning ritual.",
        media: {
          alt: "An abstract illustration of heat and dissolution in a cup.",
          variant: "sachet-mug",
        } satisfies MediaAsset,
      },
    ],
  },
  doctorNote: {
    eyebrow: "The doctor's note",
    title: "Why I recommend this exact pairing.",
    signoff: "-- Dr. [Name], MD. Co-Founder, Continua.",
    portrait: {
      alt: "Portrait placeholder for Continua's physician co-founder.",
      variant: "portrait",
    } satisfies MediaAsset,
    paragraphs: [
      '"As a physician, I read the clinical studies on longevity and physical maintenance daily. The data on creatine\'s ability to support bone density and cognitive function in older women is undeniable.',
      "But when I looked at the market, I could not in good conscience recommend any of the existing products to my patients. The industry forced women to choose between massive tubs of sports powder filled with blue dyes, or 'women's wellness' gummies that contained a fraction of the necessary clinical dose.",
      "Continua is the product I wanted for my patients, and for myself. We did not reinvent the molecule; we just removed the nonsense. We took the exact 5-gram clinical dose and paired it with organic matcha so you can take it effortlessly, every single morning.\"",
    ],
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
          "The product positioning, structure-function language, and scientific summaries presented here should be reviewed by legal and regulatory counsel before public release.",
      },
      {
        title: "Individual responses vary",
        body:
          "Supplement outcomes vary from person to person. No representation is made that every customer will experience the same result.",
      },
    ],
  },
} as const;
