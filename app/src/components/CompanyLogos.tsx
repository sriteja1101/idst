"use client";

import { motion } from "framer-motion";

const images = [
  "/images/designers-logo.webp",
  "/images/commercial-logo.webp",
  "/images/design-boom.webp",
  "/images/identity-design.webp",
];

export default function CompanyLogos() {
  return (
    <div className="h-[120px] overflow-hidden w-[720px] flex items-center">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-65%"] }} 
        transition={{
          repeat: Infinity,
          duration: 20, 
          ease: "linear",
        }}
      >
        {images.map((src, index) => (
          <div key={index} className="mx-10 h-[100px] w-[150px]">
            <img
              src={src}
              alt={`logo-${index}`}
              className="w-[180px] h-[100px] object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
