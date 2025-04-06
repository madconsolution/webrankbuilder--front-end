"use client";

const CommunitySection = () => {
  return (
    <div 
      className="relative min-h-[400px] flex items-center justify-center text-center px-4"
    >
      {/* Darker Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-black bg-opacity-80"
        style={{ backgroundImage: "url('https://i.postimg.cc/5y2pv6mX/1690951178-gaming-pc-category-hero-bg-2xl.png')" }}
      ></div>
      
      {/* Content Section */}
      <div className="relative p-8 rounded-lg max-w-5xl text-white z-10">
        <h1 className="text-3xl font-bold mb-4 text-white">Over 1000's of gamers already using our products.</h1>
        <h3 className="text-2xl mb-6 text-white">Designed with all the goodies you can get, Tortox will become your favorite brand.</h3>
        <button className="btn border-2 text-white px-6 py-3 rounded-sm text-lg font-semibold transition-transform transform hover:scale-105 ">
          JOIN OUR GROUP
        </button>
      </div>
    </div>
  );
};

export default CommunitySection;
