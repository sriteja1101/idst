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
      className={`relative w-full overflow-hidden ${manrope.className}`}
    >
      <div
        className="
          relative flex flex-col items-start text-left w-full px-6 pt-10 pb-12
          lg:items-start lg:text-left lg:justify-center lg:min-h-[700px] lg:pl-10  lg:pt-70
        "
      >
        <h2
          className="
            text-xl font-light font-serif text-[#1b1b1b] mb-3
            lg:text-[32px]
          "
        >
          ethos
        </h2>

        <p
          className="
            text-[21px] w-full max-w-2xl text-[#111] leading-6.5
            lg:text-[46px] lg:w-[850px] lg:max-w-none lg:leading-[1.05] lg:tracking-[-0.02em]
          "
        >
          Our studio is built on what we believe in, ideas that shape our work &
          flow into every space we design.
        </p>

        <a
          href="#"
          className="
            inline-block text-[12px] tracking-[0.18em] uppercase text-[#111] mt-6 pb-0.5 
            transition-colors duration-300 hover:bg-[#321514] hover:text-white
            lg:w-[100px]
          "
        >
          Learn more
        </a>
      </div>
      <div
        className="
          relative w-full flex flex-row items-start px-4 
          lg:absolute lg:top-0 lg:right-0 lg:w-auto lg:flex-row lg:items-start lg:pt-0 lg:pr-10 lg:pb-0
        "
      >
        <div
          className="
            w-3/5 h-auto overflow-hidden pr-2
            lg:w-[340px] lg:h-[340px] lg:-mr-7 lg:pr-8
          "
        >
          <video
            src="/images/main.mp4" 
            width="390"
            height="390"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain" 
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <div
          className="
            w-[130px] h-[165px] overflow-hidden pl-1
            lg:w-[380px] lg:h-[480px] lg:pl-0
          "
        >
          <Image
            src="/images/ethos-image-3.webp"
            alt="Decorative lamp"
            width={380}
            height={480}
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="
            block absolute bottom-10 -right-5 w-24 h-18 
            lg:absolute lg:-bottom-10 lg:right-93 lg:w-[110px] lg:h-[120px]
          "
        >
          <Image
            src="/images/flower.webp"
            alt="Decorative flower"
            width={140}
            height={140}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

