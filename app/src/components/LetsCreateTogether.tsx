"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CompanyLogos from "./CompanyLogos";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});
const images = [
  "/images/featured-image-1.webp",
  "/images/featured-image-2.webp",
  "/images/featured-image-3.webp",
  "/images/featured-image-4.webp",
  "/images/featured-image-5.webp",
  "/images/featured-image-6.webp",
  "/images/featured-image-7.webp",
  "/images/featured-image-8.webp",
  "/images/featured-image-9.webp",
];

export default function LetsCreateTogether() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
        <div
          className={`h-[210px] w-[1610px] ml-10 border-r flex border-l border-black ${manrope.className}`}
        >
          <div>
            <div className="relative w-[382px] h-[210px] ml-15 border-r border-t border-b border-black items-center justify-center pl-20 overflow-hidden">
              <AnimatePresence initial={false}>
                <motion.img
                  key={current}
                  src={images[current]}
                  alt={`Slide ${current}`}
                  className="absolute w-[200] h-[200] object-cover"
                  initial={{
                    x: current === 0 ? "-100vw" : "100vw",
                    opacity: 0,
                    zIndex: 2,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    zIndex: 2,
                    transition: {
                      duration: current === 0 ? 0.7 : 0.4,
                      ease:
                        current === 0 ? [0.42, 0, 0.58, 1] : [0.6, 0, 0.8, 1],
                    },
                  }}
                  exit={{
                    opacity: 0,
                    x: "-100vw",
                    zIndex: 1,
                    transition: {
                      duration: 0,
                    },
                  }}
                />
              </AnimatePresence>
            </div>
          </div>

          <div className="h-[210px] w-[382px] border-b border-black border-t flex justify-center items-center">
            <h1 className="text-[32px] text-[#1C1A1A] font-serif">featured in:</h1>
          </div>
          <div className="border-b border-black border-t flex justify-center items-center">
            <CompanyLogos />
          </div>
        </div>
        <div
          className={`h-[210px] w-[1610px] ml-10 border-r border-l border-black ${manrope.className}`}
        >
          <div className="flex h-[210px]">
            <div className="w-[573px] ml-40 flex items-center justify-start">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <div className="text-[11px] text-[#1C1A1A] relative group cursor-pointer">
                    Instagram
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-[#1C1A1A] transition-all duration-300 group-hover:w-full"></div>
                  </div>
                  <div className="text-[11px] text-[#1C1A1A] relative group cursor-pointer">
                    LinkedIn
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-[#1C1A1A] transition-all duration-300 group-hover:w-full"></div>
                  </div>
                </div>
                <div className="flex flex-col ml-30">
                  <div className="text-[11px] text-[#1C1A1A] relative group cursor-pointer">
                    Privacy Policy
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-[#1C1A1A] transition-all duration-300 group-hover:w-full"></div>
                  </div>
                  <div className="text-[11px] text-[#1C1A1A] relative group cursor-pointer">
                    Terms & Conditions
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-[#1C1A1A] transition-all duration-300 group-hover:w-full"></div>
                  </div>
                </div>
                <div className="flex flex-col text-right ml-30">
                  <div className="text-[11px] text-[#1C1A1A]">@2025 IDST</div>
                  <div className="text-[11px] text-[#1C1A1A]">Site Credits</div>
                </div>
              </div>
            </div>
            <div className="w-[762px] ml-12.5 bg-[#321514] flex items-center justify-center">
              <h2 className="text-[34px] text-white cursor-pointer">
                Let’s create together.
              </h2>
            </div>
          </div>
        </div>
        <div className="border-t w-[1484px] absolute border-black h-[34px] ml-25.5"></div>
    </>
  );
}
