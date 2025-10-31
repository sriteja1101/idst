"use client";

import HorizontalScroll from "./HorizontalScroll";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"], // add weights you use
});

const FeaturedWorks = () => {
  return (
    <>
      <div
        className={`h-[2300px] w-[1610px] ml-10 border-r border-l border-black ${manrope.className}`}
      >
        <div className="h-[70px] flex justify-between">
          <div className="h-[38px] w-[382px] pb-[3px] mt-1 ml-[60px] mb-[25px] text-[31px] text-[#1C1A1A] font-serif">
            <h1>featured work</h1>
          </div>
            <div className="h-5 w-[109px] mr-[72px] mb-[100px] mt-3 flex justify-center items-center text-[13px] tracking-[0.325px] leading-[19.5px] text-[#1C1A1A] hover:bg-[#968992] hover:text-white">
              <h1>VIEW GALLERY</h1>
            </div>
          </div>
        <HorizontalScroll />
      </div>
      
    </>
  );
};

export default FeaturedWorks;
