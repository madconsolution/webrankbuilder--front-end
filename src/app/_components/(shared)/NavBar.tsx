"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import MegaMenu from "./MegaMenusss";

const productCategories = [
  {
    title: "Computer Case",
    items: [
      { name: "SHADOW", slug: "shadow" },
      { name: "SHADOW V2", slug: "shadowv2" },
      { name: "IRIS", slug: "iris" },
      { name: "NOVA", slug: "nova" },
      { name: "MAGNUS", slug: "magnus" },
      { name: "NEON", slug: "neon" },
      { name: "ALPHA", slug: "aplha" },
      { name: "SPECTRA", slug: "spectra" },
      { name: "ZION", slug: "zion" },
      { name: "PRISM", slug: "prism" },
      { name: "VIDRIO", slug: "vidrio" },
      { name: "CURVO", slug: "curvo" },
    ],
  },
  {
    title: "Cables",
    items: [
      { name: "4K HDMI 2.0", slug: "4hdmi_cables" },
      { name: "8K HDMI 2.1", slug: "4hdmi_cables" },
      { name: "4K 8K DP TO DP", slug: "4hdmi_cables" },
      { name: "4K Mini DP TO DP", slug: "4hdmi_cables" },
      { name: "Mini DP TO HDMI", slug: "4hdmi_cables" },
      { name: "PSU 6+2 Pin *2", slug: "4hdmi_cables" },
      { name: "PSU 6+2 Pin *3", slug: "4hdmi_cables" },
      { name: "CAT 6E Ethernet", slug: "4hdmi_cables" },
      { name: "PSU 12+4", slug: "4hdmi_cables" },
      { name: "PSU 24", slug: "4hdmi_cables" },
    
    ],
  },
  {
    title: "Adapter",
    items: [
      { name: "USB TYPE C TO HDMI", slug: "usb_c_hdmi" },
      { name: "DP To HDMI", slug: "usb_c_hdmi" },
      { name: "Mini DP To HDMI 4K", slug: "usb_c_hdmi" },
      { name: "Mini DP To DP", slug: "usb_c_hdmi" }


    ],
  },
  {
    title: "Connector",
    items: [
      { name: "RJ45 CAT7 UTP NETWORK", slug: "rj45_cat7" },

    ],
  },
  {
    title: "Case Fans",
    items: [
      { name: "LUNA", slug: "luna" },
      { name: "NINJA X", slug: "ninja_x" },
      { name: "NINJA X3", slug: "ninja_x" },
      { name: "SPARK", slug: "ninja_x" },
      { name: "SPARK X3", slug: "ninja_x" },
      { name: "ARCUS", slug: "ninja_x" }

    ],
  },
  {
    title: "Power Supply",
    items: [
      { name: "BX 600", slug: "bx600" },
      { name: "BX 700", slug: "bx700" },
      { name: "LX 700", slug: "bx700" },
    ],
  },
  {
    title: "Liquid Cooler",
    items: [
      { name: "LIQWI L120", slug: "liqwi_l120" },
      { name: "LIQWI L240", slug: "liqwi_l240" },
    ],
  },
  {
    title: "Air Coolers",
    items: [{ name: "AIR FREEZE 120", slug: "air_freeze_120" }],
  },
  {
    title: "Light Panels",
    items: [{ name: "SMART LIGHT PANEL", slug: "smart_light_panel" }],
  },
  {
    title: "Gaming Chair",
    items: [
      { name: "GC400-R", slug: "gc400r" },
      { name: "GS300-G", slug: "gs300g" },
    ],
  },
  {
    title: "Gaming Desk",
    items: [{ name: "GD400-R", slug: "gd400r" }],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [megaMenuVisible, setMegaMenuVisible] = useState(false);
  const [mobileMegaOpen, setMobileMegaOpen] = useState(false);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products", hasArrow: true },
    { name: "About Tortox", href: "/about" },
    { name: "Sales Network", href: "#" },
    { name: "Contact us", href: "/contact" },
  ];

  useEffect(() => {
    const handleClickOutside = () => {
      setMegaMenuVisible(false);
      setHoveredItem(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMegaMenuVisible(false);
    setHoveredItem(null);
    setMobileMegaOpen(false);
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-50 bg-black text-white transition-all backdrop-blur">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex justify-between items-center">
          <div className="hidden md:block">
            <Link href="/">
              <Image src="/logo/logo.png" alt="Logo" width={250} height={50} />
            </Link>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-6 relative">
            {navigation.map(({ name, href, hasArrow }) => {
              const isActive = pathname === href || pathname.startsWith(href);

              const handleMouseEnter = () => {
                if (hasArrow) {
                  if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
                  setHoveredItem(name);
                  setMegaMenuVisible(true);
                }
              };

              const handleMouseLeave = () => {
                if (hasArrow) {
                  hoverTimeout.current = setTimeout(() => {
                    setMegaMenuVisible(false);
                    setHoveredItem(null);
                  }, 300);
                }
              };

              return (
                <li
                  key={name}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={href}
                    className={`block px-4 py-2 rounded transition ${
                      isActive ? "bg-gray-200 text-black" : "hover:bg-gray-100 hover:text-black"
                    }`}
                  >
                    {name}
                  </Link>

                  {hasArrow && (
                    <MegaMenu
                      categories={productCategories}
                      hoveredItem={hoveredItem}
                      megaMenuVisible={megaMenuVisible}
                      currentItem={name}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile */}
        <div className="md:hidden mt-4">
          <div className="border-b border-white w-full flex justify-center">
            <div className="py-3">
              <Link href="/">
                <Image src="/logo/logo.png" alt="Logo" width={200} height={50} />
              </Link>
            </div>
          </div>

          <button onClick={toggleMenu} className="text-white text-2xl mt-4" aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Mobile overlay and menu */}
          <div
            className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
              isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onClick={closeMenu}
          />

          <div
            className={`fixed top-0 right-0 h-screen w-full bg-white text-[#333] shadow-lg p-6 z-50 transition-transform duration-500 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between border-b border-[#8C8C8C] p-4">
              <button onClick={closeMenu} className="text-2xl">
                <BiArrowBack />
              </button>
              <span className="text-sm">Back</span>
              <button onClick={closeMenu} className="text-2xl">
                <IoMdClose />
              </button>
            </div>

            <ul className="flex flex-col w-full mt-4">
              {navigation.map(({ name, href, hasArrow }) => {
                const isActive = pathname === href || pathname.startsWith(href);

                return (
                  <li key={name} className="border-b border-[#ccc]">
                    <div className="flex justify-between items-center px-6 py-4 text-lg font-medium">
                      <Link
                        href={href}
                        onClick={() => {
                          closeMenu();
                          if (!hasArrow) setMobileMegaOpen(false);
                        }}
                        className={`${isActive ? "text-blue-600" : ""}`}
                      >
                        {name}
                      </Link>

                      {hasArrow && (
                        <button onClick={() => setMobileMegaOpen(!mobileMegaOpen)}>
                          {mobileMegaOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
                        </button>
                      )}
                    </div>

                    {hasArrow && mobileMegaOpen && (
                      <div className="bg-[#f9f9f9] px-6 pb-4">
                        {productCategories.map((cat) => (
                          <div key={cat.title} className="mb-4">
                            <h4 className="font-semibold text-sm uppercase mb-2">{cat.title}</h4>
                            <ul className="space-y-1 pl-2">
                              {cat.items.map((item) => (
                                <li key={item.slug}>
                                  <Link
                                    href={`/products/${item.slug}`}
                                    onClick={closeMenu}
                                    className="text-sm text-blue-700 hover:underline"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
