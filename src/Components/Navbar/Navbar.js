// Navbar.js

"use client";

import "@/Components/Navbar/Navbar.css";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// const navItems = [
//   { label: "HOME", href: "/" },
//   { label: "ABOUT US", href: "/about" },
//   {
//     label: "OUR SERVICES",
//     href: "/services",
//     hasDropdown: true,
//     dropdown: [
//       {
//         label: "Web Design & Software Development",
//         href: "/services/softwareServices",
//       },
//       { label: "Digital Marketing", href: "/services/digitalMarketing" },
//       { label: "Offline Marketing", href: "/services/offlineMarketing" },
//       { label: "Event Management", href: "/services/eventManagement" },
//       { label: "Media Production", href: "/services/mediaProduction" },
//       { label: "Artificial Intelligence (AI)", href: "/services/ai" },
//     ],
//   },
//   { label: "PORTFOLIO", href: "/portfolio" },
//   { label: "CONTACT US", href: "/contactUs" },
// ];

export default function Navbar({navItems = [], logo}) {


  
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeDropdownMobile, setActiveDropdownMobile] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (itemLabel) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(itemLabel);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 600);
  };

  const toggleMobileDropdown = (itemLabel) => {
    setActiveDropdownMobile(
      activeDropdownMobile === itemLabel ? null : itemLabel
    );
  };

  return (
    <nav
      className={`navParent left-0 right-0 z-50  transition-all duration-800
         ${
           isScrolled
           //  ? "fixed top-0  backdrop-blur-md shadow-lg"
           //  : "relative bg-transparent"
         }
      `}
    >
      <div className="max-w-[100%] mx-auto mt-2 px-4 sm:px-6 lg:px-[1.063rem] py-[0.563rem] font-bold gradient-border">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={logo?.url || "/logo.png"}
              alt={logo?.alt || "Logo"}
              width={180}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation - Pill shaped buttons */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item?.dropdown?.length > 0 && handleMouseEnter(item.label)
                }
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className="navbarLinks inline-flex items-center gap-[0.625rem] px-[0.938rem] py-[.5rem] rounded-[1.875rem] border border-[0.125rem] border-[#30424A] text-[#A3A3A3] hover:text-primary transition-all duration-300 backdrop-blur-sm"
                >
                  {item.label}
                  {item?.dropdown?.length > 0 && (
                    <svg
                      className={`w-3.5 h-3.5  transition-transform duration-300 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item?.dropdown?.length > 0 && activeDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 mt-2 w-72 bg-[#0D1B2A]/95 backdrop-blur-md rounded-2xl border border-[#D4A04A]/20 shadow-xl overflow-hidden z-10 animate-fade-in"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.dropdown.map((subItem, index) => (
                      <div
                        key={subItem.label}
                        className="animate-slide-in"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <Link
                          href={subItem.href}
                          className="block px-5 py-3 text-sm text-white/80 hover:text-[#D4A04A] hover:bg-[#D4A04A]/10 transition-all duration-300 border-b border-white/5 last:border-0"
                        >
                          {subItem.label}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#A3A3A3] border-[0.125rem] border-[#30424A] rounded-full hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden  mt-2 bg-[#0D1B2A]/95 backdrop-blur-md rounded-2xl border border-[#D4A04A]/20 shadow-xl overflow-hidden z-10 animate-fade-in ">
          <div className="px-4 py-6 space-y-3">
            {navItems.map((item, index) => (
              <div
                key={item.label}
                className="animate-slide-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Mobile Nav Item */}
                {item?.dropdown?.length > 0 ? (
                  <button
                    onClick={() => toggleMobileDropdown(item.label)}
                    className="w-full flex items-center justify-between py-3 px-4 text-[#A3A3A3] hover:text-[#D4A04A] transition-colors border-[0.125rem] border-[#30424A] rounded-full"
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        activeDropdownMobile === item.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-3 px-4 text-[#A3A3A3] hover:text-[#D4A04A] transition-colors border-[0.125rem] border-[#30424A] rounded-full"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Mobile Dropdown */}
                {item.dropdown && activeDropdownMobile === item.label && (
                  <div className="mt-2 ml-4 space-y-2 animate-fade-in">
                    {item.dropdown.map((subItem, subIndex) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block py-2 px-4 text-sm text-white/60 hover:text-[#D4A04A] hover:bg-[#D4A04A]/10 transition-all duration-300 rounded-lg border border-[#30424A]/30"
                        onClick={() => setIsOpen(false)}
                        style={{ animationDelay: `${subIndex * 50}ms` }}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
