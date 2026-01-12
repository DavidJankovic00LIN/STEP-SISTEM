"use client";

import { useState } from "react";
import Image from "next/image";
// Import svih slika iz foto foldera
import foto1 from "../assets/foto/1.png";
import foto2 from "../assets/foto/2.png";
import foto3 from "../assets/foto/3.png";
import foto4 from "../assets/foto/4.png";
import foto5 from "../assets/foto/5.png";
import foto6 from "../assets/foto/6.png";
import foto7 from "../assets/foto/7.png";
import foto8 from "../assets/foto/8.png";
import foto9 from "../assets/foto/9.png";
import foto10 from "../assets/foto/10.png";
import foto11 from "../assets/foto/11.png";
import foto12 from "../assets/foto/12.png";
import foto13 from "../assets/foto/13.png";
import foto14 from "../assets/foto/14.png";
import foto15 from "../assets/foto/15.png";
import foto16 from "../assets/foto/16.png";
import foto17 from "../assets/foto/17.png";
import foto18 from "../assets/foto/18.png";
import foto19 from "../assets/foto/19.png";
import foto20 from "../assets/foto/20.png";
import foto21 from "../assets/foto/21.png";
import foto22 from "../assets/foto/22.png";
import foto23 from "../assets/foto/23.png";
import foto24 from "../assets/foto/24.png";
import foto25 from "../assets/foto/25.png";
import foto26 from "../assets/foto/26.png";
import foto27 from "../assets/foto/27.png";
import foto28 from "../assets/foto/28.png";
import foto29 from "../assets/foto/29.png";
import foto30 from "../assets/foto/30.png";
import foto31 from "../assets/foto/31.png";
import foto32 from "../assets/foto/32.png";
import foto33 from "../assets/foto/33.png";
import foto34 from "../assets/foto/34.png";
import foto35 from "../assets/foto/35.png";
import foto36 from "../assets/foto/36.png";
import foto37 from "../assets/foto/37.png";
import foto38 from "../assets/foto/38.png";
import foto39 from "../assets/foto/39.png";
import foto40 from "../assets/foto/40.png";

const fotoImages = [
  foto1,
  foto2,
  foto3,
  foto4,
  foto5,
  foto6,
  foto7,
  foto8,
  foto9,
  foto10,
  foto11,
  foto12,
  foto13,
  foto14,
  foto15,
  foto16,
  foto17,
  foto18,
  foto19,
  foto20,
  foto21,
  foto22,
  foto23,
  foto24,
  foto25,
  foto26,
  foto27,
  foto28,
  foto29,
  foto30,
  foto31,
  foto32,
  foto33,
  foto34,
  foto35,
  foto36,
  foto37,
  foto38,
  foto39,
  foto40,
];

export default function Proizvodi() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-center text-4xl font-bold text-gray-900">
            Proizvodi
          </h1>

          {/* Tekst sekcija */}
          <div className="mb-12 space-y-8 text-gray-700">
            <p className="text-lg leading-relaxed">
              STEP-SISTEM razvija i isporučuje prilagođena rešenja iz oblasti
              industrijske automatike, namenjena unapređenju proizvodnih procesa,
              povećanju efikasnosti i pouzdanosti sistema. Naši proizvodi su
              rezultat praktičnog inženjerskog iskustva i primene savremenih
              tehnologija u industriji.
            </p>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                PLC upravljački sistemi
              </h2>
              <p className="leading-relaxed">
                Projektujemo i programiramo PLC sisteme prilagođene konkretnim
                zahtevima procesa. Rešenja su stabilna, modularna i spremna za
                proširenje, uz jasno definisanu logiku rada i dokumentaciju.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                HMI paneli
              </h2>
              <p className="leading-relaxed">
                Izrađujemo HMI interfejse koji omogućavaju jednostavno
                upravljanje mašinama i linijama. Interfejsi su pregledni,
                intuitivni i prilagođeni operaterima, sa jasnim prikazom stanja,
                alarma i parametara procesa.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                SCADA sistemi
              </h2>
              <p className="leading-relaxed">
                Implementiramo SCADA rešenja za nadzor, prikupljanje podataka i
                analizu rada industrijskih sistema. Omogućavamo daljinski nadzor,
                evidenciju događaja, alarmiranje i optimizaciju proizvodnje.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Elektro ormari
              </h2>
              <p className="leading-relaxed">
                Projektujemo i izrađujemo elektro ormare u skladu sa važećim
                standardima. Ormani su funkcionalno raspoređeni, jasno obeleženi i
                prilagođeni dugotrajnom radu u industrijskim uslovima.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Rešenja po meri
              </h2>
              <p className="leading-relaxed">
                Razvijamo specijalizovana automatizovana rešenja po zahtevu
                klijenta – od pojedinačnih mašina do kompletnih proizvodnih
                linija. Svako rešenje je prilagođeno konkretnoj primeni i
                tehnološkom procesu.
              </p>
            </section>
          </div>

          {/* Galerija */}
          <div className="mt-12">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
              Galerija
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {fotoImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative cursor-pointer overflow-hidden rounded-lg bg-gray-100"
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="relative aspect-square">
                    <Image
                      src={image}
                      alt={`Proizvod ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Modal za prikaz slike */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={fotoImages[selectedImage]}
              alt={`Proizvod ${selectedImage + 1}`}
              width={1200}
              height={800}
              className="h-auto w-full max-h-[90vh] rounded-lg object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
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
