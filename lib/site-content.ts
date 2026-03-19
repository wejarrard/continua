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
    eyebrow: "Clinical ritual / radical transparency",
    title: "Continua | Continua Rise for women who want the real dose.",
    description:
      "Continua Rise delivers 5g of creatine monohydrate in a warm ginger honey ritual designed for women who want clinical support without sports-powder baggage.",
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
      title: "Continua Rise. 5g Creatine. Warm start.",
      body:
        "The daily sachet built around clinically dosed creatine monohydrate, now recast as a warm ginger honey ritual. No fluorescent tubs. No proprietary blends. Just the dose women actually want, in a format that feels like a morning reset instead of another supplement chore.",
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
      title: "We rebuilt the ritual, not the science.",
      body:
        "You probably associate creatine with 20-year-old male bodybuilders. We did, too. But the clinical literature tells a different story. Creatine monohydrate is one of the most rigorously tested molecules on earth for supporting muscle maintenance, structural resilience, and cognitive performance in women as hormones shift. Continua Rise keeps the exact clinical dose and discards the gym-culture packaging. The result is a warmer ginger honey ritual that makes daily consistency feel natural.",
      pullQuote: "Clinical dose. Warm ritual. Nothing hidden.",
    },
    ingredients: {
      eyebrow: "The formula",
      title: "Creatine does the work. Rise makes it easier to keep.",
      note:
        'Zero artificial sweeteners. Zero proprietary blends. Zero fluorescent wellness theater.',
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
    title: "Continua Rise (30-Day Supply)",
    price: "$65.00",
    shortPrice: "$65",
    description:
      "Daily creatine support recast as a warm ginger honey ritual. 30 single-serve sachets.",
    buttonLabel: "Reserve Continua Rise - $65",
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
      title: "The first Rise release is spoken for.",
      body:
        "The demand for a creatine ritual that actually feels made for women has already exhausted our initial Rise allocation.",
      subtext:
        "Enter your email for a private notification 24 hours before the next Continua Rise release. We do not spam.",
      inputLabel: "Email address",
      inputPlaceholder: "Enter Email Address",
      actionLabel: "Notify Me For The Next Rise Release",
      successTitle: "You're on the Rise list.",
      successBody:
        "We will only use this address for the next private Continua Rise release notification.",
    },
  },
  science: {
    title: "The Science",
    intro: "The validation",
    sections: [
      {
        eyebrow: "The biology of energy",
        title: "Creatine is still the engine.",
        body:
          "Continua Rise is not built around a stimulant story. It is built around the exact 5g dose of creatine monohydrate. As hormones shift in our 50s, our cells lose efficiency in producing ATP (Adenosine Triphosphate), the literal energy currency of the body. Daily creatine gives those cells the substrate they need to regenerate ATP more effectively. The ginger honey ritual changes the experience of taking it. The underlying biology is still the same cellular fuel story.",
        media: {
          alt: "Abstract line art evoking cellular energy production.",
          variant: "science-wave",
        } satisfies MediaAsset,
      },
      {
        eyebrow: "The ritual question",
        title: "Yes, Rise still belongs in hot water.",
        body:
          "A common myth is that heat destroys supplements. Creatine monohydrate is highly heat-stable, and warm water remains an elegant delivery mechanism for daily use. It helps the powder dissolve cleanly and supports the ginger honey flavor profile that defines Continua Rise. No chalky sludge at the bottom of the mug. Just a smooth, warm ritual that makes daily adherence easier.",
        media: {
          alt: "An abstract illustration of warm water dissolving a daily sachet.",
          variant: "sachet-mug",
        } satisfies MediaAsset,
      },
    ],
  },
  doctorNote: {
    eyebrow: "The doctor's note",
    title: "Why I recommend Continua Rise.",
    signoff: "-- Dr. [Name], MD. Co-Founder, Continua.",
    portrait: {
      alt: "Portrait placeholder for Continua's physician co-founder.",
      variant: "portrait",
    } satisfies MediaAsset,
    paragraphs: [
      '"As a physician, I read the clinical studies on longevity and physical maintenance daily. The data on creatine\'s ability to support bone density and cognitive function in older women is undeniable.',
      "But when I looked at the market, I could not in good conscience recommend any of the existing products to my patients. The industry forced women to choose between massive tubs of sports powder filled with blue dyes, or 'women's wellness' gummies that contained a fraction of the necessary clinical dose.",
      "Continua Rise is the product I wanted for my patients, and for myself. We did not reinvent the molecule; we rebuilt the ritual around it. We kept the exact 5-gram clinical dose, removed the nonsense, and turned it into a warm ginger honey experience women can reach for every single morning.\"",
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
