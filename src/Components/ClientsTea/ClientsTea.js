"use client";

import React, { useState, useCallback } from "react";
import "./ClientsTea.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const fallbackReviews = [
  {
    title: "Dolphin Speed Boats raised $2.4M and reached 85% user engagement with our design",
    comment: "Racing Line excels with meticulous attention to detail, commitment to excellence, and creative problem-solving. They transformed our event presence from a simple booth into an immersive brand experience that captured every visitor's attention.",
    userName: "Sara Mosaad",
    avatar: "/ClientsTea/avatar.jpg",
    tags: [
      { label: "Event Management", color: "cyan" },
      { label: "Booth Design", color: "green" },
    ],
    images: ["/OurServices/ourservices1.jpg", "/OurServices/ourservices2.jpg"],
  },
  {
    title: "Nexora Tech boosted conversions by 120% after a full brand and web overhaul",
    comment: "We came to Racing Line with a dated brand and a website that wasn't converting. Within 8 weeks they delivered a complete identity system, a blazing-fast website, and a launch campaign that tripled our inbound leads. Best investment we've made.",
    userName: "Ahmed Khaled",
    avatar: "/ContactUs/avatar.png",
    tags: [
      { label: "Branding", color: "purple" },
      { label: "Web Design", color: "cyan" },
    ],
    images: ["/OurServices/ourservices5.jpg", "/OurServices/ourservices6.jpg"],
  },
  {
    title: "Velora Fashion launched across 3 markets with a unified visual identity",
    comment: "Expanding into new markets felt overwhelming until Racing Line stepped in. They built a cohesive visual language that works across cultures and channels — from packaging in Dubai to digital campaigns in Europe. Truly world-class creative partners.",
    userName: "Layla Hassan",
    avatar: "/OurServices/Ai/avatar.png",
    tags: [
      { label: "Visual Identity", color: "green" },
      { label: "Campaign Design", color: "purple" },
    ],
    images: ["/OurServices/ourservices3.png", "/OurServices/ourservices7.jpg"],
  },
];

function getItemData(items, idx) {
  const item = items[idx];
  return {
    ...item,
    tags: item.tags || [
      { label: "Event Management", color: "cyan" },
      { label: "Booth Design", color: "green" },
    ],
    images: item.images || ["/ClientsTea/picture9.png", "/ClientsTea/picture9.png"],
  };
}

