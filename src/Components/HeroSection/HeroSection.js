import Image from "next/image";
import React from "react";
import "@/Components/HeroSection/HeroSection.css";
import Link from "next/link";

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
      <div className=" rounded-[3.125rem]">
        <div
          className="border-gradient-color herosectionBg grid grid-cols-1 md:grid-cols-2 relative px-10 py-10 overflow-hidden rounded-[3.125rem]"
          style={{
            backgroundImage: `
              linear-gradient(148.05deg, rgba(0, 10, 15, 0.5) 0%, rgba(13, 27, 38, 0.5) 98.36%),
              linear-gradient(0deg, rgba(11, 23, 40, 0.3), rgba(11, 23, 40, 0.3)),
              url('${HeroData?.backgroundImage?.sizes?.hero?.url || HeroData?.backgroundImage?.url || "/herosectionbg.jpg"}')
            `,
          }}
        >
          <div className=" z-10 leading-[1.2] flex flex-col gap-6 justify-center items-start">
            <h1 className="text-primary md:text-[6rem] text-[3.5rem] uppercase flex flex-col gap-2 leading-none md:whitespace-nowrap">
              {HeroData?.headingLines?.length > 0 ? (
                HeroData.headingLines.map((line, index) => (
                  <span key={index} className="FontK2d">{line.text}</span>
                ))
              ) : (
                <>
                  <span>Total</span>
                  <span>Solutions</span>
                  <span>Creative House</span>
                </>
              )}
            </h1>
            <p className="font-[400] text-[1.25rem] text-white">
              {HeroData?.description || `From traditional TTL marketing like events, branding, signage, and
              media production to cutting-edge digital solutions including SEO,
              SEM, web development, and e-commerce.`}
            </p>

            <div className="md:hidden block relative w-full h-64">
              <div className="imageWrapperMobile">
                <Image
                  src={HeroData?.heroImage?.sizes?.card?.url || HeroData?.heroImage?.url || "/Hero_Logo.png"}
                  alt="Hero Image"
                  fill
                  className="object-contain"
                />
                <SparkDots />
              </div>
            </div>
            <Link
              href={HeroData?.ctaLink || "/contactUs"}
              className="px-[1.375rem] py-[0.375rem] rounded-[6.25rem] text-white border font-[500] text-[1.5rem]"
            >
              {HeroData?.ctaText || "lets drink coffee and talk"}
              <i className="fa-solid fa-angle-right text-primary mr-2"></i>
            </Link>
          </div>

          <div className="hidden md:block absolute overflow-hidden -bottom-[10%] md:-bottom-[10%] lg:-bottom-[10%] left-[56%] right-0 bottom-0 z-0">
            <div className="imageWrapper">
              <Image
                src={HeroData?.heroImage?.sizes?.hero?.url || HeroData?.heroImage?.url || "/Hero_Logo.png"}
                alt="Hero Image"
                width={650}
                height={472}
                className="object-contain "
              />
              <SparkDots />
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-5 h-[99px] rounded-[50px] border-gradient-color flex items-center justify-between px-[3%] overflow-hidden">
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