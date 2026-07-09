import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2, Building2 } from 'lucide-react';
import { articles } from '../data/articles';
import { motion } from 'framer-motion';

const BlogDetail = () => {
  const { id } = useParams();
  const article = articles.find(a => a.id === id);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 bg-background-warm">
        <div className="text-center bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100 max-w-md w-full">
          <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Building2 className="text-red-400" size={32} />
          </div>
          <h2 className="text-2xl font-black mb-4 text-gray-900 tracking-tight">Article Not Found</h2>
          <p className="text-gray-500 mb-8 font-medium text-balance">The insight you are looking for has been moved or removed.</p>
          <Link to="/blogs" className="btn-primary w-full py-4 text-lg rounded-xl block">Return to Insights</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background-warm pt-24 pb-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 md:max-w-4xl">
        
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/blogs" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-12 font-bold group bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100 hover:shadow-md">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Insights
          </Link>
        </motion.div>

        <article>
          <motion.header initial="hidden" animate="visible" variants={fadeInUp} className="mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-black tracking-widest uppercase">
                {article.category}
              </span>
              <div className="flex items-center gap-4 text-sm font-bold text-gray-400 uppercase tracking-wider">
                <span className="flex items-center gap-1.5"><Calendar size={16} /> {article.date}</span>
                <span className="flex items-center gap-1.5"><Clock size={16} /> {article.readTime}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 tracking-tight leading-[1.1]">
              {article.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed mb-8">
              {article.excerpt}
            </p>

            {/* Author / Share row */}
            <div className="flex items-center justify-between py-6 border-y border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  HA
                </div>
                <div>
                  <p className="font-bold text-gray-900">Hashim Associates</p>
                  <p className="text-sm font-medium text-gray-500">Investment Advisory Team</p>
                </div>
              </div>
              <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-200 text-gray-500 hover:text-primary hover:border-primary transition-colors shadow-sm">
                <Share2 size={20} />
              </button>
            </div>
          </motion.header>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            {article.image ? (
              <div className="aspect-[21/9] w-full rounded-[3rem] overflow-hidden mb-12 shadow-xl relative">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="aspect-[21/9] w-full rounded-[3rem] overflow-hidden mb-12 shadow-xl bg-gradient-to-br from-primary-light/20 to-primary-dark/20 relative">
                 <div className="absolute inset-0 flex items-center justify-center text-primary/40">
                    <Building2 size={64} className="opacity-50" />
                 </div>
              </div>
            )}

            <div className="prose prose-lg md:prose-xl max-w-none text-gray-600 font-medium leading-relaxed prose-headings:font-black prose-headings:tracking-tight prose-headings:text-gray-900">
              <p>
                {article.content} 
                <br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <h3>The IEP Town Advantage</h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <blockquote>
                "The real estate market in IEP Engineers Town is currently offering unprecedented ROI for early investors."
              </blockquote>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </motion.div>

        </article>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp}
          className="mt-16 p-10 bg-white rounded-[3rem] shadow-sm border border-gray-100 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-[40px] -z-10"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] -z-10"></div>
          <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">Need expert advice on this topic?</h3>
          <p className="text-gray-500 font-medium mb-8 max-w-xl mx-auto">
            Our senior advisors are ready to discuss how this insight applies to your specific investment strategy.
          </p>
          <Link to="/contact" className="btn-primary px-8 py-4 text-lg rounded-2xl shadow-lg shadow-primary/20 hover:shadow-primary/40 inline-flex">
            Book a Private Consultation
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default BlogDetail;
