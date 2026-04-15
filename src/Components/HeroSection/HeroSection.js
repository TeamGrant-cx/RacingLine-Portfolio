import Image from "next/image";
import React from "react";
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
        className=" relative  grid grid-cols-1 gap-0"
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
            <Image src="/hero_corner.svg" alt="Logo" width={15} height={15} className="absolute top-0 right-0 scale-x-[-1]" />
            <Image src="/hero_corner.svg" alt="Logo" width={15} height={15} className="absolute top-0 left-0" />
            <Image src="/hero_corner.svg" alt="Logo" width={15} height={15} className="absolute bottom-0 left-0 scale-y-[-1]" />

          </div>

        </div>
        <div className="grid grid-cols-2   justify-evenly relative z-10 ">

          <div className="grid grid-cols-4 gap-2  w-[120%] p-5 bg-[#03031D] rounded-tr-[20px] rounded-br-[20px]" >
            <CardCategory SrcPage={`/services/digitalMarketing`} text={"Digital Marketing"} bgImage={"/OurServices/ourservices4.png"} />
            <CardCategory SrcPage={`/services/digitalMarketing`} text={"Offline Marketing"} bgImage={"/OurServices/ourservices4.png"} />
            <CardCategory SrcPage={`/services/digitalMarketing`} text={"Event Management"} bgImage={"/OurServices/ourservices4.png"} />
            <CardCategory SrcPage={`/services/digitalMarketing`} text={"Web Development"} bgImage={"/OurServices/ourservices4.png"} />
          </div>

          <div className="bg-transparent ">
            ..
          </div>

        </div>
        <div className="grid grid-cols-[30%_70%] gap-0 relative z-10">

          <div className="bg-[#03031D] text-white flex items-center justify-between p-2">

            <p>Explore our full range of marketing services</p>
            <i className="fa-solid fa-chevron-left"></i>
            <i className="fa-solid fa-chevron-right"></i>
          </div>

          <div className="bg-red-300 rounded-tl-[20px] rounded-bl-[20px]" >
            ..
          </div>

        </div>
      </div>

      {/* <ScrollingLogos logos={ClientLogos} /> */}
    </>
  );
}