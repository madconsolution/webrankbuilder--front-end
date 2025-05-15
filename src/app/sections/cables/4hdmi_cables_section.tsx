
  const hdmi4_cables_section = () => {
    return (
   <>
   
     <section className="bg-black px-4">
  <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
    
    {/* Card 1 (Left Layout) */}
    <div className="rounded-[5rem] border border-[#E7000B] text-white flex flex-col gap-y-[60px] items-center w-full max-w-[660px] mx-auto h-[796px] relative">
      <div className="relative w-[285px] h-[285px]">
        <img
          src="/path-to-image-1.jpg"
          alt="main"
          className="h-full"
        />
      </div>

      <div className="text-center text-[28px] font-semibold leading-snug">
        <span className="text-[#E7000B]">Smartphone </span>
        <span>with </span>
        <span className="text-[#E7000B]">Brilliance </span>
        <span>Features</span>
      </div>

      <div className="bg-cover p-5">
        <img
          src="/path-to-description-image-1.jpg"
          alt="description"
          className="bg-cover w-[477px] h-[270px] rounded-md"
        />
      </div>
    </div>

    {/* Card 2 (Right Layout) */}
    <div className="rounded-[5rem] border border-[#E7000B] text-white flex flex-col gap-y-[60px] items-center w-full max-w-[660px] mx-auto h-[796px] relative">
      <div className="relative w-[285px] h-[285px]">
        <img
          src="/path-to-image-2.jpg"
          alt="main"
          className="h-full"
        />
      </div>

      <div className="w-full flex justify-center ml-20 -mt-32">
        <img
          src="/path-to-badge-image.jpg"
          alt="badge"
          className="h-16 w-16 object-contain"
        />
      </div>

      <div className="text-center text-[28px] font-semibold leading-snug my-[20%]">
        <span className="text-[#E7000B]">Smartphone </span>
        <span>Power & </span>
        <span className="text-[#E7000B]">Brilliance</span>
      </div>

      <div className="flex gap-4 flex-wrap justify-center items-center mt-2">
        <img
          src="/path-to-badge1.png"
          alt="badge-1"
          className="h-6 md:h-8 object-contain"
        />
        <img
          src="/path-to-badge2.png"
          alt="badge-2"
          className="h-6 md:h-8 object-contain"
        />
      </div>
    </div>

  </div>
</section>

   </>
    );
  };
  
  export default hdmi4_cables_section;
  