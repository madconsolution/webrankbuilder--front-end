import Image from 'next/image';

const TwisterBearingSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#D9D9D91A] via-[#9a9a9a6a] to-[#D9D9D91A] text-white py-12 px-4 md:px-10 rounded-3xl max-w-[1313px] mt-[50px] mx-auto shadow-xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-5">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h1 className="text-xl font-bold text-red-600 mb-4">
            Twister Bearing Technology
          </h1>
          <p className="text-sm leading-relaxed text-gray-200">
            The Twister Bearing Technology guarantees an exceptionally long lifetime of <strong>160,000 hours (MTBF)</strong>. The bearing shaft is fixed to the rotor and small magnet inside the bearing keeps the shaft in position. The convex surface of the shaft’s base reduces the frictional resistance and ensures a quiet and smooth fan rotation. The sleeve is made from a self-lubricating material, which prevents the bearing from draining and corrosion.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/case/Spark/card/image.png" 
            alt="Twister Bearing Diagram"
            width={445}
            height={250}
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default TwisterBearingSection;
