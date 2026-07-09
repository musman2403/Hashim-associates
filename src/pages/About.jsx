import { Building2, CheckCircle2, Star, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
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
    <div className="bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex flex-col justify-center items-center overflow-hidden mb-24">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-primary-dark/80 z-10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
          <img src="/images/properties-hero.jpg" alt="Hashim Associates Office" className="w-full h-full object-cover animate-[kenburns_20s_ease-in-out_infinite_alternate]" />
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
            The Authority in <br/><span className="text-gradient">IEP Town Real Estate</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto text-balance"
          >
            With over a decade of verified success, Hashim Associates is your premier partner for secure, high-yield residential and commercial investments in Lahore.
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
        >
          <div className="w-[1px] h-16 bg-primary/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-primary animate-[shimmer_2s_infinite]"></div>
          </div>
          <span className="text-[10px] tracking-[0.3em] text-primary/50 uppercase font-bold">Scroll</span>
        </motion.div>
      </section>

      {/* Stats / Numbers */}
      <section className="py-10 mb-24">
        <div className="container mx-auto px-4 md:px-6 md:max-w-6xl">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center bg-white/5 backdrop-blur-xl border border-gray-100 rounded-[3rem] p-12 shadow-xl"
          >
            {[
              { num: "10+", label: "Years Experience" },
              { num: "500+", label: "Secure Transfers" },
              { num: "100%", label: "LDA Approved" },
              { num: "4.8", label: "Client Rating" }
            ].map((stat, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <div className="text-4xl md:text-6xl font-black text-secondary mb-2">{stat.num}</div>
                <div className="text-gray-600 font-bold uppercase tracking-wider text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="container mx-auto px-4 md:px-6 md:max-w-6xl mb-32">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <span className="text-secondary font-bold tracking-widest uppercase mb-2 block">Our Advisors</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">Executive Leadership</h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">The dedicated experts making your property investments a secure reality in IEP Town.</p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12"
        >
          {/* CEO */}
          <motion.div variants={fadeInUp} className="text-center group">
            <div className="w-56 h-56 mx-auto rounded-full overflow-hidden mb-8 shadow-2xl border-4 border-white group-hover:border-secondary transition-colors duration-500">
                <img src="/images/team-1.jpg" alt="Hashim Raja" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            <h3 className="text-3xl font-black text-gray-900 mb-1">Hashim Raja</h3>
            <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-6">Chief Executive Officer</p>
            <p className="text-gray-600 leading-relaxed font-medium">Visionary founder bringing decades of deep market insight and a strict commitment to transparent real estate practices.</p>
          </motion.div>
          
          {/* Team Member 1 */}
          <motion.div variants={fadeInUp} className="text-center group">
            <div className="w-56 h-56 mx-auto rounded-full overflow-hidden mb-8 shadow-2xl border-4 border-white group-hover:border-secondary transition-colors duration-500">
                <img src="/images/team-2.jpg" alt="Jahanzaib Awan" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            <h3 className="text-3xl font-black text-gray-900 mb-1">Jahanzaib Awan</h3>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-6">Senior Sales Director</p>
            <p className="text-gray-600 leading-relaxed font-medium">Expert in matching elite clients with highly profitable residential plots in Blocks A and B.</p>
          </motion.div>

          {/* Team Member 2 */}
          <motion.div variants={fadeInUp} className="text-center group">
            <div className="w-56 h-56 mx-auto rounded-full overflow-hidden mb-8 shadow-2xl border-4 border-white group-hover:border-secondary transition-colors duration-500">
                <img src="/images/team-3.jpg" alt="Sikandar Abbas" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            <h3 className="text-3xl font-black text-gray-900 mb-1">Sikandar Abbas</h3>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-6">Investment Specialist</p>
            <p className="text-gray-600 leading-relaxed font-medium">Specializes in structuring commercial investments and high-yield properties across the IEP Town main boulevard.</p>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Value Proposition */}
      <section className="bg-primary-dark text-white py-32 rounded-[3rem] mx-4 md:mx-6 lg:mx-auto lg:max-w-6xl shadow-2xl overflow-hidden relative mb-24">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-light/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="container mx-auto px-8 relative z-10 text-center max-w-4xl"
        >
          <Building2 size={64} className="mx-auto text-secondary mb-10" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tight text-white">Our Commitment to You</h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light mb-12">
            To provide the most transparent, reliable, and profitable real estate advisory services in Lahore. We don't just facilitate transactions; we build secure portfolios based on mutual trust and data-driven growth.
          </p>
          <a href="tel:+923135779479" className="btn-primary px-12 py-5 text-xl font-bold rounded-2xl inline-flex shadow-lg shadow-secondary/20 hover:shadow-secondary/40">Schedule Your Consultation</a>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
