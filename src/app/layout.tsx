import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { services, siteConfig } from "@/lib/constants";
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
    "BPO & call center outsourcing for e-commerce, healthcare, fintech, SaaS, travel & telecom. Inbound, outbound/telesales, training and managed operations.",
  keywords: [
    "BPO services",
    "call center outsourcing",
    "customer support outsourcing",
    "inbound call center",
    "outbound call center",
    "telesales services",
    "offshore BPO",
    "business process outsourcing",
    "customer service outsourcing",
    "virtual call center",
    "call center training",
    "telemarketing services",
    "lead generation services",
    "e-commerce customer support",
    "healthcare BPO",
    "fintech customer support",
    "SaaS customer support",
    "travel call center",
    "telecom support",
    "web development services",
    "social media marketing",
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
      "BPO & call center outsourcing for e-commerce, healthcare, fintech, SaaS, travel & telecom. Inbound, outbound/telesales, training and managed operations.",
    images: [
      {
        url: "/og-image.svg",
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
      "BPO & call center outsourcing for e-commerce, healthcare, fintech, SaaS, travel & telecom. Inbound, outbound/telesales, training and managed operations.",
    images: ["/og-image.svg"],
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
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/logo.webp", type: "image/webp" }],
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/logo.webp`,
      description: siteConfig.description,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      sameAs: Object.values(siteConfig.socials).filter(Boolean),
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: siteConfig.phone,
          contactType: "sales",
          areaServed: ["US", "GB", "CA", "AU", "EU"],
          availableLanguage: ["English"],
        },
        {
          "@type": "ContactPoint",
          telephone: siteConfig.phone,
          contactType: "customer support",
          areaServed: ["US", "GB", "CA", "AU", "EU"],
          availableLanguage: ["English"],
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Plot no-7, Road Number 1",
        addressLocality: "Dhaka",
        addressRegion: "Dhaka",
        postalCode: "1207",
        addressCountry: "BD",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "BPO Services",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      inLanguage: "en",
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    },
    {
      "@type": "ProfessionalService",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      serviceType: [
        "BPO Services",
        "Call Center Outsourcing",
        "Inbound Support",
        "Outbound / Telesales",
        "Managed Operations",
        "Training & Security Programs",
        "Web Development",
        "Social Media Marketing",
      ],
      areaServed: ["US", "GB", "CA", "AU", "EU"],
      email: siteConfig.email,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Plot no-7, Road Number 1",
        addressLocality: "Dhaka",
        addressRegion: "Dhaka",
        postalCode: "1207",
        addressCountry: "BD",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.webp" />
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
