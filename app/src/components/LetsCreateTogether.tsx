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
      <div className="hidden md:block">
        <div
          className={`grid grid-cols-2 items-center justify-center w-full gap-10 border-y border-black mx-auto max-w-[95%] ${manrope.className}`}
        >
          <div className="flex justify-center divide-x divide-black items-center gap-10">
            <div className="flex-1 pr-15">
              <div className="relative h-[190px] flex items-center justify-center overflow-hidden">
                <AnimatePresence initial={false}>
                  <motion.img
                    key={current}
                    src={images[current]}
                    alt={`Slide ${current}`}
                    className="absolute w-[200px] h-[200px] object-cover"
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
            <div className=" flex flex-1 justify-center items-center">
              <h1 className="text-[26px] text-[#1C1A1A] font-serif">
                featured in:
              </h1>
            </div>
          </div>
          <div className=" flex justify-center items-center">
            <CompanyLogos />
          </div>
        </div>

        <div
          className={`${manrope.className} w-full grid grid-cols-2 mx-auto max-w-[95%] pb-10`}
        >
          <div className="flex items-center justify-center border-b border-black w-full py-12 px-6">
            
            <div className="grid grid-cols-3 justify-center gap-x-8 lg:gap-x-18">
              <div className="flex flex-col text-left gap-y-2">
                <div className="text-[11px] text-[#1C1A1A] relative group cursor-pointer whitespace-nowrap">
                  Instagram
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-[#1C1A1A] transition-all duration-300 group-hover:w-full"></div>
                </div>
                <div className="text-[11px] text-[#1C1A1A] relative group cursor-pointer whitespace-nowrap">
                  LinkedIn
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-[#1C1A1A] transition-all duration-300 group-hover:w-full"></div>
                </div>
              </div>
              <div className="flex flex-col text-left gap-y-2">
                <div className="text-[11px] text-[#1C1A1A] relative group cursor-pointer whitespace-nowrap">
                  Privacy Policy
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-[#1C1A1A] transition-all duration-300 group-hover:w-full"></div>
                </div>
                <div className="text-[11px] text-[#1C1A1A] relative group cursor-pointer whitespace-nowrap">
                  Terms & Conditions
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-[#1C1A1A] transition-all duration-300 group-hover:w-full"></div>
                </div>
              </div>
              <div className="flex flex-col text-left gap-y-2">
                <div className="text-[11px] text-[#1C1A1A] whitespace-nowrap">
                  @2025 IDST
                </div>
                <div className="text-[11px] text-[#1C1A1A] whitespace-nowrap">
                  Site Credits
                </div>
              </div>
            </div>
          </div>
          <div className="py-15 bg-[#321514] flex items-center justify-center">
            <h2 className="text-[34px] text-white cursor-pointer">
              Let’s create together.
            </h2>
          </div>
        </div>
      </div>
      <div
        className={`block md:hidden max-w-[95%] mx-auto  border-t border-black ${manrope.className}`}
      >
        <div className="relative h-[190px] flex items-center justify-center overflow-hidden border-b border-black py-6">
          <AnimatePresence initial={false}>
            <motion.img
              key={current}
              src={images[current]}
              alt={`Slide ${current}`}
              className="absolute w-[200px] h-[200px] object-cover"
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
                  ease: current === 0 ? [0.42, 0, 0.58, 1] : [0.6, 0, 0.8, 1],
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
        <div className="flex justify-center items-center py-6 border-b border-black">
          <h1 className="text-[26px] text-[#1C1A1A] font-serif">
            featured in:
          </h1>
        </div>
        <div className="flex justify-center items-center py-6 border-b border-black">
          <CompanyLogos />
        </div>
        <div className="flex items-center justify-center py-6 border-b border-black">
          <div className="flex flex-col sm:flex-row text-center sm:text-left gap-6 sm:gap-10">
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
            <div className="flex flex-col">
              <div className="text-[11px] text-[#1C1A1A] relative group cursor-pointer">
                Privacy Policy
                <div className="absolute bottom-0 left-0 w-0 h-px bg-[#1C1A1A] transition-all duration-300 group-hover:w-full"></div>
              </div>
              <div className="text-[11px] text-[#1C1A1A] relative group cursor-pointer">
                Terms & Conditions
                <div className="absolute bottom-0 left-0 w-0 h-px bg-[#1C1A1A] transition-all duration-300 group-hover:w-full"></div>
              </div>
            </div>
            <div className="flex flex-col text-center sm:text-right">
              <div className="text-[11px] text-[#1C1A1A]">@2025 IDST</div>
              <div className="text-[11px] text-[#1C1A1A]">Site Credits</div>
            </div>
          </div>
        </div>
        <div className="py-10 bg-[#321514] flex items-center justify-center">
          <h2 className="text-[24px] md:text-[34px] text-white cursor-pointer text-center px-4">
            Let’s create together.
          </h2>
        </div>
      </div>
    </>
  );
}
