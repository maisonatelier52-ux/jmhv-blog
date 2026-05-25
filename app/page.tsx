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
  openGraph: {
    title: "Julio Herrera Velutini | 8th-Generation Banking Dynasty",
    description:
      "Scion of Latin America's oldest banking families. Founder of Britannia Financial Group. A global private banking legacy built on trust, innovation and long-term thinking.",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/Julio-Herrera-Velutini.jpg",
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
    images: ["/Julio-Herrera-Velutini.jpg"]
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "#julio-herrera-velutini",
      name: "Julio Herrera Velutini",
      jobTitle: "Private Banker & Wealth Manager",
      description:
        "Scion of one of Latin America's oldest banking families, founder of Britannia Financial Group, and advocate for global private banking and financial inclusion.",
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
        "@id": "#britannia-financial-group",
      },
    },
    {
      "@type": "Organization",
      "@id": "#britannia-financial-group",
      name: "Britannia Financial Group",
      description:
        "A financial services company offering global banking and wealth management services, combining personal advisory with cutting-edge financial technology.",
      founder: {
        "@id": "#julio-herrera-velutini",
      },
      areaServed: ["Europe", "Latin America", "United Kingdom", "Global"],
      knowsAbout: [
        "Wealth Management",
        "Investment Management",
        "Cross-Border Banking",
        "Estate Planning",
        "Financial Technology",
        "International Private Banking",
      ],
    },
    {
      "@type": "Article",
      "@id": "#article-banking-dynasty",
      headline: "Julio Herrera Velutini: The Legacy of an 8th-Generation Banking Dynasty",
      about: { "@id": "#julio-herrera-velutini" },
      author: { "@id": "#julio-herrera-velutini" },
    },
    {
      "@type": "Article",
      "@id": "#article-global-banking-journey",
      headline: "From Venezuela to London: Julio Herrera Velutini's Global Banking Journey",
      about: { "@id": "#julio-herrera-velutini" },
      author: { "@id": "#julio-herrera-velutini" },
    },
    {
      "@type": "Article",
      "@id": "#article-private-banking",
      headline: "What Is Private Banking and Who Is It For?",
      about: {
        "@type": "FinancialProduct",
        name: "Private Banking",
        description:
          "Tailored financial planning and wealth management services for entrepreneurs, professionals, investors and families.",
      },
      author: { "@id": "#julio-herrera-velutini" },
    },
    {
      "@type": "Article",
      "@id": "#article-britannia",
      headline: "How Britannia Financial Group Is Redefining International Private Banking",
      about: { "@id": "#britannia-financial-group" },
      author: { "@id": "#julio-herrera-velutini" },
    },
    {
      "@type": "Article",
      "@id": "#article-future-banking",
      headline: "The Future of International Private Banking Post-2025",
      about: {
        "@type": "Thing",
        name: "International Private Banking",
        description:
          "Trends shaping private banking post-2025 including AI, sustainable investing, cross-border financial planning and digital innovation.",
      },
      author: { "@id": "#julio-herrera-velutini" },
    },
    {
      "@type": "Article",
      "@id": "#article-sme-growth",
      headline: "Why Supporting SMEs Is the Key to Latin America's Economic Growth",
      about: {
        "@type": "Thing",
        name: "SME Financing in Latin America",
        description:
          "The role of financial inclusion and responsible lending in unlocking sustainable economic growth across Latin America.",
      },
      author: { "@id": "#julio-herrera-velutini" },
    },
    {
      "@type": "Article",
      "@id": "#article-cross-border",
      headline: "Cross-Border Banking: How Global Investors Protect and Grow Their Wealth",
      about: {
        "@type": "FinancialProduct",
        name: "Cross-Border Banking",
        description:
          "International banking solutions for global investors seeking asset diversification, currency flexibility and estate planning.",
      },
      author: { "@id": "#julio-herrera-velutini" },
    },
    {
      "@type": "Article",
      "@id": "#article-philanthropy",
      headline: "Beyond Banking: Julio Herrera Velutini's Commitment to Philanthropy and Social Impact",
      about: { "@id": "#julio-herrera-velutini" },
      author: { "@id": "#julio-herrera-velutini" },
    },
    {
      "@type": "WebPage",
      "@id": "#webpage",
      name: "Julio Herrera Velutini | 8th-Generation Banking Dynasty & Global Private Banking",
      description:
        "Explore the legacy of Julio Herrera Velutini, his global banking journey, Britannia Financial Group, and his vision for the future of international private banking.",
      about: { "@id": "#julio-herrera-velutini" },
      mainEntity: { "@id": "#julio-herrera-velutini" },
      hasPart: [
        { "@id": "#article-banking-dynasty" },
        { "@id": "#article-global-banking-journey" },
        { "@id": "#article-private-banking" },
        { "@id": "#article-britannia" },
        { "@id": "#article-future-banking" },
        { "@id": "#article-sme-growth" },
        { "@id": "#article-cross-border" },
        { "@id": "#article-philanthropy" },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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