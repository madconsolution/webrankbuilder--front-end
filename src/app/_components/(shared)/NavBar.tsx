"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigation = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Products",
      href: "/products",
    },
    {
      name: "About Tortox",
      href: "/about-tortox",
    },
    {
      name: "Sales Network",
      href: "/sales-network",
    },
    {
      name: "Contact us",
      href: "/contact-us",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black transition-all backdrop-blur">
      <div className=" text-white p-4 max-w-custom mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Link href="/">
              <Image
                src="/logo/logo.png"
                alt="Logo"
                width={250}
                height={50} 
              />
            </Link>
          </div>

          {/* mobile menu  */}
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

          {/* Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col space-y-4 mt-4">
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
        )}
      </div>
    </nav>
  );
}
