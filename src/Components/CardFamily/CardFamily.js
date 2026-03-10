import Image from "next/image";
import React from "react";

export default function CardFamily({ data }) {
  const defaultPhoto = data?.defaultPhoto?.sizes?.card?.url || data?.defaultPhoto?.url || "";
  const themePhoto = data?.themePhoto?.sizes?.card?.url || data?.themePhoto?.url || "";
  const name = data?.name || "";
  const role = data?.role || "";
  const socialLinks = data?.socialLinks || {};

  return (
    <div className="bg--500 border-gradient-color rounded-20 flex flex-col justify-evenly items-center  p-[1.25rem] relative group">
      <div className="relative w-[200px] h-[200px]">
        {defaultPhoto && (
          <Image
            src={defaultPhoto}
            alt={data?.defaultPhoto?.alt || name}
            fill
            className="object-cover"
          />
        )}
        {themePhoto && (
          <Image
            src={themePhoto}
            alt={data?.themePhoto?.alt || name}
            fill
            className="object-cover transition-all duration-900 ease-in-out [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] group-hover:[clip-path:polygon(250%_0,100%_0,100%_100%,0_100%)]"
          />
        )}
      </div>

      <h2 className="text-primary text-[1.25rem] uppercase">{name}</h2>
      <h2 className="text-white text-[1rem]">{role}</h2>
      <div className="text-[#30424A]">
        {socialLinks.linkedin && (
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin-in mx-2 cursor-pointer"></i>
          </a>
        )}
        {socialLinks.instagram && (
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram mx-2 cursor-pointer"></i>
          </a>
        )}
        {socialLinks.x && (
          <a href={socialLinks.x} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-x mx-2 cursor-pointer"></i>
          </a>
        )}
        {socialLinks.facebook && (
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook-f mx-2 cursor-pointer"></i>
          </a>
        )}
      </div>
    </div>
  );
}
