import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CardCategory({ SrcPage, text, bgImage }) {
  return (
    <Link
      href={SrcPage}
      className="relative min-h-[280px] md:min-h-[350px]"
      style={{
        backgroundImage: bgImage
          ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`
          : `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/Portfolio/bgImage.jpg')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        borderRadius: "50px",
      }}
    >
      <div className="border-gradient-color flex flex-col justify-between h-full p-6 md:p-[1.875rem] group">
        <div className="flex items-start justify-end text-white">
          <Image
            className="-rotate-45 group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-300 ease-in-out"
            src="/OurServices/angle.png"
            alt="arrow"
            width={30}
            height={30}
          />
        </div>

        <div className="text-white text-base md:text-lg lg:text-[2rem] font-[700]">
          <h1>{text}</h1>
        </div>
      </div>
    </Link>
  );
}
