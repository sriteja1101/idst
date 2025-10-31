"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Manrope } from "next/font/google";
import { motion } from "framer-motion";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // close on ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 pointer-events-none z-40 ${manrope.className}`}
    >
      <div
        onClick={onClose}
        className={`pointer-events-${isOpen ? "auto" : "none"} transition-opacity duration-300 ${
          isOpen ? "opacity-50" : "opacity-0"
        } absolute top-0 left-[35%] right-0 bottom-0`}
      />
      <aside
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 left-0 bottom-0 w-[524px] h-[897px] transform transition-transform duration-450 ease-in-out pointer-events-auto
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        style={{ willChange: "transform" }}
      >
        <div className="h-full bg-[#321514] text-white border-r border-black flex flex-col">
          <div className="pt-4 pb-8 px-10 flex justify-end">
            <motion.button
              initial={{ y: 10, opacity: 0 }}
              animate={isOpen ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
              transition={{ duration: 1 }}
              onClick={onClose}
              className="text-[27px] tracking-wide font-serif font-normal opacity-95"
              aria-label="Close sidebar"
            >
              close
            </motion.button>
          </div>
          <nav className="flex-1 ml-16 mt-6 space-y-6">
            <ul className="flex flex-col gap-10 mt-6">
              <motion.li
                initial={{ y: 10, opacity: 0 }}
                animate={isOpen ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <button
                  onClick={onClose}
                  className="text-[16px] tracking-widest uppercase text-white"
                >
                  Ethos
                </button>
              </motion.li>

              <motion.li
                initial={{ y: 10, opacity: 0 }}
                animate={isOpen ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <button
                  onClick={onClose}
                  className="text-[16px] tracking-widest uppercase text-white"
                >
                  Gallery
                </button>
              </motion.li>

              <motion.li
                initial={{ y: 10, opacity: 0 }}
                animate={isOpen ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <button
                  onClick={onClose}
                  className="text-[16px] tracking-widest uppercase text-white"
                >
                  Services
                </button>
              </motion.li>

              <motion.li
                initial={{ y: 10, opacity: 0 }}
                animate={isOpen ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <button
                  onClick={onClose}
                  className="text-[16px] tracking-widest uppercase text-white"
                >
                  Connect
                </button>
              </motion.li>
            </ul>
          </nav>
          <div className="flex justify-end pb-45">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={isOpen ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Image 
                src="/images/sidebar.png" 
                alt="Sidebar decoration"
                width={210} 
                height={120}
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </aside>
    </div>
  );
}