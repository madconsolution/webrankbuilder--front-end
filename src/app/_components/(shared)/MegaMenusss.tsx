"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const productCategories = [
  {
    title: "Computer Case",
    items: ["SHADOW", "SHADOW V2", "IRIS", "NOVA", "MAGNUS", "NEON", "ALPHA", "SPECTRA", "ZION", "PRISM", "VIDRIO", "CURVO"],
  },
  {
    title: "Cables",
    items: ["4K HDMI 2.0", "4K HDMI 2.1", "4K 8K DP TO DP", "4K MINI DP TO DP", "MINI DP TO HDMI", "CAT 6E ETHERNET", "PSU 6+2 PIN *2", "PSU 6+2 PIN *3", "PSU 1×24"],
  },
  {
    title: "Adapter",
    items: ["USB TYPE C TO HDMI", "DP TO HDMI", "MINI DP TO HDMI 4K", "MINI DP TO DP"],
  },
  {
    title: "Connector",
    items: ["RJ45 CAT7 UTP NETWORK"],
  },
  {
    title: "Case Fans",
    items: ["LUNA", "NINJA X", "NINJA X3", "SPARK", "SPARK X3", "ARCUS"],
  },
  {
    title: "Power Supply",
    items: ["BX 600", "BX 700", "LX 700"],
  },
  {
    title: "Liquid Cooler",
    items: ["LIQWI L120", "LIQWI L240"],
  },
  {
    title: "Air Coolers",
    items: ["AIR FREEZE 120"],
  },
  {
    title: "Light Panels",
    items: ["SMART LIGHT PANEL"],
  },
  {
    title: "Gaming Chair",
    items: ["GC400-R", "GC400-W", "GC300-G", "GS300-R", "GS300-G"],
  },
  {
    title: "Gaming Desk",
    items: ["GD400-R", "GD400-W"],
  },
];

const NavbarWithMegaMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !(menuRef.current as any).contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="bg-gray-800 text-white relative">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-red-500">TORTOX</div>
        <ul className="flex gap-6">
          <li className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="uppercase font-semibold text-sm hover:text-red-500"
            >
              Products
            </button>
          </li>
          <li>
            <Link href="#" className="uppercase font-semibold text-sm hover:text-red-500">
              About Tortox
            </Link>
          </li>
          <li>
            <Link href="#" className="uppercase font-semibold text-sm hover:text-red-500">
              Sales Network
            </Link>
          </li>
          <li>
            <Link href="#" className="uppercase font-semibold text-sm hover:text-red-500">
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="text-sm">
          <input
            type="text"
            placeholder="Search"
            className="px-2 py-1 text-black rounded-md"
          />
        </div>
      </nav>

      {/* Mega Menu */}
      {menuOpen && (
        <div ref={menuRef} className="absolute left-1/2 -translate-x-1/2 w-full max-w-6xl mx-auto mt-2 bg-gray-100 text-black py-6 px-6 shadow-lg grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 z-40">
          {productCategories.map((category, i) => (
            <div key={i}>
              <h4 className="font-bold text-sm mb-3 text-gray-900">{category.title}</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                {category.items.map((item, idx) => (
                  <li key={idx}>
                    <Link href="#" className="hover:text-red-500">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default NavbarWithMegaMenu;
