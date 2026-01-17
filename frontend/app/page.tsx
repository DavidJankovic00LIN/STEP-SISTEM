import type { Metadata } from "next";
import Slider from "./components/Slider";
import References from "./components/References";
import HashScrollHandler from "./components/HashScrollHandler";

export const metadata: Metadata = {
  title: "STEP SISTEM - Profesionalna rešenja za industrijsku automatizaciju i PLC sisteme",
  description:
    "STEP-SISTEM je firma iz Valjeva specijalizovana za industrijsku automatiku i PLC rešenja. Bavimo se projektovanjem, programiranjem i puštanjem u rad automatizovanih industrijskih sistema. PLC programiranje, HMI i SCADA sistemi, elektro ormari i servis industrijskih sistema.",
  keywords: [
    "PLC sistemi Valjevo",
    "industrijska automatizacija",
    "PLC programiranje",
    "HMI paneli",
    "SCADA sistemi",
    "elektro ormari",
    "servis industrijskih sistema",
    "projektovanje automatizovanih sistema",
  ],
  openGraph: {
    title: "STEP-SISTEM - Profesionalna rešenja za industrijsku automatizaciju",
    description:
      "Firma iz Valjeva specijalizovana za industrijsku automatiku i PLC rešenja. Projektovanje, programiranje i puštanje u rad automatizovanih industrijskih sistema.",
    type: "website",
    url: "https://stepsistem.rs",
    siteName: "STEP-SISTEM",
    locale: "sr_RS",
    images: [
      {
        url: "https://stepsistem.rs/logo.png",
        width: 1200,
        height: 630,
        alt: "STEP-SISTEM Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "STEP-SISTEM - Profesionalna rešenja za industrijsku automatizaciju",
    description:
      "STEP-SISTEM je firma iz Valjeva specijalizovana za industrijsku automatiku i PLC rešenja. Bavimo se projektovanjem, programiranjem i puštanjem u rad automatizovanih industrijskih sistema, sa fokusom na pouzdan rad, stabilnost procesa i dugoročnu održivost rešenja.",
    images: ["https://stepsistem.rs/logo.png"],
  },
  alternates: {
    canonical: "https://stepsistem.rs/",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HashScrollHandler />
      <Slider />
      <main id="o-nama" className="container mx-auto px-4 py-12 scroll-mt-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold text-gray-900">
            Dobrodošli u STEP-SISTEM
          </h1>
          <p className="mb-12 text-xl text-gray-700">
            Profesionalna rešenja za industrijsku automatizaciju i PLC sisteme
          </p>
          <div className="space-y-6 text-left text-gray-700 leading-relaxed">
            <p>
              STEP-SISTEM je firma iz Valjeva specijalizovana za industrijsku
              automatiku i PLC rešenja. Bavimo se projektovanjem, programiranjem
              i puštanjem u rad automatizovanih industrijskih sistema, sa fokusom
              na pouzdan rad, stabilnost procesa i dugoročnu održivost rešenja.
            </p>
            <p>
              Naš cilj je da klijentima obezbedimo funkcionalna, jasna i
              efikasna upravljačka rešenja, prilagođena realnim potrebama
              proizvodnje. Radimo kako na novim projektima, tako i na
              modernizaciji i unapređenju postojećih mašina i proizvodnih linija.
            </p>
            <p>
              Specijalizovani smo za PLC programiranje, izradu HMI i SCADA
              sistema, projektovanje i izradu elektro ormara, kao i servis i
              dijagnostiku industrijskih sistema. Posebnu pažnju posvećujemo
              preglednoj dokumentaciji, lakoj upotrebi sistema i obuci operatera.
            </p>
            <p>
              STEP-SISTEM pristupa svakom projektu individualno, sa jasnom
              komunikacijom, tehničkom preciznošću i pouzdanim rešenjima koja
              smanjuju zastoje i povećavaju produktivnost.
          </p>
          </div>
        </div>
      </main>
      <References />
    </div>
  );
}
