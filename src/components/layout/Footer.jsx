import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Map, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6 md:max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand & About */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <h2 className="font-bold text-3xl tracking-tight text-white">Hashim Associates</h2>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed max-w-md font-light">
              Your trusted property experts in IEP Engineers Town, Lahore. We provide verified properties and transparent guidance from consultation to transfer.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="https://maps.app.goo.gl/S9yBoq8tRt1z4k7u8" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-secondary hover:text-white transition-colors font-semibold">
                <Map size={20} />
                <span>View on Google Maps</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-lg mb-6 text-white tracking-wide">Explore</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-500 hover:text-secondary transition-colors font-medium">Home</Link></li>
              <li><Link to="/properties" className="text-gray-500 hover:text-secondary transition-colors font-medium">Properties</Link></li>
              <li><Link to="/about" className="text-gray-500 hover:text-secondary transition-colors font-medium">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-secondary transition-colors font-medium">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4 bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <h3 className="font-bold text-lg mb-6 text-white tracking-wide">Contact Details</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-gray-300">
                <MapPin size={24} className="text-secondary shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">2-B.1 Main Round About, Sector A, Defence Road, Block C1, IEP Engineers Town, Lahore</span>
              </li>
              <li className="flex items-center gap-4 text-gray-300">
                <Phone size={24} className="text-secondary shrink-0" />
                <a href="tel:+923135779479" className="hover:text-white transition-colors text-xl font-bold tracking-wide">+92 313 5779479</a>
              </li>
              <li className="flex items-center gap-4 text-gray-300">
                <Clock size={24} className="text-secondary shrink-0" />
                <span className="text-sm">Open Every Day: 9:00 AM – 9:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} Hashim Associates. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
            <span>Google Rating: <span className="text-secondary font-bold">⭐ 4.3 / 5</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
