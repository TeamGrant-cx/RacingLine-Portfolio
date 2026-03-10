import BreadCrumb from "@/Components/BreadCrumb/BreadCrumb";
import CardServiceImage from "@/Components/CardService/CardServiceImage";
import CardServiceImageHalf from "@/Components/CardService/CardServiceImageHalf";
import CardServiceLottie from "@/Components/CardService/CardServiceLottie";

import ServiceDetails from "@/Components/ServiceDetails/ServiceDetails";




import FlawJson from "@/../../public/OurServices/EventManagement/Flawless Event Flow.json";
import ConnectedJson from "@/../../public/OurServices/EventManagement/Connected Without Boundaries.json";
import CraftedJson from "@/../../public/OurServices/EventManagement/crafted around your story.json";
import YourBrandJson from "@/../../public/OurServices/OfflineServices/Your Brand in Every Detail.json";
import CapturedJson from "@/../../public/OurServices/EventManagement/Captured Forever.json";





import React from "react";
import ProjectShowcaseDigital from "@/Components/ProjectShowcaseDigital/ProjectShowcaseDigital";
import ServiceDesc from "@/Components/ServiceDesc/ServiceDesc";

export default function EventManagement() {
  const services = [
    {
      title: "Audio and Video",
      items: [
        "LED screens",
        "Live translation",
        "Live streaming (enerpritation system)",
        "Hybrid events and conferences",
        "Documentation (photography and videography)",
        "Light system",
        "Sound system",
        "Digital roll-up",
      ],
    },

    {
      title: "Event Planning and Logistics",
      items: [
        "Event concept and theme development",
        "Accommodation and transportation",
        "Registration and ushering",
        "Catering",
        "Entertainment shows",
        "Branding and print materials",
        "Giveaways",
      ],
    },
  ];
  return (
    <div>
      <BreadCrumb
        title1="Event Management Services"
        title2="Home"
        title3="Our Services"
        title4="Event Management"
      />
      <div className="container mx-auto bg--500">
        <div className="mx-[rem]">
          {/* Text Section */}

<ServiceDesc title={"We design events that connect, inspire, and perform, both on-site and online."}  desc={`We don’t just plan events, we craft stories people live. Our team blends creative vision, flawless production, and guest care to make every moment matter.`} />

          {/* Cards Section */}

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3  gap-[2.5rem] px-[rem]">
            <div className="">
              <CardServiceLottie
                animationData={FlawJson}
                title="Flawless Event Flow"
                description="Every cue, sound, and spotlight in perfect sync.We turn complex logistics into effortless experiences."
              />
            </div>
            <div className="">
              <CardServiceLottie
                animationData={ConnectedJson}
                title="Connected Without Boundaries"
                description="Hybrid tools, live streaming, and translation unite every guest.They’ll feel part of the moment."
              />
            </div>
            <div className="">
              <CardServiceLottie
                animationData={CraftedJson}
                title="Crafted Around Your Story"
                description="We design events that people remember — and talk about."
              />
            </div>
            <div className="">
              <CardServiceLottie
                animationData={YourBrandJson}
                title="Your Brand in Every Detail"
                description="From LED screens to digital roll-ups, your brand shines through."
              />
            </div>
            <div className="">
              <CardServiceLottie
                animationData={CapturedJson}
                title="Captured Forever"
                description="We don’t just cover your event. we document its soul."
              />
            </div>
    
          </div>

          {/* Service Details Section */}

          <ServiceDetails
            bgImage={"/OurServices/WebServices/bgImage.jpg"}
            services={services}
            topImage={"/OurServices/EventManagement/EventManagementPhoto.png"}
          />
        </div>

        {/* Project Showcase Section */}
        <ProjectShowcaseDigital />
        {/* <ProjectShowcaseSoftwareServices /> */}
      </div>
    </div>
  );
}
