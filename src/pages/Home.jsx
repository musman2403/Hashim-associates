import { ArrowRight, MapPin, Phone, CheckCircle2, Building, ShieldCheck, Map, Clock, Star, MessageCircle, Navigation, ChevronDown, Award, Users, Search, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import PropertyCard from '../components/property/PropertyCard';
import { properties } from '../data/properties';

// FAQ Component for accordion
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
      >
        <h3 className="text-xl font-bold text-gray-900 pr-4">{question}</h3>
        <div className="shrink-0 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-primary transition-transform">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 text-lg leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-primary-dark">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40 z-10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/80 to-transparent z-10"></div>
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="w-full h-full bg-[url('/images/home-hero.jpg')] bg-cover bg-center animate-[kenburns_20s_ease-in-out_infinite_alternate]"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-20 text-center mt-32 md:mt-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
          >
            <Star className="text-secondary fill-secondary" size={16} />
            <span className="text-white text-sm font-bold tracking-widest uppercase">Premium Real Estate Advisory in Lahore</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight text-balance leading-[1.1]"
          >
            Secure Your Future in <br />
            <span className="text-gradient inline-block mt-2">IEP Engineers Town.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 text-balance font-light leading-relaxed"
          >
            Discover exclusive residential plots and commercial investment properties. 
            Guided by Lahore’s most trusted real estate experts with over a decade of verified success.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-6"
          >
            <Link to="/properties" className="btn-primary w-full sm:w-auto text-lg">
              <Search size={20} />
              <span>Explore Premium Listings</span>
            </Link>
            <a href="https://wa.me/923135779479" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white text-lg font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-[#25D366]/20 hover:shadow-xl hover:-translate-y-0.5">
              <MessageCircle size={24} />
              <span>Chat with an Advisor</span>
            </a>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-6 text-gray-500 text-sm font-medium flex items-center justify-center gap-2"
          >
            <ShieldCheck size={16} className="text-secondary" /> 100% Confidential & Secure Consultation
          </motion.p>
        </div>


      </section>

      {/* 2. TRUST STRIP */}
      <section className="bg-primary-dark border-b border-white/5 relative z-30">
        <div className="container mx-auto px-4 md:px-6 md:max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 py-10 gap-8 divide-x divide-white/5">
            {[
              { icon: <Award />, title: "15+ Years", subtitle: "Market Experience" },
              { icon: <ShieldCheck />, title: "100% Verified", subtitle: "Secure Transactions" },
              { icon: <Building />, title: "500+ Plots", subtitle: "Successfully Transferred" },
              { icon: <Users />, title: "Local Experts", subtitle: "Dedicated to IEP Town" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left px-4 group">
                <div className="text-secondary group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <p className="font-bold text-xl text-white">{item.title}</p>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mt-1">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED OPPORTUNITIES */}
      <section className="py-32 bg-background-warm">
        <div className="container mx-auto px-4 md:px-6 md:max-w-7xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          >
            <div className="max-w-2xl">
              <span className="text-secondary font-bold tracking-widest uppercase mb-2 block">Curated Selection</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">Premium Real Estate Listings</h2>
              <p className="text-xl text-gray-600 font-light leading-relaxed">Exclusive, thoroughly vetted residential and commercial plots in IEP Town offering the highest potential for appreciation and living standards.</p>
            </div>
            <Link to="/properties" className="group flex items-center gap-2 text-primary font-bold hover:text-primary-light transition-colors text-lg bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100 hover:shadow-md">
              View All Properties <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.slice(0, 6).map((prop, index) => (
              <PropertyCard key={prop.id} property={prop} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY HASHIM ASSOCIATES */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 skew-x-12 translate-x-32 z-0"></div>
        
        <div className="container mx-auto px-4 md:px-6 md:max-w-7xl relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="text-secondary font-bold tracking-widest uppercase mb-2 block">Our Standard</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">The Hashim Advantage</h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed">We don't just sell property; we engineer successful investments through data, integrity, and unmatched local presence.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: <MapPin size={32} />, title: "Hyper-Local Focus", desc: "Our singular dedication to IEP Town means we know market nuances others miss." },
              { icon: <ShieldCheck size={32} />, title: "Ironclad Security", desc: "Every file and document undergoes rigorous verification before we present it to you." },
              { icon: <Award size={32} />, title: "Fiduciary Duty", desc: "We act in your best financial interest, providing transparent, unfiltered market realities." },
              { icon: <Phone size={32} />, title: "Concierge Service", desc: "From viewing to final transfer, we handle all administrative complexities on your behalf." }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-white rounded-3xl p-10 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 border border-gray-100 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. MEET THE EXPERTS (NEW) */}
      <section className="py-32 bg-background-warm border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-6 md:max-w-7xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="text-secondary font-bold tracking-widest uppercase mb-2 block">Leadership</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">Meet Your Advisors</h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed">The trusted professionals guiding your investment decisions.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Agent 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 group"
            >
              <div className="aspect-square bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" alt="Jahanzaib Awan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-black text-gray-900 mb-1">Jahanzaib Awan</h3>
                <p className="text-secondary font-bold uppercase tracking-wide text-sm mb-4">Senior Sales Director</p>
                <p className="text-gray-600 mb-6 font-medium">Specializing in commercial plots and high-yield investments within IEP Town.</p>
                <a href="tel:+920000000000" className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors">
                  <Phone size={18} /> Contact Jahanzaib
                </a>
              </div>
            </motion.div>

            {/* Agent 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 group"
            >
              <div className="aspect-square bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" alt="Sikandar Abbas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-black text-gray-900 mb-1">Sikandar Abbas</h3>
                <p className="text-secondary font-bold uppercase tracking-wide text-sm mb-4">Residential Specialist</p>
                <p className="text-gray-600 mb-6 font-medium">Dedicated to helping families find their perfect home site with zero stress.</p>
                <a href="tel:+920000000000" className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors">
                  <Phone size={18} /> Contact Sikandar
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. OUR PROCESS */}
      <section className="py-32 bg-primary-dark text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="container mx-auto px-4 md:px-6 md:max-w-7xl relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-24"
          >
            <span className="text-secondary font-bold tracking-widest uppercase mb-2 block">Our Methodology</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">A Seamless Journey</h2>
            <p className="text-xl text-gray-300 font-light">Structured, transparent, and entirely managed by our team.</p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-[40px] left-[10%] w-[80%] h-0.5 bg-gradient-to-r from-primary-dark via-secondary/50 to-primary-dark"></div>
            
            {[
              { step: "01", title: "Strategic Consultation", desc: "We analyze your goals and budget." },
              { step: "02", title: "Curated Selection", desc: "Presenting only vetted options." },
              { step: "03", title: "Guided Site Visit", desc: "Physical inspection of the plot." },
              { step: "04", title: "Legal Documentation", desc: "Rigorous file verification." },
              { step: "05", title: "Secure Transfer", desc: "Hassle-free ownership handover." }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 bg-primary border-2 border-secondary/30 rounded-full flex items-center justify-center text-2xl font-black text-secondary mb-6 group-hover:scale-110 group-hover:bg-secondary group-hover:text-primary-dark transition-all duration-300 shadow-xl shadow-black/50">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY IEP TOWN? */}
      <section className="relative py-32 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/prop-4.jpg')] bg-cover bg-fixed bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-primary/95 mix-blend-multiply"></div>
        <div className="container mx-auto px-4 md:px-6 md:max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-secondary font-bold tracking-widest uppercase mb-2 block">Location Profile</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight leading-tight">
                Why Invest in <br/><span className="text-secondary">IEP Engineers Town?</span>
              </h2>
              <p className="text-xl text-gray-300 font-light mb-10 leading-relaxed">
                Strategically located on Defence Road, IEP Town offers the perfect blend of peaceful residential living and high-yield commercial opportunities. With rapid infrastructure development, it's Lahore's most secure investment zone.
              </p>
              <ul className="space-y-6">
                {[
                  "Direct Access to Lahore Ring Road",
                  "Secure, Gated Community Infrastructure",
                  "Lush Parks, Hospitals & Modern Mosques",
                  "Consistently High Annual Appreciation Rate"
                ].map((point, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-white text-lg font-medium">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                      <CheckCircle2 size={18} />
                    </div>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2rem] hover:bg-white/10 transition-colors">
                <div className="text-5xl font-black text-secondary mb-4">13</div>
                <div className="text-white text-lg font-bold">Developed Blocks</div>
                <div className="text-gray-500 text-sm mt-2">Fully populated and secure.</div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2rem] hover:bg-white/10 transition-colors mt-12">
                <div className="text-5xl font-black text-secondary mb-4">150<span className="text-3xl">ft</span></div>
                <div className="text-white text-lg font-bold">Main Boulevard</div>
                <div className="text-gray-500 text-sm mt-2">Commercial hub.</div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2rem] hover:bg-white/10 transition-colors -mt-12">
                <div className="text-5xl font-black text-secondary mb-4">24/7</div>
                <div className="text-white text-lg font-bold">Security Patrols</div>
                <div className="text-gray-500 text-sm mt-2">Peace of mind guaranteed.</div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2rem] hover:bg-white/10 transition-colors">
                <div className="text-5xl font-black text-secondary mb-4">100%</div>
                <div className="text-white text-lg font-bold">LDA Approved</div>
                <div className="text-gray-500 text-sm mt-2">Clear titles and NOCs.</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS (Dedicated Social Proof) */}
      <section className="py-32 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6 md:max-w-7xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="text-secondary font-bold tracking-widest uppercase mb-2 block">Client Stories</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Trusted by Discerning Investors</h2>
            <div className="flex justify-center items-center gap-2 text-secondary mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="fill-secondary" size={24} />)}
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "Hashim Associates made buying our 10 Marla plot incredibly easy. They handled all the documentation transparently and secured a great location for us.", name: "Muhammad Ali", role: "Resident, Block A" },
              { text: "Their knowledge of commercial rates in IEP Town is unmatched. Jahanzaib guided me to an investment that has already appreciated 20% in one year.", name: "Kamran Qureshi", role: "Investor" },
              { text: "I was worried about the transfer process as an overseas Pakistani, but their team handled everything perfectly. 100% reliable agency.", name: "Usman Tariq", role: "Overseas Buyer" }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white p-10 rounded-[2rem] shadow-lg border border-gray-100 relative"
              >
                <div className="text-6xl text-gray-200 font-serif absolute top-6 left-6 leading-none">"</div>
                <p className="text-gray-700 text-lg leading-relaxed mb-8 relative z-10 font-medium mt-6">{item.text}</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{item.name}</h3>
                    <p className="text-sm text-secondary font-bold uppercase tracking-wide">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION (NEW) */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 md:max-w-4xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Common Questions</h2>
            <p className="text-xl text-gray-600 font-light">Everything you need to know before making your investment.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-t border-gray-200"
          >
            {[
              { q: "Is IEP Engineers Town completely LDA approved?", a: "Yes, IEP Engineers Town is a 100% LDA (Lahore Development Authority) approved society, ensuring your investment is completely secure and legally protected." },
              { q: "What are the transfer charges for a 10 Marla plot?", a: "Transfer fees vary depending on the block and specific location. However, our team provides a transparent breakdown of all costs, including society fees, CVT, and stamp duty before you commit." },
              { q: "Can overseas Pakistanis buy property here easily?", a: "Absolutely. We specialize in assisting overseas clients. We handle the documentation, provide video tours of the plots, and ensure a secure, transparent process without you needing to travel." },
              { q: "Which blocks are best for immediate construction?", a: "Blocks A, B, and C are highly developed and ideal for immediate construction, featuring all necessary utilities including underground electricity, water, and gas." }
            ].map((faq, idx) => (
              <FAQItem key={idx} question={faq.q} answer={faq.a} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* 10. CTA BANNER (Instead of full contact form) */}
      <section className="py-24 bg-primary-dark relative overflow-hidden">
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight">Ready to Secure Your Future in IEP Town?</h2>
            <p className="text-xl text-gray-300 font-light mb-12 max-w-2xl mx-auto">Connect with our senior advisors for a private, no-obligation consultation about your real estate goals.</p>
            
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

export default Home;
