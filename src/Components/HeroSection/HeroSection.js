"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import "@/Components/HeroSection/HeroSection.css";
import CardCategory from "../CardCategory/CardCategory";
import ScrollingLogos from "./ScrollingLogos";

const VISIBLE_COUNT = 4;

const NeonHighlight = ({ text }) => (
  <span className="neon-text">{text}</span>
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

  const totalCards = cards.length;
  const displayCards = [...cards, ...cards.slice(0, VISIBLE_COUNT)];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);
  const isAnimatingRef = useRef(false);

  const handleNext = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setEnableTransition(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isAnimatingRef.current) return;
    if (currentIndex === 0) {
      // jump instantly to the clone slot (visually identical), then animate back
      setEnableTransition(false);
      setCurrentIndex(totalCards);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          isAnimatingRef.current = true;
          setEnableTransition(true);
          setCurrentIndex(totalCards - 1);
        });
      });
    } else {
      isAnimatingRef.current = true;
      setEnableTransition(true);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleTransitionEnd = () => {
    isAnimatingRef.current = false;
    if (currentIndex >= totalCards) {
      // we're sitting on a clone — snap back to the real index without animation
      setEnableTransition(false);
      setCurrentIndex(currentIndex - totalCards);
    }
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
              A Performance Driven advertising Agency on the{" "}
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
              className=" flex"
              style={{
                transform: `translateX(-${currentIndex * 25}%)`,
                transition: enableTransition ? "transform 700ms ease-in-out" : "none",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {displayCards.map((card, index) => (
                <div
                  key={index}
                  className="w-1/4 flex-shrink-0 px-2.5 transition-transform duration-400 hover:scale-110"
                >
                  <CardCategory SrcPage={card.SrcPage} text={card.text} cardImage={card.cardImage} bgImage={card.bgImage} withHoverEffect={true} />
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

      <div className="my-[5rem]">

        <ScrollingLogos logos={ClientLogos} />
      </div>
    </>
  );
}