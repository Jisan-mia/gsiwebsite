import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#101d80",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gsitech.com"),
  title: {
    default: "GSiTech Solutions & Consultancy | BPO & Call Center Outsourcing",
    template: "%s | GSiTech Solutions & Consultancy",
  },
  description:
    "Scalable, secure, and cost-effective BPO & call center outsourcing services. Save 40-60% on operational costs with our skilled offshore teams. Serving USA, UK, Europe, Canada, and Australia.",
  keywords: [
    "BPO services",
    "call center outsourcing",
    "customer support outsourcing",
    "inbound call center",
    "outbound call center",
    "offshore BPO",
    "business process outsourcing",
    "customer service outsourcing",
    "virtual call center",
    "call center training",
    "telemarketing services",
    "lead generation services",
    "customer experience outsourcing",
  ],
  authors: [{ name: "GSiTech Solutions & Consultancy" }],
  creator: "GSiTech Solutions & Consultancy",
  publisher: "GSiTech Solutions & Consultancy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gsitech.com",
    siteName: "GSiTech Solutions & Consultancy",
    title: "GSiTech Solutions & Consultancy | BPO & Call Center Outsourcing",
    description:
      "Scalable, secure, and cost-effective BPO & call center outsourcing services. Save 40-60% on operational costs with our skilled offshore teams.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GSiTech Solutions & Consultancy - BPO Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GSiTech Solutions & Consultancy | BPO & Call Center Outsourcing",
    description:
      "Scalable, secure, and cost-effective BPO & call center outsourcing services. Save 40-60% on operational costs.",
    images: ["/images/og-image.jpg"],
    creator: "@gsitech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://gsitech.com",
  },
  category: "Business Services",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GSiTech Solutions & Consultancy",
  description:
    "Scalable, secure, and cost-effective BPO & call center outsourcing services for global businesses.",
  url: "https://gsitech.com",
  logo: "https://gsitech.com/images/logo.png",
  sameAs: [
    "https://linkedin.com/company/gsitech",
    "https://twitter.com/gsitech",
    "https://facebook.com/gsitech",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4567",
      contactType: "sales",
      areaServed: ["US", "GB", "CA", "AU", "EU"],
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4567",
      contactType: "customer support",
      areaServed: ["US", "GB", "CA", "AU", "EU"],
      availableLanguage: ["English"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Business Avenue, Suite 100",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10001",
    addressCountry: "US",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "BPO Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Inbound Call Center Services",
          description:
            "Professional customer support, help desk, and inquiry handling 24/7.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Outbound Call Center Services",
          description:
            "Telemarketing, lead generation, and customer outreach campaigns.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Managed BPO Services",
          description:
            "End-to-end managed operations including training, QA, and optimization.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
