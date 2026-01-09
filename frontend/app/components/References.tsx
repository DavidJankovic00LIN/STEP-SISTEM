"use client";

import { useState } from "react";
import Image from "next/image";
import elektroImg from "../assets/elektro.jpg";
import plcImg from "../assets/plc_slika.jpg";
import scadaImg from "../assets/scada.jpg";

interface Reference {
  id: number;
  name: string;
  image: any;
  description: string;
  details: string;
}

const references: Reference[] = [
  {
    id: 1,
    name: "Referenca 1",
    image: elektroImg,
    description: "Podnaslov",
    details:
      "Opis reference",
  },
  {
    id: 2,
    name: "Referenca 2",
    image: plcImg,
    description: "Podnaslov",
    details:
      "Opis reference",
  },
  {
    id: 3,
    name: "Referenca 3",
    image: scadaImg,
    description: "Podnaslov",
    details:
      "Opis reference",
  },
];

export default function References() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
          Reference
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {references.map((reference) => (
            <div
              key={reference.id}
              className="group relative cursor-pointer overflow-hidden rounded-lg bg-gray-900 shadow-lg transition-all duration-300"
              onClick={() => handleCardClick(reference.id)}
            >
              {/* Slika */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={reference.image}
                  alt={reference.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Crni okvir sa nazivom - podiže se na klik */}
              <div
                className={`absolute left-0 right-0 bg-black/90 text-white transition-all duration-500 ease-in-out ${
                  expandedId === reference.id ? "p-6" : "p-4"
                }`}
                style={{
                  bottom: 0,
                  transform:
                    expandedId === reference.id
                      ? "translateY(-20%)"
                      : "translateY(0)",
                }}
              >
                <div>
                  <h3 className="text-xl font-semibold">{reference.name}</h3>
                  <p className="mt-1 text-sm text-gray-300">
                    {reference.description}
                  </p>
                </div>

                {/* Dodatne informacije - prikazuju se kada je expanded */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    expandedId === reference.id
                      ? "max-h-96 opacity-100 mt-4"
                      : "max-h-0 opacity-0 mt-0"
                  }`}
                >
                  <p className="text-sm leading-relaxed text-gray-200">
                    {reference.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
