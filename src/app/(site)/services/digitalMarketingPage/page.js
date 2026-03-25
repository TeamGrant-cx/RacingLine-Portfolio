import "./digitalMarketing.css";
import BreadCrumb from "@/Components/BreadCrumb/BreadCrumb";
import ServiceDesc from "@/Components/ServiceDesc/ServiceDesc";
import ServiceDetails from "@/Components/ServiceDetails/ServiceDetails";
import Image from "next/image";

import React from "react";


export default function DigitalMarketing() {

  const backgro = {
    backgroundImage: "url('/OurServices/DigitalServices/serviceherofullbg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (

    <>
    <div style={backgro} className="grid grid-cols-2">

      <div className="">

        <BreadCrumb
          title1="Digital Marketing Services"
          title2="Home"
          title3="Our Services"
          title4="Digital Marketing"
        />
        <p className="my- text-white font-[700] font-bold text-[4rem] uppercase leading-tight">
          Fuel Your
          <span className="block text-primary mt-">
            Digital Presence
          </span>
        </p>


        <p className="my-3 text-[#F1F2F4] font-semibold text-[2rem] uppercase">Accelerate Your Brand With Precision-Driven, Data-Led Strategies On The Digital Track.</p>


        <button className="my- glass glow-border bg-[#002B4D] hover:!bg-[#002B4D] rounded-[3.125rem] py-[1rem] px-[3.125rem] text-[1.5rem] text-white transition-colors duration-500">Get A Free Consultation</button>

      </div>


      <div className="relative">

        <div className={`glass glow-border -rotate-[8.78deg] top-[8%] left-[80px] flex items-center justify-center gap-[0.625rem] px-[20px] py-[1px]  rounded-full text-white animate-float w-[10rem] h-[3.563rem]`}>
          <p className="font-bold text-[1.9rem] -none">10+</p>
          <p className="text-[0.7rem] font-bold leading-tight">Digital<br />Platforms</p>
        </div>


        <div className="bg-[#6ECCF7] absolute  rounded-[50px] w-[110px] h-[66px] py-[8px] px-[25px] rotate-[8.78deg] top-[35%] left-[450px]  animate-float">
          <Image
            src="/RaceLineSuccess/Vector.png"
            alt="Avatar"
            width={50}
            height={50}
          />
        </div>


        <div className=" glass glow-border absolute   rounded-full w-[70px] h-[70px] rotate-[8.78deg] top-[45%] left-[380px]   flex items-center justify-center p-2 animate-float">
          <Image
            src="/RaceLineSuccess/Vector2.png"
            alt="Avatar"
            width={70}
            height={70}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>


<ServiceDesc/>
<ServiceDetails/>

    </>
  );
}
