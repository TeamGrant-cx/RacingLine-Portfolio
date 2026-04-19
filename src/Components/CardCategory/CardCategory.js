import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CardCategory({ SrcPage, text, bgImage, cardImage, withHoverEffect = false }) {
  return (
    <Link
      href={SrcPage}
      className={`border-gradient-color
       rounded-[1.25rem] aspect-[1/1.15] flex flex-col justify-end p-[0.8rem] pb-[0.6rem] ${withHoverEffect ? 'group' : ''}`}

    >

      <div className="relative w-full flex-1 overflow-visible">
        <Image className={`absolute -top-5 left-1/2 -translate-x-1/2 w-[100%] h-auto ${
            withHoverEffect
              ? 'transition-transform duration-700 group-hover:scale-120 group-hover:rotate-10'
              : ''
          }`}
          src={cardImage}
          alt="arrow"
          width={389}
          height={280}
        />
      </div>


      <div className="flex items-end justify-between text-white gap-2 z-10">

        <h1 className="text-white text-[0.95em] font-[600] leading-[1.25]">{text}</h1>

        <i className="text-[1.8rem] rotate-45 fa-solid fa-chevron-right arrow-icon-glow flex-shrink-0 mb-[0.1rem]"></i>

      </div>


    </Link>
  );
}
