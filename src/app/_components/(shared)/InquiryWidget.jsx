"use client";

import { useState } from "react";
import axios from "axios";
import { FiClipboard, FiCheckCircle, FiX, FiLoader } from "react-icons/fi";

export default function InquiryWidget() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    productName: "",
    productPrice: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (
      !form.productName.trim() ||
      !form.name.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      await axios.post("http://localhost:5001/api/inquiry", { ...form });
      setSuccess(true);
      setForm({
        productName: "",
        productPrice: "",
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch {
      alert("Failed to send inquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center group">
        <button
          aria-label={open ? "Close inquiry form" : "Open product inquiry form"}
          onClick={() => {
            setOpen(!open);
            setSuccess(false);
          }}
          className="flex items-center gap-2 bg-blue-600 text-white rounded-full px-4 py-3 shadow-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <FiClipboard className="text-2xl sm:text-xl" />
          <span className="hidden sm:inline font-medium select-none">
            Inquiry
          </span>
        </button>

        {/* Tooltip on hover */}
        <div className="absolute bottom-14 right-0 hidden group-hover:block bg-gray-900 text-white text-xs rounded px-2 py-1 whitespace-nowrap shadow-lg pointer-events-none select-none">
          Have questions? Ask here!
          <div className="absolute top-full right-3 w-2 h-2 bg-gray-900 rotate-45 origin-center"></div>
        </div>
      </div>

      {/* Inquiry Panel */}
      {open && (
        <div
          className="fixed bottom-24 right-4 max-w-md w-[90vw] bg-white shadow-xl border border-gray-200 rounded-lg p-4 sm:p-6 z-50
          animate-fadeIn slide-up"
          style={{ animationDuration: "300ms" }}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2 text-blue-700">
              <FiClipboard className="text-xl sm:text-xl" />
              Product Inquiry
            </h3>
            <button
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-gray-600 transition"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          {/* Success message */}
          {success ? (
            <div className="text-center">
              <FiCheckCircle className="text-3xl sm:text-4xl text-green-500 mx-auto mb-3" />
              <p className="text-green-700 font-semibold mb-4 text-sm sm:text-base">
                Your inquiry has been sent successfully!
              </p>
              <button
                onClick={() => {
                  setSuccess(false);
                  setOpen(false);
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm sm:text-base"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              {/* Form Fields */}
              <label className="mb-1 text-xs sm:text-sm font-medium text-gray-700">
                Product Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="productName"
                placeholder="Enter product name"
                value={form.productName}
                onChange={handleChange}
                className="mb-3 w-full px-2 py-1.5 sm:px-3 sm:py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              />

              <label className="mb-1 text-xs sm:text-sm font-medium text-gray-700">
                Product Price
              </label>
              <input
                type="text"
                name="productPrice"
                placeholder="Enter product price"
                value={form.productPrice}
                onChange={handleChange}
                className="mb-3 w-full px-2 py-1.5 sm:px-3 sm:py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              />

              <label className="mb-1 text-xs sm:text-sm font-medium text-gray-700">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                className="mb-3 w-full px-2 py-1.5 sm:px-3 sm:py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              />

              <label className="mb-1 text-xs sm:text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                className="mb-3 w-full px-2 py-1.5 sm:px-3 sm:py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              />

              <label className="mb-1 text-xs sm:text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Optional"
                value={form.phone}
                onChange={handleChange}
                className="mb-3 w-full px-2 py-1.5 sm:px-3 sm:py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              />

              <label className="mb-1 text-xs sm:text-sm font-medium text-gray-700">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                placeholder="Write your message here"
                rows={2}
                value={form.message}
                onChange={handleChange}
                className="mb-4 w-full px-2 py-1.5 sm:px-3 sm:py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none text-sm sm:text-base"
              />

              <button
                onClick={handleSubmit}
                disabled={loading}
                className={`w-full flex justify-center items-center gap-2 py-2 rounded text-white bg-blue-600 hover:bg-blue-700 transition text-sm sm:text-base ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading && (
                  <FiLoader className="animate-spin text-white text-lg" />
                )}
                {loading ? "Submitting..." : "Send Inquiry"}
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
