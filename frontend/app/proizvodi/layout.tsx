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
  },
  alternates: {
    canonical: "/proizvodi",
  },
};

export default function ProizvodiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
