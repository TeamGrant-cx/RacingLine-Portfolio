"use client";
import Image from "next/image";
import React, { useState } from "react";
import "@/Components/HeroSection/HeroSection.css";
import CardCategory from "../CardCategory/CardCategory";
import ScrollingLogos from "./ScrollingLogos";

const NeonHighlight = ({ text }) => (
  <span className="neon-stack" aria-label={text}>
    {[...Array(5)].map((_, i) => (
      <span
        key={i}
        className="neon-row"
        style={{ animationDelay: `${i * 0.6}s` }}
        aria-hidden={i !== 0}
      >
        {text}
      </span>
    ))}
  </span>
);

export default function HeroSection({ HeroData }) {
  const cards = [
    {
      SrcPage: "/services/digitalMarketingPage",
      text: "Digital Marketing",
      cardImage: "/HeroSection/mic.png",
      bgImage: "/OurServices/ourservices4.png"
    },
    {
      SrcPage: "/services/digitalMarketingPage",
      text: "Media Production",
      cardImage: "/HeroSection/printer.png",
      bgImage: "/OurServices/ourservices4.png"
    },
    {
      SrcPage: "/services/digitalMarketingPage",
      text: "Web & App Development",
      cardImage: "/HeroSection/game.png",
      bgImage: "/OurServices/ourservices4.png"
    },
    {
      SrcPage: "/services/digitalMarketingPage",
      text: "Digital Marketing",
      cardImage: "/HeroSection/mic.png",
      bgImage: "/OurServices/ourservices4.png"
    },
    {
      SrcPage: "/services/digitalMarketingPage",
      text: "Media Production",
      cardImage: "/HeroSection/printer.png",
      bgImage: "/OurServices/ourservices4.png"
    },
    {
      SrcPage: "/services/digitalMarketingPage",
      text: "Web & App Development",
      cardImage: "/HeroSection/game.png",
      bgImage: "/OurServices/ourservices4.png"
    },

  ];

  const maxOffset = cards.length - 4;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxOffset : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxOffset ? 0 : prev + 1));
  };

  const ClientLogos = [
    '/imgs/img1.png',
    '/imgs/img2.png',
    '/imgs/img3.png',
    '/imgs/img4.png',
    '/imgs/img5.png',
    '/imgs/img6.png',
    '/imgs/img7.png',
    '/imgs/img8.png',
  ]
  return (
    <>
      <div
        className=" relative  grid grid-cols-1 gap-0 rounded-br-[15px] 
                rounded-tr-[15px]

        
        "
        style={{
          backgroundImage: "url('/HeroSection/Car.png')",
          backgroundSize: "cover",
          backgroundPosition: "20% center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="grid grid-cols-2   justify-evenly relative z-10 ">

          <div className="p-5 bg-[#03031D]">
            <h1 className="hero-heading">
              A Performance Driven advertising Agency on the
              <NeonHighlight text="Fastest Line to Growth" />
            </h1>
            <p className="text-[#D7D8DB] font-[400] text-[1.5rem]">
              Racing Line helps brands compete, adapt, and win in fast-moving markets.
            </p>
          </div>

          <div className="rounded-tr-[20px] rounded-b-[20px] bg--300 relative">

            <Image src="/hero_corner.svg" alt="Logo" width={15} height={15} className="absolute top-0 left-0" />
            <Image src="/hero_corner.svg" alt="Logo" width={15} height={15} className="absolute bottom-0 left-0 scale-y-[-1]" />

          </div>

        </div>
        <div className=" grid grid-cols-2   justify-evenly relative z-10 ">

          <div className="w-[120%] p-5 bg-[#03031D] rounded-tr-[20px] rounded-br-[20px] overflow-x-clip overflow-y-visible" >
            <div
              className=" flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 25}%)` }}
            >
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="w-1/4 flex-shrink-0 px-2.5 transition-transform duration-400 hover:scale-110"
                >
                  <CardCategory  SrcPage={card.SrcPage} text={card.text} cardImage={card.cardImage} bgImage={card.bgImage} withHoverEffect={true} />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-transparent ">
            ..
          </div>

        </div>
        <div className="grid grid-cols-[30%_70%] gap-0 relative z-10">

          <div className="bg-[#03031D] text-white flex items-center justify-between p-2">

            <p className="text-[#6ECCF7] text-[1.5rem] font-[700]">Explore our full range of marketing services</p>
            <button onClick={handlePrev} className="cursor-pointer">
              <i className="text-[1.5rem] mx-2 text-[#6ECCF7] fa-solid fa-chevron-left"></i>
            </button>
            <button onClick={handleNext} className="cursor-pointer">
              <i className="text-[1.5rem] mx-2 text-[#6ECCF7] fa-solid fa-chevron-right"></i>
            </button>
          </div>
          <div className="bg--300 relative">
            {/* Top-left - original orientation */}
            <Image src="/hero_corner.svg" alt="Logo" width={15} height={15}
              className="absolute top-0 left-0" />


            {/* Bottom-left - flip vertically */}
            <Image src="/hero_corner.svg" alt="Logo" width={15} height={15}
              className="absolute bottom-0 left-0 scale-y-[-1]" />

            {/* Bottom-right - flip both */}
            {/* <Image src="/hero_corner.svg" alt="Logo" width={15} height={15}
              className="absolute bottom-0 right-0 scale-x-[-1] scale-y-[-1]" /> */}
          </div>

        </div>
      </div>

      {/* <ScrollingLogos logos={ClientLogos} /> */}
    </>
  );
}