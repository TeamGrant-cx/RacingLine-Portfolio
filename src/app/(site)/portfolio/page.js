import BreadCrumb from "@/Components/BreadCrumb/BreadCrumb";
import CardCategory from "@/Components/CardCategory/CardCategory";
import Image from "next/image";
import React from "react";

async function getServices() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/services?depth=1&sort=gridLayout.order`,
    { cache: "no-store" }
  );
  if (!res.ok) return [];
  const json = await res.json();
  return json.docs ?? [];
}

export default async function Portfolio() {
  const services = await getServices();

  return (
    <>
      <BreadCrumb title1="OUR PORTFOLIO" title2="Home" title3="Our portfolio" />

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg--500 py-12 md:py-24 text-center md:text-left order-2 md:order-1">
            <h1 className="text-primary font-[700] text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] leading-tight">
              A Showcase of What We Build{" "}
            </h1>
            <p className="text-white text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] mt-4">
              Our portfolio reflects the brands we’ve elevated, the experiences
              we’ve crafted, and the results we’ve helped our clients achieve.
              Every project represents a blend of creativity, strategy, and
              precision—tailored to solve real challenges. Explore our work
              below, and use the filters to discover the projects most relevant
              to you.
            </p>
          </div>

          <div className="flex items-center justify-center py-8 md:py-12 order-1 md:order-2 bg--500 ">
            <div className="relative">
              <Image
                className=""
                src="/Portfolio/Frame1.png"
                alt="Avatar"
                width={350}
                height={350}
              />
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-primary text-center text-[2rem] mt-[6rem] mb-[3rem] ">
            Explore By Category
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2.5rem]">
            {services.map((service) => (
              <CardCategory
                key={service.id}
                SrcPage={`/services/${service.slug}`}
                text={service.title}
                bgImage={service.backgroundImage?.sizes?.card?.url || service.backgroundImage?.url}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}