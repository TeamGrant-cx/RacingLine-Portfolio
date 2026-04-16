import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CardCategory({ SrcPage, text, bgImage, withHoverEffect = false }) {
  return (
    <Link
      href={SrcPage}
      className={`border-gradient-color
       rounded-[1.25rem] aspect-[1/1.15] flex flex-col justify-between p-[1rem] ${withHoverEffect ? 'group' : ''}`}

    >

      <div className="relative w-full flex-1 overflow-visible">
        <Image
          className={`absolute -top-8 left-1/2 -translate-x-1/2 w-[80%] h-auto ${
            withHoverEffect
              ? 'transition-transform duration-700 group-hover:scale-150 group-hover:rotate-20'
              : ''
          }`}
          src="/HeroSection/mic.png"
          alt="arrow"
          width={389}
          height={280}
        />
      </div>


      <div className="flex items-center justify-between text-white pt-[0.5rem]">

        <h1 className="text-white text-[1.25rem] font-[500]">{text}</h1>

        <i className="text-[2.3rem] rotate-45 fa-solid fa-chevron-right arrow-icon-glow" ></i>

      </div>


    </Link>
  );
}
