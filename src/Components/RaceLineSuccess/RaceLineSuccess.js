import Image from "next/image";
import React from "react";
import styles from "./RaceLineSuccess.module.css";

export default function RaceLineSuccess({ data }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-20">
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

      <div className="grid grid-cols-3 gap-10">
        <div className="bg--500 flex flex-col justify-center items-center relative group">
          <div className="bg-[#6ECCF7] absolute transition-all duration-300 ease-in-out group-hover:top-15 group-hover:left-28 rounded-[50px] w-[110px] h-[66px] py-[8px] px-[30px] rotate-[8.78deg] top-[5%] left-[157.01px] z-10">
            <Image
              src="/RaceLineSuccess/Vector.png"
              alt="Avatar"
              width={50}
              height={50}
            />
          </div>

          <div className={`ButtonStyle absolute transition-all duration-300 ease-in-out group-hover:top-15 group-hover:right-28 -rotate-[8.78deg] top-[5%] right-[150px] flex justify-around   rounded-full px-5 py-3 text-white z-30`}
          >
            <div className="mx-2 ">
              <p className="text-[2rem] font-[700] leading-none">10</p>
            </div>
            <div className="flex flex-col leading-tight mx-2 ">
              <p className="text-[0.85rem] font-[500]">Served</p>
              <p className="text-[0.85rem] font-[500]">Markets</p>
            </div>
          </div>

          <p className="text-[9.5rem] font-[600] text-[#C8C9D0] z-20">25+</p>
          <p className="text-[1.5rem] font-[400] text-[#C8C9D0] z-20">
            Years of Marketing Expertise
          </p>
        </div>

        <div className="bg--400 flex justify-center items-center">
          <button
            className={`bg-neutral-400/20 text-neutral-300 backdrop-blur-[1px] border border-neutral-400/20  rounded-full px-3 py-3`}
          >
            Request a quotation
          </button>
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
