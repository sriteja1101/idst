"use client";
import Image from "next/image";
import { Manrope } from "next/font/google";
import Link from "next/link";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export default function Services() {
  return (
    <>
      <div
        className={`
          w-full ${manrope.className}
          flex flex-col
          md:flex-row md:flex-wrap md:justify-center
          lg:flex-row lg:px-10 lg:pb-10
        `}
      >
        {/* Images Section */}
        <div
          className="
            flex flex-row items-start justify-center gap-3 w-full px-4 pt-8
            md:w-auto md:px-6 md:pt-10
            lg:w-auto lg:mt-20 lg:px-0 lg:pt-0 border-t border-black
          "
        >
          <div
            className="
              relative w-[60%] h-[40vh]
              md:w-[320px] md:h-[420px]
              lg:w-[452px] lg:h-[661px]
            "
          >
            <Image
              src="/images/services-image-1.webp"
              alt="Service image 1"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 60vw, 452px"
            />
          </div>

          <div
            className="
              relative w-[40%] h-[25vh]
              md:w-[200px] md:h-[260px]
              lg:w-[280px] lg:h-[353px]
            "
          >
            <Image
              src="/images/services-image-2.webp"
              alt="Service image 2"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 40vw, 280px"
            />
          </div>
        </div>

        {/* Text Section */}
        <div
          className="
            flex flex-col items-start text-left w-full px-6 py-12
            md:px-10 md:py-8 md:w-[80%] md:mx-auto
            lg:items-start lg:text-left lg:px-15 lg:mt-50 lg:py-0
          "
        >
          <h2
            className="
              text-2xl font-extralight tracking-[0.02em] text-[#1C1A1A] mb-4 font-serif
              lg:text-[26px]
            "
          >
            services
          </h2>

          <p
            className="
              text-3xl text-[#1C1A1A] leading-tight tracking-[-0.02em]
              md:text-[32px] md:leading-[1.1]
              lg:text-[47px] lg:w-[477px] lg:leading-[1.05]
            "
          >
            A curated design journey - from vision to reality.
          </p>

          <Link
            href="#"
            className="
              inline-block text-[12px] tracking-[0.18em] uppercase text-[#1C1A1A] 
              transition-colors duration-300 hover:bg-[#321514] hover:text-white mt-6 pb-0.5
            "
          >
            VIEW OFFERINGS
          </Link>
        </div>
      </div>
    </>
  );
}
