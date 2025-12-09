import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Globe, ArrowRight, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { NAV_ITEMS } from '../constants';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangMenuOpen(false);
  };

  const currentLang = i18n.language === 'zh' ? '中文' : 'EN';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4 text-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <img
              src={!scrolled ? "/Hengkang-Webpage/assets/images/logo_light_v2.png" : "/Hengkang-Webpage/assets/images/logo_dark_v2.png"}
              alt="Hengkang Technology"
              className="h-12 w-auto transition-all duration-300"
            />
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
                {t(`nav.${item.labelKey}`)}
              </NavLink>
            ))}
          </div>

          {/* Utilities */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className={`flex items-center gap-1 text-xs font-semibold ${scrolled ? 'text-slate-600' : 'text-white'} hover:opacity-80 transition-opacity`}
              >
                <Globe size={16} /> {currentLang} <ChevronDown size={14} />
              </button>
              {langMenuOpen && (
                <div className="absolute top-full mt-2 right-0 bg-white shadow-lg rounded-sm overflow-hidden min-w-[100px]">
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-purple-50 ${i18n.language === 'en' ? 'bg-purple-100 text-purple-700 font-bold' : 'text-slate-700'}`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => changeLanguage('zh')}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-purple-50 ${i18n.language === 'zh' ? 'bg-purple-100 text-purple-700 font-bold' : 'text-slate-700'}`}
                  >
                    中文
                  </button>
                </div>
              )}
            </div>
            <button
              onClick={() => navigate('/contact')}
              className={`px-5 py-2 text-sm font-semibold transition-all ${scrolled
                ? 'bg-blue-900 text-white hover:bg-blue-800'
                : 'bg-white text-blue-900 hover:bg-gray-100'
                }`}>
              {t('nav.contactUs')}
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
                {t(`nav.${item.labelKey}`)}
              </NavLink>
            ))}
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => changeLanguage('en')}
                className={`flex-1 py-2 text-sm font-semibold ${i18n.language === 'en' ? 'bg-purple-600 text-white' : 'bg-slate-200 text-slate-700'}`}
              >
                English
              </button>
              <button
                onClick={() => changeLanguage('zh')}
                className={`flex-1 py-2 text-sm font-semibold ${i18n.language === 'zh' ? 'bg-purple-600 text-white' : 'bg-slate-200 text-slate-700'}`}
              >
                中文
              </button>
            </div>
            <button
              onClick={() => {
                navigate('/contact');
                setIsOpen(false);
              }}
              className="mt-8 w-full py-4 bg-blue-900 text-white font-bold text-lg">
              {t('nav.contactUs')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1">
          <img
            src="/Hengkang-Webpage/assets/images/logo_light_v2.png"
            alt="Hengkang Technology"
            className="h-14 w-auto mb-4"
          />
          <p className="text-slate-400 text-sm leading-relaxed">
            {t('footer.tagline')}<br />
            {t('footer.description')}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-6">{t('footer.markets')}</h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li><a href="#" className="hover:text-purple-400">{t('footer.animalNutrition')}</a></li>
            <li><a href="#" className="hover:text-purple-400">{t('footer.pharmaceuticals')}</a></li>
            <li><a href="#" className="hover:text-purple-400">{t('footer.construction')}</a></li>
            <li><a href="#" className="hover:text-purple-400">{t('footer.additives')}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-6">{t('footer.company')}</h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li><a href="#" className="hover:text-purple-400">{t('footer.aboutUs')}</a></li>
            <li><a href="#" className="hover:text-purple-400">{t('footer.sustainability')}</a></li>
            <li><a href="#" className="hover:text-purple-400">{t('footer.careers')}</a></li>
            <li><a href="#" className="hover:text-purple-400">{t('footer.press')}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-6">{t('footer.contactUs')}</h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex flex-col">
              <span className="text-slate-500 text-xs">{t('footer.salesDept')}</span>
              <span className="hover:text-purple-400">0951-8533386</span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate-500 text-xs">{t('footer.purchasingDept')}</span>
              <span className="hover:text-purple-400">0951-8533357</span>
            </li>
            <li className="flex flex-col">
              <span className="text-slate-500 text-xs">{t('footer.recruitment')}</span>
              <span className="hover:text-purple-400">0951-8533356</span>
            </li>
            <li className="mt-4 text-xs leading-relaxed text-slate-400 whitespace-pre-line">
              {t('footer.address')}
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-xs text-slate-500 flex justify-between">
        <p>{t('footer.copyright')}</p>
        <div className="flex space-x-6">
          <a href="#">{t('footer.privacyPolicy')}</a>
          <a href="#">{t('footer.termsOfUse')}</a>
          <a href="#">{t('footer.imprint')}</a>
        </div>
      </div>
    </footer>
  );
};

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