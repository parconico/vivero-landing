import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vivero El Algarrobo La Rioja",
  description:
    "Vivero familiar con la mejor selección de plantas, árboles, arbustos y flores. Asesoramiento profesional en jardinería, paisajismo y mantenimiento de espacios verdes.",
  keywords: [
    "vivero",
    "plantas",
    "árboles",
    "jardines",
    "jardinería",
    "paisajismo",
    "flores",
    "arbustos",
    "plantas de interior",
    "plantas de exterior",
    "macetas",
    "tierra",
    "sustratos",
  ],
  authors: [{ name: "Vivero" }],
  openGraph: {
    title: "Vivero | Plantas, Árboles y Jardines",
    description:
      "Vivero familiar con la mejor selección de plantas, árboles y flores. Asesoramiento profesional en jardinería y paisajismo.",
    type: "website",
    locale: "es_AR",
    siteName: "Vivero",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Vivero",
    description:
      "Vivero familiar con la mejor selección de plantas, árboles y flores.",
    image: "/images/logo_vivero.png",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AR",
      addressLocality: "La Rioja",
      addressRegion: "La Rioja",
      postalCode: "5300",
      streetAddress: "Av. Alem 815",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00 - 13:00 y 17:00 - 21:00",
      },
    ],
  };

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
