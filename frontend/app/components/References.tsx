"use client";

import Image from "next/image";
import elkoTimImg from "../assets/refer/elko tim.png";
import enelImg from "../assets/refer/enel.png";
import freskopImg from "../assets/refer/freskop.png";
import gorenjeImg from "../assets/refer/gorenje.png";
import interfacesImg from "../assets/refer/interfaces.png";
import loraImg from "../assets/refer/lora.png";
import mioniImg from "../assets/refer/mioni.png";
import poliformImg from "../assets/refer/poliform.png";

const logos = [
  elkoTimImg,
  enelImg,
  freskopImg,
  gorenjeImg,
  interfacesImg,
  loraImg,
  mioniImg,
  poliformImg,
];

export default function References() {
  // Tri kopije logoa za seamless infinite scroll - kada se završi prva trećina, druga trećina je već na istom mestu
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
          Reference
        </h2>
        <div className="relative overflow-hidden">
          {/* Infinite scroll container */}
          <div className="flex animate-scroll-infinite hover:[animation-play-state:paused]">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="mx-8 flex min-w-[250px] items-center justify-center md:min-w-[300px]"
              >
                <div className="relative h-24 w-full">
                  <Image
                    src={logo}
                    alt={`Reference logo ${(index % logos.length) + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
