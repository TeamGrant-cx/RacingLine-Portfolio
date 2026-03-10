"use client";
import Image from "next/image";

export default function CardServiceImageHalf({
  image,
  title,
  description,
}) {
  return (
    <div className="rounded-20 border-gradient-color overflow-hidden aspect-[410/450] flex flex-col bg-[#0a0a0a]">
      {/* Image Section */}
      <div className="flex-1 w-full relative flex items-center justify-center overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={900}
          height={700}
          className="object-contain pt-14"
        />
      </div>

      {/* Content Section - Fixed height */}
      <div className="h-[100px] flex flex-col justify-center items-start px-[1.5rem] py-[1rem] gap-2">
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
