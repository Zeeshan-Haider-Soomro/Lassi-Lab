import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "923072372320"; // ✅ WhatsApp format: country code without leading 0

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        className="relative cursor-pointer flex items-center justify-center bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 animate-pulse-custom"
      >
        {/* Outer Glow / Zoom Effect */}
        <span className="absolute inset-0 rounded-full border-4 border-green-400 opacity-75 animate-ping"></span>

        {/* WhatsApp Icon */}
        <FaWhatsapp className="text-3xl cursor-pointer relative z-10" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
