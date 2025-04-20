import Image from 'next/image';

const FanBracketSection = () => {
  return (
    <section className=" text-white py-12 px-4 md:px-10 rounded-3xl max-w-[1400px] mx-auto md:ml-[18%] mt-[50px]  shadow-xl">
      <div className="flex flex-col md:flex-row items-center  justify-between  gap-8 ">
        {/* Text Section */}
        <div className="w-full">
          <h6 className='text-red-600  text-xl md:text-3xl font-bold'>
          FAN <span  className="text-xl md:text-3xl font-bold mb-4 text-white">BRACKET</span>
          </h6>
          <p className="text-sm leading-relaxed w-[500px]">
          Anti-deformation high tensile steel wire, Simple installation, strong buckle force. you can change any other 120mm fans on the heatsink with them. Hydraulic bearing, reduce the frictional resistance, effectively lower the noise. Design for multiple platforms, simple installation.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex ">
          <Image
            src="/coolers/freeze_121/fan/image.png" 
            alt="Twister Bearing Diagram"
            width={748}
            height={811}
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default FanBracketSection;
