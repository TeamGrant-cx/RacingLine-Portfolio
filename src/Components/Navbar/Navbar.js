"use client";

import "@/Components/Navbar/Navbar.css";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeDropdownMobile, setActiveDropdownMobile] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (label) => {
    if (timeoutRef.current)
      clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 600);
  };
  const toggleMobileDropdown = (label) =>
    setActiveDropdownMobile(activeDropdownMobile === label ? null : label);

  const isActive = (href) => {
    const h = href === "" ? "/" : href;
    const p = pathname === "" ? "/" : pathname;
    if (h === "/") return p === "/";
    return p === h || p.startsWith(h + "/");
  };



  const navItems = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Our Services",
      href: "/services",
      dropdown: [
        { label: "Web Development", href: "/services/digitalMarketingPage" }, 
        { label: "Digital Marketing Service", href: "/services/digitalMarketingPage" }, 
        { label: "Offline Marketing Service", href: "/services/digitalMarketingPage" }, 
        { label: "Online Marketing Service", href: "/services/digitalMarketingPage" }, 
        { label: "Media Marketing Service", href: "/services/digitalMarketingPage" }, 
        { label: "Artificial Intelligence Service", href: "/services/digitalMarketingPage" }, 

       
      ]
    },
    {
      label: "Portfolio",
      href: "/portfolio"
    },
    {
      label: "Contact",
      href: "/contactUs"
    }
  ];

  return(
    <nav className = {`navParent left-0 right-0 z-50 transition-all duration-800`} >
    <div className="max-w-[100%] mx-auto mt-2 px-4 sm:px-6 lg:px-[1.063rem] py-[0.563rem] font-bold gradient-border">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={ "/logo.png"}
            alt={ "Logo"}
            width={180} height={40}
            className="object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <div
              key={item.label}
              style={{ position: "relative" }}
              onMouseEnter={() => item?.dropdown?.length > 0 && handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={item.href}
                className={`navbarLinks inline-flex items-center gap-[0.625rem] px-[0.938rem] py-[.5rem] rounded-[1.875rem] border-2 transition-all duration-100 backdrop-blur-sm uppercase
                    ${isActive(item.href)
                    ? "border-[#77BD74] text-white"
                    : "border-transparent text-[#A3A3A3] hover:border-[#77BD74] hover:text-white"
                  }`}
              >
                {item.label}
                {item?.dropdown?.length > 0 && (
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>

              {/* ── Dropdown ── */}
              {item?.dropdown?.length > 0 && activeDropdown === item.label && (
                <div
                  className="glass"
                  style={{
                    position: "absolute",
                    top: "calc(100% + 10px)",
                    left: 0,
                    zIndex: 100,
                    width: 293,
                    border: "3px solid rgba(119, 189, 116, 1)",
                    borderRadius: "20px",
                    backdropFilter: "brightness(1.05) blur(8px) saturate(1.4) url(#frosted)",
                    WebkitBackdropFilter: "brightness(1.05) blur(8px) saturate(1.4) url(#frosted)",
                  }}
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div style={{ padding: "8px 15px", position: "relative", zIndex: 1 }}>
                    {item.dropdown.map((subItem, index) => (
                      <div key={subItem.label}>
                        <Link
                          href={subItem.href}
                          style={{
                            display: "block",
                            padding: "13px 20px",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                            color: isActive(subItem.href) ? "#fff" : "rgba(255,255,255,0.85)",
                            textDecoration: "none",
                            transition: "color 0.15s, background 0.15s, padding-left 0.15s",
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.color = "#fff";
                            e.currentTarget.style.background = "rgba(119,189,116,0.12)";
                            e.currentTarget.style.paddingLeft = "26px";
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.color = isActive(subItem.href) ? "#fff" : "rgba(255,255,255,0.85)";
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.paddingLeft = "20px";
                          }}
                        >
                          {subItem.label}
                        </Link>
                        {index < item.dropdown.length - 1 && (
                          <div style={{
                            height: "1px",
                            margin: "0 5%",
                            background: "white",
                          }} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile button */}
        <button
          className="lg:hidden p-2 text-[#A3A3A3] border border-transparent rounded-full transition-colors hover:border-[#77BD74]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>
    </div>

      {/* Mobile menu */ }
      { isOpen && (
      <div
        className="lg:hidden mt-2 rounded-2xl overflow-hidden z-10 animate-fade-in ios-glass"
      >
        <div className="px-4 py-6 space-y-3">
          {navItems.map((item, index) => (
            <div key={item.label} className="animate-slide-in" style={{ animationDelay: `${index * 100}ms` }}>
              {item?.dropdown?.length > 0 ? (
                <button
                  onClick={() => toggleMobileDropdown(item.label)}
                  className={`w-full flex items-center justify-between py-3 px-4 transition-colors border-2 rounded-full
                      ${isActive(item.href) ? "border-[#77BD74] text-white" : "border-transparent text-[#A3A3A3] hover:border-[#77BD74] hover:text-[#D4A04A]"}`}
                >
                  <span>{item.label}</span>
                  <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdownMobile === item.label ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={`block py-3 px-4 transition-colors border-2 rounded-full
                      ${isActive(item.href) ? "border-[#77BD74] text-white" : "border-transparent text-[#A3A3A3] hover:border-[#77BD74] hover:text-[#D4A04A]"}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )}
              {item.dropdown && activeDropdownMobile === item.label && (
                <div className="mt-2 ml-4 space-y-2 animate-fade-in">
                  {item.dropdown.map((subItem, subIndex) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href}
                      className={`block py-2 px-4 text-sm transition-all duration-300 rounded-lg border
                          ${isActive(subItem.href) ? "border-[#77BD74]/50 text-white bg-[#77BD74]/10" : "border-transparent text-white/60 hover:text-[#D4A04A] hover:border-[#77BD74]/50"}`}
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
    </nav >
  );
}