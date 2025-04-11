'use client';

export default function BookingSection() {
  return (
    <div className="relative flex flex-col md:flex-row justify-between  min-h-[550px] px-6 md:px-24 py-10 bg-gradient-to-r from-[#00002b] via-[#000064] to-[#00002b] text-white font-serif">
      {/* Left Side Content */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0 text-left">
  <h2 className="text-3xl font-extrabold">TORTOX</h2>
  <p className="text-xl md:text-3xl leading-relaxed font-medium">
    Tortox is one of the world’s leading providers of{' '}
    <strong className="font-bold">high-performance PC peripherals</strong> and components.
  </p>
</div>


      {/* Right Side Form */}
      <div className="relative w-full md:w-[500px]">
        <div className="w-full h-auto bg-gradient-to-b from-[#9ba1ff] to-[#5e63b6] p-6 pt-5 rounded-lg shadow-lg text-[#FFFFE4] relative z-10">
          <h3 className="text-2xl text-center text-white font-semibold my-5">
            Book <strong>Products</strong> Now
          </h3>

          <form className="space-y-4">
            {/* Name */}
            <div className="flex flex-col sm:flex-row items-center justify-between w-full space-y-2 sm:space-y-0 sm:space-x-2">
              <label className="text-sm text-white w-full sm:w-[30%]">Name</label>
              <input
                type="text"
                placeholder="Name"
                className="flex-1 px-2 py-2 rounded text-gray-900 bg-white w-full"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col sm:flex-row items-center justify-between w-full space-y-2 sm:space-y-0 sm:space-x-2">
              <label className="text-sm text-white w-full sm:w-[30%]">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-2 py-2 rounded text-gray-900 bg-white w-full"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col sm:flex-row items-center justify-between w-full space-y-2 sm:space-y-0 sm:space-x-2">
              <label className="text-sm text-white w-full sm:w-[30%]">Phone No:</label>
              <input
                type="text"
                placeholder="Your Phone No:"
                className="flex-1 px-2 py-2 rounded text-gray-900 bg-white w-full"
              />
            </div>

            {/* Product Dropdown */}
            <div className="flex flex-col sm:flex-row items-center justify-between w-full space-y-2 sm:space-y-0 sm:space-x-2">
              <label className="text-sm text-white w-full sm:w-[30%]">Product</label>
              <select className="flex-1 px-2 py-2 rounded text-gray-900 bg-white w-full">
                <option>Select Product</option>
                <option>Gaming Mouse</option>
                <option>Mechanical Keyboard</option>
                <option>Wireless Headset</option>
                <option>Gaming PC</option>
              </select>
            </div>

            {/* CAPTCHA Mock */}
            <div className="flex items-center gap-3 bg-white p-3 rounded flex-wrap">
              <input type="checkbox" />
              <span className="text-sm text-black">I'm not a robot</span>
              <img
                src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                alt="captcha"
                className="h-10 ml-auto"
              />
            </div>

            {/* Submit Button */}
            <div className="mx-auto w-24">
              <button
                type="submit"
                className="w-24 bg-red-600 text-white font-semibold py-2 rounded hover:bg-red-700 transition"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>

        {/* Bubble pointer */}
        <div className="hidden md:block absolute bottom-[-7px] left-10 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-[#5e63b6] z-0" />
      </div>
    </div>
  );
}
