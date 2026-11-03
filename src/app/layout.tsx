import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { siteConfig } from "@/config/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://admobitics.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "In-Auto Digital Screen Advertising in Hyderabad | Admobitics",
    template: `%s | Admobitics Digital Media`,
  },
  description:
    "Hyderabad's premier in-auto digital advertising network. Showcase your brand on 16:9 Full HD passenger-facing screens across Hitec City, Madhapur, Gachibowli & transit corridors from ₹49/auto/day.",
  applicationName: "Admobitics",
  authors: [
    {
      name: "Admobitics Digital Media Private Limited",
      url: siteUrl,
    },
  ],
  generator: "Next.js",
  keywords: [
    "in-auto advertising hyderabad",
    "auto rickshaw advertising hyderabad",
    "transit DOOH advertising hyderabad",
    "digital auto screen ads hyderabad",
    "admobitics",
    "admobitics digital media",
    "auto advertising rates hyderabad",
    "passenger screen advertising hyderabad",
    "auto rickshaw branding hyderabad",
    "digital OOH screens hyderabad",
    "mobility advertising telangana",
    "hitec city auto ads",
    "madhapur transit advertising",
    "gachibowli outdoor advertising",
    "jubilee hills DOOH screens",
    "cab and auto advertising network hyderabad",
    "hyderabad transit media",
    "auto screen video ads",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Admobitics Digital Media Private Limited",
  publisher: "Admobitics Digital Media Private Limited",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "In-Auto Digital Screen Advertising in Hyderabad | Admobitics",
    description:
      "Promote your business on passenger-facing 16:9 Full HD screens inside Hyderabad autos. Verified pilot network starting at ₹49/auto/day. Formula-based transparent pricing.",
    url: siteUrl,
    siteName: "Admobitics Digital Media Private Limited",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/admobitics-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Admobitics Digital Media - In-Auto Digital Screens Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "In-Auto Digital Screen Advertising in Hyderabad | Admobitics",
    description:
      "Modern in-auto digital screen advertising across Hyderabad's highest density corridors from ₹49/auto/day.",
    images: ["/admobitics-logo.jpg"],
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
  category: "Advertising & Marketing",
  other: {
    "geo.region": "IN-TG",
    "geo.placename": "Hyderabad",
    "geo.position": "17.3850;78.4867",
    "ICBM": "17.3850, 78.4867",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AdvertisingAgency",
        "@id": `${siteUrl}/#organization`,
        name: "Admobitics Digital Media Private Limited",
        alternateName: ["Admobitics", "Admobitics Media", "Admobitics Hyderabad"],
        url: siteUrl,
        logo: `${siteUrl}/admobitics-logo.jpg`,
        image: `${siteUrl}/admobitics-logo.jpg`,
        description:
          "Hyderabad's premier in-auto digital advertising network connecting businesses with daily commuters via 16:9 Full HD passenger-facing screens.",
        telephone: "+91-7659888483",
        email: "admobitics@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 17.3850,
          longitude: 78.4867,
        },
        priceRange: "₹49 - ₹199 per auto/day",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:30",
            closes: "18:30",
          },
        ],
        founder: [
          {
            "@type": "Person",
            name: "Thrishanth Yadav",
            jobTitle: "Director & Founder",
          },
          {
            "@type": "Person",
            name: "Vivek Gudala",
            jobTitle: "Director & Founder",
          },
          {
            "@type": "Person",
            name: "Madhan Akula",
            jobTitle: "Director & Founder",
          },
        ],
        areaServed: [
          { "@type": "City", name: "Hyderabad" },
          { "@type": "State", name: "Telangana" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "In-Auto Advertising Plans",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Standard Tier Campaign (30+ Days)",
                description: "16:9 Full HD passenger screen digital advertising inside Hyderabad commercial autos.",
              },
              price: "49",
              priceCurrency: "INR",
              unitText: "DAY",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom Tier Campaign (10-29 Days)",
                description: "Mid-duration corridor advertising campaign on in-auto digital screens.",
              },
              price: "69",
              priceCurrency: "INR",
              unitText: "DAY",
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Admobitics",
        description: "In-Auto Digital Screen Advertising in Hyderabad",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <html lang="en" className={jakarta.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-[#FAFAF9] text-[#0F172A] font-sans antialiased selection:bg-[#0D9488]/30 selection:text-teal-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
