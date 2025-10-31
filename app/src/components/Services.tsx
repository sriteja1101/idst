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
        className={`border-r border-l border-black w-[1610px] h-[885px] ml-10 ${manrope.className} flex pb-35 relative`}
      >
        <div className="border-t-2 absolute border-black h-[34px] w-[1508px] ml"></div>
        <div className="ml-10 mt-20 flex gap-3">
          <div className="relative w-[502px] h-[771px]">
            <Image
              src="/images/services-image-1.webp"
              alt="Service image 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-[310px]  h-[403px]">
            <Image
              src="/images/services-image-2.webp"
              alt="Service image 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="pl-10 mt-50 ml-10">
          <div className="">
            <h2 className="text-[32px] W-[567px] h-[38px] font-extralight tracking-[0.02em] text-[#1C1A1A] mb-4 font-serif">
              services
            </h2>
          </div>

          <div>
            <p className="text-[57px] w-[567px] text-[#1C1A1A] leading-[1.05] tracking-[-0.02em]">
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
