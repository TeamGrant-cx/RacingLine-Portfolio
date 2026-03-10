import React from "react";
import styles from "./ProjectShowcaseOffline.module.css";
import Image from "next/image";

export default function ProjectShowcaseOffline({ project }) {
  const logo = project?.clientLogo?.sizes?.card?.url || project?.clientLogo?.url;
  const challenge = project?.challengeAndStrategy;
  const services = project?.servicesDelivered ?? [];
  const images = project?.showcaseImages ?? [];

  return (
    <div className="py-[1.5rem] sm:py-[2rem] md:py-[3.1rem]">
      <h1 className="text-primary text-center text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] mt-[3rem] sm:mt-[4rem] md:mt-[6rem] mb-[2rem] sm:mb-[2.5rem] md:mb-[3rem] uppercase tracking-wider px-4">
        Projects Showcase
      </h1>

      <div className={styles.parent}>
        <div className={`${styles.div1} border-gradient-card `}>
          <div className="relative w-full h-full rounded-[0.5rem]">
            {logo && (
              <Image
                src={logo}
                alt={project?.title || "Client Logo"}
                fill
                className="object-contain"
              />
            )}
          </div>
        </div>
        <div className={`${styles.div2} border-gradient-card `}>
          <div className="p-[0.75rem] sm:p-[1rem] md:p-[1.25rem]">
            <h1 className="text-primary text-[1rem] sm:text-[1.1rem] md:text-[1.2rem]">
              The Challenge & Strategy
            </h1>
            <p className="text-white text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem]">
              {challenge || ""}
            </p>
          </div>
        </div>
        <div className={`${styles.div3} border-gradient-card `}>
          <div className="p-[0.75rem] sm:p-[1rem] md:p-[1.25rem]">
            <h1 className="text-primary text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem]">Services Delivered</h1>
            {services.map((s, i) => (
              <p key={i} className="text-white text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem]">
                <i className="fa-solid fa-angle-right"></i> {s.text}
              </p>
            ))}
          </div>
        </div>
        {images.slice(0, 3).map((img, i) => {
          const imgUrl = img.image?.sizes?.card?.url || img.image?.url;
          return (
            <div
              key={i}
              className={`${styles[`div${i + 4}`]} border-gradient-card relative p-[0.4rem] `}
            >
              <div className="relative w-full h-full overflow-hidden rounded-[0.5rem]">
                {imgUrl && (
                  <Image
                    src={imgUrl}
                    alt={img.image?.alt || `Showcase ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
