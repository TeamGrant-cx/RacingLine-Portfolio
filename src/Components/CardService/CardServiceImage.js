"use client";
import { useState } from "react";
import Image from "next/image";

export default function CardServiceImage({
  defaultImage,
  hoverImage,
  title,
  description,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group rounded-20 border-gradient-color overflow-hidden aspect-[410/450]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Images */}
      <div className="absolute inset-[2px] rounded-[19px] overflow-hidden">
        {/* Default Image */}
        <Image
          src={defaultImage}
          alt="Background"
          fill
          className={`object-cover   transition-opacity duration-500 ${
            isHovered && hoverImage ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* Hover Image */}
        {hoverImage && (
          <Image
            src={hoverImage}
            alt="Background Hover"
            fill
            className={`object-cover   transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 " />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-[100px] flex flex-col justify-center items-start px-[1.5rem] py-[1rem] gap-2 bg-gradient-to-t from-black/80 to-transparent">
        <h2 className="text-primary text-[1rem] uppercase font-medium">
          {title}
        </h2>
        <p className="text-white/70 text-[0.85rem] leading-tight">
          {description}
        </p>
      </div>
    </div>
  );
}
