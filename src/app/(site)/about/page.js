import BreadCrumb from "@/Components/BreadCrumb/BreadCrumb";
import Image from "next/image";
import React from "react";
import "@/app/(site)/about/about.css";
import Link from "next/link";
import CardFamilyServer from "./AboutServer";

export default async function About() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/globals/about-page?depth=2&draft=false`,
    { cache: "no-store" }
  );

  const data = res.ok ? await res.json() : null;

  const founder = data?.founderMessage;
  const philosophy = data?.philosophy;
  const team = data?.teamSection;

  return (
    <>
      <BreadCrumb title1="About Us" title2="Home" title3="About Us" />

      {/* SECTION1 MESSAGE FROM THE FOUNDER  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto py-12 md:py-24 px-6 md:px-12 lg:px-24 relative gap-8 lg:gap-0">
        <span className="borderLine absolute "></span>
        <span className="borderLine2 absolute "></span>
        <div className="bg--500  border-primary">
          <div className="">
            <h2 className="text-primary text-[2rem] md:text-[3rem] lg:text-[4rem]">
              {founder?.heading || "MESSAGE FROM THE FOUNDER"}
            </h2>
            <h2 className="text-white text-[1rem] md:text-[1.25rem]">
              {founder?.description}
            </h2>
          </div>
          <Link href={founder?.ctaLink || "/contactUs"} className="px-[1.375rem] py-[0.375rem] rounded-[6.25rem] text-white border font-[500] text-[1rem] md:text-[1.5rem] mt-[2rem] md:mt-[3rem]">
            {founder?.ctaText || "lets drink coffee and talk"}
            <i className="fa-solid fa-angle-right text-primary mr-2"></i>
          </Link>
        </div>

        <div className="bg--500  flex justify-center items-center ">
          <div className="relative">
            {founder?.decorativeImage?.url && (
              <Image
                className="absolute top-0 -right-5"
                src={founder.decorativeImage.sizes?.thumbnail?.url || founder.decorativeImage.url}
                alt={founder.decorativeImage.alt || "Decorative"}
                width={60}
                height={60}
              />
            )}
            {founder?.founderImage?.url && (
              <Image
                src={founder.founderImage.sizes?.card?.url || founder.founderImage.url}
                alt={founder.founderImage.alt || "Founder Image"}
                width={250}
                height={250}
              />
            )}
          </div>
        </div>

        <span className="borderLine3 absolute "></span>
        <span className="borderLine4 absolute "></span>
      </div>

      {/* SECTION2 Our philosophy  */}
      <div className="container mx-auto px-6 md:-12 lg:-24">
        <div className="border-gradient-color bg-[#0B1728] grid grid-cols-1 lg:grid-cols-2 container mx-auto py-10 px-6 md:px-12 lg:px-24 relative gap-8 lg:gap-0">
          <div className="bg--500  border-primary">
            <div className="text-primary flex flex-col justify-center items-center text-center gap-4">
              <h1 className="text-[1.75rem] md:text-[2.25rem]">
                {philosophy?.heading || "Our philosophy"}
              </h1>
              {philosophy?.paragraphs?.map((p) => (
                <h2 key={p.id} className="text-[1rem] md:text-[1.25rem]">
                  {p.text}
                </h2>
              ))}
            </div>
          </div>

          <div className="bg--500  flex justify-center items-center ">
            <div className="relative">
              {philosophy?.image?.url && (
                <Image
                  src={philosophy.image.sizes?.card?.url || philosophy.image.url}
                  alt={philosophy.image.alt || "Philosophy Image"}
                  width={350}
                  height={350}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* SECTION3 Meet My Family  */}

      <div className="mt-[3.125rem] container mx-auto -6 md:-12 lg:-24">
        <h1 className="text-primary text-[1.75rem] md:text-[2.25rem] text-center font-bold">
          {team?.heading || "Meet My Family"}
        </h1>
        <h2 className="text-primary text-[1rem] md:text-[1.25rem] text-center font-[400] lg:px-55 py-10 ">
          {team?.description}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-10">

        <CardFamilyServer />


        </div>
      </div>
    </>
  );
}



















{/*         
          <CardFamily
            defaultCard="/AboutUs/mahmod.jpg"
            themeCard="/AboutUs/mahmodTheme.jpg"
            TeamName="Mahmoud Grant"
            TeamTitle="Founder"
          />
          <CardFamily
            defaultCard="/AboutUs/geta.jpg"
            themeCard="/AboutUs/getaTheme.jpg"
            TeamName="Guita"
            TeamTitle="Founder"
          />
          <CardFamily
            defaultCard="/AboutUs/ehab.jpg"
            themeCard="/AboutUs/ehabTheme.jpg"
            TeamName="Ahmed Ehab"
            TeamTitle="Digital Marketing manager"
          />
          <CardFamily
            defaultCard="/AboutUs/hadeer.jpg"
            themeCard="/AboutUs/hadeerTheme.jpg"
            TeamName="Hadeer "
            TeamTitle="Video Editor"
          />
          <CardFamily
            defaultCard="/AboutUs/mareez.jpg"
            themeCard="/AboutUs/mareezTheme.jpg"
            TeamName="Mareez "
            TeamTitle="Graphic Designer"
          />
          <CardFamily
            defaultCard="/AboutUs/haggag.jpg"
            themeCard="/AboutUs/haggagTheme.jpg"
            TeamName="Mohamed Haggag"
            TeamTitle="UI/UX Designer"
          />
          <CardFamily
            defaultCard="/AboutUs/mina.jpg"
            themeCard="/AboutUs/minaTheme.jpg"
            TeamName="Mina basta"
            TeamTitle="social media specialist"
          />
          <CardFamily
            defaultCard="/AboutUs/kareem.jpg"
            themeCard="/AboutUs/kareemTheme.jpg"
            TeamName="Kareem Hany"
            TeamTitle="Social Media Specialist"
          /> */}