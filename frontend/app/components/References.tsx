"use client";

import { useEffect, useRef } from "react";
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
  // Dve kopije logoa za seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoScrollInterval = useRef<number | null>(null);

  const autoScroll = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 1.2;
      const { scrollLeft, scrollWidth } = sliderRef.current;
      const halfScrollWidth = scrollWidth / 2;
      if (scrollLeft >= halfScrollWidth) {
        sliderRef.current.scrollLeft = scrollLeft - halfScrollWidth;
      }
    }
    autoScrollInterval.current = requestAnimationFrame(autoScroll);
  };

  const startAutoScroll = () => {
    autoScrollInterval.current = requestAnimationFrame(autoScroll);
  };

  const stopAutoScroll = () => {
    if (autoScrollInterval.current) {
      cancelAnimationFrame(autoScrollInterval.current);
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
          Reference
        </h2>
        <div className="relative overflow-hidden">
          {/* Infinite scroll container */}
          <div
            ref={sliderRef}
            className="flex overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="mx-8 flex min-w-[250px] items-center justify-center md:min-w-[300px] flex-shrink-0"
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
