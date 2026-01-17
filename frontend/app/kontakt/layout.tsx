import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktirajte STEP-SISTEM za profesionalna rešenja industrijske automatizacije i PLC sistema. Email, telefon i kontakt forma u Valjevu, Srbija.",
  keywords: [
    "Kontakt STEP-SISTEM",
    "Kontakt industrijska automatizacija Valjevo",
    "PLC programiranje kontakt",
    "HMI paneli kontakt",
    "SCADA sistemi kontakt",
    "industrijska automatika Valjevo",
  ],
  openGraph: {
    title: "Kontakt - STEP-SISTEM",
    description:
      "Kontaktirajte STEP-SISTEM za profesionalna rešenja industrijske automatizacije i PLC sistema. Email, telefon i kontakt forma u Valjevu, Srbija.",
    type: "website",
    url: "https://stepsistem.rs/kontakt",
    siteName: "STEP-SISTEM",
    locale: "sr_RS",
    images: [
      {
        url: "https://stepsistem.rs/logo.png",
        width: 1200,
        height: 630,
        alt: "STEP-SISTEM Kontakt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt - STEP-SISTEM",
    description:
      "Kontaktirajte STEP-SISTEM za profesionalna rešenja industrijske automatizacije i PLC sistema. Email, telefon i kontakt forma u Valjevu, Srbija.",
    images: ["https://stepsistem.rs/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://stepsistem.rs/kontakt",
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
