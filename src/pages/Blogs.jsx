import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { articles } from '../data/articles';

const Blogs = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="bg-background-warm pb-20 min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex flex-col justify-center items-center overflow-hidden mb-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-primary-dark/85 z-10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/40 to-transparent z-10"></div>
          <img src="/images/properties-hero.jpg" alt="Insights and News" className="w-full h-full object-cover animate-[kenburns_20s_ease-in-out_infinite_alternate]" />
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
            Market Insights
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto text-balance"
          >
            Expert analysis, investment strategies, and the latest updates from IEP Engineers Town.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 md:max-w-6xl">
        {/* Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {articles.map((article) => (
            <motion.div key={article.id} variants={fadeInUp} className="h-full">
              <Link to={`/blog/${article.id}`} className="group block h-full bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  {article.image ? (
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 to-primary-dark/20 group-hover:scale-105 transition-transform duration-700"></div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-primary-dark px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-sm">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-xs font-bold text-gray-400 mb-4 uppercase tracking-wider">
                      <span className="flex items-center gap-1.5"><Calendar size={14} /> {article.date}</span>
                      <span className="flex items-center gap-1.5"><Clock size={14} /> {article.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-4 leading-tight group-hover:text-primary transition-colors tracking-tight">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 font-medium leading-relaxed mb-6 line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-secondary font-bold text-sm tracking-widest uppercase mt-auto group-hover:translate-x-2 transition-transform duration-300">
                    Read Article <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Blogs;
