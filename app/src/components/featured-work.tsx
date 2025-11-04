"use client";

import HorizontalScroll from "./HorizontalScroll";
import { Manrope } from "next/font/google";
import Link from "next/link"; 

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const FeaturedWorks = () => {
  return (
    <>
      <div
        className={`w-full ${manrope.className} border-b border-black`}
      >
        <div
          className="
            flex justify-between items-baseline
            px-6 py-8
            lg:h-[70px] lg:items-center lg:py-0
          "
        >
          <h1
            className="
              text-3xl font-serif text-[#1C1A1A]
              lg:text-[31px] lg:ml-[60px]
            "
          >
            featured work
          </h1>
          <Link
            href="/gallery"
            className="
              p-2 uppercase text-[13px] tracking-[0.325px] leading-[19.5px] text-[#1C1A1A]
              transition-colors duration-300 hover:bg-[#968992] hover:text-white
              lg:mr-[72px]
            "
          >
            VIEW GALLERY
          </Link>
        </div>
        <HorizontalScroll />
      </div>
    </>
  );
};

export default FeaturedWorks;