import BreadCrumb from "@/Components/BreadCrumb/BreadCrumb";
import CardServiceImage from "@/Components/CardService/CardServiceImage";
import CardServiceImageHalf from "@/Components/CardService/CardServiceImageHalf";
import CardServiceLottie from "@/Components/CardService/CardServiceLottie";
import ProjectShowcaseDigital from "@/Components/ProjectShowcaseDigital/ProjectShowcaseDigital";
import ServiceDetails from "@/Components/ServiceDetails/ServiceDetails";

import YourBrandJson from "@/../../public/OurServices/OfflineServices/Your Brand in Every Detail.json";
import CraftedJson from "@/../../public/OurServices/OfflineServices/crafted around your story.json";
import responsiveJson from "@/../../public/OurServices/WebServices/responsive.json";
import prototypeJson from "@/../../public/OurServices/WebServices/prototype.json";
import loadingJson from "@/../../public/OurServices/WebServices/loading.json";
import seoJson from "@/../../public/OurServices/WebServices/SEO.json";







import React from "react";
import ProjectShowcaseOffline from "@/Components/ProjectShowcaseOffline/ProjectShowcaseOffline";
import ServiceDesc from "@/Components/ServiceDesc/ServiceDesc";

export default function OfflineMarketing() {
  const services = [
    {
      title: "Booth, Signage, and Branding",
      items: [
        "Booth 3D design and modeling",
        "Booth production and construction",
        "Outdoor and indoor signage",
        "Banners, rollups",
        "CNC acrylic, metal, and wood",
        "Trucks branding",
        "Seasonal decorations",
      ],
    },

    {
      title: "Graphic Design and 3D",
      items: [
        " Logo design",
        "Brand/Corporate Identity",
        "Product packaging",
        "Stationery",
        "E-catalogues and brochures",
        "3D modeling",
      ],
    },

    {
      title: "Print and Giveaways",
      items: [
        "       Digital, offset, and silkscreen printing",
        "Stationery",
        "Souvenirs and corporate giveaways",
        "Trophies",
        "Customized giveaways and gift sets",
      ],
    },
  ];
  return (
    <div>
      <BreadCrumb
        title1="Offline Marketing Services"
        title2="Home"
        title3="Our Services"
        title4="Offline Marketing"
      />
      <div className="container mx-auto bg--500">
        <div className="mx-[rem]">
          {/* Text Section */}

<ServiceDesc title={"We Craft What Your Audience Will Remember"} desc={`Your audience shouldn’t just see your brand, they should
experience it.
We create physical expressions of your identity that leave lasting
impressions long after the event ends.`} />

        
          {/* Cards Section */}

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3  gap-[2.5rem] px-[rem]">
            <div className="">
              <CardServiceLottie
                animationData={YourBrandJson}
                title="Your Brand, Seen Everywhere"
                description="We build consistency that makes your brand impossible to miss."
              />
            </div>
            <div className="">
              <CardServiceLottie
                animationData={YourBrandJson}
                title="Your Brand, Seen Everywhere"
                description="We build consistency that makes your brand impossible to miss."
              />
            </div>
            <div className="">
              <CardServiceLottie
                animationData={CraftedJson}
                title="Your Brand, Seen Everywhere"
                description="We build consistency that makes your brand impossible to miss."
              />
            </div>
            <div className="">
              <CardServiceImage
                defaultImage="/OurServices/WebServices/Default.jpg"
                hoverImage="/OurServices/WebServices/Default2.jpg"
                title="Your Brand, Brought to Life"
                description="Layering brand elements to form the final experience."
              />
            </div>

        
          
          </div>

          {/* Service Details Section */}

          <ServiceDetails
            bgImage={"/OurServices/OfflineServices/bgImage.png"}
            services={services}
            topImage={"/OurServices/OfflineServices/avatar2.png"}
          />
        </div>

        {/* Project Showcase Section */}
        <ProjectShowcaseOffline />
        {/* <ProjectShowcaseDigital/> */}
        {/* <ProjectShowcaseSoftwareServices /> */}
      </div>
    </div>
  );
}
