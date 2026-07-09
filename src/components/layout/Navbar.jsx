import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Building2 } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'Insights', path: '/blogs' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  const isHome = location.pathname === '/';

  // Dynamic header styling for premium feel
  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
  }`;

  const textClasses = isScrolled ? 'text-gray-900' : 'text-white';
  const logoSubClasses = isScrolled ? 'text-secondary' : 'text-gray-300';

  return (
    <header className={headerClasses}>
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className={`p-2.5 rounded-xl transition-colors ${isScrolled || !isHome ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
              <Building2 size={28} />
            </div>
            <div>
              <h1 className={`font-bold text-2xl md:text-3xl leading-none tracking-tight ${textClasses}`}>
                Hashim Associates
              </h1>
              <p className={`text-xs font-bold uppercase tracking-[0.2em] mt-1.5 ${logoSubClasses}`}>
                IEP Town Specialists
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            <ul className="flex gap-10">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`font-semibold text-base transition-colors ${
                      isActive(link.path) 
                        ? (isScrolled ? 'text-primary' : 'text-white') 
                        : (isScrolled ? 'text-gray-500 hover:text-primary' : 'text-gray-300 hover:text-white')
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <a href="tel:+923135779479" className={`flex items-center gap-2 text-base font-bold px-8 py-3.5 rounded-full transition-all hover:scale-105 ${isScrolled ? 'bg-primary text-white hover:bg-primary-dark shadow-md' : 'bg-white text-primary hover:bg-gray-100'}`}>
              <Phone size={20} />
              <span>Call Now</span>
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 ${textClasses}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl mt-0 px-4 py-6 border-t border-gray-100 animate-fade-in-up">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-xl font-bold ${
                    isActive(link.path) ? 'text-primary' : 'text-gray-800'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="pt-6 border-t border-gray-100 mt-2">
              <a 
                href="tel:+923135779479"
                className="btn-primary w-full flex justify-center items-center gap-2 py-4 rounded-xl text-lg"
              >
                <Phone size={20} />
                <span>Call +92 313 5779479</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
