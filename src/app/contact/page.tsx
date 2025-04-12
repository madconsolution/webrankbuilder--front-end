'use client';
import { FaMapMarkerAlt, FaPhoneAlt, FaMobileAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';
import BannerSection from '../reuseable/contact/banner/page';
import Image from 'next/image';

export default function ContactSection() {
  return (
    <div>
      {/* Contact Banner */}
      <BannerSection
        backgroundImage="/contact/banner-contact.jpg"
        title="Distributors"
        buttonText="Read More"
        buttonLink="/distributors"
      />

      {/* Contact Form */}
      <section className="w-full bg-[#f5f5f5] py-12 px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Form Section */}
          <div className="md:col-span-2 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-gray-600">FIRSTNAME</label>
                <input type="text" placeholder="Please enter your first name" className="w-full px-4 py-3 border rounded" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-600">LASTNAME</label>
                <input type="text" placeholder="Please enter your last name" className="w-full px-4 py-3 border rounded" />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-600">EMAIL</label>
              <input type="email" placeholder="Please enter your email address" className="w-full px-4 py-3 border rounded" />
            </div>

            <div>
              <label className="text-xs font-bold text-gray-600">SUBJECT</label>
              <input type="text" placeholder="Enter the subject message" className="w-full px-4 py-3 border rounded" />
            </div>

            <div>
              <label className="text-xs font-bold text-gray-600">MESSAGE</label>
              <textarea rows={6} placeholder="Your message" className="w-full px-4 py-3 border rounded resize-none" />
            </div>

            {/* reCAPTCHA */}
            <div>
              <p className="text-sm text-red-600">Verification expired. Check the checkbox again.</p>
              <div className="flex items-center space-x-3 mt-2">
                <input type="checkbox" className="w-6 h-6 border-2 border-gray-400" />
                <span className="text-sm">I&apos;m not a robot</span>
                <div>
                  <Image
                    src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                    alt="captcha"
                    width={64}
                    height={64}
                    className="h-16 w-auto"
                  />
                </div>
              </div>
            </div>

            <button className="mt-4 bg-[#d12128] hover:bg-[#b61c21] text-white px-6 py-2 rounded">
              Send
            </button>
          </div>

          {/* Contact Info */}
          <div className="text-black space-y-4">
            <h3 className="text-xl font-bold border-b pb-2">CONTACT INFO</h3>
            <div className="flex items-start space-x-3 text-sm">
              <FaMapMarkerAlt className="text-[#d12128] mt-1" />
              <p>
                <span className="font-semibold">Tortox</span><br />
                Office No. 1007,<br />
                Mohammad Al Mulla Tower,<br />
                Beside Ansar Mall, Al Nahda,<br />
                Sharjah, U.A.E
              </p>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <FaPhoneAlt className="text-[#d12128]" />
              <span>06 535 1776</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <FaMobileAlt className="text-[#d12128]" />
              <span>+971 56 502 0762</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <FaEnvelope className="text-[#d12128]" />
              <span>info@tortox.com</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <FaGlobe className="text-[#d12128]" />
              <span>www.tortox.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
