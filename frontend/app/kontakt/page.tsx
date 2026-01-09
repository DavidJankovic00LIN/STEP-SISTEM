import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktirajte STEP-SISTEM za profesionalna rešenja u oblasti industrijske automatizacije i PLC sistema. Firma iz Valjeva, Srbija. Projektovanje, programiranje i servis automatizovanih industrijskih sistema.",
  keywords: [
    "kontakt STEP-SISTEM",
    "industrijska automatizacija Valjevo",
    "PLC sistemi kontakt",
    "kontakt za automatizaciju",
  ],
  openGraph: {
    title: "Kontakt - STEP-SISTEM",
    description:
      "Kontaktirajte nas za profesionalna rešenja u oblasti industrijske automatizacije i PLC sistema.",
    type: "website",
  },
  alternates: {
    canonical: "/kontakt",
  },
};

export default function Kontakt() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <h1 className="mb-6 text-4xl font-bold text-gray-900">Kontakt</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700">
            Kontaktirajte nas za više informacija.
          </p>
        </div>
      </main>
    </div>
  );
}
