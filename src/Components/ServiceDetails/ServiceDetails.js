"use client";
import React, { useState } from "react";

const accordionData = [
  {
    title: "Social Media Management",
    content:
      "Posting randomly and hoping for engagement isn't a strategy. It's a gamble, and the house always wins. We manage your social media accounts end-to-end: content planning, copywriting, design, scheduling, community management, and monthly performance reporting. Every post is aligned with your brand voice, timed for maximum reach, and designed to turn passive followers into active customers. You stay focused on your business while we keep your audience engaged, responsive, and growing.",
  },
  {
    title: "Influencer Marketing",
    content:
      "Finding the right influencer isn't about who has the most followers. It's about who your audience actually trusts. We identify, vet, and negotiate with influencers who align with your brand values and speak directly to your target market. From micro-influencers with niche authority to high-profile creators with mass reach, we manage the entire campaign: briefing, content approval, posting schedules, and performance tracking. You get authentic endorsements that drive real conversions, not just expensive selfies with your product.",
  },
  {
    title: "Paid Ads",
    content:
      "Throwing money at Facebook and hoping for the best isn't advertising. It's charity. We plan, launch, and optimize paid ad campaigns across Facebook, Instagram, TikTok, LinkedIn, X (Twitter), Snapchat, and Google. Every campaign is built on audience research, A/B tested creatives, and data-driven budget allocation. We monitor performance daily, adjust targeting in real time, and obsess over your cost per acquisition so you spend less and convert more. Your ad budget works harder because we do.",
  },
  {
    title: "SEO/SEM",
    content:
      "If your website doesn't show up on the first page of Google, it might as well not exist. And yes, that applies to your beautifully designed site too. We provide full-service search engine optimization and search engine marketing: technical audits, keyword research, on-page optimization, link building, local SEO, and Google Ads management. We build organic visibility.",
  },
  {
    title: "Content Marketing",
    content:
      "People don't wake up wanting to be sold to. They wake up wanting answers, insights, and solutions. Content marketing gives them exactly that while positioning your brand as the authority they trust. We develop content strategies, write blog posts, produce articles, create infographics, and build resource libraries that attract your ideal customers through search and social. Every piece is optimized for SEO, aligned with your sales funnel, and written to educate first and convert second. The brands that teach their market are the ones that lead it.",
  },
  {
    title: "Email Marketing",
    content:
      "Your email list is the only audience you truly own. Algorithms can't throttle it, platforms can't take it away, and competitors can't outbid you for access to it. We design and execute email marketing campaigns that nurture leads, retain customers, and drive repeat purchases. From automated welcome sequences and abandoned cart recovery to monthly newsletters and promotional blasts, every email is segmented, personalized, and optimized for open rates and click-throughs. No spam, no fluff. Just emails people actually open.",
  },
];

export default function ServiceDetails({ services, bgImage, topImage, aiPage = false }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="grid grid-cols-2 mt-[6.25rem]">

        <div className="">
          <p className="text-[1rem] text-white">

            {"// SERVICE SPECIFICATIONS"}
            
            </p>

          <div className="BarStyle font-[600] text-[2.5rem] leading-tight text-white mt-2">
            <div className="GlowCone" />
            Engineering The Fastest Line To
            <span className="PlayFair italic font-[500]"> Conversion</span>
          </div>
        </div>

        <div className="text-white">
          {accordionData.map((item, index) => (
            <div key={index} className="border-b border-white/20">
              <div
                className="flex justify-between items-center cursor-pointer py-4"
                onClick={() => toggle(index)}
              >
                <p className="font-[500] text-[1.5rem]">{item.title}</p>
                <i
                  className={`fa-solid ${
                    openIndex === index ? "fa-minus" : "fa-plus"
                  } text-primary transition-transform duration-300`}
                ></i>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-[500px] pb-4" : "max-h-0"
                }`}
              >
                <p className="text-[1rem]">{item.content}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
