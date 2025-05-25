import Image from 'next/image';

const CompatibilitySection = () => {
  return (
    <section className="bg-gradient-to-b from-[#D9D9D91A] via-[#9a9a9a6a] to-[#D9D9D91A] text-white py-12 px-4 md:px-10 rounded-3xl max-w-[1313px] mt-[50px] mx-auto shadow-xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-5">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h5 className="text-[#CD2122] font-[700] text-[25px] leading-[100%] tracking-[0%]  align-middle font-['Open_Sans'] ">
          Compatibility
          </h5>
          <p className="font-[600] text-[18px] leading-[100%] tracking-[0%]  align-middle font-['Open_Sans'] ">
          The RGB sychronization via 4-pin RGB header is compatible with motherboards using Asus Aura Sync, ASRock RGB LED, MSI Mystic Light Sync and Gigabyte RGB Fusion. Aura sync effect supported with transition cables.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/liquid/Compatibility/image.png" 
            alt="Compatibility"
            width={445}
            height={250}
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default CompatibilitySection;
