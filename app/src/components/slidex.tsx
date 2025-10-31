"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

const slides = [
  { id: "01", imageSrc: "/Images/slide1.webp" },
  { id: "02", imageSrc: "/Images/slide2.webp" },
  { id: "03", imageSrc: "/Images/slide3.webp" },
  { id: "04", imageSrc: "/Images/slide4.webp" },
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
      className={`border-r border-l w-[1610px] h-[750px] ml-10 border-black ${manrope.className}`}
    >
      <div className="relative w-[1608px] h-[655px] overflow-hidden">
        {slides.map((slide, index) => (
          <Image
            key={slide.id}
            src={slide.imageSrc}
            alt={`Slide ${slide.id}`}
            fill
            priority={index === 0}
            className={`transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="text-sm mt-3 ml-10 h-10 text-gray-800 flex justify-end">
        <div className="p-2 mr-2">
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
