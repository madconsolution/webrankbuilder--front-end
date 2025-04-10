"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

// Types
interface ProductItem {
  name: string;
  slug: string;
}

interface ProductCategory {
  title: string;
  items: ProductItem[];
}

interface NavItem {
  name: string;
  href: string;
  hasArrow?: boolean;
}

const productCategories: ProductCategory[] = [
  { title: "Computer Case", items: [ { name: "SHADOW", slug: "shadow" }, { name: "IRIS", slug: "iris" }, { name: "NOVA", slug: "nova" } ] },
  { title: "Cables", items: [ { name: "4K HDMI 2.0", slug: "4hdmi_cables" }, { name: "CAT 6E ETHERNET", slug: "cat6e_ethernet" } ] },
  { title: "Adapter", items: [ { name: "USB TYPE C TO HDMI", slug: "usb_c_hdmi" } ] },
  { title: "Connector", items: [ { name: "RJ45 CAT7 UTP NETWORK", slug: "rj45_cat7" } ] },
  { title: "Case Fans", items: [ { name: "LUNA", slug: "luna" }, { name: "NINJA X", slug: "ninja_x" } ] },
  { title: "Power Supply", items: [ { name: "BX 600", slug: "bx600" }, { name: "BX 700", slug: "bx700" } ] },
  { title: "Liquid Cooler", items: [ { name: "LIQWI L120", slug: "liqwi_l120" }, { name: "LIQWI L240", slug: "liqwi_l240" } ] },
  { title: "Air Coolers", items: [ { name: "AIR FREEZE 120", slug: "air_freeze_120" } ] },
  { title: "Light Panels", items: [ { name: "SMART LIGHT PANEL", slug: "smart_light_panel" } ] },
  { title: "Gaming Chair", items: [ { name: "GC400-R", slug: "gc400r" }, { name: "GS300-G", slug: "gs300g" } ] },
  { title: "Gaming Desk", items: [ { name: "GD400-R", slug: "gd400r" } ] },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [megaMenuVisible, setMegaMenuVisible] = useState<boolean>(false);
  const megaRef = useRef<HTMLDivElement | null>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const navigation: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "Products", href: "#", hasArrow: true },
    { name: "About Tortox", href: "/about" },
    { name: "Sales Network", href: "#" },
    { name: "Contact us", href: "#" },
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaMenuVisible(false);
        setHoveredItem(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMegaMenuVisible(false);
    setHoveredItem(null);
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

          <ul className="hidden md:flex space-x-6 relative">
            {navigation.map(({ name, href, hasArrow }) => {
              const isActive = pathname.startsWith(href);
              const showMega = megaMenuVisible && hoveredItem === name;

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

                  {hasArrow && showMega && (
                    <div
                      ref={megaRef}
                      className="absolute left-0 top-full w-screen max-w-6xl mt-2 bg-white text-black py-6 px-6 shadow-lg grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 z-50 animate-fade-in"
                      onMouseEnter={() => {
                        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
                        setHoveredItem(name);
                        setMegaMenuVisible(true);
                      }}
                      onMouseLeave={handleMouseLeave}
                    >
                      {productCategories.map((category, i) => (
                        <div key={i}>
                          <h4 className="font-bold text-sm mb-3 text-gray-900">{category.title}</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            {category.items.map((item, idx) => (
                              <li key={idx}>
                                <Link href={`/products/${item.slug}`} className="hover:text-red-500">
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

        {/* Mobile */}
        <div className="md:hidden mt-4">
          <div className="border-b border-white w-full flex justify-center">
            <div className="py-3">
              <Link href="/">
                <Image src="/logo/logo.png" alt="Logo" width={200} height={50} />
              </Link>
            </div>
          </div>

          <button
            onClick={toggleMenu}
            className="text-white text-2xl mt-4"
            aria-label="Toggle navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div
            className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
              isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onClick={closeMenu}
          />

          <div
            className={`fixed top-0 right-0 h-screen w-full bg-white text-[#8C8C8C] shadow-lg p-6 z-50 transition-transform duration-500 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between border-b border-t border-[#8C8C8C] p-4">
              <button onClick={closeMenu} className="text-2xl">
                <BiArrowBack />
              </button>
              <span className="text-sm">Back</span>
              <button onClick={closeMenu} className="text-2xl">
                <IoMdClose />
              </button>
            </div>

            <ul className="flex flex-col w-full mt-4">
              {navigation.map(({ name, href, hasArrow }) => (
                <li key={name} className="border-b border-[#8C8C8C]">
                  <a
                    href={href}
                    onClick={closeMenu}
                    className="flex justify-between items-center px-6 py-4 text-lg font-medium"
                  >
                    {name}
                    {hasArrow && <MdKeyboardArrowRight className="text-2xl" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
