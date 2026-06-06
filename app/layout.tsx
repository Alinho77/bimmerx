import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const WHATSAPP_URL = "https://wa.me/33768862998?text=Hi%2C%20I%27m%20interested%20in%20BimmerX";

export const metadata: Metadata = {
  metadataBase: new URL("https://bimmerx.com"),
  title: "BimmerX — Master Engineering Software for BMW",
  description:
    "Factory-grade BMW diagnostic and programming software. Read ISN by OBD on B48/B58, full BDC1/2/3 support, ECU repair, G-series EV. Used by professional workshops worldwide.",
  keywords:
    "BMW engineering software, BMW BDC programming, BMW ISN reading, B48 ISN OBD, B58 ISN OBD, BMW immobiliser, BMW key programming, BMW ECU repair, BDC2 BDC3, BMW Mercedes Tricore",
  openGraph: {
    title: "BimmerX — Master Engineering Software for BMW",
    description:
      "Factory-grade BMW diagnostic and programming software. Read ISN by OBD on B48/B58, full BDC1/2/3 support, ECU repair, G-series EV.",
    url: "https://bimmerx.com",
    siteName: "BimmerX",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BimmerX — Master Engineering Software for BMW",
    description: "Factory-grade BMW diagnostic and programming software.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "BimmerX",
              description:
                "Master-level BMW engineering and diagnostic software. Factory-grade access to BMW modules across E, F and G series.",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Windows",
              offers: {
                "@type": "Offer",
                url: WHATSAPP_URL,
              },
              brand: { "@type": "Brand", name: "Diatronik" },
            }),
          }}
        />
      </head>
      <body className="antialiased font-[var(--font-inter)] min-h-screen bg-[#0A0A0A]">
        {children}
      </body>
    </html>
  );
}
