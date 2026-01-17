import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proizvodi",
  description:
    "STEP-SISTEM razvija i isporučuje prilagođena rešenja iz oblasti industrijske automatike: PLC upravljački sistemi, HMI paneli, SCADA sistemi, elektro ormari i rešenja po meri. Naša rešenja unapređuju proizvodne procese, povećavaju efikasnost i pouzdanost sistema.",
  keywords: [
    "PLC upravljački sistemi",
    "HMI paneli",
    "SCADA sistemi",
    "elektro ormari",
    "rešenja po meri",
    "industrijska automatika",
    "automatski sistemi",
    "PLC programiranje",
    "HMI interfejsi",
    "SCADA rešenja",
  ],
  openGraph: {
    title: "Proizvodi - STEP-SISTEM",
    description:
      "Prilagođena rešenja za industrijsku automatizaciju: PLC sistemi, HMI paneli, SCADA sistemi, elektro ormari i rešenja po meri.",
    type: "website",
    url: "https://stepsistem.rs/proizvodi",
    siteName: "STEP-SISTEM",
    locale: "sr_RS",
    images: [
      {
        url: "https://stepsistem.rs/logo.png",
        width: 1200,
        height: 630,
        alt: "STEP-SISTEM Proizvodi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proizvodi - STEP-SISTEM",
    description:
      "Prilagođena rešenja za industrijsku automatizaciju: PLC sistemi, HMI paneli, SCADA sistemi, elektro ormari i rešenja po meri.",
    images: ["https://stepsistem.rs/logo.png"],
  },
  alternates: {
    canonical: "https://stepsistem.rs/proizvodi",
  },
};

export default function ProizvodiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
