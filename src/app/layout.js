import Script from "next/script";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jjmarinelogistics.com";
const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-MEASUREMENT_ID"; // Replace with your GA Measurement ID

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "JJ Marine Logistics & HR Solutions Pvt. Ltd. | Global Maritime Excellence",
    template: "%s | JJ Marine Logistics & HR Solutions",
  },
  description:
    "Leading provider of global maritime logistics, vessel manning, seafarer recruitment, and student placements based in Alappuzha, India and expanding globally.",
  keywords: [
    "JJ Marine",
    "Maritime Logistics",
    "Seafarer Recruitment",
    "Crew Management",
    "Offshore Logistics",
    "Ship Manning Agency",
    "Maritime HR Solutions",
    "Alappuzha Maritime Company",
  ],
  authors: [{ name: "JJ Marine Logistics & HR Solutions Pvt. Ltd." }],
  creator: "JJ Marine Logistics & HR Solutions Pvt. Ltd.",
  publisher: "JJ Marine Logistics & HR Solutions Pvt. Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "JJ Marine Logistics & HR Solutions Pvt. Ltd.",
    description:
      "Global maritime logistics, offshore support, seafarer crew management, and student placements.",
    siteName: "JJ Marine Logistics",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "JJ Marine Logistics & HR Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JJ Marine Logistics & HR Solutions Pvt. Ltd.",
    description: "Global maritime logistics & seafarer HR solutions.",
    images: ["/images/hero.png"],
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "google-site-verification-id",
  },
};

export const viewport = {
  themeColor: "#0f3d3e",
  width: "device-width",
  initialScale: 1,
};

// Structured Organization & LocalBusiness JSON-LD Schema
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "JJ Marine Logistics & HR Solutions Pvt. Ltd.",
      url: siteUrl,
      logo: `${siteUrl}/images/logo.png`,
      email: "info.jjmarine@gmail.com",
      telephone: "+91-9447988100",
      address: {
        "@type": "PostalAddress",
        streetAddress: "E4 Tower, First Floor, Pacha-Edathua",
        addressLocality: "Alappuzha",
        addressRegion: "Kerala",
        postalCode: "689573",
        addressCountry: "IN",
      },
      sameAs: [
        "https://jjmarinelogistics.com",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "JJ Marine Logistics",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* Core Web Vitals: Preconnect & Preload hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Structured JSON-LD Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Google Analytics Script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
