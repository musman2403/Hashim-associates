import { Search, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import PropertyCard from '../components/property/PropertyCard';
import { properties } from '../data/properties';
import { motion } from 'framer-motion';

const Properties = () => {
  return (
    <div className="bg-background-warm pb-20 min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex flex-col justify-center items-center overflow-hidden mb-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-primary-dark/80 z-10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/40 to-transparent z-10"></div>
          <img src="/images/properties-hero.jpg" alt="Exclusive Real Estate Listings" className="w-full h-full object-cover animate-[kenburns_20s_ease-in-out_infinite_alternate]" />
        </div>

        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8 }}
            className="w-16 h-[2px] bg-secondary mx-auto mb-8"
          ></motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight"
          >
            Exclusive Portfolio
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto text-balance"
          >
            Discover hand-picked, thoroughly vetted residential and commercial plots in IEP Engineers Town, offering maximum ROI and security.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 md:max-w-6xl">

        {/* Minimal Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white p-4 rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 flex flex-col md:flex-row gap-4 mb-16 relative z-30"
        >
          <div className="flex-1 flex items-center px-4 py-3 border border-gray-100 rounded-xl bg-gray-50/50 focus-within:bg-white focus-within:ring-2 focus-within:ring-primary/20 transition-all">
            <Search className="text-gray-500 mr-3" size={20} />
            <input type="text" placeholder="Search premium listings..." className="w-full bg-transparent outline-none text-gray-900 font-medium placeholder:text-gray-500 placeholder:font-normal" />
          </div>
          <div className="w-full md:w-64 flex items-center px-4 py-3 border border-gray-100 rounded-xl bg-gray-50/50 focus-within:bg-white focus-within:ring-2 focus-within:ring-primary/20 transition-all">
            <MapPin className="text-gray-500 mr-3" size={20} />
            <select className="w-full bg-transparent border-none outline-none text-gray-900 font-medium appearance-none">
              <option value="">All Locations</option>
              <option value="A">Block A</option>
              <option value="B">Block B</option>
              <option value="C1">Block C1</option>
            </select>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop, index) => (
            <PropertyCard key={prop.id} property={prop} index={index} />
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <section className="mt-24 py-24 bg-primary-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] z-0 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-light/20 rounded-full blur-[80px] z-0 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 md:p-20 shadow-2xl"
          >
            <span className="text-secondary font-bold tracking-widest uppercase mb-4 block">Take The Next Step</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight">Didn't find what you were looking for?</h2>
            <p className="text-xl text-gray-300 font-light mb-12 max-w-2xl mx-auto">We have exclusive off-market listings. Connect with our senior advisors for a private consultation.</p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link to="/contact" className="btn-primary bg-secondary hover:bg-secondary-light text-primary-dark px-10 py-5 text-xl font-bold rounded-2xl w-full sm:w-auto shadow-lg shadow-secondary/20 hover:shadow-secondary/40">
                Contact Our Team
              </Link>
              <a href="tel:+923135779479" className="inline-flex items-center gap-3 text-white font-bold hover:text-secondary transition-colors text-lg px-8 py-5 border-2 border-white/20 rounded-2xl hover:border-secondary w-full sm:w-auto justify-center">
                <Phone size={24} /> +92 313 5779479
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Properties;
