import Image from "next/image";
import React from "react";
import styles from "./RaceLineSuccess.module.css";

export default function RaceLineSuccess({ data }) {
  return (
    <div className="grid grid-cols-2 gap-10 py-20">
<div className={`${styles.BarStyle} font-[600] text-[2.5rem] text-white self-start`}>        <div className={styles.GlowCone} />
        Why
        <span className="PlayFair mx-2 font-[500] italic">Racing Line</span>
        Takes You To The Finish Line Of Success?
      </div>
      <div className="bg--500">
        <div className="py-5 group flex justify-center items-center gap-3 relative pb-2">
          <i
            className="fa-solid fa-angle-right text-[1.8rem] text-[#77BD74] 
       transition-transform duration-300 
       group-hover:scale-y-[-1]"
          ></i>
          <p
            className="text-[1.5rem] text-[#C9CACF] 
       transition-transform duration-300 
       group-hover:translate-x-1"
          >
            Full-service marketing without fragmented execution
          </p>
          <span className="absolute bottom-0 left-[10%] w-[80%] h-[1px] bg-white/30"></span>
        </div>

        <div className="py-5 group flex justify-center items-center gap-3 relative pb-2">
          <i
            className="fa-solid fa-angle-right text-[1.8rem] text-[#77BD74] 
       transition-transform duration-300 
       group-hover:scale-y-[-1]"
          ></i>
          <p
            className="text-[1.5rem] text-[#C9CACF] 
       transition-transform duration-300 
       group-hover:translate-x-1"
          >
            High-impact event execution with precision and control
          </p>
          <span className="absolute bottom-0 left-[10%] w-[80%] h-[1px] bg-white/30"></span>
        </div>

        <div className="py-5 group flex justify-center items-center gap-3">
          <i
            className="fa-solid fa-angle-right text-[1.8rem] text-[#77BD74] 
       transition-transform duration-300 
       group-hover:scale-y-[-1]"
          ></i>
          <p
            className="text-[1.5rem] text-[#C9CACF] 
       transition-transform duration-300 
       group-hover:translate-x-1"
          >
            Performance-focused strategies built for measurable growth
          </p>
        </div>
      </div>
    </div>
  );
}
