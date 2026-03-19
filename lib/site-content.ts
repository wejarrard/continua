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
      "Continua Rise delivers 5g of creatine monohydrate in a warm ginger honey ritual for women who want daily strength, clarity, and clinical support they can feel good about keeping.",
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
    title: "Continua Rise (30-Day Supply)",
    price: "$65.00",
    shortPrice: "$65",
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
  },
  science: {
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
  },
  doctorNote: {
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
