import BreadCrumb from "@/Components/BreadCrumb/BreadCrumb";
import CardServiceImage from "@/Components/CardService/CardServiceImage";
import CardServiceImageHalf from "@/Components/CardService/CardServiceImageHalf";
import CardServiceLottie from "@/Components/CardService/CardServiceLottie";
import ProjectShowcaseDigital from "@/Components/ProjectShowcaseDigital/ProjectShowcaseDigital";
import ServiceDetails from "@/Components/ServiceDetails/ServiceDetails";




import YourBrandJson from "@/../../public/OurServices/OfflineServices/Your Brand in Every Detail.json";
import CraftedJson from "@/../../public/OurServices/OfflineServices/crafted around your story.json";
import responsiveJson from "@/../../public/OurServices/WebServices/responsive.json";
import prototypeJson from "@/../../public/OurServices/WebServices/prototype.json";
import loadingJson from "@/../../public/OurServices/WebServices/loading.json";
import seoJson from "@/../../public/OurServices/WebServices/SEO.json";




import React from "react";
import ProjectShowcaseOffline from "@/Components/ProjectShowcaseOffline/ProjectShowcaseOffline";
import ServiceDetailsAi from "@/Components/ServiceDetailsAi/ServiceDetailsAi";
import ServiceDesc from "@/Components/ServiceDesc/ServiceDesc";

