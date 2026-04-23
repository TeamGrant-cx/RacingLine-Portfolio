"use client";

import React, { useState, useCallback } from "react";
import styles from "./ProjectShowcaseDigital.module.css";
import Image from "next/image";
import { glassBackdrop } from "@/Components/LiquidGlassEffect/glassStyle";

const projects = [
  {
    logo: "/MuranoStoreLogo.png",
    logoAlt: "Murano Stone Logo",
    title: "A Social Media Campaign For A Decorative Stone And Brick Manufacturer",
    description:
      "An Egyptian artificial stone veneer manufacturer needed to boost their social media presence. We implemented a cohesive content strategy and targeted Meta ads, focusing on brand storytelling, platform-specific engagement, and showcasing success stories.",
    image: "/picture5.png",
    imageAlt: "Decorative stone interior",
  },
  {
    logo: "/MuranoStoreLogo.png",
    logoAlt: "Murano Stone Logo",
    title: "Brand Identity & Digital Presence For A Premium Real Estate Developer",
    description:
      "A leading real estate developer sought a complete brand refresh and digital transformation. We crafted a sophisticated visual identity, built a high-converting website, and launched targeted campaigns that elevated their market position.",
    image: "/picture9.png",
    imageAlt: "Real estate project showcase",
  },
  {
    logo: "/MuranoStoreLogo.png",
    logoAlt: "Murano Stone Logo",
    title: "E-Commerce Strategy & Launch For A Luxury Fashion Brand",
    description:
      "A luxury fashion brand needed to establish a strong online retail presence. We designed an immersive shopping experience, optimized product storytelling, and implemented a data-driven marketing funnel that drove significant first-quarter sales.",
    image: "/Frame-311.jpg",
    imageAlt: "Fashion brand showcase",
  },
];

export default function ProjectShowcaseDigital() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("next");

  const navigate = useCallback(
    (dir) => {
      if (isAnimating) return;
      setDirection(dir);
      setPrevIdx(currentIdx);
      setIsAnimating(true);

      const nextIdx =
        dir === "next"
          ? (currentIdx + 1) % projects.length
          : (currentIdx - 1 + projects.length) % projects.length;
      setCurrentIdx(nextIdx);

      setTimeout(() => {
        setPrevIdx(null);
        setIsAnimating(false);
      }, 800);
    },
    [isAnimating, currentIdx]
  );

  const active = projects[currentIdx];
  const prev = prevIdx !== null ? projects[prevIdx] : null;

  // Exit classes for the OLD content (vertical)
  const exitClass = direction === "next" ? styles.animSlideOutUp : styles.animSlideOutDown;
  // Enter classes for the NEW content (vertical)
  const enterClass = direction === "next" ? styles.animSlideInBottom : styles.animSlideInTop;

  const renderMiddleContent = (data, animClass) => (
    <div className={`${animClass} flex flex-col justify-between h-full pt-6 px-5 md:px-8 pb-8`}>
      <div>
        <div>
          <Image src={data.logo} alt={data.logoAlt} width={200} height={60} className="object-contain" />
        </div>

        <h3 className="text-[1.3rem] md:text-[1.6rem] leading-[1.3] font-[700] text-white capitalize mt-4">
          {data.title}
        </h3>
      </div>

      <div>
        <p className="text-[0.9rem] md:text-[1rem] leading-[1.6] font-[400] text-gray-300">
          {data.description}
        </p>

        <button
          className="mt-4 md:mt-6 glass glow-border rounded-[3.125rem] py-[0.7rem] md:py-[0.8rem] px-[2rem] md:px-[2.5rem] text-[1rem] md:text-[1.1rem] tracking-wider font-[600] text-white transition-colors duration-500 w-fit"
          style={glassBackdrop}
        >
          VIEW PROJECT
        </button>
      </div>
    </div>
  );

  const renderImage = (src, alt, animClass) => (
    <div className={`absolute inset-0 ${animClass}`}>
      <Image className="object-cover" src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 33vw" />
    </div>
  );

  return (
    <section className="bg-[#080A1F] px-4 py-8 md:px-6 md:py-12">

      <div className="grid grid-cols-1 md:grid-cols-[3fr_6fr_6fr] gap-5">

        {/* Left Panel - Our Project Showcases */}
        <div className="bg-[#0F102E] flex flex-col items-center justify-center gap-4 md:gap-6 py-8 md:py-10 px-6 rounded-[20px] border border-[#1a1b3a]">

          <button onClick={() => navigate("prev")} className="flex flex-col justify-center items-center gap-0 cursor-pointer">
            <i className="fa-solid fa-angles-up text-[#3B82F6] text-[1.2rem] md:text-[1.5rem]"></i>
            <i className="fa-solid fa-angles-up text-[#3B82F6] text-[1.2rem] md:text-[1.5rem]"></i>
          </button>

          <div className="text-center">
            <p className="text-[1.6rem] md:text-[2.2rem] leading-[1.2] font-[600] text-white">Our Project<br />Showcases</p>
          </div>

          <button onClick={() => navigate("next")} className="flex flex-col justify-center items-center gap-0 cursor-pointer">
            <i className="fa-solid fa-angles-down text-[#6B7280] text-[1.2rem] md:text-[1.5rem]"></i>
            <i className="fa-solid fa-angles-down text-[#6B7280] text-[1.2rem] md:text-[1.5rem]"></i>
          </button>

        </div>

        {/* Middle Panel - Project Details */}
        <div className="bg-[#0F102E] rounded-[20px] overflow-hidden relative">
          {prev && renderMiddleContent(prev, exitClass)}
          {renderMiddleContent(active, isAnimating ? enterClass : "")}
        </div>

        {/* Right Panel - Image */}
        <div className="relative rounded-[20px] overflow-hidden min-h-[300px] md:min-h-[520px]">
          {prev && renderImage(prev.image, prev.imageAlt, exitClass)}
          {renderImage(active.image, active.imageAlt, isAnimating ? enterClass : "")}
        </div>

      </div>

    </section>
  );
}