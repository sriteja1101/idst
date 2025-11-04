"use client";

import { useState, useEffect } from "react";
// Removed: import Image from "next/image";
// Removed: import { Manrope } from "next/font/google";

// Removed: const manrope = Manrope(...)

const slides = [
  { id: "01", imageSrc: "/images/slide1.webp" },
  { id: "02", imageSrc: "/images/slide2.webp" },
  { id: "03", imageSrc: "/images/slide3.webp" },
  { id: "04", imageSrc: "/images/slide4.webp" },
];

export default function SyncedSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`w-full flex flex-col gap-3`}
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      <div className="relative w-full h-[45vh] sm:h-[65vh] md:h-[90vh]">
        {slides.map((slide, index) => (
          <img
            key={slide.id}
            src={slide.imageSrc}
            alt={`Slide ${slide.id}`}
            loading={index === 0 ? "eager" : "lazy"}
            className={`transition-opacity duration-1000 ease-in-out object-cover absolute inset-0 w-full h-full ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="text-sm text-gray-800 flex justify-end">
        <div className="hidden sm:block p-2 sm:mr-2">
          {slides.map((slide, index) => (
            <span
              key={slide.id}
              onClick={() => setActiveIndex(index)}
              className={`mr-6 cursor-pointer transition-all duration-300 ${
                index === activeIndex
                  ? "border-b-2 border-gray-800"
                  : "border-b-2 border-transparent"
              }`}
            >
              {slide.id}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

