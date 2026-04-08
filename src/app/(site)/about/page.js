import BreadCrumb from "@/Components/BreadCrumb/BreadCrumb";
import Image from "next/image";
import React from "react";
import "@/app/(site)/about/about.css";
import Link from "next/link";
import CardFamilyServer from "./AboutServer";
import CardFamily from "@/Components/CardFamily/CardFamily";

export default async function About() {

const philosophy = {
  paragraphs: [
    { id: 1, text: "At Racing Line, we believe in the power of strategic marketing to drive success. Our philosophy is rooted in delivering full-service marketing solutions that are executed with precision and control. We understand that in today's fast-paced digital landscape, fragmented execution can hinder results. That's why we take a comprehensive approach, ensuring that every aspect of your marketing strategy is seamlessly integrated for maximum impact." },

  ]
};


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
               MESSAGE FROM THE FOUNDER
            </h2>
            <h2 className="text-white text-[1rem] md:text-[1.25rem]">
             lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.
            </h2>
          </div>
          <Link href={ "/contactUs"} className="px-[1.375rem] py-[0.375rem] rounded-[6.25rem] text-white border font-[500] text-[1rem] md:text-[1.5rem] mt-[2rem] md:mt-[3rem]">
            | lets drink coffee and talk
            <i className="fa-solid fa-angle-right text-primary mr-2"></i>
          </Link>
        </div>

        <div className="bg--500  flex justify-center items-center ">
          <div className="relative">
        
              <Image
                className="absolute top-0 -right-5"
          src={'/AboutUs/StandFast.png'}
                alt={ "Decorative"}
                width={60}
                height={60}
              />
        
            
              <Image
                src={'/AboutUs/StandFast.png'}
                alt={"Founder Image"}
                width={250}
                height={250}
              />
       
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
                Our philosophy
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
     Meet My Family
        </h1>
        <h2 className="text-primary text-[1rem] md:text-[1.25rem] text-center font-[400] lg:px-55 py-10 ">
       lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-10">

        <CardFamily/>


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