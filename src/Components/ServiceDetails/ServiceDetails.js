"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function ServiceDetails({services,bgImage,topImage,aiPage=false}) {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };



  return (
    <>
      <div className="px-[rem] overflow-">
        <h1 className="text-primary text-center text-[2rem] mt-[6rem]">
          Service Details
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-[3rem] gap-[1.8rem]
          ">
          <div className="order-2 md:order-2 lg:order-1 w-full  aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] lg:aspect-[] xl:aspect-[6/5]  bg--500 pt-[3rem] pr-[2.5rem] pl-[2.5rem] pb-[3rem] space-y-4 flex flex-col justify- border-gradient-color overflow-hidden  ">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-primary/20 rounded-[2rem] overflow-hidden transition-all duration-300 flex-shrink-0"
              >
                <button
                  onClick={() => toggleSection(index)}
                  className={`w-full group ${openSection === index ? "bg-foreground text-primary" : "text-white bg-primary"} hover:bg-foreground hover:text-primary rounded-[2rem] pt-[1.25rem] pr-[1.25rem] pl-[1.25rem] pb-[0.625rem] text-[0.9rem] flex justify-start items-center gap-3 transition-all duration-300`}
                >
                  <i
                    className={`fa-solid transition-transform duration-300 ${
                      openSection === index ? "fa-plus rotate-180" : "fa-plus"
                    } group-hover:rotate-90`}
                  ></i>
                  {service.title}
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openSection === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="px-6 py-1 space-y-3 bg-primary/5">
                    {service.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className={`text-white flex items-start gap-3 transform transition-all duration-300`}
                        style={{
                          transitionDelay: `${itemIndex * 50}ms`,
                        }}
                      >
                        <span className="">•</span>
                        <span className="flex-1 text-[1rem]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="order-1 md:order-1 lg:order-2 relative w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] lg:aspect-[] xl:aspect-[6/5] border-gradient-color p-[0.125rem]  ">
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden h-[65%]">
              <Image
                className="object-cover"
                src={bgImage}
                alt="Background Image"
                fill
              />
            </div>
            <div className="absolute z-10 left-[6%] bottom-[.7%] bg--500   w-[110%] h-[110%]">
              <Image
                className="object-cover
                
                 w-full h-full"
                src={topImage}
                alt="Avatar Image"
                fill
              />
            </div>
            
          </div>
          
        </div>
      </div>
    </>
  );
}
