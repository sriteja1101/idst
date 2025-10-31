import React from "react";
import Image from "next/image";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export default function Ethos() {
  return (
    <div
      className={`border-r border-l border-black w-[1610px] h-[863px] ml-10 ${manrope.className} relative`}
    >
      <div className="flex justify-end pt-2 pr-10 gap-3 relative">
        <div className="w-[400px] h-[450px]">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source
              src="https://video.squarespace-cdn.com/content/v1/6893c0a46021d80319f1ea1d/f59cba5d-80ff-4540-a2ab-d499189e4871/segments/mpegts-h264-1080:1920.m3u8?Expires=1761979496&Signature=MmYzMTg5MTExYTFiZmY5N2IzNDVmNDY4OThmM2RmN2MxZDE3YjRkYzEzNjljOGQxNDBhYzU1MDY0Y2IwOWNjZQ"
              type="application/x-mpegURL"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <Image
            src="/images/ethos-image-3.webp"
            alt="Image 3"
            width={495}
            height={485}
            className="object-cover"
          />
        </div>
        <div className="absolute top-[460px] right-120 z-10">
          <Image
            src="/images/flower.webp"
            alt="Flower"
            width={116}
            height={127}
            className="object-contain"
          />
        </div>
      </div>
      <div className="absolute bottom-0 pl-10 pb-25">
        <h2 className="text-[32px] font-light tracking-[0.02em] font-serif text-[#1b1b1b] mb-3">
          ethos
        </h2>

        <p className="text-[57px] w-[950px] text-[#111] leading-[1.05] tracking-[-0.02em]">
          Our studio is built on what we believe in, ideas that shape our work &
          flow into every space we design.
        </p>

        <a
          href="#"
          className="inline-block text-[12px] tracking-[0.18em] uppercase text-[#111] mt-6 border-[#111] pb-0.5 px-2 transition-colors duration-300 hover:bg-[#321514] hover:text-white"
        >
          Learn more
        </a>
      </div>
      <div className="absolute bottom-0 left-[60px] right-[60px] h-0.5 bg-black"></div>
    </div>
  );
}
