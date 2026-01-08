"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import elektroImg from "../assets/elektro.jpg";
import plcImg from "../assets/plc_slika.jpg";
import scadaImg from "../assets/scada.jpg";

const slides = [
  {
    id: 1,
    title: "Elektro Instalacije",
    subtitle: "Profesionalne Elektro Instalacije",
    image: elektroImg,
  },
  {
    id: 2,
    title: "PLC Sistemi",
    subtitle: "Napredni PLC Sistemi",
    image: plcImg,
  },
  {
    id: 3,
    title: "SCADA Rešenja",
    subtitle: "Kompletna SCADA Rešenja",
    image: scadaImg,
  },
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Preload all images
  useEffect(() => {
    slides.forEach((slide, idx) => {
      try {
        const img = new window.Image();
        // Next.js Image import vraća objekat sa src property
        if (slide.image && typeof slide.image === "object" && "src" in slide.image) {
          img.src = (slide.image as { src: string }).src;
        } else if (typeof slide.image === "string") {
          img.src = slide.image;
        }
        img.onload = () => {
          console.log(`Preloaded slide ${idx + 1}: ${slide.title}`);
        };
        img.onerror = () => {
          console.error(`Failed to preload slide ${idx + 1}: ${slide.title}`);
        };
      } catch (error) {
        console.error(`Error preloading slide ${idx + 1}:`, error);
      }
    });
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      {/* Background slike sa fade transition */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index <= 1}
            quality={90}
            sizes="100vw"
            loading={index <= 1 ? "eager" : "lazy"}
            onError={(e) => {
              console.error(`Error loading image for slide ${index + 1}:`, slide.title);
            }}
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
        aria-label="Previous slide"
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
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
        aria-label="Next slide"
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
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 right-12 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
