import BreadCrumb from "@/Components/BreadCrumb/BreadCrumb";
import Image from "next/image";
import React from "react";
import "@/app/(site)/about/about.css";
import Link from "next/link";
import CardFamily from "@/Components/CardFamily/CardFamily";
import GlassButton from "@/Components/GlassButton/GlassButton";
import ScrollingLogos from "@/Components/HeroSection/ScrollingLogos";

export default async function About() {
  const ClientLogos = [
    '/imgs/img1.png',
    '/imgs/img2.png',
    '/imgs/img3.png',
    '/imgs/img4.png',
    '/imgs/img5.png',

  ]



  return (
    <>
      <BreadCrumb title1="Home" title2="About Us" />

      <div className=" mt-[1rem] flex flex-col justify-center items-center  gap-[1rem] ">

        <p className="text-[3rem] font-[600] text-white text-center ">
          We Deliver High-Performance

          <span className="text-primary mx-2">

            Marketing Solutions
          </span>
          & The Expertise To Make Them Work</p>


        <p className="text-[#C9CACF] tet-[1.5rem] font-[400] text-center ">
          We combine strategy, creative, and execution to turn marketing into measurable business results.
        </p>

        <GlassButton text="Request A Quotation" />

      </div>
      <div>

        <ScrollingLogos logos={ClientLogos} />
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