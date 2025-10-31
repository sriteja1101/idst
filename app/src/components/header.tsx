"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Manrope } from "next/font/google";
import Sidebar from "./Sidebar";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export default function Header() {
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const [isConnectHovered, setIsConnectHovered] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Sidebar isOpen={open} onClose={() => setOpen(false)} />
      <header
        className={`flex justify-between items-center h-[78px] border-b border-black px-4 md:px-10 py-4 box-border ${manrope.className}`}
      >
        {/* LEFT SIDE: MENU (Desktop) / LOGO (Mobile) */}
        <div className="flex items-center h-10 w-[266px]">
          {/* Mobile: show logo on left */}
          <div className="block md:hidden">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/idst-new-logo.png"
                alt="IDST Logo"
                width={120}
                height={35}
                className="object-contain cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop: show MENU on left */}
          <div
            className="hidden md:flex items-center cursor-pointer"
            onMouseEnter={() => setIsMenuHovered(true)}
            onMouseLeave={() => setIsMenuHovered(false)}
            onClick={() => setOpen(true)}
          >
            <div
              style={{
                filter: isMenuHovered
                  ? "brightness(0) saturate(100%) invert(67%) sepia(12%) saturate(400%) hue-rotate(300deg)"
                  : "none",
                transition: "filter 0.3s ease",
              }}
            >
              <Image
                src="/images/IDST-menu-drawer.png"
                alt="Menu Icon"
                width={27}
                height={27}
                className="object-contain"
              />
            </div>
            <h1
              className="text-[13px] ml-4 tracking-widest transition-colors duration-300"
              style={{ color: isMenuHovered ? "#9D8694" : "#000000" }}
            >
              MENU
            </h1>
          </div>
        </div>

        {/* CENTER: LOGO (Desktop only) */}
        <div className="hidden md:flex justify-center flex-1">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/idst-new-logo.png"
              alt="IDST Logo"
              width={140}
              height={40}
              className="object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* RIGHT SIDE: CONNECT (Desktop) / MENU (Mobile) */}
        <div className="w-[266px] flex justify-end">
          {/* Desktop CONNECT */}
          <Link
            href="/connect"
            className="hidden md:flex items-center gap-3 cursor-pointer"
            onMouseEnter={() => setIsConnectHovered(true)}
            onMouseLeave={() => setIsConnectHovered(false)}
          >
            <div
              style={{
                filter: isConnectHovered
                  ? "brightness(0) saturate(100%) invert(67%) sepia(12%) saturate(400%) hue-rotate(300deg)"
                  : "none",
                transition: "filter 0.3s ease",
              }}
            >
              <Image
                src="/images/IDST-contact-header.png"
                alt="Contact Icon"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <h1
              className="text-[13px] tracking-widest transition-colors duration-300"
              style={{ color: isConnectHovered ? "#9D8694" : "#000000" }}
            >
              CONNECT
            </h1>
          </Link>

          {/* Mobile MENU on right */}
          <div
            className="flex md:hidden items-center gap-3 cursor-pointer"
            onMouseEnter={() => setIsMenuHovered(true)}
            onMouseLeave={() => setIsMenuHovered(false)}
            onClick={() => setOpen(true)}
          >
            <div
              style={{
                filter: isMenuHovered
                  ? "brightness(0) saturate(100%) invert(67%) sepia(12%) saturate(400%) hue-rotate(300deg)"
                  : "none",
                transition: "filter 0.3s ease",
              }}
            >
              <Image
                src="/images/IDST-menu-drawer.png"
                alt="Menu Icon"
                width={27}
                height={27}
                className="object-contain"
              />
            </div>
            <h1
              className="text-[13px] tracking-widest transition-colors duration-300"
              style={{ color: isMenuHovered ? "#9D8694" : "#000000" }}
            >
              MENU
            </h1>
          </div>
        </div>
      </header>
    </>
  );
}
