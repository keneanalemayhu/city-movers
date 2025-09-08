// @/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://citymoverset.com"),
  title: "City Movers - Safe & Reliable Home and Office Relocations in Addis Ababa",
  description:
    "City Movers provides professional moving services in Addis Ababa. Safe home and office relocations, packing, storage, and expert movers you can trust.",
  keywords: [
    "Addis Ababa",
    "Ethiopia",
    "movers",
    "relocation",
    "moving",
    "packing",
    "storage",
    "City Movers",
    "Addis Ababa movers",
    "home relocation Ethiopia",
    "office moving services",
    "professional packing",
    "furniture moving Addis Ababa",
    "storage solutions Ethiopia",
    "safe moving company",
    "residential relocation",
    "commercial relocation",
    "local moving services Addis Ababa",
    "long distance moving Ethiopia",
    "moving and packing experts",
    "reliable moving company",
    "office relocation Addis Ababa",
    "home movers in Ethiopia",
    "affordable moving services",
    "moving trucks Addis Ababa",
    "professional movers and packers",
    "secure furniture transport",
    "storage and moving solutions",
    "trusted relocation company",
    "Ethiopia moving specialists",
    "house relocation services",
    "business moving services"
  ],
  openGraph: {
    title: "City Movers - Safe & Reliable Relocations",
    description:
      "City Movers provides professional moving services in Addis Ababa. Safe home and office relocations, packing, storage, and expert movers you can trust.",
    url: "https://citymoverset.com",
    siteName: "City Movers",
    images: [
      {
        url: "https://citymoverset.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "City Movers Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@citymoverset",
    creator: "@citymoverset",
    title: "City Movers - Safe & Reliable Relocations",
    description:
      "City Movers provides professional moving services in Addis Ababa. Safe home and office relocations, packing, storage, and expert movers you can trust.",
    images: ["https://citymoverset.com/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          {children}

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify([
                {
                  "@context": "https://schema.org",
                  "@type": "MovingCompany",
                  "name": "City Movers",
                  "image": "https://citymoverset.com/images/logo.png",
                  "url": "https://citymoverset.com",
                  "telephone": "+251938458888",
                  "email": "info@citymoverset.com",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "BMA Plaza, 2R23+62G",
                    "addressLocality": "Addis Ababa",
                    "addressCountry": "ET"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 9.0108,
                    "longitude": 38.7613
                  },
                  "openingHours": "Mo-Sa 08:00-18:00",
                  "areaServed": {
                    "@type": "AdministrativeArea",
                    "name": "Ethiopia"
                  },
                  "sameAs": [
                    "https://www.facebook.com/citymoverset",
                    "https://www.instagram.com/citymoverset"
                  ]
                },
                {
                  "@context": "https://schema.org",
                  "@type": "WebSite",
                  "url": "https://citymoverset.com",
                  "name": "City Movers",
                  "publisher": {
                    "@type": "Organization",
                    "name": "City Movers",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://citymoverset.com/images/logo.png"
                    }
                  }
                }
              ])
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
