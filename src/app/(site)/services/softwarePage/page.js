import BreadCrumb from "@/Components/BreadCrumb/BreadCrumb";
import CardServiceImage from "@/Components/CardService/CardServiceImage";
import CardServiceImageHalf from "@/Components/CardService/CardServiceImageHalf";
import CardServiceLottie from "@/Components/CardService/CardServiceLottie";
import ProjectShowcaseSoftwareServices from "@/Components/ProjectShowcaseSoftwareServices/ProjectShowcaseSoftwareServices";
import ServiceDetails from "@/Components/ServiceDetails/ServiceDetails";
import responsiveJson from "@/../../public/OurServices/WebServices/responsive.json";
import prototypeJson from "@/../../public/OurServices/WebServices/prototype.json";
import loadingJson from "@/../../public/OurServices/WebServices/loading.json";
import seoJson from "@/../../public/OurServices/WebServices/SEO.json";
import SubService from "@/Components/SubService/SubService";
import React from "react";
import ServiceDesc from "@/Components/ServiceDesc/ServiceDesc";

export default function SoftwareServices() {
  const services = [
    {
      title: "Online Visibility and User Engagement",
      items: [
        "User interface and experience (UI/UX design)",
        "Corporate website development",
        "E-commerce store development",
      ],
    },
    {
      title: "Custom Solutions and Application Development",
      items: [
        "Custom software development", "Mobile and web applications"
      ],
    },
    {
      title: "Support, Security, and Optimization",
      items: [
        "Preventative cybersecurity",
        "Website maintenance, hosting, domain, and emails",
      ],
    },
  ];
  return (
    <div>
      <BreadCrumb
        title1="Website Development & Software Services"
        title2="Home"
        title3="Our Services"
        title4="Website Development & Software Services"
      />
      <div className="container mx-auto bg--500">
        <div className="mx-[rem]">
          {/* Text Section */}
          <ServiceDesc
            title={"Not Just a Website. A Growth Engine"}
            desc={`We do not just build websites. We craft digital experiences that
              help your business grow, convert, and connect. From user-friendly
              interfaces to custom software solutions, we turn your ideas into
              powerful online platforms that perform flawlessly and look
              stunning across every device.`}
          />

          {/* Cards Section */}

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3  gap-[2.5rem] px-[rem]">
            <div className="">
              <CardServiceImage
                defaultImage="/OurServices/WebServices/Default.jpg"
                hoverImage="/OurServices/WebServices/Default2.jpg"
                title="Your Brand, Brought to Life"
                description="Layering brand elements to form the final experience."
              />
            </div>

            <div className="">
              <CardServiceImageHalf
                image="/OurServices/WebServices/Frame2.svg"
                title="Designed to Convert"
                description="Every layout choice is backed by UX psychology and conversion data."
              />
            </div>
            <div className="">
              <CardServiceLottie
                animationData={loadingJson}
                title="Lightning-Fast Experiences"
                description="Optimized for Core Web Vitals and SEO. your users (and Google) will love it."
              />
            </div>
            <div className="">
              <CardServiceLottie
                animationData={responsiveJson}
                title="Adaptive on Every Device"
                description="Fully responsive design built for real-world behavior."
              />
            </div>
            <div className="">
              <CardServiceLottie
                animationData={prototypeJson}
                title="Prototype Before You Pay"
                description="See and feel your website before a single line of code is written."
              />
            </div>
            <div className="">
              <CardServiceLottie
                animationData={seoJson}
                title="Prototype Before You Pay"
                description="See and feel your website before a single line of code is written."
              />
            </div>
          </div>

          {/* Service Details Section */}

          <ServiceDetails
            bgImage={"/OurServices/WebServices/bgImage.jpg"}
            services={services}
            topImage={"/OurServices/WebServices/avatar2.png"}
          />
        </div>
        {/* Project Showcase Section */}

        <ProjectShowcaseSoftwareServices />
      </div>
    </div>
  );
}
