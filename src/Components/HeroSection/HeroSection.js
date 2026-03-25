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

export default function HeroSection({ HeroData, ClientLogos }) {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-evenly">
          <div>
            <h1 className="hero-heading">
              A Performance Driven advertising Agency on the
            
              <NeonHighlight text="Fastest Line to Growth" />
            </h1>
            <p className="text-[#D7D8DB] font-[400] text-[1.5rem]">Racing Line helps brands compete, adapt, and win in fast-moving markets.</p>
          </div>

          <div className="grid grid-cols-4 gap-2 mt-5">
            <CardCategory SrcPage={`/services/digitalMarketing`} text={"Digital Marketing"} bgImage={"/OurServices/ourservices4.png"} />
            <CardCategory SrcPage={`/services/digitalMarketing`} text={"Offline Marketing"} bgImage={"/OurServices/ourservices4.png"} />
            <CardCategory SrcPage={`/services/digitalMarketing`} text={"Event Management"} bgImage={"/OurServices/ourservices4.png"} />
            <CardCategory SrcPage={`/services/digitalMarketing`} text={"Web Development"} bgImage={"/OurServices/ourservices4.png"} />
          </div>
        </div>

        <div>
          <Image
            src={'/HeroSection/Car.png'}
            alt={HeroData?.image?.alt || "Hero Image"}
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <ScrollingLogos logos={ClientLogos} />
    </>
  );
}