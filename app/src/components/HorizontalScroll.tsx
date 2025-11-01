"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function HorizontalScroll() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-170%"]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.3, 0.6],
    ["", "#b38b6d"] // darker brown
  );

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <motion.div
        style={{ backgroundColor }}
        className="sticky top-0 flex h-screen items-center overflow-hidden transition-colors duration-500"
      >
        <motion.div style={{ x }} className="flex gap-2 px-10 py-20">
          <div className="shrink-0 mt-30">
            <Image
              src="/images/image-1.webp"
              alt="Image 1"
              width={490}
              height={340}
              className="object-cover"
            />
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
        </motion.div>
      </motion.div>
    </section>
  );
}
