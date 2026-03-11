import Image from "next/image";
import React from "react";
import "@/Components/HeroSection/HeroSection.css";
import Link from "next/link";
import CardCategory from "../CardCategory/CardCategory";

const SparkDots = () => (
  <div className="sparkle-dots">
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
  </div>
);

export default function HeroSection({ HeroData, ClientLogos }) {


  return (
    <>








      <div className="bg--500 grid grid-cols-2">

        <div className="bg--500 flex flex-col justify-evenly">

          <div className="">

            <h1 className="hero-heading">
              A Performance Driven advertising Agency on the
              <br />
              <span className="hero-heading-highlight">Fastest Line to Growth</span>
            </h1>

            <p>Racing Line helps brands compete, adapt, and win in fast-moving markets.</p>

          </div>



          <div className="grid grid-cols-4 gap-2 mt-5">
            <CardCategory
              SrcPage={`/services/digitalMarketing`}
              text={"Digital Marketing"}
              bgImage={"/OurServices/ourservices4.png"}
            />

            <CardCategory
              SrcPage={`/services/digitalMarketing`}
              text={"Digital Marketing"}
              bgImage={"/OurServices/ourservices4.png"}
            />

            <CardCategory
              SrcPage={`/services/digitalMarketing`}
              text={"Digital Marketing"}
              bgImage={"/OurServices/ourservices4.png"}
            />

            <CardCategory
              SrcPage={`/services/digitalMarketing`}
              text={"Digital Marketing"}
              bgImage={"/OurServices/ourservices4.png"}
            />


          </div>

        </div>




        <div className="bg-yellow-500">
          <Image
            src={'/HeroSection/Car.png'}
            alt={HeroData?.image?.alt || "Hero Image"}
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />

        </div>
      </div>






      <div className=" mt-5 h-[99px] rounded-[50px]  flex items-center justify-between px-[3%] overflow-hidden">
        {ClientLogos?.map((img, i) => (
          <div key={i} className="h-full flex items-center flex-1 min-w-0">
            <Image
              src={img.logo?.url}
              alt={`design-${i}`}
              width={200}
              height={99}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </>
  );
}


