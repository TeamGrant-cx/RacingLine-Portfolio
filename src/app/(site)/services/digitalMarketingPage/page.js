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

export default function DigitalMarketing() {
  const services = [
    {
      title: "Performance Marketing",
      items: [
        "Search Engine Marketing (SEM)",
        "Social Media Advertising",
        "Influencer Marketing",
        "Conversion Rate Optimization (CRO)",
        "SMS campaigns",
      ],
    },

    {
      title: "Growth Marketing",
      items: [
        "Growth Marketing",
        "Social Media Management",
        "Search Engine Optimization (SEO)",
        "Email Marketing",
      ],
    },
  ];
  return (
    <div>
      <BreadCrumb
        title1="Digital Marketing Services"
        title2="Home"
        title3="Our Services"
        title4="Digital Marketing"
      />
      <div className="container mx-auto bg--500">
        <div className="mx-[rem]">
          {/* Text Section */}

          <ServiceDesc
            title={"We Make People Stop, Click, and Care"}
            desc={`Likes don’t pay bills!! we focus on measurable impact.
From paid ads to content and CRO, every campaign is built to
deliver real growth.`}
          />

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
            topImage={"/OurServices/DigitalServices/avatar2.png"}
          />
        </div>

        {/* Project Showcase Section */}
        <ProjectShowcaseDigital />
        {/* <ProjectShowcaseSoftwareServices /> */}
      </div>
    </div>
  );
}
