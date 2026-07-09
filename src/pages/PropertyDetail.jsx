import { useParams, Link } from 'react-router-dom';
import { MapPin, Maximize, ArrowLeft, Phone, ShieldCheck, FileText, CheckCircle2, Building2 } from 'lucide-react';
import { properties } from '../data/properties';
import { motion } from 'framer-motion';

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 bg-background-warm">
        <div className="text-center bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100 max-w-md w-full">
          <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Building2 className="text-red-400" size={32} />
          </div>
          <h2 className="text-2xl font-black mb-4 text-gray-900 tracking-tight">Property Not Found</h2>
          <p className="text-gray-500 mb-8 font-medium text-balance">The listing you are looking for is no longer available or the URL is incorrect.</p>
          <Link to="/properties" className="btn-primary w-full py-4 text-lg rounded-xl block">Return to Portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background-warm pt-24 pb-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 md:max-w-6xl">
        
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/properties" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-8 font-bold group bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100 hover:shadow-md">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Exclusive Listings
          </Link>
        </motion.div>

        {/* Premium Gallery Hero */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="aspect-[21/9] w-full rounded-[3rem] overflow-hidden mb-12 shadow-2xl bg-gray-100 relative group"
        >
          {property.images && property.images.length > 0 ? (
            <>
              <img src={property.images[0]} alt={`${property.title} in IEP Town`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500 bg-gray-200">
              <Building2 size={48} className="opacity-50 mb-4" />
              <span className="font-bold">Image Coming Soon</span>
            </div>
          )}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-12">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-black tracking-widest uppercase">{property.category}</span>
                <span className="bg-white border border-gray-200 text-gray-700 px-5 py-2 rounded-full text-sm font-black tracking-widest uppercase shadow-sm">Block {property.block}</span>
                {property.status === 'Available' && <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-black tracking-widest uppercase shadow-sm">Available</span>}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-[1.1]">{property.title}</h1>
              <div className="flex items-end gap-4">
                <div className="text-4xl md:text-5xl font-black text-secondary tracking-tight">PKR {property.priceFormatted}</div>
                <div className="text-gray-500 font-bold mb-2">Demand</div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-y border-gray-200">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-2">Dimensions</p>
                <div className="flex items-center gap-2 font-black text-gray-900 text-lg">
                  <Maximize size={20} className="text-primary" />
                  {property.type}
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-2">Location</p>
                <div className="flex items-center gap-2 font-black text-gray-900 text-lg">
                  <MapPin size={20} className="text-primary" />
                  Block {property.block}
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-2">Zone</p>
                <div className="font-black text-gray-900 capitalize text-lg">{property.category}</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-2">Clearance</p>
                <div className="font-black text-green-600 text-lg">100% Clear</div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h3 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">Investment Overview</h3>
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
                <p className="text-gray-600 leading-relaxed text-lg font-medium">
                  {property.description}
                </p>
                <div className="mt-6 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                  <p className="text-gray-700 font-medium leading-relaxed">
                    <span className="font-black text-primary block mb-2">Advisor's Note:</span>
                    This premium plot in IEP Engineers Town represents an exceptional opportunity for both immediate construction and robust long-term portfolio growth. The plot is fully developed with all utilities active and ready for possession.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h3 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">Key Advantages</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {property.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <CheckCircle2 size={24} className="text-secondary shrink-0 mt-0.5" />
                    <span className="font-bold text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="sticky top-32 bg-white p-10 rounded-[3rem] border border-gray-100 shadow-2xl overflow-hidden relative group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className="text-center mb-10">
                <div className="w-20 h-20 rounded-3xl bg-gray-50 flex items-center justify-center mx-auto mb-6 shadow-inner border border-gray-100">
                  <img src="/favicon.png" alt="Hashim Associates Logo" className="w-12 h-12 object-contain" onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='block'; }} />
                  <Building2 className="w-8 h-8 text-primary hidden" />
                </div>
                <h4 className="font-black text-2xl text-gray-900 tracking-tight">Hashim Associates</h4>
                <p className="text-secondary font-bold uppercase tracking-widest text-xs mt-2">Authorized Agency</p>
              </div>

              <div className="space-y-4 mb-10">
                <a href="tel:+923135779479" className="btn-primary w-full py-5 text-lg font-bold rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all">
                  <Phone size={22} /> Speak to Advisor
                </a>
                <a href="https://wa.me/923135779479" target="_blank" rel="noreferrer" className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-5 text-lg font-bold rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 hover:-translate-y-0.5">
                  Secure via WhatsApp
                </a>
              </div>

              <div className="pt-8 border-t border-gray-100 space-y-5 bg-gray-50/50 -mx-10 -mb-10 p-10 rounded-b-[3rem]">
                <h5 className="font-black text-gray-900 mb-4 tracking-tight">Our Guarantee</h5>
                <div className="flex items-center gap-4 text-sm font-bold text-gray-700">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                    <ShieldCheck size={20} className="text-secondary" />
                  </div>
                  100% Verified Documentation
                </div>
                <div className="flex items-center gap-4 text-sm font-bold text-gray-700">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                    <FileText size={20} className="text-secondary" />
                  </div>
                  Direct Owner Transfers
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