export default function ArtificialIntelligence() {
  const services = [
    {
      title: "agents & virtual assistants",
      items: [
        "      Customer Service AI Agents (24/7 support, ticket resolution, FAQ handling)",
        "Sales AI Agents (Lead qualification, appointment booking, product recommendations)",
        "Booking & Reservation Agents (Restaurant, salon, clinic, event bookings)",
        "WhatsApp/Messenger Business Agents (Multi-channel automated responses)",
        "Multilingual Support Agents (Arabic, English, French + more)",
        "Voice AI Agents (Phone call handling, IVR systems)",
      ],
    },

    {
      title: "content creation & copywriting",
      items: [
        "Social media content generation (captions, posts, stories - bilingual)",
        "Ad copy & ctas (meta, google, tiktok ad copy)",
        "Product descriptions (e-commerce catalog content)",
        "Blog posts & seo articles (long-form, keyword-optimized)",
        "Email marketing content (campaigns, newsletters, sequences)",
        "Website copy & landing pages (sales pages, about us, service descriptions)",
        "Translation & localization (ai-powered multilingual content)",
      ],
    },

    {
      title: "media production & editing",
      items: [
        "Ai video generation (text-to-video, product videos, explainers)",
        "Auto video editing (repurposing long videos into reels/shorts/tiktoks)",
        "Ai voiceovers (multiple languages & accents, text-to-speech)",
        "Automated subtitles & captions (multi-language, auto-synced)",
        "Ai image generation (product mockups, ads, backgrounds)",
        "Background removal & enhancement (product photography automation)",
        "Ai music & sound effects (royalty-free audio generation)",
      ],
    },
    {
      title: "marketing automation",
      items: [
        "Personalized email automation (behavior-triggered sequences)",
        "Customer segmentation & targeting (ai-powered audience building)",
        "Predictive lead scoring (identify high-value prospects)",
        "Ad campaign optimization (auto a/b testing, budget allocation)",
        "Social media scheduling & optimization (best posting times, Retargeting & funnel automation (cart abandonment, upsells, cross-sells)",
      
      ],
    },
    {
      title: "Ai for e-commerce & sales",
      items: [
      "Product recommendation engines (customers also bought, personalized suggestions)",
        "Dynamic pricing optimization (competitive pricing, demand-based pricing)",
        "Abandoned cart recovery (automated reminders, personalized offers)",
        "Visual search (image-based product discovery)",
        "Inventory forecasting (predict demand, optimize stock levels)",
        "Ai sales assistants (live chat sales support, upselling)",
        "Customer lifetime value (clv) prediction (identify vip customers)",
      
      ],
    },
    {
      title: "analytics & business intelligence",
      items: [
      "Sales forecasting & trend analysis (predict revenue, seasonal patterns)",
        "Customer behaviour analytics (journey mapping, churn prediction)",
        "Competitor intelligence (price monitoring, market analysis)",
        "Social media sentiment analysis (brand perception tracking)",
        "Real-time dashboard & reporting (automated business insights)",
        "Predictive analytics (future trends, demand forecasting)",
      
      ],
    },
    {
      title: "workflow & process automation (rpa)",
      items: [
      "Document processing & data extraction (invoices, receipts, contracts)",
        "Automated data entry (crm updates, spreadsheet population)",
        "Email & calendar management (smart inbox sorting, meeting scheduling)",
        "Crm automation & enrichment (lead data updates, duplicate removal)",
        "Invoice & payment processing (automated billing, reminders)",
        "Form & application processing (auto-review, approval workflows)",
      
      ],
    },
    {
      title: "Custom ai training & solutions",
//       Custom ai model development (industry-specific solutions)
// Retrieval augmented generation (rag) (ai trained on your company data)
// Custom chatbot training (brand voice, product knowledge)
// Ai integration & api development (connect ai to your existing systems)
// Ai strategy & consulting (roadmap, implementation planning)
// Ongoing ai model optimization (performance tuning, retraining)
      items: [
      "Custom ai model development (industry-specific solutions)",
        "Retrieval augmented generation (rag) (ai trained on your company data)",
        "Custom chatbot training (brand voice, product knowledge)",
        "Ai integration & api development (connect ai to your existing systems)",
        "Ai strategy & consulting (roadmap, implementation planning)",
        "Ongoing ai model optimization (performance tuning, retraining)",
      
      ],
    },
  ];
  return (
    <div>
      <BreadCrumb
        title1="Artificial intelligence (AI) Services"
        title2="Home"
        title3="Our Services"
        title4="Artificial Intelligence"
      />
      <div className="container mx-auto bg--500">
        <div className="mx-[rem]">
          {/* Text Section */}



          <ServiceDesc title={"Grant.cx ai solutions - Automate smarter, scale faster, grow confidently."} desc={`From intelligent agents that work 24/7 to custom ai models trained on your business data, we transform how you operate, market, and sell. Whether you need content at scale, process automation, or predictive insights, our ai solutions are built to fit smes, e-commerce brands, and businesses ready to compete globally.`} />

    
          {/* Cards Section */}

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3  gap-[2.5rem] px-[rem]">
            <div className="">
              <CardServiceLottie
                animationData={YourBrandJson}
                title="Your Brand, Seen Everywhere"
                description="We build consistency that makes your brand impossible to miss."
              />
            </div>
            <div className="">
              <CardServiceLottie
                animationData={YourBrandJson}
                title="Your Brand, Seen Everywhere"
                description="We build consistency that makes your brand impossible to miss."
              />
            </div>
            <div className="">
              <CardServiceLottie
                animationData={CraftedJson}
                title="Your Brand, Seen Everywhere"
                description="We build consistency that makes your brand impossible to miss."
              />
            </div>
            <div className="">
              <CardServiceImage
                defaultImage="/OurServices/WebServices/Default.jpg"
                hoverImage="/OurServices/WebServices/Default2.jpg"
                title="Your Brand, Brought to Life"
                description="Layering brand elements to form the final experience."
              />
            </div>
          </div>

          {/* Service Details Section */}
{/* 
          <ServiceDetails
            bgImage={"/OurServices/OfflineServices/bgImage.png"}
            services={services}
            topImage={"/OurServices/Ai/avatar.png"}
            aiPage={true}
          /> */}
          <ServiceDetailsAi
            bgImage={"/OurServices/OfflineServices/bgImage.png"}
            services={services}
            topImage={"/OurServices/Ai/avatar.png"}
          />
        </div>

        {/* Project Showcase Section */}
        <ProjectShowcaseOffline />
        {/* <ProjectShowcaseDigital/> */}
        {/* <ProjectShowcaseSoftwareServices /> */}
      </div>
    </div>
  );
}
