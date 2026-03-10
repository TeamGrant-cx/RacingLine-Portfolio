"use client";
import { useRef } from "react";
import Image from "next/image";

export default function CardServiceVideo({
  video,
  poster,
  title,
  description,
}) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  // Check if it's a webp (animated image) or actual video
  const isWebp = video && video.endsWith(".webp");

  return (
    <div
      className="relative group rounded-20 border-gradient-color overflow-hidden aspect-[410/450] flex flex-col bg-[#0a0a0a]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Media Section */}
      <div className="flex-1 w-full overflow-hidden relative flex items-center justify-center">
        {isWebp ? (
          <Image
            src={video}
            alt="Background"
            fill
            className="object-contain"
            unoptimized
          />
        ) : (
          <video
            ref={videoRef}
            className="w-full h-full object-contain"
            muted
            playsInline
            poster={poster}
          >
            <source src={video} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        )}
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
