import type { Metadata, Viewport } from "next";
import { services, siteConfig } from "@/lib/constants";
import SiteAnimations from "@/components/SiteAnimations";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#071120",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gsitechbd.com"),
  title: {
    default: "GSiTech | AI-Powered Customer Support & Business Process Automation",
    template: "%s | GSiTech",
  },
  description:
    "AI-powered customer support, WhatsApp automation, hybrid service teams, and business process automation for global businesses.",
  keywords: [
    "AI customer support",
    "business process automation",
    "WhatsApp automation",
    "AI outsourcing company",
    "AI-powered BPO",
    "hybrid support team",
    "customer support automation",
    "back-office automation",
    "workflow automation",
    "Bangladesh outsourcing",
    "global customer support",
    "AI automation agency",
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
    url: "https://gsitechbd.com",
    siteName: "GSiTech Solutions & Consultancy",
    title: "GSiTech | AI-Powered Customer Support & Business Process Automation",
    description:
      "Reduce operational cost and scale faster with AI automation, hybrid support teams, and workflow design built for global businesses.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "GSiTech - AI-powered customer support and automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GSiTech | AI-Powered Customer Support & Business Process Automation",
    description:
      "AI automation and human expertise for customer support, sales workflows, and back-office execution.",
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
    canonical: "https://gsitechbd.com",
  },
  category: "Technology Services",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/logo.webp", type: "image/webp" }],
  },
};

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
        name: "AI Automation Services",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
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
      serviceType: services.map((service) => service.title),
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
      <body className="antialiased" suppressHydrationWarning>
        <SiteAnimations />
        {children}
      </body>
    </html>
  );
}
