import React from "react";
import Image from "next/image";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export default function Services() {
  return (
    <>
      <div
        className={`w-full h-full px-10 ${manrope.className} flex pb-35 relative`}
      >
        <div className=" mt-20 flex gap-3">
          <div className="relative w-[452px] h-[661px]">
            <Image
              src="/images/services-image-1.webp"
              alt="Service image 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-[280px] h-[353px]">
            <Image
              src="/images/services-image-2.webp"
              alt="Service image 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="px-15 mt-50">
          <div className="">
            <h2 className="text-[26px] W-[567px] h-[38px] font-extralight tracking-[0.02em] text-[#1C1A1A] mb-4 font-serif">
              services
            </h2>
          </div>

          <div>
            <p className="text-[47px] w-[477px] text-[#1C1A1A] leading-[1.05] tracking-[-0.02em]">
              A curated design journey - from vision to reality.
            </p>
          </div>

          <div className="inline-block text-[12px] pl-1 w-[130px] h-[17px] tracking-[0.18em] uppercase text-[#1C1A1A] hover:bg-[#321514] hover:text-white mt-6 pb-0.5">
            <a href="#">VIEW OFFERINGS</a>
          </div>
        </div>
      </div>
    </>
  );
}
