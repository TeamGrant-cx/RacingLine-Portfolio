import React from "react";
import styles from "./ProjectShowcaseDigital.module.css";
import Image from "next/image";

export default function ProjectShowcaseDigital() {

  return (
    <section className="bg-[#080A1F] px-4 py-8 md:px-6 md:py-12">

      <div className="grid grid-cols-1 md:grid-cols-[3fr_6fr_6fr] gap-5">

        {/* Left Panel - Our Project Showcases */}
        <div className="bg-[#0F102E] flex flex-col items-center justify-center gap-4 md:gap-6 py-8 md:py-10 px-6 rounded-[20px] border border-[#1a1b3a]">

          <div className="flex flex-col justify-center items-center gap-0">
            <i className="fa-solid fa-angles-up text-[#3B82F6] text-[1.2rem] md:text-[1.5rem]"></i>
            <i className="fa-solid fa-angles-up text-[#3B82F6] text-[1.2rem] md:text-[1.5rem]"></i>
          </div>

          <div className="text-center">
            <p className="text-[1.6rem] md:text-[2.2rem] leading-[1.2] font-[600] text-white">Our Project<br />Showcases</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-0">
            <i className="fa-solid fa-angles-down text-[#6B7280] text-[1.2rem] md:text-[1.5rem]"></i>
            <i className="fa-solid fa-angles-down text-[#6B7280] text-[1.2rem] md:text-[1.5rem]"></i>
          </div>

        </div>

        {/* Middle Panel - Project Details */}
        <div className="bg-[#0F102E] rounded-[20px] pt-6 px-5 md:px-8 pb-8 flex flex-col justify-between gap-4 md:gap-0">

          <div>
            <Image src="/MuranoStoreLogo.png" alt="Murano Stone Logo" width={200} height={60} className="object-contain" />
          </div>

          <h3 className="text-[1.3rem] md:text-[1.6rem] leading-[1.3] font-[700] text-white capitalize">
            A Social Media Campaign For A Decorative Stone And Brick Manufacturer
          </h3>

          <p className="text-[0.9rem] md:text-[1rem] leading-[1.6] font-[400] text-gray-300">
            An Egyptian artificial stone veneer manufacturer needed to boost their social media presence. We implemented a cohesive content strategy and targeted Meta ads, focusing on brand storytelling, platform-specific engagement, and showcasing success stories.
          </p>

          <button className="mt-4 md:mt-6 glass glow-border bg-[#002B4D] hover:!bg-[#002B4D] rounded-[3.125rem] py-[0.7rem] md:py-[0.8rem] px-[2rem] md:px-[2.5rem] text-[1rem] md:text-[1.1rem] tracking-wider font-[600] text-white transition-colors duration-500 w-fit">
            VIEW PROJECT
          </button>
        </div>

        {/* Right Panel - Image */}
        <div className="relative rounded-[20px] overflow-hidden min-h-[300px] md:min-h-[520px]">
          <Image className="object-cover" src="/picture5.png" alt="Decorative stone interior" fill sizes="(max-width: 768px) 100vw, 33vw" />
        </div>

      </div>

    </section>
  );
}
