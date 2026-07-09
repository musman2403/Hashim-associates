import { Link } from 'react-router-dom';
import { MapPin, Maximize, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const PropertyCard = ({ property, index = 0 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-shadow duration-500 group border border-gray-100 flex flex-col h-full relative"
    >
      
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          <span className="bg-white/90 backdrop-blur-md text-primary-dark text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-sm">
            {property.category}
          </span>
          {property.status === 'featured' && (
            <span className="bg-secondary/90 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-sm self-start">
              Featured
            </span>
          )}
        </div>
        
        {property.images && property.images.length > 0 ? (
          <img 
            src={property.images[0]} 
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-gray-500 bg-gray-50">
            <span className="font-medium">Image Not Available</span>
          </div>
        )}
        
        {/* Subtle inner shadow for depth */}
        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="mb-4">
          <div className="text-2xl font-black text-primary mb-2 flex items-center justify-between">
            <span>PKR {property.priceFormatted}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 leading-snug line-clamp-2 mb-3 group-hover:text-primary transition-colors">
            {property.title}
          </h3>
          <p className="text-gray-500 flex items-center gap-1.5 text-sm font-medium">
            <MapPin size={16} className="text-gray-500 shrink-0" /> Block {property.block}, IEP Town
          </p>
        </div>

        <div className="flex items-center gap-4 py-4 border-y border-gray-100 mb-6 mt-auto">
          <div className="flex items-center gap-2 text-gray-700 font-bold bg-gray-50 px-3 py-1.5 rounded-lg">
            <Maximize size={16} className="text-primary" />
            {property.type}
          </div>
        </div>

        <Link 
          to={`/property/${property.id}`}
          className="flex items-center justify-between text-primary font-bold hover:text-primary-light transition-colors"
          aria-label={`View details about ${property.title}`}
        >
          <span className="uppercase tracking-wide text-sm">View Details</span>
          <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
