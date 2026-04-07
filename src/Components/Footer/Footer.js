// Footer.js
import React from "react";
import "@/Components/Footer/Footer.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  // Extract service dropdown items from navItems
  // const servicesNav = navItems.find((item) => item.dropdown?.length > 0);
  // const serviceLinks = servicesNav?.dropdown ?? [];

  // Sitemap links (non-dropdown items)
  // const sitemapLinks = navItems.filter((item) => !item.dropdown?.length && item.href !== "/");

  const sitemapLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ]

  const serviceLinks=[
    { label: "SEO", href: "/services/seo" },
    { label: "PPC", href: "/services/ppc" },
    { label: "Content Marketing", href: "/services/content-marketing" },
  ]
const offices = [
  { name: "New York Office", phone: "+1 212-555-1234", email: " " },
  { name: "Los Angeles Office", phone: "+1 323-555-1234", email: " " },
  { name: "Chicago Office", phone: "+1 312-555-1234", email: " " }
];
const socialLinks = {
  instagram: "https://www.instagram.com/racingline.marketing/",
  linkedin: "https://www.linkedin.com/company/racingline-marketing-agency/",
  facebook: "https://www.facebook.com/RacingLineMarketingAgency"
};

  return (


    <>


      <div className="footerBg2 grid grid-cols-1 md:grid-cols-2">


        <div className="">
          <p className="text-[2rem] font-[600] text-white">
            Ready to Accelerate Your Brand’s Growth through our
            <span className="PlayFair italic font-[500]">Racing Line </span>
            ?
          </p>
        </div>
        <div className="py-5 flex justify-center items-center">
          <button className="glass glow-border bg-[#002B4D] hover:!bg-[#002B4D] rounded-[3.125rem] py-[1rem] px-[3.125rem] text-[1.5rem] text-white transition-colors duration-500">Request A Quotation</button>
        </div>
      </div>


      <footer className="footerBg   text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
            <Image
              src="/logo.png"
              alt="Logo"
              width={343}
              height={100}
              className="mb-4"
            />
            <p className="text-base text-center md:text-left md:text-[1rem] leading-relaxed opacity-90">
              We are a leading digital marketing agency dedicated to helping businesses thrive in the online world. With a team of experts and a passion for innovation, we provide comprehensive solutions that drive results and elevate brands to new heights.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
            <div className="inline-flex flex-col mb-4">
              <h2 className="text-xl font-semibold mb-2">Sitemap</h2>
              <span className="h-[2px] w-full bg-primary"></span>
            </div>

            <ul className="flex flex-col gap-3">
              {sitemapLinks.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="cursor-pointer  transition-colors">
                    <i className="fa-solid fa-angle-right text-primary mr-2"></i>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
            <div className="inline-flex flex-col mb-4">
              <h2 className="text-xl font-semibold mb-2">Services</h2>
              <span className="h-[2px] w-full bg-primary"></span>
            </div>

            <ul className="flex flex-col gap-3">
              {serviceLinks.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="cursor-pointer  transition-colors">
                    <i className="fa-solid fa-angle-right text-primary mr-2"></i>

                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
            <div className="inline-flex flex-col mb-4">
              <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
              <span className="h-[2px] w-full bg-primary"></span>
            </div>

            <ul className="flex flex-col text-center md:text-left gap-3">
              {offices.map((office, i) => (
                <li key={i} className="cursor-pointer  transition-colors">
                  <i className="fa-solid fa-mobile-screen text-primary mr-2"></i>
                  {office.name} : {office.phone}
                </li>
              ))}
              <li className="cursor-pointer  transition-colors">
                <i className="fa-solid fa-envelope text-primary mr-2"></i>
                info@grant.cx.com
              </li>
              {offices[0]?.email && (
                <li className="cursor-pointer  transition-colors">
                  <i className="fa-solid fa-envelope text-primary mr-2"></i>
                  info@grant.cx.com
                </li>
              )}
              {/* {offices[0]?.email && (
                <li className="cursor-pointer  transition-colors">
                  <i className="fa-solid fa-envelope text-primary mr-2"></i>
                  {offices[0].email}
                </li>
              )} */}
            </ul>

            <div className="flex mt-2">
              {socialLinks.instagram && (
                <Link href={socialLinks.instagram} target="_blank" className="text-primary mr-4 cursor-pointer hover:text-secondary transition-colors rounded-[1rem] border border-[#CA93438A] w-10 h-10 flex items-center justify-center">
                  <i className="fa-brands fa-instagram"></i>
                </Link>
              )}
              {socialLinks.linkedin && (
                <Link href={socialLinks.linkedin} target="_blank" className="text-primary mr-4 cursor-pointer hover:text-secondary transition-colors rounded-[1rem] border border-[#CA93438A] w-10 h-10 flex items-center justify-center">
                  <i className="fa-brands fa-linkedin-in"></i>
                </Link>
              )}
              {socialLinks.facebook && (
                <Link href={socialLinks.facebook} target="_blank" className="text-primary mr-4 cursor-pointer hover:text-secondary transition-colors rounded-[1rem] border border-[#CA93438A] w-10 h-10 flex items-center justify-center">
                  <i className="fa-brands fa-facebook"></i>
                </Link>
              )}
              {!socialLinks.instagram && !socialLinks.linkedin && !socialLinks.facebook && (
                <>
                  <div className="text-primary mr-4 cursor-pointer hover:text-secondary transition-colors rounded-[1rem] border border-[#CA93438A] w-10 h-10 flex items-center justify-center">
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                  <div className="text-primary mr-4 cursor-pointer hover:text-secondary transition-colors rounded-[1rem] border border-[#CA93438A] w-10 h-10 flex items-center justify-center">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </div>
                  <div className="text-primary mr-4 cursor-pointer hover:text-secondary transition-colors rounded-[1rem] border border-[#CA93438A] w-10 h-10 flex items-center justify-center">
                    <i className="fa-brands fa-facebook"></i>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="col-span-1 sm:col-span-2 md:col-span-4 text-center mt-4 pt-4 border-t border-gray-700">
          <p className="text-sm opacity-90">

            &copy; {new Date().getFullYear()} Racing Line Marketing Agency. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
