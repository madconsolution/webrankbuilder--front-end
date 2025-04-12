"use client";

import Link from "next/link";

interface MegaMenuProps {
  categories: {
    title: string;
    items: { name: string; slug: string }[];
  }[];
  hoveredItem: string | null;
  megaMenuVisible: boolean;
  currentItem: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function MegaMenu({
  categories,
  hoveredItem,
  megaMenuVisible,
  currentItem,
  onMouseEnter,
  onMouseLeave,
}: MegaMenuProps) {
  if (!megaMenuVisible || hoveredItem !== currentItem) return null;

  return (
    <div
      className="absolute top-full  w-[1400px] left-2/3 transform -translate-x-2/4
  bg-[#f9f9f9] text-[#333] py-10  z-50 shadow-lg border-t border-gray-200"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-6 ">
        {categories.map((category) => (
          <div key={category.title}>
            <h4 className="font-semibold text-sm uppercase tracking-wide border-b border-gray-300 pb-2 mb-3">
              {category.title}
            </h4>
            <ul className="space-y-2">
              {category.items.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/products/${item.slug}`}
                    className="text-sm hover:text-blue-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
