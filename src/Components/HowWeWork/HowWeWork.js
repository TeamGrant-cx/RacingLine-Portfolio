import Image from "next/image";
import React from "react";

export default function HowWeWork({ data }) {

  return (
    <div className="mt-[5rem]">
      <h1 className="text-center text-primary uppercase font-[700] text-[2.25rem]">
        {data.heading || "how we work"}
      </h1>
      <h2 className="text-center text-white font-[400] text-[1.25rem]">
        {data.subheading || "A complete, high-end framework"}
      </h2>

      {/* <Image
        src={data.diagramImage?.url || "/howWeWork section/hero.png"}
        alt={data.diagramImage?.alt || "Diagram Image"}
        width={1200}
        height={311}
        className="object-contain w-full h-full hidden md:block "
      /> */}

      <div className="grid container mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 px-4">
        {data?.steps?.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center md:items-start md:text-left gap-3">
            <Image
              src={step.icon?.url}
              alt={step.icon?.alt || step.title}
              width={90}
              height={80}
              className="object-contain"
            />
            <h1 className="text-primary text-[1.25rem]">{step.title}</h1>
            <p className="text-white text-[1rem]">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
