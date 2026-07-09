import { MapPin, Phone, Clock, Mail, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="bg-background-warm pb-20 min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex flex-col justify-center items-center overflow-hidden mb-24">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-primary-dark/80 z-10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background-warm via-transparent to-transparent z-10"></div>
          <img src="/images/prop-4.jpg" alt="Customer Service Desk" className="w-full h-full object-cover animate-[kenburns_20s_ease-in-out_infinite_alternate]" />
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
            Private Consultation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto text-balance"
          >
            Whether you're securing a premium residential plot or exploring high-yield commercial investments in IEP Engineers Town, our experts are ready to guide you.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 md:max-w-6xl">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-12 gap-12"
        >
          {/* Contact Information */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-5 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <MapPin className="text-primary group-hover:text-white" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Corporate Office</h4>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">2-B.1 Main Round About,<br/>Sector A, Defence Road,<br/>Block C1, IEP Engineers Town,<br/>Lahore</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-5 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#25D366]/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#25D366] transition-colors duration-300">
                <Phone className="text-[#25D366] group-hover:text-white" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Direct Line / WhatsApp</h4>
                <a href="tel:+923135779479" className="text-gray-600 hover:text-primary transition-colors text-lg font-bold block">+92 313 5779479</a>
                <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Fastest Response</span>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-5 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors duration-300">
                <Clock className="text-secondary group-hover:text-white" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Advisory Hours</h4>
                <p className="text-gray-600 text-sm font-medium mb-1">Monday - Sunday</p>
                <p className="text-primary-dark font-black">9:00 AM – 9:00 PM</p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div variants={fadeInUp} className="lg:col-span-8 bg-white p-10 md:p-14 rounded-[3rem] shadow-xl border border-gray-100 relative overflow-hidden group hover:shadow-2xl transition-shadow duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-[150px] -z-10 group-hover:scale-110 transition-transform duration-700"></div>
            
            <h3 className="text-3xl font-black text-gray-900 mb-8 tracking-tight">Request Property Details</h3>
            <form className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">First Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium text-gray-900" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Last Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium text-gray-900" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Direct Phone Number</label>
                <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium text-gray-900" placeholder="+92 300 0000000" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Area of Interest</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-gray-900 font-medium appearance-none">
                  <option>Buying Premium Residential Plot</option>
                  <option>Selling Property in IEP Town</option>
                  <option>Commercial Investment Consultation</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Message</label>
                <textarea rows="4" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none font-medium text-gray-900" placeholder="Please provide any specific requirements or questions..."></textarea>
              </div>
              <button type="button" className="btn-primary w-full py-5 text-lg font-bold rounded-xl mt-4 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all">Submit Inquiry</button>
            </form>
          </motion.div>
        </motion.div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto px-4 md:px-6 md:max-w-6xl mt-24">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col md:flex-row group"
        >
          <div className="md:w-1/3 p-12 bg-primary-dark text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-colors duration-500"></div>
            <h3 className="text-3xl font-black mb-4 tracking-tight">Visit Our Office</h3>
            <p className="text-gray-400 mb-8 leading-relaxed font-light">
              Located at the prestigious main roundabout of Sector A in IEP Engineers Town. Drop by for a premium consultation regarding your property portfolio.
            </p>
            <a href="https://maps.app.goo.gl/S9yBoq8tRt1z4k7u8" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-secondary font-bold hover:text-white transition-colors w-max">
              <Navigation size={20} /> Open Google Maps
            </a>
          </div>
          <div className="md:w-2/3 h-96 md:h-auto relative bg-gray-200">
             <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13615.529813083163!2d74.2709!3d31.4116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901a1467bdab7%3A0x6b6d510e0dd22a3d!2sIEP%20Engineers%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1717200000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hashim Associates Office Location"
                ></iframe>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
