
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-custom mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Footer Menu */}
        <div>
          <h3 className=" mb-2">FOOTER MENU</h3>
          <div className="grid grid-cols-2 gap-2 text-gray-400 text-sm">
            <p className="hover:text-white cursor-pointer">Tortox Shadow</p>
            <p className="hover:text-white cursor-pointer">Tortox Magnus</p>
            <p className="hover:text-white cursor-pointer">Tortox Neon</p>
            <p className="hover:text-white cursor-pointer">Ninja X3</p>
            <p className="hover:text-white cursor-pointer">BX 700</p>
            <p className="hover:text-white cursor-pointer">Liqli L240</p>
            <p className="hover:text-white cursor-pointer">Air Freeze 120</p>
            <p className="hover:text-white cursor-pointer">About Us</p>
            <p className="hover:text-white cursor-pointer">Blog</p>
            <p className="hover:text-white cursor-pointer">Contact Us</p>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className=" mb-2">NEWSLETTER SIGNUP</h3>
          <p className="text-gray-400 mb-4 text-sm">
            By subscribing to our mailing list you will always be updated with
            the latest news from us.
          </p>
          <div className="flex w-full">
            <input
              type="email"
              placeholder="your.address@email.com"
              className="p-2 w-full bg-white text-black border border-gray-400 rounded-l-md focus:outline-none"
            />
            <button className="bg-red-600 px-4 py-2 rounded-r-md text-white text-sm font-semibold hover:bg-red-700">
              JOIN US
            </button>
          </div>

          <p className="text-gray-400 mt-2 text-xs">We never spam!</p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className=" mb-2">GET IN TOUCH</h3>
          <p className="text-gray-400 text-sm">
            T (+971) <span className="font-semibold">56 502 0762</span>
          </p>
          <p className="text-gray-400 text-sm">Email: info@tortox.com</p>
          <p className="text-gray-400 mt-4 text-sm">
            Office No. 1007, Mohammad Al Mulla Tower <br /> Beside Ansar Mall,
            Al Nahda, <br /> Sharjah, U.A.E
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center px-6 text-sm">
 <div className="flex gap-4">
 <Link href="/">
          <Image src="/logo/logo.png" alt="Logo" width={200} height={50} />
        </Link>
        <p className="text-gray-400">
          &copy; 2025 All rights reserved by{" "}
          <span className="text-white font-semibold">Tortox</span>
        </p>
 </div>
        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <span className="text-gray-400">GET SOCIAL</span>
          <FaFacebookF className="text-white cursor-pointer hover:text-gray-400 text-lg" />
          <FaInstagram className="text-white cursor-pointer hover:text-gray-400 text-lg" />
        </div>
      </div>
    </footer>
  );
}
