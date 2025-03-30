"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products", hasArrow: true },
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
              const isActive = pathname.startsWith(href);
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
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
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
          {/** Backdrop Overlay */}
          <div
            className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
              isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onClick={closeMenu}
          />

          {/** Mobile Menu */}
          <div
            className={`fixed top-0 right-0 h-[100vh] w-[100%] bg-white text-[#8C8C8C] border-l shadow-lg flex flex-col space-y-4 p-6
              transition-transform duration-600 ease-in-out transform z-50 ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              }`}
          >
            {/** Close Button */}
            <div className="flex items-center justify-between border-b border-t border-[#8C8C8C] p-4">
              <button onClick={closeMenu} className="text-2xl">
                <BiArrowBack />
              </button>
              <span className="text-sm">Back</span>
              <button onClick={closeMenu} className="text-2xl">
                <IoMdClose />
              </button>
            </div>

            {/* Navigation Links */}
            <ul className="flex flex-col w-full mt-2">
              {navigation.map(({ name, href, hasArrow }) => (
                <li key={name} className="border-b border-[#8C8C8C]">
                  <a
                    href={href}
                    onClick={closeMenu}
                    className="flex justify-between items-center px-6 py-4 w-full text-left text-lg font-medium"
                  >
                    {name}
                    <span>{hasArrow && <MdKeyboardArrowRight className="text-2xl" />}</span>
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