export default function ClientsTea({ reviews }) {
  const validReviews = reviews?.filter((r) => r.title && r.comment && r.userName);
  const items = validReviews?.length > 0 ? validReviews : fallbackReviews;
  const [currentIdx, setCurrentIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("next");

  const navigate = useCallback(
    (dir) => {
      if (isAnimating) return;
      setDirection(dir);
      setPrevIdx(currentIdx);
      setIsAnimating(true);

      const nextIdx =
        dir === "next"
          ? (currentIdx + 1) % items.length
          : (currentIdx - 1 + items.length) % items.length;
      setCurrentIdx(nextIdx);

      setTimeout(() => {
        setPrevIdx(null);
        setIsAnimating(false);
      }, 800);
    },
    [isAnimating, currentIdx, items.length]
  );

  const active = getItemData(items, currentIdx);
  const prev = prevIdx !== null ? getItemData(items, prevIdx) : null;

  // Exit classes for the OLD content
  const imageExitClass = direction === "next" ? "anim-slide-out-left" : "anim-slide-out-right";
  const textExitClass = direction === "next" ? "anim-slide-out-up" : "anim-slide-out-down";

  // Enter classes for the NEW content
  const imageEnterClass = direction === "next" ? "anim-slide-in-right" : "anim-slide-in-left";
  const textEnterClass = direction === "next" ? "anim-slide-in-bottom" : "anim-slide-in-top";

  // Renders tags + title block
  const renderTopSection = (data, animClass) => (
    <div className={animClass}>
      <div className="flex gap-1 flex-wrap">
        {data.tags.map((tag, i) => (
          <span
            key={i}
            className="px-[1rem] py-[.5rem] rounded-[3.125rem] text-white text-[0.875rem] glow-border"
          >
            {tag.label || "General"}
          </span>
        ))}
      </div>
      <h3 className="text-white text-xl font-bold py-2 leading-snug mt-4">
        {data.title || "Client Success Story"}
      </h3>
    </div>
  );

  // Renders comment + avatar block
  const renderBottomSection = (data, animClass) => (
    <div className={animClass}>
      <p className="text-gray-400 text-sm leading-relaxed">
        {data.comment || "No testimonial available yet."}
      </p>
      <div className="flex items-center gap-3 pt-4">
        <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden border border-gray-600">

          <Image src="/ClientsTea/Ellipse 26.png" alt="user" width={32} height={32} />
        </div>
        <span className="text-white text-xs font-semibold">
          {data.userName || "Anonymous Client"}
        </span>
      </div>
    </div>
  );

  // Renders an image slide
  const renderImage = (src, animClass) => (
    <div className={`absolute inset-0 ${animClass}`}>
      <Image className="object-cover" src={src} alt="Project showcase" fill />
    </div>
  );

  return (
    <>
      <div className="BarStyle font-[600] text-[2.5rem] leading-tight text-white w-[55%]  mt-[6.25rem]">
        <div className="GlowCone" />
        What
        <span className="PlayFair italic font-[500]">Winning Brands </span>

        Say After Taking The Fastest Line To Growth
      </div>

      <div className="mt-[3.125rem] grid grid-cols-1 md:grid-cols-12 gap-6 p-10 min-h-[500px] w-full items-stretch">
        {/* Column 1: Client Info (3 cols) */}
        <div className="md:col-span-3 flex flex-col justify-between">
          <div className="relative">
            <i className="fa-solid fa-angle-right text-[1.8rem] text-[#77BD74] absolute -left-9 top-[3.8rem]"></i>
            <div className="flex flex-col justify-between">
              {/* Top section — tags + title (slides vertically) */}
              <div className="overflow-hidden relative">
                {prev && renderTopSection(prev, textExitClass)}
                {renderTopSection(active, isAnimating ? textEnterClass : "")}
              </div>

              {/* Fixed separator line */}
              <div className="w-full h-px bg-white/20 my-2" />

              {/* Bottom section — comment + avatar (slides vertically) */}
              <div className="overflow-hidden relative">
                {prev && renderBottomSection(prev, textExitClass)}
                {renderBottomSection(active, isAnimating ? textEnterClass : "")}
              </div>
            </div>
          </div>

          {/* NAVIGATION ARROWS */}
          <div className="flex justify-end items-center gap-6 pt-4">
            <button onClick={() => navigate("prev")} className="cursor-pointer">
              <ChevronLeft className="arrow-icon-glow w-8 h-8" />
            </button>
            <button onClick={() => navigate("next")} className="cursor-pointer">
              <ChevronRight className="arrow-icon-glow w-8 h-8" />
            </button>
          </div>
        </div>

        {/* Column 2: Large Image (6 cols) — slides horizontally */}
        <div className="md:col-span-6 rounded-2xl overflow-hidden border border-white/10">
          <div className="relative w-full h-full min-h-[400px] bg-gray-800/50">
            {prev && renderImage(prev.images[0], imageExitClass)}
            {renderImage(active.images[0], isAnimating ? imageEnterClass : "")}
          </div>
        </div>

        {/* Column 3: Small Image (3 cols) — slides horizontally */}
        <div className="md:col-span-3 rounded-2xl overflow-hidden border border-white/10 hidden md:block">
          <div className="relative w-full h-full min-h-[400px] bg-gray-800/50">
            {prev && renderImage(prev.images[1] || prev.images[0], imageExitClass)}
            {renderImage(active.images[1] || active.images[0], isAnimating ? imageEnterClass : "")}
          </div>
        </div>
      </div>
    </>
  );
}
