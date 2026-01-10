"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import elektroImg from "../assets/elektro.jpg";
import plcImg from "../assets/plc_slika.jpg";
import scadaImg from "../assets/scada.jpg";

interface Proizvod {
  id: number;
  name: string;
  image: any;
  description: string;
  details: string;
}

const proizvodi: Proizvod[] = [
  {
    id: 1,
    name: "PLC upravljački sistemi",
    image: plcImg,
    description: "Prikaži više",
    details:
      "Projektujemo i programiramo PLC sisteme prilagođene konkretnim zahtevima procesa. Rešenja su stabilna, modularna i spremna za proširenje, uz jasno definisanu logiku rada i dokumentaciju.",
  },
  {
    id: 2,
    name: "HMI paneli",
    image: elektroImg,
    description: "Prikaži više",
    details:
      "Izrađujemo HMI interfejse koji omogućavaju jednostavno upravljanje mašinama i linijama. Interfejsi su pregledni, intuitivni i prilagođeni operaterima, sa jasnim prikazom stanja, alarma i parametara procesa.",
  },
  {
    id: 3,
    name: "SCADA sistemi",
    image: scadaImg,
    description: "Prikaži više",
    details:
      "Implementiramo SCADA rešenja za nadzor, prikupljanje podataka i analizu rada industrijskih sistema. Omogućavamo daljinski nadzor, evidenciju događaja, alarmiranje i optimizaciju proizvodnje.",
  },
  {
    id: 4,
    name: "Elektro ormari",
    image: elektroImg,
    description: "Prikaži više",
    details:
      "Projektujemo i izrađujemo elektro ormare u skladu sa važećim standardima. Ormani su funkcionalno raspoređeni, jasno obeleženi i prilagođeni dugotrajnom radu u industrijskim uslovima.",
  },
  {
    id: 5,
    name: "Rešenja po meri",
    image: plcImg,
    description: "Prikaži više",
    details:
      "Razvijamo specijalizovana automatizovana rešenja po zahtevu klijenta – od pojedinačnih mašina do kompletnih proizvodnih linija. Svako rešenje je prilagođeno konkretnoj primeni i tehnološkom procesu.",
  },
];

export default function Proizvodi() {
  const [selectedProizvod, setSelectedProizvod] = useState<Proizvod | null>(
    null
  );

  const handleCardClick = (proizvod: Proizvod) => {
    setSelectedProizvod(proizvod);
  };

  const closeModal = () => {
    setSelectedProizvod(null);
  };

  // Zatvori modal na ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (selectedProizvod) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedProizvod]);

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-6 text-center text-4xl font-bold text-gray-900">
            Proizvodi
          </h1>
          <p className="mb-12 text-center text-lg text-gray-700">
            STEP-SISTEM razvija i isporučuje prilagođena rešenja iz oblasti
            industrijske automatike, namenjena unapređenju proizvodnih procesa,
            povećanju efikasnosti i pouzdanosti sistema. Naši proizvodi su
            rezultat praktičnog inženjerskog iskustva i primene savremenih
            tehnologija u industriji.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {proizvodi.map((proizvod) => (
              <div
                key={proizvod.id}
                className="group relative cursor-pointer overflow-hidden rounded-lg bg-gray-900 shadow-lg transition-all duration-300 hover:shadow-xl"
                onClick={() => handleCardClick(proizvod)}
              >
                {/* Slika */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={proizvod.image}
                    alt={proizvod.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Crni okvir sa nazivom */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/90 p-4 text-white">
                  <h3 className="text-xl font-semibold">{proizvod.name}</h3>
                  <p className="mt-1 text-sm text-gray-300">
                    {proizvod.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Modal */}
      {selectedProizvod && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={selectedProizvod.image}
                alt={selectedProizvod.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-6 text-white">
                <h2 className="text-3xl font-bold">{selectedProizvod.name}</h2>
                
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <p className="leading-relaxed text-gray-700">
                {selectedProizvod.details}
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-gray-800 transition-colors hover:bg-white"
              aria-label="Zatvori"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
