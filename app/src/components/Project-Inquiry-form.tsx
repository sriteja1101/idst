"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export default function ProjectInquiryForm() {
  const [isBrown, setIsBrown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [shake, setShake] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    projectType: "",
    size: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isMobile = window.innerWidth <= 768;
      
      if (isMobile) {
        setIsBrown(scrollY > 0 && scrollY < 250);
      } else {
        setIsBrown(scrollY > 700 && scrollY < 1400);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) newErrors[key] = "This field is required";
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleClick = () => {
    setLoading(true);
    setShowErrors(false);
    setTimeout(() => {
      setLoading(false);
      if (!validateForm()) {
        setShowErrors(true);
        setShake(true);
        setTimeout(() => setShake(false), 500);
      }
    }, 2000);
  };

  const loadingColor = isBrown
    ? isHover
      ? "bg-black"
      : "bg-white"
    : isHover
    ? "bg-white"
    : "bg-black";

  const bgColor = isBrown ? "bg-[#321514]" : "";
  const textColor = isBrown ? "text-white" : "text-black";
  const imageSrc = isBrown
    ? "/images/connect-image-2.webp"
    : "/images/connect-image-3.webp";

  return (
    <div className="w-full mx-auto px-14 h-auto lg:h-[817px] overflow-hidden">
      <div
        className={`${manrope.className}  w-full transition-colors duration-700 border-b border-black`}
      >
        <div
          className={`flex flex-col lg:flex-row justify-between p-2 py-8 lg:py-15 transition-all duration-700 ${bgColor} ${textColor} border-r border-l border-transparent lg:border-transparent md:border-black`}
        >
          <div className="flex items-center justify-center w-full lg:w-[631px] lg:h-[587px] order-1 lg:order-1 mb-8 lg:mb-0">
            <Image
              src={imageSrc}
              alt="Project Illustration"
              width={594}
              height={500}
              className="object-contain w-full max-w-[300px] lg:max-w-none lg:w-[594px] transition-all duration-700"
            />
          </div>

          <div className="flex flex-col w-full lg:w-[750px] h-auto lg:h-[640px] space-y-6 lg:space-y-8 order-2 lg:order-2 overflow-hidden">
            <h1 className="text-[24px] font-normal lg:mb-26 tracking-tight font-serif text-left">
              project inquiry form
            </h1>

            <div className="space-y-5 w-full lg:w-[695px] lg:h-[536px]">
              <div className="flex flex-col lg:flex-row gap-5">
                {[
                  ["firstName", "First Name"],
                  ["lastName", "Last Name"],
                ].map(([name, label]) => (
                  <div key={name} className="flex flex-col w-full lg:w-1/2 relative">
                    <label
                      className={`absolute text-[12px] font-medium top-[-18px] ${
                        isBrown ? "text-white" : "text-black"
                      }`}
                    >
                      {label}
                    </label>
                    <input
                      name={name}
                      value={(formData as any)[name]}
                      onChange={handleChange}
                      type="text"
                      className={`border-b outline-none text-[13px] py-1 bg-transparent w-full ${
                        isBrown
                          ? "border-white text-white placeholder-gray-300"
                          : "border-black text-black placeholder-gray-500"
                      }`}
                    />
                    {showErrors && errors[name] && (
                      <span className="text-red-500 text-[11px] mt-1 absolute -bottom-4">
                        {errors[name]}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {[
                ["email", "Email", "email"],
                ["projectType", "Project Type", "select"],
                ["size", "Size", "text"],
                ["subject", "Subject", "text"],
                ["message", "Message", "textarea"],
              ].map(([name, label, type]) => (
                <div key={name} className="flex flex-col relative">
                  <label className="text-[16px] lg:text-[18px] font-medium">{label}</label>
                  {type === "select" ? (
                    <select
                      name={name}
                      value={(formData as any)[name]}
                      onChange={handleChange}
                      className={`border-b outline-none text-[13px] py-1 bg-transparent w-full ${
                        isBrown
                          ? "border-white text-white"
                          : "border-black text-black"
                      }`}
                    >
                      <option className="text-black" value="">
                        Select an option
                      </option>
                      <option className="text-black">Creative Strategy</option>
                      <option className="text-black">Brand Consultation</option>
                      <option className="text-black">Studio Collaboration</option>
                      <option className="text-black">Music Direction</option>
                    </select>
                  ) : type === "textarea" ? (
                    <textarea
                      name={name}
                      value={(formData as any)[name]}
                      onChange={handleChange}
                      rows={3}
                      className={`border-b outline-none text-[13px] py-1 bg-transparent w-full ${
                        isBrown
                          ? "border-white text-white"
                          : "border-black text-black"
                      }`}
                    />
                  ) : (
                    <input
                      name={name}
                      value={(formData as any)[name]}
                      onChange={handleChange}
                      type={type}
                      placeholder={name === "size" ? "sqft" : ""}
                      className={`border-b outline-none text-[13px] py-1 bg-transparent w-full ${
                        isBrown
                          ? "border-white text-white placeholder-gray-300"
                          : "border-black text-black placeholder-gray-500"
                      }`}
                    />
                  )}
                  {showErrors && errors[name] && (
                    <span className="text-red-500 text-[11px] mt-1 absolute -bottom-4">
                      {errors[name]}
                    </span>
                  )}
                </div>
              ))}

              <button
                onClick={handleClick}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                disabled={loading}
                className={`relative overflow-hidden text-[13px] mt-2 uppercase font-medium tracking-widest w-fit p-0.5 transition-all duration-700 ${
                  shake ? "animate-shake" : ""
                } ${
                  isBrown
                    ? "text-white hover:text-black hover:bg-[#a97058]"
                    : "text-black hover:text-white hover:bg-[#321514]"
                }`}
              >
                {loading ? (
                  <span className="relative flex items-center justify-center w-28 h-5">
                    <span
                      className={`absolute bottom-2 left-0 h-0.5 w-full ${loadingColor} animate-loading-line`}
                    ></span>
                    <span className="opacity-0">let's connect</span>
                  </span>
                ) : (
                  "let's connect"
                )}

                <style jsx>{`
                  @keyframes loadingLine {
                    0% {
                      transform: translateX(-100%);
                    }
                    100% {
                      transform: translateX(100%);
                    }
                  }
                  .animate-loading-line {
                    animation: loadingLine 1.5s linear infinite;
                  }
                  @keyframes shake {
                    0%, 100% {
                      transform: translateX(0);
                    }
                    25% {
                      transform: translateX(-5px);
                    }
                    75% {
                      transform: translateX(5px);
                    }
                  }
                  .animate-shake {
                    animation: shake 0.3s ease-in-out;
                  }
                `}</style>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}