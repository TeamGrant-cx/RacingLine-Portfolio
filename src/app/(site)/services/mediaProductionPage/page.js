import BreadCrumb from "@/Components/BreadCrumb/BreadCrumb";
import CardServiceImage from "@/Components/CardService/CardServiceImage";
import CardServiceImageHalf from "@/Components/CardService/CardServiceImageHalf";
import CardServiceLottie from "@/Components/CardService/CardServiceLottie";

import ServiceDetails from "@/Components/ServiceDetails/ServiceDetails";

import ReachJson from "@/../../public/OurServices/DigitalServices/Reach the Right Audience.json";
import TurnJson from "@/../../public/OurServices/DigitalServices/turn click ito customers.json";
import StayJson from "@/../../public/OurServices/DigitalServices/Stay Top of Mind.json";
import BuildJson from "@/../../public/OurServices/DigitalServices/Build Trust Through Influence.json";
import ContentJson from "@/../../public/OurServices/DigitalServices/Content That Speaks.json";
import DataJson from "@/../../public/OurServices/DigitalServices/Data That Drives Growth.json";





import React from "react";
import ProjectShowcaseDigital from "@/Components/ProjectShowcaseDigital/ProjectShowcaseDigital";
import ServiceDesc from "@/Components/ServiceDesc/ServiceDesc";

export default function MediaProduction() {
  const services = [
    {
      title: "Pre-production",
      items: [
        "Concept development and strategy",
        "Scripting and storytelling",
        "Outdoor and indoor signage",
        "Planning, scouting, and logistics",
        "Assistance with shooting permits",
        "Foreign crew assistance",
      ],
    },

    {
      title: "Production",

      items: [
        "Filming/Shooting",
        "Sound recording",
        "Direction",
        "Lighting",
        "On-set coordination",
        "Data management",
      ],
    },
    {
      title: "Post-production",



  
      items: [
        "Editing/Montage",
        "Sound design and mixing",
        "Visual effects (VFX)",
        "Color correction and grading",
        "Titling and credits",
        "Final output and mastering",
      ],
    },
  ];
  return (
    <div>
      <BreadCrumb
        title1="Media Production"
        title2="Home"
        title3="Our Services"
        title4="Media Production"
      />
      <div className="container mx-auto bg--500">
        <div className="mx-[rem]">
          {/* Text Section */}

<ServiceDesc title={"We Don’t Just Shoot. We Storytell."} desc={`It’s not about filming scenes, it’s about capturing meaning. Our media production team turns your goals into emotion-driven visuals that connect and convert.`} />

         
          {/* Cards Section */}

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3  gap-[2.5rem] px-[rem]">
            <div className="">
              <CardServiceLottie
                animationData={ReachJson}
                title="Reach the Right Audience"
                description="Your campaigns don’t just reach, they connect."
              />
            </div>
            <div className="">
              <CardServiceLottie
                animationData={TurnJson}
                title="Turn Clicks into Customers"
                description="Optimized funnels turn interest into loyal buyers."
              />
            </div>
            <div className="">
              <CardServiceLottie
                animationData={StayJson}
                title="Stay Top of Mind"
                description="Smart follow-ups keep your audience engaged and ready to return."
              />
            </div>
            <div className="">
              <CardServiceLottie
                animationData={BuildJson}
                title="Build Trust Through Influence"
                description="Creators amplify your story with authenticity, not adspeak."
              />
            </div>
            <div className="">
              <CardServiceLottie
                animationData={ContentJson}
                title="Content That Speaks"
                description="We craft content that sparks emotion, not just engagement."
              />
            </div>
            <div className="">
              <CardServiceLottie
                animationData={DataJson}
                title="Data That Drives Growth"
                description="We analyze, optimize, and scale every campaign for lasting ROI."
              />
            </div>
          </div>

          {/* Service Details Section */}

          <ServiceDetails
            bgImage={"/OurServices/WebServices/bgImage.jpg"}
            services={services}
            topImage={"/OurServices/MediaProduction/avatar.png"}
          />
        </div>

        {/* Project Showcase Section */}
        <ProjectShowcaseDigital />
        {/* <ProjectShowcaseSoftwareServices /> */}
      </div>
    </div>
  );
}
