"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import slika1 from "../assets/18.png";
import slika2 from "../assets/24.png";
import slika3 from "../assets/31.png";
import slika4 from "../assets/34.png";
import slika5 from "../assets/36.png";

const slides = [
  {
    id: 1,
    image: slika1,
    alt: "Elektro Instalacije",
  },
  {
    id: 2,
    image: slika2,
    alt: "PLC Sistemi",
  },
  {
    id: 3,
    image: slika3,
    alt: "SCADA Rešenja 1",
  },
  {
    id: 4,
    image: slika4,
    alt: "SCADA Rešenja 2",
  },
  {
    id: 5,
    image: slika5,
    alt: "SCADA Rešenja 3",
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
          console.log(`Preloaded slide ${idx + 1}`);
        };
        img.onerror = () => {
          console.error(`Failed to preload slide ${idx + 1}`);
        };
      } catch (error) {
        console.error(`Error preloading slide ${idx + 1}:`, error);
      }
    });
  }, []);

  // Automatsko menjanje slika na svakih 2.5 sekundi
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 1700); // 2.5 sekunde

    return () => clearInterval(interval);
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
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index <= 2}
            quality={90}
            sizes="100vw"
            loading="eager"
            onError={(e) => {
              console.error(`Error loading image for slide ${index + 1}:`, slide.alt);
            }}
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      ))}

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
