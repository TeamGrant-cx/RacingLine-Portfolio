import Link from "next/link";

const services = [
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    items: [
      "Social media management",
      "Influencer marketing",
      "Paid Ads",
      "SEO/SEM",
      "Content Marketing",
    ],
  },
  {
    title: "Web & App Development",
    slug: "web-app-development",
    items: [
      "UI/UX Design",
      "Web Development & Maintenance",
      "Mobile & Web Apps",
      "Domain & Hosting Services",
      "Cybersecurity",
      "Custom Software Development",
    ],
  },
  {
    title: "Media Production",
    slug: "media-production",
    items: [
      "Videography",
      "Photography",
      "Post-production",
      "Motion Graphics",
      "Executive Production for Foreign Crews",
    ],
  },
  {
    title: "Artificial Intelligence (AI)",
    slug: "ai",
    items: [
      "Marketing & Workflow Automation",
      "Sales Funnel Automation",
      "Retrieval Augmented Generation (RAG)",
      "Custom AI Training",
      "AI Agents",
      "AI Consulting & Strategy",
    ],
  },
  {
    title: "Branding & Design",
    slug: "branding-design",
    items: [
      "Logo Design",
      "Brand Identity",
      "Brand Guidelines",
      "Graphic & 3D Design",
      "Packaging Design",
      "Stationery & Collateral Design",
    ],
  },
  {
    title: "Events & Activations",
    slug: "events-activations",
    items: [
      "Full Event Management",
      "AV Production & LED Screens",
      "Booth Design & Production/Installation",
      "Signage",
      "Catering",
      "Registration & Ushering",
    ],
  },
  {
    title: "Print & Promotional",
    slug: "print-promotional",
    items: [
      "Printing Services",
      "Customized Giveaways & Trophies",
      "Corporate Gifting",
      "Branded Merchandise",
      "Large-Format Printing",
      "Packaging & Fulfillment",
    ],
  },
  {
    title: "E-Commerce Solutions",
    slug: "e-commerce",
    items: [
      "Store Setup & Management",
      "Product Photography & Cataloging",
      "Marketplace Integration",
      "E-Commerce Ads",
      "Payment Gateways",
      "Inventory & Order Management",
    ],
  },
];

function ArrowIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="1.5" />
      <path
        d="M9 15l6-6M9.5 9h5.5v5.5"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServicesGridFigma({ display = true }) {
  return (
    <section className="w-full py-[50px] px-4 md:px-8 lg:px-[60px] xl:px-[150px]">
      {display && (
        <div className="flex flex-col items-center gap-3 mb-10 md:mb-16 lg:mb-[88px]">
          <h2 className="text-center text-white text-[24px] md:text-[32px] lg:text-[40px] font-semibold capitalize leading-tight max-w-[673px]">
            Explore Our{" "}
            <span className="PlayFair italic font-medium normal-case">
              Full Services
            </span>{" "}
            That Drive Your Brand&rsquo;s Performance
          </h2>
          <div
            aria-hidden
            className="h-[3px] w-[140px] rounded-[2px] bg-white"
            style={{
              boxShadow:
                "0 0 6px rgba(110,204,247,1), 0 0 20px rgba(0,143,255,0.7), 0 0 50px rgba(0,142,255,0.4)",
            }}
          />
        </div>
      )}

      <div
        className="relative mx-auto rounded-[30px] p-5 md:p-8 lg:p-10"
        style={{
          border: "2px solid #6eccf7",
          boxShadow:
            "0 0 2.5px #008eff, 0 0 7.5px #008eff, 0 0 14px rgba(0,142,255,0.8), 0 0 32px rgba(0,142,255,0.55), 0 0 64px rgba(0,142,255,0.35), inset 0 0 24px rgba(0,142,255,0.12)",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <article
              key={service.slug}
              className="flex flex-col rounded-[20px] bg-[#f4f6f8] px-6 py-5 md:px-[30px] md:py-5 min-h-[380px] transition-transform duration-300 hover:-translate-y-1"
            >
              <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold capitalize text-[#002b4d] mb-5 leading-tight">
                {service.title}
              </h3>

              <ul className="flex-1 flex flex-col">
                {service.items.map((item, i) => (
                  <li key={item} className="flex flex-col">
                    <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#5c6770] py-[6px]">
                      {item}
                    </p>
                    {i < service.items.length - 1 && (
                      <span
                        aria-hidden
                        className="block h-px w-full bg-[#dce0e5]"
                      />
                    )}
                  </li>
                ))}
              </ul>

              <div className="flex justify-end mt-5">
                <Link
                  href={`/services/${service.slug}`}
                  className="group inline-flex items-center gap-2 rounded-full px-4 py-2 bg-[var(--primary)] text-white text-[15px] md:text-[16px] font-semibold capitalize transition-all duration-300 hover:shadow-[0_0_20px_rgba(119,189,116,0.6)]"
                >
                  See More
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowIcon />
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
