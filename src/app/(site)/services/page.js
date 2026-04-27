import BreadCrumb from "@/Components/BreadCrumb/BreadCrumb";
import OurServices from "@/Components/OurServices/OurServices";
import React from "react";

export default function Services() {
  return (
    <>
        <BreadCrumb title1="Home" title2="Our Services" />
      <div className="py-[6rem] px-[2rem]">
        <OurServices display={false} />
      </div>
    </>
  );
}
