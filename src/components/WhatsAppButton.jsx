import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '923202727926'; // WhatsApp format: without leading 0, with country code

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
      >
        <FaWhatsapp className="text-4xl" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
