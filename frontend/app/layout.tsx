import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://stepsistem.rs"
  ),
  title: {
    default: "STEP-SISTEM - Industrial automation & PLC solutions",
    template: "%s | STEP-SISTEM",
  },
  description:
    "STEP-SISTEM je firma iz Valjeva specijalizovana za industrijsku automatiku i PLC rešenja. Projektujemo, programiramo i puštamo u rad automatizovane industrijske sisteme, PLC programiranje, HMI i SCADA sisteme, elektro ormare i rešenja po meri.",
  keywords: [
    "PLC sistemi",
    "industrijska automatizacija",
    "HMI paneli",
    "SCADA sistemi",
    "elektro ormari",
    "PLC programiranje",
    "industrijska automatika",
    "Valjevo",
    "Srbija",
    "automatizovani sistemi",
    "projektovanje industrijskih sistema",
    "servis industrijskih sistema",
  ],
  authors: [{ name: "STEP-SISTEM" }],
  creator: "STEP-SISTEM",
  publisher: "STEP-SISTEM",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: "/",
    siteName: "STEP-SISTEM",
    title: "STEP-SISTEM - Industrial automation & PLC solutions",
    description:
      "Profesionalna rešenja za industrijsku automatizaciju i PLC sisteme. PLC programiranje, HMI i SCADA sistemi, elektro ormari i rešenja po meri u Valjevu, Srbija.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "STEP-SISTEM Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "STEP-SISTEM - Industrial automation & PLC solutions",
    description:
      "Profesionalna rešenja za industrijsku automatizaciju i PLC sisteme. PLC programiranje, HMI i SCADA sistemi.",
    images: ["/logo.png"],
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
    // Dodati kada budu dostupni
    // google: "verification_token",
    // yandex: "verification_token",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
