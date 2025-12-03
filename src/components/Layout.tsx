import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Globe, ArrowRight, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4 text-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className={`w-8 h-8 ${scrolled ? 'bg-blue-900' : 'bg-white'} rounded-sm`}></div>
            <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              HENGKANG
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-colors ${isActive
                    ? 'text-purple-600 font-bold'
                    : scrolled ? 'text-slate-600 hover:text-purple-600' : 'text-white/90 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Utilities */}
          <div className="hidden md:flex items-center space-x-4">
            <button className={`flex items-center gap-1 text-xs font-semibold ${scrolled ? 'text-slate-600' : 'text-white'}`}>
              <Globe size={16} /> EN
            </button>
            <button className={`px-5 py-2 text-sm font-semibold transition-all ${scrolled
                ? 'bg-blue-900 text-white hover:bg-blue-800'
                : 'bg-white text-blue-900 hover:bg-gray-100'
              }`}>
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`${scrolled ? 'text-slate-900' : 'text-white'}`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full h-screen top-0 left-0 pt-20 px-6">
          <div className="flex flex-col space-y-6">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-light text-slate-800 border-b border-gray-100 pb-2"
              >
                {item.label}
              </NavLink>
            ))}
            <button className="mt-8 w-full py-4 bg-blue-900 text-white font-bold text-lg">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-white py-16">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1">
        <h3 className="text-2xl font-bold mb-4">HENGKANG</h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          Leading Beyond Chemistry.<br />
          Innovating for a sustainable future through advanced specialty chemicals and materials.
        </p>
      </div>

      <div>
        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-6">Markets</h4>
        <ul className="space-y-3 text-sm text-slate-300">
          <li><a href="#" className="hover:text-purple-400">Animal Nutrition</a></li>
          <li><a href="#" className="hover:text-purple-400">Pharmaceuticals</a></li>
          <li><a href="#" className="hover:text-purple-400">Construction & Infrastructure</a></li>
          <li><a href="#" className="hover:text-purple-400">Additives</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-6">Company</h4>
        <ul className="space-y-3 text-sm text-slate-300">
          <li><a href="#" className="hover:text-purple-400">About Us</a></li>
          <li><a href="#" className="hover:text-purple-400">Sustainability</a></li>
          <li><a href="#" className="hover:text-purple-400">Careers</a></li>
          <li><a href="#" className="hover:text-purple-400">Press</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-6">Contact Us</h4>
        <ul className="space-y-3 text-sm text-slate-300">
          <li className="flex flex-col">
            <span className="text-slate-500 text-xs">Sales Dept.</span>
            <span className="hover:text-purple-400">0951-8533386</span>
          </li>
          <li className="flex flex-col">
            <span className="text-slate-500 text-xs">Purchasing Dept.</span>
            <span className="hover:text-purple-400">0951-8533357</span>
          </li>
          <li className="flex flex-col">
            <span className="text-slate-500 text-xs">Recruitment</span>
            <span className="hover:text-purple-400">0951-8533356</span>
          </li>
          <li className="mt-4 text-xs leading-relaxed text-slate-400">
            Hongsheng East Road,<br />
            Yinchuan Biological Technology Park,<br />
            Ningxia, China
          </li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-xs text-slate-500 flex justify-between">
      <p>&copy; 2025 Ningxia Hengkang Technology Co., Ltd. All rights reserved.</p>
      <div className="flex space-x-6">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <a href="#">Imprint</a>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};