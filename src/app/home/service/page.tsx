'use client';

import { FaTools, FaShieldAlt, FaLaptopCode, FaUserTie } from "react-icons/fa";

const services = [
  {
    title: "Computer Modding",
    description:
      "Computer modding being implemented via themes, colors, or just simple modifications like a side panel window to show off the cool computer hardware inside.",
    icon: <FaTools />,
  },
  {
    title: "Network Security",
    description:
      "Product incorporate many advanced heat transfer technology with fans for exhausting hot air and cools the components inside the cabinets.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Software Development",
    description:
      "We build computers to make your business run smooth, to photo-editing PC’s, Gaming Computers and even your most high end Enthusiasts systems.",
    icon: <FaLaptopCode />,
  },
  {
    title: "IT Consultation",
    description:
      "Tortox computer cases, fans, power supply, accessories, and cables carry warranty from the date of purchase for parts and labor.",
    icon: <FaUserTie />,
  },
];

export default function ServiceSection() {
  return (
    <div className="bg-[#F5F5F5] py-10 px-4">
      <h6 className="text-[#CC0000] text-center font-semibold text-3xl mb-6">Our Services</h6>
      <div className="text-center flex flex-wrap items-center justify-center gap-0.5 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] p-4 w-full md:w-[300px] h-[300px] transition-transform duration-500 ease-in-out transform hover:scale-[1.03] hover:border-gray-200 hover:border-2 group "
          >
            <h6 className="text-lg font-semibold mb-2">{service.title}</h6>
            <span className="bg-white text-gray-300 rounded-full p-3 flex items-center justify-center transition-colors duration-500 ease-in-out group-hover:text-[#CC0000] mx-auto w-12 h-12">
              <span className="text-xl transition-transform duration-500 ease-in-out transform group-hover:scale-110">
                {service.icon}
              </span>
            </span>
            <p className="text-sm mt-3 ">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
