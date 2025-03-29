'use client';



export default function BookingSection() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-black via-blue-900 to-black">
      {/* Left Side Content */}
      <div className="text-white text-left w-1/2 p-8">
        <h2 className="text-3xl font-bold">
          WELCOME TO <span className="text-red-600">TORTOX</span>
        </h2>
        <p className="mt-4 text-lg leading-relaxed">
          Tortox is one of the world’s leading providers of{' '}
          <strong>high-performance PC peripherals</strong> and components.
        </p>
      </div>

      {/* Booking Form */}
      <div className="w-1/3 bg-[#4E4D97] bg-opacity-20 p-6 rounded-lg shadow-lg backdrop-blur-md">
        <h3 className="text-xl font-bold text-gray-200 mb-4 text-center">Book Products Now</h3>

        <form className="space-y-4">
  <div className="flex gap-x-5">
    <label className="text-gray-200 mb-1">Name</label>
    <input
      type="text"
      placeholder="Enter your name"
      className="w-full p-2 bg-white bg-opacity-20 border border-gray-300 rounded text-white placeholder-gray-300"
    />
  </div>

  <div className="flex space-x-10">
    <label className="text-gray-200 mb-1">Email</label>
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full p-2 bg-white bg-opacity-20 border border-gray-300 rounded text-white placeholder-gray-300"
    />
  </div>

  <div className="flex space-x-10">
    <label className="text-gray-200 mb-1 ">Phone </label>
    <input
      type="text"
      placeholder="Enter your phone number"
      className="w-full p-2 bg-white bg-opacity-20 border border-gray-300 rounded text-white placeholder-gray-300"
    />
  </div>

  <div className="flex flex-col">
    <label className="text-gray-200 mb-1">Select Product</label>
    <select className="w-full p-2 bg-white bg-opacity-20 border border-gray-300 rounded text-gray-600">
      <option>Select Product</option>
      <option>Gaming Mouse</option>
      <option>Mechanical Keyboard</option>
      <option>Wireless Headset</option>
      <option>Gaming PC</option>
    </select>
  </div>

  {/* reCAPTCHA Placeholder */}
  <div className="flex items-center space-x-2 bg-white p-3 rounded text-gray-800">
    <input type="checkbox" />
    <span>I'm not a robot</span>
  </div>

  {/* Submit Button */}
  <button className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700 transition">
    SUBMIT
  </button>
</form>

      </div>
    </div>
  );
}
