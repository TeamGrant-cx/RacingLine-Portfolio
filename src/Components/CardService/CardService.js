"use client";
import { useRef } from "react";
import Image from "next/image";
import Lottie from "lottie-react";

export default function CardService({
  bgImage,
  bgVideo,
  bgLottie,
  title,
  description,
}) {
  const videoRef = useRef(null);
  const lottieRef = useRef(null);

  const handleMouseEnter = () => {
    if (bgVideo && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    } else if (bgLottie && lottieRef.current) {
      lottieRef.current.goToAndPlay(0);
    }
  };

  return (
    <div
      className="relative group rounded-20 border-gradient-color overflow-hidden h-[400px] max-h-[500px]"
      onMouseEnter={handleMouseEnter}
    >
      {/* Background Video, Lottie, or Image */}
      <div className="absolute inset-0 z-0">
        {bgLottie ? (
          <Lottie
            lottieRef={lottieRef}
            animationData={bgLottie}
            loop={false}
            autoplay={false}
            className="w-full  py-1 px-5      object-cover"
          />
        ) : bgVideo && bgVideo.endsWith(".webp") ? (
          <Image
            src={bgVideo}
            alt="Background"
            width={500}
            height={400}
            className="     object-cover "
            unoptimized
          />
        ) : bgVideo ? (
          <video
            ref={videoRef}
            className="w-full       object-cover"
            muted
            playsInline
          >
            <source src={bgVideo} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        ) : bgImage ? (
          <Image
            src={bgImage}
            alt="Background"
            fill
            className="object-cover w-full h-full  "
          />
        ) : null}
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 z-5 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end items-start p-[2rem] gap-3">
        <h2 className="text-primary text-[1.25rem] uppercase">{title}</h2>
        <p className="text-white text-[1rem] max-w-[80%]">{description}</p>
      </div>
    </div>
  );
}
