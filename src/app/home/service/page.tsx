'use client';

import { FaFacebookF } from "react-icons/fa";

const services = [
  {
    title: "Computer Modding",
    description:
      "Computer modding being implemented via themes, colors, or just simple modifications like a side panel window to show off the cool computer hardware inside.",
  },
  {
    title: "Network Security",
    description:
      "Product incorporate many advanced heat transfer technology with fans for exhausting hot air and cools the components inside the cabinets.",
  },
  {
    title: "Software Development",
    description:
      "We build computers to make your business run smooth, to photo-editing PC’s, Gaming Computers and even your most high end Enthusiasts systems.",
  },
  {
    title: "IT Consultation",
    description:
      "Tortox computer cases, fans, power supply, accessories, and cables carry warranty from the date of purchase for parts and labor.",
  },
];

export default function ServiceSection() {
  return (
    <div className="bg-[#F5F5F5] py-10 px-4">
      <h1 className="text-[#CC0000] text-center font-semibold text-2xl mb-6">Our Services</h1>
      <div className="text-center flex flex-wrap items-center justify-center gap-0.5 max-w-7xl mx-auto ">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] p-4 w-full sm:w-[300px] h-auto transition-transform duration-500 ease-in-out transform hover:scale-[1.03]  hover:border-gray-200 hover:border-2 group rounded-lg"
          >
            <h1 className="text-lg font-semibold mb-2">{service.title}</h1>
            <span className="bg-white text-gray-300 rounded-full p-3 flex items-center justify-center transition-colors duration-500 ease-in-out  group-hover:text-[#CC0000] mx-auto w-12 h-12">
              <FaFacebookF className="text-xl transition-transform duration-500 ease-in-out transform group-hover:scale-110" />
            </span>
            <p className="text-sm mt-3 text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
