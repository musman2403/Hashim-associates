import { MessageCircle } from 'lucide-react';

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/923135779479" 
        target="_blank" 
        rel="noreferrer"
        className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgb(37,211,102,0.4)] hover:scale-110 hover:rotate-12 transition-all duration-300 group relative"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-gray-900 text-white text-sm font-bold rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
        </div>
      </a>
    </div>
  );
};

export default FloatingActions;
