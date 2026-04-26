import Image from "next/image";
import React from "react";
import styles from "./RaceLineSuccess.module.css";
import GlassButton from "@/Components/GlassButton/GlassButton";

export default function RaceLineSuccess({ data }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-[6.25rem]">
        <div className={`${styles.BarStyle} font-[600] text-[2.5rem] text-white self-start`} >

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


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-[3rem] pb-[6.25rem]">
        {/* First Div */}

        <div className="bg--500 flex flex-col justify-center items-center relative group pt-16">
          <div className="bg-[#6ECCF7] absolute transition-all duration-300 ease-in-out  rounded-[50px] w-[110px] h-[66px] py-[8px] px-[30px] rotate-[8.78deg] -top-[2%] left-[250px]  group-hover:top-2 group-hover:left-[200px]">
            <Image
              src="/RaceLineSuccess/Vector.png"
              alt="Avatar"
              width={50}
              height={50}
            />
          </div>

          <GlassButton
            as="div"
            transition={false}
            className="!absolute transition-all duration-300 ease-in-out -rotate-[8.78deg] top-[0%] right-[200px] group-hover:top-2 group-hover:right-[180px] flex justify-around rounded-full px-5 py-3 text-white"
          >
            <div className="mx-2 ">
              <p className="text-[2rem] font-[700] leading-none">10</p>
            </div>
            <div className="flex flex-col leading-tight mx-2 ">
              <p className="text-[0.85rem] font-[500]">Served</p>
              <p className="text-[0.85rem] font-[500]">Markets</p>
            </div>
          </GlassButton>

          <p className="text-[9.5rem] font-[600] text-[#C8C9D0] ">25+</p>
          <p className="text-[1.5rem] font-[400] text-[#C8C9D0] ">
            Years of Marketing Expertise
          </p>
        </div>

        {/* Second Div */}
        <div className="bg--500 flex flex-col justify-center items-center relative group pt-16">
          <div className="bg-[#6ECCF7] absolute transition-all duration-300 ease-in-out  rounded-[50px] w-[110px] h-[66px] py-[8px] px-[30px] -rotate-[8.78deg] -top-[20%] right-[160px] group-hover:top-2  flex justify-center items-center">
            <Image
              src="/RaceLineSuccess/amazon.png"
              alt="Avatar"
              width={250}
              height={250}
            />
          </div>
          <div className="bg-white absolute transition-all duration-300 ease-in-out  rounded-[50px] w-[110px] h-[66px] py-[8px] px-[30px] -rotate-[8.78deg] -top-[2%] right-[280px] group-hover:top-2 group-hover:right-[220px]  flex justify-center items-center">
            <Image
              src="/RaceLineSuccess/ArabBank.png"
              alt="Avatar"
              width={250}
              height={250}
            />
          </div>

          <GlassButton
            as="div"
            transition={false}
            className="!absolute transition-all duration-300 ease-in-out rotate-[8.78deg] top-[5%] left-[210px] group-hover:top-2 group-hover:left-[190px] flex justify-around rounded-full px-5 py-3 text-white"
          >
            <p className="text-[0.85rem] font-[500]">Leading Brands</p>
          </GlassButton>

          <p className="text-[9.5rem] font-[600] text-[#C8C9D0] ">100+</p>
          <p className="text-[1.5rem] font-[400] text-[#C8C9D0] ">
            Brands Partnered With
          </p>
        </div>

        {/* Third Div */}
        <div className="bg--500 flex flex-col justify-center items-center relative group pt-16">



          <div className=" bg-[#6ECCF7] absolute transition-all duration-300 ease-in-out  rounded-full w-[70px] h-[70px] rotate-[8.78deg] -top-[2%] right-[290px] group-hover:top-2 group-hover:right-[220px] overflow-hidden flex items-center justify-center p-2">
            <Image
              src="/RaceLineSuccess/Vector2.png"
              alt="Avatar"
              width={70}
              height={70}
              className="w-full h-full object-contain"
            />
          </div>

          <GlassButton
            as="div"
            transition={false}
            className="!absolute transition-all duration-300 ease-in-out rounded-full w-[70px] h-[70px] rotate-[8.78deg] -top-[20%] right-[150px] group-hover:top-1 overflow-hidden flex items-center justify-center p-3"
          >
            <Image
              src="/RaceLineSuccess/Vector3.png"
              alt="Avatar"
              width={70}
              height={70}
              className="w-full h-full object-contain"
            />
          </GlassButton>
          <GlassButton
            as="div"
            transition={false}
            className="!absolute transition-all duration-300 ease-in-out rounded-full w-[70px] h-[70px] rotate-[8.78deg] top-[0%] left-[280px] group-hover:top-2 group-hover:left-[250px] overflow-hidden flex items-center justify-center p-3"
          >
            <Image
              src="/RaceLineSuccess/Vector4.png"
              alt="Avatar"
              width={70}
              height={70}
              className="w-full h-full object-contain"
            />
          </GlassButton>

          <p className="text-[9.5rem] font-[600] text-[#C8C9D0] ">7</p>
          <p className="text-[1.5rem] font-[400] text-[#C8C9D0] ">
            in house Core Marketing services
          </p>
        </div>








      </div>
    </>
  );
}
