import Image from "next/image";
import { FC } from "react";

type SpecItem = {
  title: string;
  items: string[];
};

type SpecificationSectionProps = {
  specs: SpecItem[];
  imageSrc: string;
};

const SpecificationSection: FC<SpecificationSectionProps> = ({ specs, imageSrc }) => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 lg:px-20 font-sans relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl font-bold text-red-600 uppercase tracking-widest mb-16">
          Specification
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {specs.map((spec, index) => (
              <div key={index}>
                <h3 className="text-white text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-white"
                    >
                      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                    </svg>
                  </span>
                  {spec.title}
                </h3>
                <ul className="space-y-2">
                  {spec.items.map((item, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <span className="w-2 h-2 rounded-full mt-2 bg-red-600" />
                      <span
                        className="text-sm text-gray-300 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="relative w-full h-full min-h-[700px] hidden lg:block">
            <Image
              src={imageSrc}
              alt="PC Case"
              fill
              className="object-contain object-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecificationSection;
