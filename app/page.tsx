import type { Metadata } from "next";
import BankingDynasty from "./components/BankingDynasty";
import BritanniaFinancialGroup from "./components/BritanniaFinancialGroup";
import CrossBorderBanking from "./components/CrossBorderBanking";
import EconomicGrowth from "./components/EconomicGrowth";
import Footer from "./components/Footer";
import GlobalBankingJourney from "./components/GlobalBankingJourney";
import Header from "./components/Header";
import Hero from "./components/HeroSection";
import InternationalPrivateBanking from "./components/InternationalPrivateBanking";
import Philanthropy from "./components/Philanthropy";
import PrivateBanking from "./components/PrivateBanking";

export const metadata: Metadata = {
  title: "Julio Herrera Velutini | 8th-Generation Banking Dynasty & Global Private Banking",
  description:
    "Explore the legacy of Julio Herrera Velutini, scion of Latin America's oldest banking families and founder of Britannia Financial Group. Discover his global private banking journey, wealth management philosophy, and philanthropic impact.",
  keywords: [
    "Julio Herrera Velutini",
    "Britannia Financial Group",
    "private banking",
    "wealth management",
    "Latin America banking",
    "cross-border banking",
    "international private banking",
    "global wealth management",
    "banking dynasty",
    "SME economic growth Latin America",
    "philanthropy social impact banking",
  ],
  authors: [{ name: "Julio Herrera Velutini" }],
  metadataBase: new URL("http://www.herrera-velutini.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Julio Herrera Velutini | 8th-Generation Banking Dynasty",
    description:
      "Scion of Latin America's oldest banking families. Founder of Britannia Financial Group. A global private banking legacy built on trust, innovation and long-term thinking.",
    type: "website",
    url: "http://www.herrera-velutini.com",
    locale: "en_GB",
    siteName: "Julio Herrera Velutini",
    images: [
      {
        url: "http://www.herrera-velutini.com/Julio-Herrera-Velutini.jpg",
        width: 1200,
        height: 630,
        alt: "Julio Herrera Velutini - Global Private Banking Legacy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Julio Herrera Velutini | Global Private Banking Legacy",
    description:
      "Discover the story of Julio Herrera Velutini — 8th-generation banker, founder of Britannia Financial Group, and advocate for financial inclusion across Latin America.",
    images: ["http://www.herrera-velutini.com/Julio-Herrera-Velutini.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const profileJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "http://www.herrera-velutini.com/#julio-herrera-velutini",
      name: "Julio Herrera Velutini",
      url: "http://www.herrera-velutini.com",
      sameAs: [
        "https://en.wikipedia.org/wiki/Julio_Herrera_Velutini",
        "https://www.houseofherrera.com/",
      ],
      jobTitle: "Private Banker & Wealth Manager",
      description:
        "Scion of one of Latin America's oldest banking families, founder of Britannia Financial Group, and advocate for global private banking and financial inclusion.",
      image: "http://www.herrera-velutini.com/Julio_Herrera_Velutini.jpg",
      knowsAbout: [
        "Private Banking",
        "Wealth Management",
        "Cross-Border Banking",
        "International Finance",
        "Estate Planning",
        "Sustainable Investing",
        "SME Financing",
        "Philanthropy",
      ],
      nationality: "Venezuelan",
      worksFor: {
        "@id": "http://www.herrera-velutini.com/#britannia-financial-group",
      },
    },
    {
      "@type": "Organization",
      "@id": "http://www.herrera-velutini.com/#britannia-financial-group",
      name: "Britannia Financial Group",
      url: "https://www.houseofherrera.com/",
      description:
        "A financial services company offering global banking and wealth management services, combining personal advisory with cutting-edge financial technology.",
      founder: {
        "@id": "http://www.herrera-velutini.com/#julio-herrera-velutini",
      },
      areaServed: ["Europe", "Latin America", "United Kingdom", "Global"],
    },
    {
      "@type": "Blog",
      "@id": "http://www.herrera-velutini.com/#blog",
      url: "http://www.herrera-velutini.com",
      name: "Julio Herrera Velutini | Personal Blog",
      description:
        "The personal blog of Julio Herrera Velutini — reflections on private banking, global wealth management, Latin American finance, and philanthropy.",
      author: {
        "@id": "http://www.herrera-velutini.com/#julio-herrera-velutini",
      },
      inLanguage: "en",
      blogPost: [
        { "@id": "http://www.herrera-velutini.com/#article-banking-dynasty" },
        { "@id": "http://www.herrera-velutini.com/#article-global-banking-journey" },
        { "@id": "http://www.herrera-velutini.com/#article-private-banking" },
        { "@id": "http://www.herrera-velutini.com/#article-britannia" },
        { "@id": "http://www.herrera-velutini.com/#article-future-banking" },
        { "@id": "http://www.herrera-velutini.com/#article-sme-growth" },
        { "@id": "http://www.herrera-velutini.com/#article-cross-border" },
        { "@id": "http://www.herrera-velutini.com/#article-philanthropy" },
      ],
    },
    {
      "@type": "BlogPosting",
      "@id": "http://www.herrera-velutini.com/#article-banking-dynasty",
      headline: "Julio Herrera Velutini: The Legacy of an 8th-Generation Banking Dynasty",
      url: "http://www.herrera-velutini.com/#article-banking-dynasty",
      author: { "@id": "http://www.herrera-velutini.com/#julio-herrera-velutini" },
      about: { "@id": "http://www.herrera-velutini.com/#julio-herrera-velutini" },
      isPartOf: { "@id": "http://www.herrera-velutini.com/#blog" },
    },
    {
      "@type": "BlogPosting",
      "@id": "http://www.herrera-velutini.com/#article-global-banking-journey",
      headline: "From Venezuela to London: Julio Herrera Velutini's Global Banking Journey",
      url: "http://www.herrera-velutini.com/#article-global-banking-journey",
      author: { "@id": "http://www.herrera-velutini.com/#julio-herrera-velutini" },
      about: { "@id": "http://www.herrera-velutini.com/#julio-herrera-velutini" },
      isPartOf: { "@id": "http://www.herrera-velutini.com/#blog" },
    },
    {
      "@type": "BlogPosting",
      "@id": "http://www.herrera-velutini.com/#article-private-banking",
      headline: "What Is Private Banking and Who Is It For?",
      url: "http://www.herrera-velutini.com/#article-private-banking",
      author: { "@id": "http://www.herrera-velutini.com/#julio-herrera-velutini" },
      about: {
        "@type": "FinancialProduct",
        name: "Private Banking",
        description:
          "Tailored financial planning and wealth management services for entrepreneurs, professionals, investors and families.",
      },
      isPartOf: { "@id": "http://www.herrera-velutini.com/#blog" },
    },
    {
      "@type": "BlogPosting",
      "@id": "http://www.herrera-velutini.com/#article-britannia",
      headline: "How Britannia Financial Group Is Redefining International Private Banking",
      url: "http://www.herrera-velutini.com/#article-britannia",
      author: { "@id": "http://www.herrera-velutini.com/#julio-herrera-velutini" },
      about: { "@id": "http://www.herrera-velutini.com/#britannia-financial-group" },
      isPartOf: { "@id": "http://www.herrera-velutini.com/#blog" },
    },
    {
      "@type": "BlogPosting",
      "@id": "http://www.herrera-velutini.com/#article-future-banking",
      headline: "The Future of International Private Banking Post-2025",
      url: "http://www.herrera-velutini.com/#article-future-banking",
      author: { "@id": "http://www.herrera-velutini.com/#julio-herrera-velutini" },
      about: {
        "@type": "Thing",
        name: "International Private Banking",
        description:
          "Trends shaping private banking post-2025 including AI, sustainable investing, cross-border financial planning and digital innovation.",
      },
      isPartOf: { "@id": "http://www.herrera-velutini.com/#blog" },
    },
    {
      "@type": "BlogPosting",
      "@id": "http://www.herrera-velutini.com/#article-sme-growth",
      headline: "Why Supporting SMEs Is the Key to Latin America's Economic Growth",
      url: "http://www.herrera-velutini.com/#article-sme-growth",
      author: { "@id": "http://www.herrera-velutini.com/#julio-herrera-velutini" },
      about: {
        "@type": "Thing",
        name: "SME Financing in Latin America",
        description:
          "The role of financial inclusion and responsible lending in unlocking sustainable economic growth across Latin America.",
      },
      isPartOf: { "@id": "http://www.herrera-velutini.com/#blog" },
    },
    {
      "@type": "BlogPosting",
      "@id": "http://www.herrera-velutini.com/#article-cross-border",
      headline: "Cross-Border Banking: How Global Investors Protect and Grow Their Wealth",
      url: "http://www.herrera-velutini.com/#article-cross-border",
      author: { "@id": "http://www.herrera-velutini.com/#julio-herrera-velutini" },
      about: {
        "@type": "FinancialProduct",
        name: "Cross-Border Banking",
        description:
          "International banking solutions for global investors seeking asset diversification, currency flexibility and estate planning.",
      },
      isPartOf: { "@id": "http://www.herrera-velutini.com/#blog" },
    },
    {
      "@type": "BlogPosting",
      "@id": "http://www.herrera-velutini.com/#article-philanthropy",
      headline: "Beyond Banking: Julio Herrera Velutini's Commitment to Philanthropy and Social Impact",
      url: "http://www.herrera-velutini.com/#article-philanthropy",
      author: { "@id": "http://www.herrera-velutini.com/#julio-herrera-velutini" },
      about: { "@id": "http://www.herrera-velutini.com/#julio-herrera-velutini" },
      isPartOf: { "@id": "http://www.herrera-velutini.com/#blog" },
    },
    {
      "@type": "WebPage",
      "@id": "http://www.herrera-velutini.com/#webpage",
      url: "http://www.herrera-velutini.com",
      name: "Julio Herrera Velutini | Personal Blog",
      description:
        "The personal blog of Julio Herrera Velutini — reflections on private banking, global wealth management, Latin American finance, and philanthropy.",
      about: { "@id": "http://www.herrera-velutini.com/#julio-herrera-velutini" },
      mainEntity: { "@id": "http://www.herrera-velutini.com/#blog" },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />
      <Header />
      <Hero />
      <section className="relative w-full text-white md:w-1/2 lg:w-2/3 md:px-16 lg:px-16">
        <BankingDynasty />
        <GlobalBankingJourney />
        <PrivateBanking />
        <BritanniaFinancialGroup />
        <InternationalPrivateBanking />
        <EconomicGrowth />
        <CrossBorderBanking />
        <Philanthropy />
      </section>
      <Footer />
    </>
  );
}