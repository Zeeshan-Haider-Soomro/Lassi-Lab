import { useEffect, useState } from "react";

const OfferPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ⏳ Show popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 text-center relative transform transition-all duration-500 scale-95 opacity-0 animate-fadeIn"
        style={{
          animation: "fadeIn 0.3s ease-out forwards",
        }}
      >
        {/* ❌ Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-gray-600 cursor-pointer hover:text-red-600 text-xl font-bold"
        >
          ×
        </button>

        {/* 🎉 Offer Content */}
        <h2 className="text-2xl font-bold text-red-600 mb-2">
          🎉 Limited Time Offer 🎉
        </h2>
        <p className="text-gray-700 mb-4">
          Get <span className="font-semibold text-red-500">20% OFF</span> on all
          Lassi Lab Specials
          Hurry up! Offer valid for a short time only.
        </p>

        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer">
          Shop Now
        </button>
      </div>

      {/* ✅ Inline CSS animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
};

export default OfferPopup;
