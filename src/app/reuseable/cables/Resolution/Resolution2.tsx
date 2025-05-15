const Resolution2Section = () => {
  return (
    <section className="bg-black">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Card 1 */}
        <div className="rounded-[5rem] border border-[#E7000B] text-white flex flex-col gap-y-5 justify-center items-center w-full max-w-[660px] mx-auto h-[796px] relative">
          {/* Main Image */}
          <div className="relative w-[285px] h-[285px] flex">
            <img
              src="/adapter/m_to_f2/resolution/left-cable.png"
              alt="main-1"
              className="h-full"
            />
          </div>

          {/* Title */}
          <div className="mini-to-dp-text text-center">
            <span className="text-[#ffffff] ">Enjoy 4k Resolution </span>
             <br />
            <span className="text-[#E7000B]">Supports 3840*2160@30Hz</span>
          </div>

          {/* Description Image */}
          <div className="bg-cover p-5">
            <img
              src="/cables/4hdmi_cables/resolution/monitor.png"
              alt="description"
              className="bg-cover w-[477px] h-[270px] rounded-md"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-[5rem] border border-[#E7000B] text-white flex flex-col   justify-center items-center w-full max-w-[660px] mx-auto h-[796px] relative">
          {/* Main Image */}
          <div className="relative flex items-center gap-8 -ml-24 ">
          <div>
              <img
              src="/adapter/m_to_f2/resolution/right-cable.png"
              alt="main-2"
              className="w-[285px] h-[285px]"
            />
          </div>
          <div className="mini-to-dp-text w-[50%]">
            <>Mirror <span className="text-white">&</span>
            <br /> 
            <>Extended Modes</>
</>
          </div>
          </div>

          {/* Full-size Description Image */}
          <img
            src="/adapter/m_to_f/resolution/max-image.png"
            alt="description"
            className="w-[654px] h-[494px] -mb-32"
          />
        </div>
      </div>
    </section>
  );
};

export default Resolution2Section;
