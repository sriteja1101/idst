"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Manrope } from "next/font/google"; // <-- ADDED FONT

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export default function HorizontalScroll() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-205%"]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.3, 0.6],
    ["", "#b38b6d"]
  );

  return (
    <>
      <section ref={targetRef} className="relative h-[300vh] hidden lg:block">
        <motion.div
          style={{ backgroundColor }}
          className="sticky top-0 flex h-screen items-center overflow-hidden transition-colors duration-500"
        >
          <motion.div style={{ x }} className="flex gap-2 px-5">
            <div className="shrink-0 mt-50">
              <Image
                src="/images/image-1.webp"
                alt="Image 1"
                width={490}
                height={340}
                className="object-cover"
              />
              <h2 className="text-xs text-black mt-4">
                <span className="font-bold">Wave</span>
                <span className="font-normal">, Food & Beverage</span>
              </h2>
              <p className="text-xs text-black">2025</p>
            </div>
            <div className="shrink-0 mt-100">
              <Image
                src="/images/image-2.webp"
                alt="Image 2"
                width={250}
                height={350}
                className="object-cover"
              />
            </div>
            <div className="shrink-0 mt-30 ml-15">
              <Image
                src="/images/image-3.webp"
                alt="Image 3"
                width={300}
                height={200}
                className="object-cover"
              />
            </div>
            <div className="shrink-0 mt-60 ml-10">
              <Image
                src="/images/image-4.webp"
                alt="Image 4"
                width={200}
                height={200}
                className="object-cover"
              />
            </div>
            <div className="shrink-0 mt-122 -ml-50">
              <Image
                src="/images/image-5.webp"
                alt="Image 5"
                width={250}
                height={380}
                className="object-cover"
              />
            </div>
            <div className="shrink-0 mt-30 ml-20">
              <Image
                src="/images/image-6.webp"
                alt="Image 6"
                width={390}
                height={240}
                className="object-cover"
              />
              <h2 className="text-xs text-black mt-4">
                <span className="font-bold">Beurre</span>
                <span className="font-normal">, Food & Beverage</span>
              </h2>
              <p className="text-xs text-black">2025</p>
            </div>
            <div className="shrink-0 mt-34 ml-25">
              <Image
                src="/images/image-7.webp"
                alt="Image 7"
                width={120}
                height={100}
                className="object-cover"
              />
            </div>
            <div className="shrink-0 mt-142 -ml-30">
              <Image
                src="/images/image-8.webp"
                alt="Image 8"
                width={190}
                height={190}
                className="object-cover"
              />
            </div>
            <div className="shrink-0 mt-82 -ml-20">
              <Image
                src="/images/image-9.webp"
                alt="Image 9"
                width={210}
                height={210}
                className="object-cover"
              />
            </div>
            <div className="shrink-0 mt-28 ml-40">
              <Image
                src="/images/image-10.webp"
                alt="Image 10"
                width={670}
                height={670}
                className="object-cover"
              />
              <h2 className="text-xs text-black mt-4">
                <span className="font-bold">Ruman</span>
                <span className="font-normal">, Food & Beverage</span>
              </h2>
              <p className="text-xs text-black">2025</p>
            </div>
            <div className="shrink-0 mt-130 ml-10 mr-10">
              <Image
                src="/images/image-11.webp"
                alt="Image 11"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <div className="shrink-0 mt-106">
              <Image
                src="/images/image-12.webp"
                alt="Image 12"
                width={280}
                height={300}
                className="object-cover"
              />
            </div>
            <div className="shrink-0 mt-40">
              <Image
                src="/images/image-13.webp"
                alt="Image 13"
                width={480}
                height={600}
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>
      <div className={`block lg:hidden ${manrope.className}`}>
        <div className="p-6">
          <div className="shrink-0">
            <Image
              src="/images/image-1.webp"
              alt="Image 1"
              width={490}
              height={340}
              className="object-cover"
            />
            <h2 className="text-xs text-black mt-4">
              <span className="font-bold">Wave</span>
              <span className="font-normal">, Food & Beverage</span>
            </h2>
            <p className="text-xs text-black">2025</p>
          </div>
          <div className="shrink-0 relative mt-4 w-full h-[600px]">
            <div className="absolute left-55 ">
              <Image
                src="/images/image-2.webp"
                alt="Image 2"
                width={120}
                height={120}
                className="object-cover"
              />
            </div>

            <div className="absolute top-30 -left-3">
              <Image
                src="/images/image-3.webp"
                alt="Image 3"
                width={160}
                height={140}
                className="object-cover"
              />
            </div>

            <div className="absolute top-75 -right-2">
              <Image
                src="/images/image-5.webp"
                alt="Image 5"
                width={140}
                height={130}
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-10 right-35">
              <Image
                src="/images/image-4.webp"
                alt="Image 4"
                width={120}
                height={120}
                className="object-cover"
              />
            </div>
          </div>
          <div className="shrink-0 mt-8 relative w-full h-[850px]">
            <div className="absolute top-0 ">
              <Image
                src="/images/image-6.webp"
                alt="Image 6"
                width={390}
                height={240}
                className="w-full h-full object-cover"
              />
              <h2 className="text-xs text-black mt-4">
                <span className="font-bold">Buerre</span>
                <span className="font-normal">, Food & Beverage</span>
              </h2>
              <p className="text-xs text-black">2025</p>
            </div>
            <div className="absolute top-85 left-52">
              <Image
                src="/images/image-7.webp"
                alt="Image 7"
                width={120}
                height={100}
                className="object-cover"
              />
            </div>
            <div className="absolute top-140">
              <Image
                src="/images/image-8.webp"
                alt="Image 8"
                width={130}
                height={130}
                className="object-cover"
              />
            </div>
            <div className="absolute top-150 right-0">
              <Image
                src="/images/image-9.webp"
                alt="Image 9"
                width={130}
                height={130}
                className="object-cover"
              />
            </div>
          </div>
          <div className="shrink-0 relative w-full h-[600px]">
            <div className="absolute top-0 left-0">
              <Image
                src="/images/image-10.webp"
                alt="Image 10"
                width={670}
                height={670}
                className="w-full h-full object-cover"
              />
              <h2 className="text-xs text-black mt-4">
                <span className="font-bold">Ruman</span>
                <span className="font-normal">, Food & Beverage</span>
              </h2>
              <p className="text-xs text-black">2025</p>
            </div>
            <div className="absolute top-70">
              <Image
                src="/images/image-11.webp"
                alt="Image 11"
                width={60}
                height={60}
                className="object-cover"
              />
            </div>
            <div className="absolute top-90 right-0">
              <Image
                src="/images/image-12.webp"
                alt="Image 12"
                width={160}
                height={100}
                className="object-cover"
              />
            </div>
            <div className="absolute top-110 mr-15">
              <Image
                src="/images/image-13.webp"
                alt="Image 13"
                width={580}
                height={700}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
