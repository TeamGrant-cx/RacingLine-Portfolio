import Image from "next/image";
import React from "react";
import styles from "./RaceLineSuccess.module.css";
import LensGlass from "../Lensglass/Lensglass";

export default function RaceLineSuccess({ data }) {
  return (
    <>
      <div className="grid grid-cols-2 gap-10 py-20">
        <div
          className={`${styles.BarStyle} font-[600] text-[2.5rem] text-white self-start`}
        >
          {" "}
          <div className={styles.GlowCone} />
          Why
          <span className="PlayFair mx-2 font-[500] italic">Racing Line</span>
          Takes You To The Finish Line Of Success?
        </div>
        <div className="bg--500">
          <div className="py-5 group flex justify-center items-center gap-3 relative pb-2">
            <i
              className="fa-solid fa-angle-right text-[1.8rem] text-[#77BD74] 
       transition-transform duration-500 
       group-hover:scale-y-[-1]"
            ></i>
            <p
              className="text-[1.5rem] text-[#C9CACF] 
       transition-transform duration-500 
       group-hover:translate-x-1"
            >
              Full-service marketing without fragmented execution
            </p>
            <span className="absolute bottom-0 left-[10%] w-[80%] h-[1px] bg-white/30"></span>
          </div>

          <div className="py-5 group flex justify-center items-center gap-3 relative pb-2">
            <i
              className="fa-solid fa-angle-right text-[1.8rem] text-[#77BD74] 
       transition-transform duration-500 
       group-hover:scale-y-[-1]"
            ></i>
            <p
              className="text-[1.5rem] text-[#C9CACF] 
       transition-transform duration-500 
       group-hover:translate-x-1"
            >
              High-impact event execution with precision and control
            </p>
            <span className="absolute bottom-0 left-[10%] w-[80%] h-[1px] bg-white/30"></span>
          </div>

          <div className="py-5 group flex justify-center items-center gap-3">
            <i
              className="fa-solid fa-angle-right text-[1.8rem] text-[#77BD74] 
       transition-transform duration-500 
       group-hover:scale-y-[-1]"
            ></i>
            <p
              className="text-[1.5rem] text-[#C9CACF] 
       transition-transform duration-500 
       group-hover:translate-x-1"
            >
              Performance-focused strategies built for measurable growth
            </p>
          </div>
        </div>
      </div>

      {/* width: 110.00090089328336;
height: 66.00090064339393;
padding-top: 8px;
padding-right: 30px;
padding-bottom: 8px;
padding-left: 30px;
gap: 10px;
angle: -8.78 deg;
opacity: 1;
top: 30.37px;
left: 157.01px;
border-radius: 50px; */}

      <div className="grid grid-cols-3 gap-10">
        <div className="bg--500 flex flex-col justify-center items-center relative group">
          <div
            className="bg-[#6ECCF7] absolute transition-all duration-300 ease-in-out 
  group-hover:-top-5 group-hover:left-28
  rounded-[50px] 
  w-[110px] h-[66px] 
  py-[8px] px-[30px] 

  rotate-[8.78deg]
  -top-[30.37px] left-[157.01px]"
          >
            <Image
              src="/RaceLineSuccess/Vector.png"
              alt="Avatar"
              width={50}
              height={50}
            />
          </div>

          <LensGlass
            borderRadius="50px"
            width={110}
            height={66}
            className="absolute transition-all duration-300 ease-in-out
              group-hover:-top-5 group-hover:-left-[80px]
              rotate-[-8.78deg]
              -top-[150.37px] -left-[120px]"
          >
            <div className="flex justify-between py-[8px] px-[30px] text-white">
              <p>10</p>
              <p>served markets</p>
            </div>
          </LensGlass>
          <p className="text-[9.5rem] font-[600] text-[#C8C9D0]">25+</p>
          <p className="text-[1.5rem] font-[400] text-[#C8C9D0]">
            Years of Marketing Expertise
          </p>
        </div>
        <div className="bg-red-500">
          <h2>ok</h2>
        </div>
        <div className="bg-red-500">
          <h2>ok</h2>
        </div>
      </div>
    </>
  );
}
