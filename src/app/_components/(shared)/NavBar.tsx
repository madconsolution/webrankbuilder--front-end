"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Tortox", href: "#" },
    { name: "Sales Network", href: "#" },
    { name: "Contact us", href: "#" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black transition-all backdrop-blur">
      <div className="text-white p-4 max-w-custom mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold hidden md:block">
            <Link href="/">
              <Image src="/logo/logo.png" alt="Logo" width={250} height={50} />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            {navigation?.map(({ name, href }) => {
              const isActive = pathname === href;
              return (
                <li key={name}>
                  <Link
                    href={href}
                    className={`block px-4 py-2 rounded transition ${
                      isActive
                        ? "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          {/* Logo Centered */}
          <div className="border-b border-[#fff] w-full flex justify-center border-t">
            <div className="py-3">
              <Link href="/">
                <Image
                  src="/logo/logo.png"
                  alt="Logo"
                  width={200}
                  height={50}
                />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button Below Logo */}
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none text-2xl pb-2 mt-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <ul className="flex flex-col space-y-4 mt-4 text-center">
              {navigation.map(({ name, href }) => {
                const isActive = pathname === href;
                return (
                  <li key={name}>
                    <Link
                      href={href}
                      onClick={closeMenu}
                      className={`block px-4 py-2 rounded transition font-medium ${
                        isActive
                          ? "bg-gray-200 dark:bg-gray-700 text-black dark:text-white font-bold underline"
                          : "hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
