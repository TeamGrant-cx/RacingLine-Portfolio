import React from "react";
import Image from "next/image";
import styles from "./ProjectShowcaseSoftwareServices.module.css";

export default function ProjectShowcaseSoftwareServices({ project }) {
  const logo = project?.clientLogo?.sizes?.card?.url || project?.clientLogo?.url;
  const challenge = project?.challengeAndStrategy;
  const services = project?.servicesDelivered ?? [];
  const images = project?.showcaseImages ?? [];
  const metrics = project?.metrics ?? [];
  const mainImage = images[0]?.image?.sizes?.card?.url || images[0]?.image?.url;
  const laptopImage = images[1]?.image?.sizes?.hero?.url || images[1]?.image?.url;

  return (
    <div className="py-[3.1rem] ">
      <h1 className="text-primary text-center text-[2rem] mt-[6rem] mb-[3rem] uppercase tracking-wider">
        Projects Showcase
      </h1>

      <div className={styles.parent}>
        <div className={`${styles.div1} border-gradient-card relative p-[0.4rem]`}>
          <div className="relative w-full h-full overflow-hidden rounded-[0.5rem]">
            {mainImage && (
              <Image
                src={mainImage}
                alt={project?.title || "Showcase"}
                fill
                className="object-cover"
              />
            )}
          </div>
        </div>
        <div className={`${styles.div2} border-gradient-card relative flex justify-center`}>
          {logo && (
            <Image
              src={logo}
              alt={project?.title || "Client Logo"}
              width={120}
              height={120}
              className="object-contain px-[.6rem] py-[.6rem]"
            />
          )}
        </div>
        <div className={`${styles.div3} border-gradient-card`}>
          <div className="p-[1.25rem]">
            <h1 className="text-primary text-[1.2rem]">
              The Challenge & Strategy
            </h1>
            <p className="text-white text-[1rem]">
              {challenge || ""}
            </p>
          </div>
        </div>
        <div className={`${styles.div4} border-gradient-card`}>
          <div className="p-[1.25rem]">
            <h1 className="text-primary text-[1rem]">Services Delivered</h1>
            {services.map((s, i) => (
              <p key={i} className="text-white text-[1rem]">
                <i className="fa-solid fa-angle-right"></i> {s.text}
              </p>
            ))}
          </div>
        </div>
        <div className={`${styles.div5} border-gradient-card bg-[#1B1C20] relative overflow-visible pt-[16rem] sm:pt-[23rem] md:pt-[23rem] lg:pt-[22rem]`}>
          {laptopImage && (
            <div className="absolute left-[0%] -top-[30%] z-10 w-[95%] h-[130%] md:left-[0%] md:-top-[40%] md:w-[90%] md:h-[140%] lg:left-[0%] xl:-top-[30.5%] xl:left-[0%] lg:-top-[50%] lg:w-[100%] lg:h-[150%] xl:h-[130%]">
              <Image
                className="object-cover w-full h-full"
                src={laptopImage}
                alt="Laptop mockup"
                fill
              />
            </div>
          )}
        </div>
        {metrics.slice(0, 4).map((metric, i) => (
          <div key={i} className={`${styles[`div${i + 6}`]} flex flex-col justify-center items-center border-gradient-card`}>
            <div className="py-[1.25rem] px-[0.625rem] flex flex-col justify-center items-center">
              <h1 className="text-primary text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[2.5rem]">
                {metric.value}
              </h1>
              <p className="text-white text-[0.7rem] sm:text-[1.125rem] md:text-[1.125rem] lg:text-[1.125rem]">
                {metric.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
