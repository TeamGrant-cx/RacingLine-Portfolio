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


      {/* section 1 */}
      <div className=" mt-[1rem]   flex flex-col justify-center items-center    gap-[1rem]  ">

        <p className="text-[3rem] font-[600] text-white text-center ">
          We Deliver High-Performance

          <span className="text-primary mx-2">

            Marketing Solutions
          </span>
          & The Expertise To Make Them Work</p>


        <p className="text-[#C9CACF] tet-[1.5rem] font-[400] text-center mt-[1rem] mb-[2.5rem] ">
          We combine strategy, creative, and execution to turn marketing into measurable business results.
        </p>

        <GlassButton text="Request A Quotation" />

      </div>

      <div className="my-[3.125rem]">
        <ScrollingLogos logos={ClientLogos} />
      </div>



      {/* section 2 */}
      <div>

        <div>

          <p className="text-[2.5rem] font-[600] text-white text-center mt-[3rem]">
            We build high-performance marketing systems that drive real

            <span className="PlayFair italic font-[500]">           business growth
            </span>
            .
          </p>


          <p className="text-[#C9CACF] tet-[1.5rem] font-[400] text-center ">
            We combine strategy, creativity, and performance under one roof, helping brands move faster, scale smarter, and turn marketing into measurable results.        </p>
        </div>
        <div className="mt-[4rem] ">
          <div className="py-5 group grid grid-cols-[auto_1fr] gap-x-3 gap-y-3 relative pb-2">
            <i
              className="fa-solid fa-angle-right text-[1.8rem] text-[#77BD74]
            transition-transform duration-500
            group-hover:scale-y-[-1]"
            ></i>
            <p
              className="text-[1.5rem] text-white font-[700]
            transition-transform duration-500
            group-hover:translate-x-1"
            >
              Strategy
            </p>
            <p className="text-white text-[1.25rem] col-start-2">Data-backed thinking that defines the right direction before execution.</p>
            <span className="absolute bottom-0 left-[5%] w-[40%] h-[1px] bg-white/30"></span>
          </div>

          <div className="py-5 group grid grid-cols-[auto_1fr] gap-x-3 gap-y-3 relative pb-2">
            <i
              className="fa-solid fa-angle-right text-[1.8rem] text-[#77BD74]
            transition-transform duration-500
            group-hover:scale-y-[-1]"
            ></i>
            <p
              className="text-[1.5rem] text-white font-[700]
            transition-transform duration-500
            group-hover:translate-x-1"
            >
              Creative
            </p>
            <p className="text-white text-[1.25rem] col-start-2">
              Content and campaigns designed to capture attention and convert.
            </p>
            <span className="absolute bottom-0 left-[5%] w-[40%] h-[1px] bg-white/30"></span>
          </div>

          <div className="py-5 group grid grid-cols-[auto_1fr] gap-x-3 gap-y-3 relative pb-2">
            <i
              className="fa-solid fa-angle-right text-[1.8rem] text-[#77BD74]
            transition-transform duration-500
            group-hover:scale-y-[-1]"
            ></i>
            <p
              className="text-[1.5rem] text-white font-[700]
            transition-transform duration-500
            group-hover:translate-x-1"
            >
              Content and campaigns designed to capture attention and convert.
            </p>
            <p className="text-white text-[1.25rem] col-start-2">
              Continuous optimization focused on real, measurable business outcomes.
            </p>
          </div>



        </div>
      </div>


      {/* section 3 */}
      <div>
        <div>

          <p className="text-[2.5rem] font-[600] text-white text-center mt-[3rem]">
            We build high-performance marketing systems that drive real business growth.
          </p>


          <p className="text-[#C9CACF] tet-[1.5rem] font-[400] text-center ">
            We combine strategy, creativity, and performance under one roof, helping brands move faster, scale smarter, and turn marketing into measurable results.        </p>
        </div>
      </div>

      {/* section 4 */}
      <div>
        <div className="py-[3.125rem] w-[60%] ">
          <p className="text-[1rem] text-white">

            <span className="text-primary">

              {"// "}
            </span>
            {" Our Journey"}

          </p>

          <div className="BarStyle font-[600] text-[2.5rem] leading-tight text-white mt-2">
            <div className="GlowCone" />
            The Journey to Our
            <span className="PlayFair italic font-[500]"> Racing Line</span>
          </div>

          <p className="text-[1.5rem] text-[#C9CACF] mt-[1rem] font-[400] ">
            Racing Line was founded with a focus on execution-driven marketing delivering campaigns, events, and strategies that create real impact. As client needs expanded, so did the agency’s capabilities, growing into a full-service operation covering digital marketing, media production, technology, and brand activations.
Today, Racing Line partners with businesses to deliver integrated marketing solutions designed for performance, scalability, and measurable growth.
          </p>
        </div>


      </div>


<div className="w-full max-w-[1920px] mx-auto flex flex-col items-start justify-center  py-[50px]">
  <div className="relative h-[784px] w-full rounded-[30px] overflow-hidden">
    <div className="absolute w-[113.77%] h-[140%] left-[-13.77%] top-[-36.17%]">
      <Image
        src="/AboutUs/CompanyMembers.jpg"
        alt="Our Team"
        fill
        sizes="(max-width: 1920px) 114vw, 1843px"
        className="object-cover"
      />
    </div>
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