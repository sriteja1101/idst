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
          lg:flex-row lg:px-10 lg:pb-35
        `}
      >
        <div
          className="
            flex flex-row items-start gap-3 w-full px-4 pt-8
            lg:w-auto lg:mt-20 lg:px-0 lg:pt-0
          "
        >
          <div
            className="
              relative w-3/5 h-[50vh]
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
              relative w-2/5 h-[35vh]
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

        <div
          className="
            flex flex-col items-start text-left w-full px-6 py-12
            lg:items-start lg:text-left lg:px-15 lg:mt-50 lg:py-0
          "
        >
          <div className="w-full">
            <h2
              className="
                text-2xl font-extralight tracking-[0.02em] text-[#1C1A1A] mb-4 font-serif
                lg:text-[26px]
              "
            >
              services
            </h2>
          </div>

          <div className="w-full">
            <p
              className="
                text-3xl text-[#1C1A1A] leading-tight tracking-[-0.02em]
                lg:text-[47px] lg:w-[477px] lg:leading-[1.05]
              "
            >
              A curated design journey - from vision to reality.
            </p>
          </div>

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