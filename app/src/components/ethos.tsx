"use client";

import React from "react";
import Image from "next/image";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export default function Ethos() {
  return (
    <section
      className={`relative w-full h-full overflow-hidden ${manrope.className}`}
    >
      {/* Image Collage - positioned at top right */}
      <div className="absolute top-0 right-0 flex items-start pr-10">
        {/* Left smaller image */}
        <div className="w-[340px] h-[340px] overflow-hidden -mr-7">
          <Image
            src="/images/video+cover.webp"
            alt="Interior design top"
            width={390}
            height={390}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="w-[380px] h-[480px] overflow-hidden">
          <Image
            src="/images/ethos-image-3.webp"
            alt="Decorative lamp"
            width={380}
            height={480}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Decorative flower illustration */}
        <div className="absolute -bottom-10 right-93">
          <Image
            src="/images/flower.webp"
            alt="Decorative flower"
            width={110}
            height={120}
            className="object-contain"
          />
        </div>
      </div>

      {/* Text content */}
      <div className="relative flex flex-col justify-end min-h-[800px] pl-10 pb-20">
        <h2 className="text-[32px] font-light font-serif text-[#1b1b1b] mb-3">
          ethos
        </h2>

        <p className="text-[46px] w-[850px] text-[#111] leading-[1.05] tracking-[-0.02em]">
          Our studio is built on what we believe in, ideas that shape our work &
          flow into every space we design.
        </p>

        <a
          href="#"
          className="inline-block text-[12px] w-[100px] tracking-[0.18em] uppercase text-[#111] mt-6  pb-0.5 transition-colors duration-300 hover:bg-[#321514] hover:text-white"
        >
          Learn more
        </a>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-black"></div>
    </section>
  );
}
