import { Phone } from 'lucide-react';

export default function FloatingWhatsApp() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/971588629216?text=Hi, I would like to know more about your acoustic panels.', '_blank');
  };

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 cursor-pointer group"
      onClick={handleWhatsAppClick}
    >
      <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
        <Phone className="w-6 h-6" />
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us on WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
      </div>
      
      {/* Pulse animation */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
    </div>
  );
}