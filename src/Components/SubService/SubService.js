"use client";
import React from "react";
import CardServiceImage from "../CardService/CardServiceImage";
import CardServiceLottie from "../CardService/CardServiceLottie";
import CardServiceVideo from "../CardService/CardServiceVideo";
import responsiveJson from "../../../public/OurServices/WebServices/responsive.json";
import prototypeJson from "../../../public/OurServices/WebServices/prototype.json";
import loadingJson from "../../../public/OurServices/WebServices/loading.json";
import seoJson from "../../../public/OurServices/WebServices/SEO.json";

import Image from "next/image";
import ProjectShowcaseSoftwareServices from "../ProjectShowcaseSoftwareServices/ProjectShowcaseSoftwareServices";
import CardServiceImageHalf from "../CardService/CardServiceImageHalf";
import ServiceDetails from "../ServiceDetails/ServiceDetails";

export default function SubService() {
  return (
    <>
      <div className="mx-[rem]">
        <div className="text-center bg--500 py-[3.125rem] w-[70%] mx-auto">
          <h1 className="text-primary text-[2rem]">
            Not Just a Website. A Growth Engine
          </h1>
          <p className="text-white text-[1.25rem]">
            We do not just build websites. We craft digital experiences that
            help your business grow, convert, and connect. From user-friendly
            interfaces to custom software solutions, we turn your ideas into
            powerful online platforms that perform flawlessly and look stunning
            across every device.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[2.5rem] px-[rem]">
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
              image="/OurServices/WebServices/Frame2.png"
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

        <ServiceDetails />
      </div>
      <ProjectShowcaseSoftwareServices />
    </>
  );
}
